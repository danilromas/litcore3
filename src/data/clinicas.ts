/**
 * P24 «Клиники / медицина» — данные-копи по языкам.
 * ES — вербатим из design-pack/pages/sector-clinicas.html (= content/clinicas/es.md);
 *      JSON-LD (Service + FAQPage + BreadcrumbList) — из макета, домен подставляет schema.ts.
 * RU — из content/clinicas/ru.md (сегмент PROVIDER/RELO: русскоязычный приём, CTA Telegram; НЕ зеркало ES —
 *      без тёмной вставки-«филамента», зато с блоком «Почему сейчас и почему мы»).
 * Тариф-тизер ES: «Bot básico» / «Bot + agenda» (Recomendado) — КАНОН, цифры из макета.
 */
import { TELEGRAM_URL } from '../config/site';
import type { Cta, Crumb, PlanData } from './documentos-ia';

export interface SolCard {
  title: string;
  proceso: string;
  automatizacion: string;
  resultado: string;
  note?: string;
}

export interface ChatMsg {
  from: 'p' | 'b';
  text: string;
}

interface ClinicasBase {
  seo: { title: string; description: string };
  crumbs: Crumb[];
  crumbsSchema: { name: string; path: string }[];
  hero: {
    h1Pre: string;
    h1Accent: string;
    h1Post?: string;
    lead: string;
    ctaPrimary: Cta;
    ctaSecondary: Cta;
  };
  pains: { kicker?: string; h2: string; cards: { tag?: string; title: string; text: string }[] };
  solutions: {
    kicker: string;
    h2: string;
    lead?: string;
    labels: { proceso: string; automatizacion: string; resultado: string };
    cards: SolCard[];
  };
  steps: { kicker?: string; h2: string; items: { title: string; text: string }[] };
  demo: {
    badge: string;
    h2: string;
    chatAria: string;
    chat: ChatMsg[];
    disclaimer: string;
    ctaPrimary: Cta;
    ctaSecondary: Cta;
  };
  pricing: {
    kicker?: string;
    h2: string;
    plans: PlanData[];
    notePre: string;
    noteLink: Cta;
    notePost: string;
  };
  faq: { kicker?: string; h2: string; items: { q: string; a: string }[] };
  ctaBand: { h2Pre: string; h2Accent: string; h2Post?: string; primary: Cta; ghost: Cta };
  schemaService: { name: string; serviceType: string; description: string };
  /** FAQPage JSON-LD (у ES — сокращённые ответы из макета, не равны видимым) */
  schemaFaq: { q: string; a: string }[];
}

export interface ClinicasEsCopy extends ClinicasBase {
  filament: {
    kicker: string;
    h2: string;
    flowAria: string;
    bottleneckNode: string;
    bottleneckNote: string;
    litNodes: string[];
    goldratt: string;
    goldrattMono: string;
  };
}

export const CLINICAS_ES: ClinicasEsCopy = {
  seo: {
    title: 'Automatización IA para clínicas y dentales en España | litcore.ai',
    description:
      'Bot de recepción para clínicas y dentales: citas 24/7 por web y WhatsApp, recordatorios que reducen ausencias, respuestas organizativas en ES/RU. RGPD art. 9, humano en el circuito. Pida una demo.',
  },
  crumbs: [{ label: 'SECTORES', href: '/es/soluciones/' }, { label: 'CLÍNICAS Y DENTAL' }],
  crumbsSchema: [
    { name: 'Sectores', path: '/es/soluciones/' },
    { name: 'Clínicas y dental', path: '/es/soluciones/clinicas/' },
  ],
  hero: {
    h1Pre: 'Agenda llena, teléfono ',
    h1Accent: 'libre.',
    lead: 'Sus pacientes reservan solos, 24/7, por la web o WhatsApp. El bot de recepción confirma, recuerda y responde lo de siempre — y su equipo atiende a quien tiene delante, no al teléfono.',
    ctaPrimary: { label: 'Pedir propuesta', href: '/es/contacto/' },
    ctaSecondary: { label: 'Probar el bot de recepción', href: '#demo' },
  },
  pains: {
    kicker: 'El día a día de recepción',
    h2: 'Tres fugas que vacían la agenda',
    cards: [
      {
        tag: '09:30 · Hora punta',
        title: 'El teléfono suena y nadie puede cogerlo',
        text: 'Recepción atiende al paciente en mostrador mientras dos llamadas se pierden. Cada llamada perdida es, con frecuencia, un paciente que reserva en la clínica de al lado.',
      },
      {
        tag: 'Silla vacía',
        title: 'El no-show se come la facturación',
        text: 'Citas olvidadas, nadie confirma, el hueco se descubre cuando ya no se puede rellenar. Cada ausencia sin aviso es tiempo de sillón pagado que no produce.',
      },
      {
        tag: '20:00 · Sábado',
        title: 'Por la tarde y el fin de semana, la reserva calla',
        text: 'El paciente decide cuándo le duele, no en horario de recepción. Si nadie contesta por la noche o el domingo, la primera clínica que responde se lleva la cita.',
      },
    ],
  },
  solutions: {
    kicker: 'Su proceso → nuestra automatización → resultado',
    h2: 'Lo que automatizamos en una clínica',
    lead: 'Solo la parte organizativa. Ninguna solución diagnostica ni valora síntomas: la decisión clínica es siempre del profesional.',
    labels: { proceso: 'Proceso', automatizacion: 'Automatización', resultado: 'Resultado' },
    cards: [
      {
        title: 'Bot de recepción: citas 24/7 por web y WhatsApp',
        proceso:
          'La reserva depende del teléfono y del horario de recepción; fuera de horas no entra nadie.',
        automatizacion:
          'Un bot propone huecos reales, agenda, reprograma y cancela — en la web y en WhatsApp, a cualquier hora. Lo no estándar («me duele mucho», «tema de pago») lo pasa a su equipo, sin valorar nada médico.',
        resultado:
          'La agenda se llena también de noche y en fin de semana; el teléfono queda libre para lo que sí necesita una persona.',
      },
      {
        title: 'Recordatorios con confirmación en un clic',
        proceso:
          'El paciente olvida la cita; nadie llama para confirmar; el hueco se pierde sin margen para rellenarlo.',
        automatizacion:
          'Recordatorio automático por WhatsApp con botones «confirmo / cambiar / cancelar». Si el paciente cancela a tiempo, el hueco vuelve a la agenda y puede ofrecerse a otro.',
        resultado:
          'Menos ausencias, menos sillas vacías, agenda que se entera antes de que el hueco sea irrecuperable.',
      },
      {
        title: 'Respuestas a lo de siempre: precios, preparación, dirección',
        proceso:
          'Recepción repite decenas de veces al día lo mismo: horarios, tarifas orientativas, cómo llegar, qué traer, si trabajan con tal seguro.',
        automatizacion:
          'El asistente responde con los datos de su clínica, citando su propio tarifario y condiciones. No es consulta médica — lo dice explícitamente — y una persona se incorpora al chat en un clic.',
        resultado:
          'Menos interrupciones, respuestas iguales y correctas a cualquier hora, recepción concentrada en pacientes.',
      },
      {
        title: 'Atención bilingüe ES / RU (y EN)',
        proceso:
          'El paciente internacional o ruso-hablante depende de una persona concreta del equipo que habla su idioma — y no escala.',
        automatizacion:
          'El bot atiende en el idioma del paciente: reserva, recuerda y responde lo organizativo en español, ruso o inglés con la misma calidad.',
        resultado:
          'Un «departamento de paciente internacional» al alcance de una clínica pequeña — sin contratar.',
        note: 'Para clínicas con consulta en ruso en España es la vía directa de crecer con la comunidad ruso-hablante.',
      },
    ],
  },
  filament: {
    kicker: 'Dónde se atasca el flujo',
    h2: 'El cuello de botella no es la agenda. Es el teléfono.',
    flowAria:
      'Esquema: recepción (antes, teléfono colapsado) conectada con agenda y recordatorios; el nodo de recepción se enciende al automatizarse',
    bottleneckNode: 'recepción',
    bottleneckNote: 'antes: teléfono colapsado',
    litNodes: ['agenda', 'recordatorios'],
    goldratt:
      'Un sistema rinde lo que rinde su eslabón más estrecho. En la mayoría de clínicas ese eslabón es la recepción telefónica: por eso la encendemos primero — y la agenda y los recordatorios empiezan a trabajar a pleno flujo.',
    goldrattMono: 'Teoría de las Restricciones · Goldratt',
  },
  steps: {
    kicker: 'Cómo lo implantamos',
    h2: 'Del primer vistazo al piloto en semanas',
    items: [
      {
        title: 'Auditoría del flujo de citas',
        text: 'Media hora con su equipo: cómo entra hoy una cita, dónde se pierde, qué sistema usan.',
      },
      {
        title: 'Bot piloto en días',
        text: 'Levantamos el bot con sus horarios, tarifas y preguntas frecuentes reales.',
      },
      {
        title: 'Conexión a su agenda',
        text: 'Integración con su calendario, CRM o software de gestión — sin cambiar de sistema.',
      },
      {
        title: 'Soporte y mejora',
        text: 'Medimos, ajustamos respuestas y ampliamos a nuevos procesos cuando el primero funciona.',
      },
    ],
  },
  demo: {
    badge: 'Estás hablando con IA · AI Act art. 50',
    h2: 'Prueba el bot de recepción',
    chatAria: 'Ejemplo de conversación con el bot de recepción',
    chat: [
      { from: 'p', text: 'Hola, quiero una limpieza esta semana' },
      {
        from: 'b',
        text: '¡Claro! Tengo hueco el jueves a las 10:30, el jueves a las 17:00 o el viernes a las 12:15. ¿Cuál le viene mejor?',
      },
      { from: 'p', text: 'El viernes a las 12:15' },
      {
        from: 'b',
        text: 'Reservado: limpieza dental, viernes 12:15. Le enviaré un recordatorio el día antes con opción de confirmar o cambiar la hora. ✓',
      },
    ],
    disclaimer:
      'El bot no da consejos médicos ni valora síntomas — solo gestiona citas y preguntas organizativas. Ante cualquier duda clínica le atiende una persona.',
    ctaPrimary: { label: 'Abrir la demo completa', href: '/es/demos/' },
    ctaSecondary: { label: 'Verlo con los datos de su clínica', href: '/es/contacto/' },
  },
  pricing: {
    kicker: 'Cuánto cuesta',
    h2: 'Setup + suscripción, sin sorpresas',
    plans: [
      {
        plan: 'Bot básico',
        price: '400',
        cur: '€',
        note: 'setup desde · desde 150 €/mes',
        items: [
          'Bot de citas en web o WhatsApp',
          'Recordatorios con confirmación en un clic',
          'Respuestas organizativas con sus datos',
          'Aviso «Estás hablando con IA» incluido',
        ],
        cta: { label: 'Detalles', href: '/es/precios/' },
      },
      {
        plan: 'Bot + agenda',
        price: '1 500',
        cur: '€',
        note: 'setup llave en mano · desde 250 €/mes',
        items: [
          'Todo lo del Bot básico',
          'Conexión a su agenda / CRM / software de gestión',
          'Bilingüe ES / RU (y EN) para paciente internacional',
          'Traspaso a humano en un clic + informe mensual',
        ],
        cta: { label: 'Pedir propuesta', href: '/es/contacto/' },
        featured: true,
        recommendLabel: 'Recomendado',
      },
    ],
    notePre: 'Precios orientativos «desde»; la cifra exacta, tras una auditoría corta de su flujo de citas. ',
    noteLink: { label: 'Ver todos los precios', href: '/es/precios/' },
    notePost: '.',
  },
  faq: {
    kicker: 'Preguntas frecuentes',
    h2: 'Lo que preguntan las clínicas',
    items: [
      {
        q: '¿Cómo tratáis los datos de salud? (RGPD art. 9)',
        a: 'Con minimización estricta. El bot gestiona lo organizativo — nombre, contacto, especialista y hora — y no pide síntomas en texto libre ni almacena historias clínicas. Los datos de salud son categoría especial por el art. 9 del RGPD: antes de implantar revisamos con usted la base legal, el consentimiento y el contrato de encargo (DPA). No prometemos cumplimiento «de fábrica» — lo verificamos para su caso concreto.',
      },
      {
        q: '¿El bot da consejos o consultas médicas?',
        a: 'No, y lo dice en su primer mensaje. Es un asistente organizativo: citas, recordatorios, precios orientativos, direcciones, preparación de la visita. No diagnostica, no valora la gravedad de un síntoma y no sustituye la consulta médica: cualquier decisión clínica queda en manos del profesional sanitario.',
      },
      {
        q: 'Ya tenemos nuestra propia agenda o CRM. ¿Sirve?',
        a: 'Sí. Nos integramos con su calendario, CRM o software de gestión mediante API o conectores — usted no cambia de sistema. Si su programa es antiguo y no tiene API, lo valoramos con honestidad: hay vías de integración, pero se lo diremos claro si el esfuerzo no compensa.',
      },
      {
        q: '¿Cuánto se tarda en implantar?',
        a: 'El bot piloto con sus datos reales se levanta en días. El piloto completo sobre un proceso — la recepción — dura de 2 a 4 semanas: auditoría corta, puesta en marcha, conexión a la agenda y ajuste fino. Solo después ampliamos a más procesos.',
      },
      {
        q: '¿Y si la IA se equivoca?',
        a: 'Para eso hay una persona en el circuito. Todo lo dudoso o no estándar pasa a su equipo en un clic; el bot no actúa de forma autónoma sobre nada que afecte a la salud del paciente y siempre avisa de que es una IA (AI Act art. 50). Usted supervisa y corrige — el bot aprende de esas correcciones.',
      },
    ],
  },
  ctaBand: {
    h2Pre: '¿Lo probamos con ',
    h2Accent: 'su agenda?',
    primary: { label: 'Pedir propuesta', href: '/es/contacto/' },
    ghost: { label: 'Ver demos', href: '/es/demos/' },
  },
  schemaService: {
    name: 'Bot de recepción y automatización IA para clínicas y dentales',
    serviceType: 'Automatización de procesos con IA para clínicas médicas y dentales',
    description:
      'Citas 24/7 por web y WhatsApp, recordatorios con confirmación, respuestas organizativas multilingües. Sin diagnósticos: la decisión clínica siempre es del profesional.',
  },
  // FAQPage из JSON-LD макета (сокращённые ответы — как в макете, НЕ равны видимым)
  schemaFaq: [
    {
      q: '¿Cómo tratáis los datos de salud (RGPD art. 9)?',
      a: 'Con minimización estricta: el bot gestiona nombre, contacto y hora de la cita; no pide síntomas en texto libre ni almacena historias clínicas. Antes de implantar revisamos con usted la base legal y el DPA — no prometemos cumplimiento «de fábrica», lo verificamos para su caso.',
    },
    {
      q: '¿El bot da consejos o consultas médicas?',
      a: 'No. Es un asistente organizativo: citas, recordatorios y preguntas administrativas. No diagnostica ni valora síntomas; cualquier decisión clínica queda siempre en manos del profesional sanitario.',
    },
    {
      q: 'Ya usamos nuestra propia agenda o CRM, ¿sirve?',
      a: 'Sí: nos integramos con su agenda o software de gestión mediante API o conectores. Si su sistema es antiguo y no tiene API, lo valoramos con honestidad y proponemos la vía de integración realista.',
    },
    {
      q: '¿Cuánto se tarda en implantar?',
      a: 'El bot piloto se levanta en días. El piloto completo sobre un proceso — la recepción — dura de 2 a 4 semanas: auditoría corta, puesta en marcha, conexión a su agenda y ajuste.',
    },
    {
      q: '¿Y si la IA se equivoca?',
      a: 'Hay una persona en el circuito: todo lo dudoso pasa a su equipo en un clic y el bot avisa siempre de que es una IA (AI Act art. 50). El bot no actúa de forma autónoma sobre nada que afecte a la salud del paciente.',
    },
  ],
};

export interface ClinicasRuCopy extends ClinicasBase {
  /** PROVIDER-угол «Почему сейчас и почему мы» (только RU) */
  why: { h2: string; text: string };
  /** Мост под CTA-полосой: услуги для релокантов не только в медицине */
  bridge: { pre: string; link: Cta };
}

export const CLINICAS_RU: ClinicasRuCopy = {
  seo: {
    title: 'Автоматизация клиники в Испании: запись и приём на русском | litcore.ai',
    description:
      'Бот записи и напоминаний для клиник с русскоязычным приёмом в Испании: пациенты записываются сами 24/7 на русском и испанском, меньше пропусков, админ свободен. GDPR ст. 9. Демо в Telegram.',
  },
  crumbs: [{ label: 'ОТРАСЛИ', href: '/ru/resheniya/' }, { label: 'МЕДИЦИНА И СТОМАТОЛОГИЯ' }],
  crumbsSchema: [
    { name: 'Отрасли', path: '/ru/resheniya/' },
    { name: 'Медицина и стоматология', path: '/ru/resheniya/medicina/' },
  ],
  hero: {
    h1Pre: 'Клиника говорит ',
    h1Accent: 'на двух языках',
    h1Post: '. Даже ночью.',
    lead: 'Вы ведёте приём на русском и испанском — а запись, напоминания и типовые вопросы всё ещё держатся на одном администраторе. Бот-ресепшн записывает пациентов сам, 24/7, на языке пациента: русском, испанском, английском. Команда занимается пациентами, а не телефоном.',
    // Telegram подтверждён владельцем: litcore_ai
    ctaPrimary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    ctaSecondary: { label: 'Посмотреть демо', href: '/ru/demo/' },
  },
  pains: {
    h2: 'На чём буксует клиника с русскоязычным приёмом',
    cards: [
      {
        title: 'Всё держится на людях, а не на процессе',
        text: '«У нас Марина отвечает русским пациентам» — пока Марина на месте. Отпуск, болезнь, увольнение — и главное преимущество клиники проседает.',
      },
      {
        title: 'Запись живёт в часы работы ресепшена',
        text: 'Пациент решает записаться вечером, в выходной, из другого часового пояса. Если никто не ответил — он пишет в следующую клинику из чата рекомендаций.',
      },
      {
        title: 'Пропуски съедают расписание',
        text: 'Никто не подтвердил визит — кресло простаивает, врач ждёт, деньги не приходят. Обзванивать всех вручную на двух языках — на это нет рук.',
      },
    ],
  },
  solutions: {
    kicker: 'Процесс → автоматизация → результат',
    // TODO: H2 не задан в md (там только метка раздела «Решения») — производный
    h2: 'Что автоматизируем в клинике',
    labels: { proceso: 'Процесс', automatizacion: 'Автоматизация', resultado: 'Результат' },
    cards: [
      {
        title: 'Бот-ресепшн: запись 24/7 на русском и испанском',
        proceso: 'Запись по телефону и в личных сообщениях, вручную, в рабочие часы.',
        automatizacion:
          'Бот в WhatsApp/Telegram и на сайте предлагает свободные слоты, записывает, переносит и отменяет — на языке, на котором написал пациент. Нестандартное («очень болит», вопрос по оплате) сразу передаёт администратору. Медицинских оценок не даёт.',
        resultado: 'Запись работает круглосуточно и не зависит от того, кто сегодня на смене.',
      },
      {
        title: 'Напоминания → меньше пропусков',
        proceso: 'Пациент забыл о визите, никто не напомнил, окно пропало.',
        automatizacion:
          'Автоматическое напоминание накануне с кнопками «подтверждаю / перенести / отменить» — по-русски русскому пациенту, по-испански испанскому.',
        resultado:
          'Меньше пропусков и пустых кресел; освободившееся окно возвращается в расписание, пока его ещё можно занять.',
      },
      {
        title: 'Ответы на типовые вопросы — цены, подготовка, адрес, страховки',
        proceso: 'Администратор по кругу отвечает одно и то же на двух языках.',
        automatizacion:
          'Ассистент отвечает по данным вашей клиники (прайс, часы, подготовка к визиту) и честно говорит, что он ИИ и не даёт медицинских консультаций; человек подключается к диалогу в один клик.',
        resultado:
          'Ровные, одинаково точные ответы на обоих языках — без выгорания администратора.',
      },
      {
        title: 'Ассистент «paciente internacional» для маленькой клиники',
        proceso:
          'У крупных клиник — целые отделы для иностранных пациентов; у клиники на 1–3 врача — только собственные вечера и переписки.',
        automatizacion:
          'Мультиязычный бот берёт первичную коммуникацию: запись, оргвопросы, маршрутизация по срочности — без сортировки «на глаз».',
        resultado:
          'Сервис уровня большой клиники без найма отдельного сотрудника; русскоязычный приём масштабируется вместе с потоком.',
      },
    ],
  },
  why: {
    h2: 'Почему сейчас и почему мы',
    text: 'Спрос «русскоязычный врач / стоматолог в Испании» — живой и растущий, в том числе на севере: в Астурии (Овьедо, Хихон, Авилес) и Бильбао русскоязычных клиник почти нет, а спрос в чатах есть. Кто первым отвечает пациенту — тот и записывает его. Мы делаем ботов и автоматизацию для поставщиков услуг русскоязычной аудитории: говорим с вами по-русски, с вашими пациентами — на их языке, внедряем под ключ и быстро.',
  },
  steps: {
    h2: 'Как внедряем',
    items: [
      {
        title: 'Разбор потока записи',
        text: 'Полчаса в Telegram-созвоне: как сейчас записывают, где теряются обращения, какой календарь/CRM.',
      },
      {
        title: 'Пилотный бот за дни',
        text: 'Собираем бота на ваших ценах, часах и типовых вопросах — на двух языках сразу.',
      },
      {
        title: 'Подключение к вашему календарю',
        text: 'Google Calendar, CRM или ваша программа учёта — систему не меняем.',
      },
      {
        title: 'Поддержка и развитие',
        text: 'Смотрим отчёты, докручиваем ответы, добавляем процессы, когда первый заработал.',
      },
    ],
  },
  demo: {
    badge: 'Вы общаетесь с ИИ · AI Act ст. 50',
    // TODO: H2 демо-карточки не задан в md — производный по образцу ES
    h2: 'Попробуйте бота записи',
    chatAria: 'Пример диалога с ботом записи',
    // TODO: в md задан только скелет диалога («хочу записаться на чистку» → слоты → запись → напоминание);
    // реплики бота — производные по образцу ES-макета, подтвердить копирайт у команды.
    chat: [
      { from: 'p', text: 'Здравствуйте, хочу записаться на чистку' },
      {
        from: 'b',
        text: 'Конечно! Есть окно в четверг в 10:30, в четверг в 17:00 или в пятницу в 12:15. Какое удобнее?',
      },
      { from: 'p', text: 'Пятница, 12:15' },
      {
        from: 'b',
        text: 'Записал: чистка, пятница 12:15. Накануне пришлю напоминание с кнопками «подтверждаю / перенести». ✓',
      },
    ],
    disclaimer:
      'Бот не даёт медицинских консультаций и не оценивает симптомы — только запись и оргвопросы; в сложных случаях подключается человек.',
    ctaPrimary: { label: 'Открыть демо', href: '/ru/demo/' },
    // Telegram подтверждён владельцем: litcore_ai
    ctaSecondary: { label: 'Показать на данных вашей клиники', href: TELEGRAM_URL },
  },
  pricing: {
    kicker: 'Цены',
    h2: 'Сколько это стоит',
    plans: [
      {
        plan: 'Бот-ресепшн',
        price: 'от 400',
        cur: '€',
        note: 'setup · от 150 €/мес',
        items: [
          'Запись пациентов 24/7',
          'Напоминания накануне визита',
          'Ответы на типовые вопросы',
          'Двуязычность RU / ES',
        ],
        cta: { label: 'Детали', href: '/ru/tseny/' },
      },
      {
        plan: 'Под ключ с интеграцией календаря/CRM',
        price: 'до 1 500',
        cur: '€',
        note: 'setup · до 400 €/мес',
        items: [
          'Всё из «Бот-ресепшн»',
          'Интеграция с календарём / CRM / программой учёта',
          'Передача человеку в один клик',
        ],
        // Telegram подтверждён владельцем: litcore_ai
        cta: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
        featured: true,
        recommendLabel: 'Рекомендуем',
      },
    ],
    notePre: 'Формат: setup + подписка; точная цифра — после короткого разбора вашего потока. ',
    noteLink: { label: 'Все цены', href: '/ru/tseny/' },
    notePost: '.',
  },
  faq: {
    h2: 'Частые вопросы',
    items: [
      {
        q: 'Как вы работаете с данными о здоровье (GDPR ст. 9)?',
        a: 'По принципу минимизации: бот ведёт только оргданные — имя, контакт, время визита; не запрашивает симптомы свободным текстом и не хранит истории болезни. Перед внедрением проверяем правовое основание и DPA под вашу клинику — соответствие «из коробки» не обещаем, проверяем ваш случай.',
      },
      {
        q: 'Бот даёт медицинские советы?',
        a: 'Нет. Только запись, напоминания и оргвопросы; об этом он говорит первым сообщением. Бот не заменяет консультацию врача — решения принимает только врач.',
      },
      {
        q: 'У нас своя программа записи / CRM.',
        a: 'Подключаемся по API или коннекторами, систему менять не нужно. Если программа старая и без API — честно оценим варианты и риски.',
      },
      {
        q: 'Сколько занимает внедрение?',
        a: 'Пилотный бот — дни; полный пилот на регистратуре — 2–4 недели: разбор, запуск, подключение календаря, донастройка.',
      },
      {
        q: 'А если ИИ ошибётся?',
        a: 'Человек всегда в контуре: непонятное бот передаёт администратору в один клик, автономных действий с тем, что касается здоровья, нет; бот всегда помечен как ИИ (AI Act ст. 50).',
      },
    ],
  },
  ctaBand: {
    h2Pre: 'Покажем на ',
    h2Accent: 'вашей записи',
    h2Post: '?',
    // Telegram подтверждён владельцем: litcore_ai
    primary: { label: 'Обсудить в Telegram', href: TELEGRAM_URL },
    ghost: { label: 'Посмотреть демо', href: '/ru/demo/' },
  },
  bridge: {
    pre: 'Делаете услуги для релокантов не только в медицине? ',
    link: { label: 'Для поставщиков →', href: '/ru/dlya-postavshchikov/' },
  },
  schemaService: {
    name: 'Бот записи и автоматизация для клиник с русскоязычным приёмом',
    serviceType: 'Автоматизация процессов с ИИ для медицинских и стоматологических клиник',
    description:
      'Бот записи и напоминаний для клиник с русскоязычным приёмом в Испании: пациенты записываются сами 24/7 на русском и испанском, меньше пропусков, админ свободен.',
  },
  schemaFaq: [
    {
      q: 'Как вы работаете с данными о здоровье (GDPR ст. 9)?',
      a: 'По принципу минимизации: бот ведёт только оргданные — имя, контакт, время визита; не запрашивает симптомы свободным текстом и не хранит истории болезни. Перед внедрением проверяем правовое основание и DPA под вашу клинику.',
    },
    {
      q: 'Бот даёт медицинские советы?',
      a: 'Нет. Только запись, напоминания и оргвопросы; об этом он говорит первым сообщением. Бот не заменяет консультацию врача — решения принимает только врач.',
    },
    {
      q: 'У нас своя программа записи / CRM.',
      a: 'Подключаемся по API или коннекторами, систему менять не нужно. Если программа старая и без API — честно оценим варианты и риски.',
    },
    {
      q: 'Сколько занимает внедрение?',
      a: 'Пилотный бот — дни; полный пилот на регистратуре — 2–4 недели: разбор, запуск, подключение календаря, донастройка.',
    },
    {
      q: 'А если ИИ ошибётся?',
      a: 'Человек всегда в контуре: непонятное бот передаёт администратору в один клик, автономных действий с тем, что касается здоровья, нет; бот всегда помечен как ИИ (AI Act ст. 50).',
    },
  ],
};
