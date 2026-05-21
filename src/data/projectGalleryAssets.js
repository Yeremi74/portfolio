/**
 * Todas las imágenes bajo src/assets/projects/<carpeta>/ se incluyen en el bundle
 * y se agrupan por nombre de carpeta (coincide con project.imageFolder en utils.jsx).
 */

const modules = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
});

function slugFromGlobKey(filePath) {
  const normalized = filePath.replace(/\\/g, '/').split('/');
  const i = normalized.indexOf('projects');
  if (i === -1 || !normalized[i + 1]) return null;
  return normalized[i + 1];
}

function fileBasename(filePath) {
  const normalized = filePath.replace(/\\/g, '/');
  const parts = normalized.split('/');
  return parts[parts.length - 1] || '';
}

function buildGalleryBySlug() {
  /** @type {Record<string, { basename: string, url: string }[]>} */
  const buckets = {};

  for (const [path, url] of Object.entries(modules)) {
    const slug = slugFromGlobKey(path);
    if (!slug || typeof url !== 'string') continue;
    if (!buckets[slug]) buckets[slug] = [];
    buckets[slug].push({ basename: fileBasename(path), url });
  }

  /** @type {Record<string, string[]>} */
  const result = {};

  for (const slug of Object.keys(buckets)) {
    buckets[slug].sort((a, b) =>
      a.basename.localeCompare(b.basename, undefined, { numeric: true, sensitivity: 'base' }),
    );
    result[slug] = buckets[slug].map((e) => e.url);
  }

  return result;
}

const galleryBySlug = buildGalleryBySlug();

/**
 * @param {string} slug - carpeta en src/assets/projects/
 * @returns {string[]} URLs ya resueltas por Vite, ordenadas por nombre de archivo
 */
export function getGalleryImages(slug) {
  return galleryBySlug[slug] ?? [];
}
