/**
 * Направление «Строительство и ремонт» — сборка каталога услуг (14 = 9 A + 5 B)
 * и хелперы маршрутов. Порядок сетки A: приоритет №1, №7, №4 первыми
 * (согласование каталога, Промт A §5), затем по номерам. Блок B — №10 первым.
 */
import type { Lang } from '../../config/site';
import type { SectorService } from './types';
import { CONSTRUCCION_SERVICES_1 } from './construccion-services-1';
import { CONSTRUCCION_SERVICES_2 } from './construccion-services-2';
import { TRANSVERSAL_SERVICES } from './transversales';
import { SECTOR_PATHS } from './construccion-page';

const BLOCK_A: SectorService[] = [...CONSTRUCCION_SERVICES_1, ...CONSTRUCCION_SERVICES_2];

/** Приоритет карточек в сетке A (первые позиции). */
const PRIORITY_A = ['presupuestos', 'bot-solicitudes', 'fotocontrol'];

function byPriority(services: SectorService[], priority: string[]): SectorService[] {
  const head = priority
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is SectorService => Boolean(s));
  const tail = services.filter((s) => !priority.includes(s.id)).sort((a, b) => a.num - b.num);
  return [...head, ...tail];
}

/** Сетка блока A (9 услуг под стройку), в приоритетном порядке. */
export const GRID_A: SectorService[] = byPriority(BLOCK_A, PRIORITY_A);

/** Сетка блока B (5 сквозных услуг), №10 «Настроим Claude/Cowork» первой. */
export const GRID_B: SectorService[] = [...TRANSVERSAL_SERVICES].sort((a, b) => a.num - b.num);

/** Все 14 услуг направления (для getStaticPaths и сводной таблицы). */
export const ALL_SERVICES: SectorService[] = [...BLOCK_A, ...TRANSVERSAL_SERVICES].sort(
  (a, b) => a.num - b.num
);

/** Путь под-страницы услуги на языке. */
export function servicePath(lang: Lang, svc: SectorService): string {
  return `${SECTOR_PATHS[lang]}${svc.slug[lang]}/`;
}

/** hreflang-альтернативы под-страницы услуги. */
export function serviceAlternates(svc: SectorService): Record<Lang, string> {
  return {
    es: servicePath('es', svc),
    ru: servicePath('ru', svc),
    en: servicePath('en', svc),
  };
}

export function serviceById(id: string): SectorService | undefined {
  return ALL_SERVICES.find((s) => s.id === id);
}
