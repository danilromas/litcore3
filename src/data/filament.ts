/**
 * «Филамент» — данные узлов графа (spec graph/filament-spec.md §3).
 * Единый источник для React-острова (FilamentGraph.tsx), статического
 * мобильного аккордеона и светлого грида «Todos los sectores» (Filament.astro).
 *
 * ES-тексты «боль → выгода» — ВЕРБАТИМ из прототипа graph/filament.html (#fil-acc).
 * RU — из таблиц spec §3 (у отраслей RU-текста боли в спеке нет — поле опционально,
 * тексты не выдумываем).
 */

export type FilamentRing = 'sol' | 'ind';

export type FilamentLang = 'es' | 'ru' | 'en';

export interface FilamentNode {
  id: string;
  ring: FilamentRing;
  label: { es: string; ru: string; en: string };
  /** mono-метка карточки, напр. «Solución · Bots» / «Cuello de botella · Integraciones» */
  tag: string;
  /** 1–2 строки «боль → выгода» */
  pain: { es: string; ru?: string; en?: string };
  href: string;
  /** для отраслей: id решений, к которым идут рёбра; у решений пусто (ребро к ядру строится всегда) */
  links: string[];
  /** мотив Голдратта: ровно один узел на граф (spec §5) */
  bottleneck?: true;
}

/** Текст узла с фолбэком на ES (для отраслей без RU/EN боли в спеке). */
export function filamentText(
  field: { es: string; ru?: string; en?: string },
  lang: FilamentLang,
): string {
  return field[lang] ?? field.es;
}

/** Внутреннее кольцо — 6 решений (rx 24% / ry 28%, шаг 60°, старт −90°). */
export const SOLUTIONS: FilamentNode[] = [
  {
    id: 's1',
    ring: 'sol',
    label: { es: 'Recepción 24/7', ru: 'Бот-ресепшн 24/7', en: 'Reception 24/7' },
    tag: 'Solución · Bots',
    pain: {
      es: 'Las llamadas fuera de horario y los WhatsApp sin responder son citas que se van a la competencia. Un bot-recepción atiende, responde y agenda 24/7: más reservas con el mismo equipo.',
      ru: 'звонки/WhatsApp вне часов теряются → бот отвечает и записывает 24/7, больше броней тем же штатом',
    },
    href: '/es/servicios/chatbot-ia/',
    links: [],
  },
  {
    id: 's2',
    ring: 'sol',
    label: { es: 'Leads sin fugas', ru: 'Лиды без потерь', en: 'Leads without leaks' },
    tag: 'Solución · Asistentes IA',
    pain: {
      es: 'Un lead que espera horas ya compró en otro sitio. Respuesta al minuto y seguimiento automático: más ventas del mismo tráfico, sin ampliar plantilla.',
      ru: 'лид остывает за часы → ответ за минуту + автоследование, больше продаж с того же трафика',
    },
    href: '/es/servicios/asistentes-ia/',
    links: [],
  },
  {
    id: 's3',
    ring: 'sol',
    label: { es: 'Presupuestos en minutos', ru: 'Сметы/КП за минуты', en: 'Quotes in minutes' },
    tag: 'Solución · Documentos IA',
    pain: {
      es: 'Cada presupuesto roba horas — y firma el que responde primero. Presupuestos y ofertas listos en minutos: más obras cerradas, tardes libres.',
      ru: 'смета съедает часы, подписывает быстрейший → КП en minutos, больше сделок, свободные вечера',
    },
    href: '/es/servicios/documentos-ia/',
    links: [],
  },
  {
    // «Узкое место» (Голдратт, spec §5): тусклый узел с пульс-кольцом, «разжигается» кликом.
    id: 's4',
    ring: 'sol',
    label: { es: 'Facturas sin teclear', ru: 'Счета без ручного ввода', en: 'Invoices without typing' },
    tag: 'Cuello de botella · Integraciones',
    pain: {
      es: 'Teclear facturas a mano: horas perdidas y errores caros cada mes. Los datos se extraen y se registran solos — el cuello de botella deja de frenar el dinero.',
      ru: 'ручной ввод счетов = часы и дорогие ошибки → данные извлекаются и регистрируются сами',
    },
    href: '/es/servicios/integraciones-rpa/',
    links: [],
    bottleneck: true,
  },
  {
    id: 's5',
    ring: 'sol',
    label: { es: 'Orden en ventas — CRM', ru: 'CRM-порядок в продажах', en: 'Sales order — CRM' },
    tag: 'Solución · CRM',
    pain: {
      es: 'Clientes apuntados en libretas y chats: se pierden ventas sin que nadie lo vea. Un CRM al día muestra cada oportunidad — nada se olvida, todo se cobra.',
      ru: 'клиенты в блокнотах/чатах, продажи теряются незаметно → CRM показывает каждую сделку',
    },
    href: '/es/servicios/software-gestion/',
    links: [],
  },
  {
    id: 's6',
    ring: 'sol',
    label: { es: 'Fábrica de contenido', ru: 'Контент-фабрика', en: 'Content factory' },
    tag: 'Solución · Contenido',
    pain: {
      es: 'Publicar cada semana se come el día del dueño — o no se publica. Contenido constante en varios idiomas, revisado por humanos: presencia sin contratar a nadie.',
      ru: 'публикации съедают день владельца → постоянный контент на языках, с человеческой проверкой',
    },
    href: '/es/servicios/gestion-contenido/',
    links: [],
  },
];

/** Внешнее кольцо — 8 отраслей (rx 42% / ry 41%, шаг 45°, старт −67.5°). */
export const INDUSTRIES: FilamentNode[] = [
  {
    id: 'i1',
    ring: 'ind',
    label: { es: 'Clínicas', ru: 'Клиники', en: 'Clinics' },
    tag: 'Sector · Clínicas',
    pain: {
      es: 'Agenda con huecos y teléfono que no para: el bot da cita, recuerda y reduce ausencias — más pacientes atendidos con el mismo equipo.',
    },
    href: '/es/soluciones/clinicas/',
    links: ['s1', 's5'],
  },
  {
    id: 'i2',
    ring: 'ind',
    label: { es: 'Inmobiliarias', ru: 'Недвижимость', en: 'Real estate' },
    tag: 'Sector · Inmobiliarias',
    pain: {
      es: 'El lead del portal se enfría en minutos. Respuesta instantánea y visitas agendadas solas: más operaciones del mismo anuncio.',
    },
    href: '/es/soluciones/inmobiliarias/',
    links: ['s2', 's5'],
  },
  {
    id: 'i3',
    ring: 'ind',
    label: { es: 'Gestorías', ru: 'Бухгалтерии', en: 'Accountancies' },
    tag: 'Sector · Gestorías',
    pain: {
      es: 'Montañas de facturas y documentos de clientes. Se procesan y registran solos: más clientes con el mismo equipo, menos horas extra.',
    },
    href: '/es/soluciones/gestorias/',
    links: ['s4', 's3'],
  },
  {
    id: 'i4',
    ring: 'ind',
    label: { es: 'Construcción', ru: 'Стройка', en: 'Construction' },
    tag: 'Sector · Construcción',
    pain: {
      es: 'Presupuestos que tardan días pierden obras. En minutos, con tus precios: firmas antes que la competencia.',
    },
    href: '/es/soluciones/construccion/',
    links: ['s3', 's4'],
  },
  {
    id: 'i5',
    ring: 'ind',
    label: { es: 'Restaurantes', ru: 'Рестораны', en: 'Restaurants' },
    tag: 'Sector · Restaurantes',
    pain: {
      es: 'Reservas que llegan en pleno servicio y se pierden. El bot atiende llamadas y WhatsApp 24/7: mesas llenas sin colgar a nadie.',
    },
    href: '/es/soluciones/restaurantes/',
    links: ['s1'],
  },
  {
    id: 'i6',
    ring: 'ind',
    label: { es: 'Hoteles', ru: 'Отели', en: 'Hotels' },
    tag: 'Sector · Hoteles',
    pain: {
      es: 'Huéspedes que preguntan a medianoche y en cinco idiomas. Respuesta al momento, siempre: mejores reseñas, más reservas directas.',
    },
    href: '/es/soluciones/hoteles/',
    links: ['s1', 's6'],
  },
  {
    id: 'i7',
    ring: 'ind',
    label: { es: 'Relocation', ru: 'Релокейт-услуги', en: 'Relocation' },
    tag: 'Sector · Relocation',
    pain: {
      es: 'Clientes que escriben a cualquier hora — y en ruso. El bot responde en su idioma y ordena cada solicitud: más contratos sin ahogarse en chats.',
    },
    href: '/es/soluciones/relocation/',
    links: ['s2', 's1'],
  },
  {
    id: 'i8',
    ring: 'ind',
    label: { es: 'Ecommerce', ru: 'E-commerce', en: 'Ecommerce' },
    tag: 'Sector · Ecommerce',
    pain: {
      es: 'Fichas de producto y preguntas de clientes sin fin. Catálogo y soporte en piloto automático: vendes mientras duermes.',
    },
    href: '/es/soluciones/ecommerce/',
    links: ['s6', 's4'],
  },
];

/** Все узлы графа. Порядок = порядок Tab (6 решений → 8 отраслей, spec §7). */
export const FILAMENT_NODES: FilamentNode[] = [...SOLUTIONS, ...INDUSTRIES];

/**
 * Светлый грид «Todos los sectores» под секцией (SEO / параллельная навигация,
 * spec §8): все 12 отраслей SPEC-V2 §4 + catch-all «otros-sectores» + хаб услуг.
 * URL — по SPEC-V2 §6, метки ES — как в прототипе.
 */
export interface SectorGridLink {
  label: string;
  href: string;
}

export const SECTOR_GRID: SectorGridLink[] = [
  { label: 'Clínicas', href: '/es/soluciones/clinicas/' },
  { label: 'Inmobiliarias', href: '/es/soluciones/inmobiliarias/' },
  { label: 'Abogados', href: '/es/soluciones/abogados/' },
  { label: 'Hoteles', href: '/es/soluciones/hoteles/' },
  { label: 'Restaurantes', href: '/es/soluciones/restaurantes/' },
  { label: 'Ecommerce', href: '/es/soluciones/ecommerce/' },
  { label: 'Logística', href: '/es/soluciones/logistica/' },
  { label: 'Educación', href: '/es/soluciones/educacion/' },
  { label: 'Gestorías', href: '/es/soluciones/gestorias/' },
  { label: 'Construcción', href: '/es/soluciones/construccion/' },
  { label: 'Belleza', href: '/es/soluciones/belleza/' },
  { label: 'Relocation', href: '/es/soluciones/relocation/' },
  { label: 'Otros sectores', href: '/es/soluciones/otros-sectores/' },
  { label: 'Todos los servicios', href: '/es/servicios/' },
];
