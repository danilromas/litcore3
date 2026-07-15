import { TELEGRAM_URL } from '../config/site';
import type { Lang } from '../config/site';

/** Навигация шапки — состав ЗАФИКСИРОВАН в kit/KIT-README.md. Не добавлять пункты «от себя». */
export const NAV: Record<Lang, { label: string; href: string }[]> = {
  es: [
    { label: 'Automatización', href: '/es/servicios/automatizacion/' },
    { label: 'Servicios', href: '/es/servicios/' },
    { label: 'Sectores', href: '/es/soluciones/' },
    { label: 'Demos', href: '/es/demos/' },
    { label: 'Precios', href: '/es/precios/' },
    { label: 'Contacto', href: '/es/contacto/' },
  ],
  ru: [
    { label: 'Автоматизация', href: '/ru/uslugi/avtomatizaciya/' },
    { label: 'Услуги', href: '/ru/uslugi/' },
    { label: 'Отрасли', href: '/ru/resheniya/' },
    { label: 'Для поставщиков', href: '/ru/dlya-postavshchikov/' }, // пункт 1-го уровня!
    { label: 'Демо', href: '/ru/demo/' },
    { label: 'Цены', href: '/ru/tseny/' },
    { label: 'Контакты', href: '/ru/kontakty/' },
  ],
  en: [
    { label: 'AI documents', href: '/en/services/ai-documents/' },
    { label: 'Pricing', href: '/en/pricing/' },
    { label: 'Contact', href: '/en/contact/' },
  ],
};

/** CTA шапки: ES/EN — предложение, RU — Telegram (KIT-README). */
export const HEADER_CTA: Record<Lang, { label: string; href: string }> = {
  es: { label: 'Pedir propuesta', href: '/es/contacto/' },
  ru: { label: 'Обсудить в Telegram', href: TELEGRAM_URL }, // TODO: подтвердить Telegram-аккаунт
  en: { label: 'Book a call', href: '/en/contact/' },
};

export const HOME_HREF: Record<Lang, string> = { es: '/es/', ru: '/ru/', en: '/en/' };

export const SKIP_LINK: Record<Lang, string> = {
  es: 'Saltar al contenido',
  ru: 'Перейти к содержимому',
  en: 'Skip to content',
};

/** Комплаенс-плашка футера — тексты ЗАФИКСИРОВАНЫ (DESIGN-SYSTEM §5.12). Не сокращать. */
export const COMPLIANCE: Record<Lang, string> = {
  es: 'Con IA — supervisado por humanos · AI Act art. 50 · GDPR',
  ru: 'С ИИ — под контролем человека · AI Act ст. 50 · GDPR',
  en: 'AI-assisted — human-supervised · AI Act art. 50 · GDPR',
};

/**
 * Бейдж «Вы общаетесь с ИИ» — для БУДУЩЕГО живого чат-бота/демо (AI Act art. 50(1),
 * применяется с 02.08.2026; G1 аудита). Показывать В САМОМ интерфейсе бота в момент
 * взаимодействия (не только в футере). Тексты согласованы с /es/uso-de-ia/.
 */
export const AI_BADGE: Record<Lang, string> = {
  es: 'Estás hablando con IA · AI Act art. 50',
  ru: 'Вы общаетесь с ИИ · AI Act ст. 50',
  en: 'You are talking to AI · AI Act art. 50',
};

export const NAV_ARIA: Record<Lang, { main: string; lang: string; crumbs: string }> = {
  es: { main: 'Principal', lang: 'Idioma', crumbs: 'Migas de pan' },
  ru: { main: 'Основная навигация', lang: 'Язык', crumbs: 'Хлебные крошки' },
  en: { main: 'Main', lang: 'Language', crumbs: 'Breadcrumbs' },
};
