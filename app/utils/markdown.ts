/**
 * Mali markdown za članke vodiča — samo ono što članci koriste:
 * `## ` i `### ` naslovi, pasusi, liste (`- ` i `1. `), citati (`> `, a red
 * koji počinje s `— ` je izvor citata), i u tekstu **podebljano**, *kurziv*
 * i [link](/adresa).
 *
 * Vlastiti, a ne biblioteka: ovo je cijela potreba, a parser ide i u
 * pregledač kad se članak otvori bez ponovnog učitavanja stranice.
 */

export type Inline =
  | { t: 'text'; v: string }
  | { t: 'b'; v: string }
  | { t: 'i'; v: string }
  | { t: 'a'; v: string; href: string }

export type Block =
  | { t: 'h2' | 'h3'; id: string; v: Inline[] }
  | { t: 'p'; v: Inline[] }
  | { t: 'ul' | 'ol'; items: Inline[][] }
  | { t: 'quote'; lines: Inline[][]; cite?: Inline[] }

const INLINE = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)\s]+)\)/g

export function parseInline(s: string): Inline[] {
  const out: Inline[] = []
  let last = 0
  for (const m of s.matchAll(INLINE)) {
    if (m.index > last) out.push({ t: 'text', v: s.slice(last, m.index) })
    if (m[1] != null) out.push({ t: 'b', v: m[1] })
    else if (m[2] != null) out.push({ t: 'i', v: m[2] })
    else out.push({ t: 'a', v: m[3]!, href: m[4]! })
    last = m.index + m[0].length
  }
  if (last < s.length) out.push({ t: 'text', v: s.slice(last) })
  return out
}

export function plain(v: Inline[]): string {
  return v.map((x) => x.v).join('')
}

/** Sidro za naslov: „Ko je mahrem?" → „ko-je-mahrem". Radi i za ć, ş, ü… */
export function slugify(s: string): string {
  return s
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'dj')
    .replace(/ı/g, 'i')
    .replace(/ß/g, 'ss')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function parseMarkdown(src: string): Block[] {
  const blocks: Block[] = []
  const lines = src.replace(/\r/g, '').split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]!.trimEnd()

    if (!line.trim()) {
      i++
      continue
    }

    const h = /^(#{2,3}) (.+)$/.exec(line)
    if (h) {
      const v = parseInline(h[2]!)
      blocks.push({ t: h[1]!.length === 2 ? 'h2' : 'h3', id: slugify(plain(v)), v })
      i++
      continue
    }

    if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line)
      const items: Inline[][] = []
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i]!)) {
        items.push(parseInline(lines[i]!.replace(/^(- |\d+\. )/, '').trim()))
        i++
      }
      blocks.push({ t: ordered ? 'ol' : 'ul', items })
      continue
    }

    if (line.startsWith('>')) {
      const quoted: string[] = []
      while (i < lines.length && lines[i]!.startsWith('>')) {
        quoted.push(lines[i]!.replace(/^>\s?/, '').trim())
        i++
      }
      const citeLine = quoted.length > 1 && quoted.at(-1)!.startsWith('— ') ? quoted.pop()! : undefined
      blocks.push({
        t: 'quote',
        lines: quoted.filter(Boolean).map(parseInline),
        cite: citeLine ? parseInline(citeLine.slice(2)) : undefined,
      })
      continue
    }

    // Pasus: redovi do praznog reda ili do početka drugog bloka.
    const para: string[] = []
    while (i < lines.length && lines[i]!.trim() && !/^(#{2,3} |- |\d+\. |>)/.test(lines[i]!)) {
      para.push(lines[i]!.trim())
      i++
    }
    blocks.push({ t: 'p', v: parseInline(para.join(' ')) })
  }

  return blocks
}
