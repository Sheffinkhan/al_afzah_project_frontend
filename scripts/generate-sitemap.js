// Regenerates public/sitemap.xml before every build (wired as "prebuild" in package.json).
// Fetches live project list so /projects/:id entries never go stale.
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.al-afzahgroup.com';
const API_URL = 'https://api.al-afzahgroup.com/api/projects';
const OUT_FILE = path.join(__dirname, '..', 'public', 'sitemap.xml');

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/clients', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'yearly', priority: '0.8' },
];

const urlEntry = ({ loc, changefreq, priority, lastmod }) => `  <url>
    <loc>${loc}</loc>
${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ''}    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

async function main() {
  const entries = STATIC_ROUTES.map((r) =>
    urlEntry({ loc: `${SITE_URL}${r.path}`, changefreq: r.changefreq, priority: r.priority })
  );

  try {
    const res = await fetch(API_URL, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`API responded ${res.status}`);
    const projects = await res.json();

    for (const project of projects) {
      if (!project?.id) continue;
      entries.push(
        urlEntry({
          loc: `${SITE_URL}/projects/${project.id}`,
          changefreq: 'monthly',
          priority: '0.7',
          lastmod: project.updatedAt ? project.updatedAt.slice(0, 10) : undefined,
        })
      );
    }
    console.log(`sitemap: included ${projects.length} project page(s)`);
  } catch (err) {
    console.warn(`sitemap: could not fetch projects (${err.message}), writing static routes only`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

  fs.writeFileSync(OUT_FILE, xml);
  console.log(`sitemap: wrote ${entries.length} url(s) to ${OUT_FILE}`);
}

main();
