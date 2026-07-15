/** Блок A (№6–9) — услуги под стройку. Источник 1:1: каталог Промта A (14.07.2026). Цены не менять без согласования. */
import type { SectorService } from './types';

export const CONSTRUCCION_SERVICES_2: SectorService[] = [
  {
    id: 'facturas',
    num: 6,
    block: 'A',
    slug: { es: 'extraccion-de-facturas', ru: 'razbor-schetov', en: 'invoice-extraction' },
    copy: {
      es: {
        title: 'Extracción de datos de facturas de proveedores',
        offer:
          'Foto/PDF de la factura → a tabla: proveedor, partidas, importes, IVA. Y digitalización única de todo el archivo.',
        pain: 'Las facturas en papel/PDF se registran a mano — tiempo, errores, barrera de idioma para los relocantes.',
        make: 'Claude PDF/Vision + salida estructurada extrae los campos a tabla/Excel; el archivo grande, por lotes (Batch −50 %, Files API).',
        result: 'Horas de contabilidad en minutos, menos errores, barrera de idioma eliminada.',
        closes: 'registro de facturas de proveedores en la contabilidad',
        badge: '~1 semana',
        flow: {
          input: 'Foto o PDF de las facturas de proveedores (incluso todo el archivo)',
          ai: 'Claude PDF/Vision + salida estructurada; el archivo, por lotes (Batch −50 %)',
          output: 'Tabla: proveedor, partidas, importes, IVA — con revisión humana por muestreo',
        },
        includes: [
          'extracción de campos (proveedor, fecha, partidas, importes, IVA) a tabla/Excel',
          'digitalización única del archivo (cientos de facturas) por lotes',
          'verificación del DPA (GDPR) antes de subir CIF/NIF reales',
          'opción de integración con la contabilidad o la gestoría',
        ],
        tech: 'PDF+Vision + Structured Outputs (+ Claude for Excel para el registro); base invoice2data (MIT); pipeline de Vision moderno — sparrow (GPL — referencia o licencia comercial por contrato); volumen — Batch + Files API.',
        limits:
          'La calidad del escaneo y la letra manuscrita exigen revisión humana por muestreo; no es ZDR — el DPA es obligatorio.',
        priceFrom: 'desde 590 €',
        priceNote: '+ 0,15 €/doc o 39 €/mes',
        tiers: [
          {
            plan: 'Start',
            price: 'desde 590',
            cur: '€',
            note: '+ 0,15 €/doc o 39 €/mes',
            items: [
              'extracción de campos a tabla/Excel',
              'plantillas para los formatos de sus proveedores',
              'verificación del DPA (GDPR) antes de datos reales',
            ],
          },
          {
            plan: 'Pro',
            price: 'desde 1 490',
            cur: '€',
            note: '+ paquete por volumen',
            items: [
              'todo lo de Start',
              'integración con los formatos de los proveedores',
              'opción de integración con contabilidad/gestoría',
            ],
            featured: true,
          },
          {
            plan: 'Archivo',
            price: 'desde 490',
            cur: '€',
            note: 'proyecto único, volumen con Batch −50 %',
            items: [
              'digitalización de todo el archivo (cientos de facturas)',
              'procesado por lotes Batch + Files API',
              'verificación humana de campos por muestreo',
            ],
          },
        ],
        process: [
          { title: 'Auditoría', text: 'Revisamos los formatos de factura de sus proveedores.' },
          { title: 'Configuración', text: 'Plantillas de extracción de campos, 3–5 días.' },
          { title: 'Prueba', text: '30–50 facturas reales, verificación manual de los campos.' },
          { title: 'Lanzamiento', text: 'Entrega en producción; el archivo, como pasada de proyecto aparte.' },
          { title: 'Acompañamiento', text: 'Añadimos nuevos formatos de proveedores según aparecen.' },
        ],
        timeline: 'Plazo: ~1 semana',
        quality:
          'Verificamos a mano importes e IVA extraídos por muestreo, añadimos nuevos formatos de proveedores y enseñamos a cargar los documentos.',
        cta: 'Solicitar la extracción de facturas',
        seo: {
          title: 'Extracción de facturas de proveedores con IA | litcore.ai',
          description:
            'Foto o PDF de la factura a tabla: proveedor, partidas, importes, IVA. Digitalización única del archivo. Horas de contabilidad en minutos, menos errores.',
        },
      },
      ru: {
        title: 'Извлечение данных из счетов поставщиков',
        offer:
          'Фото/PDF счёта — в таблицу: поставщик, позиции, суммы, IVA. Плюс разовая оцифровка всего архива.',
        pain: 'Бумажные/PDF facturas от поставщиков вносят в учёт вручную — время, ошибки, языковой барьер для релокантов.',
        make: 'Claude PDF/Vision + структурированный вывод извлекает поля в таблицу/Excel; большой архив — пакетно (Batch −50 %, Files API).',
        result: 'Часы бухгалтерии в минуты, меньше ошибок, снят языковой барьер.',
        closes: 'ввод счетов поставщиков в учёт',
        badge: '~1 неделя',
        flow: {
          input: 'Фото или PDF счетов поставщиков (хоть весь архив)',
          ai: 'Claude PDF/Vision + структурированный вывод; архив — пакетно (Batch −50 %)',
          output: 'Таблица: поставщик, позиции, суммы, IVA — с выборочной проверкой человеком',
        },
        includes: [
          'извлечение полей (поставщик, дата, позиции, суммы, IVA) в таблицу/Excel',
          'разовая оцифровка архива (сотни счетов) пакетно',
          'проверка DPA (GDPR) до загрузки реальных CIF/NIF',
          'опция интеграции с учётом/гестором',
        ],
        tech: 'PDF+Vision + Structured Outputs (+ Claude for Excel для записи); база invoice2data (MIT); современный Vision-пайплайн — sparrow (GPL — референс или коммерческая лицензия по договору); массовость — Batch + Files API.',
        limits:
          'Качество скана и рукопись требуют выборочной проверки человеком; не ZDR — DPA обязателен.',
        priceFrom: 'от 590 €',
        priceNote: '+ 0,15 €/док или 39 €/мес',
        tiers: [
          {
            plan: 'Start',
            price: 'от 590',
            cur: '€',
            note: '+ 0,15 €/док или 39 €/мес',
            items: [
              'извлечение полей в таблицу/Excel',
              'шаблоны под форматы ваших поставщиков',
              'проверка DPA (GDPR) до реальных данных',
            ],
          },
          {
            plan: 'Pro',
            price: 'от 1 490',
            cur: '€',
            note: '+ пакет по объёму',
            items: [
              'всё из Start',
              'интеграция под форматы поставщиков',
              'опция интеграции с учётом/гестором',
            ],
            featured: true,
          },
          {
            plan: 'Архив',
            price: 'от 490',
            cur: '€',
            note: 'разовый проект, объём по Batch −50 %',
            items: [
              'оцифровка всего архива (сотни счетов)',
              'пакетная обработка Batch + Files API',
              'выборочная сверка полей человеком',
            ],
          },
        ],
        process: [
          { title: 'Аудит', text: 'Смотрим форматы счетов ваших поставщиков.' },
          { title: 'Настройка', text: 'Шаблоны извлечения полей, 3–5 дней.' },
          { title: 'Тест', text: '30–50 реальных счетов, сверка полей вручную.' },
          { title: 'Запуск', text: 'Передаём в работу; архив — отдельный проектный прогон.' },
          { title: 'Сопровождение', text: 'Добавляем новые форматы поставщиков по мере появления.' },
        ],
        timeline: 'Срок ~1 неделя',
        quality:
          'Сверяем извлечённые суммы и IVA вручную на выборке, добавляем новые форматы поставщиков, учим загрузке документов.',
        cta: 'Заказать разбор счетов',
        seo: {
          title: 'Извлечение данных из счетов поставщиков с ИИ | litcore.ai',
          description:
            'Фото или PDF счёта — в таблицу: поставщик, позиции, суммы, IVA. Плюс разовая оцифровка всего архива пакетом. Часы бухгалтерии — в минуты, меньше ошибок.',
        },
      },
      en: {
        title: 'Supplier invoice data extraction',
        offer:
          'Photo/PDF invoice → into a table: supplier, items, amounts, VAT. Plus a one-off digitization of the whole archive.',
        pain: 'Paper/PDF supplier invoices are keyed in by hand — time, errors, a language barrier for relocants.',
        make: 'Claude PDF/Vision + structured output extracts fields into a table/Excel; a large archive in batches (Batch −50 %, Files API).',
        result: 'Bookkeeping hours turned into minutes, fewer errors, language barrier removed.',
        closes: 'entering supplier invoices into your books',
        badge: '~1 week',
        flow: {
          input: 'Photo or PDF supplier invoices (even the whole archive)',
          ai: 'Claude PDF/Vision + structured output; the archive in batches (Batch −50 %)',
          output: 'Table: supplier, items, amounts, VAT — with human spot checks',
        },
        includes: [
          'field extraction (supplier, date, items, amounts, VAT) into a table/Excel',
          'one-off archive digitization (hundreds of invoices) in batches',
          'DPA (GDPR) check before uploading real CIF/NIF',
          'optional integration with bookkeeping or your gestor',
        ],
        tech: 'PDF+Vision + Structured Outputs (+ Claude for Excel for writing); invoice2data (MIT) as the base; modern Vision pipeline — sparrow (GPL — reference or commercial licence by agreement); volume via Batch + Files API.',
        limits:
          'Scan quality and handwriting require spot checks by a human; not ZDR — a DPA is mandatory.',
        priceFrom: 'from €590',
        priceNote: '+ €0.15/doc or €39/mo',
        tiers: [
          {
            plan: 'Start',
            price: 'from 590',
            cur: '€',
            note: '+ €0.15/doc or €39/mo',
            items: [
              'field extraction into a table/Excel',
              'templates for your suppliers’ formats',
              'DPA (GDPR) check before real data',
            ],
          },
          {
            plan: 'Pro',
            price: 'from 1 490',
            cur: '€',
            note: '+ volume package',
            items: [
              'everything in Start',
              'integration for supplier formats',
              'optional integration with bookkeeping/gestor',
            ],
            featured: true,
          },
          {
            plan: 'Archive',
            price: 'from 490',
            cur: '€',
            note: 'one-off project, volume with Batch −50 %',
            items: [
              'digitization of the whole archive (hundreds of invoices)',
              'batch processing via Batch + Files API',
              'human spot checks of extracted fields',
            ],
          },
        ],
        process: [
          { title: 'Audit', text: 'We review your suppliers’ invoice formats.' },
          { title: 'Setup', text: 'Field-extraction templates, 3–5 days.' },
          { title: 'Test', text: '30–50 real invoices, manual field verification.' },
          { title: 'Launch', text: 'Hand-over to production; the archive runs as a separate project pass.' },
          { title: 'Support', text: 'We add new supplier formats as they appear.' },
        ],
        timeline: 'Timeline: ~1 week',
        quality:
          'We manually verify extracted amounts and VAT on a sample, add new supplier formats and teach your team how to upload documents.',
        cta: 'Get invoice extraction',
        seo: {
          title: 'AI invoice data extraction for construction | litcore.ai',
          description:
            'Photo or PDF invoice into a table: supplier, items, amounts, VAT. Plus a one-off archive digitization. Bookkeeping hours in minutes, fewer errors.',
        },
      },
    },
  },
  {
    id: 'bot-solicitudes',
    num: 7,
    block: 'A',
    slug: { es: 'bot-de-solicitudes', ru: 'bot-zayavok', en: 'lead-bot' },
    copy: {
      es: {
        title: 'Bot de solicitudes RU+ES: cualificación 24/7 y anti-fantasma',
        offer:
          'Responde en minutos en el idioma del cliente, cualifica la solicitud, crea la ficha en el CRM y no deja «enfriarse» el presupuesto.',
        pain: 'Las solicitudes llegan al privado sin cualificar, el maestro pierde tiempo en llamadas vacías y pierde leads por respuesta lenta; los presupuestos enviados «se callan» — en el mercado se pierde >50 % de ventas sin seguimiento.',
        make: 'Un bot 24/7 responde en ES o RU, recoge dirección/superficie/tipo/presupuesto/urgencia, crea la ficha en el CRM y avisa al maestro; seguimiento automático T+2/T+7/T+15.',
        result: 'La respuesta rápida capta el lead, menos llamadas vacías, los presupuestos llegan a respuesta.',
        closes: 'recepción y cualificación de solicitudes + seguimiento de presupuestos hasta la respuesta',
        badge: '~1–1,5 semanas',
        flow: {
          input: 'Solicitud del cliente por Telegram/WhatsApp en ES o RU',
          ai: 'Bot 24/7: cualificación por lista, ficha en el CRM, seguimiento T+2/T+7/T+15',
          output: 'Lead cualificado para el maestro + presupuestos llevados a respuesta',
        },
        includes: [
          'bot 24/7 en Telegram o canal compatible con WhatsApp, idioma automático ES/RU',
          'cualificación por lista de control',
          'ficha del lead en el CRM + aviso al maestro',
          'seguimiento anti-fantasma (T+2/T+7/T+15)',
          'descargo AI Act art. 50 + DPA',
        ],
        tech: 'MCP + Tool use + CRM Django-CRM/BottleCRM (MIT, con MCP integrado para Claude), armazón de bot LLM-for-Whatsapp (MIT).',
        limits:
          'No hay «WhatsApp nativo» — conectamos mediante un servidor HTTPS compatible con WhatsApp de terceros (proveedor de WhatsApp Business API); denylist para borrar/modificar; el bot revela que es una IA.',
        priceFrom: 'desde 690 €',
        priceNote: '+ 49 €/mes · setup + acompañamiento',
        tiers: [
          {
            plan: 'Start',
            price: 'desde 690',
            cur: '€',
            note: '+ 49 €/mes',
            items: [
              'bot + cualificación por lista de control',
              'aviso al maestro',
              'idioma automático ES/RU',
            ],
          },
          {
            plan: 'Pro',
            price: 'desde 1 690',
            cur: '€',
            note: '+ 129 €/mes',
            items: [
              '+ CRM (Django-CRM/BottleCRM, MIT)',
              'seguimiento automático T+2/T+7/T+15',
              'varios canales',
            ],
            featured: true,
          },
          {
            plan: 'A medida',
            price: 'a medida',
            note: 'bajo pedido',
            items: ['Integración con su CRM y contabilidad existentes'],
          },
        ],
        process: [
          { title: 'Auditoría', text: 'Vemos adónde llegan hoy las solicitudes.' },
          { title: 'Configuración', text: 'Bot + CRM + guion de cualificación, 4–6 días.' },
          { title: 'Prueba', text: 'Diálogos reales y de prueba en ES y RU.' },
          { title: 'Lanzamiento', text: 'Conectamos los canales y lo pasamos a producción.' },
          { title: 'Acompañamiento', text: 'Revisamos fichas y seguimientos, enseñamos al maestro a usar el CRM.' },
        ],
        timeline: 'Plazo: ~1–1,5 semanas',
        quality:
          'Recorremos los guiones en ambos idiomas, comprobamos la creación de fichas y el envío del seguimiento, y enseñamos al maestro a trabajar con el CRM.',
        cta: 'Solicitar el bot de solicitudes',
        seo: {
          title: 'Bot de solicitudes 24/7 RU+ES para reformas | litcore.ai',
          description:
            'El bot responde en minutos en el idioma del cliente, cualifica la solicitud, crea la ficha en el CRM y no deja enfriarse el presupuesto. Atención 24/7.',
        },
      },
      ru: {
        title: 'Бот заявок RU+ES: квалификация 24/7 и анти-гостинг',
        offer:
          'Отвечает за минуты на языке клиента, квалифицирует заявку, заводит карточку в CRM и не даёт смете «остыть».',
        pain: 'Заявки летят в личку без квалификации, мастер тратит время на пустые звонки и теряет лиды из-за медленного ответа; отправленные сметы «замолкают» — по рынку >50 % продаж теряются без follow-up.',
        make: 'Бот 24/7 отвечает на RU или ES, собирает адрес/площадь/тип работ/бюджет/срочность, заводит карточку в CRM и уведомляет мастера; авто-follow-up по сметам T+2/T+7/T+15.',
        result: 'Быстрый ответ ловит лид, меньше пустых звонков, сметы доводятся до ответа клиента.',
        closes: 'приём и квалификация заявок + доведение смет до ответа',
        badge: '~1–1,5 недели',
        flow: {
          input: 'Заявка клиента в Telegram/WhatsApp на RU или ES',
          ai: 'Бот 24/7: квалификация по чек-листу, карточка в CRM, follow-up T+2/T+7/T+15',
          output: 'Квалифицированный лид у мастера + сметы доведены до ответа',
        },
        includes: [
          'бот 24/7 в Telegram/WhatsApp-совместимом канале, авто-язык RU/ES',
          'квалификация по чек-листу',
          'карточка лида в CRM + уведомление мастеру',
          'анти-гостинг follow-up (T+2/T+7/T+15)',
          'дисклеймер AI Act ст. 50 + DPA',
        ],
        tech: 'MCP + Tool use + CRM Django-CRM/BottleCRM (MIT, встроенный MCP под Claude), бот-каркас LLM-for-Whatsapp (MIT).',
        limits:
          '«Нативного WhatsApp» нет — подключаем через сторонний WhatsApp-совместимый HTTPS-сервер (провайдер WhatsApp Business API); denylist на удаление/изменение; бот раскрывает, что он ИИ.',
        priceFrom: 'от 690 €',
        priceNote: '+ 49 €/мес · setup + сопровождение',
        tiers: [
          {
            plan: 'Start',
            price: 'от 690',
            cur: '€',
            note: '+ 49 €/мес',
            items: [
              'бот + квалификация по чек-листу',
              'уведомление мастеру',
              'авто-язык RU/ES',
            ],
          },
          {
            plan: 'Pro',
            price: 'от 1 690',
            cur: '€',
            note: '+ 129 €/мес',
            items: [
              '+ CRM (Django-CRM/BottleCRM, MIT)',
              'авто-follow-up T+2/T+7/T+15',
              'несколько каналов',
            ],
            featured: true,
          },
          {
            plan: 'A medida',
            price: 'a medida',
            note: 'по запросу',
            items: ['Интеграция с существующей CRM и учётом'],
          },
        ],
        process: [
          { title: 'Аудит', text: 'Смотрим, куда идут заявки сейчас.' },
          { title: 'Настройка', text: 'Бот + CRM + сценарий квалификации, 4–6 дней.' },
          { title: 'Тест', text: 'Реальные и тестовые диалоги на RU и ES.' },
          { title: 'Запуск', text: 'Подключаем каналы и передаём в работу.' },
          { title: 'Сопровождение', text: 'Проверяем карточки и follow-up, помогаем мастеру освоить CRM.' },
        ],
        timeline: 'Срок ~1–1,5 недели',
        quality:
          'Прогоняем сценарии на обоих языках, проверяем создание карточек и уход follow-up, учим мастера работать с CRM.',
        cta: 'Заказать бот заявок',
        seo: {
          title: 'Бот заявок 24/7 RU+ES для строительства | litcore.ai',
          description:
            'Бот отвечает за минуты на языке клиента, квалифицирует заявку, заводит карточку в CRM и доводит смету до ответа клиента. Быстрый ответ ловит лид 24/7.',
        },
      },
      en: {
        title: 'RU+ES lead bot: 24/7 qualification and anti-ghosting',
        offer:
          'Replies in minutes in the client’s language, qualifies the lead, creates a CRM card, and won’t let the quote go cold.',
        pain: 'Leads land in DMs unqualified, the tradesman wastes time on empty calls and loses leads to slow replies; sent quotes “go silent” — the market loses >50 % of sales without follow-up.',
        make: 'A 24/7 bot replies in ES or RU, collects address/area/scope/budget/urgency, creates the CRM card and notifies the tradesman; automatic follow-up at T+2/T+7/T+15.',
        result: 'A fast reply catches the lead, fewer empty calls, quotes get chased to an answer.',
        closes: 'lead intake and qualification + chasing quotes to an answer',
        badge: '~1–1.5 weeks',
        flow: {
          input: 'Client enquiry via Telegram/WhatsApp in RU or ES',
          ai: '24/7 bot: checklist qualification, CRM card, follow-up T+2/T+7/T+15',
          output: 'A qualified lead for the tradesman + quotes chased to an answer',
        },
        includes: [
          '24/7 bot in Telegram or a WhatsApp-compatible channel, auto language RU/ES',
          'checklist-based qualification',
          'lead card in the CRM + alert to the tradesman',
          'anti-ghosting follow-up (T+2/T+7/T+15)',
          'AI Act art. 50 + DPA disclaimer',
        ],
        tech: 'MCP + Tool use + Django-CRM/BottleCRM CRM (MIT, built-in MCP for Claude), LLM-for-Whatsapp bot framework (MIT).',
        limits:
          'There is no “native WhatsApp” — we connect via a third-party WhatsApp-compatible HTTPS server (a WhatsApp Business API provider); a denylist for deleting/changing; the bot discloses that it is an AI.',
        priceFrom: 'from €690',
        priceNote: '+ €49/mo · setup + support',
        tiers: [
          {
            plan: 'Start',
            price: 'from 690',
            cur: '€',
            note: '+ €49/mo',
            items: [
              'bot + checklist-based qualification',
              'alert to the tradesman',
              'auto language RU/ES',
            ],
          },
          {
            plan: 'Pro',
            price: 'from 1 690',
            cur: '€',
            note: '+ €129/mo',
            items: [
              '+ CRM (Django-CRM/BottleCRM, MIT)',
              'auto follow-up T+2/T+7/T+15',
              'multiple channels',
            ],
            featured: true,
          },
          {
            plan: 'Custom',
            price: 'custom',
            note: 'on request',
            items: ['Integration with your existing CRM and accounting'],
          },
        ],
        process: [
          { title: 'Audit', text: 'We look at where your leads arrive today.' },
          { title: 'Setup', text: 'Bot + CRM + qualification script, 4–6 days.' },
          { title: 'Test', text: 'Real and test dialogues in both ES and RU.' },
          { title: 'Launch', text: 'We connect the channels and hand it over to production.' },
          { title: 'Support', text: 'We check the cards and follow-ups, and help the tradesman master the CRM.' },
        ],
        timeline: 'Timeline: ~1–1.5 weeks',
        quality:
          'We run the scripts in both languages, verify that cards are created and follow-ups go out, and teach the tradesman to work with the CRM.',
        cta: 'Get the lead bot',
        seo: {
          title: '24/7 lead bot RU+ES for construction | litcore.ai',
          description:
            'The bot replies in minutes in the client’s language, qualifies the lead, creates a CRM card and chases quotes to an answer. Fast replies 24/7, RU and ES.',
        },
      },
    },
  },
  {
    id: 'precios-materiales',
    num: 8,
    block: 'A',
    slug: { es: 'monitor-de-precios', ru: 'monitoring-cen-materialov', en: 'price-monitor' },
    copy: {
      es: {
        title: 'Monitor de precios de materiales con aviso para el presupuesto',
        offer:
          'Vigilamos los precios de los proveedores y avisamos cuándo recalcular el presupuesto para no perder margen.',
        pain: 'Los precios de materiales suben, el presupuesto va con tarifas viejas y el margen se escapa, y se descubre a toro pasado.',
        make: 'De forma programada (Cowork/Claude Code Routine + navegador) recogemos precios de las partidas elegidas en sus proveedores, los comparamos con las tarifas del presupuesto y enviamos un aviso «cemento +8 %, actualiza la partida X».',
        result: 'El presupuesto siempre con precios actuales, menos pérdida de margen.',
        closes: 'actualización de precios de materiales en los presupuestos',
        badge: '~1 semana',
        flow: {
          input: 'Lista de partidas y proveedores a seguir',
          ai: 'Recogida de precios programada + comparación con las tarifas del presupuesto',
          output: 'Aviso «cemento +8 %, actualiza la partida X» + resumen semanal/mensual',
        },
        includes: [
          'lista de partidas/proveedores a seguir',
          'recogida periódica de precios de forma programada',
          'comparación con las tarifas del presupuesto + aviso ante desviaciones',
          'resumen semanal/mensual',
        ],
        tech: 'Cowork Scheduled Tasks / Claude Code Routines + automatización de navegador.',
        limits:
          'La automatización de navegador está en beta: riesgo de prompt injection en sitios ajenos, empezamos por fuentes/catálogos de confianza; esto es monitorización y aviso, no compra automática.',
        priceFrom: 'desde 490 €',
        priceNote: '+ 39 €/mes · recogida programada',
        tiers: [
          {
            plan: 'Start',
            price: 'desde 490',
            cur: '€',
            note: '+ 39 €/mes',
            items: [
              'hasta N partidas/proveedores',
              'recogida de precios programada',
              'aviso ante desviación + resumen',
            ],
          },
          {
            plan: 'Pro',
            price: 'desde 990',
            cur: '€',
            note: '+ 69 €/mes',
            items: [
              'más partidas y proveedores',
              'enlace con el presupuesto (servicio n.º 1)',
              'ajuste de umbrales de aviso',
            ],
            featured: true,
          },
        ],
        process: [
          { title: 'Auditoría', text: 'Definimos las partidas y proveedores clave.' },
          { title: 'Configuración', text: 'Recogida + comparación + avisos, 3–5 días.' },
          { title: 'Prueba', text: '2 semanas de observación de la corrección de los precios.' },
          { title: 'Lanzamiento', text: 'Activamos el calendario y los avisos en producción.' },
          { title: 'Acompañamiento', text: 'Ajustamos los umbrales de aviso y enseñamos a leer el resumen.' },
        ],
        timeline: 'Plazo: ~1 semana',
        quality:
          'Comprobamos que los precios recogidos son correctos, ajustamos los umbrales de aviso y enseñamos a leer el resumen.',
        cta: 'Solicitar el monitor de precios',
        seo: {
          title: 'Monitor de precios de materiales de obra | litcore.ai',
          description:
            'Vigilamos los precios de sus proveedores y avisamos cuándo recalcular el presupuesto. Presupuesto siempre con precios actuales, menos pérdida de margen.',
        },
      },
      ru: {
        title: 'Мониторинг цен на стройматериалы и обновление сметы',
        offer:
          'Следим за ценами поставщиков и предупреждаем, когда пора пересчитать смету, чтобы не терять маржу.',
        pain: 'Цены на материалы прыгают, смета считается по старым расценкам, маржа утекает и вскрывается уже по факту.',
        make: 'По расписанию (Cowork/Claude Code Routine + браузер) собираем цены выбранных позиций у ваших поставщиков, сравниваем с расценками в смете, шлём алерт «цемент +8 %, обнови позицию X».',
        result: 'Смета всегда по актуальным ценам, меньше потерь маржи.',
        closes: 'актуализация цен материалов в сметах',
        badge: '~1 неделя',
        flow: {
          input: 'Список отслеживаемых позиций и поставщиков',
          ai: 'Сбор цен по расписанию + сравнение с расценками сметы',
          output: 'Алерт «цемент +8 %, обнови позицию X» + сводка неделя/месяц',
        },
        includes: [
          'список отслеживаемых позиций/поставщиков',
          'регулярный сбор цен по расписанию',
          'сравнение с расценками сметы + алерт при отклонении',
          'сводка (неделя/месяц)',
        ],
        tech: 'Cowork Scheduled Tasks / Claude Code Routines + браузерная автоматизация.',
        limits:
          'Браузер-автоматизация — бета: риск prompt injection на чужих сайтах, начинаем с доверенных источников/каталогов; это мониторинг и подсказка, не автозакупка.',
        priceFrom: 'от 490 €',
        priceNote: '+ 39 €/мес · сбор цен по расписанию',
        tiers: [
          {
            plan: 'Start',
            price: 'от 490',
            cur: '€',
            note: '+ 39 €/мес',
            items: [
              'до N позиций/поставщиков',
              'сбор цен по расписанию',
              'алерт при отклонении + сводка',
            ],
          },
          {
            plan: 'Pro',
            price: 'от 990',
            cur: '€',
            note: '+ 69 €/мес',
            items: [
              'больше позиций и поставщиков',
              'связка со сметой (услуга №1)',
              'настройка порогов алертов',
            ],
            featured: true,
          },
        ],
        process: [
          { title: 'Аудит', text: 'Определяем ключевые позиции и поставщиков.' },
          { title: 'Настройка', text: 'Сбор + сравнение + алерты, 3–5 дней.' },
          { title: 'Тест', text: '2 недели наблюдения за корректностью цен.' },
          { title: 'Запуск', text: 'Включаем расписание и алерты в работу.' },
          { title: 'Сопровождение', text: 'Донастраиваем пороги алертов, учим читать сводку.' },
        ],
        timeline: 'Срок ~1 неделя',
        quality:
          'Проверяем корректность собранных цен, настраиваем пороги алертов, учим читать сводку.',
        cta: 'Заказать мониторинг цен',
        seo: {
          title: 'Мониторинг цен на стройматериалы | litcore.ai',
          description:
            'Следим за ценами поставщиков и предупреждаем, когда пора пересчитать смету. Смета всегда по актуальным ценам — меньше потерь маржи на материалах.',
        },
      },
      en: {
        title: 'Building-material price monitor with estimate alerts',
        offer:
          'We watch supplier prices and alert you when to re-price the estimate so you don’t lose margin.',
        pain: 'Material prices jump, the estimate runs on old rates, margin leaks and is only noticed after the fact.',
        make: 'On a schedule (Cowork/Claude Code Routine + browser) we collect prices for chosen items from your suppliers, compare them with the estimate’s rates and send an alert “cement +8 %, update item X”.',
        result: 'The estimate always on current prices, less margin lost.',
        closes: 'keeping material prices current in your estimates',
        badge: '~1 week',
        flow: {
          input: 'A list of tracked items and suppliers',
          ai: 'Scheduled price collection + comparison with the estimate’s rates',
          output: 'Alert “cement +8 %, update item X” + weekly/monthly summary',
        },
        includes: [
          'list of tracked items/suppliers',
          'regular scheduled price collection',
          'comparison with the estimate’s rates + alert on deviation',
          'weekly/monthly summary',
        ],
        tech: 'Cowork Scheduled Tasks / Claude Code Routines + browser automation.',
        limits:
          'Browser automation is in beta: prompt-injection risk on third-party sites, so we start with trusted sources/catalogues; this is monitoring and advice, not auto-purchasing.',
        priceFrom: 'from €490',
        priceNote: '+ €39/mo · scheduled collection',
        tiers: [
          {
            plan: 'Start',
            price: 'from 490',
            cur: '€',
            note: '+ €39/mo',
            items: [
              'up to N items/suppliers',
              'scheduled price collection',
              'deviation alert + summary',
            ],
          },
          {
            plan: 'Pro',
            price: 'from 990',
            cur: '€',
            note: '+ €69/mo',
            items: [
              'more items and suppliers',
              'link to the estimate (service no. 1)',
              'alert-threshold tuning',
            ],
            featured: true,
          },
        ],
        process: [
          { title: 'Audit', text: 'We define the key items and suppliers.' },
          { title: 'Setup', text: 'Collection + comparison + alerts, 3–5 days.' },
          { title: 'Test', text: '2 weeks of observation to verify price accuracy.' },
          { title: 'Launch', text: 'We switch the schedule and alerts to production.' },
          { title: 'Support', text: 'We tune alert thresholds and teach you to read the summary.' },
        ],
        timeline: 'Timeline: ~1 week',
        quality:
          'We verify that collected prices are correct, tune the alert thresholds and teach you to read the summary.',
        cta: 'Get the price monitor',
        seo: {
          title: 'Building material price monitor | litcore.ai',
          description:
            'We watch supplier prices and alert you when to re-price the estimate. The estimate always runs on current prices, so you lose less margin on materials.',
        },
      },
    },
  },
  {
    id: 'calculadora',
    num: 9,
    block: 'A',
    slug: { es: 'calculadora-web', ru: 'kalkulyator-smety', en: 'website-calculator' },
    copy: {
      es: {
        title: 'Calculadora de presupuesto orientativo para la web',
        offer:
          'El visitante introduce los datos de la reforma y ve al instante una horquilla de precio — usted recibe un lead cualificado.',
        pain: 'Los visitantes se van sin contactar, el «¿cuánto cuesta?» se queda sin respuesta rápida, y los leads se los lleva quien responde primero.',
        make: 'Una calculadora integrada estima la horquilla por superficie/tipo/acabado (sobre banco de precios español) y recoge el contacto → ficha de lead.',
        result: 'Más solicitudes desde la web, cualificación previa antes de la llamada.',
        closes: 'captación de solicitudes desde la web y cualificación previa',
        badge: '~1–1,5 semanas',
        flow: {
          input: 'Datos de la reforma del visitante (superficie, tipo de obra, acabado)',
          ai: 'Calculadora sobre Claude API: horquilla con banco de precios español',
          output: 'Horquilla de precio + contacto = lead cualificado previamente',
        },
        includes: [
          'widget calculador integrable en la web',
          'lógica de horquilla (superficie × tipo de obra × nivel de acabado) sobre banco de precios español',
          'captura del contacto → ficha de lead (CRM del servicio n.º 7)',
          'descargo «orientativo, no es oferta» + AI Act art. 50',
        ],
        tech: 'Backend sobre la Claude API (el usage lo paga el contratista) + widget integrable en la web.',
        limits:
          'Lo construimos sobre la Claude API, NO sobre un artefacto de IA: con el artefacto cada visitante paga e inicia sesión con su cuenta de Claude — no sirve para una web anónima. La calculadora da una horquilla aproximada, no un presupuesto; el final, tras la visita.',
        priceFrom: 'desde 590 €',
        priceNote: '+ 29 €/mes + Claude API según tráfico',
        tiers: [
          {
            plan: 'Start',
            price: 'desde 590',
            cur: '€',
            note: '+ 29 €/mes + pago de la Claude API por tráfico',
            items: [
              'widget calculador en la web',
              'lógica de horquilla sobre banco de precios español',
              'captura de contacto → ficha de lead',
            ],
          },
          {
            plan: 'Pro',
            price: 'desde 1 290',
            cur: '€',
            note: '+ desde 59 €/mes + pago de la Claude API por tráfico',
            items: [
              'lógica de cálculo a medida',
              'diseño adaptado a su web',
              'enlace con el CRM',
            ],
            featured: true,
          },
        ],
        process: [
          { title: 'Auditoría', text: 'Revisamos la web y los trabajos típicos.' },
          { title: 'Configuración', text: 'Lógica + widget + backend, 4–6 días.' },
          { title: 'Prueba', text: 'Comprobación de las horquillas con casos reales.' },
          { title: 'Lanzamiento', text: 'Integración de la calculadora en la web.' },
          { title: 'Acompañamiento', text: 'Contrastamos la horquilla con presupuestos reales y ajustamos los campos.' },
        ],
        timeline: 'Plazo: ~1–1,5 semanas',
        quality:
          'Contrastamos la horquilla con presupuestos reales, ajustamos los campos y enseñamos a recoger los leads.',
        cta: 'Solicitar la calculadora web',
        seo: {
          title: 'Calculadora de presupuesto para tu web | litcore.ai',
          description:
            'El visitante introduce los datos de la reforma y ve al instante una horquilla de precio; usted recibe un lead con contacto. Más solicitudes desde la web.',
        },
      },
      ru: {
        title: 'Калькулятор «примерная смета» на сайт',
        offer:
          'Посетитель сайта вводит параметры ремонта и сразу видит вилку цены — вы получаете тёплый лид с контактом.',
        pain: 'Посетители уходят без заявки, «сколько стоит?» остаётся без быстрого ответа, лиды достаются тем, кто отвечает первым.',
        make: 'Встраиваемый калькулятор считает вилку по площади/типу работ/уровню отделки (на испанской базе цен) и собирает контакт → карточка лида.',
        result: 'Больше заявок с сайта, предварительная квалификация до звонка.',
        closes: 'сбор заявок с сайта и первичная квалификация',
        badge: '~1–1,5 недели',
        flow: {
          input: 'Параметры ремонта от посетителя сайта (площадь, тип работ, отделка)',
          ai: 'Калькулятор на Claude API считает вилку по испанской базе цен',
          output: 'Вилка цены + контакт = тёплый лид с первичной квалификацией',
        },
        includes: [
          'встраиваемый виджет-калькулятор на сайт',
          'логика вилки (площадь × тип работ × уровень отделки) на испанской базе цен',
          'сбор контакта → карточка лида (CRM услуги №7)',
          'дисклеймер «ориентир, не оферта» + AI Act ст. 50',
        ],
        tech: 'Бэкенд на Claude API (usage оплачивает подрядчик) + встраиваемый виджет на сайт.',
        limits:
          'Строим на Claude API, НЕ на AI-артефакте: у AI-артефакта платит и логинится каждый посетитель своим Claude-аккаунтом — для анонимного сайта не подходит. Калькулятор даёт грубую вилку, не смету; финал — после выезда.',
        priceFrom: 'от 590 €',
        priceNote: '+ 29 €/мес + Claude API по трафику',
        tiers: [
          {
            plan: 'Start',
            price: 'от 590',
            cur: '€',
            note: '+ 29 €/мес + оплата Claude API по трафику',
            items: [
              'виджет-калькулятор на сайт',
              'логика вилки на испанской базе цен',
              'сбор контакта → карточка лида',
            ],
          },
          {
            plan: 'Pro',
            price: 'от 1 290',
            cur: '€',
            note: '+ от 59 €/мес + оплата Claude API по трафику',
            items: [
              'кастомная логика расчёта',
              'дизайн под ваш сайт',
              'связка с CRM',
            ],
            featured: true,
          },
        ],
        process: [
          { title: 'Аудит', text: 'Смотрим сайт и типовые работы.' },
          { title: 'Настройка', text: 'Логика + виджет + бэкенд, 4–6 дней.' },
          { title: 'Тест', text: 'Проверка вилок на реальных кейсах.' },
          { title: 'Запуск', text: 'Встройка калькулятора на сайт.' },
          { title: 'Сопровождение', text: 'Сверяем вилку с реальными сметами, донастраиваем поля.' },
        ],
        timeline: 'Срок ~1–1,5 недели',
        quality:
          'Сверяем вилку с реальными сметами, настраиваем поля, учим забирать лиды.',
        cta: 'Заказать калькулятор на сайт',
        seo: {
          title: 'Калькулятор примерной сметы на сайт | litcore.ai',
          description:
            'Посетитель сайта вводит параметры ремонта и сразу видит вилку цены, вы получаете тёплый лид с контактом. Больше заявок и квалификация до звонка.',
        },
      },
      en: {
        title: 'Website “rough estimate” calculator',
        offer:
          'A site visitor enters the reform details and instantly sees a price range — you get a warm lead with contact.',
        pain: 'Visitors leave without enquiring, “how much?” gets no quick answer, and leads go to whoever replies first.',
        make: 'An embedded calculator estimates a range by area/scope/finish (on a Spanish price base) and captures the contact → a lead card.',
        result: 'More website enquiries, pre-qualification before the call.',
        closes: 'capturing website enquiries with pre-qualification',
        badge: '~1–1.5 weeks',
        flow: {
          input: 'Reform details from a site visitor (area, scope, finish level)',
          ai: 'A calculator on the Claude API estimates the range on a Spanish price base',
          output: 'A price range + contact = a warm, pre-qualified lead',
        },
        includes: [
          'embeddable calculator widget for your site',
          'range logic (area × scope × finish level) on a Spanish price base',
          'contact capture → lead card (CRM from service no. 7)',
          '“indicative, not an offer” disclaimer + AI Act art. 50',
        ],
        tech: 'Backend on the Claude API (usage paid by the contractor) + an embeddable website widget.',
        limits:
          'We build on the Claude API, NOT on an AI artifact: with an artifact every visitor pays and logs in with their own Claude account — unusable for an anonymous website. The calculator gives a rough range, not an estimate; the final one comes after the site visit.',
        priceFrom: 'from €590',
        priceNote: '+ €29/mo + Claude API by traffic',
        tiers: [
          {
            plan: 'Start',
            price: 'from 590',
            cur: '€',
            note: '+ €29/mo + Claude API usage by traffic',
            items: [
              'calculator widget on your site',
              'range logic on a Spanish price base',
              'contact capture → lead card',
            ],
          },
          {
            plan: 'Pro',
            price: 'from 1 290',
            cur: '€',
            note: '+ from €59/mo + Claude API usage by traffic',
            items: [
              'custom calculation logic',
              'design matched to your site',
              'CRM link',
            ],
            featured: true,
          },
        ],
        process: [
          { title: 'Audit', text: 'We review your site and typical jobs.' },
          { title: 'Setup', text: 'Logic + widget + backend, 4–6 days.' },
          { title: 'Test', text: 'Range checks against real cases.' },
          { title: 'Launch', text: 'Embedding the calculator into the site.' },
          { title: 'Support', text: 'We compare the range with real estimates and tune the fields.' },
        ],
        timeline: 'Timeline: ~1–1.5 weeks',
        quality:
          'We check the range against real estimates, tune the fields and teach you how to collect the leads.',
        cta: 'Get the website calculator',
        seo: {
          title: 'Website estimate calculator for builders | litcore.ai',
          description:
            'A site visitor enters the reform details and instantly sees a price range; you get a warm lead with contact. More enquiries, pre-qualified before the call.',
        },
      },
    },
  },
];
