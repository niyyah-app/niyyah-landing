import type { Copy } from './bs'

export const nl: Copy = {
  meta: {
    title: 'Niyyah — De halal app om een huwelijkspartner te vinden',
    description:
      'Niyyah is een app voor moslims die op zoek zijn naar een huwelijk. Berichten gaan pas open bij wederzijdse interesse, een mahram kan meelezen in het gesprek, en de gemeenschap wordt gemodereerd. Gratis, in negen talen.',
    ogAlt: 'Niyyah: een huwelijk, gezocht met intentie.',
  },

  nav: {
    skip: 'Naar de inhoud',
    label: 'Hoofdnavigatie',
    home: 'Niyyah, startpagina',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Hoe het werkt' },
      { href: '#sigurnost', label: 'Veiligheid' },
      { href: '#preporuke', label: 'Ervaringen' },
      { href: '#pitanja', label: 'Vragen' },
    ],
    language: 'Taal',
    menu: 'Menu',
    close: 'Menu sluiten',
  },

  cta: {
    download: 'Niyyah downloaden',
    waitlist: 'Laat weten wanneer Niyyah begint',
    waitlistShort: 'Laat het weten',
    emailLabel: 'Je e-mailadres',
    emailPlaceholder: 'naam@voorbeeld.com',
    sending: 'Versturen',
    success: 'Dank je. We schrijven zodra Niyyah begint, in shā Allāh.',
    invalid: 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.com.',
    error: 'Het is niet gelukt. Controleer je verbinding en probeer het nog eens.',
    tooMany: 'Te veel pogingen. Probeer het over een paar minuten opnieuw.',
    notConnected: 'De wachtlijst is nog niet open. Kom binnenkort terug.',
    privacy: 'We gebruiken je adres alleen om je te laten weten wanneer Niyyah begint en zodat er een welkomstcadeau op je wacht. We verkopen het niet en geven het aan niemand voor reclame.',
    soon: 'Binnenkort in de App Store en Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Download in de',
    availableOn: 'Verkrijgbaar via',
    eyebrow: 'HALAL APP VOOR HET HUWELIJK',
    waiting: '{count} mensen wachten al op Niyyah',
  },

  hero: {
    countdown: 'Niyyah komt over',
    countdownUnits: ['dagen', 'uur', 'minuten', 'seconden'],
    title: 'Een huwelijk, gezocht met intentie.',
    lead:
      'Niyyah is een app voor moslims die serieus een huwelijkspartner zoeken. Berichten gaan pas open bij wederzijdse interesse, een mahram kan meelezen in het gesprek, en de grenzen worden bewaakt door de app — niet door jou.',
    secondary: 'Hoe de mahram werkt',
    micro: 'Gratis. De app is er in negen talen.',
    imageAlt: 'Een profielkaart in Niyyah: gebed, madhhab, huwelijksplannen en matchpercentage.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Geverifieerd',
    match: 'overeenkomst',
    rows: [
      { k: 'Geloof', v: 'Praktiserend' },
      { k: 'Gebed', v: 'Regelmatig' },
      { k: 'Madhhab', v: 'Hanafi' },
      { k: 'Huwelijk', v: 'Binnen een jaar' },
    ],
    prompt: 'Geloof in een huwelijk betekent…',
    promptAnswer: 'dat we elkaar herinneren aan wat belangrijk is, ook als het zwaar is.',
    pass: 'Volgende',
    like: 'Dit bevalt me',
  },

  problem: {
    title: 'Datingapps zijn niet gemaakt voor het huwelijk.',
    body: [
      'Ze zijn gemaakt om je te laten blijven scrollen. Eindeloze kaarten, mensen zonder duidelijke intentie, gesprekken die je je ouders nooit zou kunnen laten zien.',
      'Kennismaken via familie is daarentegen langzaam, de kring is klein en de druk groot. Tussen die twee werelden was er niets voor ons.',
    ],
    pains: [
      'Je weet niet wie het serieus meent en wie er alleen is om te kijken.',
      'Zusters zijn bang voor lastigvallen, nepprofielen en er helemaal alleen voor te staan.',
      'Vertaalde apps begrijpen onze taal, onze madhhab, onze gewoonten en de diaspora niet.',
    ],
    eyebrow: 'HOE HET WERKT',
    painsLabel: 'Klinkt het bekend?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Andere apps meten succes af aan de tijd die je erin doorbrengt. Wij meten het af aan de nikah waarna je ons niet meer nodig hebt.',
  },

  pillars: {
    title: 'Gebouwd voor het huwelijk, vanaf het eerste scherm.',
    items: [
      {
        word: 'Intentie',
        title: 'Eerst de intentie',
        body: 'Elk profiel zegt wat iemand zoekt en wanneer. Termijn voor het huwelijk, kinderen, verhuizen: je weet het voor het eerste bericht.',
      },
      {
        word: 'Familie',
        title: 'Met de familie, niet alleen',
        body: 'Een zuster kan haar vader, broer of voogd uitnodigen om in haar gesprekken mee te lezen. Niets blijft verborgen voor wie van belang is.',
      },
      {
        word: 'Grenzen',
        title: 'Halal door opzet',
        body: 'Alleen het andere geslacht. Berichten pas bij wederzijdse interesse. Een gemeenschap die moderatoren nakijken. De grenzen worden bewaakt door de app; jij hoeft ze niet te bewaken.',
      },
    ],
  },

  mahrem: {
    kicker: 'Mahram-portaal',
    title: 'Niets verborgen voor wie van belang is.',
    body:
      'Zet „Mahram vereisen” aan en nodig tot drie mensen uit die je vertrouwt: je vader, broer, oom of voogd. Zij zien je gesprekken in het mahram-portaal, maar kunnen niet schrijven en niemand leren kennen. Ze zijn er simpelweg bij, zoals ze er ook in persoon bij zouden zijn.',
    steps: [
      { title: 'Zet „Mahram vereisen” aan', body: 'Eén schakelaar in de instellingen.' },
      { title: 'Nodig tot drie mahrams uit', body: 'De uitnodiging komt per e-mail, en de mahram aanvaardt die in de app.' },
      {
        title: 'Zij lezen, jij praat',
        body: 'De mahram ziet gesprekken en overeenkomsten. Hij kan niet schrijven vanuit het portaal en gebruikt geen functies om iemand te leren kennen.',
      },
    ],
    who: [
      { label: 'Voor haar', body: 'Je staat er niet alleen voor. De familie is erbij, zonder over je schouder te staan.' },
      { label: 'Voor de familie', body: 'U weet met wie ze praat en hoe. Zonder geheimen.' },
      { label: 'Voor hem', body: 'Een duidelijk teken dat ze het serieus meent en dat de familie erbij betrokken is.' },
    ],
    parentsTitle: 'Ouders, dit is voor u.',
    parentsBody:
      'We weten dat „datingapp” niet klinkt als iets voor uw dochter of zuster. In Niyyah kunt u in haar gesprekken meelezen en zien met wie en hoe ze schrijft, zonder zelf iets te schrijven. Een gesprek kan niet eens opengaan voordat beide kanten interesse hebben laten zien, en dit alles is gratis.',
    share: 'Stuur haar deze pagina',
    shareDone: 'Link gekopieerd',
    shareText: 'Niyyah: de app voor het huwelijk waarin de familie in het gesprek kan meelezen.',
    imageAlt: 'Het mahram-portaal: een vader leest het gesprek van zijn dochter, zonder te kunnen schrijven.',
  },

  mockPortal: {
    title: 'Mahram-portaal',
    readOnly: 'Alleen lezen',
    watching: 'Je volgt: Amina',
    with: 'Gesprek met: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaikum. Dank dat je het gesprek hebt geopend.' },
      { from: 'her', text: 'Wa alaikum assalam. Je schreef dat je wil dat de families elkaar vroeg ontmoeten?' },
      { from: 'him', text: 'Ja. Mijn ouders zouden de jouwe graag ontmoeten voor er iets serieus gebeurt.' },
    ],
    locked: 'Vanuit het portaal kan niet geschreven worden',
  },

  how: {
    kicker: 'Hoe het werkt',
    title: 'Van profiel tot gesprek, in vier stappen.',
    steps: [
      { title: 'Maak een profiel met intentie', body: 'Geloof, gebed, huwelijksplannen en je eigen woorden.' },
      {
        title: 'Ontdekken',
        body: 'Mensen die je waarden delen, met een matchpercentage. Kaarten of een landkaart, met filters voor leeftijd, stad en geloof.',
      },
      {
        title: 'Wederzijdse interesse opent het gesprek',
        body: 'Zolang jullie elkaar niet beiden leuk vinden, blijft het gesprek op slot. Met jouw vragen voor het eerste bericht.',
      },
      { title: 'De familie is bij je', body: 'Een mahram in het gesprek, wanneer je dat wil.' },
    ],
  },

  questions: {
    kicker: 'Vragen voor het gesprek',
    title: 'Vraag wat van belang is, voor het eerste bericht.',
    body:
      'Stel tot drie vragen. Na de overeenkomst antwoordt de ander eerst, en jij leest en beslist of het gesprek opengaat. Geen drie weken berichten om daarna te ontdekken dat jullie het over het wezenlijke niet eens zijn.',
    flow: ['Jij stelt de vragen', 'De ander antwoordt', 'Jij beslist'],
    topics: ['Gebed', 'Hijab', 'Verhuizen', 'Kinderen'],
    topicsLabel: 'Er wordt het vaakst gevraagd naar',
    imageAlt: 'Vragen voor het gesprek: drie antwoorden en de keuze of het gesprek opengaat.',
  },

  mockQuestions: {
    title: 'Emir heeft je vragen beantwoord',
    qa: [
      { q: 'Bid je regelmatig?', a: 'Ja, alle vijf. Fadjr is voor mij het zwaarst, maar ik doe mijn best.' },
      { q: 'Waar zie je jezelf na de nikah?', a: 'In Sarajevo, maar ik praat graag over verhuizen.' },
      { q: 'Hoeveel weegt familie in je beslissingen?', a: 'Veel. Ik zou willen dat de families elkaar vroeg ontmoeten.' },
    ],
    no: 'Dit bevalt me niet',
    yes: 'Dit bevalt me',
  },

  profile: {
    kicker: 'Profiel',
    title: 'Leer kennen hoe iemand denkt, niet alleen hoe die eruitziet.',
    lead:
      'Naast foto’s en een beschrijving draagt het profiel waarover men praat voor de nikah. Minder gissen, minder verloren tijd, sneller bij een „ja” of „nee”.',
    fields: [
      { k: 'Verhouding met het geloof', v: ['Praktiserend', 'Ik doe mijn best', 'Op dit moment niet praktiserend'] },
      { k: 'Gebed', v: ['Regelmatig', 'Soms', 'Zelden'] },
      { k: 'Madhhab', v: ['Hanafi', 'Shafi’i', 'Maliki', 'Hanbali', 'Maakt niet uit'] },
      { k: 'Hijab', v: ['Ik draag die', 'Ik draag die niet', 'Ik ben het van plan'] },
      { k: 'Termijn voor het huwelijk', v: ['Direct', 'Binnen een jaar', '1–2 jaar', 'Geen haast'] },
      { k: 'Verhuizen', v: ['Bereid', 'Niet mogelijk', 'Open om erover te praten'] },
      { k: 'Kinderen', v: ['Ik wil ze', 'Ik wil ze niet', 'Ik heb er al', 'Weet het niet zeker'] },
    ],
    more: 'En verder: roken, opleiding, beroep, moedertaal, lengte en interesses.',
    promptsTitle: 'In je eigen woorden',
    prompts: ['Geloof in een huwelijk betekent…', 'Wat zoek je in een partner?', 'Hoe breng je je weekend door?'],
    situationsTitle: 'Situaties',
    situationsBody:
      'Antwoord op echte situaties in zeven gebieden. Anderen zien hoe je denkt, niet alleen hoe je eruitziet.',
    situations: ['Huwelijk', 'Communicatie', 'Conflicten oplossen', 'Familie', 'Geloof', 'Geld', 'Opvoeding'],
    matchTitle: 'Matchpercentage',
    matchBody: 'Op elke kaart: gedeelde interesses, verhouding met het geloof en intentie.',
    imageAlt: 'Profielgegevens in Niyyah: geloof, huwelijksplannen en antwoorden op situaties.',
  },

  mockDetails: {
    title: 'Over Emir',
    rows: [
      { k: 'Huwelijk', v: 'Binnen een jaar' },
      { k: 'Verhuizen', v: 'Open om erover te praten' },
      { k: 'Kinderen', v: 'Ik wil ze' },
      { k: 'Beroep', v: 'Ingenieur' },
    ],
    situation: 'Situatie · Conflicten oplossen',
    question: 'Jullie hadden ruzie over de familie. Wat doe je eerst?',
    answer: 'Ik wacht tot we allebei gekalmeerd zijn en vraag dan hoe zij het ziet. Pas daarna zeg ik wat ik ervan vind.',
  },

  safety: {
    kicker: 'Veiligheid en privacy',
    title: 'Jouw privacy is niet het product.',
    lead: 'We verkopen je gegevens nooit. Veiligheid is in de app gebouwd, niet als optie toegevoegd.',
    items: [
      {
        icon: 'pin',
        title: 'Nooit je precieze locatie',
        body: 'De kaart laat alleen een ruwe omgeving zien, en dan nog alleen zolang je het aanzet. Zet je het uit, dan verdwijn je van de kaart.',
      },
      {
        icon: 'photo',
        title: 'Controle van foto’s',
        body: 'Wazige en heel kleine foto’s worden geweigerd, en verborgen gegevens in de afbeelding, zoals je gps-locatie, haalt het systeem weg. Iemand van ons team vergelijkt je verificatieselfie met je foto’s.',
      },
      {
        icon: 'badge',
        title: 'Geverifieerd-label',
        body: 'Een korte controle dat jij de persoon op de foto’s bent. Telefoonnummer of e-mail bevestig je voor je Ontdekken binnengaat.',
      },
      {
        icon: 'people',
        title: 'Echte moderatoren',
        body: 'Meldingen worden gelezen door een eigen moderatieteam dat profielen kan schorsen en verbannen.',
      },
      {
        icon: 'block',
        title: 'Blokkeren werkt in beide richtingen',
        body: 'Blokkeer je iemand, dan verdwijnen jullie voor elkaar in de app.',
      },
      {
        icon: 'pause',
        title: 'Ontdekken pauzeren',
        body: 'Verberg je profiel zonder het te verwijderen. Overeenkomsten en gesprekken blijven.',
      },
      {
        icon: 'finger',
        title: 'Ontgrendelen met vinger of gezicht',
        body: 'Je vingerafdruk verlaat je toestel nooit.',
      },
    ],
    ayahRef: 'Al-Qiyama 75:4',
    ayahNote:
      'Op het ontgrendelscherm staat een vers uit soera Al-Qiyama (75:3–4), over Allah die zelfs de toppen van onze vingers weer kan samenstellen.',
  },

  community: {
    kicker: 'Gemeenschap',
    title: 'Een plek om over het huwelijk te leren voor het huwelijk.',
    lead:
      'Je vraagt, je leest ervaringen, je leert van anderen. Elke bijdrage gaat langs een moderator voor die verschijnt, en er zijn geen reacties waaronder niemand zijn naam zou willen zetten.',
    items: [
      { title: 'Vraag de broeders, Vraag de zusters', body: 'Aparte ruimtes die maar één geslacht ziet.' },
      {
        title: 'Anoniem, wanneer het moet',
        body: 'Sommige vragen stel je moeilijk onder je eigen naam. Plaats als „Anonieme zuster” of „Anonieme broeder”.',
      },
      { title: 'Vraag van de dag', body: 'Elke dag één vraag over het huwelijk en waarden, op het startscherm.' },
      {
        title: 'Verhalen zonder openbare reacties',
        body: '24 uur of één keer bekijken. Voor de hele gemeenschap of alleen voor je overeenkomsten.',
      },
    ],
    reactionsLabel: 'Reacties die nut belonen, geen ego',
    reactions: ['Nuttig', 'Dat klopt', 'Inspirerend', 'Doordacht'],
    imageAlt: 'De gemeenschap van Niyyah: een anonieme vraag in de ruimte Vraag de zusters.',
  },

  mockPost: {
    space: 'Vraag de zusters',
    author: 'Anonieme zuster',
    category: 'Huwelijk',
    text: 'Hoe hebben jullie je ouders verteld dat jullie via een app een huwelijkspartner zochten? Hoe reageerden ze?',
    reviewed: 'Nagekeken door een moderator',
  },

  languages: {
    title: 'De pagina in jouw taal, de app in negen talen.',
    lead:
      'Deze pagina lees je in het Nederlands. De app zelf, de e-mails en de meldingen zijn er in negen talen: Bosnisch, Engels, Duits, Turks, Arabisch, Indonesisch, Urdu, Maleis en Frans. Arabisch en Urdu lopen van rechts naar links. Of je in Amsterdam, Rotterdam, Sarajevo of Istanbul bent.',
  },


  pricing: {
    kicker: 'Gratis en munten',
    title: 'Wat je beschermt is gratis.',
    lead: 'De mahram, vragen voor het gesprek, de gesloten chat en de moderatie zijn er voor iedereen. Voor veiligheid rekenen we niets. Munten versnellen het alleen — en er is geen abonnement.',
    freeTitle: 'Gratis, voor iedereen',
    free: [
      'Een profiel en 30 profielen per dag in Ontdekken',
      '20 likes per dag',
      'Zie wie je geliked heeft: 1 persoon per dag',
      'Alle berichten lezen die je krijgt',
      'Overeenkomsten en onbeperkt gesprek met hen',
      'Een mahram in het gesprek',
      'Vragen voor het gesprek',
      'Gemeenschap, verhalen en Vraag van de dag',
      'Elke dag gratis munten',
    ],
    premiumTitle: 'Munten, als je meer wil',
    premium: [
      'Zie iedereen die je geliked heeft',
      'Superlike: je like bovenaan, met je naam en foto',
      'Directe berichten (een like met een bericht)',
      'Meer likes en profielen voor vandaag',
      'Haal een overgeslagen profiel terug',
      'Reageren op verhalen in de gemeenschap',
      'Boost: je profiel vooraan in Ontdekken',
    ],
    extra:
      'Munten krijg je ook gratis: elke dag, voor zeven dagen op rij, voor een volledig profiel en voor vrienden die je uitnodigt. Je koopt ze alleen als je wil, eenmalig, in de App Store of Google Play — zonder abonnement en zonder automatische verlenging.',
  },


  about: {
    kicker: 'Over ons',
    quote:
      'Niyyah bestaat voor mensen die een huwelijkspartner zoeken, geen tijdverdrijf. Alles hier is om dat ene doel gebouwd: profielen die iets echt zeggen, gesprekken waarin de familie aanwezig kan zijn, en grenzen die houden zonder dat iemand ze hoeft te bewaken.',
    small:
      'We zijn een klein team dat voor zijn eigen gemeenschap bouwt, en we hebben liever een stille, betrouwbare app dan een luide, drukke.',
    made: 'Met zorg gemaakt in Bosnië en Herzegovina.',
  },

  faq: {
    title: 'Vragen die ons vaak gesteld worden',
    items: [
      {
        q: 'Waarin verschilt Niyyah van andere datingapps?',
        a: 'Niyyah is gebouwd voor het huwelijk, niet om te scrollen. Ontdekken laat alleen het andere geslacht zien, berichten gaan pas open als jullie elkaar beiden geliked hebben, en een zuster kan een mahram in haar gesprekken betrekken. Het profiel draagt wat van belang is voor de nikah: gebed, madhhab, huwelijksplannen, kinderen en verhuizen.',
      },
      {
        q: 'Wat is een mahram en hoe voeg ik die toe?',
        a: 'Een mahram is een mannelijk familielid met wie een huwelijk voorgoed verboden is, bijvoorbeeld de vader, broer of oom. Je kunt ook een voogd uitnodigen. Zet in de instellingen „Mahram vereisen” aan en nodig tot drie personen uit. De uitnodiging komt per e-mail en de mahram aanvaardt die in de app. In het mahram-portaal ziet hij dan je gesprekken en overeenkomsten, maar kan niet schrijven. De functie is beschikbaar op profielen van vrouwen.',
      },
      {
        q: 'Is Niyyah halal?',
        a: 'We geven geen fatwa’s en beweren niet dat een instelling ons heeft goedgekeurd. Wat we kunnen laten zien zijn de grenzen die in de app zijn gebouwd: je ziet alleen het andere geslacht, een gesprek gaat alleen open bij wederzijdse interesse, een mahram kan gesprekken lezen, en moderatoren kijken de gemeenschap na. Met welke intentie je de app gebruikt blijft aan jou. Twijfel je, vraag een imam die je vertrouwt.',
      },
      {
        q: 'Wat zijn vragen voor het gesprek?',
        a: 'Een optie waarbij je tot drie eigen vragen stelt. Na de overeenkomst antwoordt de ander daar eerst op. Jij leest de antwoorden en beslist: „Dit bevalt me” opent het gesprek, „Dit bevalt me niet” opent het niet.',
      },
      {
        q: 'Wie kan mijn locatie zien?',
        a: 'Niemand ziet je precieze locatie. Op de kaart in Ontdekken verschijn je alleen als een ruwe omgeving, en dan nog alleen als je dat aanzet. Zet je het uit, dan verdwijn je van de kaart. Verborgen gegevens in foto’s, zoals de GPS-locatie, worden bij het uploaden verwijderd.',
      },
      {
        q: 'Hoe beschermen jullie tegen nepprofielen?',
        a: 'Het Geverifieerd-label betekent dat iemand een gezichtscontrole heeft doorstaan: een live foto van hem of haar is vergeleken met de foto’s op het profiel. Meldingen worden gelezen door echte moderatoren die een profiel kunnen schorsen of verbannen, en blokkeren werkt in beide richtingen. Een verbannen account kan niet zomaar terugkomen met een nieuw e-mailadres.',
      },
      {
        q: 'Wat is gratis, en wat kost munten?',
        a: 'Alles wat je beschermt is gratis: de mahram, vragen voor het gesprek, de gesloten chat en de moderatie, plus 30 profielen en 20 likes per dag, elke dag één persoon die je geliked heeft, alle berichten lezen die je krijgt en onbeperkt gesprek met je overeenkomsten. Met munten zie je iedereen die je geliked heeft, stuur je een superlike (je like bovenaan, uitgelicht, met je naam en foto) of een direct bericht (een like met een bericht, dat de ander gratis leest), krijg je meer profielen en likes voor die dag en reageer je op verhalen. Een gesprek gaat pas open als jullie elkaar allebei liken. Munten krijg je elke dag gratis, en je kunt ze ook eenmalig kopen. Er is geen abonnement, dus er valt ook niets op te zeggen.',
      },
      {
        q: 'Kan ik mijn profiel tijdelijk verbergen?',
        a: 'Ja. Pauzeer Ontdekken en je profiel verdwijnt uit Ontdekken zonder verwijderd te worden. Overeenkomsten en gesprekken blijven, en je zet je profiel terug wanneer je wil.',
      },
      {
        q: 'In welke talen is de app?',
        a: 'In negen: Bosnisch, Engels, Duits, Turks, Arabisch, Indonesisch, Urdu, Maleis en Frans. Kroatische en Servische toestellen krijgen automatisch Bosnisch.',
      },
    ],
  },

  final: {
    title: 'Begin met een intentie.',
    leadLaunched: 'Maak een profiel en ontmoet mensen die serieus iets echt willen opbouwen.',
    leadWaitlist:
      'Laat je e-mail achter en we laten het weten zodra Niyyah begint. Maak dan een profiel en ontmoet mensen die serieus iets echt willen opbouwen.',
  },

  consent: {
    title: 'Meting van advertenties',
    more: 'Wat dit betekent',
    details:
      'Een pixel van Facebook telt hoeveel mensen onze advertentie hierheen brengt en wie zich aanmeldt. Je e-mailadres sturen we nooit mee. Weiger je, dan wordt er niets van Facebook geladen.',
    close: 'Sluiten',
    body:
      'We meten hoeveel mensen onze advertenties hierheen brengen. Niets anders, en je e-mailadres gaat nooit verder.',
    accept: 'Akkoord',
    decline: 'Nee, bedankt',
    label: 'Meting van advertenties',
    change: 'Keuze over meting',
  },

  footer: {
    tagline: 'Een huwelijk, gezocht met intentie.',
    made: 'Met zorg gemaakt in Bosnië en Herzegovina.',
    language: 'Taal',
  },
}
