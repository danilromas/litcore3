import type { Lang } from '../config/site';

/**
 * Единый источник фактов нижнего ряда hero (trust strip).
 * Правки только здесь — ES/RU/EN подтягивают локализованные подписи.
 * Формат: ровно 4 коротких атома в один ряд.
 */
export type TrustStrip = {
  aria: string;
  items: readonly [string, string, string, string];
};

export const TRUST_STRIP: Record<Lang, TrustStrip> = {
  es: {
    aria: 'Dónde y cómo trabajamos',
    items: ['Asturias · Norte', 'ES / RU / EN', 'GDPR · AI Act', 'Ciclo completo'],
  },
  ru: {
    aria: 'Где и как работаем',
    items: ['Астурия · Испания', 'RU / ES / EN', 'GDPR · AI Act', 'Под ключ'],
  },
  en: {
    aria: 'Where and how we work',
    items: ['Spain · EU', 'EN / ES / RU', 'GDPR · AI Act', 'Full cycle'],
  },
};
