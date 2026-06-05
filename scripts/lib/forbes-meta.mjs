// Resolve a clean card excerpt from a Forbes article's <meta name="description">.
// Used by scripts/ingest-forbes.mjs. The pure helpers are offline-testable; the
// single network function (fetchForbesDescription) never throws and returns null
// on any failure, so ingest can always fall back to makeExcerpt.

const NAMED_ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
};

// Decode the 5 XML predefined entities + &nbsp; + numeric (decimal &#NN; and
// hex &#xHH;). Unknown named entities pass through unchanged.
export function decodeEntities(s) {
  if (!s) return '';
  return String(s).replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z][a-zA-Z0-9]*);/g, (m, ent) => {
    if (ent[0] === '#') {
      const code = (ent[1] === 'x' || ent[1] === 'X')
        ? parseInt(ent.slice(2), 16)
        : parseInt(ent.slice(1), 10);
      if (Number.isNaN(code)) return m;
      try { return String.fromCodePoint(code); } catch { return m; }
    }
    const lower = ent.toLowerCase();
    return Object.prototype.hasOwnProperty.call(NAMED_ENTITIES, lower)
      ? NAMED_ENTITIES[lower]
      : m;
  });
}

// Parse the attributes of a single <meta ...> tag into a lowercased-key map.
// Order- and quote-agnostic; tolerates valueless attrs like data-next-head="".
function parseAttrs(tagBody) {
  const attrs = {};
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
  let m;
  while ((m = re.exec(tagBody)) !== null) {
    attrs[m[1].toLowerCase()] = m[2] !== undefined ? m[2] : m[3];
  }
  return attrs;
}

// Return the raw content of the FIRST <meta name="description">, else the first
// <meta property="og:description">, else null. Ignores noise attrs such as
// itemProp / data-next-head and self-closing "/>" — i.e. robust to Forbes'
// Next.js head markup, including duplicate description tags (first wins).
export function extractMetaDescription(html) {
  if (!html) return null;
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  let ogFallback = null;
  for (const tag of tags) {
    const a = parseAttrs(tag);
    if (a.name && a.name.toLowerCase() === 'description' && a.content != null) {
      return a.content;
    }
    if (ogFallback === null && a.property && a.property.toLowerCase() === 'og:description' && a.content != null) {
      ogFallback = a.content;
    }
  }
  return ogFallback;
}

// Decode entities, strip any leaked "[Image: ...]" alt-text (with optional
// surrounding markdown asterisks), normalize em-dashes to commas (sitewide
// no-em-dash rule), collapse whitespace, trim. Ordinary [brackets] are kept.
export function cleanDescription(s) {
  if (!s) return '';
  return decodeEntities(String(s))
    .replace(/\*?\s*\[Image:[^\]]*\]\s*\*?/gi, ' ')
    .replace(/ — /g, ', ')
    .replace(/—/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
}

// A description worth caching/showing: non-empty and not a stub. Guards against
// freezing a generic interstitial or an empty meta tag into the cache.
export function isValidDescription(s) {
  return typeof s === 'string' && s.trim().length >= 40;
}

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// Fetch a Forbes URL and return its cleaned <meta name="description">, or null
// on any non-2xx (incl. 429) / missing meta / network error / timeout /
// too-short result. Never throws.
export async function fetchForbesDescription(url, { timeoutMs = 15000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml' },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const desc = cleanDescription(extractMetaDescription(html));
    return isValidDescription(desc) ? desc : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
