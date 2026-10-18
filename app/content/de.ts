import type { Copy } from './bs'

export const de: Copy = {
  meta: {
    title: 'Niyyah — Die halal App für die Ehepartnersuche',
    description:
      'Niyyah ist eine App für Muslime, die heiraten möchten. Nachrichten öffnen sich erst bei gegenseitigem Interesse, ein Mahram kann im Gespräch sein, und die Gemeinschaft wird moderiert. Kostenlos, in neun Sprachen.',
    ogAlt: 'Niyyah: Ehe, mit Absicht gesucht.',
  },

  nav: {
    skip: 'Zum Inhalt springen',
    label: 'Hauptnavigation',
    home: 'Niyyah, Startseite',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'So funktioniert es' },
      { href: '#sigurnost', label: 'Sicherheit' },
      { href: '#preporuke', label: 'Stimmen' },
      { href: '#pitanja', label: 'Fragen' },
    ],
    language: 'Sprache',
    menu: 'Menü',
    close: 'Menü schließen',
  },

  cta: {
    download: 'Niyyah holen',
    waitlist: 'Sag mir, wenn Niyyah startet',
    waitlistShort: 'Benachrichtigen',
    emailLabel: 'Deine E-Mail-Adresse',
    emailPlaceholder: 'name@beispiel.com',
    sending: 'Wird gesendet',
    success: 'Danke. Wir schreiben dir, sobald Niyyah startet, in schā Allāh.',
    invalid: 'Gib eine gültige E-Mail-Adresse ein, zum Beispiel name@beispiel.com.',
    error: 'Das hat nicht geklappt. Prüfe deine Verbindung und versuch es noch einmal.',
    notConnected: 'Die Warteliste ist noch nicht offen. Schau bald wieder vorbei.',
    privacy: 'Wir nutzen deine Adresse nur für diese eine Nachricht. Wir geben sie niemals weiter.',
    soon: 'Bald im App Store und bei Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Laden im',
    availableOn: 'Jetzt bei',
    eyebrow: 'HALAL APP FÜR DIE EHE',
    waiting: '{count} Menschen warten schon auf Niyyah',
  },

  hero: {
    title: 'Ehe, mit Absicht gesucht.',
    lead:
      'Niyyah ist eine App für Muslime, die ernsthaft einen Ehepartner suchen. Nachrichten öffnen sich erst bei gegenseitigem Interesse, ein Mahram kann im Gespräch sein, und die Grenzen hält die App — nicht du.',
    secondary: 'So funktioniert der Mahram',
    micro: 'Kostenlos. Die App gibt es in neun Sprachen.',
    imageAlt: 'Eine Profilkarte in Niyyah: Gebet, Madhhab, Heiratspläne und Übereinstimmung.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verified',
    match: 'Übereinstimmung',
    rows: [
      { k: 'Glaube', v: 'Praktizierend' },
      { k: 'Gebet', v: 'Regelmäßig' },
      { k: 'Madhhab', v: 'Hanafitisch' },
      { k: 'Ehe', v: 'Innerhalb eines Jahres' },
    ],
    prompt: 'Glaube in einer Ehe bedeutet…',
    promptAnswer: 'dass wir einander an das Wichtige erinnern, auch wenn es schwer ist.',
    pass: 'Weiter',
    like: 'Gefällt mir',
  },

  problem: {
    title: 'Dating-Apps wurden nicht für die Ehe gebaut.',
    body: [
      'Sie wurden gebaut, damit du scrollst. Endlose Karten, Menschen ohne klare Absicht, Gespräche, die du deinen Eltern nie zeigen könntest.',
      'Und das Kennenlernen über Verwandte ist langsam, der Kreis ist eng und der Druck groß. Zwischen diesen beiden Welten gab es nichts für uns.',
    ],
    pains: [
      'Du weißt nicht, wer es ernst meint und wer nur schaut.',
      'Schwestern fürchten Belästigung, falsche Profile und das Gefühl, damit allein zu sein.',
      'Übersetzte Apps verstehen unsere Sprache, unseren Madhhab, unsere Gewohnheiten und die Diaspora nicht.',
    ],
    eyebrow: 'SO FUNKTIONIERT ES',
    painsLabel: 'Kommt dir bekannt vor?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Andere Apps messen Erfolg an der Zeit, die du in ihnen verbringst. Wir messen ihn an dem Nikah, nach dem du uns nicht mehr brauchst.',
  },

  pillars: {
    title: 'Für die Ehe gebaut, vom ersten Bildschirm an.',
    items: [
      {
        word: 'Absicht',
        title: 'Die Absicht kommt zuerst',
        body: 'Jedes Profil sagt, was die Person sucht und wann. Zeitrahmen für die Ehe, Kinder, Umzug: du weißt es vor der ersten Nachricht.',
      },
      {
        word: 'Familie',
        title: 'Familie, nicht allein',
        body: 'Eine Schwester kann ihren Vater, Bruder oder Vormund in ihre Gespräche einladen. Nichts wird vor denen verborgen, deren Meinung zählt.',
      },
      {
        word: 'Grenzen',
        title: 'Halal von Grund auf',
        body: 'Nur das andere Geschlecht. Nachrichten erst bei gegenseitigem Interesse. Eine Gemeinschaft, die Moderatoren prüfen. Die Grenzen hält die App, du musst sie nicht hüten.',
      },
    ],
  },

  mahrem: {
    kicker: 'Mahram-Portal',
    title: 'Nichts verborgen vor denen, deren Meinung zählt.',
    body:
      'Schalte „Mahram verlangen“ ein und lade bis zu drei Menschen deines Vertrauens ein: Vater, Bruder, Onkel oder Vormund. Sie sehen deine Gespräche im Mahram-Portal, können aber nicht schreiben und niemanden kennenlernen. Sie sind einfach da, so wie sie es auch persönlich wären.',
    steps: [
      { title: '„Mahram verlangen“ einschalten', body: 'Ein Schalter in den Einstellungen.' },
      { title: 'Bis zu drei Mahram einladen', body: 'Die Einladung kommt per E-Mail, und der Mahram nimmt sie in der App an.' },
      {
        title: 'Sie lesen, du sprichst',
        body: 'Der Mahram sieht Gespräche und Übereinstimmungen. Er kann aus dem Portal nicht schreiben und nutzt keine Funktionen zum Kennenlernen.',
      },
    ],
    who: [
      { label: 'Für sie', body: 'Du bist nicht allein. Die Familie ist da, ohne dir über die Schulter zu schauen.' },
      { label: 'Für die Familie', body: 'Ihr wisst, mit wem sie spricht und wie. Ohne Geheimnisse.' },
      { label: 'Für ihn', body: 'Ein klares Zeichen, dass sie es ernst meint und die Familie eingebunden ist.' },
    ],
    parentsTitle: 'Eltern, das ist für Sie.',
    parentsBody:
      'Wir wissen, dass „Dating-App“ nicht nach etwas für Ihre Tochter oder Schwester klingt. In Niyyah können Sie in ihren Gesprächen sein und sehen, mit wem sie schreibt und wie — ohne selbst etwas zu schreiben. Eine Nachricht kann gar nicht ankommen, bevor beide Interesse zeigen, und all das ist kostenlos.',
    share: 'Schick ihr diese Seite',
    shareDone: 'Link kopiert',
    shareText: 'Niyyah: eine App für die Ehe, in der die Familie im Gespräch sein kann.',
    imageAlt: 'Das Mahram-Portal: ein Vater liest das Gespräch seiner Tochter, ohne schreiben zu können.',
  },

  mockPortal: {
    title: 'Mahram-Portal',
    readOnly: 'Nur Lesen',
    watching: 'Du begleitest: Amina',
    with: 'Gespräch mit: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaikum. Danke, dass du das Gespräch geöffnet hast.' },
      { from: 'her', text: 'Wa alaikum assalam. Du hast geschrieben, dass sich die Familien früh kennenlernen sollten?' },
      { from: 'him', text: 'Ja. Meine Eltern würden deine gern treffen, bevor etwas Ernstes beginnt.' },
    ],
    locked: 'Aus dem Portal kann nicht geschrieben werden',
  },

  how: {
    kicker: 'So funktioniert es',
    title: 'Vom Profil zum Gespräch, in vier Schritten.',
    steps: [
      { title: 'Ein Profil mit Absicht anlegen', body: 'Glaube, Gebet, Heiratspläne und deine eigenen Worte.' },
      {
        title: 'Entdecken',
        body: 'Menschen, die deine Werte teilen, mit einem Grad an Übereinstimmung. Karten oder Landkarte, Filter nach Alter, Stadt und Glauben.',
      },
      {
        title: 'Gegenseitiges Interesse öffnet das Gespräch',
        body: 'Solange ihr euch nicht beide mögt, bleibt das Gespräch verschlossen. Mit deinen Fragen vor der ersten Nachricht.',
      },
      { title: 'Die Familie ist bei dir', body: 'Ein Mahram im Gespräch, wann du es willst.' },
    ],
  },

  questions: {
    kicker: 'Fragen vor dem Gespräch',
    title: 'Frag das Wichtige, vor der ersten Nachricht.',
    body:
      'Stelle bis zu drei Fragen. Nach der Übereinstimmung antwortet die andere Person zuerst, und du liest und entscheidest, ob sich das Gespräch öffnet. Keine drei Wochen Schreiben, nur um zu merken, dass ihr beim Grundlegenden nicht einig seid.',
    flow: ['Du stellst die Fragen', 'Die andere Person antwortet', 'Du entscheidest'],
    topics: ['Gebet', 'Hidschab', 'Umzug', 'Kinder'],
    topicsLabel: 'Am häufigsten gefragt wird nach',
    imageAlt: 'Fragen vor dem Gespräch: drei Antworten und die Entscheidung, ob sich das Gespräch öffnet.',
  },

  mockQuestions: {
    title: 'Emir hat deine Fragen beantwortet',
    qa: [
      { q: 'Betest du regelmäßig?', a: 'Ja, alle fünf. Fadschr ist für mich das Schwerste, aber ich bemühe mich.' },
      { q: 'Wo siehst du dich nach dem Nikah?', a: 'In Sarajevo, aber über einen Umzug kann man reden.' },
      { q: 'Wie wichtig ist Familie in deinen Entscheidungen?', a: 'Sehr. Ich fände es gut, wenn sich die Familien früh kennenlernen.' },
    ],
    no: 'Gefällt mir nicht',
    yes: 'Gefällt mir',
  },

  profile: {
    kicker: 'Profil',
    title: 'Lerne kennen, wie jemand denkt — nicht nur, wie er aussieht.',
    lead:
      'Neben Bildern und Beschreibung trägt das Profil das, worüber man vor dem Nikah spricht. Weniger Raten, weniger verlorene Zeit, schneller zu einem „Ja“ oder „Nein“.',
    fields: [
      { k: 'Verhältnis zum Glauben', v: ['Praktizierend', 'Ich bemühe mich', 'Derzeit nicht praktizierend'] },
      { k: 'Gebet', v: ['Regelmäßig', 'Manchmal', 'Selten'] },
      { k: 'Madhhab', v: ['Hanafitisch', 'Schafiitisch', 'Malikitisch', 'Hanbalitisch', 'Nicht wichtig'] },
      { k: 'Hidschab', v: ['Ich trage ihn', 'Ich trage ihn nicht', 'Ich habe es vor'] },
      { k: 'Zeitrahmen für die Ehe', v: ['Sofort', 'Innerhalb eines Jahres', '1–2 Jahre', 'Keine Eile'] },
      { k: 'Umzug', v: ['Bereit', 'Nicht möglich', 'Offen für ein Gespräch'] },
      { k: 'Kinder', v: ['Ich möchte welche', 'Ich möchte keine', 'Ich habe schon', 'Nicht sicher'] },
    ],
    more: 'Und dazu: Rauchen, Bildung, Beruf, Muttersprache, Größe und Interessen.',
    promptsTitle: 'In deinen Worten',
    prompts: ['Glaube in einer Ehe bedeutet…', 'Was suchst du in einem Partner?', 'Wie verbringst du dein Wochenende?'],
    situationsTitle: 'Situationen',
    situationsBody:
      'Antworte auf echte Szenarien aus sieben Bereichen. Andere sehen, wie du denkst, nicht nur wie du aussiehst.',
    situations: ['Ehe', 'Kommunikation', 'Streit lösen', 'Familie', 'Glaube', 'Finanzen', 'Erziehung'],
    matchTitle: 'Grad der Übereinstimmung',
    matchBody: 'Auf jeder Karte: gemeinsame Interessen, Verhältnis zum Glauben und Absicht.',
    imageAlt: 'Profildetails in Niyyah: Glaube, Heiratspläne und Antworten auf Situationen.',
  },

  mockDetails: {
    title: 'Über Emir',
    rows: [
      { k: 'Ehe', v: 'Innerhalb eines Jahres' },
      { k: 'Umzug', v: 'Offen für ein Gespräch' },
      { k: 'Kinder', v: 'Ich möchte welche' },
      { k: 'Beruf', v: 'Ingenieur' },
    ],
    situation: 'Situation · Streit lösen',
    question: 'Ihr habt euch wegen der Familie gestritten. Was tust du zuerst?',
    answer: 'Ich warte, bis wir beide ruhig sind, und frage dann, wie sie es sieht. Erst danach sage ich meine Sicht.',
  },

  safety: {
    kicker: 'Sicherheit und Privatsphäre',
    title: 'Deine Privatsphäre ist nicht das Produkt.',
    lead: 'Wir verkaufen deine Daten niemals. Sicherheit ist in die App eingebaut, nicht als Option angehängt.',
    items: [
      {
        icon: 'pin',
        title: 'Nie der genaue Standort',
        body: 'Die Landkarte zeigt nur eine ungefähre Gegend, und nur solange du sie einschaltest. Schaltest du sie aus, verschwindest du von der Karte.',
      },
      {
        icon: 'photo',
        title: 'Prüfung der Fotos',
        body: 'Ein klares Gesicht, eine Person, nichts Verschwommenes oder Verdecktes. Verborgene Daten im Bild, etwa den GPS-Standort, entfernt das System.',
      },
      {
        icon: 'badge',
        title: 'Verified-Abzeichen',
        body: 'Eine kurze Prüfung, dass du die Person auf den Bildern bist. Telefonnummer oder E-Mail bestätigst du, bevor du Entdecken betreten darfst.',
      },
      {
        icon: 'people',
        title: 'Echte Moderatoren',
        body: 'Meldungen liest ein eigenes Moderationsteam, das Profile sperren und verbannen kann.',
      },
      {
        icon: 'block',
        title: 'Blockieren wirkt in beide Richtungen',
        body: 'Blockierst du jemanden, verschwindet ihr füreinander aus der App.',
      },
      {
        icon: 'pause',
        title: 'Entdecken pausieren',
        body: 'Verbirg dein Profil, ohne es zu löschen. Übereinstimmungen und Gespräche bleiben.',
      },
      {
        icon: 'finger',
        title: 'Entsperren mit Fingerabdruck oder Gesicht',
        body: 'Dein Fingerabdruck verlässt dein Gerät nie.',
      },
    ],
    ayahRef: 'Al-Qiyāma 75:4',
    ayahNote:
      'Auf dem Entsperrbildschirm steht ein Vers aus der Sure Al-Qiyāma (75:3–4), über Allah, der sogar die Fingerkuppen wieder zusammenfügen kann.',
  },

  community: {
    kicker: 'Gemeinschaft',
    title: 'Ein Ort, um vor der Ehe über die Ehe zu lernen.',
    lead:
      'Du fragst, liest Erfahrungen, lernst von anderen. Jeder Beitrag wird von Moderatoren geprüft, bevor er erscheint, und es gibt keine Kommentare, unter die niemand seinen Namen setzen würde.',
    items: [
      { title: 'Frag die Brüder, Frag die Schwestern', body: 'Getrennte Räume, die nur ein Geschlecht sieht.' },
      {
        title: 'Anonym, wenn es sein muss',
        body: 'Manche Fragen stellt man schwer unter eigenem Namen. Veröffentliche als „Anonyme Schwester“ oder „Anonymer Bruder“.',
      },
      { title: 'Frage des Tages', body: 'Jeden Tag eine Frage über Ehe und Werte, auf dem Startbildschirm.' },
      {
        title: 'Geschichten ohne öffentliche Kommentare',
        body: '24 Stunden oder eine einzige Ansicht. Für die ganze Gemeinschaft oder nur für Übereinstimmungen.',
      },
    ],
    reactionsLabel: 'Reaktionen, die Nützlichkeit belohnen, nicht das Ego',
    reactions: ['Hilfreich', 'Ergibt Sinn', 'Inspirierend', 'Durchdacht'],
    imageAlt: 'Die Gemeinschaft in Niyyah: eine anonyme Frage im Raum Frag die Schwestern.',
  },

  mockPost: {
    space: 'Frag die Schwestern',
    author: 'Anonyme Schwester',
    category: 'Ehe',
    text: 'Wie habt ihr euren Eltern gesagt, dass ihr über eine App einen Ehepartner sucht? Wie haben sie reagiert?',
    reviewed: 'Von einem Moderator geprüft',
  },

  languages: {
    title: 'In deiner Sprache, wo du auch bist.',
    lead:
      'Die App, E-Mails und Benachrichtigungen in neun Sprachen. Arabisch und Urdu laufen von rechts nach links, und kroatische und serbische Geräte bekommen automatisch Bosnisch. Ob du in Sarajevo, Wien, Malmö oder Istanbul bist.',
  },

  pricing: {
    kicker: 'Kostenlos und Coins',
    title: 'Was dich schützt, ist kostenlos.',
    lead: 'Mahram, Fragen vor dem Gespräch, der verschlossene Chat und die Moderation stehen allen offen. Für Sicherheit zahlt man bei uns nicht. Coins machen es nur schneller — und es gibt kein Abo.',
    freeTitle: 'Kostenlos, für jeden',
    free: [
      'Ein Profil und 30 Profile am Tag in Entdecken',
      '20 Likes am Tag',
      '1 Einstiegsnachricht am Tag',
      'Übereinstimmungen und unbegrenztes Gespräch mit ihnen',
      'Ein Mahram im Gespräch',
      'Fragen vor dem Gespräch',
      'Gemeinschaft, Geschichten und Frage des Tages',
      'Jeden Tag kostenlose Coins',
    ],
    premiumTitle: 'Coins, wenn du mehr willst',
    premium: [
      'Sieh, wer dich geliked hat',
      'Ein Super-Like, der das Gespräch sofort öffnet',
      'Zusätzliche Einstiegsnachrichten',
      'Mehr Likes und Profile für heute',
      'Hol ein übersprungenes Profil zurück',
      'Antworten auf Geschichten in der Gemeinschaft',
      'Boost: dein Profil zuerst in Entdecken',
    ],
    extra:
      'Coins bekommst du auch kostenlos: jeden Tag, für sieben Tage in Folge, für ein vollständiges Profil und für eingeladene Freunde. Kaufen musst du sie nur, wenn du willst, einmalig im App Store oder bei Google Play — ohne Abo und ohne automatische Verlängerung.',
  },


  about: {
    kicker: 'Über uns',
    quote:
      'Niyyah ist für Menschen da, die einen Ehepartner suchen und keine Unterhaltung. Alles hier ist um diesen einen Zweck gebaut: Profile, die etwas Wirkliches sagen, Gespräche, in denen die Familie anwesend sein kann, und Grenzen, die halten, ohne dass sie jemand hüten muss.',
    small:
      'Wir sind ein kleines Team, das für die eigene Gemeinschaft baut, und uns ist eine stille und verlässliche App lieber als eine laute und belebte.',
    made: 'Mit Sorgfalt gemacht in Bosnien und Herzegowina.',
  },

  faq: {
    title: 'Fragen, die uns oft gestellt werden',
    items: [
      {
        q: 'Wodurch unterscheidet sich Niyyah von anderen Dating-Apps?',
        a: 'Niyyah ist für die Ehe gebaut, nicht zum Scrollen. Entdecken zeigt nur das andere Geschlecht, Nachrichten öffnen sich erst, wenn ihr euch beide geliked habt, und eine Schwester kann einen Mahram in ihre Gespräche einbeziehen. Das Profil trägt das, was vor dem Nikah wichtig ist: Gebet, Madhhab, Heiratspläne, Kinder und Umzug.',
      },
      {
        q: 'Was ist ein Mahram und wie füge ich ihn hinzu?',
        a: 'Ein Mahram ist ein männliches Familienmitglied, mit dem eine Ehe dauerhaft unzulässig ist, zum Beispiel Vater, Bruder oder Onkel. Du kannst auch einen Vormund einladen. In den Einstellungen schaltest du „Mahram verlangen“ ein und lädst bis zu drei Personen ein. Die Einladung kommt per E-Mail, und der Mahram nimmt sie in der App an. Im Mahram-Portal sieht er dann deine Gespräche und Übereinstimmungen, kann aber nicht schreiben. Die Funktion steht weiblichen Profilen offen.',
      },
      {
        q: 'Ist Niyyah halal?',
        a: 'Wir geben keine Fatwas heraus und behaupten nicht, von einer Institution genehmigt zu sein. Zeigen können wir die Grenzen, die in die App eingebaut sind: du siehst nur das andere Geschlecht, ein Gespräch öffnet sich erst bei gegenseitigem Interesse, ein Mahram kann Gespräche lesen, und die Gemeinschaft prüfen Moderatoren. Mit welcher Absicht du sie nutzt, bleibt bei dir. Wenn du unsicher bist, frag einen Imam, dem du vertraust.',
      },
      {
        q: 'Was sind Fragen vor dem Gespräch?',
        a: 'Eine Möglichkeit, bis zu drei eigene Fragen zu stellen. Nach der Übereinstimmung antwortet die andere Person zuerst darauf. Du liest die Antworten und entscheidest: „Gefällt mir“ öffnet das Gespräch, „Gefällt mir nicht“ öffnet es nicht.',
      },
      {
        q: 'Wer kann meinen Standort sehen?',
        a: 'Niemand sieht deinen genauen Standort. Auf der Karte in Entdecken erscheinst du nur als ungefähre Gegend, und nur wenn du das einschaltest. Schaltest du es aus, verschwindest du von der Karte. Verborgene Daten aus Fotos, etwa den GPS-Standort, entfernt das System beim Hochladen.',
      },
      {
        q: 'Wie schützt ihr vor falschen Profilen?',
        a: 'Das Verified-Abzeichen heißt, dass die Person eine Gesichtsprüfung bestanden hat: Ein Live-Foto von ihr wurde mit den Bildern in ihrem Profil verglichen. Meldungen lesen echte Moderatoren, die Profile sperren oder verbannen können, und Blockieren wirkt in beide Richtungen. Ein verbanntes Konto kann nicht einfach mit einer neuen E-Mail-Adresse zurückkommen.',
      },
      {
        q: 'Was ist kostenlos und was kostet Coins?',
        a: 'Kostenlos ist alles, was dich schützt: Mahram, Fragen vor dem Gespräch, der verschlossene Chat und die Moderation, dazu 20 Likes und eine Einstiegsnachricht am Tag sowie unbegrenztes Gespräch mit Übereinstimmungen. Mit Coins siehst du, wer dich geliked hat, schickst einen Super-Like oder eine zusätzliche Einstiegsnachricht, bekommst mehr Profile und Likes für den Tag und antwortest auf Geschichten. Coins bekommst du jeden Tag kostenlos, und du kannst sie auch einmalig kaufen. Es gibt kein Abo, also gibt es auch nichts zu kündigen.',
      },
      {
        q: 'Kann ich mein Profil vorübergehend verbergen?',
        a: 'Ja. Pausiere Entdecken, und das Profil verschwindet aus Entdecken, ohne gelöscht zu werden. Übereinstimmungen und Gespräche bleiben, und du holst das Profil zurück, wann du willst.',
      },
      {
        q: 'In welchen Sprachen gibt es die App?',
        a: 'In neun: Bosnisch, Englisch, Deutsch, Türkisch, Arabisch, Indonesisch, Urdu, Malaiisch und Französisch. Kroatische und serbische Geräte bekommen automatisch Bosnisch.',
      },
    ],
  },

  final: {
    title: 'Beginne mit Absicht.',
    leadLaunched: 'Lege ein Profil an und begegne Menschen, die ernsthaft etwas Wirkliches aufbauen wollen.',
    leadWaitlist:
      'Lass deine E-Mail da, und wir melden uns, sobald Niyyah startet. Dann legst du ein Profil an und begegnest Menschen, die ernsthaft etwas Wirkliches aufbauen wollen.',
  },

  consent: {
    title: 'Messung von Anzeigen',
    more: 'Was das bedeutet',
    details:
      'Ein Pixel von Facebook zählt, wie viele Menschen unsere Anzeige hierher bringt und wer sich einträgt. Deine E-Mail-Adresse senden wir nie. Lehnst du ab, wird gar nichts von Facebook geladen.',
    close: 'Schließen',
    body:
      'Wir messen, wie viele Menschen unsere Anzeigen hierher bringen. Nichts weiter, und deine E-Mail-Adresse geht nie weiter.',
    accept: 'Einverstanden',
    decline: 'Nein danke',
    label: 'Messung von Anzeigen',
    change: 'Einstellung zur Messung',
  },

  footer: {
    tagline: 'Ehe, mit Absicht gesucht.',
    made: 'Mit Sorgfalt gemacht in Bosnien und Herzegowina.',
    rights: 'Niyyah',
    language: 'Sprache',
  },
}
