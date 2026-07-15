/**
 * Копи страницы контактов (P45). НЕ хардкодить эти тексты в разметке страниц.
 *
 * - ES: вербатим из design-pack/pages/contacto.html (source of truth);
 *   SEO title/description — из content/contacto/es.md (frontmatter).
 * - RU: из content/contacto/ru.md — Telegram первичен, форма вторична.
 * - EN: заглушка Фазы 2 из content/contacto/en.md — book a call первичен.
 *
 * Пробелы (WhatsApp, endpoint формы, календарь EN) живут в src/config/site.ts как TODO.
 */
import { TELEGRAM_URL } from '../config/site';

export const CONTACTO = {
  /* ============================== ES ============================== */
  es: {
    seo: {
      title: 'Contacto — presupuesto de automatización | litcore.ai',
      description:
        'Cuéntanos tu proceso: te proponemos la automatización y el presupuesto. Formulario breve, WhatsApp o Telegram. Respondemos en español, ruso e inglés.',
    },
    crumbs: [
      { label: 'Inicio', href: '/es/' },
      { label: 'Contacto' },
    ],
    hero: {
      h1Html: 'Cuéntanos tu <span class="accent-word">cuello de botella.</span>',
      lead: 'Dinos qué proceso te quita más tiempo — volvemos con un plan de automatización y un presupuesto orientativo. Sin compromiso y sin jerga.',
    },
    form: {
      h2: 'Escríbenos',
      intro: 'Solo tres campos. Nada de DNI ni datos sensibles — minimizamos lo que pedimos.',
      honeypotLabel: 'No rellenar',
      fields: {
        name: { label: 'Nombre', name: 'nombre' },
        email: { label: 'Email', name: 'email' },
        process: {
          label: '¿Qué proceso te quita más tiempo?',
          name: 'proceso',
          placeholder: 'Ej.: contestar los mismos mensajes cada día, pasar pedidos a mano, hacer presupuestos…',
        },
      },
      privacyHtml:
        'He leído y acepto la <a href="/es/privacidad/">política de privacidad</a>. Usamos tus datos solo para responder a esta consulta.',
      submit: 'Enviar',
    },
    channels: [
      {
        id: 'whatsapp',
        mono: 'WhatsApp',
        h3: 'Para empresas locales',
        text: 'Escríbenos y seguimos la conversación donde ya trabajas.',
        cta: { label: 'Abrir WhatsApp', kind: 'whatsapp' as const },
      },
      {
        id: 'telegram',
        mono: 'Telegram',
        h3: 'Пишите по-русски',
        text: 'Обсудим вашу задачу в Telegram — отвечаем по-русски, покажем демо прямо в чате.',
        cta: { label: 'Написать в Telegram', kind: 'telegram' as const },
      },
      {
        id: 'email',
        mono: 'Email',
        h3: 'hola@litcore.ai',
        text: 'Para briefings largos, adjuntos y todo lo demás.',
        cta: { label: 'Escribir email', kind: 'email' as const },
      },
    ],
    channelsNote: 'Respondemos en ES / RU / EN · en horario laboral CET',
  },

  /* ============================== RU ============================== */
  ru: {
    seo: {
      title: 'Контакты — написать в Telegram | litcore.ai',
      description:
        'Напишите в Telegram или оставьте короткую заявку: обсудим ваш процесс и предложим автоматизацию с расчётом. Отвечаем по-русски.',
    },
    crumbs: [
      { label: 'Главная', href: '/ru/' },
      { label: 'Контакты' },
    ],
    hero: {
      h1Html: 'Расскажите, где <span class="accent-word">узкое место.</span>',
      lead: 'Опишите процесс, который съедает больше всего времени, — вернёмся с планом автоматизации и ориентировочным расчётом. По-русски, без обязательств.',
    },
    // Telegram — первичный канал (contacto/ru.md), форма вторична
    channels: [
      {
        id: 'telegram',
        mono: 'Telegram · первичный канал',
        h3: 'Напишите нам',
        text: 'Обсудим задачу, покажем демо прямо в чате.',
        hint: 'Можно сразу коротко: «Здравствуйте, интересует бот-ресепшн для клиники в Хихоне».',
        cta: { label: 'Написать в Telegram', kind: 'telegram' as const, primary: true },
      },
      {
        id: 'whatsapp',
        mono: 'WhatsApp',
        h3: 'Привычнее WhatsApp?',
        text: 'Если вам привычнее WhatsApp — мы там тоже отвечаем.',
        cta: { label: 'Открыть WhatsApp', kind: 'whatsapp' as const },
      },
      {
        id: 'email',
        mono: 'Email',
        h3: 'hola@litcore.ai',
        text: 'Для длинных описаний и вложений.',
        cta: { label: 'Написать письмо', kind: 'email' as const },
      },
    ],
    channelsNote: 'Отвечаем на RU / ES / EN · в рабочие часы CET',
    form: {
      h2: 'Не любите мессенджеры?',
      intro: 'Три поля — и мы напишем вам сами. Никаких DNI и чувствительных данных.',
      honeypotLabel: 'Не заполнять',
      fields: {
        name: { label: 'Имя', name: 'nombre' },
        email: { label: 'Email или Telegram', name: 'contacto' },
        process: { label: 'Какой процесс съедает больше всего времени?', name: 'proceso' },
      },
      privacyHtml:
        'Я прочитал(а) и принимаю <a href="/ru/politika-konfidencialnosti/">политику конфиденциальности</a>. Данные используем только для ответа на заявку.',
      submit: 'Отправить',
    },
    microCtaHtml: 'Пока ждёте ответ — <a href="/ru/demo/">посмотрите демо →</a>',
  },

  /* ============================== EN (заглушка Фазы 2) ============================== */
  en: {
    seo: {
      title: 'Contact — book a discovery call | litcore.ai',
      description:
        "Tell us about your process and we'll come back with an automation plan and an indicative budget. Book a discovery call. We reply in EN, ES and RU.",
    },
    crumbs: [
      { label: 'Home', href: '/en/' },
      { label: 'Contact' },
    ],
    hero: {
      h1Html: 'Tell us where the <span class="accent-word">bottleneck</span> is.',
      lead: "Describe the process that costs your team the most time — we'll come back with an automation plan and an indicative budget. No commitment, no jargon.",
    },
    channels: [
      {
        id: 'call',
        mono: 'Discovery call',
        h3: 'A 30-minute call',
        text: 'Your process, our proposal, a clear next step.',
        cta: { label: 'Book a discovery call', kind: 'calendar' as const, primary: true },
      },
      {
        id: 'email',
        mono: 'Email',
        h3: 'hola@litcore.ai',
        text: 'For briefs, attachments and procurement questions.',
        cta: { label: 'Write an email', kind: 'email' as const },
      },
    ],
    channelsNote: 'We reply in EN / ES / RU · business hours CET',
    form: {
      h2: 'Write to us',
      intro: 'Three fields. No sensitive data — we collect the minimum.',
      honeypotLabel: 'Do not fill',
      fields: {
        name: { label: 'Name', name: 'nombre' },
        email: { label: 'Work email', name: 'email', type: 'email' as const },
        process: { label: 'Which process costs you the most time?', name: 'proceso' },
      },
      privacyHtml:
        'I have read and accept the <a href="/en/privacy/">privacy policy</a>. Your data is used only to answer this enquiry.',
      submit: 'Send',
    },
  },
};

/** Email из макетов (contacto.html) */
export const CONTACT_EMAIL = 'hola@litcore.ai';
export { TELEGRAM_URL };
