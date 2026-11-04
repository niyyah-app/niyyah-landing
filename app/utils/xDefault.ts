/**
 * x-default na englesku verziju stranice (SEO, 4.11.2026).
 *
 * i18n ga postavlja na zadani jezik (bs), pa je Google posjetiocu čiji jezik
 * nemamo nudio bosanski. Za međunarodnu publiku je engleski bolji odgovor.
 * Kad engleske verzije nema (članak vodiča samo na bosanskom), ostaje kako je.
 */
type HeadLink = { hreflang?: string; href?: string; [key: string]: unknown }

export function withEnglishXDefault<T extends HeadLink>(links: T[]): T[] {
  const en = links.find((l) => l.hreflang === 'en')?.href
  if (!en) return links
  return links.map((l) => (l.hreflang === 'x-default' ? { ...l, href: en } : l))
}
