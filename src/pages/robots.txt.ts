import type { APIRoute } from 'astro';
import { site } from '../lib/site';

export const GET: APIRoute = ({ site: astroSite }) => {
  const base = astroSite?.href ?? site.url;
  const body = `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', base).href}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
