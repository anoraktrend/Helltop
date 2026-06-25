const ALLOWED = new Set([
  'a', 'abbr', 'address', 'article', 'b', 'bdi', 'bdo', 'blockquote', 'br',
  'caption', 'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'details', 'dfn',
  'div', 'dl', 'dt', 'em', 'figcaption', 'figure', 'footer', 'h1', 'h2', 'h3',
  'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'i', 'img', 'ins', 'kbd', 'li',
  'main', 'mark', 'nav', 'ol', 'p', 'pre', 'q', 's', 'section', 'small',
  'source', 'span', 'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td',
  'tfoot', 'th', 'thead', 'time', 'tr', 'u', 'ul', 'var',
]);

const TAG = /<\/?([a-zA-Z]\w*)((?:\s+[^>]*?)?)\s*\/?>/g;

function parseAttrs(s: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const re = /(\w+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+)))?/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s)) !== null) {
    const key = m[1];
    if (!key) continue;
    attrs[key] = m[2] ?? m[3] ?? m[4] ?? '';
  }
  return attrs;
}

function fmtAttrs(attrs: Record<string, string>): string {
  const entries = Object.entries(attrs);
  if (!entries.length) return '';
  return ' ' + entries.map(([k, v]) => `${k}="${v.replace(/"/g, '&quot;')}"`).join(' ');
}

interface TransformMap {
  [tag: string]: (attribs: Record<string, string>) => Record<string, string>;
}

export function sanitizeHtml(html: string, transforms?: TransformMap): string {
  return html.replace(TAG, (match, tag, attrs) => {
    const lower = tag.toLowerCase();
    if (!ALLOWED.has(lower)) return '';
    if (!transforms?.[lower]) return match;
    const out = transforms[lower](parseAttrs(attrs));
    return `<${lower}${fmtAttrs(out)}>`;
  });
}
