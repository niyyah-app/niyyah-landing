// Izvor istine za tekst je CLAUDE.md. Ne dodavati tvrdnje koje tamo nisu provjerene.
export const bs = {
  meta: {
    title: 'Niyyah — Halal aplikacija za pronalazak bračnog druga',
    description:
      'Niyyah je aplikacija za muslimane koji traže brak. Poruke tek na obostrani interes, mahrem u razgovoru i moderirana zajednica. Besplatno, na bosanskom i još 8 jezika.',
    ogAlt: 'Niyyah: Brak, tražen s namjerom.',
  },

  nav: {
    skip: 'Preskoči na sadržaj',
    label: 'Glavna navigacija',
    home: 'Niyyah, početna',
    links: [
      { href: '#mahrem', label: 'Mahrem' },
      { href: '#kako', label: 'Kako funkcioniše' },
      { href: '#sigurnost', label: 'Sigurnost' },
      { href: '#preporuke', label: 'Preporuke' },
      { href: '#pitanja', label: 'Pitanja' },
    ],
    language: 'Jezik',
    menu: 'Meni',
    close: 'Zatvori meni',
  },

  cta: {
    download: 'Preuzmi Niyyah',
    waitlist: 'Javi mi kad Niyyah krene',
    waitlistShort: 'Javi mi',
    emailLabel: 'Tvoja e-mail adresa',
    emailPlaceholder: 'ime@primjer.com',
    sending: 'Šaljem',
    success: 'Hvala. Javit ćemo ti se čim Niyyah krene, in šā Allāh.',
    invalid: 'Upiši ispravnu e-mail adresu, na primjer ime@primjer.com.',
    error: 'Nije prošlo. Provjeri internet vezu i pokušaj ponovo.',
    tooMany: 'Previše pokušaja. Pokušaj ponovo za nekoliko minuta.',
    notConnected: 'Lista čekanja još nije otvorena. Navrati uskoro.',
    privacy: 'Adresu koristimo samo da ti javimo kad Niyyah krene i da te dočeka poklon dobrodošlice. Ne prodajemo je i ne dajemo nikome za reklame.',
    soon: 'Uskoro na App Storeu i Google Playu',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Preuzmi na',
    availableOn: 'Dostupno na',
    eyebrow: 'HALAL APLIKACIJA ZA BRAK',
    waiting: '{count} ljudi već čeka Niyyah',
  },

  hero: {
    countdown: 'Niyyah stiže za',
    countdownUnits: ['dana', 'sati', 'minuta', 'sekundi'],
    title: 'Brak, tražen s namjerom.',
    lead:
      'Niyyah je aplikacija za muslimane koji ozbiljno traže bračnog druga. Poruke se otvaraju tek na obostrani interes, mahrem može biti u razgovoru, a granice drži aplikacija, ne ti.',
    secondary: 'Kako funkcioniše mahrem',
    micro: 'Besplatno. Na bosanskom i još 8 jezika.',
    imageAlt: 'Kartica profila u Niyyah: namaz, mezheb, planovi za brak i postotak usklađenosti.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verified',
    match: 'usklađenost',
    rows: [
      { k: 'Vjera', v: 'Praktikujem' },
      { k: 'Namaz', v: 'Redovno' },
      { k: 'Mezheb', v: 'Hanefijski' },
      { k: 'Brak', v: 'Unutar godinu dana' },
    ],
    prompt: 'Vjera u vezi znači…',
    promptAnswer: 'da jedno drugo podsjećamo na ono što je važno i kad je teško.',
    pass: 'Dalje',
    like: 'Sviđa mi se',
  },

  problem: {
    title: 'Aplikacije za upoznavanje nisu pravljene za brak.',
    body: [
      'Pravljene su da skrolaš. Beskonačne kartice, ljudi bez jasne namjere, razgovori koji se ne bi mogli pokazati roditeljima.',
      'A upoznavanje preko rodbine je sporo, krug je uzak, a pritisak velik. Između ta dva svijeta nije bilo ničeg za nas.',
    ],
    pains: [
      'Ne znaš ko je ozbiljan, a ko je tu samo da vidi.',
      'Sestre se boje uznemiravanja, lažnih profila i toga da su same u svemu.',
      'Prevedene aplikacije ne razumiju naš jezik, mezheb, običaje ni dijasporu.',
    ],
    eyebrow: 'KAKO FUNKCIONIŠE',
    painsLabel: 'Zvuči poznato?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Ostale aplikacije mjere uspjeh vremenom koje provedeš u njima. Mi ga mjerimo nikahom nakon kojeg ti više ne trebamo.',
  },

  pillars: {
    title: 'Građeno za brak, od prvog ekrana.',
    items: [
      {
        word: 'Namjera',
        title: 'Namjera na prvom mjestu',
        body: 'Svaki profil kaže šta osoba traži i kada. Vremenski okvir za brak, djeca, selidba: znaš prije prve poruke.',
      },
      {
        word: 'Porodica',
        title: 'Porodica, ne sama',
        body: 'Sestra može pozvati oca, brata ili staratelja da bude u njenim razgovorima. Ništa se ne krije od onih čije mišljenje znači.',
      },
      {
        word: 'Granice',
        title: 'Halal po dizajnu',
        body: 'Samo suprotni spol. Poruke tek na obostrani interes. Zajednica koju pregledaju moderatori. Granice drži aplikacija, ne moraš ih ti čuvati.',
      },
    ],
  },

  mahrem: {
    kicker: 'Mahrem portal',
    title: 'Ništa skriveno od onih čije mišljenje znači.',
    body:
      'Uključi „Zahtijevaj mahrema“ i pozovi do tri osobe od povjerenja: oca, brata, amidžu ili dajdžu, staratelja. Oni vide tvoje razgovore u Mahrem portalu, ali ne mogu pisati ni upoznavati. Samo su tu, kao što bi bili i uživo.',
    steps: [
      { title: 'Uključi „Zahtijevaj mahrema“', body: 'Jedan prekidač u postavkama.' },
      { title: 'Pozovi do tri mahrema', body: 'Pozivnica stiže e-mailom, a mahrem je prihvata u aplikaciji.' },
      {
        title: 'Oni čitaju, ti razgovaraš',
        body: 'Mahrem vidi razgovore i spojeve. Ne može pisati iz portala i ne koristi funkcije za upoznavanje.',
      },
    ],
    who: [
      { label: 'Za nju', body: 'Nisi sama. Porodica je tu, a ne stoji ti nad ramenom.' },
      { label: 'Za porodicu', body: 'Znate s kim razgovara i kako. Bez tajni.' },
      { label: 'Za njega', body: 'Jasan znak da je ozbiljna i da je porodica uključena.' },
    ],
    parentsTitle: 'Roditelji, ovo je za vas.',
    parentsBody:
      'Znamo da „aplikacija za upoznavanje“ ne zvuči kao nešto za vašu kćerku ili sestru. U Niyyah možete biti u njenim razgovorima i vidjeti s kim se dopisuje i kako, bez da išta pišete. Razgovor se ne može ni otvoriti dok oboje ne pokažu interes, a sve ovo je besplatno.',
    share: 'Pošalji joj ovu stranicu',
    shareDone: 'Link je kopiran',
    shareText: 'Niyyah: aplikacija za brak u kojoj porodica može biti u razgovoru.',
    imageAlt: 'Mahrem portal: otac čita razgovor kćerke, bez mogućnosti pisanja.',
  },

  mockPortal: {
    title: 'Mahrem portal',
    readOnly: 'Samo čitanje',
    watching: 'Pratiš: Amina',
    with: 'Razgovor s: Emir, 30',
    messages: [
      { from: 'him', text: 'Esselamu alejkum. Hvala što si otvorila razgovor.' },
      { from: 'her', text: 'Ve alejkumus-selam. Napisao si da bi volio da se porodice upoznaju rano?' },
      { from: 'him', text: 'Jeste. Moji roditelji bi voljeli upoznati tvoje prije svega ozbiljnog.' },
    ],
    locked: 'Iz portala se ne može pisati',
  },

  how: {
    kicker: 'Kako funkcioniše',
    title: 'Od profila do razgovora, u četiri koraka.',
    steps: [
      { title: 'Napravi profil s namjerom', body: 'Vjera, namaz, planovi za brak i tvoje riječi.' },
      {
        title: 'Otkrivaj',
        body: 'Ljudi koji dijele tvoje vrijednosti, uz postotak usklađenosti. Kartice ili mapa, filteri po dobi, gradu i vjeri.',
      },
      {
        title: 'Obostrani interes otvara razgovor',
        body: 'Dok se oboje ne lajkate, razgovor je zaključan. Uz tvoja pitanja prije prve poruke.',
      },
      { title: 'Porodica je uz tebe', body: 'Mahrem u razgovoru, kad god to želiš.' },
    ],
  },

  questions: {
    kicker: 'Pitanja prije razgovora',
    title: 'Pitaj ono što je važno, prije prve poruke.',
    body:
      'Postavi do tri pitanja. Kad nastane spoj, druga osoba prvo odgovori, a ti pročitaš i odlučiš hoće li se razgovor otvoriti. Bez tri sedmice dopisivanja samo da biste saznali da se ne slažete oko osnovnog.',
    flow: ['Ti postaviš pitanja', 'Druga osoba odgovori', 'Ti odlučiš'],
    topics: ['Namaz', 'Hidžab', 'Selidba', 'Djeca'],
    topicsLabel: 'Najčešće se pita o',
    imageAlt: 'Pitanja prije razgovora: tri odgovora i odluka hoće li se razgovor otvoriti.',
  },

  mockQuestions: {
    title: 'Emir je odgovorio na tvoja pitanja',
    qa: [
      { q: 'Klanjaš li redovno?', a: 'Da, pet vakata. Sabah mi je najteži, ali se trudim.' },
      { q: 'Gdje vidiš sebe nakon nikaha?', a: 'U Sarajevu, ali sam otvoren za razgovor o selidbi.' },
      { q: 'Koliko ti je porodica važna u odlukama?', a: 'Jako. Volio bih da se porodice upoznaju rano.' },
    ],
    no: 'Ne sviđa mi se',
    yes: 'Sviđa mi se',
  },

  profile: {
    kicker: 'Profil',
    title: 'Upoznaj kako razmišlja, ne samo kako izgleda.',
    lead:
      'Pored slika i opisa, profil nosi ono o čemu se razgovara prije nikaha. Manje nagađanja, manje izgubljenog vremena, brže do „da“ ili „ne“.',
    fields: [
      { k: 'Odnos prema vjeri', v: ['Praktikujem', 'Trudim se', 'Trenutno ne praktikujem'] },
      { k: 'Namaz', v: ['Redovno', 'Ponekad', 'Rijetko'] },
      { k: 'Mezheb', v: ['Hanefijski', 'Šafijski', 'Malikijski', 'Hanbelijski', 'Nije bitno'] },
      { k: 'Hidžab', v: ['Nosim', 'Ne nosim', 'Planiram'] },
      { k: 'Vremenski okvir za brak', v: ['Odmah', 'Unutar godinu dana', '1–2 godine', 'Nema žurbe'] },
      { k: 'Selidba', v: ['Spreman/na', 'Ne mogu', 'Otvoren/a za razgovor'] },
      { k: 'Djeca', v: ['Želim', 'Ne želim', 'Već imam', 'Nisam siguran/na'] },
    ],
    more: 'I još: pušenje, obrazovanje, zanimanje, maternji jezik, visina i interesi.',
    promptsTitle: 'Tvojim riječima',
    prompts: ['Vjera u vezi znači…', 'Šta tražiš u partneru?', 'Kako provodiš vikend?'],
    situationsTitle: 'Situacije',
    situationsBody:
      'Odgovori na stvarne scenarije u sedam oblasti. Drugi vide kako razmišljaš, ne samo kako izgledaš.',
    situations: ['Brak', 'Komunikacija', 'Rješavanje sukoba', 'Porodica', 'Vjera', 'Finansije', 'Roditeljstvo'],
    matchTitle: 'Postotak usklađenosti',
    matchBody: 'Na svakoj kartici: zajednički interesi, odnos prema vjeri i namjera.',
    imageAlt: 'Detalji profila u Niyyah: vjera, planovi za brak i odgovori na situacije.',
  },

  mockDetails: {
    title: 'O Emiru',
    rows: [
      { k: 'Brak', v: 'Unutar godinu dana' },
      { k: 'Selidba', v: 'Otvoren za razgovor' },
      { k: 'Djeca', v: 'Želim' },
      { k: 'Zanimanje', v: 'Inženjer' },
    ],
    situation: 'Situacija · Rješavanje sukoba',
    question: 'Posvađali ste se zbog porodice. Šta radiš prvo?',
    answer: 'Sačekam da se oboje smirimo, pa pitam kako ona vidi stvar. Tek onda kažem svoje.',
  },

  safety: {
    kicker: 'Sigurnost i privatnost',
    title: 'Tvoja privatnost nije proizvod.',
    lead: 'Nikad ne prodajemo tvoje podatke. Sigurnost je ugrađena u aplikaciju, a ne dodana kao opcija.',
    items: [
      {
        icon: 'pin',
        title: 'Tačna lokacija nikad',
        body: 'Mapa pokazuje samo približno područje, i to samo dok je ti uključiš. Isključiš, i nestaješ s mape.',
      },
      {
        icon: 'photo',
        title: 'Provjera fotografija',
        body: 'Mutne i premale slike se ne primaju, a skrivene podatke iz slike, poput GPS lokacije, sistem uklanja. Čovjek iz našeg tima uporedi tvoj selfie za provjeru sa slikama na profilu.',
      },
      {
        icon: 'badge',
        title: 'Verified oznaka',
        body: 'Kratka provjera da si osoba sa slika. Broj telefona ili e-mail potvrđuješ prije nego uđeš u Otkrivaj.',
      },
      {
        icon: 'people',
        title: 'Stvarni moderatori',
        body: 'Prijave čita poseban moderatorski tim koji može suspendovati i zabraniti profil.',
      },
      {
        icon: 'block',
        title: 'Blokiranje u oba smjera',
        body: 'Blokiraš li nekoga, nestajete jedno drugom iz aplikacije.',
      },
      {
        icon: 'pause',
        title: 'Pauziraj Otkrivaj',
        body: 'Skloni profil bez brisanja. Podudaranja i razgovori ostaju.',
      },
      {
        icon: 'finger',
        title: 'Otključavanje otiskom ili licem',
        body: 'Otisak nikad ne napušta tvoj uređaj.',
      },
    ],
    ayahRef: 'El-Kijame 75:4',
    ayahNote:
      'Na ekranu za otključavanje stoji ajet iz sure El-Kijame (75:3–4), o Allahu koji može sastaviti i jagodice prstiju.',
  },

  community: {
    kicker: 'Zajednica',
    title: 'Mjesto da učiš o braku prije braka.',
    lead:
      'Pitaš, čitaš iskustva, učiš od drugih. Svaka objava prolazi pregled moderatora prije nego se pojavi, i nema komentara ispod kojih se ne bi potpisalo.',
    items: [
      { title: 'Pitaj braću, Pitaj sestre', body: 'Odvojeni prostori koje vidi samo jedan spol.' },
      {
        title: 'Anonimno, kad treba',
        body: 'Neka pitanja se teško postavljaju pod imenom. Objavi kao „Anonimna sestra“ ili „Anonimni brat“.',
      },
      { title: 'Pitanje dana', body: 'Svaki dan jedno pitanje o braku i vrijednostima, na početnom ekranu.' },
      {
        title: 'Priče bez javnih komentara',
        body: '24 sata ili jedan pregled. Za cijelu zajednicu ili samo za spojeve.',
      },
    ],
    reactionsLabel: 'Reakcije koje nagrađuju korisnost, ne ego',
    reactions: ['Korisno', 'Ima smisla', 'Inspirativno', 'Promišljeno'],
    imageAlt: 'Zajednica u Niyyah: anonimno pitanje u prostoru Pitaj sestre.',
  },

  mockPost: {
    space: 'Pitaj sestre',
    author: 'Anonimna sestra',
    category: 'Brak',
    text: 'Kako ste roditeljima rekle da tražite bračnog druga preko aplikacije? Kako su reagovali?',
    reviewed: 'Pregledao moderator',
  },

  languages: {
    title: 'Na tvom jeziku, gdje god da si.',
    lead:
      'Aplikacija, e-mailovi i obavijesti na devet jezika. Arapski i urdu teku zdesna nalijevo, a hrvatski i srpski uređaji automatski dobijaju bosanski. Bilo da si u Sarajevu, Beču, Malmöu ili Istanbulu.',
  },

  pricing: {
    kicker: 'Besplatno i coinsi',
    title: 'Ono što te čuva je besplatno.',
    lead: 'Mahrem, pitanja prije razgovora, zaključan chat i moderacija dostupni su svima. Ne naplaćujemo sigurnost. Coinsi samo ubrzavaju — i nema pretplate.',
    freeTitle: 'Besplatno, za svakoga',
    free: [
      'Profil i 30 profila dnevno u Otkrivaj',
      '20 lajkova dnevno',
      'Vidi ko te lajkao: 1 osoba dnevno',
      'Čitanje svih poruka koje ti pošalju',
      'Podudaranja i neograničen razgovor s njima',
      'Mahrem u razgovoru',
      'Pitanja prije razgovora',
      'Zajednica, priče i Pitanje dana',
      'Besplatni coinsi svaki dan',
    ],
    premiumTitle: 'Coinsi, kad poželiš više',
    premium: [
      'Vidi sve koji su te lajkali',
      'Super lajk: tvoj lajk na vrhu, s tvojim imenom i slikom',
      'Direktne poruke (lajk s porukom)',
      'Još lajkova i profila za danas',
      'Vrati profil koji si preskočio/la',
      'Odgovori na priče u zajednici',
      'Boost: tvoj profil prvi u Otkrivaj',
    ],
    extra:
      'Coinse dobijaš i besplatno: svaki dan, za sedam dana zaredom, za popunjen profil i za pozvane prijatelje. Kupuješ ih samo ako želiš, jednokratno u App Storeu ili Google Playu — bez pretplate i automatskog obnavljanja.',
  },


  about: {
    kicker: 'O nama',
    quote:
      'Niyyah postoji za ljude koji traže bračnog druga, a ne razonodu. Sve ovdje je građeno oko te jedne svrhe: profili koji govore nešto stvarno, razgovori u kojima porodica može biti prisutna, i granice koje drže bez da ih iko mora čuvati.',
    small:
      'Mi smo mali tim koji gradi za vlastitu zajednicu, i draže nam je da aplikacija bude tiha i pouzdana nego glasna i prometna.',
    made: 'Napravljeno s pažnjom u Bosni i Hercegovini.',
  },

  faq: {
    title: 'Pitanja koja nam često postavljate',
    items: [
      {
        q: 'Po čemu se Niyyah razlikuje od drugih aplikacija za upoznavanje?',
        a: 'Niyyah je građen za brak, a ne za skrolanje. Otkrivaj prikazuje samo suprotni spol, poruke se otvaraju tek kad se oboje lajkate, a sestra može uključiti mahrema u svoje razgovore. Profil nosi ono što je važno prije nikaha: namaz, mezheb, planove za brak, djecu i selidbu.',
      },
      {
        q: 'Šta je mahrem i kako ga dodajem?',
        a: 'Mahrem je muški član porodice s kojim je brak trajno zabranjen, na primjer otac, brat, amidža ili dajdža. Možeš pozvati i staratelja. U postavkama uključiš „Zahtijevaj mahrema“ i pozoveš do tri osobe. Pozivnica stiže e-mailom, a mahrem je prihvata u aplikaciji. U Mahrem portalu zatim vidi tvoje razgovore i spojeve, ali ne može pisati. Funkcija je dostupna ženskim profilima.',
      },
      {
        q: 'Da li je Niyyah halal?',
        a: 'Ne izdajemo fetve i ne tvrdimo da nas je odobrila neka institucija. Ono što možemo pokazati su granice ugrađene u aplikaciju: vidiš samo suprotni spol, razgovor se otvara tek na obostrani interes, mahrem može čitati razgovore, a zajednicu pregledaju moderatori. S kojim nijjetom je koristiš, ostaje na tebi. Ako imaš dilemu, pitaj imama kojem vjeruješ.',
      },
      {
        q: 'Šta su pitanja prije razgovora?',
        a: 'Opcija u kojoj postaviš do tri svoja pitanja. Kad nastane spoj, druga osoba prvo odgovori na njih. Ti pročitaš odgovore i odlučiš: „Sviđa mi se“ otvara razgovor, „Ne sviđa mi se“ ga ne otvara.',
      },
      {
        q: 'Ko može vidjeti moju lokaciju?',
        a: 'Niko ne vidi tvoju tačnu lokaciju. Na mapi u Otkrivaj pojavljuješ se samo kao približno područje, i to samo ako to uključiš. Kad isključiš, nestaješ s mape. Skrivene podatke iz fotografija, poput GPS lokacije, sistem uklanja pri uploadu.',
      },
      {
        q: 'Kako se štitite od lažnih profila?',
        a: 'Verified oznaka znači da je osoba prošla provjeru lica: njena fotografija uživo poređena je sa slikama na profilu. Prijave čitaju stvarni moderatori koji mogu suspendovati ili zabraniti profil, a blokiranje djeluje u oba smjera. Zabranjen nalog se ne može jednostavno vratiti s novom adresom.',
      },
      {
        q: 'Šta je besplatno, a šta se plaća coinsima?',
        a: 'Besplatno je sve što te čuva: mahrem, pitanja prije razgovora, zaključan chat i moderacija, uz 30 profila i 20 lajkova dnevno, jednu osobu dnevno od onih koji su te lajkali, čitanje svih poruka koje ti pošalju i neograničen razgovor sa spojevima. Coinsima možeš vidjeti sve koji su te lajkali, poslati super lajk (tvoj lajk stoji na vrhu, istaknut, s tvojim imenom i slikom) ili direktnu poruku (lajk s porukom koju druga osoba čita besplatno), dobiti još profila i lajkova za taj dan i odgovarati na priče. Razgovor se otvara tek kad se oboje lajkate. Coinse dobijaš besplatno svaki dan, a možeš ih i kupiti jednokratno. Nema pretplate, pa nema ni šta otkazivati.',
      },
      {
        q: 'Mogu li privremeno sakriti profil?',
        a: 'Da. Pauziraj Otkrivaj i profil nestaje iz Otkrivaj bez brisanja. Podudaranja i razgovori ostaju, a profil vraćaš kad poželiš.',
      },
      {
        q: 'Na kojim jezicima je aplikacija?',
        a: 'Na devet: bosanski, engleski, njemački, turski, arapski, indonežanski, urdu, malajski i francuski. Hrvatski i srpski uređaji automatski dobijaju bosanski.',
      },
    ],
  },

  final: {
    title: 'Kreni s nijjetom.',
    leadLaunched: 'Napravi profil i upoznaj ljude koji ozbiljno žele izgraditi nešto stvarno.',
    leadWaitlist:
      'Ostavi e-mail i javit ćemo ti čim Niyyah krene. Onda napravi profil i upoznaj ljude koji ozbiljno žele izgraditi nešto stvarno.',
  },

  consent: {
    title: 'Mjerenje reklama',
    more: 'Šta ovo znači',
    details:
      'Pixel s Facebooka broji koliko ljudi naša reklama dovede ovamo i ko se prijavi. Ne šaljemo mu tvoju e-mail adresu. Odbiješ li, ništa s Facebooka se neće ni učitati.',
    close: 'Zatvori',
    body:
      'Mjerimo koliko naših reklama dovede ljudi ovamo. Ništa drugo, i tvoja e-mail adresa nikad ne ide dalje.',
    accept: 'Prihvatam',
    decline: 'Ne hvala',
    label: 'Mjerenje reklama',
    change: 'Izbor o mjerenju',
  },

  footer: {
    tagline: 'Brak, tražen s namjerom.',
    made: 'Napravljeno s pažnjom u Bosni i Hercegovini.',
    language: 'Jezik',
  },
}

export type Copy = typeof bs
