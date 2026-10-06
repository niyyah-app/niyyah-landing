/**
 * Vodič: članci o braku prije braka.
 *
 * Landing odgovara na „koja aplikacija", a ljudi pred brak najviše pitaju
 * „ko je mahrem", „je li to halal", „šta pitati prije braka". Za ta pitanja
 * stranica nije imala šta ponuditi tražilici; vodič je za njih.
 *
 * Članak živi u `app/guide/<jezik>/<slug>.md` (samo tekst, vidi
 * utils/markdown.ts), a ovdje su njegovi podaci. Isti `key` povezuje
 * prijevode istog članka: od njega idu hreflang veze i prebacivanje jezika.
 * Prijevod se ne pravi doslovno — svaki jezik ima svoje riječi kojima ljudi
 * traže, pa naslov i slug idu za njima.
 *
 * Pravila za tekst su ista kao za landing (CLAUDE.md §4 i §7): bez
 * uzvičnika, nikakva tvrdnja o aplikaciji koja tamo nije provjerena, bez
 * fetvi. Vjerski članak navodi izvore i upućuje na imama.
 */

export const guideLocales = ['bs', 'en', 'de', 'tr'] as const
export type GuideLocale = (typeof guideLocales)[number]

export function isGuideLocale(code: string): code is GuideLocale {
  return (guideLocales as readonly string[]).includes(code)
}

export interface GuideArticle {
  /** Isti za sve prijevode jednog članka. */
  key: string
  locale: GuideLocale
  slug: string
  title: string
  /** Meta opis i podnaslov, do ~160 znakova. */
  description: string
  /** ISO datum. */
  published: string
  updated: string
}

export const articles: GuideArticle[] = [
  // ── mahrem ───────────────────────────────────────────────
  {
    key: 'mahrem',
    locale: 'bs',
    slug: 'ko-je-mahrem',
    title: 'Ko je mahrem i koja mu je uloga kad se traži bračni drug',
    description:
      'Ko je mahrem ženi, po čemu se razlikuje od velija i kako porodica može biti uz nju dok upoznaje budućeg supružnika, uživo i preko aplikacije.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'mahrem',
    locale: 'en',
    slug: 'who-is-a-mahram',
    title: 'Who is a mahram, and what is his role when looking for a spouse',
    description:
      'Who counts as a mahram for a woman, how a mahram differs from a wali, and how family can stay involved while she gets to know a potential spouse.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'mahrem',
    locale: 'de',
    slug: 'wer-ist-ein-mahram',
    title: 'Wer ist ein Mahram und welche Rolle hat er bei der Ehepartnersuche',
    description:
      'Wer für eine Frau Mahram ist, wie er sich vom Wali unterscheidet und wie die Familie dabei sein kann, wenn sie einen möglichen Ehepartner kennenlernt.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'mahrem',
    locale: 'tr',
    slug: 'mahrem-kimdir',
    title: 'Mahrem kimdir, eş ararken rolü nedir',
    description:
      'Bir kadın için kimlerin mahrem olduğu, mahremin veliden farkı ve kadın müstakbel eşini tanırken ailenin nasıl yanında olabileceği.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },

  // ── je li to halal ───────────────────────────────────────
  {
    key: 'halal',
    locale: 'bs',
    slug: 'da-li-je-upoznavanje-preko-aplikacije-halal',
    title: 'Da li je upoznavanje za brak preko aplikacije halal?',
    description:
      'Šta islam traži kad se upoznaje radi braka, gdje aplikacije griješe, i šta mora postojati da bi upoznavanje preko telefona ostalo u granicama.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'halal',
    locale: 'en',
    slug: 'is-a-muslim-marriage-app-halal',
    title: 'Is it halal to look for a spouse through an app?',
    description:
      'What Islam asks of two people getting to know each other for marriage, where apps go wrong, and what has to be in place for it to stay within the limits.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'halal',
    locale: 'de',
    slug: 'ist-eine-heirats-app-halal',
    title: 'Ist die Ehepartnersuche per App halal?',
    description:
      'Was der Islam beim Kennenlernen für die Ehe verlangt, wo Apps danebenliegen und was gegeben sein muss, damit es in den Grenzen bleibt.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'halal',
    locale: 'tr',
    slug: 'evlilik-uygulamasi-helal-mi',
    title: 'Uygulama üzerinden eş aramak helal mi?',
    description:
      'İslam evlilik niyetiyle tanışmada ne ister, uygulamalar nerede yanılır ve tanışmanın sınırlar içinde kalması için neler olmalıdır.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },

  // ── pitanja prije braka ──────────────────────────────────
  {
    key: 'pitanja',
    locale: 'bs',
    slug: 'pitanja-prije-braka',
    title: 'Pitanja prije braka: šta pitati prije nego kažete „da"',
    description:
      'Pitanja o vjeri, djeci, selidbi, novcu i porodici koja vrijedi postaviti prije nikaha, i kako ih postaviti a da razgovor ne postane saslušanje.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'pitanja',
    locale: 'en',
    slug: 'questions-to-ask-before-marriage',
    title: 'Questions to ask before marriage in Islam',
    description:
      'Questions about faith, children, moving, money and family worth asking before the nikah, and how to ask them without turning the talk into an interview.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'pitanja',
    locale: 'de',
    slug: 'fragen-vor-der-heirat',
    title: 'Fragen vor der Heirat im Islam',
    description:
      'Fragen zu Glauben, Kindern, Umzug, Geld und Familie, die man vor der Nikah stellen sollte, und wie man sie stellt, ohne dass ein Verhör daraus wird.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'pitanja',
    locale: 'tr',
    slug: 'evlilik-oncesi-sorulacak-sorular',
    title: 'Evlilik öncesi sorulacak sorular',
    description:
      'Nikâhtan önce inanç, çocuk, taşınma, para ve aile hakkında sorulmaya değer sorular ve bunları sorguya çevirmeden nasıl soracağınız.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },

  // ── samo na bosanskom, zasad ─────────────────────────────
  {
    key: 'nikah',
    locale: 'bs',
    slug: 'nikah-uslovi',
    title: 'Nikah: uslovi, veli, svjedoci i mehr',
    description:
      'Šta je potrebno da bi nikah bio valjan, ko je veli i šta kaže hanefijski mezheb, koliko svjedoka treba, šta je mehr i kojim redom ide vjenčanje u BiH.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'trazenje',
    locale: 'bs',
    slug: 'kako-traziti-bracnog-druga-u-islamu',
    title: 'Kako tražiti bračnog druga u islamu',
    description:
      'Na šta gledati kod budućeg supružnika, šta kažu hadisi o vjeri i ahlaku, kako se klanja istihara i zašto je nijjet prvi korak.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
  {
    key: 'roditelji',
    locale: 'bs',
    slug: 'roditelji-i-trazenje-bracnog-druga',
    title: 'Roditelji: kako pomoći djetetu da nađe bračnog druga',
    description:
      'Za oca, majku i staratelja: kako biti uz kćerku ili sina dok traže bračnog druga, a da odluka ostane njihova.',
    published: '2026-10-06',
    updated: '2026-10-06',
  },
]

export function articlesIn(locale: string) {
  return articles.filter((a) => a.locale === locale)
}

export function findArticle(locale: string, slug: string) {
  return articles.find((a) => a.locale === locale && a.slug === slug)
}

export function translationsOf(key: string) {
  return articles.filter((a) => a.key === key)
}

const bodies = import.meta.glob<string>('./*/*.md', { query: '?raw', import: 'default' })

export async function loadBody(a: GuideArticle) {
  const load = bodies[`./${a.locale}/${a.slug}.md`]
  if (!load) throw new Error(`Nema teksta za ${a.locale}/${a.slug}`)
  return load()
}

/** Tekst oko članaka, za jezike koji imaju vodič. */
export const guideUi: Record<
  GuideLocale,
  {
    name: string
    title: string
    lead: string
    metaDescription: string
    home: string
    updated: string
    minutes: string
    contents: string
    more: string
    note: string
    sectionKicker: string
    sectionTitle: string
    sectionLead: string
    all: string
  }
> = {
  bs: {
    name: 'Vodič',
    title: 'Vodič za brak s namjerom',
    lead: 'Pitanja koja ljudi postavljaju prije nikaha: ko je mahrem, šta je halal, šta pitati prije braka. Odgovori s izvorima, bez fetvi.',
    metaDescription:
      'Vodič za muslimane koji traže bračnog druga: mahrem, veli, nikah, mehr, pitanja prije braka i upoznavanje u granicama. Odgovori s izvorima.',
    home: 'Početna',
    updated: 'Ažurirano',
    minutes: 'min čitanja',
    contents: 'U ovom tekstu',
    more: 'Još iz vodiča',
    note: 'Ne izdajemo fetve. Tekst navodi izvore i ono što je među učenjacima poznato, a za vlastitu situaciju pitaj imama kojem vjeruješ.',
    sectionKicker: 'Vodič',
    sectionTitle: 'Pitanja koja dolaze prije nikaha.',
    sectionLead: 'Za tebe i za porodicu: šta islam kaže, i kako to izgleda kad se upoznaje danas.',
    all: 'Cijeli vodič',
  },
  en: {
    name: 'Guide',
    title: 'A guide to marriage with intention',
    lead: 'The questions people ask before the nikah: who is a mahram, what is halal, what to ask before marriage. Answers with sources, not fatwas.',
    metaDescription:
      'A guide for Muslims looking for a spouse: mahram, wali, nikah, mahr, questions before marriage and getting to know someone within the limits.',
    home: 'Home',
    updated: 'Updated',
    minutes: 'min read',
    contents: 'In this article',
    more: 'More from the guide',
    note: 'We do not issue fatwas. This text cites its sources and what is known among scholars; for your own situation, ask an imam you trust.',
    sectionKicker: 'Guide',
    sectionTitle: 'The questions that come before the nikah.',
    sectionLead: 'For you and your family: what Islam says, and how it looks when people meet today.',
    all: 'The whole guide',
  },
  de: {
    name: 'Ratgeber',
    title: 'Ratgeber: Heiraten mit Absicht',
    lead: 'Die Fragen vor der Nikah: Wer ist ein Mahram, was ist halal, was fragt man vor der Heirat. Antworten mit Quellen, keine Fatwas.',
    metaDescription:
      'Ratgeber für Muslime auf Ehepartnersuche: Mahram, Wali, Nikah, Mahr, Fragen vor der Heirat und Kennenlernen in den Grenzen. Antworten mit Quellen.',
    home: 'Startseite',
    updated: 'Aktualisiert',
    minutes: 'Min. Lesezeit',
    contents: 'In diesem Artikel',
    more: 'Mehr aus dem Ratgeber',
    note: 'Wir erteilen keine Fatwas. Der Text nennt seine Quellen und das, was unter Gelehrten bekannt ist; für deine eigene Situation frag einen Imam, dem du vertraust.',
    sectionKicker: 'Ratgeber',
    sectionTitle: 'Die Fragen, die vor der Nikah kommen.',
    sectionLead: 'Für dich und deine Familie: was der Islam sagt und wie es aussieht, wenn man sich heute kennenlernt.',
    all: 'Zum Ratgeber',
  },
  tr: {
    name: 'Rehber',
    title: 'Niyetle evlilik rehberi',
    lead: 'Nikâhtan önce sorulan sorular: mahrem kimdir, ne helaldir, evlenmeden önce ne sorulur. Kaynaklı cevaplar, fetva değil.',
    metaDescription:
      'Eş arayan Müslümanlar için rehber: mahrem, veli, nikâh, mehir, evlilik öncesi sorular ve sınırlar içinde tanışma. Kaynaklı cevaplar.',
    home: 'Ana sayfa',
    updated: 'Güncellendi',
    minutes: 'dk okuma',
    contents: 'Bu yazıda',
    more: 'Rehberden daha fazlası',
    note: 'Fetva vermiyoruz. Bu yazı kaynaklarını ve âlimler arasında bilinenleri aktarır; kendi durumun için güvendiğin bir imama danış.',
    sectionKicker: 'Rehber',
    sectionTitle: 'Nikâhtan önce gelen sorular.',
    sectionLead: 'Senin ve ailen için: İslam ne diyor ve bugün tanışırken bu nasıl görünüyor.',
    all: 'Tüm rehber',
  },
}
