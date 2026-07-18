import { chromium } from 'playwright-core';
import { createServer } from 'http';
import { readFileSync, existsSync, statSync } from 'fs';
import { join, extname } from 'path';

const ROOT = './dist';
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let f = join(ROOT, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) f = join(ROOT, '404.html');
  res.setHeader('content-type', types[extname(f)] || 'application/octet-stream');
  res.end(readFileSync(f));
});
await new Promise((r) => server.listen(4321, r));

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const pages = [
  ['home', '/'],
  ['letters', '/letters/'],
  ['letter-001', '/letters/001-starting-with-nothing/'],
  ['about', '/about/'],
  ['now', '/now/'],
  ['404', '/nope']
];
for (const [name, path] of pages) {
  const pg = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await pg.emulateMedia({ reducedMotion: 'reduce' });
  await pg.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await pg.evaluate(async () => { for (let y = 0; y <= document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); });
  await pg.waitForTimeout(900);
  await pg.screenshot({ path: `shots/${name}-full.png`, fullPage: true });
  await pg.close();
}
// mobile home + letter
for (const [name, path] of [['home-mobile', '/'], ['letter-mobile', '/letters/001-starting-with-nothing/']]) {
  const pg = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await pg.emulateMedia({ reducedMotion: 'reduce' });
  await pg.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await pg.evaluate(async () => { for (let y = 0; y <= document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); });
  await pg.waitForTimeout(900);
  await pg.screenshot({ path: `shots/${name}-full.png`, fullPage: true });
  await pg.close();
}
await browser.close();
server.close();
console.log('done');
