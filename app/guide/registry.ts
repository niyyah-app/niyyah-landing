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

export const guideLocales = ['bs', 'en', 'de', 'tr', 'id', 'fr', 'ms', 'ar', 'ur'] as const
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
  {
    key: 'mehr',
    locale: 'de',
    slug: 'mahr-im-islam',
    title: 'Mahr im Islam: Brautgabe, Höhe und Bedeutung',
    description:
      'Die Mahr (Brautgabe) im Islam: wem sie gehört, sofortige und aufgeschobene Mahr, das hanafitische Mindestmaß und warum die Sunna zum Maßhalten rät.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'porodica',
    locale: 'de',
    slug: 'familie-und-mahram-in-der-app',
    title: 'Familie im Gespräch: wie ein Mahram in der App mitliest',
    description:
      'Wie eine Schwester in Niyyah einen Mahram einlädt, wie seine Identität geprüft wird, was er sieht und entscheidet und wie die Familien in Kontakt kommen.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'mehr',
    locale: 'tr',
    slug: 'mehir-nedir',
    title: 'Mehir nedir, ne kadar olur, ne zaman verilir',
    description:
      'Kur\'an ve sünnete göre mehir nedir, kime aittir, mehr-i muaccel ve müeccel, Hanefî mezhebinde en az miktar, ölçülülük ve mehrin dini nikâhta söylenmesi.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'provjera',
    locale: 'tr',
    slug: 'profil-dogrulama',
    title: 'Profil doğrulama: Niyyah bir üyenin gerçek olduğunu nasıl anlar',
    description:
      'Niyyah\'a kayıtta neler kontrol edilir: üç saniyelik selfie, fotoğraflarla karşılaştırma, doğrulanmış profil işareti ne demek ve fotoğraflarını kim görür.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'porodica',
    locale: 'tr',
    slug: 'uygulamada-aile-ve-mahrem',
    title: 'Sohbette aile: mahrem uygulamada tanışmayı nasıl takip eder',
    description:
      'Niyyah\'ta bir kız kardeş babasını, ağabeyini ya da velisini nasıl davet eder, mahrem neyi görür ve onaylar, neden izinsiz yazamaz ve aileler nasıl tanışır.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'tr',
    slug: 'evlilik-uygulamasi-nasil-secilir',
    title: 'Müslüman evlilik uygulaması nasıl seçilir: kontrol edilecek on şey',
    description:
      'Müslüman evlilik uygulamasında neye bakılır: sana kim yazabilir, aile sürece katılabilir mi, profil doğrulama, fotoğraflar, şikâyetler, fiyatlar ve veriler.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'mahrem',
    locale: 'id',
    slug: 'siapa-saja-mahram',
    title: 'Siapa saja mahram, dan apa perannya saat mencari jodoh',
    description:
      'Siapa saja mahram bagi perempuan, bedanya dengan wali nikah, dan bagaimana keluarga ikut mendampingi saat ta\'aruf, langsung maupun lewat aplikasi.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'halal',
    locale: 'id',
    slug: 'hukum-mencari-jodoh-lewat-aplikasi',
    title: 'Hukum mencari jodoh lewat aplikasi: halal atau tidak?',
    description:
      'Apa yang diminta Islam saat berkenalan untuk menikah, di mana aplikasi kencan keliru, dan apa yang harus ada agar mencari jodoh lewat aplikasi tetap terjaga.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'pitanja',
    locale: 'id',
    slug: 'pertanyaan-sebelum-menikah',
    title: 'Pertanyaan sebelum menikah yang perlu dibicarakan calon suami istri',
    description:
      'Pertanyaan tentang agama, anak, tempat tinggal, keuangan, dan keluarga sebelum akad nikah, dan cara menanyakannya tanpa terasa seperti interogasi.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'nikah',
    locale: 'id',
    slug: 'syarat-dan-rukun-nikah',
    title: 'Syarat dan rukun nikah: wali, saksi, mahar, dan pencatatan di KUA',
    description:
      'Rukun dan syarat sah nikah menurut mazhab Syafi\'i: ijab kabul, wali nikah, dua saksi, mahar, batas usia, serta pencatatan nikah di KUA.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'trazenje',
    locale: 'id',
    slug: 'cara-mencari-jodoh-dalam-islam',
    title: 'Cara mencari jodoh dalam Islam: niat, akhlak, dan istikharah',
    description:
      'Apa yang dilihat dari calon pasangan, apa kata hadis tentang agama dan akhlak, cara shalat istikharah, dan mengapa mencari jodoh dimulai dari niat.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'roditelji',
    locale: 'id',
    slug: 'peran-orang-tua-mencari-jodoh',
    title: 'Peran orang tua dalam mencari jodoh untuk anak',
    description:
      'Untuk ayah, ibu, dan wali: cara mendampingi putri atau putra yang mencari jodoh, sementara keputusan tetap ada di tangan mereka.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'mehr',
    locale: 'id',
    slug: 'mahar-dalam-islam',
    title: 'Mahar dalam Islam: arti, besarnya, dan cara menyebutkannya saat akad',
    description:
      'Apa itu mahar menurut Al-Qur\'an dan sunnah, milik siapa, mahar tunai dan ditangguhkan, batasnya menurut mazhab, kesederhanaan, dan penyebutannya saat akad.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'provjera',
    locale: 'id',
    slug: 'verifikasi-profil',
    title: 'Verifikasi profil: cara Niyyah memastikan anggota itu orang sungguhan',
    description:
      'Apa yang diperiksa saat mendaftar di Niyyah: swafoto tiga detik, perbandingan dengan foto profil, arti tanda terverifikasi, dan siapa yang melihat fotomu.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'porodica',
    locale: 'id',
    slug: 'keluarga-dan-mahram-di-aplikasi',
    title: 'Keluarga ikut menjaga: cara mahram mendampingi ta\'aruf di aplikasi',
    description:
      'Cara perempuan di Niyyah mengajak ayah, saudara, atau wali, apa yang dilihat dan disetujui mahram, mengapa ia perlu izin untuk menulis, dan langkah ke keluarga.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'id',
    slug: 'cara-memilih-aplikasi-taaruf',
    title: 'Cara memilih aplikasi ta\'aruf: sepuluh hal yang perlu diperiksa',
    description:
      'Yang perlu diperiksa dari aplikasi ta\'aruf: siapa yang bisa mengirim pesan, peran keluarga, verifikasi, privasi foto, laporan, biaya, dan data pribadi.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'mahrem',
    locale: 'fr',
    slug: 'qui-est-mahram',
    title: 'Qui est mahram et quel est son rôle dans la recherche d’un époux',
    description:
      'Qui est mahram pour une femme, en quoi le mahram diffère du wali, et comment la famille reste présente quand elle apprend à connaître un futur époux.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'halal',
    locale: 'fr',
    slug: 'application-mariage-musulman-halal',
    title: 'Chercher un époux par une application, est-ce halal ?',
    description:
      'Ce que l’islam demande à deux personnes qui se connaissent en vue du mariage, où les applications se trompent, et ce qu’il faut pour rester dans les limites.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'pitanja',
    locale: 'fr',
    slug: 'questions-avant-le-mariage',
    title: 'Questions à poser avant le mariage en islam',
    description:
      'Questions sur la religion, les enfants, le déménagement, l’argent et la famille à poser avant le nikah, et comment les poser sans en faire un interrogatoire.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'nikah',
    locale: 'fr',
    slug: 'conditions-du-nikah',
    title: 'Conditions du nikah : wali, témoins, dot et mariage civil',
    description:
      'Ce qui rend un nikah valide : offre et acceptation, consentement, témoins, le wali chez les malikites et les hanafites, la dot, et le mariage civil en France.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'trazenje',
    locale: 'fr',
    slug: 'trouver-un-epoux-en-islam',
    title: 'Comment trouver un époux ou une épouse en islam',
    description:
      'Ce qui compte chez un futur conjoint, ce que disent les hadiths sur la foi et le caractère, comment faire l’istikhara, et pourquoi l’intention vient d’abord.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'roditelji',
    locale: 'fr',
    slug: 'parents-et-recherche-du-conjoint',
    title: 'Parents : comment aider son enfant à trouver un conjoint',
    description:
      'Pour le père, la mère et le tuteur : être aux côtés de sa fille ou de son fils pendant qu’ils cherchent un conjoint, tout en leur laissant la décision.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'mehr',
    locale: 'fr',
    slug: 'dot-mahr-en-islam',
    title: 'La dot (mahr) en islam : obligation, montant et modération',
    description:
      'La dot (mahr) en islam : à qui elle appartient, dot immédiate ou différée, le minimum selon les écoles, et pourquoi la sunna invite à la modération.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'provjera',
    locale: 'fr',
    slug: 'verification-du-profil',
    title: 'Vérification du profil : comment Niyyah s’assure qu’un membre est réel',
    description:
      'Ce qui est vérifié à l’inscription sur Niyyah : un selfie de trois secondes, la comparaison avec tes photos, le sens de « vérifié » et qui voit tes photos.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'porodica',
    locale: 'fr',
    slug: 'famille-et-mahram-dans-l-application',
    title: 'La famille dans la conversation : le mahram dans l’application',
    description:
      'Comment une sœur invite un mahram dans Niyyah, comment son identité est vérifiée, ce qu’il voit et décide, et comment les familles sont mises en relation.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'fr',
    slug: 'choisir-une-application-de-mariage-musulman',
    title: 'Choisir une application de mariage musulman : dix points à vérifier',
    description:
      'Que vérifier dans une application de mariage musulman : qui peut t’écrire, la place de la famille, la vérification, tes photos, le paiement et tes données.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'mahrem',
    locale: 'ms',
    slug: 'siapa-mahram',
    title: 'Siapa mahram dan apakah peranannya ketika mencari jodoh',
    description:
      'Siapa mahram bagi seorang perempuan, bezanya dengan wali, dan bagaimana keluarga boleh berada di sisinya ketika dia berkenalan dengan bakal suami.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'halal',
    locale: 'ms',
    slug: 'aplikasi-cari-jodoh-halal',
    title: 'Adakah halal mencari jodoh melalui aplikasi?',
    description:
      'Apa yang Islam tuntut ketika berkenalan untuk berkahwin, di mana aplikasi temu janji tersasar, dan apa yang mesti ada supaya ta\'aruf kekal dalam batas.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'pitanja',
    locale: 'ms',
    slug: 'soalan-sebelum-berkahwin',
    title: 'Soalan sebelum berkahwin: apa yang perlu ditanya sebelum akad nikah',
    description:
      'Soalan tentang agama, anak, tempat tinggal, wang dan keluarga yang patut ditanya sebelum akad nikah, dan cara bertanya tanpa menjadikannya temu duga.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'nikah',
    locale: 'ms',
    slug: 'rukun-nikah',
    title: 'Rukun nikah dan syarat sah nikah dalam Islam',
    description:
      'Lima rukun nikah dalam mazhab Syafie, wali dan wali hakim, saksi, mas kahwin, perkara sunnah, dan proses nikah di Malaysia dari kursus pra-perkahwinan.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'trazenje',
    locale: 'ms',
    slug: 'cara-mencari-jodoh-dalam-islam',
    title: 'Cara mencari jodoh dalam Islam: niat, agama, akhlak dan istikharah',
    description:
      'Bermula dengan niat, melihat agama dan akhlak, sekufu, di mana mencari, solat istikharah dan doa untuk jodoh yang baik: panduan mencari jodoh dalam Islam.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'roditelji',
    locale: 'ms',
    slug: 'ibu-bapa-dan-mencari-jodoh',
    title: 'Ibu bapa dan anak yang mencari jodoh: berdiri di sisi, bukan di atas',
    description:
      'Untuk bapa, ibu dan penjaga: cara menyokong anak perempuan atau lelaki yang mencari jodoh, sementara keputusan tetap milik mereka.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'mehr',
    locale: 'ms',
    slug: 'mas-kahwin',
    title: 'Mas kahwin dalam Islam: maksud, kadar dan bila ia diberi',
    description:
      'Apa itu mas kahwin menurut Al-Quran dan Sunnah, milik siapa, tunai dan berhutang, kadar minimum, bezanya dengan hantaran, dan cara ia disebut ketika akad.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'provjera',
    locale: 'ms',
    slug: 'pengesahan-profil',
    title: 'Pengesahan profil: bagaimana Niyyah memastikan ahli itu benar',
    description:
      'Apa yang disemak apabila seseorang menyertai Niyyah: swafoto tiga saat, perbandingan dengan gambar, maksud lencana disahkan dan siapa melihat gambar kamu.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'porodica',
    locale: 'ms',
    slug: 'keluarga-dan-mahram-dalam-aplikasi',
    title: 'Keluarga dalam perbualan: bagaimana mahram mengikuti ta\'aruf dalam aplikasi',
    description:
      'Cara Muslimah di Niyyah menjemput bapa, saudara lelaki atau penjaga, apa yang mahram lihat dan luluskan, mengapa dia tidak menulis tanpa izin.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'ms',
    slug: 'cara-memilih-aplikasi-perkahwinan',
    title: 'Cara memilih aplikasi perkahwinan Muslim: sepuluh perkara untuk disemak',
    description:
      'Apa yang perlu dilihat pada aplikasi perkahwinan Muslim: siapa boleh menghantar mesej, keluarga, pengesahan profil, gambar, laporan, bayaran dan data.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'mahrem',
    locale: 'ar',
    slug: 'man-huwa-al-mahram',
    title: 'من هو المحرم وما دوره عند البحث عن شريك الحياة',
    description:
      'من هم محارم المرأة بالنسب والمصاهرة والرضاع، وما الفرق بين المحرم والوليّ، وكيف يبقى الأهل حاضرين حين تتعرف على خاطب.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'halal',
    locale: 'ar',
    slug: 'hal-tatbiqat-al-zawaj-halal',
    title: 'هل البحث عن شريك الحياة عبر تطبيق حلال؟',
    description:
      'ماذا يطلب الإسلام من اثنين يتعارفان بنية الزواج، وأين تخطئ التطبيقات، وما الذي يجب أن يتوفر ليبقى التعارف في حدود الشرع.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'pitanja',
    locale: 'ar',
    slug: 'asila-qabl-al-zawaj',
    title: 'أسئلة قبل الزواج: ماذا تسأل قبل أن تقول «نعم»',
    description:
      'أسئلة عن الدين والأولاد والسكن والمال والعائلة تستحق أن تُطرح قبل عقد النكاح، وكيف تطرحها دون أن يتحول الحديث إلى استجواب.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'nikah',
    locale: 'ar',
    slug: 'shurut-aqd-al-nikah',
    title: 'شروط عقد النكاح وأركانه في الإسلام',
    description:
      'الإيجاب والقبول، ورضا المرأة، والشهود، والوليّ، والمهر: ما يصحّ به عقد النكاح عند المذاهب الأربعة، وما هو سنّة، وأهمية التوثيق.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'trazenje',
    locale: 'ar',
    slug: 'ikhtiyar-al-zawj-fi-al-islam',
    title: 'كيف تختار شريك الحياة في الإسلام',
    description:
      'النية، والدين والخلق، والكفاءة، وأين تبحث، وصلاة الاستخارة ودعاؤها: توجيه الإسلام لمن يبحث عن زوج أو زوجة.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'roditelji',
    locale: 'ar',
    slug: 'dawr-al-walidayn-fi-al-zawaj',
    title: 'دور الوالدين حين يبحث الأبناء عن شريك الحياة',
    description:
      'للآباء والأمهات: القرار لأبنائكم ودوركم النصيحة والحماية والدعاء. ما ينبغي فعله، وما يُتجنّب، وكيف يكون المحرم إلى جانب ابنتكم.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'mehr',
    locale: 'ar',
    slug: 'al-mahr-fi-al-islam',
    title: 'المهر في الإسلام: أحكامه ومقداره والمقدَّم والمؤخَّر',
    description:
      'ما المهر ولمن هو، والفرق بين المعجَّل والمؤجَّل، وحدّه الأدنى عند المذاهب، ولماذا تدعو السنّة إلى التيسير، وكيف يُسمّى في العقد.',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'provjera',
    locale: 'ar',
    slug: 'tawthiq-al-malaf',
    title: 'توثيق الملف الشخصي: كيف يتحقق Niyyah من أن العضو حقيقي',
    description:
      'كيف يجري التحقق من الوجه في Niyyah، ومتى يقرر فيه إنسان، وماذا يحدث للصورة الذاتية، ومن يرى صورك، وما الذي لا تعنيه شارة التوثيق.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'porodica',
    locale: 'ar',
    slug: 'al-mahram-fi-al-tatbiq',
    title: 'العائلة في المحادثة: كيف يتابع المحرم داخل التطبيق',
    description:
      'كيف تدعو الأخت محرمها في Niyyah، وكيف يُتحقق من هويته، وما يراه في بوابة المحرم وما يقرره، وكيف تتعارف العائلتان بعد ذلك.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'ar',
    slug: 'kayfa-takhtar-tatbiq-zawaj',
    title: 'كيف تختار تطبيق زواج إسلامي: عشرة أمور تتحقق منها',
    description:
      'ما الذي تنظر إليه في تطبيق الزواج الإسلامي: من يراسلك، وحضور الأهل، والتحقق من الملفات، والصور، والبلاغات، والدفع، وبياناتك.',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'mahrem',
    locale: 'ur',
    slug: 'mahram-kaun-hai',
    title: 'محرم کون ہے اور رشتہ تلاش کرتے وقت اس کا کردار کیا ہے',
    description:
      'عورت کا محرم کون ہوتا ہے، محرم اور ولی میں کیا فرق ہے، اور رشتے کی جان پہچان کے دوران خاندان کیسے ساتھ رہ سکتا ہے، روبرو بھی اور ایپ میں بھی۔',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'halal',
    locale: 'ur',
    slug: 'kya-app-se-rishta-dhoondna-halal-hai',
    title: 'کیا ایپ کے ذریعے رشتہ تلاش کرنا حلال ہے؟',
    description:
      'نکاح کی نیت سے جان پہچان میں اسلام کیا چاہتا ہے، ڈیٹنگ ایپس کہاں غلط ہیں، اور فون پر رشتے کی بات حدود میں رکھنے کے لیے کیا ضروری ہے۔',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'pitanja',
    locale: 'ur',
    slug: 'shadi-se-pehle-sawalat',
    title: 'شادی سے پہلے کیا سوالات پوچھیں: رشتہ طے کرنے سے پہلے',
    description:
      'دین، بچوں، کہاں رہنا ہے، پیسے اور خاندان کے بارے میں وہ سوال جو نکاح سے پہلے پوچھنے چاہییں، اور انہیں پوچھ گچھ بنائے بغیر کیسے پوچھیں۔',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'nikah',
    locale: 'ur',
    slug: 'nikah-ki-sharait',
    title: 'نکاح کی شرائط: ایجاب و قبول، ولی، گواہ، حق مہر اور نکاح نامہ',
    description:
      'نکاح کے درست ہونے کی شرائط: ایجاب و قبول، حنفی مسلک میں ولی، دو گواہ، حق مہر، پاکستان میں نکاح نامہ اور برطانیہ میں قانونی اندراج۔',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'trazenje',
    locale: 'ur',
    slug: 'islam-mein-rishta-kaise-dhoondein',
    title: 'اسلام میں رشتہ کیسے ڈھونڈیں: نیت، دین، اخلاق اور استخارہ',
    description:
      'ہونے والے شریکِ حیات میں کیا دیکھیں، احادیث دین اور اخلاق کے بارے میں کیا کہتی ہیں، استخارہ کیسے کریں اور نیت پہلا قدم کیوں ہے۔',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'roditelji',
    locale: 'ur',
    slug: 'walidain-aur-rishta',
    title: 'والدین اور رشتہ: بیٹی یا بیٹے کا رشتہ ڈھونڈنے میں کیسے ساتھ دیں',
    description:
      'والد، والدہ اور سرپرست کے لیے: بیٹی یا بیٹا رشتہ ڈھونڈ رہا ہو تو اس کے ساتھ کیسے رہیں، مگر فیصلہ اسی کا رہنے دیں۔ اسلام کا دیا ہوا دائرہ۔',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'mehr',
    locale: 'ur',
    slug: 'haq-mehr',
    title: 'حق مہر کیا ہے: کتنا ہو، کب دیا جائے، معجل اور مؤجل',
    description:
      'قرآن و سنت میں حق مہر، یہ کس کا حق ہے، معجل اور مؤجل مہر، حنفی مسلک میں کم از کم مقدار، اعتدال، اور نکاح نامے میں مہر کیسے لکھا جاتا ہے۔',
    published: '2026-11-23',
    updated: '2026-11-23',
  },
  {
    key: 'provjera',
    locale: 'ur',
    slug: 'profile-ki-tasdeeq',
    title: 'پروفائل کی تصدیق: Niyyah کیسے جانچتی ہے کہ رکن اصلی ہے',
    description:
      'Niyyah میں شامل ہوتے وقت کیا جانچا جاتا ہے: تین سیکنڈ کی سیلفی، پروفائل تصاویر سے موازنہ، تصدیق شدہ نشان کا مطلب، اور آپ کی تصاویر کون دیکھتا ہے۔',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'porodica',
    locale: 'ur',
    slug: 'app-mein-mahram-aur-khandan',
    title: 'گفتگو میں خاندان: ایپ میں محرم کیسے ساتھ رہتا ہے',
    description:
      'Niyyah میں بہن والد، بھائی یا سرپرست کو کیسے دعوت دیتی ہے، محرم کیا دیکھتا اور منظور کرتا ہے، وہ اجازت کے بغیر کیوں نہیں لکھتا، اور خاندان کیسے ملتے ہیں۔',
    published: '2026-11-23',
    updated: '2026-11-23',
    aboutApp: true,
  },
  {
    key: 'izbor',
    locale: 'ur',
    slug: 'muslim-rishta-app-kaise-chunein',
    title: 'مسلم رشتہ ایپ کیسے چنیں: دس باتیں جو جانچنی چاہییں',
    description:
      'مسلم رشتہ ایپ میں کیا دیکھیں: کون پیغام بھیج سکتا ہے، کیا خاندان شامل ہو سکتا ہے، تصدیق، تصاویر کی پرائیویسی، شکایات، قیمت اور آپ کا ڈیٹا۔',
    published: '2026-11-23',
    updated: '2026-11-23',
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
  fr: {
    name: 'Guide',
    title: 'Guide du mariage avec intention',
    lead: 'Les questions qu’on se pose avant le nikah : qui est mahram, ce qui est halal, quoi demander avant le mariage. Des réponses avec leurs sources, pas des fatwas.',
    metaDescription: 'Guide pour les musulmans qui cherchent un époux ou une épouse : mahram, wali, nikah, dot (mahr), questions avant le mariage et rencontre dans les limites.',
    home: 'Accueil',
    updated: 'Mis à jour',
    minutes: 'min de lecture',
    contents: 'Dans cet article',
    more: 'À lire aussi dans le guide',
    note: 'Nous ne délivrons pas de fatwas. Ce texte cite ses sources et ce qui est connu chez les savants ; pour ta propre situation, demande à un imam en qui tu as confiance.',
    sectionKicker: 'Guide',
    sectionTitle: 'Les questions qui viennent avant le nikah.',
    sectionLead: 'Pour toi et ta famille : ce que dit l’islam, et à quoi cela ressemble quand on se rencontre aujourd’hui.',
    all: 'Tout le guide',
  },
  ms: {
    name: 'Panduan',
    title: 'Panduan berkahwin dengan niat',
    lead: 'Soalan yang ditanya sebelum akad nikah: siapa mahram, apa yang halal, apa yang perlu ditanya sebelum berkahwin. Jawapan bersama sumber, bukan fatwa.',
    metaDescription: 'Panduan untuk Muslim yang mencari jodoh: mahram, wali, rukun nikah, mas kahwin, soalan sebelum berkahwin dan ta\'aruf dalam batas syarak. Jawapan bersama sumber.',
    home: 'Utama',
    updated: 'Dikemas kini',
    minutes: 'minit bacaan',
    contents: 'Dalam tulisan ini',
    more: 'Lagi daripada panduan',
    note: 'Kami tidak mengeluarkan fatwa. Tulisan ini menyebut sumbernya dan apa yang dikenali dalam kalangan ulama; untuk keadaan kamu sendiri, tanyalah ustaz atau imam yang kamu percayai.',
    sectionKicker: 'Panduan',
    sectionTitle: 'Soalan yang datang sebelum akad nikah.',
    sectionLead: 'Untuk kamu dan keluarga: apa kata Islam, dan bagaimana rupanya apabila berkenalan untuk berkahwin hari ini.',
    all: 'Semua panduan',
  },
  ar: {
    name: 'الدليل',
    title: 'دليل الزواج بنية صادقة',
    lead: 'الأسئلة التي يطرحها الناس قبل عقد النكاح: من هو المحرم، وما الحلال، وماذا تسأل قبل الزواج. إجابات بمصادرها، لا فتاوى.',
    metaDescription: 'دليل للمسلمين الباحثين عن شريك الحياة: المحرم والوليّ وعقد النكاح والمهر وأسئلة قبل الزواج والتعارف في حدود الشرع. إجابات بمصادرها.',
    home: 'الرئيسية',
    updated: 'آخر تحديث',
    minutes: 'دقائق قراءة',
    contents: 'في هذا المقال',
    more: 'المزيد من الدليل',
    note: 'نحن لا نُصدر فتاوى. يذكر هذا النص مصادره وما هو معروف عند العلماء، وفي حالتك أنت اسأل إمامًا تثق به.',
    sectionKicker: 'الدليل',
    sectionTitle: 'أسئلة تسبق عقد النكاح.',
    sectionLead: 'لك ولأهلك: ماذا يقول الإسلام، وكيف يبدو ذلك حين يتعارف الناس اليوم.',
    all: 'الدليل كاملًا',
  },
  ur: {
    name: 'رہنمائی',
    title: 'نیت کے ساتھ نکاح: ایک رہنمائی',
    lead: 'وہ سوال جو لوگ نکاح سے پہلے پوچھتے ہیں: محرم کون ہے، کیا حلال ہے، شادی سے پہلے کیا پوچھیں۔ حوالوں کے ساتھ جواب، فتوے نہیں۔',
    metaDescription: 'رشتہ تلاش کرنے والے مسلمانوں کے لیے رہنمائی: محرم، ولی، نکاح، حق مہر، شادی سے پہلے سوالات اور حدود میں رہ کر جان پہچان۔ حوالوں کے ساتھ جواب۔',
    home: 'صفحۂ اول',
    updated: 'تازہ کاری',
    minutes: 'منٹ کا مطالعہ',
    contents: 'اس مضمون میں',
    more: 'رہنمائی سے مزید',
    note: 'ہم فتویٰ نہیں دیتے۔ یہ مضمون اپنے حوالے اور علماء کے ہاں معروف بات بیان کرتا ہے؛ اپنی صورتحال کے لیے کسی ایسے عالم سے پوچھیں جن پر آپ کو اعتماد ہو۔',
    sectionKicker: 'رہنمائی',
    sectionTitle: 'وہ سوال جو نکاح سے پہلے آتے ہیں۔',
    sectionLead: 'آپ کے اور آپ کے خاندان کے لیے: اسلام کیا کہتا ہے، اور آج رشتے کی جان پہچان کیسی دکھتی ہے۔',
    all: 'پوری رہنمائی',
  },
}
