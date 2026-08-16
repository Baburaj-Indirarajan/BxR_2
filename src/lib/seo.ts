export function pageTitle(page: string, siteName: string, tagline?: string): string {
  const trimmed = page.trim();
  if (!trimmed) {
    return tagline ? `${siteName} | ${tagline}` : siteName;
  }
  return `${trimmed} | ${siteName}`;
}

export function absoluteUrl(path: string, base: string): string {
  const origin = base.endsWith('/') ? base : `${base}/`;
  const rel = path.startsWith('/') ? path.slice(1) : path;
  return new URL(rel, origin).toString();
}

export function clipMeta(text: string, max = 160): string {
  const trimmed = text.trim().replace(/\s+/g, ' ');
  if (trimmed.length <= max) return trimmed;
  const sliced = trimmed.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  const cut = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced;
  return `${cut.trimEnd()}…`;
}
