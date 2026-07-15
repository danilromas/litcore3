/**
 * Postbuild: CSP-хэши для неизбежных инлайн-скриптов (S-2 аудита).
 *
 * Astro инлайнит бутстрап островов (<astro-island>) прямо в HTML — внешним файлом
 * его не сделать. Вместо 'unsafe-inline' считаем sha256-хэши всех исполняемых
 * инлайн-скриптов в dist/ и добавляем их в script-src CSP в dist/_headers.
 * JSON-LD (type="application/ld+json") — data-блок, CSP его не ограничивает.
 *
 * Запуск: npm run build (astro build && node scripts/postbuild-csp.mjs).
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { glob } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const SCRIPT_RE = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g;

const hashes = new Set();
for await (const file of glob(path.join(DIST, '**/*.html'))) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(SCRIPT_RE)) {
    const [, attrs, body] = m;
    if (!body.trim() || attrs.includes('application/ld+json')) continue;
    hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
  }
}

const headersPath = path.join(DIST, '_headers');
let headers = readFileSync(headersPath, 'utf8');
const list = [...hashes].sort().join(' ');
if (list) {
  // Только строка заголовка CSP (не комментарии).
  headers = headers.replace(
    /^(\s*Content-Security-Policy:.*?script-src 'self')/m,
    `$1 ${list}`,
  );
  writeFileSync(headersPath, headers);
}
console.log(`[postbuild-csp] inline script hashes added to CSP: ${hashes.size}`);
