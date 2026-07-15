/**
 * P12 «Documentos con IA» — данные-копи по языкам.
 * ES — вербатим из design-pack/pages/servicio-documentos-ia.html (ЭТАЛОН) = content/documentos-ia/es.md.
 * RU — вербатим из content/documentos-ia/ru.md (НЕ зеркало ES: посыл «испанские бумаги по-русски», CTA Telegram).
 * EN — заглушка Фазы 2 из content/documentos-ia/en.md (герой + 3 карточки болей + CTA).
 * SEO title/description — frontmatter md. Тарифы: Piloto / Estándar (Recomendado) / A medida — канон, цифры из макета.
 */
import { TELEGRAM_URL } from '../config/site';

export interface Cta {
  label: string;
  href: string;
}

export interface Crumb {
  label: string;
  href?: string;
}

export interface PainCard {
  tag: string;
  title: string;
  text: string;
}

export interface PlanData {
  plan: string;
  price: string;
  cur?: string;
  note: string;
  items: string[];
  cta: Cta;
  featured?: boolean;
  recommendLabel?: string;
}

interface DocumentosCopy {
  seo: { title: string; description: string };
  crumbs: Crumb[];
  /** breadcrumb() JSON-LD — имена в обычном регистре */
  crumbsSchema: { name: string; path: string }[];
  hero: {
    h1Pre: string;
    h1Accent: string;
    h1Post?: string;
    lead: string;
    ctaPrimary: Cta;
    ctaSecondary: Cta;
    demoBadge: string;
  };
  pains: { kicker: string; h2Lines: string[]; cards: PainCard[] };
  how: {
    kicker: string;
    h2Pre: string;
    h2Accent: string;
    steps: { title: string; text: string }[];
  };
  benefits: { kicker: string; h2Lines: string[]; cards: { title: string; text: string }[] };
  bottleneck: { dim: string; ignite: string };
  sectors: {
    kicker: string;
    h2: string;
    cards: { tag: string; title: string; text: string; more: Cta }[];
  };
  pricing: { kicker: string; h2Lines: string[]; plans: PlanData[]; note: string };
  faq: { kicker?: string; h2: string; items: { q: string; a: string }[] };
  ctaBand: { h2Pre: string; h2Accent: string; primary: Cta; ghost: Cta };
  schemaService: { name: string; description: string };
}

interface DocumentosStubCopy {
  seo: { title: string; description: string };
  crumbs: Crumb[];
  crumbsSchema: { name: string; path: string }[];
  hero: {
    h1Pre: string;
    h1Accent: string;
    lead: string;
    ctaPrimary: Cta;
    ctaSecondary: Cta;
    demoBadge: string;
  };
  pains: { kicker: string; h2Lines: string[]; cards: PainCard[] };
  ctaBand: { h2Pre: string; h2Accent: string; primary: Cta; ghost: Cta };
  schemaService: { name: string; description: string };
}

export const DOCUMENTOS_ES: DocumentosCopy = {
  seo: {
    title: 'Presupuestos y facturas con IA en minutos | litcore.ai',
    description:
      'Presupuestos, ofertas y facturas en minutos, no horas: la IA prepara el borrador con tus plantillas y tú lo apruebas. Para reformas y gestorías.',
  },
  crumbs: [
    { label: 'AUTOMATIZACIÓN', href: '/es/servicios/automatizacion/' },
    { label: 'DOCUMENTOS CON IA' },
  ],
  crumbsSchema: [
    { name: 'Automatización', path: '/es/servicios/automatizacion/' },
    { name: 'Documentos con IA', path: '/es/servicios/documentos-ia/' },
  ],
  hero: {
    h1Pre: 'Presupuestos y facturas ',
    h1Accent: 'en minutos.',
    lead: 'El presupuesto que hoy te come la tarde sale en minutos: la IA lo prepara con tus plantillas y tus precios, tú lo revisas y lo envías. Respondes antes que nadie — y la obra es tuya.',
    ctaPrimary: { label: 'Pedir propuesta', href: '/es/contacto/' },
    ctaSecondary: { label: 'Probar la demo', href: '/es/demos/' },
    demoBadge: 'Demo con IA · «Estás hablando con IA»',
  },
  pains: {
    kicker: '¿TE SUENA?',
    h2Lines: ['El trabajo acaba a las seis.', 'El papeleo empieza a las diez.'],
    cards: [
      {
        tag: 'TARDES EN EXCEL',
        title: 'La obra, hecha. El presupuesto, pendiente.',
        text: 'Mides, calculas partidas, peleas con la plantilla hasta la madrugada. Y mañana, otro presupuesto más. Ese tiempo no te lo paga nadie.',
      },
      {
        tag: 'CLIENTE PERDIDO',
        title: 'El cliente no esperó.',
        text: 'Pidió tres presupuestos. Ganó el que contestó primero. El tuyo estaba muy bien — pero llegó el jueves.',
      },
      {
        tag: 'ENTRADA MANUAL',
        title: 'Facturas tecleadas una a una.',
        text: 'Cada dato copiado a mano es tiempo perdido — y un error esperando a colarse en la contabilidad justo antes del cierre.',
      },
    ],
  },
  how: {
    kicker: 'CÓMO FUNCIONA',
    h2Pre: 'De la nota de voz al PDF ',
    h2Accent: 'con tu marca.',
    steps: [
      {
        title: 'Envías lo que tienes',
        text: 'Una nota de voz, una foto de la medición, el correo del cliente. Vale tal cual, sin formatear nada.',
      },
      {
        title: 'La IA prepara el documento',
        text: 'Con tus plantillas, tus precios y tu formato. Partidas, IVA y totales, calculados.',
      },
      {
        title: 'Tú revisas y decides',
        text: 'Ajustas lo que quieras y pulsas «enviar». Ninguna cifra sale sin tu ojo: la última palabra siempre es de una persona.',
      },
      {
        title: 'El cliente lo recibe',
        text: 'PDF con tu marca en su correo. La copia, archivada en tu CRM con su cliente y su fecha.',
      },
    ],
  },
  benefits: {
    kicker: 'QUÉ CONSIGUES',
    h2Lines: ['Más obras cerradas.', 'Menos noches de papeleo.'],
    cards: [
      {
        title: 'Presupuestos y ofertas en minutos',
        text: 'Respondes hoy, no «a lo largo de la semana». El que llega primero con un PDF serio, cierra. Los demás compiten por lo que queda.',
      },
      {
        title: 'Facturas sin teclear',
        text: 'Los datos de facturas y recibos pasan solos a tu tabla o sistema contable — cada apunte marcado «pendiente de revisión», para que nada entre sin control.',
      },
      {
        title: 'Menos clientes perdidos',
        text: 'Cada petición recibe su propuesta a tiempo — también las que antes se quedaban «para mañana» y mañana ya eran de otro.',
      },
      {
        title: 'Papeles en orden',
        text: 'Cada documento con su cliente, su copia y su fecha. Nada perdido en carpetas sueltas ni en chats de WhatsApp.',
      },
    ],
  },
  bottleneck: {
    dim: 'El cuello de botella no es tu trabajo — es el papeleo.',
    ignite: 'Lo desatascamos, y todo lo demás corre.',
  },
  sectors: {
    kicker: 'PARA QUIÉN',
    h2: 'Tu sector, tus documentos.',
    cards: [
      {
        tag: 'CONSTRUCCIÓN Y REFORMAS',
        title: 'Presupuestos por capítulos, ofertas con tu marca',
        text: 'De la medición al PDF: partidas, IVA del 10 % o del 21 %, condiciones y garantía. Antes de que el cliente pida el tercero.',
        more: { label: 'Ver construcción →', href: '/es/soluciones/construccion/' },
      },
      {
        tag: 'GESTORÍAS Y ASESORÍAS',
        title: 'Datos de facturas y recibos, extraídos solos',
        text: 'Del PDF o la foto del cliente a tu sistema, sin teclear. Cada apunte, marcado para la revisión del profesional.',
        more: { label: 'Ver gestorías →', href: '/es/soluciones/gestorias/' },
      },
      {
        tag: 'SERVICIOS PROFESIONALES',
        title: 'Ofertas, contratos tipo y cartas',
        text: 'Los documentos que hoy se redactan a mano una y otra vez, preparados en tu estilo — listos para tu revisión y firma.',
        more: { label: 'Ver todos los sectores →', href: '/es/soluciones/' },
      },
    ],
  },
  pricing: {
    kicker: 'PRECIOS',
    h2Lines: ['Implantación + suscripción.', 'Sin sorpresas.'],
    plans: [
      {
        plan: 'Piloto',
        price: 'desde 1 200',
        cur: '€',
        note: 'setup · desde 100 €/mes',
        items: [
          'Un tipo de documento: presupuesto, oferta o extracción de facturas',
          'Tus plantillas, tus precios, tu formato',
          'PDF con tu marca',
          'Revisión humana antes de cada envío',
        ],
        cta: { label: 'Detalles', href: '/es/contacto/' },
      },
      {
        plan: 'Estándar',
        price: 'desde 1 900',
        cur: '€',
        note: 'setup · desde 250 €/mes',
        items: [
          'Presupuestos + ofertas PDF + extracción de facturas',
          'Copia automática en tu CRM u hoja de cálculo',
          'Documentos en dos idiomas si lo necesitas',
          'Ajuste de plantillas y precios incluido',
          'Soporte prioritario',
        ],
        cta: { label: 'Pedir propuesta', href: '/es/contacto/' },
        featured: true,
        recommendLabel: 'Recomendado',
      },
      {
        plan: 'A medida',
        price: 'desde 3 000',
        cur: '€',
        note: 'setup · desde 400 €/mes',
        items: [
          'Varios tipos de documento: presupuestos, facturas, cartas, contratos tipo',
          'Integración con tu ERP o sistema contable',
          'Flujos a medida de tus procesos',
          'Acompañamiento y evolución continua',
        ],
        cta: { label: 'Detalles', href: '/es/contacto/' },
      },
    ],
    note: 'Cifras orientativas «desde»: el precio final se cierra con una propuesta a medida según tus tipos de documento y volumen. Proyectos de IA vertical amplios — hasta 8 000 € de implantación.',
  },
  faq: {
    kicker: 'PREGUNTAS FRECUENTES',
    h2: 'Lo que nos preguntan antes de empezar.',
    items: [
      {
        q: '¿Trabaja con mis plantillas y mis precios?',
        a: 'Sí — esa es la base. Configuramos el sistema con tus plantillas, tu lista de precios y tu formato de siempre. El documento sale como lo harías tú, no como una plantilla genérica de internet.',
      },
      {
        q: '¿Y si la IA se equivoca?',
        a: 'Nada sale solo. Todo lo que genera la IA es un borrador que revisa una persona de tu equipo antes de enviarse — tú ajustas y decides. Ese paso no es opcional: está en el corazón del sistema y del cumplimiento normativo.',
      },
      {
        q: '¿El presupuesto generado tiene validez técnica?',
        a: 'El presupuesto es un documento comercial: orientativo hasta que tú lo confirmas. Para obras que exigen proyecto técnico según CTE/LOE, el proyecto y el visado siguen siendo de tu técnico colegiado — nosotros quitamos la rutina de alrededor, no sustituimos al profesional.',
      },
      {
        q: '¿Es compatible con Verifactu?',
        a: 'La emisión de facturas la hace tu sistema de facturación certificado; nosotros preparamos y ordenamos los datos que le llegan. La obligación de remisión inmediata a la Agencia Tributaria se ha aplazado a 2027, así que hay tiempo para adaptarse sin prisas falsas — te ayudamos a llegar con los datos limpios.',
      },
      {
        q: '¿Qué pasa con mis datos y los de mis clientes?',
        a: 'Cumplimiento RGPD desde el diseño: contrato de encargo de tratamiento (art. 28), minimización de datos y accesos por roles. Antes de procesar datos reales revisamos juntos qué se trata, dónde y durante cuánto tiempo.',
      },
      {
        q: '¿Cuánto se tarda en implantarlo?',
        a: 'Empezamos con un piloto sobre un tipo de documento — tu presupuesto o tus facturas de proveedores. Semanas, no meses: ves el resultado con tus datos antes de ampliar a lo demás.',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Recupera tus tardes. El papeleo, ',
    h2Accent: 'en minutos.',
    primary: { label: 'Pedir propuesta', href: '/es/contacto/' },
    ghost: { label: 'Probar la demo', href: '/es/demos/' },
  },
  schemaService: {
    name: 'Documentos con IA: presupuestos, ofertas y facturas',
    description:
      'Presupuestos, ofertas y facturas en minutos, no horas: la IA prepara el borrador con tus plantillas y tú lo apruebas. Para reformas y gestorías.',
  },
};

export const DOCUMENTOS_RU: DocumentosCopy = {
  seo: {
    title: 'Сметы, счета и КП с ИИ за минуты — по-русски | litcore.ai',
    description:
      'ИИ собирает смету, КП или счёт по вашим шаблонам за минуты — вы проверяете и отправляете. Стройка, ремонт и испанские бумаги — по-русски. Мы в Telegram.',
  },
  crumbs: [
    { label: 'АВТОМАТИЗАЦИЯ', href: '/ru/uslugi/avtomatizaciya/' },
    { label: 'ДОКУМЕНТЫ С ИИ' },
  ],
  crumbsSchema: [
    { name: 'Автоматизация', path: '/ru/uslugi/avtomatizaciya/' },
    { name: 'Документы с ИИ', path: '/ru/uslugi/dokumenty-ii/' },
  ],
  hero: {
    h1Pre: 'Сметы и счета — ',
    h1Accent: 'за минуты,',
    h1Post: ' по-русски, в Испании',
    lead: 'Надиктовали голосовое или скинули фото замера — ИИ собрал смету или КП по вашим шаблонам и ценам, сразу на испанском и русском, с правильным IVA. Вы проверили и отправили. Клиент получил ответ первым — заказ ваш, а вечер — ваш собственный.',
    // Telegram подтверждён владельцем: litcore_ai (TELEGRAM_URL в src/config/site.ts)
    ctaPrimary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    ctaSecondary: { label: 'Посмотреть демо', href: '/ru/demo/' },
    demoBadge: 'Демо с ИИ · «Вы общаетесь с ИИ»',
  },
  pains: {
    kicker: 'ЗНАКОМО?',
    h2Lines: ['Объект сдали в шесть.', 'Смета — до полуночи.'],
    cards: [
      {
        tag: 'ВЕЧЕРА НА СМЕТАХ',
        title: 'Работа сделана, а бумага — нет.',
        text: 'После объекта садишься за смету: партиды, IVA 10 или 21, формат «как принято здесь». На чужом языке это не час — это вечер.',
      },
      {
        tag: 'КЛИЕНТ НЕ ЖДЁТ',
        title: 'Заказ ушёл к тому, кто ответил первым.',
        text: 'Испанский клиент собирает три presupuesto и выбирает не самого дешёвого, а самого быстрого и аккуратного. Скриншот из Excel в WhatsApp проигрывает PDF с логотипом.',
      },
      {
        tag: 'ИСПАНСКИЕ БУМАГИ',
        title: 'Facturas от поставщиков копятся стопкой.',
        text: 'Разобрать счета со стройбазы, перебить в табличку, отдать хестору — вручную и со словарём. Ошибка всплывает в самый неудобный момент.',
      },
    ],
  },
  how: {
    kicker: 'КАК ЭТО РАБОТАЕТ',
    h2Pre: 'Из голосового — в PDF ',
    h2Accent: 'с вашим логотипом.',
    steps: [
      {
        title: 'Отправляете что есть',
        text: 'Голосовое на русском, фото замера, письмо клиента — как удобно, без подготовки.',
      },
      {
        title: 'ИИ собирает документ',
        text: 'По вашим шаблонам и ценам: смета по разделам, IVA 10/21 %, итоги. Сразу в двух версиях — испанской для клиента, русской для вас.',
      },
      {
        title: 'Вы проверяете и жмёте «отправить»',
        text: 'Поправили, что нужно, — и только тогда документ уходит. Ни одна цифра не уезжает без вашего глаза.',
      },
      {
        title: 'Документ у клиента',
        text: 'PDF с вашим брендом у него в почте, копия — в вашей CRM или табличке. Для хестора всё уже разложено.',
      },
    ],
  },
  benefits: {
    kicker: 'ЧТО ПОЛУЧАЕТЕ',
    h2Lines: ['Больше заказов.', 'Меньше ночей за Excel.'],
    cards: [
      {
        title: 'Смета и КП за минуты — на двух языках',
        text: 'Испанский клиент получает аккуратный presupuesto, вы держите русскую версию под рукой. Отвечаете первым — забираете заказ.',
      },
      {
        title: 'Испанские счета разбираются сами',
        text: 'Facturas и чеки поставщиков — сразу в таблицу: поставщик, сумма, IVA. Каждая запись помечена «проверить» — контроль за вами.',
      },
      {
        title: 'Меньше потерянных клиентов',
        text: 'Заявки, которые раньше лежали «до выходных», получают ответ в тот же день.',
      },
      {
        title: 'Порядок в бумагах для хестора',
        text: 'Все документы по клиентам и датам — ничего не теряется в чатах. Хестор получает разложенное, а не пакет фотографий.',
      },
    ],
  },
  bottleneck: {
    dim: 'Узкое место — не руки, а бумага.',
    ignite: 'Расшиваем — и всё остальное едет.',
  },
  sectors: {
    kicker: 'ДЛЯ КОГО',
    h2: 'Ваше дело, ваши документы.',
    cards: [
      {
        tag: 'СТРОЙКА И РЕМОНТ',
        title: 'Сметы по разделам, КП с вашим брендом',
        text: 'От замера до PDF: демонтаж, электрика, сантехника, IVA 10/21 % — в формате, который здесь принят.',
        // TODO: текст ссылки не задан в md (там только URL) — производный по образцу ES «Ver … →»
        more: { label: 'Смотреть стройку →', href: '/ru/resheniya/stroitelstvo/' },
      },
      {
        tag: '«МУЖ НА ЧАС» И СЕРВИС',
        title: 'Быстрое КП по голосовому',
        text: '«Кухня 8 м², Аликанте» — и у клиента уже расчёт с ценами и сроками, пока конкурент едет смотреть.',
        more: { label: 'Все отрасли →', href: '/ru/resheniya/' },
      },
      {
        tag: 'РУССКОЯЗЫЧНЫЕ ХЕСТОРЫ',
        title: 'Счета клиентов без ручного ввода',
        text: 'Фото чеков из WhatsApp — в учётную таблицу, каждая запись с пометкой «проверить».',
        more: { label: 'Смотреть бухгалтерию →', href: '/ru/resheniya/buhgalteriya/' },
      },
    ],
  },
  pricing: {
    kicker: 'ТАРИФЫ',
    h2Lines: ['Внедрение + подписка.', 'Без сюрпризов.'],
    plans: [
      {
        plan: 'Пилот',
        price: 'от 1 200',
        cur: '€',
        note: 'setup · от 100 €/мес',
        items: [
          'Один тип документа: смета, КП или разбор счетов',
          'Ваши шаблоны и цены',
          'PDF с вашим брендом',
          'Проверка человеком перед отправкой',
        ],
        cta: { label: 'Детали', href: '/ru/tseny/' },
      },
      {
        plan: 'Стандарт',
        price: 'от 1 900',
        cur: '€',
        note: 'setup · от 250 €/мес',
        items: [
          'Сметы + КП в PDF + разбор счетов',
          'Копия в CRM или таблицу',
          'Документы на двух языках (RU + ES)',
          'Настройка шаблонов и цен включена',
          'Приоритетная поддержка',
        ],
        // Telegram подтверждён владельцем: litcore_ai
        cta: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
        featured: true,
        recommendLabel: 'Рекомендуем',
      },
      {
        plan: 'Под задачу',
        price: 'от 3 000',
        cur: '€',
        note: 'setup · от 400 €/мес',
        items: [
          'Несколько типов документов: сметы, счета, письма, типовые договоры',
          'Интеграция с учётом',
          'Сценарии под ваши процессы',
          'Сопровождение и развитие',
        ],
        cta: { label: 'Детали', href: '/ru/tseny/' },
      },
    ],
    note: 'Цифры «от» — ориентир; финальная цена в персональном предложении под ваши документы и объём. Большие вертикальные ИИ-проекты — до 8 000 € внедрения.',
  },
  faq: {
    h2: 'Частые вопросы',
    items: [
      {
        q: 'Работает по моим шаблонам и ценам?',
        a: 'Да, это основа. Настраиваем систему под ваши шаблоны, прайс и формат — документ выходит «ваш», а не типовой из интернета.',
      },
      {
        q: 'А если ИИ ошибётся?',
        a: 'Ничего не уходит само. Всё, что делает ИИ, — черновик: вы проверяете, правите и только потом отправляете. Этот шаг обязательный — и по здравому смыслу, и по требованиям регуляторов.',
      },
      {
        q: 'Документы на испанском будут корректными?',
        a: 'Формат — местный: presupuesto по разделам, правильный IVA, принятые формулировки. Финальную проверку делаете вы; для работ, требующих техпроекта по CTE/LOE, проект и визу по-прежнему подписывает лицензированный técnico — мы убираем рутину вокруг, а не заменяем специалиста.',
      },
      {
        q: 'Это законно с Verifactu?',
        a: 'Выпуск счетов делает ваша сертифицированная система фактурации — мы готовим и раскладываем данные для неё. Обязательную передачу данных в налоговую отложили до 2027 года: время адаптироваться есть, паника не нужна.',
      },
      {
        q: 'Что с данными клиентов (GDPR)?',
        a: 'Работаем по-европейски: договор обработки данных (ст. 28 RGPD), минимум данных, доступы по ролям. Перед стартом разбираем вместе, что и где обрабатывается.',
      },
      {
        q: 'Сколько внедрять?',
        a: 'Пилот на одном типе документа — вашей смете или счетах поставщиков. Недели, не месяцы: результат на ваших данных видно до того, как расширяться.',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Верните себе вечера. Бумага — ',
    h2Accent: 'за минуты.',
    // Telegram подтверждён владельцем: litcore_ai
    primary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    ghost: { label: 'Посмотреть демо', href: '/ru/demo/' },
  },
  schemaService: {
    name: 'Документы с ИИ: сметы, счета и КП',
    description:
      'ИИ собирает смету, КП или счёт по вашим шаблонам за минуты — вы проверяете и отправляете. Стройка, ремонт и испанские бумаги — по-русски.',
  },
};

/** EN — Фаза 2+: короткая оформленная заглушка (герой + 3 карточки + CTA), тексты из en.md. */
export const DOCUMENTOS_EN: DocumentosStubCopy = {
  seo: {
    title: 'AI document automation: quotes & invoices | litcore.ai',
    description:
      'Quotes, proposals and invoices drafted by AI from your templates — reviewed by your team before they go out. Document automation for SMEs in the EU.',
  },
  crumbs: [{ label: 'AUTOMATION', href: '/en/services/automation/' }, { label: 'AI DOCUMENTS' }],
  crumbsSchema: [
    { name: 'Automation', path: '/en/services/automation/' },
    { name: 'AI documents', path: '/en/services/ai-documents/' },
  ],
  hero: {
    h1Pre: 'Quotes and invoices ',
    h1Accent: 'in minutes.',
    lead: 'AI drafts your quotes, proposals and invoices from your own templates and price lists. Your team reviews and approves every document before it goes out. Faster response, fewer errors, evenings back.',
    ctaPrimary: { label: 'Request a proposal', href: '/en/contact/' },
    ctaSecondary: { label: 'See the demo', href: '/en/demos/' },
    demoBadge: 'AI demo · “You are talking to AI”',
  },
  pains: {
    kicker: 'SOUND FAMILIAR?',
    h2Lines: ['The work is done by six.', 'The paperwork starts at ten.'],
    cards: [
      {
        tag: 'EVENINGS ON QUOTES',
        title: "The job is finished; the quote isn't.",
        text: 'Line items, VAT, formatting — every estimate costs an evening no one pays for.',
      },
      {
        tag: 'SLOW FOLLOW-UP',
        title: "The client didn't wait.",
        text: 'They requested three quotes. The first professional PDF to arrive won the deal.',
      },
      {
        tag: 'MANUAL ENTRY',
        title: 'Invoices typed in one by one.',
        text: 'Every hand-copied field is time lost — and a potential error in the books.',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Get your evenings back. Paperwork, ',
    h2Accent: 'in minutes.',
    primary: { label: 'Request a proposal', href: '/en/contact/' },
    ghost: { label: 'See the demo', href: '/en/demos/' },
  },
  schemaService: {
    name: 'AI document automation: quotes and invoices',
    description:
      'Quotes, proposals and invoices drafted by AI from your templates — reviewed by your team before they go out. Document automation for SMEs in the EU.',
  },
};
