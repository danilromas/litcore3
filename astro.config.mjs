// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// TODO: домен litcore.ai — допущение (VERIFICATION §5), подтвердить перед продом.
// Меняется в одном месте: здесь и в src/config/site.ts (SITE_URL).
export default defineConfig({
  site: 'https://litcore.ai',
  // CSP script-src 'self' (аудит S-2): не инлайнить скрипты — всегда внешние файлы.
  vite: { build: { assetsInlineLimit: 0 } },
  trailingSlash: 'always',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ru', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', ru: 'ru', en: 'en' },
      },
      // Служебные страницы не индексируем
      filter: (page) =>
        !page.includes('/gracias/') && !page.includes('/spasibo/') && !page.includes('/thanks/'),
    }),
  ],
});
