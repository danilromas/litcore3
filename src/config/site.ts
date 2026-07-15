/**
 * litcore.ai — конфиг сайта. Все «пробелы» из docs/VERIFICATION.md живут здесь,
 * НЕ в разметке. Реквизиты владельца подтверждены (доработка по аудиту, 10.07.2026).
 */

/** Домен подтверждён владельцем. Синхронизирован с astro.config.mjs `site`. */
export const SITE_URL = 'https://litcore.ai';

/** Telegram подтверждён владельцем: litcore_ai. */
export const TELEGRAM_URL = 'https://t.me/litcore_ai';

/** WhatsApp подтверждён владельцем: +34 683 156 921. */
export const WHATSAPP_URL: string | null = 'https://wa.me/34683156921';

/**
 * Endpoint формы контактов: Cloudflare Pages Function (functions/api/contact.ts),
 * обработка в инфраструктуре Cloudflare (EU-US DPF + SCC — раскрыто в Privacidad).
 * Секреты (Turnstile, адрес доставки) — в env Cloudflare Pages, НЕ в репо.
 */
export const FORM_ENDPOINT: string | null = '/api/contact';

/**
 * Ключ сайта Cloudflare Turnstile (публичный, безопасен в клиенте).
 * TODO(владелец): создать виджет Turnstile в панели Cloudflare и задать
 * PUBLIC_TURNSTILE_SITE_KEY в env сборки Cloudflare Pages. Пока ключа нет —
 * виджет не рендерится, форма работает без него (honeypot + серверная валидация).
 */
export const TURNSTILE_SITE_KEY: string | null =
  (import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as string | undefined) ?? null;

/**
 * Реквизиты владельца (автономо). Публикуются в Aviso Legal — этого требует
 * LSSI art. 10 (публичная идентификация владельца сайта). Не класть в логи/URL.
 */
export const OWNER = {
  /** Titular (автономо) */
  name: 'OLHA CHERKASHYNA',
  displayName: 'Olha Cherkashyna',
  nif: 'Z4377364D',
  address: 'Calle Los Eucaliptos 10, Urbanización Soto de Llanera, 33423, Asturias, España',
  email: 'hola@litcore.ai', // TODO(владелец): создать ящик через Cloudflare Email Routing
  phone: '+34 683 156 921',
  phoneHref: 'tel:+34683156921',
} as const;

export const ORG = {
  name: 'litcore.ai',
  legalName: OWNER.name,
  region: 'Asturias, España',
  languages: ['es', 'ru', 'en'],
} as const;

export type Lang = 'es' | 'ru' | 'en';
export const LOCALES: Record<Lang, string> = { es: 'es-ES', ru: 'ru-RU', en: 'en' };

/** Дата публикации правовых страниц (единая точка правды). */
export const LEGAL_UPDATED = '2026-07-10';
export const LEGAL_UPDATED_HUMAN: Record<Lang, string> = {
  es: '10 de julio de 2026',
  ru: '10 июля 2026',
  en: '10 July 2026',
};
