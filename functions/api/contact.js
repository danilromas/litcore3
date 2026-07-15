/**
 * Cloudflare Pages Function: POST /api/contact — обработчик формы контактов.
 * Закрывает H3/B8 аудита: серверная валидация + Cloudflare Turnstile + обработка
 * в инфраструктуре Cloudflare (трансграничная передача раскрыта в Privacidad:
 * EU-US DPF + SCC; DPA с Cloudflare — human TODO, см. README §Форма).
 *
 * ENV (Cloudflare Pages → Settings → Environment variables):
 * - TURNSTILE_SECRET_KEY  — секрет Turnstile (создать виджет в панели Cloudflare).
 *                           Не задан → проверка Turnstile пропускается (honeypot остаётся).
 * - CONTACT_TO            — адрес доставки (по умолчанию hola@litcore.ai).
 * - FORM_FORWARD_ENDPOINT — (опция) URL стороннего EU-провайдера формы (напр. Formspree EU).
 *                           Перед включением — подписать DPA (art. 28 RGPD) и вписать
 *                           провайдера в Política de Privacidad §5.
 * Binding (опция, приоритетный канал доставки):
 * - SEND_EMAIL — Email Workers binding (Cloudflare Email Routing, destination =
 *   подтверждённый ящик владельца). Настраивается в Pages → Settings → Bindings.
 *
 * Приватность: PII не пишем в логи и не кладём в URL (redirect без параметров).
 */

const THANKS = {
  es: '/es/gracias/',
  ru: '/ru/spasibo/',
  en: '/en/thanks/',
};

const MAX = { nombre: 200, contact: 320, proceso: 5000 };

function fail(status, message) {
  return new Response(JSON.stringify({ ok: false, error: message }), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

/** Мини-MIME (text/plain, UTF-8, quoted headers) — без зависимостей. */
function buildMime(from, to, subject, body) {
  const b64 = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));
  const encSubject = `=?UTF-8?B?${b64(subject)}?=`;
  return [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${encSubject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
    '',
    b64(body),
  ].join('\r\n');
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let form;
  try {
    form = await request.formData();
  } catch {
    return fail(400, 'bad request');
  }

  const lang = ['es', 'ru', 'en'].includes(form.get('lang')) ? form.get('lang') : 'es';

  // 1) Honeypot: боты заполняют скрытое поле — люди нет.
  const honeypot = (form.get('empresa_web') || '').toString();
  if (honeypot.trim() !== '') {
    // Отвечаем «успехом» (на языке формы), чтобы не подсказывать боту.
    return Response.redirect(new URL(THANKS[lang], request.url).href, 303);
  }

  // 2) Серверная валидация (H3): обязательные поля, длины, формат.
  const nombre = (form.get('nombre') || '').toString().trim();
  // ES/EN: name="email"; RU: name="contacto" (email или Telegram).
  const contact = (form.get('email') || form.get('contacto') || '').toString().trim();
  const proceso = (form.get('proceso') || '').toString().trim();
  const privacidad = form.get('privacidad');

  if (!nombre || nombre.length > MAX.nombre) return fail(422, 'invalid name');
  if (!contact || contact.length > MAX.contact) return fail(422, 'invalid contact');
  if (form.has('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
    return fail(422, 'invalid email');
  }
  if (proceso.length > MAX.proceso) return fail(422, 'message too long');
  if (!privacidad) return fail(422, 'privacy consent required');

  // 3) Cloudflare Turnstile (если настроен секрет).
  if (env.TURNSTILE_SECRET_KEY) {
    const token = (form.get('cf-turnstile-response') || '').toString();
    if (!token) return fail(403, 'turnstile token missing');
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    });
    const outcome = await verify.json();
    if (!outcome.success) return fail(403, 'turnstile verification failed');
  }

  // 4) Доставка. Приоритет: Email Workers binding → EU-провайдер из ENV.
  const to = env.CONTACT_TO || 'hola@litcore.ai';
  const body = [
    `Nueva solicitud del formulario litcore.ai (${lang.toUpperCase()})`,
    '',
    `Nombre: ${nombre}`,
    `Contacto: ${contact}`,
    `Proceso: ${proceso || '—'}`,
    '',
    `Consentimiento de privacidad: sí (casilla marcada)`,
    `Fecha: ${new Date().toISOString()}`,
  ].join('\n');

  try {
    if (env.SEND_EMAIL) {
      const { EmailMessage } = await import('cloudflare:email');
      const raw = buildMime(`no-reply@litcore.ai`, to, `Solicitud web — ${nombre}`, body);
      await env.SEND_EMAIL.send(new EmailMessage('no-reply@litcore.ai', to, raw));
    } else if (env.FORM_FORWARD_ENDPOINT) {
      const res = await fetch(env.FORM_FORWARD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ nombre, contact, proceso, lang }),
      });
      if (!res.ok) throw new Error(`forward failed: ${res.status}`);
    } else {
      // Доставка не настроена (human TODO): honeste — 503, без потери данных втихую.
      return fail(503, 'form delivery not configured');
    }
  } catch (err) {
    console.error('contact form delivery error:', err && err.message ? err.message : 'unknown');
    return fail(502, 'delivery error');
  }

  // 5) Redirect на страницу благодарности — без PII в URL (H3).
  return Response.redirect(new URL(THANKS[lang], request.url).href, 303);
}
