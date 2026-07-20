import type { Lang } from '../config/site';

/**
 * Карта маршрутов и языковых альтернатив — из «Инвентарь страниц v2 (page_inventory).tsv».
 * ЕДИНСТВЕННЫЙ источник alternates для Layout. EN — Фаза 2 (заглушки).
 */
export const ROUTES: Record<string, Partial<Record<Lang, string>>> = {
  home: { es: '/es/', ru: '/ru/', en: '/en/' }, // P02/P03/P04
  'documentos-ia': {
    es: '/es/servicios/documentos-ia/',
    ru: '/ru/uslugi/dokumenty-ii/',
    en: '/en/services/ai-documents/',
  }, // P12
  clinicas: { es: '/es/soluciones/clinicas/', ru: '/ru/resheniya/medicina/' }, // P24
  // Хаб отраслей + направление «Строительство и ремонт» (маркетплейс, Промт B 14.07.2026).
  // Под-страницы услуг направления получают alternates из data/sectores/construccion.ts.
  sectores: { es: '/es/soluciones/', ru: '/ru/resheniya/', en: '/en/solutions/' },
  construccion: {
    es: '/es/soluciones/construccion/',
    ru: '/ru/resheniya/stroitelstvo/',
    en: '/en/solutions/construction/',
  },
  proveedores: { es: '/es/para-proveedores/', ru: '/ru/dlya-postavshchikov/' }, // P07
  precios: { es: '/es/precios/', ru: '/ru/tseny/', en: '/en/pricing/' }, // P22
  contacto: { es: '/es/contacto/', ru: '/ru/kontakty/', en: '/en/contact/' }, // P45
  about: { en: '/en/about/' }, // EN collaboration / how we work
  // Правовые страницы (доработка по аудиту 10.07.2026: A1–A3, B1, C5, E1).
  'aviso-legal': {
    es: '/es/aviso-legal/',
    ru: '/ru/pravovaya-informaciya/',
    en: '/en/legal-notice/',
  },
  privacidad: {
    es: '/es/privacidad/',
    ru: '/ru/politika-konfidencialnosti/',
    en: '/en/privacy/',
  },
  cookies: { es: '/es/cookies/', ru: '/ru/cookie/', en: '/en/cookies/' },
  terminos: { es: '/es/terminos/', ru: '/ru/usloviya/', en: '/en/terms/' },
};
