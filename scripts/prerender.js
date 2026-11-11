// Schreibt nach dem Build jede Seite als fertiges HTML nach dist/,
// damit Google und KI-Crawler den Text ohne JavaScript lesen können.
// Erzeugt außerdem dist/sitemap.xml.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, PAGES, SITE_URL } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await readFile(path.join(dist, 'index.html'), 'utf8')

const escape = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

for (const [route, meta] of Object.entries(PAGES)) {
  const url = SITE_URL + (route === '/' ? '/' : route)
  const title = escape(meta.title)
  const description = escape(meta.description)

  const head = [
    `<link rel="canonical" href="${url}" />`,
    meta.noindex ? '<meta name="robots" content="noindex" />' : '',
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
  ].filter(Boolean).join('\n    ')

  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace('<!--seo-head-->', head)
    .replace('<!--app-html-->', render(route))

  // /werdegang -> dist/werdegang.html (Vercel liefert sie dank cleanUrls unter /werdegang aus)
  const file = path.join(dist, route === '/' ? 'index.html' : `${route.slice(1)}.html`)
  await writeFile(file, html)
  console.log(`vorgerendert: ${route}`)
}

const today = new Date().toISOString().slice(0, 10)
const urls = Object.entries(PAGES)
  .filter(([, meta]) => meta.sitemap)
  .map(([route]) => `  <url>\n    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n')
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log('sitemap.xml geschrieben')

await rm(ssrDir, { recursive: true, force: true })
