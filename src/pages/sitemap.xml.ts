import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';

const staticPaths = ['/', '/projects', '/services', '/services/architecture', '/services/interior-design', '/about', '/contact'];

export const GET: APIRoute = async ({ site: astroSite }) => {
  const base = astroSite?.href ?? site.url;
  const projects = await getCollection('projects');
  const urls = [
    ...staticPaths,
    ...projects.map((project) => `/projects/${project.id}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => {
    const loc = new URL(path === '/' ? '' : path.replace(/^\//, ''), base.endsWith('/') ? base : `${base}/`).href;
    return `  <url><loc>${loc}</loc></url>`;
  })
  .join('\n')}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
