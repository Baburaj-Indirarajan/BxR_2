const UNSPLASH = 'https://images.unsplash.com';

export function photo(id: string, width = 1600): string {
  const key = id.startsWith('photo-') ? id : `photo-${id}`;
  return `${UNSPLASH}/${key}?auto=format&fit=crop&q=80&w=${width}`;
}

export function srcset(id: string, widths = [480, 800, 1200, 1600]): string {
  return widths.map((width) => `${photo(id, width)} ${width}w`).join(', ');
}
