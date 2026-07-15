/**
 * JSON-LD хелперы. Домен берётся из SITE_URL (подтверждён).
 * Использование на странице:
 *   <SchemaOrg slot="head" data={[organization(), breadcrumb([...])]} />
 */
import { SITE_URL, ORG, TELEGRAM_URL, OWNER, WHATSAPP_URL } from '../config/site';

const abs = (path: string) => new URL(path, SITE_URL).href;

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG.name,
    url: SITE_URL,
    logo: abs('/litcore-core-logo.svg'),
    email: OWNER.email,
    telephone: OWNER.phone,
    sameAs: [TELEGRAM_URL, WHATSAPP_URL].filter(Boolean),
    knowsLanguage: ORG.languages,
  };
}

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ORG.name,
    url: SITE_URL,
    image: abs('/litcore-core-logo.svg'),
    email: OWNER.email,
    telephone: OWNER.phone,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Asturias',
      addressCountry: 'ES',
    },
    areaServed: 'ES',
    knowsLanguage: ORG.languages,
  };
}

export function service(opts: { name: string; description: string; path: string; lang: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    inLanguage: opts.lang,
    provider: { '@type': 'Organization', name: ORG.name, url: SITE_URL },
    areaServed: 'ES',
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: i.name,
      item: abs(i.path),
    })),
  };
}
