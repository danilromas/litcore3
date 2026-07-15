/**
 * Лендинг-маркетплейс «Строительство и ремонт» — копи страницы по языкам.
 * Источник 1:1: «Направления/Строительство/Строительство — каталог услуг (Промт A).md»
 * (согласованный каталог, 14.07.2026). Цены и составы НЕ менять без согласования.
 * Рыночные обоснования из каталога — внутренние, на сайт НЕ выносятся.
 */
import { TELEGRAM_URL, WHATSAPP_URL } from '../../config/site';
import type { Lang } from '../../config/site';

export interface Cta {
  label: string;
  href: string;
}
export interface Crumb {
  label: string;
  href?: string;
}

/** Пути лендинга направления по языкам (используются в ROUTES и hreflang). */
export const SECTOR_PATHS: Record<Lang, string> = {
  es: '/es/soluciones/construccion/',
  ru: '/ru/resheniya/stroitelstvo/',
  en: '/en/solutions/construction/',
};

/** Пути хаба «Отрасли/Sectores» по языкам. */
export const HUB_PATHS: Record<Lang, string> = {
  es: '/es/soluciones/',
  ru: '/ru/resheniya/',
  en: '/en/solutions/',
};

const CONTACT: Record<Lang, string> = {
  es: '/es/contacto/',
  ru: '/ru/kontakty/',
  en: '/en/contact/',
};

/** Общие строки UI маркетплейса (карточки, под-страницы услуг). */
export const SECTOR_UI: Record<
  Lang,
  {
    detailsCta: string;
    fromLabel: string;
    blockBBadge: string;
    painLabel: string;
    makeLabel: string;
    resultLabel: string;
    includesH: string;
    techH: string;
    limitsH: string;
    tiersH: string;
    processH: string;
    timelineLabel: string;
    slaLabel: string;
    qualityH: string;
    backToSector: string;
    contactCta: string;
    messengerCta: Cta;
    tierCta: string;
    priceIvaNote: string;
    otherServicesH: string;
    /** Редизайн карточки (14.07): «Закрываем процесс», кнопка, схема, результат */
    closesLabel: string;
    closesH: string;
    wasLabel: string;
    willLabel: string;
    howH: string;
    flowIn: string;
    flowAi: string;
    flowOut: string;
    resultH: string;
    detailsBtn: string;
  }
> = {
  es: {
    detailsCta: 'Ver detalles y precio',
    fromLabel: 'desde',
    blockBBadge: 'En todos los sectores',
    painLabel: 'Dolor',
    makeLabel: 'Qué hacemos',
    resultLabel: 'Resultado',
    includesH: 'Qué incluye',
    techH: 'Tecnología — sin exagerar',
    limitsH: 'Límites, en claro',
    tiersH: 'Planes y precios',
    processH: 'Cómo lo implantamos',
    timelineLabel: 'Plazo',
    slaLabel: 'SLA',
    qualityH: 'Cómo probamos, acompañamos y formamos',
    backToSector: '← Todas las soluciones para la obra',
    contactCta: 'Pedir propuesta',
    messengerCta: { label: 'Hablar por WhatsApp', href: WHATSAPP_URL ?? CONTACT.es },
    tierCta: 'Pedir propuesta',
    priceIvaNote: 'Precios orientativos «desde», IVA no incluido. Modelo: setup (una vez) + suscripción de soporte.',
    otherServicesH: 'Otras soluciones del sector',
    closesLabel: 'Cerramos el proceso',
    closesH: 'Qué proceso cerramos',
    wasLabel: 'Ahora — a mano',
    willLabel: 'Qué hacemos nosotros',
    howH: 'Cómo funciona',
    flowIn: 'Entrada',
    flowAi: 'IA · automatización',
    flowOut: 'Salida',
    resultH: 'Resultado — medible',
    detailsBtn: 'Ver más',
  },
  ru: {
    detailsCta: 'Состав и цена',
    fromLabel: 'от',
    blockBBadge: 'На каждом направлении',
    painLabel: 'Боль',
    makeLabel: 'Что делаем',
    resultLabel: 'Результат',
    includesH: 'Что входит',
    techH: 'Технологии — без завышения',
    limitsH: 'Ограничения честно',
    tiersH: 'Тарифы и цены',
    processH: 'Как внедряем',
    timelineLabel: 'Срок',
    slaLabel: 'SLA',
    qualityH: 'Как тестируем, сопровождаем и обучаем',
    backToSector: '← Все решения для стройки',
    contactCta: 'Оставить заявку',
    messengerCta: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    tierCta: 'Обсудить',
    priceIvaNote: 'Цены ориентировочные «от», без IVA (НДС). Модель: setup (разово) + подписка на сопровождение.',
    otherServicesH: 'Другие решения направления',
    closesLabel: 'Закрываем процесс',
    closesH: 'Какой процесс закрываем',
    wasLabel: 'Сейчас — руками',
    willLabel: 'Что делаем мы',
    howH: 'Как это работает',
    flowIn: 'Вход',
    flowAi: 'ИИ · автоматизация',
    flowOut: 'Выход',
    resultH: 'Результат — измеримо',
    detailsBtn: 'Подробнее',
  },
  en: {
    detailsCta: 'Details & price',
    fromLabel: 'from',
    blockBBadge: 'In every sector',
    painLabel: 'Pain',
    makeLabel: 'What we do',
    resultLabel: 'Result',
    includesH: "What's included",
    techH: 'Technology — no overselling',
    limitsH: 'Limits, honestly',
    tiersH: 'Plans & pricing',
    processH: 'How we implement it',
    timelineLabel: 'Timeline',
    slaLabel: 'SLA',
    qualityH: 'How we test, support and train',
    backToSector: '← All construction solutions',
    contactCta: 'Request a proposal',
    messengerCta: { label: 'Chat on WhatsApp', href: WHATSAPP_URL ?? CONTACT.en },
    tierCta: 'Request a proposal',
    priceIvaNote: 'Indicative "from" prices, VAT (IVA) not included. Model: one-off setup + support subscription.',
    otherServicesH: 'Other solutions in this sector',
    closesLabel: 'We close the process',
    closesH: 'The process we close',
    wasLabel: 'Today — by hand',
    willLabel: 'What we do',
    howH: 'How it works',
    flowIn: 'Input',
    flowAi: 'AI · automation',
    flowOut: 'Output',
    resultH: 'Result — measurable',
    detailsBtn: 'Details',
  },
};

/** Строка сводной таблицы цен (цифры — строго из каталога). */
export interface PriceRow {
  serviceId: string;
  name: string;
  start: string;
  pro: string;
  medida: string;
}

export interface SectorLandingCopy {
  seo: { title: string; description: string };
  crumbs: Crumb[];
  crumbsSchema: { name: string; path: string }[];
  hero: {
    kicker: string;
    h1Pre: string;
    h1Accent: string;
    lead: string;
    badges: string[];
    ctaPrimary: Cta;
    ctaSecondary: Cta;
  };
  gridA: { kicker: string; h2: string; lead: string };
  gridB: { kicker: string; h2: string; lead: string };
  how: {
    kicker: string;
    h2: string;
    steps: { title: string; text: string }[];
    slaNote: string;
  };
  demo: {
    badge: string;
    h2: string;
    lead: string;
    items: string[];
    disclaimer: string;
    cta: Cta;
  };
  bundles: {
    kicker: string;
    h2: string;
    lead: string;
    plans: {
      plan: string;
      price: string;
      cur?: string;
      note: string;
      items: string[];
      featured?: boolean;
    }[];
    kitDigitalNote: string;
    recommendLabel: string;
  };
  priceTable: {
    kicker: string;
    h2: string;
    cols: { service: string; start: string; pro: string; medida: string };
    rows: PriceRow[];
    note: string;
  };
  faq: { kicker: string; h2: string; items: { q: string; a: string }[] };
  ctaBand: { h2Pre: string; h2Accent: string; primary: Cta; ghost: Cta };
  schemaService: { name: string; serviceType: string; description: string };
}

/* =========================================================================
   ES
   ========================================================================= */
const ES: SectorLandingCopy = {
  seo: {
    title: 'IA para construcción y reformas en España — 14 servicios | litcore.ai',
    description:
      'Tienda de soluciones IA para constructoras y reformistas: presupuestos por capítulos, propuestas, bot de solicitudes 24/7, control de obra por fotos, CTE/LOE con citas. Done-for-you en ES/RU, sobre normativa española. Setup + soporte.',
  },
  crumbs: [{ label: 'SECTORES', href: HUB_PATHS.es }, { label: 'CONSTRUCCIÓN Y REFORMAS' }],
  crumbsSchema: [
    { name: 'Sectores', path: HUB_PATHS.es },
    { name: 'Construcción y reformas', path: SECTOR_PATHS.es },
  ],
  hero: {
    kicker: 'Sector · Construcción y reformas',
    h1Pre: 'La tienda de soluciones IA ',
    h1Accent: 'para la obra.',
    lead:
      'Presupuestos, propuestas, solicitudes, control de obra: 14 servicios listos que configuramos para su equipo — con sus plantillas, sobre la normativa española (IVA 10/21 %, PEM/PEC, CTE) — y acompañamos después. Usted construye; la rutina, la IA.',
    badges: ['Done-for-you: lo montamos nosotros', 'ES + RU', 'Normativa española', 'Setup + soporte'],
    ctaPrimary: { label: 'Pedir propuesta', href: CONTACT.es },
    ctaSecondary: { label: 'Ver demo de 15 min', href: '#demo' },
  },
  gridA: {
    kicker: 'Servicios para la obra',
    h2: 'Elija su solución',
    lead:
      'Nueve servicios específicos de construcción y reformas. Cada tarjeta se abre: dentro — qué incluye, el proceso, plazos y el precio «desde».',
  },
  gridB: {
    kicker: 'Servicios transversales',
    h2: 'Lo que todo negocio necesita',
    lead:
      'Cinco servicios que ofrecemos en todos los sectores: puesto de trabajo con IA, reuniones, infraestructura, CRM en Telegram y webs.',
  },
  how: {
    kicker: 'Método',
    h2: 'Cómo implantamos y acompañamos',
    steps: [
      { title: 'Auditoría', text: '0,5–1 día: sus procesos, plantillas y herramientas; elegimos qué automatizar primero.' },
      { title: 'Configuración', text: '2–7 días: montamos el servicio a su medida — plantillas, idiomas, integraciones.' },
      { title: 'Prueba', text: 'Verificación con sus obras y documentos reales, hasta cero desviaciones.' },
      { title: 'Lanzamiento', text: 'Formación del equipo (1–2 h) y entrega de instrucciones.' },
      { title: 'Acompañamiento', text: 'Soporte con SLA, actualizaciones y mejoras continuas.' },
    ],
    slaNote: 'SLA: respuesta ≤ 1 día laborable · en planes Pro ≤ 4 h',
  },
  demo: {
    badge: 'Demo · 15 minutos',
    h2: 'Se lo enseñamos con datos reales',
    lead: 'Una demo corta, sin compromiso:',
    items: [
      'Presupuesto de un baño de 6 m² en ~10 minutos (№1)',
      'Propuesta con su marca, en el idioma del cliente, con un clic (№2)',
      'Una factura PDF real de proveedor → a tabla (№6)',
      'Diálogo con el bot cualificador de solicitudes en ES y RU (№7)',
    ],
    disclaimer:
      'Aceleramos el borrador y la rutina: el presupuesto final y cualquier proyecto sujeto a CTE/LOE los firma su técnico — no sustituimos al profesional colegiado.',
    cta: { label: 'Reservar la demo', href: CONTACT.es },
  },
  bundles: {
    kicker: 'Paquetes',
    h2: 'Más barato en paquete',
    lead: 'Combinaciones probadas de servicios; el precio final se cierra tras la auditoría.',
    recommendLabel: 'Recomendado',
    plans: [
      {
        plan: 'Start «Presupuestos»',
        price: 'desde 990',
        cur: '€',
        note: '+ 59 €/mes · entrada rápida',
        items: ['Generador de presupuestos (№1)', 'Generador de propuestas (№2)'],
      },
      {
        plan: 'Business «Obra bajo control»',
        price: 'desde 3 900',
        cur: '€',
        note: '+ 199 €/mes · ciclo completo',
        items: [
          'Presupuestos (№1) y propuestas (№2)',
          'Bot de solicitudes + seguimiento (№7)',
          'Cronograma y control de avance (№3)',
          'Control de obra por fotos (№4)',
        ],
        featured: true,
      },
      {
        plan: 'Núcleo · a medida',
        price: 'a medida',
        note: 'todo el catálogo + integraciones + SLA',
        items: ['Los 14 servicios a elegir', 'Integraciones con su CRM y contabilidad', 'SLA prioritario'],
      },
      {
        plan: '«Arranque del negocio»',
        price: 'desde 1 500',
        cur: '€',
        note: 'fundamento digital en ~2 semanas',
        items: ['Infraestructura TI (№12)', 'Landing + promoción (№14)', 'CRM en Telegram (№13)', 'Opción Kit Digital*'],
      },
    ],
    kitDigitalNote:
      '* Kit Digital: podemos actuar como agente digitalizador y parte del coste la cubre la subvención («sitio web» 500–2 000 €, «CRM» 2 000–15 000 €). El estado de las convocatorias es variable — lo comprobamos en sede.red.gob.es antes de empezar, no lo prometemos por adelantado.',
  },
  priceTable: {
    kicker: 'Resumen de precios',
    h2: 'Todo el catálogo de un vistazo',
    cols: { service: 'Servicio', start: 'Start', pro: 'Pro', medida: 'A medida' },
    rows: [
      { serviceId: 'presupuestos', name: '1 · Generador de presupuestos', start: 'desde 690 € + 39 €/mes', pro: 'desde 1 490 € + 79 €/mes', medida: 'a consultar' },
      { serviceId: 'propuestas', name: '2 · Generador de propuestas', start: 'desde 390 € + 25 €/mes', pro: 'desde 890 € + 49 €/mes', medida: 'renders opc. desde 490 €' },
      { serviceId: 'cronograma', name: '3 · Cronograma + control de avance', start: 'desde 690 € + 39 €/mes', pro: 'desde 1 690 € + 89 €/mes', medida: 'a consultar' },
      { serviceId: 'fotocontrol', name: '4 · Control de obra por fotos', start: 'desde 590 € + 49 €/mes', pro: 'desde 1 490 € + 99 €/mes', medida: 'a consultar' },
      { serviceId: 'normas', name: '5 · Verificación CTE/LOE', start: '—', pro: 'desde 2 490 € + 149 €/mes', medida: 'desde 4 900 € + 290 €/mes' },
      { serviceId: 'facturas', name: '6 · Extracción de facturas (+archivo)', start: 'desde 590 € + 0,15 €/doc', pro: 'desde 1 490 € + paquete', medida: 'archivo desde 490 €' },
      { serviceId: 'bot-solicitudes', name: '7 · Bot de solicitudes RU+ES + seguimiento', start: 'desde 690 € + 49 €/mes', pro: 'desde 1 690 € + 129 €/mes', medida: 'a consultar' },
      { serviceId: 'precios-materiales', name: '8 · Monitor de precios de materiales', start: 'desde 490 € + 39 €/mes', pro: 'desde 990 € + 69 €/mes', medida: '—' },
      { serviceId: 'calculadora', name: '9 · Calculadora web (lead magnet)', start: 'desde 590 € + 29 €/mes', pro: 'desde 1 290 € + 59 €/mes', medida: '+ API según tráfico' },
      { serviceId: 'cowork', name: '10 · Configuramos Claude / Cowork', start: 'desde 390 €', pro: 'desde 1 490 €', medida: 'abono desde 190 €/mes' },
      { serviceId: 'reuniones', name: '11 · Asistente de reuniones + tareas', start: 'desde 690 € + 49 €/mes', pro: 'desde 1 690 € + 129 €/mes', medida: 'a consultar' },
      { serviceId: 'infraestructura', name: '12 · Infraestructura TI del proyecto', start: 'desde 390 €', pro: 'desde 990 €', medida: '+Kit Digital / abono desde 50 €/mes' },
      { serviceId: 'telegram-crm', name: '13 · CRM en Telegram', start: 'desde 690 € + 49 €/mes', pro: 'desde 1 690 € + 99 €/mes', medida: 'a consultar' },
      { serviceId: 'webs', name: '14 · Webs + promoción', start: 'landing desde 700 €', pro: 'web desde 1 800 € · tienda desde 3 500 €', medida: 'SEO desde 600 €/mes · Ads desde 350 €/mes' },
    ],
    note: SECTOR_UI.es.priceIvaNote,
  },
  faq: {
    kicker: 'FAQ',
    h2: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Esto sustituye a mi arquitecto/aparejador?',
        a: 'No. Las herramientas agilizan el borrador y la rutina; el proyecto final y el visado según CTE/LOE los hace un técnico colegiado.',
      },
      {
        q: '¿Los presupuestos son exactos?',
        a: 'Son orientativos hasta la visita y la medición; el resultado siempre lo revisa una persona antes de enviarlo al cliente.',
      },
      {
        q: '¿Mis datos están seguros?',
        a: 'Firmamos un contrato de encargado de tratamiento (DPA, art. 28 RGPD) antes de tratar datos reales; algunas funciones no están cubiertas por Zero Data Retention — lo advertimos y lo configuramos de forma segura.',
      },
      {
        q: '¿Necesito WhatsApp Business?',
        a: 'Para el canal de WhatsApp sí, a través de un proveedor de WhatsApp Business API (Claude no tiene WhatsApp «nativo»); Telegram es más sencillo.',
      },
      {
        q: '¿En qué idioma funciona todo?',
        a: 'En español, ruso e inglés — paridad completa.',
      },
      {
        q: '¿Cuánto hay que esperar?',
        a: 'Normalmente 1–2 semanas por servicio; los paquetes, según lo acordado.',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Empecemos por una demo de ',
    h2Accent: '15 minutos.',
    primary: { label: 'Pedir propuesta', href: CONTACT.es },
    ghost: { label: 'Hablar por WhatsApp', href: WHATSAPP_URL ?? CONTACT.es },
  },
  schemaService: {
    name: 'Automatización con IA para construcción y reformas',
    serviceType: 'Automatización de procesos con IA para constructoras y reformistas',
    description:
      'Catálogo de 14 servicios done-for-you: presupuestos por capítulos con IVA correcto, propuestas, cronogramas, control de obra por fotos, verificación CTE/LOE con citas, bot de solicitudes ES/RU, CRM en Telegram y más. Setup + soporte, en español y ruso.',
  },
};

/* =========================================================================
   RU
   ========================================================================= */
const RU: SectorLandingCopy = {
  seo: {
    title: 'ИИ для стройки и ремонта в Испании — 14 услуг | litcore.ai',
    description:
      'Магазин ИИ-решений для строительных бригад: сметы по капитулос с верным IVA, КП, бот заявок 24/7 на RU и ES, фото-контроль объекта, проверка CTE/LOE со ссылками. Настраиваем под вас и сопровождаем. Setup + подписка.',
  },
  crumbs: [{ label: 'ОТРАСЛИ', href: HUB_PATHS.ru }, { label: 'СТРОИТЕЛЬСТВО И РЕМОНТ' }],
  crumbsSchema: [
    { name: 'Отрасли', path: HUB_PATHS.ru },
    { name: 'Строительство и ремонт', path: SECTOR_PATHS.ru },
  ],
  hero: {
    kicker: 'Направление · Строительство и ремонт',
    h1Pre: 'Магазин ИИ-решений ',
    h1Accent: 'для стройки.',
    lead:
      'Сметы, КП, заявки, контроль объекта — 14 готовых услуг, которые мы настраиваем под вашу бригаду: на ваших шаблонах, на испанской нормативной базе (IVA 10/21 %, PEM/PEC, CTE), на русском и испанском. Вы строите — рутину берёт ИИ.',
    badges: ['Done-for-you: настраиваем мы', 'RU + ES', 'Испанская нормативная база', 'Setup + сопровождение'],
    ctaPrimary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    ctaSecondary: { label: 'Демо за 15 минут', href: '#demo' },
  },
  gridA: {
    kicker: 'Услуги под стройку',
    h2: 'Выберите решение под свою боль',
    lead:
      'Девять услуг, собранных именно под строительство и ремонт. Каждая карточка открывается: внутри — что входит, процесс, сроки и цена «от».',
  },
  gridB: {
    kicker: 'Сквозные услуги',
    h2: 'Это нужно каждому бизнесу',
    lead:
      'Пять услуг, которые мы делаем на каждом направлении: ИИ-рабочее место, совещания, ИТ-инфраструктура, CRM в Telegram и сайты.',
  },
  how: {
    kicker: 'Метод',
    h2: 'Как внедряем и сопровождаем',
    steps: [
      { title: 'Аудит', text: '0,5–1 день: ваши процессы, шаблоны и инструменты; выбираем, что автоматизировать первым.' },
      { title: 'Настройка', text: '2–7 дней: собираем услугу под вас — шаблоны, языки, интеграции.' },
      { title: 'Тест', text: 'Проверяем на ваших реальных объектах и документах — до нуля расхождений.' },
      { title: 'Запуск', text: 'Обучение команды (1–2 часа), передача инструкций.' },
      { title: 'Сопровождение', text: 'Поддержка по SLA, обновления и доработки.' },
    ],
    slaNote: 'SLA: ответ ≤ 1 раб. дня · на тарифах Pro ≤ 4 ч',
  },
  demo: {
    badge: 'Демо · 15 минут',
    h2: 'Покажем на реальных данных',
    lead: 'Короткое демо без обязательств:',
    items: [
      'Смета ванной 6 м² за ~10 минут (№1)',
      'КП с вашим брендом на языке клиента одним кликом (№2)',
      'Реальный PDF-счёт поставщика → в таблицу (№6)',
      'Диалог с ботом-квалификатором заявок на RU и ES (№7)',
    ],
    disclaimer:
      'Мы ускоряем черновую подготовку и рутину: финальную смету и любой проект по CTE/LOE подписывает ваш técnico — мы не заменяем лицензированного специалиста.',
    cta: { label: 'Записаться на демо', href: CONTACT.ru },
  },
  bundles: {
    kicker: 'Пакеты',
    h2: 'Пакетом выгоднее',
    lead: 'Проверенные связки услуг; финальная цена — после короткого аудита.',
    recommendLabel: 'Рекомендуем',
    plans: [
      {
        plan: 'Старт «Presupuestos»',
        price: 'от 990',
        cur: '€',
        note: '+ 59 €/мес · быстрый вход',
        items: ['Генератор смет (№1)', 'Генератор КП (№2)'],
      },
      {
        plan: 'Бизнес «Obra bajo control»',
        price: 'от 3 900',
        cur: '€',
        note: '+ 199 €/мес · полный цикл',
        items: [
          'Сметы (№1) и КП (№2)',
          'Бот заявок + follow-up (№7)',
          'План-график и контроль хода (№3)',
          'Фото-контроль объекта (№4)',
        ],
        featured: true,
      },
      {
        plan: 'Ядро (Núcleo) · a medida',
        price: 'a medida',
        note: 'весь каталог + интеграции + SLA',
        items: ['Любые из 14 услуг', 'Интеграции с вашей CRM и учётом', 'Приоритетный SLA'],
      },
      {
        plan: '«Старт бизнеса»',
        price: 'от 1 500',
        cur: '€',
        note: 'цифровой фундамент за ~2 недели',
        items: ['ИТ-инфраструктура (№12)', 'Лендинг + продвижение (№14)', 'CRM в Telegram (№13)', 'Опция Kit Digital*'],
      },
    ],
    kitDigitalNote:
      '* Kit Digital: можем выступить как agente digitalizador — тогда часть работ оплачивает госсубсидия («sitio web» 500–2 000 €, «CRM» 2 000–15 000 €). Статус конвокаторий переменный — проверяем на sede.red.gob.es перед стартом, заранее не обещаем.',
  },
  priceTable: {
    kicker: 'Сводка цен',
    h2: 'Весь каталог одним взглядом',
    cols: { service: 'Услуга', start: 'Start', pro: 'Pro', medida: 'A medida' },
    rows: [
      { serviceId: 'presupuestos', name: '1 · Генератор смет', start: 'от 690 € + 39 €/мес', pro: 'от 1 490 € + 79 €/мес', medida: 'по запросу' },
      { serviceId: 'propuestas', name: '2 · Генератор КП', start: 'от 390 € + 25 €/мес', pro: 'от 890 € + 49 €/мес', medida: 'рендеры доп. от 490 €' },
      { serviceId: 'cronograma', name: '3 · План-график + контроль хода', start: 'от 690 € + 39 €/мес', pro: 'от 1 690 € + 89 €/мес', medida: 'по запросу' },
      { serviceId: 'fotocontrol', name: '4 · Контроль объекта по фото', start: 'от 590 € + 49 €/мес', pro: 'от 1 490 € + 99 €/мес', medida: 'по запросу' },
      { serviceId: 'normas', name: '5 · Проверка CTE/LOE', start: '—', pro: 'от 2 490 € + 149 €/мес', medida: 'от 4 900 € + 290 €/мес' },
      { serviceId: 'facturas', name: '6 · Разбор счетов (+архив)', start: 'от 590 € + 0,15 €/док', pro: 'от 1 490 € + пакет', medida: 'архив от 490 €' },
      { serviceId: 'bot-solicitudes', name: '7 · Бот заявок RU+ES + follow-up', start: 'от 690 € + 49 €/мес', pro: 'от 1 690 € + 129 €/мес', medida: 'по запросу' },
      { serviceId: 'precios-materiales', name: '8 · Мониторинг цен материалов', start: 'от 490 € + 39 €/мес', pro: 'от 990 € + 69 €/мес', medida: '—' },
      { serviceId: 'calculadora', name: '9 · Калькулятор на сайт', start: 'от 590 € + 29 €/мес', pro: 'от 1 290 € + 59 €/мес', medida: '+ оплата API по трафику' },
      { serviceId: 'cowork', name: '10 · Настроим Claude / Cowork', start: 'от 390 €', pro: 'от 1 490 €', medida: 'abono от 190 €/мес' },
      { serviceId: 'reuniones', name: '11 · Ассистент совещаний + задачи', start: 'от 690 € + 49 €/мес', pro: 'от 1 690 € + 129 €/мес', medida: 'по запросу' },
      { serviceId: 'infraestructura', name: '12 · ИТ-инфраструктура проекта', start: 'от 390 €', pro: 'от 990 €', medida: '+Kit Digital / abono от 50 €/мес' },
      { serviceId: 'telegram-crm', name: '13 · CRM на базе Telegram', start: 'от 690 € + 49 €/мес', pro: 'от 1 690 € + 99 €/мес', medida: 'по запросу' },
      { serviceId: 'webs', name: '14 · Сайты + продвижение', start: 'лендинг от 700 €', pro: 'сайт от 1 800 € · магазин от 3 500 €', medida: 'SEO от 600 €/мес · Ads от 350 €/мес' },
    ],
    note: SECTOR_UI.ru.priceIvaNote,
  },
  faq: {
    kicker: 'FAQ',
    h2: 'Частые вопросы',
    items: [
      {
        q: 'Это заменит моего arquitecto/aparejador?',
        a: 'Нет. Инструменты ускоряют черновую подготовку и рутину; финальный проект и визу по CTE/LOE делает лицензированный técnico.',
      },
      {
        q: 'Точные ли сметы?',
        a: 'Это ориентир до выезда и замера; итог всегда проверяет человек перед отправкой клиенту.',
      },
      {
        q: 'Мои данные в безопасности?',
        a: 'Оформляем договор обработки данных (DPA, ст. 28 GDPR) до передачи реальных данных; часть функций не покрыта Zero Data Retention — предупреждаем и настраиваем безопасно.',
      },
      {
        q: 'Нужен ли WhatsApp Business?',
        a: 'Для WhatsApp-канала — да, через провайдера WhatsApp Business API (у Claude нет «нативного» WhatsApp); Telegram проще.',
      },
      {
        q: 'На каком языке всё работает?',
        a: 'RU, ES и EN — полный паритет.',
      },
      {
        q: 'Сколько ждать?',
        a: 'Обычно 1–2 недели на услугу; пакеты — по согласованию.',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Начнём с демо на ',
    h2Accent: '15 минут.',
    primary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    ghost: { label: 'Оставить заявку', href: CONTACT.ru },
  },
  schemaService: {
    name: 'ИИ-автоматизация для строительства и ремонта',
    serviceType: 'Автоматизация процессов с ИИ для строительных компаний и бригад',
    description:
      'Каталог из 14 услуг done-for-you: сметы по капитулос с верным IVA, КП, план-графики, фото-контроль объекта, проверка CTE/LOE со ссылками, бот заявок RU/ES, CRM в Telegram и другое. Setup + сопровождение, на русском и испанском.',
  },
};

/* =========================================================================
   EN
   ========================================================================= */
const EN: SectorLandingCopy = {
  seo: {
    title: 'AI for construction & renovation in Spain — 14 services | litcore.ai',
    description:
      'A store of AI solutions for builders and renovation crews: by-chapter estimates with correct VAT, branded proposals, a 24/7 lead bot in ES/RU, photo-based site control, CTE/LOE checks with citations. Done-for-you setup + support.',
  },
  crumbs: [{ label: 'SOLUTIONS', href: HUB_PATHS.en }, { label: 'CONSTRUCTION & RENOVATION' }],
  crumbsSchema: [
    { name: 'Solutions', path: HUB_PATHS.en },
    { name: 'Construction & renovation', path: SECTOR_PATHS.en },
  ],
  hero: {
    kicker: 'Sector · Construction & renovation',
    h1Pre: 'The AI solutions store ',
    h1Accent: 'for construction.',
    lead:
      'Estimates, proposals, leads, site control: 14 ready services we configure for your crew — on your templates, on the Spanish regulatory base (VAT 10/21 %, PEM/PEC, CTE) — and support afterwards. You build; AI takes the routine.',
    badges: ['Done-for-you: we set it up', 'ES + RU', 'Spanish regulatory base', 'Setup + support'],
    ctaPrimary: { label: 'Request a proposal', href: CONTACT.en },
    ctaSecondary: { label: 'See the 15-min demo', href: '#demo' },
  },
  gridA: {
    kicker: 'Construction services',
    h2: 'Pick the solution for your pain',
    lead:
      'Nine services built specifically for construction and renovation. Every card opens: inside — what is included, the process, timelines and the "from" price.',
  },
  gridB: {
    kicker: 'Cross-sector services',
    h2: 'What every business needs',
    lead:
      'Five services we deliver in every sector: an AI workplace, meetings, IT infrastructure, a Telegram CRM and websites.',
  },
  how: {
    kicker: 'Method',
    h2: 'How we implement and support',
    steps: [
      { title: 'Audit', text: '0.5–1 day: your processes, templates and tools; we pick what to automate first.' },
      { title: 'Setup', text: '2–7 days: we build the service around you — templates, languages, integrations.' },
      { title: 'Test', text: 'Verified on your real projects and documents, down to zero discrepancies.' },
      { title: 'Launch', text: 'Team training (1–2 h) and handover of instructions.' },
      { title: 'Support', text: 'SLA-backed support, updates and improvements.' },
    ],
    slaNote: 'SLA: reply ≤ 1 business day · on Pro plans ≤ 4 h',
  },
  demo: {
    badge: 'Demo · 15 minutes',
    h2: 'We show it on real data',
    lead: 'A short, no-obligation demo:',
    items: [
      'An estimate for a 6 m² bathroom in ~10 minutes (№1)',
      'A branded proposal in the client’s language, in one click (№2)',
      'A real supplier PDF invoice → into a table (№6)',
      'A dialogue with the lead-qualifying bot in ES and RU (№7)',
    ],
    disclaimer:
      'We speed up drafts and routine: the final estimate and any project subject to CTE/LOE are signed by your técnico — we do not replace the licensed professional.',
    cta: { label: 'Book the demo', href: CONTACT.en },
  },
  bundles: {
    kicker: 'Bundles',
    h2: 'Cheaper as a bundle',
    lead: 'Proven combinations of services; the final price is set after a short audit.',
    recommendLabel: 'Recommended',
    plans: [
      {
        plan: 'Start «Presupuestos»',
        price: 'from 990',
        cur: '€',
        note: '+ 59 €/mo · fast entry',
        items: ['Estimate generator (№1)', 'Proposal generator (№2)'],
      },
      {
        plan: 'Business «Obra bajo control»',
        price: 'from 3,900',
        cur: '€',
        note: '+ 199 €/mo · full cycle',
        items: [
          'Estimates (№1) and proposals (№2)',
          'Lead bot + follow-up (№7)',
          'Schedule and progress control (№3)',
          'Photo-based site control (№4)',
        ],
        featured: true,
      },
      {
        plan: 'Núcleo · custom',
        price: 'custom',
        note: 'the whole catalogue + integrations + SLA',
        items: ['Any of the 14 services', 'Integrations with your CRM and accounting', 'Priority SLA'],
      },
      {
        plan: '"Business start"',
        price: 'from 1,500',
        cur: '€',
        note: 'digital foundation in ~2 weeks',
        items: ['IT infrastructure (№12)', 'Landing + promotion (№14)', 'Telegram CRM (№13)', 'Kit Digital option*'],
      },
    ],
    kitDigitalNote:
      '* Kit Digital: we can act as an agente digitalizador so a state subsidy covers part of the cost ("sitio web" €500–2,000, "CRM" €2,000–15,000). Call status varies — we check sede.red.gob.es before starting; we never promise it in advance.',
  },
  priceTable: {
    kicker: 'Price summary',
    h2: 'The whole catalogue at a glance',
    cols: { service: 'Service', start: 'Start', pro: 'Pro', medida: 'Custom' },
    rows: [
      { serviceId: 'presupuestos', name: '1 · Estimate generator', start: 'from €690 + €39/mo', pro: 'from €1,490 + €79/mo', medida: 'on request' },
      { serviceId: 'propuestas', name: '2 · Proposal generator', start: 'from €390 + €25/mo', pro: 'from €890 + €49/mo', medida: 'renders opt. from €490' },
      { serviceId: 'cronograma', name: '3 · Schedule + progress control', start: 'from €690 + €39/mo', pro: 'from €1,690 + €89/mo', medida: 'on request' },
      { serviceId: 'fotocontrol', name: '4 · Photo-based site control', start: 'from €590 + €49/mo', pro: 'from €1,490 + €99/mo', medida: 'on request' },
      { serviceId: 'normas', name: '5 · CTE/LOE checker', start: '—', pro: 'from €2,490 + €149/mo', medida: 'from €4,900 + €290/mo' },
      { serviceId: 'facturas', name: '6 · Invoice extraction (+archive)', start: 'from €590 + €0.15/doc', pro: 'from €1,490 + volume pack', medida: 'archive from €490' },
      { serviceId: 'bot-solicitudes', name: '7 · RU+ES lead bot + follow-up', start: 'from €690 + €49/mo', pro: 'from €1,690 + €129/mo', medida: 'on request' },
      { serviceId: 'precios-materiales', name: '8 · Materials price monitor', start: 'from €490 + €39/mo', pro: 'from €990 + €69/mo', medida: '—' },
      { serviceId: 'calculadora', name: '9 · Website calculator (lead magnet)', start: 'from €590 + €29/mo', pro: 'from €1,290 + €59/mo', medida: '+ API usage by traffic' },
      { serviceId: 'cowork', name: '10 · Claude / Cowork setup', start: 'from €390', pro: 'from €1,490', medida: 'retainer from €190/mo' },
      { serviceId: 'reuniones', name: '11 · Meeting assistant + tasks', start: 'from €690 + €49/mo', pro: 'from €1,690 + €129/mo', medida: 'on request' },
      { serviceId: 'infraestructura', name: '12 · Project IT infrastructure', start: 'from €390', pro: 'from €990', medida: '+Kit Digital / retainer from €50/mo' },
      { serviceId: 'telegram-crm', name: '13 · Telegram-based CRM', start: 'from €690 + €49/mo', pro: 'from €1,690 + €99/mo', medida: 'on request' },
      { serviceId: 'webs', name: '14 · Websites + promotion', start: 'landing from €700', pro: 'site from €1,800 · store from €3,500', medida: 'SEO from €600/mo · Ads from €350/mo' },
    ],
    note: SECTOR_UI.en.priceIvaNote,
  },
  faq: {
    kicker: 'FAQ',
    h2: 'Frequently asked questions',
    items: [
      {
        q: 'Does this replace my arquitecto/aparejador?',
        a: 'No. The tools speed up drafts and routine; the final project and the CTE/LOE sign-off are done by a licensed técnico.',
      },
      {
        q: 'Are the estimates accurate?',
        a: 'They are indicative until the site visit and measurement; a person always reviews the result before it goes to the client.',
      },
      {
        q: 'Is my data safe?',
        a: 'We sign a data-processing agreement (DPA, art. 28 GDPR) before handling real data; some features are not covered by Zero Data Retention — we warn you and configure things safely.',
      },
      {
        q: 'Do I need WhatsApp Business?',
        a: 'For the WhatsApp channel, yes — via a WhatsApp Business API provider (Claude has no "native" WhatsApp); Telegram is simpler.',
      },
      {
        q: 'What languages does it work in?',
        a: 'RU, ES and EN — full parity.',
      },
      {
        q: 'How long does it take?',
        a: 'Usually 1–2 weeks per service; bundles as agreed.',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Start with a ',
    h2Accent: '15-minute demo.',
    primary: { label: 'Request a proposal', href: CONTACT.en },
    ghost: { label: 'Chat on WhatsApp', href: WHATSAPP_URL ?? CONTACT.en },
  },
  schemaService: {
    name: 'AI automation for construction and renovation',
    serviceType: 'AI process automation for construction companies and crews',
    description:
      'A catalogue of 14 done-for-you services: by-chapter estimates with correct VAT, proposals, schedules, photo-based site control, CTE/LOE checks with citations, an ES/RU lead bot, a Telegram CRM and more. Setup + support, in Spanish and Russian.',
  },
};

export const CONSTRUCCION_PAGE: Record<Lang, SectorLandingCopy> = { es: ES, ru: RU, en: EN };
