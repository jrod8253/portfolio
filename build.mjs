import { mkdir, copyFile, cp, access } from 'node:fs/promises';

// Explicit allowlist keeps review notes and preview images out of production.
await mkdir(new URL('./dist/', import.meta.url), { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js']) {
  await copyFile(new URL(file, import.meta.url), new URL(`dist/${file}`, import.meta.url));
}
console.log('Static site ready in dist/');

// Preserve existing project URLs and the assets their pages reference.
for (const file of ['pages', 'img', 'assests', 'js', 'style.css', 'navbar.css']) {
  const source = new URL(file, import.meta.url);
  try { await access(source); } catch { continue; }
  await cp(source, new URL(`dist/${file}`, import.meta.url), { recursive: true });
}
