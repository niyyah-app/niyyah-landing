import type { Copy } from './bs'

export const sq: Copy = {
  meta: {
    title: 'Niyyah — Aplikacioni hallall për të gjetur bashkëshortin',
    description:
      'Niyyah është një aplikacion për muslimanët që kërkojnë martesë. Mesazhet hapen vetëm me interes të dyanshëm, mahremi mund të jetë në bisedë, dhe komuniteti moderohet. Falas, në nëntë gjuhë.',
    ogAlt: 'Niyyah: Martesa, e kërkuar me nijet.',
  },

  nav: {
    skip: 'Kalo te përmbajtja',
    label: 'Lundrimi kryesor',
    home: 'Niyyah, faqja kryesore',
    links: [
      { href: '#mahrem', label: 'Mahremi' },
      { href: '#kako', label: 'Si funksionon' },
      { href: '#sigurnost', label: 'Siguria' },
      { href: '#preporuke', label: 'Dëshmi' },
      { href: '#pitanja', label: 'Pyetje' },
    ],
    language: 'Gjuha',
    menu: 'Menyja',
    close: 'Mbyll menynë',
  },

  cta: {
    download: 'Merr Niyyah',
    waitlist: 'Lajmëromë kur Niyyah niset',
    waitlistShort: 'Lajmëromë',
    emailLabel: 'Adresa e tua e email-it',
    emailPlaceholder: 'emri@shembull.com',
    sending: 'Po dërgohet',
    success: 'Faleminderit. Do të shkruajmë sapo Niyyah të niset, in shā Allāh.',
    invalid: 'Shkruaj një adresë email të saktë, për shembull emri@shembull.com.',
    error: 'Nuk kaloi. Kontrollo lidhjen dhe provo përsëri.',
    tooMany: 'Shumë përpjekje. Provo përsëri pas disa minutash.',
    notConnected: 'Lista e pritjes nuk është hapur ende. Kthehu së shpejti.',
    privacy: 'Adresën e përdorim vetëm për të të njoftuar kur niset Niyyah dhe që të të presë një dhuratë mirëseardhjeje. Nuk e shesim dhe nuk ia japim askujt për reklama.',
    soon: 'Së shpejti në App Store dhe Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Shkarkoje në',
    availableOn: 'E gjeni në',
    eyebrow: 'APLIKACION HALLALL PËR MARTESË',
    waiting: '{count} veta e presin tashmë Niyyah',
  },

  hero: {
    countdown: 'Niyyah vjen për',
    countdownUnits: ['ditë', 'orë', 'minuta', 'sekonda'],
    title: 'Martesa, e kërkuar me nijet.',
    lead:
      'Niyyah është një aplikacion për muslimanët që kërkojnë seriozisht bashkëshort. Mesazhet hapen vetëm me interes të dyanshëm, mahremi mund të jetë në bisedë, dhe kufijtë i mban aplikacioni, jo ti.',
    secondary: 'Si funksionon mahremi',
    micro: 'Falas. Aplikacioni është në nëntë gjuhë.',
    imageAlt: 'Një kartë profili në Niyyah: namazi, medhhebi, planet për martesë dhe përqindja e përputhjes.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verifikuar',
    match: 'përputhje',
    rows: [
      { k: 'Besimi', v: 'Praktikoj' },
      { k: 'Namazi', v: 'Rregullisht' },
      { k: 'Medhhebi', v: 'Hanefi' },
      { k: 'Martesa', v: 'Brenda një viti' },
    ],
    prompt: 'Besimi në martesë do të thotë…',
    promptAnswer: 'që t’ia kujtojmë njëri-tjetrit atë që është me vlerë, edhe kur është rëndë.',
    pass: 'Tjetri',
    like: 'Më pëlqen',
  },

  problem: {
    title: 'Aplikacionet e njohjeve nuk u bënë për martesë.',
    body: [
      'U bënë që të vazhdosh të rrëshqasësh. Karta pa fund, njerëz pa nijet të qartë, biseda që nuk mund t’i tregosh kurrë prindërve.',
      'Ndërsa njohja përmes të afërmve është e ngadaltë, rrethi i ngushtë dhe presioni i rëndë. Midis këtyre dy botëve nuk kishte asgjë për ne.',
    ],
    pains: [
      'Nuk e dallon kush është serioz dhe kush ka ardhur vetëm për të shikuar.',
      'Motrat kanë frikë nga ngacmimet, profilet e rreme dhe nga mbetja vetëm në gjithçka.',
      'Aplikacionet e përkthyera nuk kuptojnë gjuhën, medhhebin, zakonet, as diasporën tonë.',
    ],
    eyebrow: 'SI FUNKSIONON',
    painsLabel: 'Të tingëllon e njohur?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Aplikacionet e tjera e matin suksesin me kohën që kalon brenda tyre. Ne e matim me nikahun pas të cilit nuk kemi më nevojë të na kërkosh.',
  },

  pillars: {
    title: 'Ndërtuar për martesë, nga ekrani i parë.',
    items: [
      {
        word: 'Nijeti',
        title: 'Nijeti i parë',
        body: 'Çdo profil thotë çfarë kërkon personi dhe kur. Afati për martesë, fëmijët, zhvendosja: e di para mesazhit të parë.',
      },
      {
        word: 'Familja',
        title: 'Me familjen, jo vetëm',
        body: 'Një motër mund të ftojë babain, vëllain ose kujdestarin të jetë në bisedat e saj. Asgjë nuk fshihet nga ata që mendimi i tyre ka vlerë.',
      },
      {
        word: 'Kufijtë',
        title: 'Hallall nga ndërtimi',
        body: 'Vetëm gjinia e kundërt. Mesazhe vetëm me interes të dyanshëm. Një komunitet që e shohin moderatorët. Kufijtë i mban aplikacioni, nuk ke pse t’i ruash ti.',
      },
    ],
  },

  mahrem: {
    kicker: 'Portali i mahremit',
    title: 'Asgjë e fshehur nga ata që mendimi i tyre ka vlerë.',
    body:
      'Ndiz „Kërko mahrem“ dhe fto deri në tre njerëz që i beson: babain, vëllain, xhaxhain ose dajën, kujdestarin. Ata shohin bisedat e tua në portalin e mahremit, por nuk mund të shkruajnë dhe nuk mund të njihen me askënd. Janë vetëm të pranishëm, siç do të ishin edhe në takim.',
    steps: [
      { title: 'Ndiz „Kërko mahrem“', body: 'Një çelës i vetëm në cilësimet.' },
      { title: 'Fto deri në tre mahremë', body: 'Ftesa vjen me email, dhe mahremi e pranon në aplikacion.' },
      {
        title: 'Ata lexojnë, ti bisedon',
        body: 'Mahremi shikon bisedat dhe përputhjet. Nuk mund të shkruajë nga portali dhe nuk përdor funksionet e njohjes.',
      },
    ],
    who: [
      { label: 'Për të', body: 'Nuk je vetëm. Familja është pranë, pa të qëndruar mbi supe.' },
      { label: 'Për familjen', body: 'E dini me kë bisedon dhe si. Pa të fshehta.' },
      { label: 'Për të (atë)', body: 'Një shenjë e qartë që është serioze dhe familja është e përfshirë.' },
    ],
    parentsTitle: 'Prindër, kjo është për ju.',
    parentsBody:
      'E dimë se „aplikacion i njohjeve“ nuk tingëllon si gjë për vajzën ose motrën tuaj. Në Niyyah mund të jeni në bisedat e saj dhe të shihni me kë dhe si shkruan, pa shkruar asgjë vetë. Biseda nuk mund as të hapet derisa të dyja anët të shprehin interes, dhe e gjitha kjo është falas.',
    share: 'Dërgoja këtë faqe',
    shareDone: 'Lidhja u kopjua',
    shareText: 'Niyyah: aplikacioni për martesë ku familja mund të jetë në bisedë.',
    imageAlt: 'Portali i mahremit: një baba lexon bisedën e vajzës, pa mundësi të shkruajë.',
  },

  mockPortal: {
    title: 'Portali i mahremit',
    readOnly: 'Vetëm lexim',
    watching: 'Po përcjell: Amina',
    with: 'Bisedë me: Emir, 30',
    messages: [
      { from: 'him', text: 'Es-selamu alejkum. Faleminderit që e hape bisedën.' },
      { from: 'her', text: 'Ve alejkumus-selam. Shkruajtë se do të dëshironje që familjet të njihen herët?' },
      { from: 'him', text: 'Po. Prindërit e mi do të donin t’i njihnin të tuajt para çdo gjëje serioze.' },
    ],
    locked: 'Nga portali nuk mund të shkruhet',
  },

  how: {
    kicker: 'Si funksionon',
    title: 'Nga profili në bisedë, në katër hapa.',
    steps: [
      { title: 'Bëj një profil me nijet', body: 'Besimi, namazi, planet për martesë dhe fjalët e tua.' },
      {
        title: 'Zbulo',
        body: 'Njerëz që ndajnë vlerat e tua, me përqindjen e përputhjes. Karta ose hartë, me filtra për moshë, qytet dhe besim.',
      },
      {
        title: 'Interesi i dyanshëm hap bisedën',
        body: 'Derisa të pëlqeni njëri-tjetrin, biseda mbetet e kyçur. Me pyetjet e tua para mesazhit të parë.',
      },
      { title: 'Familja është me ty', body: 'Mahrem në bisedë, kurdo që dëshiron.' },
    ],
  },

  questions: {
    kicker: 'Pyetje para bisedës',
    title: 'Pyet atë që ka vlerë, para mesazhit të parë.',
    body:
      'Vendos deri në tre pyetje. Pas përputhjes, personi tjetër përgjigjet i pari, ndërsa ti lexon dhe vendos a hapet biseda. Pa tri javë shkëmbim mesazhesh vetëm për të zbuluar se nuk pajtoheni për gjërat themelore.',
    flow: ['Pyetjet i vendos ti', 'Personi tjetër përgjigjet', 'Vendos ti'],
    topics: ['Namazi', 'Shamia', 'Zhvendosja', 'Fëmijët'],
    topicsLabel: 'Më shpesh pyetet për',
    imageAlt: 'Pyetje para bisedës: tri përgjigje dhe vendimi a hapet biseda.',
  },

  mockQuestions: {
    title: 'Emiri u përgjigj pyetjeve të tua',
    qa: [
      { q: 'A i fal namazet rregullisht?', a: 'Po, të pesta. Sabahu më vjen më i rëndë, por përpiqem.' },
      { q: 'Ku e shikon veten pas nikahut?', a: 'Në Sarajevë, por jam i hapur të bisedojmë për zhvendosje.' },
      { q: 'Sa peshë ka familja në vendimet e tua?', a: 'Shumë. Do të dëshiroja që familjet të njihen herët.' },
    ],
    no: 'Nuk më pëlqen',
    yes: 'Më pëlqen',
  },

  profile: {
    kicker: 'Profili',
    title: 'Njihe si mendon, jo vetëm si duket.',
    lead:
      'Përveç fotove dhe përshkrimit, profili mban atë për të cilën bisedohet para nikahut. Më pak hamendje, më pak kohë e humbur, më shpejt te një „po“ ose „jo“.',
    fields: [
      { k: 'Marrëdhënia me besimin', v: ['Praktikoj', 'Përpiqem', 'Për momentin nuk praktikoj'] },
      { k: 'Namazi', v: ['Rregullisht', 'Nganjëherë', 'Rrallë'] },
      { k: 'Medhhebi', v: ['Hanefi', 'Shafi’i', 'Maliki', 'Hanbeli', 'Nuk ka shumë rëndësi'] },
      { k: 'Shamia', v: ['Mbaj', 'Nuk mbaj', 'Kam ndërmend'] },
      { k: 'Afati për martesë', v: ['Menjëherë', 'Brenda një viti', '1–2 vjet', 'Pa nxitim'] },
      { k: 'Zhvendosja', v: ['Gati', 'Nuk mundem', 'E hapur për bisedë'] },
      { k: 'Fëmijët', v: ['Dëshiroj', 'Nuk dëshiroj', 'Kam tashmë', 'Nuk jam i/e sigurt'] },
    ],
    more: 'Edhe më: duhani, arsimi, profesioni, gjuha e nënës, gjatësia dhe interesat.',
    promptsTitle: 'Me fjalët e tua',
    prompts: ['Besimi në martesë do të thotë…', 'Çfarë kërkon në bashkëshort?', 'Si e kalon fundjavën?'],
    situationsTitle: 'Situata',
    situationsBody:
      'Përgjigju situatave të vërteta në shtatë fusha. Të tjerët shohin si mendon, jo vetëm si dukesh.',
    situations: ['Martesa', 'Komunikimi', 'Zgjidhja e mosmarrëveshjeve', 'Familja', 'Besimi', 'Financat', 'Prindërimi'],
    matchTitle: 'Përqindja e përputhjes',
    matchBody: 'Në çdo kartë: interesat e përbashkëta, marrëdhënia me besimin dhe nijeti.',
    imageAlt: 'Detaje të profilit në Niyyah: besimi, planet për martesë dhe përgjigjet e situatave.',
  },

  mockDetails: {
    title: 'Për Emirin',
    rows: [
      { k: 'Martesa', v: 'Brenda një viti' },
      { k: 'Zhvendosja', v: 'E hapur për bisedë' },
      { k: 'Fëmijët', v: 'Dëshiroj' },
      { k: 'Profesioni', v: 'Inxhinier' },
    ],
    situation: 'Situatë · Zgjidhja e mosmarrëveshjeve',
    question: 'U zënkët për familjen. Çfarë bën i pari?',
    answer: 'Pres derisa të qetësohemi të dy, pastaj pyes si e shikon ajo çështjen. Vetëm pastaj e thotë timen.',
  },

  safety: {
    kicker: 'Siguria dhe privatësia',
    title: 'Privatësia e tua nuk është produkt.',
    lead: 'Nuk i shesim kurrë të dhënat e tua. Siguria është ndërtuar brenda aplikacionit, nuk është shtuar si opsion.',
    items: [
      {
        icon: 'pin',
        title: 'Vendndodhja e saktë nuk tregohet kurrë',
        body: 'Harta tregon vetëm një zonë të përafërt, dhe atë vetëm sa kohë e mban të ndezur. Sapo e shuan, zhdukesh nga harta.',
      },
      {
        icon: 'photo',
        title: 'Kontrolli i fotove',
        body: 'Fotot e turbullta dhe shumë të vogla nuk pranohen, dhe të dhënat e fshehura në foto, si vendndodhja GPS, sistemi i heq. Selfie jote e verifikimit krahasohet automatikisht me fotot e tua, dhe çfarëdo që nuk është e qartë e shqyrton një person nga ekipi ynë.',
      },
      {
        icon: 'badge',
        title: 'Shenja Verifikuar',
        body: 'Një kontroll i shkurtër që ti je personi në foto. Numrin e telefonit ose email-in e vërteton para se të hysh në Zbulo.',
      },
      {
        icon: 'people',
        title: 'Moderatorë të vërtetë',
        body: 'Raportimet lexon një ekip i veçantë moderatorësh që mund të pezullojë dhe të ndalojë profile.',
      },
      {
        icon: 'block',
        title: 'Blokimi vlen në të dyja anët',
        body: 'Nëse bllokon dikë, zhdukeni nga njëri-tjetri në aplikacion.',
      },
      {
        icon: 'pause',
        title: 'Ndalo Zbulo përkohësisht',
        body: 'Fshehe profilin pa e fshirë. Përputhjet dhe bisedat mbeten.',
      },
      {
        icon: 'finger',
        title: 'Hapje me gisht ose fytyrë',
        body: 'Gjurma e gishtit nuk e lë kurrë pajisjen tënde.',
      },
    ],
    ayahRef: 'El-Kijame 75:4',
    ayahNote:
      'Në ekranin e hapjes qëndron një ajet nga surja El-Kijame (75:3–4), për Allahun që mund të ribëjë edhe majat e gishtave.',
  },

  community: {
    kicker: 'Komuniteti',
    title: 'Një vend për të mësuar për martesën para martesës.',
    lead:
      'Pyet, lexon përvoja, mëson nga të tjerët. Çdo postim kalon nëpër shikimin e moderatorit para se të shfaqet, dhe nuk ka komente nën të cilat njeriu nuk do të vinte emrin.',
    items: [
      { title: 'Pyet vëllezërit, Pyet motrat', body: 'Hapësira të ndara që i shikon vetëm një gjini.' },
      {
        title: 'Anonim, kur duhet',
        body: 'Disa pyetje bëhen rëndë me emrin tënd. Posto si „Motër anonime“ ose „Vëlla anonim“.',
      },
      { title: 'Pyetja e ditës', body: 'Çdo ditë një pyetje për martesën dhe vlerat, në ekranin kryesor.' },
      {
        title: 'Rrëfime pa komente publike',
        body: '24 orë ose një shikim i vetëm. Për të gjithë komunitetin ose vetëm për përputhjet.',
      },
    ],
    reactionsLabel: 'Reagime që shpërblejnë dobinë, jo egon',
    reactions: ['E dobishme', 'Ka kuptim', 'Frymëzuese', 'E peshuar'],
    imageAlt: 'Komuniteti i Niyyah: një pyetje anonime në hapësirën Pyet motrat.',
  },

  mockPost: {
    space: 'Pyet motrat',
    author: 'Motër anonime',
    category: 'Martesa',
    text: 'Si ia thanë prindërve se po kërkonit bashkëshort përmes një aplikacioni? Si reaguan?',
    reviewed: 'Shikuar nga moderatori',
  },

  languages: {
    title: 'Faqja në gjuhën tënde, aplikacioni në nëntë gjuhë.',
    lead:
      'Këtë faqe e lexon në shqip. Aplikacioni vetë, email-et dhe njoftimet janë në nëntë gjuhë: boshnjakisht, anglisht, gjermanisht, turqisht, arabisht, indonezisht, urdu, malajisht dhe frëngjisht. Arabishtja dhe urduja shkruhen nga e djathta në të majtë. Qoftë në Prishtinë, Tiranë, Sarajevë apo Cyrih.',
  },


  pricing: {
    kicker: 'Falas dhe monedha',
    title: 'Ajo që të ruan është falas.',
    lead: 'Mahremi, pyetjet para bisedës, chati i kyçur dhe moderimi janë për të gjithë. Për sigurinë nuk marrim para. Monedhat vetëm e shpejtojnë — dhe nuk ka abonim.',
    freeTitle: 'Falas, për të gjithë',
    free: [
      'Profili dhe 30 profile në ditë në Zbulo',
      '20 pëlqime në ditë',
      'Shiko kush të ka pëlqyer: 1 person në ditë',
      'Leximi i të gjitha mesazheve që të dërgojnë',
      'Përputhjet dhe bisedë e pakufizuar me ta',
      'Mahrem në bisedë',
      'Pyetje para bisedës',
      'Komuniteti, rrëfimet dhe Pyetja e ditës',
      'Monedha falas çdo ditë',
    ],
    premiumTitle: 'Monedha, kur dëshiron më shumë',
    premium: [
      'Shiko të gjithë ata që të kanë pëlqyer',
      'Super pëlqim: pëlqimi yt në krye, me emrin dhe foton tënde',
      'Mesazhe direkte (pëlqim me mesazh)',
      'Më shumë pëlqime dhe profile për sot',
      'Ktheje një profil që e kalove',
      'Përgjigju rrëfimeve në komunitet',
      'Boost: profili yt i pari në Zbulo',
    ],
    extra:
      'Monedha fiton edhe falas: çdo ditë, për shtatë ditë rresht, për profilin e plotësuar dhe për miqtë që fton. I blen vetëm nëse do, me një pagesë të vetme, në App Store ose Google Play — pa abonim dhe pa rinovim automatik.',
  },


  about: {
    kicker: 'Për ne',
    quote:
      'Niyyah është për njerëz që kërkojnë bashkëshort, jo zbavitje. Çdo gjë këtu është ndërtuar rreth atij një qëllimi: profile që thonë diçka të vërtetë, biseda ku familja mund të jetë e pranishme, dhe kufij që mbahen pa pasur nevojë që ndokush t’i ruajë.',
    small:
      'Jemi ekip i vogël që ndërton për komunitetin e vet, dhe më shumë duam një aplikacion të qetë e të besueshëm sesa një të zhurmshëm e të mbushur.',
    made: 'Bërë me kujdes në Bosnjë dhe Hercegovinë.',
  },

  faq: {
    title: 'Pyetjet që na bëhen shpesh',
    items: [
      {
        q: 'Në çfarë dallon Niyyah nga aplikacionet e tjera të njohjeve?',
        a: 'Niyyah është ndërtuar për martesë, jo për rrëshqitje. Zbulo shfaq vetëm gjininë e kundërt, mesazhet hapen vetëm kur të dy e pëlqeni njëri-tjetrin, dhe një motër mund të fusë mahremin në bisedat e saj. Profili mban atë që ka vlerë para nikahut: namazin, medhhebin, planet për martesë, fëmijët dhe zhvendosjen.',
      },
      {
        q: 'Çfarë është mahremi dhe si e shtoj?',
        a: 'Mahrem është një i afërm mashkull me të cilin martesa është e ndaluar përgjithmonë, për shembull babai, vëllai, xhaxhai ose daja. Mund të ftosh edhe kujdestarin. Në cilësimet ndiz „Kërko mahrem“ dhe fto deri në tre persona. Ftesa vjen me email dhe mahremi e pranon në aplikacion. Në portalin e mahremit ai pastaj shikon bisedat dhe përputhjet e tua, por nuk mund të shkruajë. Funksioni është i disponueshëm në profilet e femrave.',
      },
      {
        q: 'A është Niyyah hallall?',
        a: 'Nuk nxjerrim fetva dhe nuk pretendojmë miratim nga ndonjë institucion. Çfarë mund të tregojmë janë kufijtë e ndërtuar në aplikacion: shikon vetëm gjininë e kundërt, biseda hapet vetëm me interes të dyanshëm, mahremi mund të lexojë bisedat, dhe komunitetin e shohin moderatorët. Me çfarë nijeti e përdor, mbetet në ty. Nëse ke dyshim, pyet një imam që i besohet.',
      },
      {
        q: 'Çfarë janë pyetjet para bisedës?',
        a: 'Një opsion në të cilin vendos deri në tre pyetje të tua. Pas përputhjes, personi tjetër u përgjigjet i pari. Ti lexon përgjigjet dhe vendos: „Më pëlqen“ hap bisedën, „Nuk më pëlqen“ nuk e hap.',
      },
      {
        q: 'Kush mund të shohë vendndodhjen tënde?',
        a: 'Askush nuk shikon vendndodhjen e saktë. Në hartën e Zbulo shfaqesh vetëm si zonë e përafërt, dhe atë vetëm nëse e ndez. Sapo e shuan, zhdukesh nga harta. Të dhënat e fshehura në foto, si vendndodhja GPS, sistemi i heq gjatë ngarkimit.',
      },
      {
        q: 'Si mbroheni nga profilet e rreme?',
        a: 'Shenja Verifikuar do të thotë se personi kaloi kontrollin e fytyrës: një foto e tij e bërë drejtpërdrejt u krahasua me fotot në profil. Raportimet i lexojnë moderatorë të vërtetë që mund të pezullojnë ose të ndalojnë një profil, dhe blokimi vlen në të dyja anët. Një llogari e ndaluar nuk mund të kthehet thjesht me një adresë të re emaili.',
      },
      {
        q: 'Çfarë është falas dhe çfarë kushton monedha?',
        a: 'Falas është çdo gjë që të ruan: mahremi, pyetjet para bisedës, chati i kyçur dhe moderimi, plus 30 profile dhe 20 pëlqime në ditë, një person në ditë nga ata që të kanë pëlqyer, leximi i të gjitha mesazheve që të dërgojnë dhe bisedë e pakufizuar me përputhjet. Me monedha mund të shohësh të gjithë ata që të kanë pëlqyer, të dërgosh një super pëlqim (pëlqimi yt në krye, i theksuar, me emrin dhe foton tënde) ose një mesazh direkt (pëlqim me mesazh që tjetri e lexon falas), të marrësh më shumë profile dhe pëlqime për atë ditë dhe t’u përgjigjesh rrëfimeve. Biseda hapet vetëm kur pëlqeni njëri-tjetrin. Monedha fiton falas çdo ditë, dhe mund t’i blesh edhe me një pagesë të vetme. Nuk ka abonim, kështu që nuk ke asgjë për të anuluar.',
      },
      {
        q: 'A mund të fsheh profilin përkohësisht?',
        a: 'Po. Ndalo Zbulo dhe profili zhduket nga Zbulo pa u fshirë. Përputhjet dhe bisedat mbeten, dhe profilin e kthen kurdo që dëshiron.',
      },
      {
        q: 'Në çfarë gjuhësh është aplikacioni?',
        a: 'Në nëntë: boshnjakisht, anglisht, gjermanisht, turqisht, arabisht, indonezisht, urdu, malajisht dhe frëngjisht. Pajisjet në kroatisht dhe serbisht marrin vetvetiu boshnjakishten.',
      },
    ],
  },

  final: {
    title: 'Nisu me nijet.',
    leadLaunched: 'Bëj profilin dhe njihu me njerëz që vërtet duan të ndërtojnë diçka të vërtetë.',
    leadWaitlist:
      'Lër email-in dhe do të lajmërojmë sapo Niyyah të niset. Pastaj bëj profilin dhe njihu me njerëz që vërtet duan të ndërtojnë diçka të vërtetë.',
  },

  consent: {
    title: 'Matja e reklamave',
    more: 'Çfarë do të thotë kjo',
    details:
      'Një piksel nga Facebook numëron sa njerëz sjell reklama jonë këtu dhe kush regjistrohet. Adresën tënde të email-it nuk ia dërgojmë kurrë. Nëse refuzon, nga Facebook nuk ngarkohet asgjë fare.',
    close: 'Mbyll',
    body:
      'Matim sa njerëz sjellin reklamat tona këtu. Asgjë tjetër, dhe adresa jote e email-it nuk shkon kurrë më tutje.',
    accept: 'Pranoj',
    decline: 'Jo, faleminderit',
    label: 'Matja e reklamave',
    change: 'Zgjedhja për matjen',
  },

  footer: {
    tagline: 'Martesa, e kërkuar me nijet.',
    made: 'Bërë me kujdes në Bosnjë dhe Hercegovinë.',
    language: 'Gjuha',
  },
}
