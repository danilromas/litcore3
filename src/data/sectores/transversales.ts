/** Блок B (№10–14) — СКВОЗНЫЕ услуги: присутствуют на каждом направлении-лендинге, собраны один раз и переиспользуются. Источник 1:1: каталог Промта A (14.07.2026). Цены не менять без согласования. */
import type { SectorService } from './types';

export const TRANSVERSAL_SERVICES: SectorService[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // №10 · Настроим и автоматизируем на Claude (Cowork)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'cowork',
    num: 10,
    block: 'B',
    slug: {
      es: 'automatizacion-claude-cowork',
      ru: 'nastroim-claude-cowork',
      en: 'claude-cowork-setup',
    },
    copy: {
      ru: {
        title: 'Настроим и автоматизируем на Claude (Cowork)',
        offer:
          'Соберём ваше ИИ-рабочее место и автоматизируем рутину — сметы, заявки, отчёты, папки — без найма IT.',
        closes: 'настройка ИИ-рабочего места и автоматизация рутины',
        badge: '~1–1,5 недели',
        flow: {
          input: 'Ваши процессы, почта, календарь, диск — как есть',
          ai: 'Cowork: коннекторы, пакет скилов одним плагином, задачи по расписанию',
          output: 'Одно ИИ-рабочее место, рутина на автопилоте — без найма IT',
        },
        pain: 'Владелец не технический, инструментов много, времени разбираться нет, всё вручную и вразнобой.',
        make: 'Настраиваем Cowork под бригаду: подключаем почту/календарь/диск, ставим готовый «строй-пакет» скилов (сметы, КП, разбор счетов) одним плагином, включаем задачи по расписанию (утренняя сводка заявок, недельный отчёт по объектам), обучаем.',
        result: 'Одно рабочее место, рутина на автопилоте, без найма IT.',
        includes: [
          'аудит процессов и подбор автоматизаций',
          'настройка Cowork (коннекторы почта/календарь/диск)',
          '«строй-пакет» скилов одним плагином (из карточек выше)',
          'задачи по расписанию (сводки, отчёты, уборка папок)',
          'обучение + сопровождение (abono)',
        ],
        tech: 'Cowork + плагины/маркетплейс (скилы + коннекторы) + Scheduled Tasks.',
        limits:
          'Ограничение: рабочее место нетехнического владельца — Cowork, не Claude Code (последний для разработчиков); критичные действия — с подтверждением человека; локальные файлы — десктоп (ПК открыт), web/mobile — бета.',
        priceFrom: 'от 390 €',
        priceNote: 'setup разово · abono от 190 €/мес',
        tiers: [
          {
            plan: 'Start',
            price: 'от 390',
            cur: '€',
            note: 'setup разово',
            items: ['аудит процессов', 'базовая настройка Cowork', 'обучение 2 ч'],
          },
          {
            plan: 'Pro',
            price: 'от 1 490',
            cur: '€',
            note: 'setup разово',
            items: [
              'пакет-плагин скилов',
              'коннекторы почта/календарь/диск',
              '2–3 автоматизации по расписанию',
              'обучение команды',
            ],
            featured: true,
          },
          {
            plan: 'Сопровождение',
            price: 'от 190',
            cur: '€',
            note: '€/мес · abono',
            items: ['ежемесячное сопровождение', 'новые скилы и автоматизации', 'живые сессии-обучения'],
          },
        ],
        process: [
          { title: 'Аудит', text: '0,5–1 день: процессы, инструменты и подбор автоматизаций.' },
          { title: 'Настройка', text: '2–5 дней: Cowork, коннекторы, плагин со скилами.' },
          { title: 'Тест', text: 'Неделя реальной работы с автоматизациями.' },
          { title: 'Запуск', text: 'Передаём готовое рабочее место команде.' },
          { title: 'Сопровождение', text: 'Abono: поддержка, новые скилы и автоматизации.' },
        ],
        timeline: 'Срок ~1–1,5 недели.',
        quality:
          'Проверяем автоматизации на реальной рабочей неделе; ежемесячное сопровождение; обучающие материалы + живые сессии.',
        cta: 'Настроить рабочее место',
        seo: {
          title: 'ИИ-рабочее место на Claude для бизнеса в Испании | litcore.ai',
          description:
            'Настроим Cowork под ваш бизнес: почта, календарь, диск, скилы и задачи по расписанию. Рутина на автопилоте без найма IT. Setup от 390 €, обучение включено.',
        },
      },
      es: {
        title: 'Configuración y automatización con Claude (Cowork)',
        offer:
          'Montamos su puesto de trabajo con IA y automatizamos la rutina — presupuestos, solicitudes, informes, archivos — sin contratar IT.',
        closes: 'configuración del puesto de trabajo con IA y automatización de la rutina',
        badge: '~1–1,5 semanas',
        flow: {
          input: 'Sus procesos, correo, calendario y disco — tal como están',
          ai: 'Cowork: conectores, pack de skills como un plugin, tareas programadas',
          output: 'Un solo puesto con IA, la rutina en piloto automático — sin contratar IT',
        },
        pain: 'El dueño no es técnico, hay muchas herramientas, no hay tiempo para aprender y todo va a mano y disperso.',
        make: 'Configuramos Cowork a medida: conectamos correo/calendario/disco, instalamos un «pack de obra» de skills (presupuestos, propuestas, facturas) como un plugin, activamos tareas programadas (resumen matinal de solicitudes, informe semanal de obras) y formamos.',
        result: 'Un solo puesto, la rutina en piloto automático, sin contratar IT.',
        includes: [
          'auditoría de procesos y selección de automatizaciones',
          'configuración de Cowork (conectores de correo/calendario/disco)',
          '«pack de obra» de skills como un solo plugin (de las fichas de arriba)',
          'tareas programadas (resúmenes, informes, orden de carpetas)',
          'formación + soporte (abono)',
        ],
        tech: 'Cowork + plugins/marketplace (skills + conectores) + Scheduled Tasks.',
        limits:
          'Limitación: es el puesto de un dueño no técnico — Cowork, no Claude Code (este último es para desarrolladores); las acciones críticas se ejecutan con confirmación humana; archivos locales — escritorio (PC encendido), web/móvil — beta.',
        priceFrom: 'desde 390 €',
        priceNote: 'setup único · abono desde 190 €/mes',
        tiers: [
          {
            plan: 'Start',
            price: 'desde 390',
            cur: '€',
            note: 'setup único',
            items: ['auditoría de procesos', 'configuración básica de Cowork', 'formación 2 h'],
          },
          {
            plan: 'Pro',
            price: 'desde 1 490',
            cur: '€',
            note: 'setup único',
            items: [
              'pack de skills como plugin',
              'conectores correo/calendario/disco',
              '2–3 automatizaciones programadas',
              'formación del equipo',
            ],
            featured: true,
          },
          {
            plan: 'Soporte',
            price: 'desde 190',
            cur: '€',
            note: '€/mes · abono',
            items: ['soporte mensual', 'nuevos skills y automatizaciones', 'sesiones de formación en vivo'],
          },
        ],
        process: [
          { title: 'Auditoría', text: '0,5–1 día: procesos, herramientas y selección de automatizaciones.' },
          { title: 'Configuración', text: '2–5 días: Cowork, conectores, plugin con skills.' },
          { title: 'Prueba', text: 'Una semana de trabajo real con las automatizaciones.' },
          { title: 'Lanzamiento', text: 'Entregamos el puesto listo al equipo.' },
          { title: 'Acompañamiento', text: 'Abono: soporte, nuevos skills y automatizaciones.' },
        ],
        timeline: 'Plazo ~1–1,5 semanas.',
        quality:
          'Probamos las automatizaciones en una semana real de trabajo; soporte mensual; materiales de formación + sesiones en vivo.',
        cta: 'Configurar mi puesto con IA',
        seo: {
          title: 'Puesto de trabajo con IA en Claude para su negocio | litcore.ai',
          description:
            'Montamos su puesto de trabajo con IA en Cowork: correo, calendario y disco, tareas programadas y formación. Rutina en piloto automático desde 390 €.',
        },
      },
      en: {
        title: 'Claude (Cowork) setup and automation',
        offer:
          'We build your AI workplace and automate the routine — estimates, leads, reports, files — with no IT hire.',
        closes: 'AI workplace setup and routine automation',
        badge: '~1–1.5 weeks',
        flow: {
          input: 'Your processes, email, calendar and drive — as they are',
          ai: 'Cowork: connectors, a skills pack as one plugin, scheduled tasks',
          output: 'One AI workplace, routine on autopilot — no IT hire',
        },
        pain: 'The owner isn’t technical, there are many tools, no time to learn, everything is manual and scattered.',
        make: 'We set up Cowork to fit the crew: connect email/calendar/drive, install a ready "construction pack" of skills (estimates, proposals, invoices) as one plugin, switch on scheduled tasks (morning lead summary, weekly site report) and train.',
        result: 'One workplace, routine on autopilot, no IT hire.',
        includes: [
          'process audit and selection of automations',
          'Cowork setup (email/calendar/drive connectors)',
          '"construction pack" of skills as one plugin (from the cards above)',
          'scheduled tasks (summaries, reports, folder cleanup)',
          'training + support (retainer)',
        ],
        tech: 'Cowork + plugins/marketplace (skills + connectors) + Scheduled Tasks.',
        limits:
          'Limitation: this is a non-technical owner’s workplace — Cowork, not Claude Code (the latter is for developers); critical actions run with human confirmation; local files — desktop (PC on), web/mobile — beta.',
        priceFrom: 'from €390',
        priceNote: 'one-off setup · retainer from €190/mo',
        tiers: [
          {
            plan: 'Start',
            price: 'from 390',
            cur: '€',
            note: 'one-off setup',
            items: ['process audit', 'basic Cowork setup', '2 h of training'],
          },
          {
            plan: 'Pro',
            price: 'from 1 490',
            cur: '€',
            note: 'one-off setup',
            items: [
              'skills pack as a plugin',
              'email/calendar/drive connectors',
              '2–3 scheduled automations',
              'team training',
            ],
            featured: true,
          },
          {
            plan: 'Retainer',
            price: 'from 190',
            cur: '€',
            note: '€/mo · retainer',
            items: ['monthly support', 'new skills and automations', 'live training sessions'],
          },
        ],
        process: [
          { title: 'Audit', text: '0.5–1 day: processes, tools and automation shortlist.' },
          { title: 'Setup', text: '2–5 days: Cowork, connectors, plugin with skills.' },
          { title: 'Test', text: 'A week of real work with the automations.' },
          { title: 'Launch', text: 'We hand the ready workplace to the team.' },
          { title: 'Support', text: 'Retainer: support, new skills and automations.' },
        ],
        timeline: 'Timeline ~1–1.5 weeks.',
        quality:
          'We test the automations over a real working week; monthly support; training materials plus live sessions.',
        cta: 'Set up my AI workplace',
        seo: {
          title: 'AI workplace on Claude for your business | litcore.ai',
          description:
            'We set up your AI workplace on Cowork: email, calendar and drive connectors, scheduled tasks and training. Routine on autopilot, no IT hire — from €390.',
        },
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // №11 · ИИ-ассистент совещаний и постановки задач
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'reuniones',
    num: 11,
    block: 'B',
    slug: {
      es: 'asistente-de-reuniones',
      ru: 'assistent-soveshchaniy',
      en: 'meeting-assistant',
    },
    copy: {
      ru: {
        title: 'ИИ-ассистент совещаний и постановки задач',
        offer:
          'Из записи совещания — протокол и задачи с исполнителями и сроками, в Telegram или вашей таск-системе.',
        closes: 'протоколы совещаний и постановка задач',
        badge: '~1–1,5 недели',
        flow: {
          input: 'Запись встречи или голосовое в Telegram',
          ai: 'Сторонний ASR (Whisper/Meetily) → Claude: протокол, решения, задачи',
          output: 'Протокол + задачи с исполнителями и сроками в Telegram/таск-системе',
        },
        pain: 'Договорённости на встречах теряются, «кто что делает к какому сроку» забывается, протоколы не пишут.',
        make: 'Запись и расшифровку делает сторонний слой (Meetily/Vexa + Whisper), дальше Claude собирает протокол, вытаскивает задачи (исполнитель/срок) и раскладывает их в Telegram-бот или вашу таск-систему через MCP.',
        result: 'После каждой встречи — готовый протокол и задачи, ничего не теряется.',
        includes: [
          'запись/расшифровка через сторонний слой (self-host Whisper/Meetily/Vexa — данные не уходят третьим лицам)',
          'протокол и решения от Claude',
          'задачи (исполнитель/срок) в Telegram-бот или таск-систему (MCP)',
          'работа с голосовыми в Telegram (голос→ASR→текст→Claude)',
          'дисклеймер AI Act ст.50 + согласие на запись (GDPR)',
        ],
        tech: 'Claude (Tool use / structured output для извлечения задач) + сторонний ASR-слой. Forkable: Meetily (MIT, поддерживает Claude), Vexa (Apache-2.0, бот-в-звонок + MCP), whisper/faster-whisper (MIT), whisperX (BSD, диаризация), aiogram (MIT).',
        limits:
          'Жёсткое ограничение: Claude НЕ записывает и НЕ транскрибирует аудио и не подключается к звонку — это делает сторонний ASR/бот-слой; Claude вступает только с текстом. Запись требует согласия участников (GDPR).',
        priceFrom: 'от 690 €',
        priceNote: 'setup разово · от 49 €/мес',
        tiers: [
          {
            plan: 'Start',
            price: 'от 690',
            cur: '€',
            note: '+ 49 €/мес',
            items: ['расшифровка (self-host ASR)', 'протокол и решения', 'задачи в Telegram/таск-систему'],
          },
          {
            plan: 'Pro',
            price: 'от 1 690',
            cur: '€',
            note: '+ 129 €/мес',
            items: ['бот-в-звонок', 'диаризация (кто говорил)', 'интеграция с таск-системой/CRM'],
            featured: true,
          },
          {
            plan: 'A medida',
            price: 'a medida',
            note: 'по запросу',
            items: ['под ваши встречи, процессы и системы'],
          },
        ],
        process: [
          { title: 'Аудит', text: 'Где проходят встречи и какие задачи из них рождаются.' },
          { title: 'Настройка', text: '4–6 дней: ASR-слой + Claude + бот/MCP.' },
          { title: 'Тест', text: '2–3 реальные встречи: сверяем протокол и задачи.' },
          { title: 'Запуск', text: 'Включаем на всех регулярных встречах.' },
          { title: 'Сопровождение', text: 'Поддержка, донастройка, обновления.' },
        ],
        timeline: 'Срок ~1–1,5 недели.',
        quality: 'Сверяем протокол с записью; проверяем корректность создания задач; учим запускать.',
        cta: 'Заказать ассистента совещаний',
        seo: {
          title: 'ИИ-ассистент совещаний: протокол и задачи | litcore.ai',
          description:
            'Из записи встречи — протокол и задачи с исполнителями и сроками в Telegram или вашей таск-системе. Self-host ASR: данные не уходят третьим лицам. От 690 €.',
        },
      },
      es: {
        title: 'Asistente IA de reuniones y asignación de tareas',
        offer:
          'De la grabación de la reunión a un acta y tareas con responsables y plazos, en Telegram o su gestor de tareas.',
        closes: 'actas de reuniones y asignación de tareas',
        badge: '~1–1,5 semanas',
        flow: {
          input: 'Grabación de la reunión o nota de voz en Telegram',
          ai: 'ASR externo (Whisper/Meetily) → Claude: acta, decisiones, tareas',
          output: 'Acta + tareas con responsables y plazos en Telegram o su gestor',
        },
        pain: 'Los acuerdos de las reuniones se pierden, se olvida «quién hace qué y para cuándo», nadie redacta actas.',
        make: 'La grabación y transcripción las hace una capa externa (Meetily/Vexa + Whisper), luego Claude redacta el acta, extrae las tareas (responsable/plazo) y las coloca en un bot de Telegram o su gestor vía MCP.',
        result: 'Tras cada reunión, acta y tareas listas, no se pierde nada.',
        includes: [
          'grabación/transcripción por una capa externa (Whisper/Meetily/Vexa self-host — los datos no van a terceros)',
          'acta y decisiones por Claude',
          'tareas (responsable/plazo) en un bot de Telegram o su gestor (MCP)',
          'notas de voz en Telegram (voz→ASR→texto→Claude)',
          'descargo AI Act art.50 + consentimiento de grabación (GDPR)',
        ],
        tech: 'Claude (Tool use / structured output para extraer tareas) + capa ASR externa. Forkable: Meetily (MIT, soporta Claude), Vexa (Apache-2.0, bot en la llamada + MCP), whisper/faster-whisper (MIT), whisperX (BSD, diarización), aiogram (MIT).',
        limits:
          'Limitación estricta: Claude NO graba ni transcribe audio ni se conecta a la llamada — eso lo hace la capa ASR/bot externa; Claude solo interviene con texto. La grabación requiere el consentimiento de los participantes (GDPR).',
        priceFrom: 'desde 690 €',
        priceNote: 'setup único · desde 49 €/mes',
        tiers: [
          {
            plan: 'Start',
            price: 'desde 690',
            cur: '€',
            note: '+ 49 €/mes',
            items: ['transcripción (ASR self-host)', 'acta y decisiones', 'tareas en Telegram/gestor'],
          },
          {
            plan: 'Pro',
            price: 'desde 1 690',
            cur: '€',
            note: '+ 129 €/mes',
            items: ['bot en la llamada', 'diarización (quién habló)', 'integración con gestor de tareas/CRM'],
            featured: true,
          },
          {
            plan: 'A medida',
            price: 'a medida',
            note: 'a consultar',
            items: ['según sus reuniones, procesos y sistemas'],
          },
        ],
        process: [
          { title: 'Auditoría', text: 'Dónde son las reuniones y qué tareas nacen de ellas.' },
          { title: 'Configuración', text: '4–6 días: capa ASR + Claude + bot/MCP.' },
          { title: 'Prueba', text: '2–3 reuniones reales: contrastamos acta y tareas.' },
          { title: 'Lanzamiento', text: 'Lo activamos en todas las reuniones regulares.' },
          { title: 'Acompañamiento', text: 'Soporte, ajustes, actualizaciones.' },
        ],
        timeline: 'Plazo ~1–1,5 semanas.',
        quality:
          'Contrastamos el acta con la grabación; comprobamos que las tareas se crean correctamente; enseñamos a lanzarlo.',
        cta: 'Solicitar el asistente de reuniones',
        seo: {
          title: 'Asistente IA de reuniones: actas y tareas | litcore.ai',
          description:
            'De la grabación de la reunión a un acta y tareas con responsables y plazos, en Telegram o su gestor. ASR self-host: sus datos no van a terceros. Desde 690 €.',
        },
      },
      en: {
        title: 'AI meeting and task assistant',
        offer:
          'From a meeting recording to minutes and tasks with owners and deadlines — in Telegram or your task tool.',
        closes: 'meeting minutes and task assignment',
        badge: '~1–1.5 weeks',
        flow: {
          input: 'A meeting recording or a Telegram voice note',
          ai: 'External ASR (Whisper/Meetily) → Claude: minutes, decisions, tasks',
          output: 'Minutes + tasks with owners and deadlines in Telegram/task tool',
        },
        pain: 'Meeting decisions get lost, "who does what by when" is forgotten, minutes go unwritten.',
        make: 'Recording and transcription are done by an external layer (Meetily/Vexa + Whisper), then Claude writes the minutes, extracts tasks (owner/deadline) and routes them into a Telegram bot or your task tool via MCP.',
        result: 'After every meeting, minutes and tasks are ready — nothing is lost.',
        includes: [
          'recording/transcription by an external layer (self-hosted Whisper/Meetily/Vexa — data never goes to third parties)',
          'minutes and decisions by Claude',
          'tasks (owner/deadline) in a Telegram bot or your task tool (MCP)',
          'Telegram voice notes (voice→ASR→text→Claude)',
          'AI Act art.50 disclaimer + recording consent (GDPR)',
        ],
        tech: 'Claude (Tool use / structured output for task extraction) + an external ASR layer. Forkable: Meetily (MIT, supports Claude), Vexa (Apache-2.0, bot-in-call + MCP), whisper/faster-whisper (MIT), whisperX (BSD, diarisation), aiogram (MIT).',
        limits:
          'Hard limitation: Claude does NOT record or transcribe audio and does not join the call — that is done by the external ASR/bot layer; Claude only steps in with text. Recording requires participants’ consent (GDPR).',
        priceFrom: 'from €690',
        priceNote: 'one-off setup · from €49/mo',
        tiers: [
          {
            plan: 'Start',
            price: 'from 690',
            cur: '€',
            note: '+ €49/mo',
            items: ['transcription (self-hosted ASR)', 'minutes and decisions', 'tasks in Telegram/task tool'],
          },
          {
            plan: 'Pro',
            price: 'from 1 690',
            cur: '€',
            note: '+ €129/mo',
            items: ['bot-in-call', 'diarisation (who spoke)', 'task tool/CRM integration'],
            featured: true,
          },
          {
            plan: 'A medida',
            price: 'a medida',
            note: 'on request',
            items: ['built around your meetings, processes and systems'],
          },
        ],
        process: [
          { title: 'Audit', text: 'Where meetings happen and which tasks come out of them.' },
          { title: 'Setup', text: '4–6 days: ASR layer + Claude + bot/MCP.' },
          { title: 'Test', text: '2–3 real meetings: we check minutes and tasks.' },
          { title: 'Launch', text: 'We switch it on for all regular meetings.' },
          { title: 'Support', text: 'Support, fine-tuning, updates.' },
        ],
        timeline: 'Timeline ~1–1.5 weeks.',
        quality:
          'We check the minutes against the recording, verify tasks are created correctly and teach you to run it.',
        cta: 'Get the meeting assistant',
        seo: {
          title: 'AI meeting assistant: minutes and tasks | litcore.ai',
          description:
            'From a meeting recording to minutes and tasks with owners and deadlines, in Telegram or your task tool. Self-hosted ASR keeps your data private. From €690.',
        },
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // №12 · Оформление ИТ-инфраструктуры проекта («под ключ»)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'infraestructura',
    num: 12,
    block: 'B',
    slug: {
      es: 'infraestructura-ti',
      ru: 'it-infrastruktura',
      en: 'it-infrastructure',
    },
    copy: {
      ru: {
        title: 'Оформление ИТ-инфраструктуры проекта («под ключ»)',
        offer:
          'Соберём цифровой фундамент бизнеса: домен, почта, Telegram/WhatsApp, хостинг, CRM, аналитика — за несколько дней.',
        closes: 'запуск цифровой инфраструктуры бизнеса',
        badge: '~1 неделя',
        flow: {
          input: 'Что уже есть у бизнеса: домен, почта, инструменты — или ничего',
          ai: 'Настройка: домен+DNS, почта, мессенджеры, CRM, аналитика, бэкапы, 2FA',
          output: 'Работающий цифровой фундамент; опция оформления через Kit Digital',
        },
        pain: 'Инструменты разрознены или их нет — почта на gmail, заявки в личном телефоне, ни CRM, ни аналитики, ни бэкапов.',
        make: 'Настраиваем цифровой фундамент под ключ: домен+DNS+почта, Telegram/WhatsApp Business, хостинг (Astro+Cloudflare — быстро и почти бесплатно), базовая CRM, аналитика, бэкапы, 2FA.',
        result: 'Бизнес на нормальной основе, всё связано и готово к автоматизации.',
        includes: [
          'домен + DNS + почтовая аутентификация (SPF/DKIM/DMARC)',
          'корпоративная почта (Google Workspace/Zoho)',
          'Telegram + WhatsApp Business',
          'хостинг/сайт на Astro+Cloudflare',
          'базовая CRM + аналитика (GA4/Matomo) + бэкапы + 2FA',
          'опция оформления через Kit Digital (мы как agente digitalizador — часть оплачивает субсидия)',
        ],
        tech: 'Это про инфраструктуру (профиль студии), не про ИИ: стек Cloudflare/Astro. Kit Digital — реальный рычаг финансирования (категории «sitio web» 500–2 000 €, CRM 2 000–15 000 €).',
        limits:
          'Ограничение: статус конвокаторий Kit Digital переменный — проверяем на sede.red.gob.es перед обещанием клиенту, заранее не обещаем.',
        priceFrom: 'от 390 €',
        priceNote: 'setup разово · abono от 50 €/мес',
        tiers: [
          {
            plan: 'Start',
            price: 'от 390',
            cur: '€',
            note: 'setup разово',
            items: ['домен + DNS + почта', 'базовая настройка'],
          },
          {
            plan: 'Pro',
            price: 'от 990',
            cur: '€',
            note: 'setup разово',
            items: [
              'полный фундамент: + Telegram/WhatsApp Business',
              'CRM, аналитика, бэкапы, 2FA',
              'опция оформления через Kit Digital',
            ],
            featured: true,
          },
          {
            plan: 'Сопровождение',
            price: 'от 50',
            cur: '€',
            note: '€/мес · abono',
            items: ['мониторинг и обновления', 'бэкапы и доступы', 'помощь по инструментам'],
          },
        ],
        process: [
          { title: 'Аудит', text: 'Что уже есть и чего не хватает.' },
          { title: 'Настройка', text: '2–5 дней: домен, почта, мессенджеры, CRM, аналитика.' },
          { title: 'Тест', text: 'Проверяем почту, DNS, бэкапы, доступы.' },
          { title: 'Передача', text: 'Доступы и инструкция — всё у вас.' },
          { title: 'Сопровождение', text: 'Abono: мониторинг и помощь.' },
        ],
        timeline: 'Срок ~1 неделя.',
        quality: 'Проверяем почту/DNS/бэкапы; передаём доступы и инструкцию; ежемесячное сопровождение.',
        cta: 'Настроить инфраструктуру',
        seo: {
          title: 'ИТ-инфраструктура под ключ для бизнеса в Испании | litcore.ai',
          description:
            'Домен, почта, Telegram/WhatsApp, хостинг на Astro+Cloudflare, CRM, аналитика, бэкапы и 2FA — цифровой фундамент бизнеса за несколько дней. От 390 €.',
        },
      },
      es: {
        title: 'Infraestructura TI del proyecto («llave en mano»)',
        offer:
          'Montamos el fundamento digital del negocio: dominio, correo, Telegram/WhatsApp, hosting, CRM, analítica — en pocos días.',
        closes: 'puesta en marcha de la infraestructura digital del negocio',
        badge: '~1 semana',
        flow: {
          input: 'Lo que ya tiene el negocio: dominio, correo, herramientas — o nada',
          ai: 'Configuración: dominio+DNS, correo, mensajería, CRM, analítica, copias, 2FA',
          output: 'Un fundamento digital operativo; opción de tramitarlo vía Kit Digital',
        },
        pain: 'Las herramientas están dispersas o no existen — correo en gmail, solicitudes en el móvil personal, sin CRM, sin analítica, sin copias.',
        make: 'Montamos el fundamento llave en mano: dominio+DNS+correo, Telegram/WhatsApp Business, hosting (Astro+Cloudflare — rápido y casi gratis), CRM básico, analítica, copias, 2FA.',
        result: 'El negocio sobre una base sólida, todo conectado y listo para automatizar.',
        includes: [
          'dominio + DNS + autenticación de correo (SPF/DKIM/DMARC)',
          'correo corporativo (Google Workspace/Zoho)',
          'Telegram + WhatsApp Business',
          'hosting/web en Astro+Cloudflare',
          'CRM básico + analítica (GA4/Matomo) + copias + 2FA',
          'opción de tramitarlo vía Kit Digital (somos agente digitalizador — una parte la paga la subvención)',
        ],
        tech: 'Esto es infraestructura (perfil de estudio), no IA: stack Cloudflare/Astro. Kit Digital es una palanca real de financiación (categorías «sitio web» 500–2 000 €, CRM 2 000–15 000 €).',
        limits:
          'Limitación: el estado de las convocatorias de Kit Digital es variable — lo comprobamos en sede.red.gob.es antes de prometer nada al cliente; no lo prometemos por adelantado.',
        priceFrom: 'desde 390 €',
        priceNote: 'setup único · abono desde 50 €/mes',
        tiers: [
          {
            plan: 'Start',
            price: 'desde 390',
            cur: '€',
            note: 'setup único',
            items: ['dominio + DNS + correo', 'configuración básica'],
          },
          {
            plan: 'Pro',
            price: 'desde 990',
            cur: '€',
            note: 'setup único',
            items: [
              'fundamento completo: + Telegram/WhatsApp Business',
              'CRM, analítica, copias, 2FA',
              'opción de tramitarlo vía Kit Digital',
            ],
            featured: true,
          },
          {
            plan: 'Soporte',
            price: 'desde 50',
            cur: '€',
            note: '€/mes · abono',
            items: ['monitorización y actualizaciones', 'copias y accesos', 'ayuda con las herramientas'],
          },
        ],
        process: [
          { title: 'Auditoría', text: 'Qué hay ya y qué falta.' },
          { title: 'Configuración', text: '2–5 días: dominio, correo, mensajería, CRM, analítica.' },
          { title: 'Prueba', text: 'Comprobamos correo, DNS, copias, accesos.' },
          { title: 'Entrega', text: 'Accesos e instrucciones — todo queda en sus manos.' },
          { title: 'Acompañamiento', text: 'Abono: monitorización y ayuda.' },
        ],
        timeline: 'Plazo ~1 semana.',
        quality: 'Comprobamos correo/DNS/copias; entregamos accesos e instrucciones; soporte mensual.',
        cta: 'Montar mi infraestructura',
        seo: {
          title: 'Infraestructura TI llave en mano para su negocio | litcore.ai',
          description:
            'Dominio, correo, Telegram/WhatsApp, hosting en Astro+Cloudflare, CRM, analítica, copias y 2FA: el fundamento digital de su negocio en pocos días. Desde 390 €.',
        },
      },
      en: {
        title: 'Turnkey IT infrastructure for your project',
        offer:
          'We set up your business’s digital foundation: domain, email, Telegram/WhatsApp, hosting, CRM, analytics — in days.',
        closes: 'launching the business’s digital infrastructure',
        badge: '~1 week',
        flow: {
          input: 'What the business already has: domain, email, tools — or nothing',
          ai: 'Setup: domain+DNS, email, messengers, CRM, analytics, backups, 2FA',
          output: 'A working digital foundation; optional processing via Kit Digital',
        },
        pain: 'Tools are scattered or missing — gmail email, leads in a personal phone, no CRM, no analytics, no backups.',
        make: 'We set up the foundation turnkey: domain+DNS+email, Telegram/WhatsApp Business, hosting (Astro+Cloudflare — fast and nearly free), basic CRM, analytics, backups, 2FA.',
        result: 'The business on a solid base, everything connected and ready to automate.',
        includes: [
          'domain + DNS + email authentication (SPF/DKIM/DMARC)',
          'business email (Google Workspace/Zoho)',
          'Telegram + WhatsApp Business',
          'hosting/site on Astro+Cloudflare',
          'basic CRM + analytics (GA4/Matomo) + backups + 2FA',
          'optional processing via Kit Digital (we act as agente digitalizador — the subsidy covers part of the cost)',
        ],
        tech: 'This is infrastructure (studio profile), not AI: the Cloudflare/Astro stack. Kit Digital is a real funding lever (categories: «sitio web» 500–2 000 €, CRM 2 000–15 000 €).',
        limits:
          'Limitation: the status of Kit Digital calls is variable — we check sede.red.gob.es before promising anything to the client; we never promise it upfront.',
        priceFrom: 'from €390',
        priceNote: 'one-off setup · retainer from €50/mo',
        tiers: [
          {
            plan: 'Start',
            price: 'from 390',
            cur: '€',
            note: 'one-off setup',
            items: ['domain + DNS + email', 'basic setup'],
          },
          {
            plan: 'Pro',
            price: 'from 990',
            cur: '€',
            note: 'one-off setup',
            items: [
              'full foundation: + Telegram/WhatsApp Business',
              'CRM, analytics, backups, 2FA',
              'optional processing via Kit Digital',
            ],
            featured: true,
          },
          {
            plan: 'Retainer',
            price: 'from 50',
            cur: '€',
            note: '€/mo · retainer',
            items: ['monitoring and updates', 'backups and access', 'help with the tools'],
          },
        ],
        process: [
          { title: 'Audit', text: 'What you already have and what is missing.' },
          { title: 'Setup', text: '2–5 days: domain, email, messengers, CRM, analytics.' },
          { title: 'Test', text: 'We check email, DNS, backups, access.' },
          { title: 'Handover', text: 'Access and instructions — everything stays with you.' },
          { title: 'Support', text: 'Retainer: monitoring and help.' },
        ],
        timeline: 'Timeline ~1 week.',
        quality: 'We check email/DNS/backups, hand over access and instructions; monthly support.',
        cta: 'Set up my infrastructure',
        seo: {
          title: 'Turnkey IT infrastructure for your business | litcore.ai',
          description:
            'Domain, email, Telegram/WhatsApp, hosting on Astro+Cloudflare, CRM, analytics, backups and 2FA — your business’s digital foundation in days. From €390.',
        },
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // №13 · CRM на базе Telegram
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'telegram-crm',
    num: 13,
    block: 'B',
    slug: {
      es: 'crm-en-telegram',
      ru: 'crm-v-telegram',
      en: 'telegram-crm',
    },
    copy: {
      ru: {
        title: 'CRM на базе Telegram',
        offer:
          'Клиенты, заявки и воронка — прямо в Telegram: карточки, статусы, напоминания, без отдельной программы.',
        closes: 'учёт клиентов, заявок и сделок',
        badge: '~1,5 недели',
        flow: {
          input: 'Заявки и переписка из ваших каналов',
          ai: 'Бот-CRM в Telegram + Claude: карточки, воронка, подсказка следующего шага',
          output: 'Все клиенты и сделки в одном месте — прямо в Telegram',
        },
        pain: 'Клиенты и договорённости в переписке и в голове, ничего не структурировано, забываются касания и оплаты.',
        make: 'Ставим CRM с интерфейсом в Telegram: бот заводит карточку клиента, ведёт воронку (новый→смета→в работе→оплачено), шлёт напоминания; Claude поверх — обогащение карточек и подсказка следующего шага. Сюда «впадают» заявки из бота №7.',
        result: 'Все клиенты и сделки там, где вы и так сидите, ничего не теряется.',
        includes: [
          'бот-интерфейс CRM в Telegram (aiogram, MIT)',
          'карточки клиентов, воронка/статусы, напоминания',
          'бэкенд на permissive-стеке (Django-CRM MIT со встроенным MCP под Claude, или Chatwoot MIT)',
          'Claude поверх (обогащение, суммаризация переписки, next-best-action)',
          'приём заявок из бота №7 и других каналов',
          'GDPR/DPA + AI Act ст.50',
        ],
        tech: 'aiogram (MIT) + Django-CRM/BottleCRM (MIT, MCP под Claude) или Chatwoot (MIT, есть Telegram-канал).',
        limits:
          'Ограничение: готовой permissive «Telegram-CRM с гитхаба» почти нет — продаём сборку под клиента на MIT-стеке, не чужой репозиторий; twenty (AGPL), personalCRMbot (без лицензии) — только референс.',
        priceFrom: 'от 690 €',
        priceNote: 'setup разово · от 49 €/мес',
        tiers: [
          {
            plan: 'Start',
            price: 'от 690',
            cur: '€',
            note: '+ 49 €/мес',
            items: ['бот + карточки клиентов', 'воронка и статусы', 'напоминания'],
          },
          {
            plan: 'Pro',
            price: 'от 1 690',
            cur: '€',
            note: '+ 99 €/мес',
            items: ['Claude-обогащение и next-best-action', 'интеграции', 'несколько каналов заявок'],
            featured: true,
          },
          {
            plan: 'A medida',
            price: 'a medida',
            note: 'по запросу',
            items: ['под ваши процессы и каналы'],
          },
        ],
        process: [
          { title: 'Аудит', text: 'Как сейчас ведёте клиентов и сделки.' },
          { title: 'Настройка', text: '5–7 дней: бот + бэкенд + воронка.' },
          { title: 'Тест', text: 'Реальные клиенты и сделки в воронке.' },
          { title: 'Запуск', text: 'Команда работает в Telegram-CRM.' },
          { title: 'Сопровождение', text: 'Поддержка, напоминания, доработки.' },
        ],
        timeline: 'Срок ~1,5 недели.',
        quality: 'Прогон воронки на реальных сделках; настройка напоминаний; обучение команды.',
        cta: 'Заказать Telegram-CRM',
        seo: {
          title: 'CRM в Telegram: клиенты и воронка в мессенджере | litcore.ai',
          description:
            'CRM с интерфейсом в Telegram: карточки клиентов, воронка, напоминания, а Claude подсказывает следующий шаг. MIT-стек, GDPR. Setup от 690 € + от 49 €/мес.',
        },
      },
      es: {
        title: 'CRM en Telegram',
        offer:
          'Clientes, solicitudes y embudo — dentro de Telegram: fichas, estados, recordatorios, sin otro programa.',
        closes: 'gestión de clientes, solicitudes y tratos',
        badge: '~1,5 semanas',
        flow: {
          input: 'Leads y conversaciones de sus canales',
          ai: 'Bot-CRM en Telegram + Claude: fichas, embudo, siguiente paso sugerido',
          output: 'Todos los clientes y tratos en un solo lugar — dentro de Telegram',
        },
        pain: 'Los clientes y acuerdos están en el chat y en la cabeza, sin estructura, se olvidan seguimientos y cobros.',
        make: 'Montamos un CRM con interfaz en Telegram: el bot crea la ficha, lleva el embudo (nuevo→presupuesto→en obra→cobrado), envía recordatorios; Claude encima — enriquece fichas y sugiere el siguiente paso. Aquí «desembocan» los leads del bot №7.',
        result: 'Todos los clientes y tratos donde ya trabaja, sin perder nada.',
        includes: [
          'bot-interfaz del CRM en Telegram (aiogram, MIT)',
          'fichas de clientes, embudo/estados, recordatorios',
          'backend en stack permissive (Django-CRM MIT con MCP integrado para Claude, o Chatwoot MIT)',
          'Claude encima (enriquecimiento, resumen de conversaciones, next-best-action)',
          'entrada de leads del bot №7 y otros canales',
          'GDPR/DPA + AI Act art.50',
        ],
        tech: 'aiogram (MIT) + Django-CRM/BottleCRM (MIT, MCP para Claude) o Chatwoot (MIT, con canal de Telegram).',
        limits:
          'Limitación: casi no existe un «Telegram-CRM de GitHub» permissive listo — vendemos un montaje a medida sobre stack MIT, no un repositorio ajeno; twenty (AGPL), personalCRMbot (sin licencia) — solo como referencia.',
        priceFrom: 'desde 690 €',
        priceNote: 'setup único · desde 49 €/mes',
        tiers: [
          {
            plan: 'Start',
            price: 'desde 690',
            cur: '€',
            note: '+ 49 €/mes',
            items: ['bot + fichas de clientes', 'embudo y estados', 'recordatorios'],
          },
          {
            plan: 'Pro',
            price: 'desde 1 690',
            cur: '€',
            note: '+ 99 €/mes',
            items: ['enriquecimiento con Claude y next-best-action', 'integraciones', 'varios canales de leads'],
            featured: true,
          },
          {
            plan: 'A medida',
            price: 'a medida',
            note: 'a consultar',
            items: ['según sus procesos y canales'],
          },
        ],
        process: [
          { title: 'Auditoría', text: 'Cómo lleva hoy clientes y tratos.' },
          { title: 'Configuración', text: '5–7 días: bot + backend + embudo.' },
          { title: 'Prueba', text: 'Clientes y tratos reales en el embudo.' },
          { title: 'Lanzamiento', text: 'El equipo trabaja en el CRM de Telegram.' },
          { title: 'Acompañamiento', text: 'Soporte, recordatorios, mejoras.' },
        ],
        timeline: 'Plazo ~1,5 semanas.',
        quality: 'Probamos el embudo con tratos reales; ajustamos recordatorios; formamos al equipo.',
        cta: 'Solicitar el CRM en Telegram',
        seo: {
          title: 'CRM en Telegram: clientes y embudo en el chat | litcore.ai',
          description:
            'CRM con interfaz en Telegram: fichas de clientes, embudo, recordatorios y Claude que sugiere el siguiente paso. Stack MIT, GDPR. Desde 690 € + 49 €/mes.',
        },
      },
      en: {
        title: 'Telegram-based CRM',
        offer:
          'Clients, leads and pipeline — right inside Telegram: cards, statuses, reminders, no separate app.',
        closes: 'tracking clients, leads and deals',
        badge: '~1.5 weeks',
        flow: {
          input: 'Leads and chats from your channels',
          ai: 'Telegram bot CRM + Claude: cards, pipeline, next-step suggestions',
          output: 'All clients and deals in one place — right inside Telegram',
        },
        pain: 'Clients and agreements live in chats and in your head, unstructured, follow-ups and payments slip.',
        make: 'We set up a CRM with a Telegram interface: the bot creates the card, runs the pipeline (new→quote→in progress→paid), sends reminders; Claude on top enriches cards and suggests the next step. Leads from bot №7 flow in here.',
        result: 'All clients and deals where you already are — nothing lost.',
        includes: [
          'CRM bot interface in Telegram (aiogram, MIT)',
          'client cards, pipeline/statuses, reminders',
          'backend on a permissive stack (Django-CRM MIT with built-in MCP for Claude, or Chatwoot MIT)',
          'Claude on top (enrichment, chat summarisation, next-best-action)',
          'leads intake from bot №7 and other channels',
          'GDPR/DPA + AI Act art.50',
        ],
        tech: 'aiogram (MIT) + Django-CRM/BottleCRM (MIT, MCP for Claude) or Chatwoot (MIT, with a Telegram channel).',
        limits:
          'Limitation: a ready permissive "Telegram CRM from GitHub" barely exists — we sell a custom build on an MIT stack, not someone else’s repository; twenty (AGPL), personalCRMbot (no licence) — reference only.',
        priceFrom: 'from €690',
        priceNote: 'one-off setup · from €49/mo',
        tiers: [
          {
            plan: 'Start',
            price: 'from 690',
            cur: '€',
            note: '+ €49/mo',
            items: ['bot + client cards', 'pipeline and statuses', 'reminders'],
          },
          {
            plan: 'Pro',
            price: 'from 1 690',
            cur: '€',
            note: '+ €99/mo',
            items: ['Claude enrichment and next-best-action', 'integrations', 'several lead channels'],
            featured: true,
          },
          {
            plan: 'A medida',
            price: 'a medida',
            note: 'on request',
            items: ['built around your processes and channels'],
          },
        ],
        process: [
          { title: 'Audit', text: 'How you manage clients and deals today.' },
          { title: 'Setup', text: '5–7 days: bot + backend + pipeline.' },
          { title: 'Test', text: 'Real clients and deals in the pipeline.' },
          { title: 'Launch', text: 'The team works in the Telegram CRM.' },
          { title: 'Support', text: 'Support, reminders, improvements.' },
        ],
        timeline: 'Timeline ~1.5 weeks.',
        quality: 'We run the pipeline on real deals, tune the reminders and train the team.',
        cta: 'Get the Telegram CRM',
        seo: {
          title: 'Telegram CRM: clients and pipeline in the chat | litcore.ai',
          description:
            'A CRM with a Telegram interface: client cards, pipeline, reminders, and Claude suggesting the next step. MIT stack, GDPR-ready. From €690 + €49/mo.',
        },
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // №14 · Создание и продвижение сайтов
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'webs',
    num: 14,
    block: 'B',
    slug: {
      es: 'creacion-de-webs',
      ru: 'sozdanie-saytov',
      en: 'websites-promotion',
    },
    copy: {
      ru: {
        title: 'Создание и продвижение сайтов',
        offer:
          'Быстрый сайт на Astro + мультиязычный ИИ-контент (ES/RU/EN) + продвижение — прозрачно и в евро.',
        closes: 'привлечение клиентов через сайт и продвижение',
        badge: '1–4 недели',
        flow: {
          input: 'Бриф и ваши материалы: услуги, цены, фото',
          ai: 'Astro+Cloudflare, контент ES/RU/EN от Claude, локальное SEO и реклама',
          output: 'Быстрый сайт, который приводит клиентов на двух языках',
        },
        pain: 'Сайта нет или он медленный на WordPress, лиды только из «сарафана», продвижения нет, а конкуренты-студии прячут цены.',
        make: 'Делаем современный сайт на Astro+Cloudflare (быстро, безопасно, почти нулевой хостинг), тексты сразу на ES/RU/EN (сильная сторона Claude), настраиваем локальное SEO и рекламу; всё прозрачными пакетами в евро.',
        result: 'Сайт, который грузится мгновенно и приводит клиентов на двух языках.',
        includes: [
          'сайт на Astro+Cloudflare (лендинг/многостраничник/магазин)',
          'мультиязычный контент ES/RU/EN (Claude Skills для бренд-стиля; Batch для массовых карточек)',
          'локальное SEO (Google Business Profile) + аналитика',
          'продвижение: SEO/мес, Google/Meta Ads (по желанию), опция GEO (оптимизация под ИИ-ответы — тренд 2026)',
          'чат-бот на сайт (опция)',
          'Kit Digital: категория «Sitio web» 500–2 000 €',
          'SEO — от 600 €/мес',
          'локальное SEO — от 300 €/мес',
          'Google Ads — от 350 €/мес (или 500 € + 5–8 % бюджета)',
          'контент-маркетинг (ИИ) — от 500 €/мес',
        ],
        tech: 'Astro + Cloudflare (быстрее/безопаснее/дешевле WordPress конкурентов); Claude для контента (мультиязычность, SEO-тексты, Batch −50 %).',
        limits:
          'Ограничение: ИИ-тексты — с редакторской вычиткой (E-E-A-T; юр/мед ниши — носитель языка); дизайн и архитектуру ведёт человек, «сайт за 5 минут» не обещаем.',
        priceFrom: 'лендинг от 700 €',
        priceNote: 'сайт от 1 800 € · SEO от 600 €/мес',
        tiers: [
          {
            plan: 'Лендинг',
            price: 'от 700',
            cur: '€',
            note: 'обслуживание от 60 €/мес',
            items: [
              'одностраничник на Astro+Cloudflare',
              'контент ES/RU/EN',
              'формы, аналитика',
              'запуск ~1 неделя',
            ],
          },
          {
            plan: 'Корпоративный сайт',
            price: 'от 1 800',
            cur: '€',
            note: 'обслуживание от 60 €/мес',
            items: [
              'многостраничник на Astro+Cloudflare',
              'контент ES/RU/EN',
              'локальное SEO (Google Business Profile) + аналитика',
              'срок 2–4 недели',
            ],
            featured: true,
          },
          {
            plan: 'Магазин',
            price: 'от 3 500',
            cur: '€',
            note: 'обслуживание от 60 €/мес',
            items: [
              'интернет-магазин на Astro+Cloudflare',
              'каталог и карточки товаров (Batch)',
              'контент ES/RU/EN',
              'аналитика и формы заказа',
            ],
          },
        ],
        process: [
          { title: 'Бриф', text: 'Цели, структура, референсы, языки.' },
          { title: 'Дизайн/сборка', text: 'Сборка на Astro: дизайн, страницы, скорость.' },
          { title: 'Контент ES/RU/EN', text: 'Тексты на трёх языках с редакторской вычиткой.' },
          { title: 'Тест', text: 'Скорость, мобайл, формы, Core Web Vitals.' },
          { title: 'Запуск+продвижение', text: 'Деплой на Cloudflare + SEO/реклама по пакету.' },
        ],
        timeline: 'Срок: лендинг ~1 неделя, сайт 2–4 недели.',
        quality: 'Проверка Core Web Vitals, мобайла и форм; передача; ежемесячное продвижение/поддержка.',
        cta: 'Заказать сайт и продвижение',
        seo: {
          title: 'Создание и продвижение сайтов на Astro | litcore.ai',
          description:
            'Быстрые сайты на Astro+Cloudflare с контентом на ES/RU/EN, локальным SEO и рекламой. Прозрачные цены в евро: лендинг от 700 €, корпоративный сайт от 1 800 €.',
        },
      },
      es: {
        title: 'Creación y promoción de webs',
        offer:
          'Un sitio web rápido en Astro + contenido multilingüe con IA (ES/RU/EN) + promoción — con precios claros en €.',
        closes: 'captación de clientes con la web y la promoción',
        badge: '1–4 semanas',
        flow: {
          input: 'Brief y sus materiales: servicios, precios, fotos',
          ai: 'Astro+Cloudflare, contenido ES/RU/EN por Claude, SEO local y publicidad',
          output: 'Una web rápida que trae clientes en dos idiomas',
        },
        pain: 'No hay web o es lenta en WordPress, los leads solo llegan «de boca en boca», sin promoción, y los estudios de la competencia ocultan los precios.',
        make: 'Hacemos una web moderna en Astro+Cloudflare (rápida, segura, hosting casi nulo), textos en ES/RU/EN (fuerte en Claude), SEO local y publicidad; todo con paquetes claros en euros.',
        result: 'Una web que carga al instante y trae clientes en dos idiomas.',
        includes: [
          'web en Astro+Cloudflare (landing/web corporativa/tienda)',
          'contenido multilingüe ES/RU/EN (Claude Skills para el estilo de marca; Batch para fichas masivas)',
          'SEO local (Google Business Profile) + analítica',
          'promoción: SEO mensual, Google/Meta Ads (opcional), opción GEO (optimización para respuestas de IA — tendencia 2026)',
          'chatbot para la web (opción)',
          'Kit Digital: categoría «Sitio web» 500–2 000 €',
          'SEO — desde 600 €/mes',
          'SEO local — desde 300 €/mes',
          'Google Ads — desde 350 €/mes (o 500 € + 5–8 % del presupuesto)',
          'marketing de contenidos (IA) — desde 500 €/mes',
        ],
        tech: 'Astro + Cloudflare (más rápido/seguro/barato que el WordPress de la competencia); Claude para el contenido (multilingüe, textos SEO, Batch −50 %).',
        limits:
          'Limitación: los textos con IA llevan revisión editorial (E-E-A-T; nichos legales/médicos — hablante nativo); el diseño y la arquitectura los lleva una persona, no prometemos «una web en 5 minutos».',
        priceFrom: 'landing desde 700 €',
        priceNote: 'web desde 1 800 € · SEO desde 600 €/mes',
        tiers: [
          {
            plan: 'Landing',
            price: 'desde 700',
            cur: '€',
            note: 'mantenimiento desde 60 €/mes',
            items: [
              'una página en Astro+Cloudflare',
              'contenido ES/RU/EN',
              'formularios, analítica',
              'lanzamiento ~1 semana',
            ],
          },
          {
            plan: 'Web corporativa',
            price: 'desde 1 800',
            cur: '€',
            note: 'mantenimiento desde 60 €/mes',
            items: [
              'web multipágina en Astro+Cloudflare',
              'contenido ES/RU/EN',
              'SEO local (Google Business Profile) + analítica',
              'plazo 2–4 semanas',
            ],
            featured: true,
          },
          {
            plan: 'Tienda online',
            price: 'desde 3 500',
            cur: '€',
            note: 'mantenimiento desde 60 €/mes',
            items: [
              'tienda online en Astro+Cloudflare',
              'catálogo y fichas de producto (Batch)',
              'contenido ES/RU/EN',
              'analítica y formularios de pedido',
            ],
          },
        ],
        process: [
          { title: 'Brief', text: 'Objetivos, estructura, referencias, idiomas.' },
          { title: 'Diseño y montaje', text: 'Montaje en Astro: diseño, páginas, velocidad.' },
          { title: 'Contenido', text: 'Textos en ES/RU/EN con revisión editorial.' },
          { title: 'Prueba', text: 'Velocidad, móvil, formularios, Core Web Vitals.' },
          { title: 'Lanzamiento y promoción', text: 'Deploy en Cloudflare + SEO/publicidad según paquete.' },
        ],
        timeline: 'Plazo: landing ~1 semana, web 2–4 semanas.',
        quality:
          'Comprobación de Core Web Vitals, móvil y formularios; entrega; promoción/soporte mensual.',
        cta: 'Solicitar web y promoción',
        seo: {
          title: 'Creación y promoción de webs en Astro | litcore.ai',
          description:
            'Webs rápidas en Astro+Cloudflare con contenido en ES/RU/EN, SEO local y publicidad. Precios claros en euros: landing desde 700 €, web desde 1 800 €.',
        },
      },
      en: {
        title: 'Website creation and promotion',
        offer:
          'A fast Astro website + AI multilingual content (ES/RU/EN) + promotion — transparent, priced in €.',
        closes: 'client acquisition through the website and promotion',
        badge: '1–4 weeks',
        flow: {
          input: 'A brief and your materials: services, prices, photos',
          ai: 'Astro+Cloudflare, ES/RU/EN content by Claude, local SEO and ads',
          output: 'A fast site that brings clients in two languages',
        },
        pain: 'There’s no site or it’s slow on WordPress, leads come only by word of mouth, no promotion, and competitor studios hide prices.',
        make: 'We build a modern site on Astro+Cloudflare (fast, secure, near-zero hosting), copy in ES/RU/EN (a Claude strength), local SEO and ads; all in transparent euro packages.',
        result: 'A site that loads instantly and brings clients in two languages.',
        includes: [
          'Astro+Cloudflare site (landing/multi-page/store)',
          'multilingual ES/RU/EN content (Claude Skills for brand style; Batch for bulk product pages)',
          'local SEO (Google Business Profile) + analytics',
          'promotion: monthly SEO, Google/Meta Ads (optional), GEO option (optimisation for AI answers — a 2026 trend)',
          'website chatbot (optional)',
          'Kit Digital: «Sitio web» category, 500–2 000 €',
          'SEO — from €600/mo',
          'local SEO — from €300/mo',
          'Google Ads — from €350/mo (or €500 + 5–8% of budget)',
          'content marketing (AI) — from €500/mo',
        ],
        tech: 'Astro + Cloudflare (faster/safer/cheaper than competitors’ WordPress); Claude for content (multilingual, SEO copy, Batch −50 %).',
        limits:
          'Limitation: AI copy comes with editorial proofreading (E-E-A-T; legal/medical niches — a native speaker); design and architecture are led by a human, we don’t promise "a site in 5 minutes".',
        priceFrom: 'landing from €700',
        priceNote: 'site from €1,800 · SEO from €600/mo',
        tiers: [
          {
            plan: 'Landing',
            price: 'from 700',
            cur: '€',
            note: 'maintenance from €60/mo',
            items: [
              'one-page site on Astro+Cloudflare',
              'ES/RU/EN content',
              'forms, analytics',
              'launch ~1 week',
            ],
          },
          {
            plan: 'Business site',
            price: 'from 1 800',
            cur: '€',
            note: 'maintenance from €60/mo',
            items: [
              'multi-page site on Astro+Cloudflare',
              'ES/RU/EN content',
              'local SEO (Google Business Profile) + analytics',
              'timeline 2–4 weeks',
            ],
            featured: true,
          },
          {
            plan: 'Online store',
            price: 'from 3 500',
            cur: '€',
            note: 'maintenance from €60/mo',
            items: [
              'online store on Astro+Cloudflare',
              'catalogue and product pages (Batch)',
              'ES/RU/EN content',
              'analytics and order forms',
            ],
          },
        ],
        process: [
          { title: 'Brief', text: 'Goals, structure, references, languages.' },
          { title: 'Design & build', text: 'Astro build: design, pages, speed.' },
          { title: 'Content', text: 'ES/RU/EN copy with editorial proofreading.' },
          { title: 'Test', text: 'Speed, mobile, forms, Core Web Vitals.' },
          { title: 'Launch & promotion', text: 'Deploy on Cloudflare + SEO/ads per package.' },
        ],
        timeline: 'Timeline: landing ~1 week, site 2–4 weeks.',
        quality: 'Core Web Vitals, mobile and form checks; handover; monthly promotion/support.',
        cta: 'Get a website & promotion',
        seo: {
          title: 'Website creation and promotion on Astro | litcore.ai',
          description:
            'Fast websites on Astro+Cloudflare with ES/RU/EN content, local SEO and ads. Transparent euro pricing: landing from €700, business site from €1,800.',
        },
      },
    },
  },
];
