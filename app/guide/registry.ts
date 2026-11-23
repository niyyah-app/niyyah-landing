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

export const guideLocales = ['bs', 'en', 'de', 'tr', 'id'] as const
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
  /**
   * Članak o tome kako aplikacija radi, ne o vjeri: bez napomene o fetvama
   * na dnu, jer tu nema vjerske tvrdnje na koju bi se odnosila.
   */
  aboutApp?: true
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
    title: 'Evlilik öncesi ve görüşmede sorulacak sorular',
    description:
      'Evlilik görüşmesinde ve kız istemede sorulacak sorular; din, çocuk, taşınma, para ve aile hakkında evlilik yolunda konuşulması gerekenler.',
    published: '2026-10-06',
    updated: '2026-11-16',
  },

  // ── nikah, traženje, roditelji, mehr ─────────────────────
  {
    key: 'nikah',
    locale: 'bs',
    slug: 'nikah-uslovi',
    title: 'Uslovi za brak u islamu: nikah, veli, svjedoci i mehr',
    description:
      'Uslovi za brak u islamu: šta je potrebno da bi nikah bio valjan, ko je veli po hanefijskom mezhebu, koliko svjedoka treba, šta je mehr i redoslijed vjenčanja u BiH.',
    published: '2026-10-06',
    updated: '2026-11-12',
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

  {
    key: 'nikah',
    locale: 'tr',
    slug: 'nikah-sartlari',
    title: 'Nikâh şartları: veli, şahitler, mehir ve resmi nikâh',
    description:
      'Dini nikâhın geçerlilik şartları: icap ve kabul, Hanefî mezhebinde veli, iki şahit, mehir ve Türkiye’de resmi nikâh ile dini nikâhın sırası.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },
  {
    key: 'trazenje',
    locale: 'tr',
    slug: 'islamda-es-nasil-aranir',
    title: 'İslam’da eş nasıl aranır, eş seçiminde nelere dikkat edilir',
    description:
      'Müstakbel eşte neye bakılır, hadisler din ve ahlak hakkında ne der, istihare namazı nasıl kılınır ve neden ilk adım niyettir.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },
  {
    key: 'roditelji',
    locale: 'tr',
    slug: 'aile-ve-es-secimi',
    title: 'Aile ve eş seçimi: anne baba çocuğuna nasıl yardım eder',
    description:
      'Anne, baba ve veli için: kızınız ya da oğlunuz eş ararken yanında olmak, ama kararı onlara bırakmak. İslam’ın çizdiği çerçeve.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },

  {
    key: 'nikah',
    locale: 'de',
    slug: 'nikah-voraussetzungen',
    title: 'Voraussetzungen der Nikah: Wali, Zeugen, Mahr und Standesamt',
    description:
      'Nikah Voraussetzungen: was eine islamische Ehe gültig macht, wer nach hanafitischer Schule Wali ist, wie viele Zeugen nötig sind und was die Mahr ist.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },
  {
    key: 'trazenje',
    locale: 'de',
    slug: 'ehepartner-finden-im-islam',
    title: 'Ehepartner finden im Islam: Absicht, Charakter und Istichara',
    description:
      'Worauf man bei der muslimischen Partnersuche achtet, was Hadithe über Glauben und Charakter sagen, wie man Istichara betet und warum die Absicht zuerst kommt.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },
  {
    key: 'roditelji',
    locale: 'de',
    slug: 'eltern-und-partnersuche',
    title: 'Eltern und Partnersuche: dem Kind beistehen, ohne zu entscheiden',
    description:
      'Für Vater, Mutter und Vormund: wie man Tochter oder Sohn bei der Suche nach einem Ehepartner begleitet, während die Entscheidung bei ihnen bleibt.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },

  {
    key: 'nikah',
    locale: 'en',
    slug: 'nikah-conditions',
    title: 'Conditions of nikah in Islam: wali, witnesses and mahr',
    description:
      'What makes a nikah valid: offer and acceptance, consent, two witnesses, the wali in the Hanafi and other schools, mahr, and the wedding order in Bosnia.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },
  {
    key: 'trazenje',
    locale: 'en',
    slug: 'how-to-find-a-spouse-in-islam',
    title: 'How to find a spouse in Islam: intention, character, istikhara',
    description:
      'What to look for in a future spouse, what the hadith say about faith and character, how to pray istikhara, and why intention comes first.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },
  {
    key: 'roditelji',
    locale: 'en',
    slug: 'parents-and-finding-a-spouse',
    title: 'The role of parents in finding a spouse in Islam',
    description:
      'For fathers, mothers and guardians: how to stand beside a daughter or son looking for a spouse, while the decision stays theirs.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },
  {
    key: 'mehr',
    locale: 'bs',
    slug: 'mehr',
    title: 'Mehr u islamu: šta je, koliko je i kada se daje',
    description:
      'Šta je mehr po Kur\'anu i sunnetu, kome pripada, mehr muadždžel i muedždžel, hanefijski minimum, umjerenost i kako se mehr imenuje pri nikahu.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },
  {
    key: 'mehr',
    locale: 'en',
    slug: 'mahr',
    title: 'Mahr in Islam: what it is, how much, and when it is given',
    description:
      'What mahr is in the Qur\'an and Sunnah, who it belongs to, prompt and deferred mahr, the Hanafi minimum, moderation, and how it is named at the nikah.',
    published: '2026-11-16',
    updated: '2026-11-16',
  },

  // ── kako aplikacija radi ─────────────────────────────────
  {
    key: 'provjera',
    locale: 'bs',
    slug: 'provjera-profila',
    title: 'Provjera profila: kako Niyyah zna da je osoba stvarna',
    description:
      'Šta se provjerava kad se neko prijavi na Niyyah: selfie od tri sekunde, poređenje sa slikama, šta znači oznaka Verified i ko vidi tvoje slike.',
    published: '2026-11-04',
    updated: '2026-11-04',
    aboutApp: true,
  },
  {
    key: 'provjera',
    locale: 'en',
    slug: 'profile-verification',
    title: 'Profile verification: how Niyyah checks that a member is real',
    description:
      'What is checked when someone joins Niyyah: a three-second selfie, a comparison with the profile photos, what the Verified badge means and who sees your photos.',
    published: '2026-11-04',
    updated: '2026-11-04',
    aboutApp: true,
  },
  {
    key: 'porodica',
    locale: 'bs',
    slug: 'porodica-i-mahrem-u-aplikaciji',
    title: 'Porodica u razgovoru: kako mahrem prati upoznavanje u aplikaciji',
    description:
      'Kako sestra u Niyyah poziva oca, brata ili staratelja, šta mahrem vidi i odobrava, zašto ne može pisati bez dozvole i kako se porodice upoznaju.',
    published: '2026-11-04',
    updated: '2026-11-04',
    aboutApp: true,
  },
  {
    key: 'porodica',
    locale: 'en',
    slug: 'family-and-mahram-in-the-app',
    title: 'Family in the conversation: how a mahram follows it in the app',
    description:
      'How a sister on Niyyah invites her father, brother or guardian, what a mahram sees and approves, why he cannot write without permission, and how families meet.',
    published: '2026-11-04',
    updated: '2026-11-04',
    aboutApp: true,
  },
  {
    key: 'upoznavanje',
    locale: 'bs',
    slug: 'upoznavanje-za-brak',
    title: 'Upoznavanje za brak u BiH i dijaspori: gdje tražiti i na šta paziti',
    description:
      'Upoznavanje muslimana i muslimanki za brak u BiH i dijaspori: Facebook grupe, oglasi ili aplikacija, šta pitati rano i kako porodica može biti uz tebe.',
    published: '2026-11-12',
    updated: '2026-11-12',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'bs',
    slug: 'kako-izabrati-aplikaciju-za-brak',
    title: 'Kako izabrati aplikaciju za brak: deset stvari koje treba provjeriti',
    description:
      'Na šta paziti kod aplikacije za brak za muslimane: ko ti može pisati, može li porodica biti uz tebe, provjera profila, slike, prijave, cijena i podaci.',
    published: '2026-11-04',
    updated: '2026-11-04',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'en',
    slug: 'how-to-choose-a-muslim-marriage-app',
    title: 'How to choose a Muslim marriage app: ten things to check',
    description:
      'What to look for in a Muslim marriage app: who can message you, whether family can be involved, verification, photo privacy, reports, pricing and your data.',
    published: '2026-11-04',
    updated: '2026-11-04',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'de',
    slug: 'muslimische-heirats-app-auswaehlen',
    title: 'Muslimische Heirats-App auswählen: zehn Dinge zum Prüfen',
    description:
      'Worauf du bei einer muslimischen Heirats-App achten solltest: wer dir schreibt, Familie im Gespräch, Profilprüfung, Fotos, Meldungen, Preise und Daten.',
    published: '2026-11-16',
    updated: '2026-11-16',
    aboutApp: true,
  },
  {
    key: 'provjera',
    locale: 'de',
    slug: 'profilpruefung',
    title: 'Profilprüfung: wie Niyyah prüft, ob ein Mitglied echt ist',
    description:
      'Was bei der Anmeldung in Niyyah geprüft wird: ein Selfie von drei Sekunden, der Vergleich mit den Fotos, was „verifiziert" bedeutet und wer deine Fotos sieht.',
    published: '2026-11-16',
    updated: '2026-11-16',
    aboutApp: true,
  },
  // ── bs, 18.11.2026 (vlasnik: „napravi članke na bosanskom") ──
  {
    key: 'prvi-susret',
    locale: 'bs',
    slug: 'prvi-susret-prije-braka',
    title: 'Prvi susret prije braka: kako ga urediti uz porodicu i u granicama',
    description:
      'Prvi susret prije braka u islamu: zašto je viđanje sunnet, kako ga urediti uz mahrema i bez osamljivanja, šta dogovoriti, pitati i gledati.',
    published: '2026-11-18',
    updated: '2026-11-18',
  },
  {
    key: 'prvi-susret',
    locale: 'tr',
    slug: 'evlilik-gorusmesi',
    title: 'Evlilik görüşmesi: görücü usulü ilk görüşme nasıl yapılır',
    description:
      'Evlilik görüşmesi ve kız görme İslam\'da nasıl yapılır: görüşmek neden sünnettir, mahrem ve aileyle halvetsiz görüşme, nelere bakılır, ne konuşulur.',
    published: '2026-11-22',
    updated: '2026-11-22',
  },
  {
    key: 'kiz-isteme',
    locale: 'tr',
    slug: 'kiz-isteme',
    title: 'Kız isteme nasıl olur: hazırlık, neler konuşulur, söz ve nişan',
    description:
      'Kız isteme İslam\'da ve gelenekte nasıl yapılır: kızın rızası, hazırlık, o akşam neler konuşulur, mehir, söz ve nişanın nikâhtan farkı ve sınırlar.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'taaruf',
    locale: 'id',
    slug: 'taaruf',
    title: 'Ta\'aruf: arti, proses, dan pertanyaan sebelum menikah',
    description:
      'Panduan ta\'aruf dalam Islam: apa bedanya dengan pacaran, batasan syariat, proses langkah demi langkah sampai khitbah, dan pertanyaan yang perlu dibicarakan.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'dopisivanje',
    locale: 'bs',
    slug: 'dopisivanje-prije-braka',
    title: 'Dopisivanje prije braka: šta je halal i gdje je granica',
    description:
      'Dopisivanje prije braka i halal granice: svrha braka, pristojan ton, bez udvaranja, porodica uz tebe, i kako od poruka doći do susreta porodica.',
    published: '2026-11-18',
    updated: '2026-11-18',
  },
  {
    key: 'nakon-razvoda',
    locale: 'bs',
    slug: 'brak-nakon-razvoda',
    title: 'Brak nakon razvoda u islamu: bez stida, s iskrenošću i porodicom',
    description:
      "Brak nakon razvoda u islamu: primjeri iz sire, iddet prema Kur'anu, djeca iz prethodnog braka, kada reći budućem supružniku i kako uključiti porodicu.",
    published: '2026-11-18',
    updated: '2026-11-18',
  },
  {
    key: 'prevare',
    locale: 'bs',
    slug: 'lazni-profili-i-prevare',
    title: 'Lažni profili i prevare pri upoznavanju: kako prepoznati prevaranta',
    description:
      'Kako prepoznati lažni profil i prevaru pri upoznavanju preko interneta: traženje novca, žurba, bijeg od videa i porodice. Šta nikad ne slati i šta uraditi.',
    published: '2026-11-18',
    updated: '2026-11-18',
    aboutApp: true,
  },
  {
    key: 'profil',
    locale: 'bs',
    slug: 'kako-napisati-profil-za-brak',
    title: 'Kako napisati profil za brak: šta napisati o sebi i šta izbjegavati',
    description:
      'Kako napisati profil za brak: iskrene slike, kratak opis, jasno o namazu, djeci, selidbi i prethodnom braku. Šta napisati o sebi, a šta izbjeći u opisu.',
    published: '2026-11-18',
    updated: '2026-11-18',
    aboutApp: true,
  },
  {
    key: 'dijaspora',
    locale: 'bs',
    slug: 'upoznavanje-muslimana-u-njemackoj-i-austriji',
    title: 'Upoznavanje muslimana u Njemačkoj i Austriji: brak u dijaspori',
    description:
      'Upoznavanje za brak za Bošnjake u Njemačkoj, Austriji i Švicarskoj: gdje tražiti, šta pitati prije braka, nikah i građanski brak, i kako uključiti porodicu.',
    published: '2026-11-18',
    updated: '2026-11-18',
    aboutApp: true,
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
  id: {
    name: 'Panduan',
    title: 'Panduan menikah dengan niat',
    lead: 'Pertanyaan yang muncul sebelum akad nikah: bagaimana ta\'aruf dijalankan, apa batasannya, apa yang ditanyakan sebelum menikah. Jawaban dengan sumber, bukan fatwa.',
    metaDescription:
      'Panduan bagi Muslim yang mencari pasangan hidup: ta\'aruf, khitbah, pertanyaan sebelum menikah, dan berkenalan dalam batas syariat. Jawaban dengan sumber.',
    home: 'Beranda',
    updated: 'Diperbarui',
    minutes: 'menit baca',
    contents: 'Dalam tulisan ini',
    more: 'Lainnya dari panduan',
    note: 'Kami tidak mengeluarkan fatwa. Tulisan ini menyebutkan sumbernya dan apa yang dikenal di kalangan ulama; untuk keadaanmu sendiri, tanyakan kepada ustadz atau imam yang kamu percaya.',
    sectionKicker: 'Panduan',
    sectionTitle: 'Pertanyaan sebelum akad nikah.',
    sectionLead: 'Untukmu dan keluargamu: apa kata Islam, dan bagaimana praktiknya saat berkenalan hari ini.',
    all: 'Semua panduan',
  },
}
