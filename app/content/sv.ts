import type { Copy } from './bs'

export const sv: Copy = {
  meta: {
    title: 'Niyyah — Den halal appen för att hitta en livspartner',
    description:
      'Niyyah är en app för muslimer som söker äktenskap. Meddelanden öppnas först vid ömsesidigt intresse, en mahram kan vara med i samtalet, och gemenskapen modereras. Gratis, på nio språk.',
    ogAlt: 'Niyyah: Äktenskap, sökt med avsikt.',
  },

  nav: {
    skip: 'Gå till innehållet',
    label: 'Huvudnavigering',
    home: 'Niyyah, startsidan',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Så fungerar det' },
      { href: '#sigurnost', label: 'Säkerhet' },
      { href: '#preporuke', label: 'Röster' },
      { href: '#pitanja', label: 'Frågor' },
    ],
    language: 'Språk',
    menu: 'Meny',
    close: 'Stäng menyn',
  },

  cta: {
    download: 'Hämta Niyyah',
    waitlist: 'Säg till när Niyyah startar',
    waitlistShort: 'Säg till',
    emailLabel: 'Din e-postadress',
    emailPlaceholder: 'namn@exempel.com',
    sending: 'Skickar',
    success: 'Tack. Vi skriver så fort Niyyah startar, in shā Allāh.',
    invalid: 'Skriv en giltig e-postadress, till exempel namn@exempel.com.',
    error: 'Det gick inte. Kontrollera anslutningen och försök igen.',
    tooMany: 'För många försök. Försök igen om några minuter.',
    notConnected: 'Väntelistan är inte öppen än. Återkom snart.',
    privacy: 'Vi använder din adress bara för att säga till när Niyyah startar och för att en välkomstgåva ska vänta på dig. Vi säljer den inte och ger den inte till någon för reklam.',
    soon: 'Snart på App Store och Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Hämta i',
    availableOn: 'Finns på',
    eyebrow: 'HALAL APP FÖR ÄKTENSKAP',
    waiting: '{count} personer väntar redan på Niyyah',
  },

  hero: {
    title: 'Äktenskap, sökt med avsikt.',
    lead:
      'Niyyah är en app för muslimer som på allvar söker en livspartner. Meddelanden öppnas först vid ömsesidigt intresse, en mahram kan vara med i samtalet, och gränserna hålls av appen — inte av dig.',
    secondary: 'Så fungerar mahram',
    micro: 'Gratis. Appen finns på nio språk.',
    imageAlt: 'Ett profilkort i Niyyah: bön, madhhab, planer för äktenskap och matchningsgrad.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verifierad',
    match: 'matchning',
    rows: [
      { k: 'Tro', v: 'Praktiserande' },
      { k: 'Bön', v: 'Regelbundet' },
      { k: 'Madhhab', v: 'Hanafi' },
      { k: 'Äktenskap', v: 'Inom ett år' },
    ],
    prompt: 'Tro i ett äktenskap betyder…',
    promptAnswer: 'att vi påminner varandra om det som betyder något, även när det är tungt.',
    pass: 'Vidare',
    like: 'Jag gillar',
  },

  problem: {
    title: 'Dejtingappar byggdes inte för äktenskap.',
    body: [
      'De byggdes för att du ska fortsätta svepa. Oändliga kort, människor utan tydlig avsikt, samtal du aldrig skulle kunna visa dina föräldrar.',
      'Att träffas genom släkten är å andra sidan långsamt, kretsen är trång och trycket tungt. Mellan de två världarna fanns ingenting för oss.',
    ],
    pains: [
      'Du vet inte vem som är seriös och vem som bara är där för att titta.',
      'Systrar är rädda för trakasserier, falska profiler och att stå helt ensamma i allt.',
      'Översatta appar förstår varken vårt språk, vår madhhab, våra sedvänjor eller diasporan.',
    ],
    eyebrow: 'SÅ FUNGERAR DET',
    painsLabel: 'Känns det igen?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Andra appar mäter framgång i tiden du tillbringar i dem. Vi mäter den i nikah, efter vilket du inte längre behöver oss.',
  },

  pillars: {
    title: 'Byggd för äktenskap, från första skärmen.',
    items: [
      {
        word: 'Avsikt',
        title: 'Avsikten först',
        body: 'Varje profil säger vad personen söker och när. Tidsram för äktenskap, barn, flytt: du vet det före första meddelandet.',
      },
      {
        word: 'Familj',
        title: 'Med familjen, inte ensam',
        body: 'En syster kan bjuda in sin far, bror eller målsman att vara med i hennes samtal. Inget hålls hemligt för dem vars åsikt betyder något.',
      },
      {
        word: 'Gränser',
        title: 'Halal i själva konstruktionen',
        body: 'Bara motsatt kön. Meddelanden först vid ömsesidigt intresse. En gemenskap som moderatorer går igenom. Gränserna hålls av appen, du behöver inte vakta dem.',
      },
    ],
  },

  mahrem: {
    kicker: 'Mahram-portalen',
    title: 'Inget hålls hemligt för dem vars åsikt betyder något.',
    body:
      'Slå på ”Kräv mahram” och bjud in upp till tre personer du litar på: din far, bror, farbror eller morbror, din målsman. De ser dina samtal i mahram-portalen, men kan inte skriva och kan inte träffa någon. De finns bara där, så som de hade funnits även i verkligheten.',
    steps: [
      { title: 'Slå på ”Kräv mahram”', body: 'En enda knapp i inställningarna.' },
      { title: 'Bjud in upp till tre mahram', body: 'Inbjudan kommer med e-post, och mahram tar emot den i appen.' },
      {
        title: 'De läser, du talar',
        body: 'Mahram ser samtal och matchningar. Hen kan inte skriva från portalen och använder inga funktioner för att träffa någon.',
      },
    ],
    who: [
      { label: 'För henne', body: 'Du är inte ensam. Familjen finns där utan att stå över din axel.' },
      { label: 'För familjen', body: 'Ni vet med vem hon talar och hur. Utan hemligheter.' },
      { label: 'För honom', body: 'Ett tydligt tecken på att hon är seriös och att familjen är med.' },
    ],
    parentsTitle: 'Föräldrar, detta är till er.',
    parentsBody:
      'Vi vet att ”dejtingapp” inte låter som något för er dotter eller syster. I Niyyah kan ni vara med i hennes samtal och se med vem och hur hon skriver, utan att själva skriva något. Ett meddelande kan inte ens komma fram förrän båda sidor visat intresse, och allt detta är gratis.',
    share: 'Skicka den här sidan till henne',
    shareDone: 'Länken är kopierad',
    shareText: 'Niyyah: appen för äktenskap där familjen kan vara med i samtalet.',
    imageAlt: 'Mahram-portalen: en far läser sin dotters samtal, utan möjlighet att skriva.',
  },

  mockPortal: {
    title: 'Mahram-portalen',
    readOnly: 'Endast läsning',
    watching: 'Du följer: Amina',
    with: 'Samtal med: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaikum. Tack för att du öppnade samtalet.' },
      { from: 'her', text: 'Wa alaikum assalam. Du skrev att du vill att familjerna träffas tidigt?' },
      { from: 'him', text: 'Ja. Mina föräldrar skulle gärna träffa dina innan något blir allvarligt.' },
    ],
    locked: 'Det går inte att skriva från portalen',
  },

  how: {
    kicker: 'Så fungerar det',
    title: 'Från profil till samtal, i fyra steg.',
    steps: [
      { title: 'Gör en profil med avsikt', body: 'Tro, bön, planer för äktenskap och dina egna ord.' },
      {
        title: 'Upptäck',
        body: 'Människor som delar dina värderingar, med matchningsgrad. Kort eller karta, med filter för ålder, stad och tro.',
      },
      {
        title: 'Ömsesidigt intresse öppnar samtalet',
        body: 'Så länge ni inte gillat varandra förblir samtalet låst. Med dina frågor före första meddelandet.',
      },
      { title: 'Familjen är med dig', body: 'En mahram i samtalet, när du vill.' },
    ],
  },

  questions: {
    kicker: 'Frågor före samtalet',
    title: 'Fråga om det som betyder något, före första meddelandet.',
    body:
      'Ställ upp till tre frågor. Efter matchningen svarar den andra personen först, och du läser och avgör om samtalet öppnas. Inga tre veckors meddelanden bara för att upptäcka att ni inte är överens om det grundläggande.',
    flow: ['Du ställer frågorna', 'Den andra personen svarar', 'Du avgör'],
    topics: ['Bön', 'Hijab', 'Flytt', 'Barn'],
    topicsLabel: 'Oftast frågas det om',
    imageAlt: 'Frågor före samtalet: tre svar och beslutet om samtalet ska öppnas.',
  },

  mockQuestions: {
    title: 'Emir har svarat på dina frågor',
    qa: [
      { q: 'Ber du regelbundet?', a: 'Ja, alla fem. Fajr är tyngst för mig, men jag försöker.' },
      { q: 'Var ser du dig själv efter nikah?', a: 'I Sarajevo, men jag är öppen för att tala om flytt.' },
      { q: 'Hur mycket betyder familjen i dina beslut?', a: 'Mycket. Jag skulle vilja att familjerna träffas tidigt.' },
    ],
    no: 'Jag gillar inte',
    yes: 'Jag gillar',
  },

  profile: {
    kicker: 'Profil',
    title: 'Lär känna hur hen tänker, inte bara hur hen ser ut.',
    lead:
      'Utöver bilder och beskrivning bär profilen det man talar om före nikah. Mindre gissningar, mindre förlorad tid, snabbare fram till ett ”ja” eller ”nej”.',
    fields: [
      { k: 'Förhållande till tron', v: ['Praktiserande', 'Jag försöker', 'Praktiserar inte just nu'] },
      { k: 'Bön', v: ['Regelbundet', 'Ibland', 'Sällan'] },
      { k: 'Madhhab', v: ['Hanafi', 'Shafi’i', 'Maliki', 'Hanbali', 'Spelar ingen roll'] },
      { k: 'Hijab', v: ['Jag bär', 'Jag bär inte', 'Jag har för avsikt'] },
      { k: 'Tidsram för äktenskap', v: ['Omgående', 'Inom ett år', '1–2 år', 'Ingen brådska'] },
      { k: 'Flytt', v: ['Beredd', 'Går inte', 'Öppen för att tala om det'] },
      { k: 'Barn', v: ['Jag vill', 'Jag vill inte', 'Har redan', 'Osäker'] },
    ],
    more: 'Och mer: rökning, utbildning, yrke, modersmål, längd och intressen.',
    promptsTitle: 'Med dina ord',
    prompts: ['Tro i ett äktenskap betyder…', 'Vad söker du hos en partner?', 'Hur tillbringar du helgen?'],
    situationsTitle: 'Situationer',
    situationsBody:
      'Svara på verkliga scenarier inom sju områden. Andra ser hur du tänker, inte bara hur du ser ut.',
    situations: ['Äktenskap', 'Kommunikation', 'Lösa konflikter', 'Familj', 'Tro', 'Ekonomi', 'Föräldraskap'],
    matchTitle: 'Matchningsgrad',
    matchBody: 'På varje kort: gemensamma intressen, förhållande till tron och avsikt.',
    imageAlt: 'Profildetaljer i Niyyah: tro, planer för äktenskap och svar på situationer.',
  },

  mockDetails: {
    title: 'Om Emir',
    rows: [
      { k: 'Äktenskap', v: 'Inom ett år' },
      { k: 'Flytt', v: 'Öppen för att tala om det' },
      { k: 'Barn', v: 'Jag vill' },
      { k: 'Yrke', v: 'Ingenjör' },
    ],
    situation: 'Situation · Lösa konflikter',
    question: 'Ni grälade om familjen. Vad gör du först?',
    answer: 'Jag väntar tills vi båda har lugnat oss, och frågar sedan hur hon ser på det. Först därefter säger jag min del.',
  },

  safety: {
    kicker: 'Säkerhet och integritet',
    title: 'Din integritet är inte produkten.',
    lead: 'Vi säljer aldrig dina uppgifter. Säkerheten är byggd in i appen, inte tillagd som ett val.',
    items: [
      {
        icon: 'pin',
        title: 'Aldrig din exakta plats',
        body: 'Kartan visar bara ett ungefärligt område, och bara så länge du håller det påslaget. Slår du av försvinner du från kartan.',
      },
      {
        icon: 'photo',
        title: 'Granskning av foton',
        body: 'Ett tydligt ansikte, en person, inget suddigt eller övertäckt. Dolda uppgifter i bilden, som GPS-plats, tar systemet bort.',
      },
      {
        icon: 'badge',
        title: 'Verifierad-märket',
        body: 'En kort kontroll att du är personen på bilderna. Telefonnummer eller e-post bekräftar du innan du går in i Upptäck.',
      },
      {
        icon: 'people',
        title: 'Riktiga moderatorer',
        body: 'Anmälningar läses av ett eget modereringsteam som kan stänga av och blockera profiler.',
      },
      {
        icon: 'block',
        title: 'Blockering gäller i båda riktningar',
        body: 'Blockerar du någon försvinner ni för varandra i appen.',
      },
      {
        icon: 'pause',
        title: 'Pausa Upptäck',
        body: 'Göm profilen utan att radera den. Matchningar och samtal finns kvar.',
      },
      {
        icon: 'finger',
        title: 'Lås upp med finger eller ansikte',
        body: 'Ditt fingeravtryck lämnar aldrig din enhet.',
      },
    ],
    ayahRef: 'al-Qiyama 75:4',
    ayahNote:
      'På upplåsningsskärmen står en vers ur surah al-Qiyama (75:3–4), om Allah som förmår återställa till och med fingertopparna.',
  },

  community: {
    kicker: 'Gemenskap',
    title: 'En plats att lära om äktenskap före äktenskapet.',
    lead:
      'Du frågar, läser andras erfarenheter, lär av varandra. Varje inlägg granskas av en moderator innan det syns, och det finns inga kommentarsfält man inte skulle vilja sätta sitt namn under.',
    items: [
      { title: 'Fråga bröderna, Fråga systrarna', body: 'Separata rum som bara ett kön ser.' },
      {
        title: 'Anonymt, när det behövs',
        body: 'Vissa frågor är svåra att ställa under eget namn. Publicera som ”Anonym syster” eller ”Anonym broder”.',
      },
      { title: 'Dagens fråga', body: 'Varje dag en fråga om äktenskap och värderingar, på startskärmen.' },
      {
        title: 'Berättelser utan offentliga kommentarer',
        body: '24 timmar eller en enda visning. För hela gemenskapen eller bara för dina matchningar.',
      },
    ],
    reactionsLabel: 'Reaktioner som belönar nytta, inte ego',
    reactions: ['Användbart', 'Klokt sagt', 'Inspirerande', 'Genomtänkt'],
    imageAlt: 'Niyyahs gemenskap: en anonym fråga i rummet Fråga systrarna.',
  },

  mockPost: {
    space: 'Fråga systrarna',
    author: 'Anonym syster',
    category: 'Äktenskap',
    text: 'Hur berättade ni för era föräldrar att ni sökte en livspartner via en app? Hur reagerade de?',
    reviewed: 'Granskat av en moderator',
  },

  languages: {
    title: 'Sidan på ditt språk, appen på nio språk.',
    lead:
      'Den här sidan läser du på svenska. Appen själv, e-posten och aviseringarna finns på nio språk: bosniska, engelska, tyska, turkiska, arabiska, indonesiska, urdu, malajiska och franska. Arabiska och urdu läses från höger till vänster. Vare sig du är i Malmö, Göteborg, Sarajevo eller Istanbul.',
  },


  pricing: {
    kicker: 'Gratis och mynt',
    title: 'Det som skyddar dig är gratis.',
    lead: 'Mahram, frågor före samtalet, den låsta chatten och modereringen är öppna för alla. Vi tar inte betalt för säkerhet. Mynt gör det bara snabbare — och det finns ingen prenumeration.',
    freeTitle: 'Gratis, för alla',
    free: [
      'En profil och 30 profiler om dagen i Upptäck',
      '20 gillanden om dagen',
      '1 introduktionsmeddelande om dagen',
      'Matchningar och obegränsat samtal med dem',
      'En mahram i samtalet',
      'Frågor före samtalet',
      'Gemenskap, berättelser och Dagens fråga',
      'Gratis mynt varje dag',
    ],
    premiumTitle: 'Mynt, när du vill mer',
    premium: [
      'Se vem som gillat dig',
      'Ett supergillande som öppnar samtalet direkt',
      'Extra introduktionsmeddelanden',
      'Fler gillanden och profiler för i dag',
      'Ta tillbaka en profil du hoppade över',
      'Svara på berättelser i gemenskapen',
      'Boost: din profil först i Upptäck',
    ],
    extra:
      'Du får också mynt gratis: varje dag, för sju dagar i rad, för en ifylld profil och för vänner du bjuder in. Du köper dem bara om du vill, som engångsköp i App Store eller Google Play — ingen prenumeration och ingen automatisk förnyelse.',
  },


  about: {
    kicker: 'Om oss',
    quote:
      'Niyyah finns för människor som söker en livspartner, inte ett tidsfördriv. Allt här är byggt kring det enda syftet: profiler som säger något verkligt, samtal där familjen kan vara närvarande, och gränser som håller utan att någon behöver vakta dem.',
    small:
      'Vi är ett litet team som bygger för sin egen gemenskap, och vi vill hellre ha en tyst och pålitlig app än en högljudd och full.',
    made: 'Gjord med omsorg i Bosnien och Hercegovina.',
  },

  faq: {
    title: 'Frågor vi ofta får',
    items: [
      {
        q: 'Vad skiljer Niyyah från andra dejtingappar?',
        a: 'Niyyah är byggd för äktenskap, inte för svepande. Upptäck visar bara motsatt kön, meddelanden öppnas bara när ni båda gillat varandra, och en syster kan ta in en mahram i sina samtal. Profilen bär det som betyder något före nikah: bön, madhhab, planer för äktenskap, barn och flytt.',
      },
      {
        q: 'Vad är en mahram och hur lägger jag till en?',
        a: 'En mahram är en manlig familjemedlem som äktenskap är permanent förbjudet med, till exempel far, bror, farbror eller morbror. Du kan även bjuda in en målsman. I inställningarna slår du på ”Kräv mahram” och bjuder in upp till tre personer. Inbjudan kommer med e-post och mahram tar emot den i appen. I mahram-portalen ser hen sedan dina samtal och matchningar, men kan inte skriva. Funktionen finns på kvinnliga profiler.',
      },
      {
        q: 'Är Niyyah halal?',
        a: 'Vi utfärdar inga fatwor och hävdar inte att någon institution godkänt oss. Vad vi kan visa är gränserna som är byggda in i appen: du ser bara motsatt kön, ett samtal öppnas bara vid ömsesidigt intresse, en mahram kan läsa samtalen, och moderatorer går igenom gemenskapen. Med vilken avsikt du använder den är upp till dig. Är du osäker, fråga en imam du litar på.',
      },
      {
        q: 'Vad är frågor före samtalet?',
        a: 'Ett val där du ställer upp till tre egna frågor. Efter matchningen svarar den andra personen på dem först. Du läser svaren och avgör: ”Jag gillar” öppnar samtalet, ”Jag gillar inte” öppnar det inte.',
      },
      {
        q: 'Vem kan se min plats?',
        a: 'Ingen ser din exakta plats. På kartan i Upptäck syns du bara som ett ungefärligt område, och bara om du slår på det. Slår du av försvinner du från kartan. Dolda uppgifter i foton, som GPS-plats, tas bort vid uppladdningen.',
      },
      {
        q: 'Hur skyddar ni mot falska profiler?',
        a: 'Verifierad-märket betyder att personen klarat en ansiktskontroll: ett foto av hen taget i stunden jämfördes med bilderna på profilen. Anmälningar läses av riktiga moderatorer som kan stänga av eller spärra en profil, och blockering gäller i båda riktningar. Ett spärrat konto kan inte bara komma tillbaka med en ny e-postadress.',
      },
      {
        q: 'Vad är gratis, och vad kostar mynt?',
        a: 'Allt som skyddar dig är gratis: mahram, frågor före samtalet, den låsta chatten och modereringen, plus 20 gillanden och ett introduktionsmeddelande om dagen och obegränsat samtal med dina matchningar. Med mynt kan du se vem som gillat dig, skicka ett supergillande eller ett extra introduktionsmeddelande, få fler profiler och gillanden för dagen och svara på berättelser. Du får mynt gratis varje dag, och du kan också köpa dem som engångsköp. Det finns ingen prenumeration, så det finns inget att säga upp.',
      },
      {
        q: 'Kan jag gömma profilen en tid?',
        a: 'Ja. Pausa Upptäck och profilen försvinner från Upptäck utan att raderas. Matchningar och samtal finns kvar, och du tar tillbaka profilen när du vill.',
      },
      {
        q: 'Vilka språk finns appen på?',
        a: 'Nio: bosniska, engelska, tyska, turkiska, arabiska, indonesiska, urdu, malajiska och franska. Kroatiska och serbiska enheter får bosniska automatiskt.',
      },
    ],
  },

  final: {
    title: 'Börja med avsikt.',
    leadLaunched: 'Gör en profil och möt människor som på allvar vill bygga något verkligt.',
    leadWaitlist:
      'Lämna din e-post och vi hör av oss så fort Niyyah startar. Gör sedan en profil och möt människor som på allvar vill bygga något verkligt.',
  },

  consent: {
    title: 'Mätning av annonser',
    more: 'Vad detta betyder',
    details:
      'En pixel från Facebook räknar hur många vår annons för hit och vem som anmäler sig. Din e-postadress skickar vi aldrig. Om du avböjer laddas ingenting alls från Facebook.',
    close: 'Stäng',
    body:
      'Vi mäter hur många som våra annonser för hit. Inget annat, och din e-postadress går aldrig vidare.',
    accept: 'Jag godkänner',
    decline: 'Nej tack',
    label: 'Mätning av annonser',
    change: 'Val om mätning',
  },

  footer: {
    tagline: 'Äktenskap, sökt med avsikt.',
    made: 'Gjord med omsorg i Bosnien och Hercegovina.',
    rights: 'Niyyah',
    language: 'Språk',
  },
}
