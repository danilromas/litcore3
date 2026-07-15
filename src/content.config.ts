import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Канонический контент страниц — md-пакет v3 (ES/RU/EN) 1:1 из
 * «Дизайн litcore.ai — редакционная + Филамент/content/».
 * Frontmatter (lang/url/title/description/h1) — источник SEO-полей страниц.
 * Структурированная копия для шаблонов — src/data/* (единственный источник текстов разметки).
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    lang: z.enum(['es', 'ru', 'en']),
    url: z.string().nullable().optional(), // proveedores/en.md: url: null (EN-страницы нет — Фаза 2)
    title: z.string(),
    description: z.string().optional(),
    h1: z.string().optional(),
  }),
});

export const collections = { pages };
