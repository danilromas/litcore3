/**
 * JSON-LD для маркетплейса направления «Строительство» (лендинг + под-страницы услуг).
 * Использование на странице: <SchemaOrg slot="head" data={sectorLandingSchema(lang)} />.
 */
import { SITE_URL, type Lang } from '../config/site';
import { service, faqPage, breadcrumb } from './schema';
import { CONSTRUCCION_PAGE, SECTOR_PATHS } from '../data/sectores/construccion-page';
import { ALL_SERVICES, servicePath, serviceAlternates } from '../data/sectores/construccion';
import type { SectorService } from '../data/sectores/types';

/** Schema лендинга: BreadcrumbList + Service + ItemList (14 услуг) + FAQPage. */
export function sectorLandingSchema(lang: Lang): object[] {
  const d = CONSTRUCCION_PAGE[lang];
  const path = SECTOR_PATHS[lang];

  const serviceSchema = {
    ...service({
      name: d.schemaService.name,
      description: d.schemaService.description,
      path,
      lang,
    }),
    serviceType: d.schemaService.serviceType,
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: d.schemaService.name,
    numberOfItems: ALL_SERVICES.length,
    itemListElement: ALL_SERVICES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.copy[lang].title,
      url: new URL(servicePath(lang, s), SITE_URL).href,
    })),
  };

  return [breadcrumb(d.crumbsSchema), serviceSchema, itemList, faqPage(d.faq.items)];
}

/** Schema под-страницы услуги: BreadcrumbList + Service. */
export function sectorServiceSchema(lang: Lang, svc: SectorService): object[] {
  const d = CONSTRUCCION_PAGE[lang];
  const c = svc.copy[lang];
  const path = serviceAlternates(svc)[lang];

  const crumbs = [
    ...d.crumbsSchema,
    { name: c.title, path },
  ];

  return [
    breadcrumb(crumbs),
    service({ name: c.title, description: c.offer, path, lang }),
  ];
}
