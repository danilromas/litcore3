import type { Lang } from '../config/site';
import { SECTOR_GRID, type SectorGridLink } from './filament';

/** UI-строки секции Filament — одинаковый опыт, разный язык. */
export const FILAMENT_UI = {
  es: {
    aria: 'El Filamento: mapa interactivo de sectores y soluciones',
    solutions: 'Soluciones',
    sectors: 'Sectores',
    goSolution: 'Ir a la solución →',
    goSector: 'Ver el sector →',
    legendSol: 'Soluciones',
    legendInd: 'Sectores',
    legendDim: 'Cuello de botella',
    plaque: 'Con IA — supervisado por humanos · AI Act art. 50',
    navKicker: 'Navegación clásica',
    navH2: 'Todos los sectores',
    navAria: 'Sectores',
    hint: 'Anillo interior — soluciones. Anillo exterior — sectores. Pulsa un nodo para ver el dolor y el beneficio. Hay un nodo apagado: el cuello de botella. Tócalo.',
    phTag: 'El Filamento',
    phH3: 'Tu proceso → nuestra automatización → resultado',
    phText:
      'Pulsa un nodo del mapa: verás el dolor, el beneficio en dinero y tiempo, y el enlace a la solución. Navegable con teclado: Tab, Enter, Esc.',
    close: 'Cerrar ficha',
    mapAria: 'Mapa de nodos: soluciones y sectores',
    bottleneckSuffix: ' — cuello de botella.',
    nodeHint: ' Ver dolor y beneficio',
  },
  ru: {
    aria: 'Филамент: интерактивная карта отраслей и решений',
    solutions: 'Решения',
    sectors: 'Отрасли',
    goSolution: 'К решению →',
    goSector: 'К отрасли →',
    legendSol: 'Решения',
    legendInd: 'Отрасли',
    legendDim: 'Узкое место',
    plaque: 'С ИИ — под контролем людей · AI Act ст. 50',
    navKicker: 'Классическая навигация',
    navH2: 'Все отрасли',
    navAria: 'Отрасли',
    hint: 'Внутреннее кольцо — решения. Внешнее — отрасли. Нажмите узел, чтобы увидеть боль и выгоду. Есть погасший узел — узкое место. Коснитесь его.',
    phTag: 'Филамент',
    phH3: 'Ваш процесс → наша автоматизация → результат',
    phText:
      'Нажмите узел на карте: увидите боль, выгоду во времени и деньгах и ссылку на решение. Клавиатура: Tab, Enter, Esc.',
    close: 'Закрыть карточку',
    mapAria: 'Карта узлов: решения и отрасли',
    bottleneckSuffix: ' — узкое место.',
    nodeHint: ' Смотреть боль и выгоду',
  },
  en: {
    aria: 'Filament: interactive map of industries and solutions',
    solutions: 'Solutions',
    sectors: 'Industries',
    goSolution: 'Go to solution →',
    goSector: 'View industry →',
    legendSol: 'Solutions',
    legendInd: 'Industries',
    legendDim: 'Bottleneck',
    plaque: 'AI-powered — human-supervised · AI Act art. 50',
    navKicker: 'Classic navigation',
    navH2: 'All industries',
    navAria: 'Industries',
    hint: 'Inner ring — solutions. Outer ring — industries. Tap a node for pain → benefit. One node is dim: the bottleneck. Touch it.',
    phTag: 'Filament',
    phH3: 'Your process → our automation → result',
    phText:
      'Tap a node on the map to see the pain, the benefit in time and money, and a link to the solution. Keyboard: Tab, Enter, Esc.',
    close: 'Close card',
    mapAria: 'Node map: solutions and industries',
    bottleneckSuffix: ' — bottleneck.',
    nodeHint: ' View pain and benefit',
  },
} as const;

/** ES→локализованный href для узлов Filament (известные пары из inventory). */
const HREF_MAP: Record<string, Partial<Record<Lang, string>>> = {
  '/es/servicios/chatbot-ia/': { ru: '/ru/uslugi/chat-bot/', en: '/en/services/chatbots/' },
  '/es/servicios/asistentes-ia/': { ru: '/ru/uslugi/ii-assistenty/', en: '/en/services/ai-assistants/' },
  '/es/servicios/documentos-ia/': { ru: '/ru/uslugi/dokumenty-ii/', en: '/en/services/ai-documents/' },
  '/es/servicios/integraciones-rpa/': { ru: '/ru/uslugi/integracii-rpa/', en: '/en/services/integrations-rpa/' },
  '/es/servicios/software-gestion/': { ru: '/ru/uslugi/biznes-soft/', en: '/en/services/business-software/' },
  '/es/servicios/gestion-contenido/': { ru: '/ru/uslugi/vedenie-kontenta/', en: '/en/services/content-management/' },
  '/es/soluciones/clinicas/': { ru: '/ru/resheniya/medicina/', en: '/en/solutions/' },
  '/es/soluciones/inmobiliarias/': { ru: '/ru/resheniya/nedvizhimost/', en: '/en/solutions/real-estate/' },
  '/es/soluciones/gestorias/': { ru: '/ru/resheniya/buhgalteriya/', en: '/en/solutions/' },
  '/es/soluciones/construccion/': { ru: '/ru/resheniya/stroitelstvo/', en: '/en/solutions/construction/' },
  '/es/soluciones/restaurantes/': { ru: '/ru/resheniya/', en: '/en/solutions/' },
  '/es/soluciones/hoteles/': { ru: '/ru/resheniya/oteli/', en: '/en/solutions/' },
  '/es/soluciones/relocation/': { ru: '/ru/resheniya/relokaciya/', en: '/en/solutions/relocation/' },
  '/es/soluciones/ecommerce/': { ru: '/ru/resheniya/ecommerce/', en: '/en/solutions/ecommerce/' },
  '/es/soluciones/': { ru: '/ru/resheniya/', en: '/en/solutions/' },
  '/es/servicios/': { ru: '/ru/uslugi/', en: '/en/services/' },
};

export function localizeHref(esHref: string, lang: Lang): string {
  if (lang === 'es') return esHref;
  return HREF_MAP[esHref]?.[lang] ?? HREF_MAP['/es/soluciones/']?.[lang] ?? esHref;
}

const SECTOR_GRID_I18N: Record<Lang, SectorGridLink[]> = {
  es: SECTOR_GRID,
  ru: [
    { label: 'Медицина', href: '/ru/resheniya/medicina/' },
    { label: 'Недвижимость', href: '/ru/resheniya/nedvizhimost/' },
    { label: 'Юристы', href: '/ru/resheniya/yuristy/' },
    { label: 'Отели', href: '/ru/resheniya/oteli/' },
    { label: 'E-commerce', href: '/ru/resheniya/ecommerce/' },
    { label: 'Образование', href: '/ru/resheniya/obrazovanie/' },
    { label: 'Бухгалтерия', href: '/ru/resheniya/buhgalteriya/' },
    { label: 'Строительство', href: '/ru/resheniya/stroitelstvo/' },
    { label: 'Релокация', href: '/ru/resheniya/relokaciya/' },
    { label: 'Другие отрасли', href: '/ru/resheniya/drugie-otrasli/' },
    { label: 'Все услуги', href: '/ru/uslugi/' },
  ],
  en: [
    { label: 'Real estate', href: '/en/solutions/real-estate/' },
    { label: 'Legal', href: '/en/solutions/legal/' },
    { label: 'Ecommerce', href: '/en/solutions/ecommerce/' },
    { label: 'Construction', href: '/en/solutions/construction/' },
    { label: 'Relocation', href: '/en/solutions/relocation/' },
    { label: 'Other industries', href: '/en/solutions/other-industries/' },
    { label: 'All services', href: '/en/services/' },
  ],
};

export function sectorGridFor(lang: Lang): SectorGridLink[] {
  return SECTOR_GRID_I18N[lang] ?? SECTOR_GRID;
}
