/**
 * P07 «Для поставщиков» (сегмент PROVIDER) — данные-копи по языкам.
 * RU — вербатим из design-pack/pages/dlya-postavshchikov.html (RU-макет, 1:1) = content/proveedores/ru.md.
 * ES — из content/proveedores/es.md в том же ките (канал WhatsApp; НЕ зеркало RU).
 * EN — НЕ строится по инвентарю (SPEC-V2 §6: PROVIDER — только ES/RU; en.md — draft: true).
 */
import { TELEGRAM_URL, WHATSAPP_URL } from '../config/site';
import type { Cta, Crumb, PainCard, PlanData } from './documentos-ia';

export interface ProveedoresCopy {
  seo: { title: string; description: string };
  crumbs: Crumb[];
  crumbsSchema: { name: string; path: string }[];
  hero: {
    h1Pre: string;
    h1Accent: string;
    lead: string;
    ctaPrimary: Cta;
    ctaSecondary: Cta;
  };
  pains: { kicker: string; h2: string; cards: PainCard[] };
  pack: { kicker: string; h2: string; lead: string; cards: PainCard[] };
  steps: { h2: string; items: { title: string; text: string }[] };
  dark: { kicker: string; h2: string; lead: string; caption: string };
  teaser: { h2: string; lead?: string; allPrices: Cta; plan: PlanData };
  faq: { h2: string; items: { q: string; a: string }[] };
  ctaBand: { h2Pre: string; h2Accent: string; primary: Cta; ghost: Cta };
}

export const PROVEEDORES_RU: ProveedoresCopy = {
  seo: {
    title: 'Бот-ресепшн и CRM для поставщиков услуг | litcore.ai',
    description:
      'Бот-ресепшн для клиник с RU-приёмом, релокейт-агентов, управляющих недвижимостью и риелторов: заявки 24/7 на русском и испанском, мини-CRM, лендинг. Демо — в Telegram.',
  },
  crumbs: [{ label: 'Главная', href: '/ru/' }, { label: 'Для поставщиков' }],
  crumbsSchema: [
    { name: 'Главная', path: '/ru/' },
    { name: 'Для поставщиков', path: '/ru/dlya-postavshchikov/' },
  ],
  hero: {
    h1Pre: 'Поток клиентов — без разрывающегося ',
    h1Accent: 'телефона.',
    lead: 'Вы обслуживаете русскоязычных релокантов на севере Испании: приём, аренда, переезд, ремонт. Мы делаем так, чтобы заявки не терялись — бот отвечает своим по-русски и по-испански, а вы работаете.',
    // Telegram подтверждён владельцем: litcore_ai (TELEGRAM_URL в src/config/site.ts)
    ctaPrimary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    ctaSecondary: { label: 'Посмотреть демо', href: '/ru/demo/' },
  },
  pains: {
    kicker: 'Знакомо?',
    h2: 'Три дыры, в которые утекают клиенты',
    cards: [
      {
        tag: '23:40 · чат',
        title: 'Заявки ночью — в никуда',
        text: 'Клиент спрашивает стоматолога в Хихоне в 23:40 — в чате, в личке, в комментарии. Утром его уже перехватили. Или он передумал.',
      },
      {
        tag: '1 человек = 2 работы',
        title: 'Вы и работаете, и отвечаете',
        text: 'Каждый звонок во время приёма или на объекте — это либо прерванная работа, либо потерянный клиент. Третьего расписание не даёт.',
      },
      {
        tag: 'RU / ES',
        title: 'Клиенты пишут на двух языках',
        text: 'Русский в Telegram, испанский в WhatsApp. Отвечать нужно на обоих, быстро и одинаково вежливо — даже в воскресенье.',
      },
    ],
  },
  pack: {
    kicker: 'Пакет решений',
    h2: 'Одно ядро — три инструмента',
    lead: 'Настраиваем под вашу нишу за дни: услуги, прайс, тон общения — ваши.',
    cards: [
      {
        tag: '24/7 · TG / WhatsApp / сайт',
        title: 'Бот-ресепшн / лид-бот',
        text: 'Отвечает на вопросы, записывает, напоминает и собирает заявки круглосуточно — на испанском и русском. Сложное сразу передаёт вам. Честно помечен: «Вы общаетесь с ИИ».',
      },
      {
        tag: 'Все заявки — в одном месте',
        title: 'Мини-CRM',
        text: 'Каждое обращение становится карточкой со статусом и напоминанием. Ничего не живёт в личке и блокноте — видно, кто ждёт ответа и кто готов платить.',
      },
      {
        tag: 'RU + ES',
        title: 'Страница-визитка под ваши услуги',
        text: 'Куда бот и чаты приводят клиента: услуги, цены, запись — на двух языках. Лендинг, который работает на заявку, а не «для галочки».',
      },
    ],
  },
  steps: {
    h2: 'Как работаем',
    items: [
      {
        title: 'Демо под вашу нишу',
        text: 'Показываем бота на вашем кейсе — прямо в Telegram, за один созвон.',
      },
      {
        title: 'Настройка',
        text: 'Ваши услуги, прайс, тон общения. Никаких шаблонных ответов «в пустоту».',
      },
      {
        title: 'Подключение каналов',
        text: 'Telegram, WhatsApp, сайт — заявки со всех каналов стекаются в одно место.',
      },
      {
        title: 'CRM и передача человеку',
        text: 'Рутину закрывает бот, сложные вопросы эскалируются вам. Человек — всегда в контуре.',
      },
    ],
  },
  dark: {
    kicker: 'Узкое место',
    h2: 'Ваше узкое место — приём заявок',
    lead: 'Работа отличная и клиенты довольны — а растёт не бизнес, а очередь непрочитанных. Мы расшиваем одно звено, которое душит все остальные: приём и квалификацию заявок.',
    caption: 'заявка → ответ → запись → CRM',
  },
  teaser: {
    h2: 'Сколько это стоит',
    lead: 'Модель простая: разовая настройка (setup) + подписка, в которую входят хостинг, работа ИИ и поддержка. Вилка зависит от сложности: от простого FAQ-бота до связки «бот + календарь + CRM» на трёх языках.',
    allPrices: { label: 'Все цены и пакеты →', href: '/ru/tseny/' },
    plan: {
      plan: 'Бот-ресепшн под вашу нишу',
      price: 'от 400',
      cur: '€',
      note: 'setup · подписка от 150 €/мес',
      items: [
        'Вилка честно: setup 400–1 500 €, подписка 150–400 €/мес — по сложности',
        'Каналы: Telegram, WhatsApp, сайт',
        'Языки: испанский + русский',
        'Запуск — дни, не месяцы',
      ],
      // Telegram подтверждён владельцем: litcore_ai
      cta: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    },
  },
  faq: {
    h2: 'Частые вопросы',
    items: [
      {
        q: 'Почему именно Telegram?',
        a: 'Потому что ваши клиенты уже там: северные чаты, сарафан, личные рекомендации. Мы отвечаем в том же канале, откуда приходят заявки, — и демо-бота покажем прямо в мессенджере, за минуту.',
      },
      {
        q: 'Что с данными клиентов?',
        a: 'GDPR по-взрослому: минимизация данных (собираем только нужное для заявки), договор об обработке (DPA), данные в ЕС. Чувствительные данные — например, медицинские — через бота не собираем.',
      },
      {
        q: 'Клиент поймёт, что говорит с ботом?',
        a: 'Да, и это правильно: бот честно помечен «Вы общаетесь с ИИ» (AI Act ст. 50). Клиент это ценит, а сложные вопросы бот сразу передаёт живому человеку — вам.',
      },
      {
        q: 'Сколько ждать запуск?',
        a: 'Дни, не месяцы. Демо под вашу нишу — за один созвон, дальше настройка услуг и прайса, подключение каналов — и бот принимает заявки.',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Напишите нам в Telegram — покажем демо на вашем ',
    h2Accent: 'кейсе.',
    // Telegram подтверждён владельцем: litcore_ai
    primary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    ghost: { label: 'Посмотреть демо', href: '/ru/demo/' },
  },
};

export const PROVEEDORES_ES: ProveedoresCopy = {
  seo: {
    title: 'Bot-recepción y CRM para proveedores de servicios | litcore.ai',
    description:
      '¿Sirves a clientes rusohablantes? Bot-recepción 24/7 en ruso y español: citas, leads y CRM sin rutina manual. Prueba la demo de tu nicho hoy.',
  },
  crumbs: [{ label: 'Inicio', href: '/es/' }, { label: 'Para proveedores' }],
  crumbsSchema: [
    { name: 'Inicio', path: '/es/' },
    { name: 'Para proveedores', path: '/es/para-proveedores/' },
  ],
  hero: {
    h1Pre: 'Un flujo de clientes — sin el teléfono ',
    h1Accent: 'echando humo.',
    lead: 'Atiendes a clientes rusohablantes en el norte de España: consulta, alquiler, mudanza, reformas. Hacemos que ninguna solicitud se pierda — el bot responde en ruso y español, 24/7, y tú trabajas.',
    // WhatsApp подтверждён: wa.me/34683156921 (WHATSAPP_URL в src/config/site.ts)
    ctaPrimary: { label: 'Hablar por WhatsApp', href: WHATSAPP_URL ?? '/es/contacto/' },
    ctaSecondary: { label: 'Ver demo', href: '/es/demos/' },
  },
  pains: {
    // TODO: кикер и H2 болей не заданы в es.md — производные по образцу RU-макета
    kicker: '¿Te suena?',
    h2: 'Tres agujeros por los que se escapan los clientes',
    cards: [
      {
        tag: '23:40 · chat',
        title: 'Las solicitudes nocturnas se pierden',
        text: 'Un cliente pregunta por un dentista en Gijón a las 23:40 — en un chat, en un privado. Por la mañana ya se lo llevó otro. O cambió de idea.',
      },
      {
        tag: '1 persona = 2 trabajos',
        title: 'Trabajas y contestas a la vez',
        text: 'Cada llamada durante una consulta o en la obra es trabajo interrumpido o cliente perdido.',
      },
      {
        tag: 'RU / ES',
        title: 'Los clientes escriben en dos idiomas',
        text: 'Ruso en Telegram, español en WhatsApp. Hay que contestar en ambos, rápido y bien — también en domingo.',
      },
    ],
  },
  pack: {
    kicker: 'Paquete de soluciones',
    // TODO: H2 и lead пакета не заданы в es.md — производные по образцу RU-макета
    h2: 'Un núcleo — tres herramientas',
    lead: 'Lo configuramos para tu nicho en días: tus servicios, tus precios, tu tono.',
    cards: [
      {
        tag: '24/7 · Telegram / WhatsApp / web',
        title: 'Bot-recepción / bot de leads',
        text: 'Responde, agenda, recuerda y recoge solicitudes en español y ruso. Lo complejo te lo pasa a ti. Marcado honestamente: «Estás hablando con una IA».',
      },
      {
        tag: 'Todas las solicitudes en un solo sitio',
        title: 'Mini-CRM',
        text: 'Cada contacto se convierte en una ficha con estado y recordatorio. Nada vive en privados ni en la libreta.',
      },
      {
        tag: 'ES + RU',
        title: 'Página de visita / landing para tus servicios',
        text: 'Adonde el bot y los chats llevan al cliente: servicios, precios, reserva — en dos idiomas.',
      },
    ],
  },
  steps: {
    h2: 'Cómo trabajamos',
    items: [
      { title: 'Demo de tu nicho', text: 'Te enseñamos el bot con tu caso, en una llamada.' },
      { title: 'Configuración', text: 'Tus servicios, tus precios, tu tono.' },
      {
        title: 'Conexión de canales',
        text: 'Telegram, WhatsApp, web; todo confluye en un solo lugar.',
      },
      {
        title: 'CRM y escalado a humano',
        text: 'La rutina la cierra el bot; lo delicado, siempre una persona.',
      },
    ],
  },
  dark: {
    kicker: 'Cuello de botella',
    h2: 'Tu cuello de botella es la recepción de solicitudes',
    lead: 'El trabajo es excelente y los clientes, contentos — pero lo que crece no es el negocio, sino la cola de mensajes sin leer. Destapamos el eslabón que ahoga a los demás: recibir y calificar solicitudes.',
    caption: 'solicitud → respuesta → cita → CRM',
  },
  teaser: {
    // TODO: H2 тизера не задан в es.md — производный (зеркало RU «Сколько это стоит»)
    h2: 'Cuánto cuesta',
    allPrices: { label: 'Todos los precios →', href: '/es/precios/' },
    plan: {
      plan: 'Bot-recepción para tu nicho',
      price: 'desde 400',
      cur: '€',
      note: 'setup · suscripción desde 150 €/mes',
      items: [
        'Horquilla honesta: setup 400–1 500 €, suscripción 150–400 €/mes según complejidad',
        'Lanzamiento en días, no meses',
      ],
      cta: { label: 'Pedir propuesta', href: '/es/contacto/' },
    },
  },
  faq: {
    h2: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Por qué mensajería y no solo teléfono?',
        a: 'Porque tus clientes ya escriben ahí. Respondemos en el mismo canal donde llegan las solicitudes y te enseñamos la demo en un minuto.',
      },
      {
        q: '¿Qué pasa con los datos de mis clientes?',
        a: 'GDPR en serio: minimización de datos, contrato de encargo (DPA), datos en la UE. Datos sensibles — p. ej. médicos — no se recogen por el bot.',
      },
      {
        q: '¿El cliente sabrá que habla con una IA?',
        a: 'Sí, y así debe ser: el bot está marcado «Estás hablando con una IA» (AI Act art. 50). Lo complejo pasa siempre a una persona.',
      },
      {
        q: '¿Cuánto tarda el lanzamiento?',
        a: 'Días, no meses: demo → configuración → canales — y el bot recibe solicitudes.',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Escríbenos — te enseñamos la demo con tu ',
    h2Accent: 'caso.',
    primary: { label: 'Pedir propuesta', href: '/es/contacto/' },
    ghost: { label: 'Ver demo', href: '/es/demos/' },
  },
};
