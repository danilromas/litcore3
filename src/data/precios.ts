/**
 * Копи страницы цен (P22). НЕ хардкодить эти тексты в разметке страниц.
 *
 * - ES: вербатим из design-pack/pages/precios.html (source of truth);
 *   SEO title/description — из content/precios/es.md (frontmatter).
 * - RU: из content/precios/ru.md — БЕЗ блока грантов (гранты только ответом в FAQ),
 *   CTA — Telegram.
 * - EN: заглушка Фазы 2 из content/precios/en.md (герой + пакеты + CTA).
 *
 * Цены — КАНОН (VERIFICATION): Start/Старт от 300 €, Negocio/Бизнес от 1 500 €,
 * Núcleo/Ядро a medida/под задачу; бот setup от 400 €; подписка от 150 €/мес.
 */
import { TELEGRAM_URL } from '../config/site';
import type { PriceCardData } from './home';

export const PRECIOS = {
  /* ============================== ES ============================== */
  es: {
    seo: {
      title: 'Precios: automatización con IA y webs | litcore.ai',
      description:
        'Paquetes Start / Negocio / Núcleo: bots y automatización con IA desde 400 € de setup + suscripción; webs desde 300 €. Comprobamos si aplicas a subvención.',
    },
    crumbs: [
      { label: 'Inicio', href: '/es/' },
      { label: 'Precios' },
    ],
    hero: {
      h1Html: 'Precios claros, <span class="accent-word">sin sorpresas.</span>',
      lead: 'La IA se paga como se usa: setup inicial + suscripción mensual — con soporte humano incluido. Las webs, presupuesto único. Todo con horquillas a la vista antes de hablar.',
    },
    recommendLabel: 'Recomendado',
    // A4 аудита (LSSI art. 10.1.f): ясная информация о налогах рядом с ценами.
    taxNote: 'Precios orientativos, IVA no incluido.',
    cards: <PriceCardData[]>[
      {
        plan: 'Start',
        price: 'desde 300',
        cur: '€',
        note: 'setup · suscripción desde 150 €/mes si hay bot',
        items: [
          'Landing o página de visita que trabaja para la reserva (300–2 000 € según alcance)',
          '1 automatización simple: formulario que no pierde leads',
          'Bot básico opcional: FAQ + citas (setup desde 400 €)',
          '1 canal: WhatsApp, Telegram o web',
          'ES o ES + RU',
          'Entrega en días, no meses',
        ],
        cta: { label: 'Detalles', href: '/es/contacto/' },
        featured: false,
      },
      {
        plan: 'Negocio',
        price: 'desde 1 500',
        cur: '€',
        note: 'setup · suscripción desde 150 €/mes',
        items: [
          'Web pyme multipágina (1 500–4 000 €) o automatización de un proceso completo (1 000–3 000 €)',
          'Bot vertical: tu catálogo de servicios, calendario y recordatorios',
          'Mini-CRM: cada lead con estado y responsable',
          '2–3 idiomas (ES / RU / EN)',
          'Varios canales: WhatsApp, Telegram, web',
          'Soporte y mejoras dentro de la suscripción',
        ],
        cta: { label: 'Pedir propuesta', href: '/es/contacto/' },
        featured: true,
      },
      {
        plan: 'Núcleo',
        price: 'a medida',
        note: 'setup · suscripción — según alcance',
        items: [
          'Varios procesos automatizados de punta a punta',
          'IA vertical para tu sector (400–8 000 € según alcance)',
          'Documentos con IA: presupuestos, facturas, cartas',
          'Integraciones y RPA con tus herramientas',
          'CRM / ERP conectado al bot y a la web',
          'Escalado a humano en todo lo delicado',
        ],
        cta: { label: 'Detalles', href: '/es/contacto/' },
        featured: false,
      },
    ],
    table: {
      h2: 'Qué incluye cada paquete',
      head: ['', 'Start', 'Negocio', 'Núcleo'],
      rows: [
        ['Web', 'Landing / página de visita', 'Web pyme multipágina + SEO básico', 'Plataforma, portales, áreas de cliente'],
        ['Bot con IA', 'Básico: FAQ + citas (opcional)', 'Vertical: catálogo, calendario, leads', 'Multi-proceso, con escalado a humano'],
        ['Idiomas', 'ES o ES + RU', '2–3 (ES / RU / EN)', 'Según proyecto'],
        ['Canales', '1 canal', 'WhatsApp + Telegram + web', '+ integraciones por API'],
        ['CRM', '—', 'Mini-CRM', 'CRM / ERP a medida'],
        ['Automatización de procesos', '1 simple', '1 proceso completo (1 000–3 000 €)', 'Varios procesos + RPA'],
        ['Suscripción', 'Desde 150 €/mes si hay bot', '150–400 €/mes', 'Según alcance'],
        ['Plazo', 'Días', 'Semanas', 'Según alcance'],
      ],
      foot: 'Contenido, analítica, diseño UX/UI y apps (PWA / multiplataforma) — presupuesto por briefing, con la misma lógica Start / Negocio / Núcleo.',
    },
    /** Гранты — честный комплаенс: не гарантия, Kit Digital волатилен */
    grants: {
      kicker: 'Subvenciones',
      h2: '¿Cofinanciación? Lo comprobamos — caso a caso',
      text: 'Revisamos si tu proyecto encaja en programas de digitalización. Siendo honestos: el Kit Digital es volátil — convocatorias y fondos cambian; existen programas regionales como DIGITALIZA-CV (C. Valenciana) o BidaIA (País Vasco). No es una garantía ni un descuento: es una comprobación gratuita antes de presupuestar.',
      stamps: ['Kit Digital · volátil', 'DIGITALIZA-CV', 'BidaIA'],
    },
    faq: {
      h2: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué incluye la suscripción?',
          a: 'Hosting, el trabajo del modelo de IA (tokens), monitorización, correcciones y mejoras continuas — y soporte humano. Tu bot no se queda «abandonado» tras la entrega.',
        },
        {
          q: '¿Por qué setup + suscripción y no un pago único?',
          a: 'Porque un sistema con IA es un servicio vivo: responde cada día, consume infraestructura y necesita ajustes. El setup cubre la construcción; la suscripción, que siga funcionando bien. Sin la suscripción venderíamos algo que se degrada — y eso no lo hacemos.',
        },
        {
          q: '¿Cuánto tardáis?',
          a: 'Bots y automatizaciones simples — días; webs pyme y procesos completos — semanas. Antes de empezar fijamos plazo y alcance por escrito.',
        },
        {
          q: '¿Puedo pedir solo la web, sin bot ni suscripción?',
          a: 'Sí. Las webs son presupuesto único: landing 300–2 000 €, web pyme 1 500–4 000 €. La suscripción solo aplica cuando hay IA funcionando.',
        },
        {
          q: '¿Cómo calculáis un proyecto «a medida»?',
          a: 'Por procesos, no por horas infladas: qué proceso automatizamos, cuántas integraciones, cuántos idiomas y canales. Recibes un desglose con horquillas — las mismas que publicamos aquí — antes de comprometerte.',
        },
      ],
    },
    cta: {
      h2Html: '¿Tu caso no encaja en un paquete? Te lo <span class="accent-word">desglosamos.</span>',
      primary: { label: 'Pedir propuesta', href: '/es/contacto/' },
      secondary: { label: 'Ver demos', href: '/es/demos/' },
    },
  },

  /* ============================== RU ============================== */
  ru: {
    seo: {
      title: 'Цены и пакеты: автоматизация, боты, сайты | litcore.ai',
      description:
        'Пакеты Старт / Бизнес / Ядро: боты и автоматизация с ИИ — setup от 400 € + подписка; сайты от 300 €. Прозрачные вилки, без сюрпризов. Расчёт в Telegram.',
    },
    crumbs: [
      { label: 'Главная', href: '/ru/' },
      { label: 'Цены' },
    ],
    hero: {
      h1Html: 'Цены прозрачные, <span class="accent-word">без сюрпризов.</span>',
      lead: 'ИИ оплачивается как работает: setup (настройка под вас) + подписка в месяц — с поддержкой живым человеком. Сайты — разовый бюджет. Все вилки видны до разговора.',
    },
    recommendLabel: 'Рекомендуем',
    // A4 аудита: пометка о налогах рядом с ценами.
    taxNote: 'Цены ориентировочные, без IVA (НДС).',
    cards: <PriceCardData[]>[
      {
        plan: 'Старт',
        price: 'от 300',
        cur: '€',
        note: 'setup · подписка от 150 €/мес, если есть бот',
        items: [
          'Лендинг или страница-визитка, которая работает на заявку (300–2 000 € по сложности)',
          '1 простая автоматизация: форма, которая не теряет лидов',
          'Базовый бот по желанию: FAQ + запись (setup от 400 €)',
          '1 канал: Telegram, WhatsApp или сайт',
          'RU или RU + ES',
          'Запуск — дни, не месяцы',
        ],
        cta: { label: 'Подробнее', href: TELEGRAM_URL }, // RU-CTA = Telegram
        featured: false,
      },
      {
        plan: 'Бизнес',
        price: 'от 1 500',
        cur: '€',
        note: 'setup · подписка от 150 €/мес',
        items: [
          'Многостраничный сайт (1 500–4 000 €) или автоматизация одного процесса целиком (1 000–3 000 €)',
          'Вертикальный бот: ваш каталог услуг, календарь, напоминания',
          'Мини-CRM: каждый лид со статусом и ответственным',
          '2–3 языка (RU / ES / EN)',
          'Несколько каналов: Telegram, WhatsApp, сайт',
          'Поддержка и доработки — внутри подписки',
        ],
        cta: { label: 'Выбрать пакет → Telegram', href: TELEGRAM_URL }, // cta_primary из precios/ru.md
        featured: true,
      },
      {
        plan: 'Ядро',
        price: 'под задачу',
        note: 'setup · подписка — по объёму',
        items: [
          'Несколько процессов, автоматизированных от и до',
          'Вертикальный ИИ под вашу нишу (400–8 000 € по объёму)',
          'Документы с ИИ: сметы, счета, письма, КП',
          'Интеграции и RPA с вашими инструментами',
          'CRM / ERP, связанные с ботом и сайтом',
          'Сложное и чувствительное — всегда через человека',
        ],
        cta: { label: 'Подробнее', href: TELEGRAM_URL },
        featured: false,
      },
    ],
    table: {
      h2: 'Что входит в каждый пакет',
      head: ['', 'Старт', 'Бизнес', 'Ядро'],
      rows: [
        ['Сайт', 'Лендинг / визитка', 'Многостраничник + базовое SEO', 'Платформа, кабинеты'],
        ['Бот с ИИ', 'Базовый: FAQ + запись (опция)', 'Вертикальный: каталог, календарь, лиды', 'Мультипроцессный, с передачей человеку'],
        ['Языки', 'RU или RU + ES', '2–3 (RU / ES / EN)', 'По проекту'],
        ['Каналы', '1 канал', 'Telegram + WhatsApp + сайт', '+ интеграции по API'],
        ['CRM', '—', 'Мини-CRM', 'CRM / ERP под вас'],
        ['Автоматизация процессов', '1 простая', '1 процесс целиком (1 000–3 000 €)', 'Несколько процессов + RPA'],
        ['Подписка', 'От 150 €/мес, если есть бот', '150–400 €/мес', 'По объёму'],
        ['Срок', 'Дни', 'Недели', 'По объёму'],
      ],
      foot: 'Контент, аналитика, дизайн UX/UI и приложения (PWA / кроссплатформа) — смета по ТЗ, в той же логике Старт / Бизнес / Ядро.',
    },
    // Блока грантов в RU НЕТ (SPEC/P22): единственное упоминание — ответ в FAQ.
    faq: {
      h2: 'Частые вопросы',
      items: [
        {
          q: 'Что входит в подписку?',
          a: 'Хостинг, работа ИИ-модели (токены), мониторинг, правки и постоянные улучшения — и поддержка живым человеком. Бот не остаётся «брошенным» после сдачи.',
        },
        {
          q: 'Почему setup + подписка, а не разовая оплата?',
          a: 'Система с ИИ — живой сервис: отвечает каждый день, потребляет инфраструктуру, требует настройки. Setup — построить; подписка — чтобы работало хорошо и дальше.',
        },
        {
          q: 'Какие сроки?',
          a: 'Боты и простые автоматизации — дни; сайты и процессы целиком — недели. Срок и объём фиксируем письменно до старта.',
        },
        {
          q: 'Можно только сайт, без бота и подписки?',
          a: 'Да. Сайты — разовый бюджет: лендинг 300–2 000 €, сайт для бизнеса 1 500–4 000 €. Подписка — только там, где работает ИИ.',
        },
        {
          q: 'Мне доступны испанские гранты на цифровизацию?',
          a: 'Если вы работаете как autónomo или SL — возможно; программы волатильны, гарантий не даём. Напишите — проверим ваш кейс.',
        },
      ],
    },
    cta: {
      h2Html: 'Не поняли, какой пакет ваш? Разложим <span class="accent-word">по полочкам</span> в Telegram.',
      primary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL }, // Telegram подтверждён владельцем: litcore_ai
      secondary: { label: 'Посмотреть демо', href: '/ru/demo/' },
    },
  },

  /* ============================== EN (заглушка Фазы 2) ============================== */
  en: {
    seo: {
      title: 'Pricing: AI automation and web development | litcore.ai',
      description:
        'Start / Business / Core packages: AI bots and process automation from €400 setup + subscription; websites from €300. Transparent ranges. Book a call.',
    },
    crumbs: [
      { label: 'Home', href: '/en/' },
      { label: 'Pricing' },
    ],
    hero: {
      h1Html: 'Transparent pricing, <span class="accent-word">no surprises.</span>',
      lead: 'AI systems are priced the way they run: a one-off setup plus a monthly subscription, with human support included. Websites are a one-off budget. Ranges are public before we ever talk.',
    },
    recommendLabel: 'Recommended',
    // A4 аудита: tax note near prices.
    taxNote: 'Indicative prices, VAT (IVA) not included.',
    cards: <PriceCardData[]>[
      {
        plan: 'Start',
        price: 'from 300',
        cur: '€',
        note: 'setup · subscription from €150/mo when a bot is included',
        items: [
          'Landing page built for conversion (€300–2,000 depending on scope)',
          '1 simple automation: a form that never drops a lead',
          'Optional basic bot: FAQ + scheduling (setup from €400)',
          '1 channel: WhatsApp, Telegram or web',
          '1–2 languages',
          'Delivery in days, not months',
        ],
        cta: { label: 'Book a call', href: '/en/contact/' },
        featured: false,
      },
      {
        plan: 'Business',
        price: 'from 1,500',
        cur: '€',
        note: 'setup · subscription from €150/mo',
        items: [
          'Multi-page SME website (€1,500–4,000) or one end-to-end process automation (€1,000–3,000)',
          'Vertical bot: your service catalogue, calendar, reminders',
          'Mini-CRM: every lead with a status and an owner',
          '2–3 languages (ES / EN / RU)',
          'Multiple channels: WhatsApp, Telegram, web',
          'Support and iterations included in the subscription',
        ],
        cta: { label: 'Book a call', href: '/en/contact/' },
        featured: true,
      },
      {
        plan: 'Core',
        price: 'custom',
        note: 'setup · subscription — scoped per engagement',
        items: [
          'Several processes automated end to end',
          'Vertical AI for your domain (€400–8,000 depending on scope)',
          'AI documents: quotes, invoices, letters',
          'Integrations and RPA with your stack',
          'CRM / ERP connected to bots and web',
          'Human-in-the-loop on everything sensitive',
        ],
        cta: { label: 'Book a call', href: '/en/contact/' },
        featured: false,
      },
    ],
    foot: 'Content operations, analytics, UX/UI design and apps (PWA / cross-platform) are quoted per brief, following the same Start / Business / Core logic.',
    cta: {
      h2Html: "Doesn't fit a package? We'll <span class=\"accent-word\">scope it</span> with you.",
      primary: { label: 'Book a call', href: '/en/contact/' },
      secondary: { label: 'See demos', href: '/en/demos/' },
    },
  },
};
