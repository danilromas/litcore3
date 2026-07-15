/**
 * Копи главных страниц (P02/P03/P04). НЕ хардкодить эти тексты в разметке страниц.
 *
 * - ES: вербатим из design-pack/pages/index-es.html (source of truth);
 *   SEO title/description — из content/home/es.md (frontmatter).
 * - RU: из content/home/ru.md — НЕ зеркало ES: посыл «под ключ на русском», CTA Telegram.
 * - EN: заглушка Фазы 2 из content/home/en.md (dedicated team / augmentation / white label).
 *
 * Строки *Html вставляются через set:html (содержат <span class="accent-word"> / <br>).
 */
import { TELEGRAM_URL } from '../config/site';

/** Данные карточки тарифа — 1:1 props компонента PriceCard.astro */
export interface PriceCardData {
  plan: string;
  price: string;
  cur?: string;
  note: string;
  items: string[];
  cta: { label: string; href: string };
  featured: boolean;
}

export const HOME = {
  /* ============================== ES ============================== */
  es: {
    seo: {
      title: 'Automatización de procesos con IA en España | litcore.ai',
      description:
        'Automatizamos los procesos de tu pyme con IA: bots que atienden 24/7, presupuestos y facturas en minutos, CRM que no pierde ventas. Pide propuesta hoy.',
    },
    hero: {
      kicker: 'Automatización · Web · Apps',
      h1Html: 'Tu rutina, automatizada.<br>Tu negocio, <span class="accent-word">encendido.</span>',
      lead: 'Citas, presupuestos, facturas, WhatsApp: la IA se encarga del proceso y tú recuperas horas y ventas. Proceso → automatización → resultado.',
      primary: { label: 'Pedir propuesta', href: '/es/contacto/' },
      secondary: { label: 'Ver demos', href: '/es/demos/' },
    },
    trust: {
      aria: 'Dónde y cómo trabajamos',
      items: ['Asturias · Madrid · Barcelona', 'ES / RU / EN', 'AI Act ready · GDPR', 'Un equipo · todo el ciclo'],
    },
    services: {
      kicker: 'Servicios · el núcleo',
      h2: 'Qué te quitamos de encima',
      lead: 'La automatización es el producto. La web y la app son su interfaz.',
      cards: [
        {
          tag: 'A0 · Procesos',
          title: 'Menos rutina, más margen',
          href: '/es/servicios/automatizacion/',
          text: 'Auditamos tu proceso, automatizamos lo que roba horas y medimos el resultado.',
        },
        {
          tag: 'A1 · Asistentes',
          title: 'Un asistente que no duerme',
          href: '/es/servicios/asistentes-ia/',
          text: 'Responde, filtra y agenda por ti — 24/7, en español, ruso e inglés.',
        },
        {
          tag: 'A2 · Bots',
          title: 'Ni una consulta sin respuesta',
          href: '/es/servicios/chatbot-ia/',
          text: 'Bot-recepción en WhatsApp y web: atiende, agenda y avisa, también fuera de horario.',
        },
        {
          tag: 'A3 · Documentos',
          title: 'Presupuestos y facturas en minutos',
          href: '/es/servicios/documentos-ia/',
          text: 'La IA redacta el documento; tú solo lo apruebas y lo envías.',
        },
        {
          tag: 'A4 · Integraciones',
          title: 'Tus herramientas, conectadas',
          href: '/es/servicios/integraciones-rpa/',
          text: 'Los datos pasan solos entre correo, hojas y sistemas. Se acabó copiar y pegar.',
        },
        {
          tag: 'A5 · CRM / ERP',
          title: 'Ventas que no se escapan',
          href: '/es/servicios/software-gestion/',
          text: 'CRM y ERP a tu medida: cada lead con seguimiento, cada cobro a tiempo.',
        },
      ],
      subrowHead: 'Canales e interfaces de tu automatización',
      minis: [
        {
          title: 'Webs que trabajan',
          href: '/es/servicios/diseno-web/',
          text: 'No un escaparate: la interfaz de tu automatización.',
        },
        {
          title: 'Apps para el día a día',
          href: '/es/servicios/apps-moviles/',
          text: 'PWA y multiplataforma: tu negocio en el bolsillo del cliente.',
        },
        {
          title: 'Contenido que sale solo',
          href: '/es/servicios/gestion-contenido/',
          text: 'Fábrica de contenido con IA, supervisada por humanos.',
        },
        {
          title: 'Números para decidir',
          href: '/es/servicios/datos-analitica/',
          text: 'Paneles y datos limpios, sin intuición a ciegas.',
        },
      ],
    },
    /** Интро тёмной секции «Mapa de procesos» — передаётся в <Filament intro={…}> */
    mapa: {
      kicker: 'Mapa de procesos',
      h2Html: '¿Dónde se atasca tu <span class="accent-word">negocio?</span>',
      text: 'Cada negocio tiene un punto que lo frena: un proceso apagado que consume horas y deja escapar clientes. Lo encontramos — y lo encendemos.',
      cta: { label: 'Explorar el mapa →', href: '/es/soluciones/' },
    },
    proceso: {
      kicker: 'Cómo trabajamos',
      h2: 'De la primera llamada al resultado',
      steps: [
        { title: 'Diagnóstico', text: 'Encontramos el proceso que más horas te roba. Gratis y sin compromiso.' },
        { title: 'Prototipo en días', text: 'Lo pruebas con tus datos reales antes de decidir.' },
        { title: 'Puesta en marcha', text: 'Integrado con tus herramientas y tu equipo formado.' },
        { title: 'Soporte y mejora', text: 'Medimos, ajustamos y ampliamos lo que funciona.' },
      ],
    },
    sectores: {
      kicker: 'Sectores',
      h2: 'Tu sector, tu automatización',
      cards: [
        {
          title: 'Clínicas',
          href: '/es/soluciones/clinicas/',
          flowHtml:
            '<b>Agenda saturada</b><span class="arr">→</span>bot-recepción con citas<span class="arr">→</span><b>ningún paciente sin respuesta</b>',
        },
        {
          title: 'Inmobiliarias',
          href: '/es/soluciones/inmobiliarias/',
          flowHtml:
            '<b>Leads a medianoche</b><span class="arr">→</span>bot que cualifica y agenda visitas<span class="arr">→</span><b>más visitas, menos llamadas</b>',
        },
        {
          title: 'Gestorías',
          href: '/es/soluciones/gestorias/',
          flowHtml:
            '<b>Facturas en PDF</b><span class="arr">→</span>extracción automática de datos<span class="arr">→</span><b>cierres sin horas extra</b>',
        },
        {
          title: 'Construcción',
          href: '/es/soluciones/construccion/',
          flowHtml:
            '<b>Presupuestos que tardan días</b><span class="arr">→</span>generador con IA<span class="arr">→</span><b>oferta el mismo día</b>',
        },
        {
          title: 'Restaurantes',
          href: '/es/soluciones/restaurantes/',
          flowHtml:
            '<b>Teléfono que no para</b><span class="arr">→</span>bot de reservas y pedidos<span class="arr">→</span><b>mesas llenas sin colgar llamadas</b>',
        },
        {
          title: 'Relocation',
          href: '/es/soluciones/relocation/',
          flowHtml:
            '<b>Las mismas 20 preguntas</b><span class="arr">→</span>asistente multilingüe<span class="arr">→</span><b>clientes atendidos, equipo libre</b>',
        },
      ],
      more: { label: 'Todas las industrias →', href: '/es/soluciones/' },
    },
    demos: {
      kicker: 'Demos en vivo',
      h2: 'Pruébalo antes de pedirlo',
      lead: 'Sin casos inflados ni promesas: demos funcionando que puedes probar ahora mismo.',
      badge: 'Estás hablando con IA · AI Act art. 50',
      cards: [
        {
          title: 'Bot-recepción',
          text: 'Escríbele como si fueras un paciente: agenda una cita de prueba y mira cómo responde.',
          link: { label: 'Probar demo →', href: '/es/demos/' },
        },
        {
          title: 'Generador de presupuestos',
          text: 'Dale los datos de una obra o un pedido y recibe un presupuesto listo para enviar.',
          link: { label: 'Probar demo →', href: '/es/demos/' },
        },
        {
          title: 'Lector de correo',
          text: 'Pega un email de cliente y mira cómo lo convierte en tarea, respuesta y registro en el CRM.',
          link: { label: 'Probar demo →', href: '/es/demos/' },
        },
      ],
    },
    /** Тизер цен — КАНОН (Start desde 300 € / Negocio desde 1 500 € featured / Núcleo a medida) */
    precios: {
      kicker: 'Precios',
      h2: 'Empieza pequeño. Crece cuando funcione.',
      recommendLabel: 'Recomendado',
      cards: <PriceCardData[]>[
        {
          plan: 'Start',
          price: 'desde 300',
          cur: '€',
          note: 'setup · suscripción desde 150 €/mes si hay bot',
          items: ['Un bot o una automatización clave', 'En marcha en días, no meses', 'Marcado de IA incluido (AI Act)'],
          cta: { label: 'Detalles', href: '/es/precios/' },
          featured: false,
        },
        {
          plan: 'Negocio',
          price: 'desde 1 500',
          cur: '€',
          note: 'setup · suscripción desde 150 €/mes',
          items: [
            'Bot + documentos o CRM: dos procesos',
            'Integración con tus herramientas',
            'Web como interfaz de la automatización',
            'Soporte prioritario',
          ],
          cta: { label: 'Pedir propuesta', href: '/es/contacto/' },
          featured: true,
        },
        {
          plan: 'Núcleo',
          price: 'a medida',
          note: 'setup · suscripción — según alcance',
          items: [
            'Mapa completo: varios procesos automatizados',
            'Web o app a medida como interfaz',
            'Equipo dedicado a tu negocio',
          ],
          cta: { label: 'Detalles', href: '/es/precios/' },
          featured: false,
        },
      ],
      footHtml:
        'Todos los planes: setup + suscripción, IVA no incluido. La propuesta se cierra tras el diagnóstico — sin sorpresas. <a href="/es/precios/">Ver qué incluye cada plan →</a>',
    },
    cta: {
      h2Html: '¿Qué proceso te roba más horas? <span class="accent-word">Enciéndelo.</span>',
      note: 'Respuesta hoy · ES / RU / EN',
      cta: { label: 'Pedir propuesta', href: '/es/contacto/' },
    },
  },

  /* ============================== RU ============================== */
  ru: {
    seo: {
      title: 'Автоматизация и боты под ключ в Испании | litcore.ai',
      description:
        'ИИ-боты, документы и CRM под ключ — на русском, в Испании. Заявки ловятся 24/7, документы за минуты, вы свободны. Живые демо. Напишите в Telegram.',
    },
    hero: {
      kicker: 'Автоматизация · Боты · Под ключ',
      h1Html: 'Рутину — ИИ. Бизнес — <span class="accent-word">вам.</span>',
      lead: 'Вы в Испании и всё тащите сами: заявки в WhatsApp по вечерам, счета, запись клиентов. Мы ставим ИИ-ботов, документы и CRM под ключ — на русском, быстро, здесь. Запуск за дни.',
      primary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL }, // Telegram подтверждён владельцем: litcore_ai
      secondary: { label: 'Посмотреть демо-бота', href: '/ru/demo/' },
    },
    trust: {
      aria: 'Где и как работаем',
      items: [
        'Мы в Испании: Астурия (Овьедо, Хихон)',
        'работаем по всей стране',
        'договор ЕС, оплата в евро',
        'RU / ES / EN',
        'GDPR · ИИ помечен честно (AI Act)',
      ],
    },
    services: {
      kicker: 'Услуги',
      h2: 'Что забираем на себя',
      // RU-порядок из home/ru.md: сначала самое ходовое (A2, A5, A3, A0, A1, A4).
      // Моно-теги «A# · категория» — как в ES-макете, категории по названиям услуг из ru.md.
      cards: [
        {
          tag: 'A2 · Боты',
          title: 'Бот-ресепшн: ни одной потерянной заявки',
          href: '/ru/uslugi/chat-bot/',
          text: 'Отвечает клиентам в WhatsApp и Telegram, записывает и напоминает — даже когда вы спите.',
        },
        {
          tag: 'A5 · CRM / ERP',
          title: 'CRM, в которой видно деньги',
          href: '/ru/uslugi/biznes-soft/',
          text: 'Каждый лид дожат, каждый счёт под контролем — без табличек в голове.',
        },
        {
          tag: 'A3 · Документы',
          title: 'Документы за минуты',
          href: '/ru/uslugi/dokumenty-ii/',
          text: 'Сметы, счета, письма и КП пишет ИИ — вы только проверяете и отправляете.',
        },
        {
          tag: 'A0 · Процессы',
          title: 'Автоматизация процессов',
          href: '/ru/uslugi/avtomatizaciya/',
          text: 'Найдём, где буксует, — уберём рутину, замерим результат.',
        },
        {
          tag: 'A1 · Ассистенты',
          title: 'ИИ-ассистенты',
          href: '/ru/uslugi/ii-assistenty/',
          text: 'Разбирают почту и чаты, готовят ответы, держат клиента тёплым.',
        },
        {
          tag: 'A4 · Интеграции',
          title: 'Интеграции и RPA',
          href: '/ru/uslugi/integracii-rpa/',
          text: 'Свяжем ваши сервисы, чтобы данные бегали сами.',
        },
      ],
      subrowHead: 'Каналы и интерфейсы вашей автоматизации',
      minis: [
        {
          title: 'Сайт под ключ',
          href: '/ru/uslugi/sozdanie-saytov/',
          text: 'Сайт под ключ как интерфейс автоматизации.',
        },
        {
          title: 'Приложения',
          href: '/ru/uslugi/mobilnye-prilozheniya/',
          text: 'Приложения (PWA / кроссплатформа).',
        },
        {
          title: 'Контент и аналитика',
          href: '/ru/uslugi/',
          text: 'Контент и аналитика — в той же связке.',
        },
      ],
    },
    /** Заметная дверь для поставщиков — сразу после услуг (home/ru.md) */
    proveedores: {
      h2: 'Работаете с релокантами? Мы — провайдер для провайдеров.',
      text: 'Клиника с русскоязычным приёмом, релокейт-агент, управляющий недвижимостью, «муж на час» — вам мы ставим бот-ресепшн, лид-бота и CRM, которые ловят заявки из чатов 24/7. Особенно на севере: Астурия и Бильбао — наша земля.',
      cta: { label: 'Подробнее для поставщиков →', href: '/ru/dlya-postavshchikov/' },
    },
    /**
     * Статический тёмный тизер «карта процессов» (Filament на RU не ставим — нет словаря i18n).
     * Разметка адаптирована из index-es.html #mapa; подписи узлов — RU (лексика home/ru.md / filament-spec).
     */
    mapa: {
      kicker: 'Карта процессов',
      h2Html: 'Где буксует ваш <span class="accent-word">бизнес?</span>',
      // Перевод верифицированного ES-лида секции #mapa (index-es.html)
      text: 'В каждом бизнесе есть точка, которая его тормозит: погасший процесс, который съедает часы и упускает клиентов. Мы находим её — и зажигаем.',
      cta: { label: 'Изучить карту →', href: '/ru/resheniya/' },
      svgTitle: 'Карта процессов бизнеса',
      svgDesc:
        'Ядро автоматизации связано с процессами: запись, WhatsApp, сметы, CRM, почта и продажи. Погасший узел показывает узкое место — счета.',
      nodes: [
        { cx: 150, cy: 92, lx: 150, ly: 72, label: 'ЗАПИСЬ', variant: 'cyan' },
        { cx: 470, cy: 72, lx: 470, ly: 52, label: 'WHATSAPP', variant: 'indigo' },
        { cx: 560, cy: 200, lx: 560, ly: 180, label: 'СМЕТЫ', variant: 'cyan' },
        { cx: 500, cy: 330, lx: 500, ly: 356, label: 'CRM', variant: 'indigo' },
        { cx: 300, cy: 368, lx: 300, ly: 394, label: 'ПРОДАЖИ', variant: 'cyan' },
        { cx: 118, cy: 322, lx: 118, ly: 348, label: 'ПОЧТА', variant: 'indigo' },
        { cx: 152, cy: 208, lx: 152, ly: 184, label: 'СЧЕТА', variant: 'dim' },
      ] as { cx: number; cy: number; lx: number; ly: number; label: string; variant: 'cyan' | 'indigo' | 'dim' }[],
    },
    sectores: {
      kicker: 'Отрасли',
      h2: 'Ваша ниша — ваша автоматизация',
      cards: [
        {
          title: 'Медицина',
          href: '/ru/resheniya/medicina/',
          flowHtml:
            '<b>Запись и вопросы пациентов</b><span class="arr">→</span>бот-ресепшн на русском и испанском<span class="arr">→</span><b>приём заполнен, телефон молчит</b>',
        },
        {
          title: 'Недвижимость',
          href: '/ru/resheniya/nedvizhimost/',
          flowHtml:
            '<b>Заявки из чатов ночью</b><span class="arr">→</span>бот квалифицирует и назначает показы<span class="arr">→</span><b>показы вместо переписок</b>',
        },
        {
          title: 'Юристы и миграция',
          href: '/ru/resheniya/yuristy/',
          flowHtml:
            '<b>Одни и те же вопросы</b><span class="arr">→</span>ассистент отвечает и собирает документы<span class="arr">→</span><b>консультации только по делу</b>',
        },
        {
          title: 'Релокация',
          href: '/ru/resheniya/relokaciya/',
          flowHtml:
            '<b>20 одинаковых вопросов в день</b><span class="arr">→</span>многоязычный ассистент<span class="arr">→</span><b>клиенты довольны, команда свободна</b>',
        },
        {
          title: 'Бухгалтерия',
          href: '/ru/resheniya/buhgalteriya/',
          flowHtml:
            '<b>Счета и PDF вручную</b><span class="arr">→</span>ИИ вытаскивает данные сам<span class="arr">→</span><b>закрытие месяца без ночей</b>',
        },
        {
          title: 'Стройка и ремонт',
          href: '/ru/resheniya/stroitelstvo/',
          flowHtml:
            '<b>Смета делается днями</b><span class="arr">→</span>генератор смет с ИИ<span class="arr">→</span><b>КП в тот же день</b>',
        },
      ],
      more: { label: 'Все отрасли →', href: '/ru/resheniya/' },
    },
    demos: {
      kicker: 'Демо',
      h2: 'Потрогайте прежде чем платить',
      badge: 'Вы общаетесь с ИИ · AI Act ст. 50',
      cards: [
        {
          title: 'Бот-ресепшн клиники',
          text: 'Напишите ему как пациент: запишет, переспросит, напомнит. По-русски и по-испански.',
          link: { label: 'Попробовать демо →', href: '/ru/demo/' },
        },
        {
          title: 'Генератор смет и КП',
          text: 'Дайте вводные — получите готовый документ.',
          link: { label: 'Попробовать демо →', href: '/ru/demo/' },
        },
        {
          title: 'Разбор письма',
          text: 'Вставьте письмо клиента: бот превратит его в задачу, ответ и запись в CRM.',
          link: { label: 'Попробовать демо →', href: '/ru/demo/' },
        },
      ],
      upsellHtml: `Такой же бот — для вашего бизнеса. <a href="${TELEGRAM_URL}">Обсудим в Telegram.</a>`,
    },
    proceso: {
      kicker: 'Как работаем',
      h2: 'От первого созвона до результата',
      steps: [
        { title: 'Диагностика', text: 'Созвон на русском, находим узкое место. Бесплатно.' },
        { title: 'Прототип за дни', text: 'Пробуете на своих данных.' },
        { title: 'Запуск', text: 'Подключаем к вашим WhatsApp/Telegram и сервисам.' },
        { title: 'Поддержка', text: 'На связи в вашем часовом поясе, докручиваем что работает.' },
      ],
    },
    /** Канон цен (home/ru.md §Цены): от 300 € / от 1 500 € / под задачу */
    precios: {
      kicker: 'Цены',
      h2: 'Понятные деньги: setup + подписка',
      recommendLabel: 'Рекомендуем',
      cards: <PriceCardData[]>[
        {
          plan: 'Старт',
          price: 'от 300',
          cur: '€',
          note: 'setup · подписка от 150 €/мес, если есть бот',
          items: ['Один бот или одна автоматизация', 'Запуск за дни', 'Маркировка ИИ включена'],
          cta: { label: 'Подробнее', href: '/ru/tseny/' },
          featured: false,
        },
        {
          plan: 'Бизнес',
          price: 'от 1 500',
          cur: '€',
          note: 'setup · подписка от 150 €/мес',
          items: [
            'Бот + документы или CRM',
            'Интеграции с вашими сервисами',
            'Сайт как интерфейс',
            'Приоритетная поддержка',
          ],
          cta: { label: 'Обсудить в Telegram', href: TELEGRAM_URL }, // RU-CTA = Telegram
          featured: true,
        },
        {
          plan: 'Ядро',
          price: 'под задачу',
          note: 'setup · подписка — по объёму',
          items: ['Несколько процессов под ключ', 'Сайт или приложение на заказ', 'Выделенная команда'],
          cta: { label: 'Подробнее', href: '/ru/tseny/' },
          featured: false,
        },
      ],
      footHtml:
        'Цифры — ориентир, без IVA (НДС); точную смету даём после диагностики. Кейсов с цифрами не рисуем — есть пилоты и живые демо. <a href="/ru/tseny/">Подробнее о ценах →</a>',
    },
    cta: {
      h2Html: 'Напишите нам по-русски. <span class="accent-word">Сегодня</span> и ответим.',
      primary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL }, // Telegram подтверждён владельцем: litcore_ai
      secondary: { label: 'Оставить заявку', href: '/ru/kontakty/' }, // короткая форма (home/ru.md §Финальный CTA)
    },
  },

  /* ============================== EN (заглушка Фазы 2) ============================== */
  en: {
    seo: {
      title: 'AI Process Automation & Dedicated Teams | litcore.ai',
      description:
        'AI process automation, chatbots and business software engineered in Spain for EU companies. Dedicated teams, augmentation, white label. Book a call.',
    },
    hero: {
      kicker: 'Automation · Engineering · EU',
      h1Html:
        'AI process automation and full-cycle engineering <span class="accent-word">teams</span> for EU companies',
      lead: 'One team covers the whole cycle: process analysis, AI automation, web and app interfaces, support. Based in Spain, built for EU compliance.',
      primary: { label: 'Book an intro call', href: '/en/contact/' },
      secondary: { label: 'See collaboration models', href: '/en/about/' },
    },
    trust: {
      aria: 'Where and how we work',
      items: ['Spain, EU', 'GDPR & EU AI Act ready', 'Data processed in the EU', 'EN / ES / RU'],
    },
    services: {
      kicker: 'Services',
      h2: 'What we build',
      cards: [
        {
          title: 'Process automation with AI',
          href: '/en/services/automation/',
          text: 'We map the bottleneck, automate it and measure the outcome.',
        },
        {
          title: 'Integrations & RPA',
          href: '/en/services/integrations-rpa/',
          text: 'ETL, external APIs, internal tooling — data moves without manual steps.',
        },
        {
          title: 'AI assistants & agents',
          href: '/en/services/ai-assistants/',
          text: 'LLM-based assistants with RAG: they answer, triage and prepare work for your team.',
        },
        {
          title: 'Chatbots & reception bots',
          href: '/en/services/chatbots/',
          text: 'Multilingual bots for web and messaging — labelled as AI, supervised by humans.',
        },
        {
          title: 'AI document workflows',
          href: '/en/services/ai-documents/',
          text: 'Quotes, invoices, letters and proposals drafted by AI, approved by people.',
        },
        {
          title: 'Business software (CRM/ERP/BPM)',
          href: '/en/services/business-software/',
          text: 'Sales, service and back-office automation on top of your systems.',
        },
      ],
    },
    mapa: {
      kicker: 'Process map',
      h2Html: 'Where does your <span class="accent-word">business</span> stall?',
      text: 'Every business has a dim process that burns hours and leaks customers. We find it — and ignite it.',
    },
    models: {
      kicker: 'Collaboration models',
      h2: 'Three ways to work with us',
      cards: [
        {
          title: 'Dedicated team',
          text: 'A stable, full-cycle team on your product or process map. Predictable capacity without hiring.',
        },
        {
          title: 'Team augmentation',
          text: 'Our engineers inside your team: AI/LLM integrations, backend, data, DevOps.',
        },
        {
          title: 'White label',
          text: "Automation and bots delivered under your agency's brand, including reception bots for your clients.",
        },
      ],
      footHtml: 'Also: product from scratch / MVP. <a href="/en/about/">Details →</a>',
    },
    cta: {
      h2: 'An EU engineering team, without the hiring cycle.',
      cta: { label: 'Book an intro call', href: '/en/contact/' },
    },
  },
};
