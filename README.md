# litcore.ai — сайт на Astro (v3 «Редакционная + Филамент»)

Production-сборка по зафиксированному дизайн-пакету
`сайт ЕС/Дизайн litcore.ai — редакционная + Филамент/` (токены, кит, макеты, контент, filament-spec).
Дизайн перенесён 1:1 — не переизобретать: source of truth — `src/styles/tokens.css` + `src/styles/kit.css`.

## Запуск локально

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # прод-сборка в dist/
npm run preview    # локальный просмотр dist/
```

Node 20+ (собрано на Node 22, Astro 6.4; `npm audit` — 0 уязвимостей на 10.07.2026).

## Что внутри

| Путь | Что это |
|---|---|
| `src/styles/tokens.css` | Дизайн-токены v3 (`--lc-*`) + тёмный под-набор `.lc-dark`. НЕ менять без решения Лизы |
| `src/styles/kit.css` | Кит компонентов (глобальный слой) |
| `src/styles/filament.css` | Стили граф-секции «Филамент» |
| `src/scripts/kit.js` | Параллакс + reveal (reduced-motion/мобайл гасятся автоматически) |
| `src/components/` | Astro-компоненты кита: Header, Footer, Core, Crumbs, PriceCard, Steps, Field, Faq, CtaBand, DarkSection |
| `src/components/Filament.astro` | Граф-секция: React-остров `filament/FilamentGraph.tsx` (client:visible) + статический аккордеон (<768px, no-JS) + светлый sector-grid (SEO) |
| `src/data/*.ts` | Все тексты страниц (ES/RU/EN) — копи НЕ хардкодится в разметку |
| `src/content/pages/` | Канонический md-пакет контента (frontmatter → SEO-поля) |
| `src/lib/routes.ts` | Карта маршрутов и hreflang-альтернатив (из page_inventory v2) |
| `src/lib/schema.ts` | JSON-LD хелперы (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList) |
| `src/config/site.ts` | **Все заглушки/TODO в одном месте** (см. ниже) |

Страницы: ES — главная, `servicios/documentos-ia`, `soluciones/clinicas`, `para-proveedores`,
`precios`, `contacto` (+ 6 правовых: aviso-legal, privacidad, cookies, terminos, accesibilidad,
uso-de-ia; + gracias); RU — главная, `uslugi/dokumenty-ii`, `resheniya/medicina`,
`dlya-postavshchikov`, `tseny`, `kontakty` (+ 4 правовых: pravovaya-informaciya,
politika-konfidencialnosti, cookie, usloviya; + spasibo); EN — заглушки Фазы 2 (`/en/`,
`pricing`, `contact`, `services/ai-documents`) + 4 правовых (legal-notice, privacy, cookies,
terms) + thanks. Корень `/` — редирект по языку (x-default = ES). Всего 34 страницы.

⚖️ Правовые страницы заполнены по аудит-пакету «Аудит litcore.ai (юр-соответствие +
безопасность)» реальными реквизитами владельца и проиндексированы. Это подготовленные
черновики по официальным источникам (BOE/EUR-Lex/AEPD) — **не юридическая консультация**;
перед запуском обязательна вычитка испанским юристом/gestoría (см. TODO ниже).
Юридически приоритетна испанская версия (в RU/EN это указано на страницах).

## Деплой на Cloudflare Pages (из GitHub)

Сайт полностью статический — адаптер не нужен.

1. Запушить репозиторий на GitHub.
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git** → выбрать репозиторий.
3. Настройки сборки: Framework preset **Astro**; Build command `npm run build`; Output directory `dist`.
4. Deploy. Превью-деплой создаётся на каждый PR автоматически.
5. Домен: Pages → Custom domains → добавить `litcore.ai` (см. TODO про домен ниже).

Файл `public/_headers` настраивает security-заголовки (CSP, HSTS, X-Frame-Options, COOP и др.
по аудиту). Постбилд `scripts/postbuild-csp.mjs` добавляет в CSP sha256-хэши инлайн-бутстрапа
островов Astro — поэтому деплоить нужно результат `npm run build` (Pages так и делает).

## Форма контактов (`/api/contact`, Cloudflare Pages Function)

`functions/api/contact.js`: серверная валидация + honeypot + Cloudflare Turnstile + доставка.
Обработка — в инфраструктуре Cloudflare (в Privacidad раскрыто: EU-US DPF + SCC).
Настройка в Cloudflare Pages → Settings:

| Переменная / binding | Что это |
|---|---|
| `PUBLIC_TURNSTILE_SITE_KEY` (build env) | site key виджета Turnstile — без него виджет не рендерится |
| `TURNSTILE_SECRET_KEY` (secret) | секрет Turnstile — без него серверная проверка пропускается |
| `CONTACT_TO` | адрес доставки (по умолчанию `hola@litcore.ai`) |
| `SEND_EMAIL` (binding) | Email Workers binding (Cloudflare Email Routing) — приоритетный канал |
| `FORM_FORWARD_ENDPOINT` | (опция) URL EU-провайдера формы — перед включением подписать DPA (art. 28) |

Пока доставка не настроена, функция честно отвечает 503 (заявка не теряется втихую — пользователь видит ошибку).

## TODO перед продом (человеческие — код готов)

1. **Ящик `hola@litcore.ai`** — создать через Cloudflare Email Routing (mailto-CTA уже стоят).
2. **Turnstile** — создать виджет в панели Cloudflare, задать `PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`.
3. **Доставка формы** — включить `SEND_EMAIL` binding (или выбрать EU-провайдера + подписать **DPA, art. 28 RGPD**); DPA с Cloudflare — принять в панели; завести **RAT** (реестр обработки, внутренний документ).
4. **Юридическая вычитка** — все правовые тексты (особенно передачи данных и Términos) у испанского юриста/gestoría; проверить актуальность сертификации Cloudflare в DPF (dataprivacyframework.gov).
5. **Cloudflare-панель после подключения домена** — DNSSEC ON, Always Use HTTPS, Min TLS 1.2, Bot Fight Mode (H6/блок 7 плана аудита).
6. **Вычитка ES носителем** — весь испанский корпус.
7. **og:image** — 1200×630 PNG (сейчас нет; TODO-комментарий в Layout).
8. **EN-фаза 2** — полноценные EN-страницы по blueprint (сейчас оформленные заглушки); calendar-CTA на `/en/contact/` временно ведёт на email.
9. **Аналитика** — подключать только при согласии (точка подключения — комментарий в `CookieConsent.astro`); ДО подключения добавить панель категорий в баннер (C6) и строки в таблицы cookies.
10. **A11y-аудит на живом сайте** (axe/Lighthouse + клавиатура/скринридер) → обновить «Estado de conformidad» в `/es/accesibilidad/`.
11. **Живой чат-бот (когда появится)** — дисклеймер «Вы общаетесь с ИИ» в самом UI бота (`AI_BADGE` в `src/i18n/ui.ts`; AI Act art. 50, с 02.08.2026).

## Правила дальнейшей разработки

- Новые страницы — только классами кита + минимум страничного CSS с префиксом `.page-*` в `<style is:global>`.
- Никаких новых цветов/шрифтов; чистый акцент `#E23A2E` — только крупно (мелкий текст/CTA — `--lc-accent-deep`).
- Один `h1` на страницу, одно слово в `.accent-word`; комплаенс-плашка в футере не убирается.
- Тексты — через выгоду (деньги/время/удобство/узкое место), без выдуманных цифр; боты помечаются «Вы общаетесь с ИИ»; гранты — «проверим софинансирование»; нативная iOS/Android не обещается (PWA/мультиплатформа).
- Маршруты и hreflang — только через `src/lib/routes.ts`.
