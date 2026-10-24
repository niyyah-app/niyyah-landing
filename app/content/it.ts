import type { Copy } from './bs'

export const it: Copy = {
  meta: {
    title: 'Niyyah — L’app halal per trovare un coniuge',
    description:
      'Niyyah è un’app per musulmani che cercano il matrimonio. I messaggi si aprono solo con interesse reciproco, un mahram può essere nella conversazione e la comunità è moderata. Gratis, in nove lingue.',
    ogAlt: 'Niyyah: il matrimonio, cercato con intenzione.',
  },

  nav: {
    skip: 'Vai al contenuto',
    label: 'Navigazione principale',
    home: 'Niyyah, pagina iniziale',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Come funziona' },
      { href: '#sigurnost', label: 'Sicurezza' },
      { href: '#preporuke', label: 'Testimonianze' },
      { href: '#pitanja', label: 'Domande' },
    ],
    language: 'Lingua',
    menu: 'Menu',
    close: 'Chiudi il menu',
  },

  cta: {
    download: 'Scarica Niyyah',
    waitlist: 'Avvisami quando Niyyah parte',
    waitlistShort: 'Avvisami',
    emailLabel: 'Il tuo indirizzo email',
    emailPlaceholder: 'nome@esempio.com',
    sending: 'Invio',
    success: 'Grazie. Ti scriveremo appena Niyyah parte, in shā Allāh.',
    invalid: 'Scrivi un indirizzo email valido, per esempio nome@esempio.com.',
    error: 'Non è andata. Controlla la connessione e riprova.',
    tooMany: 'Troppi tentativi. Riprova tra qualche minuto.',
    notConnected: 'La lista d’attesa non è ancora aperta. Torna presto.',
    privacy: 'Usiamo il tuo indirizzo solo per avvisarti quando Niyyah parte e perché ti aspetti un regalo di benvenuto. Non lo vendiamo e non lo diamo a nessuno per la pubblicità.',
    soon: 'Presto su App Store e Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Scaricala su',
    availableOn: 'Disponibile su',
    eyebrow: 'APP HALAL PER IL MATRIMONIO',
    waiting: '{count} persone aspettano già Niyyah',
  },

  hero: {
    countdown: 'Niyyah arriva tra',
    countdownUnits: ['giorni', 'ore', 'minuti', 'secondi'],
    title: 'Il matrimonio, cercato con intenzione.',
    lead:
      'Niyyah è un’app per musulmani che cercano seriamente un coniuge. I messaggi si aprono solo con interesse reciproco, un mahram può essere nella conversazione e i limiti li tiene l’app, non tu.',
    secondary: 'Come funziona il mahram',
    micro: 'Gratis. L’app è in nove lingue.',
    imageAlt: 'Una scheda profilo in Niyyah: preghiera, madhhab, progetti di matrimonio e percentuale di affinità.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verificata',
    match: 'di affinità',
    rows: [
      { k: 'Fede', v: 'Praticante' },
      { k: 'Preghiera', v: 'Regolarmente' },
      { k: 'Madhhab', v: 'Hanafita' },
      { k: 'Matrimonio', v: 'Entro un anno' },
    ],
    prompt: 'La fede nel matrimonio significa…',
    promptAnswer: 'ricordarci l’uno all’altro ciò che conta, anche quando è faticoso.',
    pass: 'Avanti',
    like: 'Mi piace',
  },

  problem: {
    title: 'Le app di incontri non sono state fatte per il matrimonio.',
    body: [
      'Sono state fatte perché tu continui a scorrere. Schede senza fine, persone senza un’intenzione chiara, conversazioni che non potresti mai mostrare ai tuoi genitori.',
      'E conoscersi tramite i parenti è lento, il giro è stretto e la pressione pesa. Tra questi due mondi non c’era nulla per noi.',
    ],
    pains: [
      'Non sai chi fa sul serio e chi è lì solo per guardare.',
      'Le sorelle temono le molestie, i profili falsi e di affrontare tutto da sole.',
      'Le app tradotte non capiscono la nostra lingua, il nostro madhhab, le nostre usanze né la diaspora.',
    ],
    eyebrow: 'COME FUNZIONA',
    painsLabel: 'Ti suona familiare?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Le altre app misurano il successo col tempo che passi al loro interno. Noi lo misuriamo col nikah dopo il quale non hai più bisogno di noi.',
  },

  pillars: {
    title: 'Costruita per il matrimonio, dalla prima schermata.',
    items: [
      {
        word: 'Intenzione',
        title: 'Prima l’intenzione',
        body: 'Ogni profilo dice che cosa cerca la persona e quando. Tempi per il matrimonio, figli, trasferimento: lo sai prima del primo messaggio.',
      },
      {
        word: 'Famiglia',
        title: 'Con la famiglia, non da sola',
        body: 'Una sorella può invitare suo padre, suo fratello o il suo tutore a essere nelle sue conversazioni. Niente resta nascosto a chi conta.',
      },
      {
        word: 'Limiti',
        title: 'Halal per come è fatta',
        body: 'Solo il sesso opposto. Messaggi solo con interesse reciproco. Una comunità rivista dai moderatori. I limiti li tiene l’app: non devi custodirli tu.',
      },
    ],
  },

  mahrem: {
    kicker: 'Portale del mahram',
    title: 'Niente nascosto a chi conta.',
    body:
      'Attiva «Richiedi un mahram» e invita fino a tre persone di cui ti fidi: tuo padre, tuo fratello, tuo zio o il tuo tutore. Vedono le tue conversazioni nel portale del mahram, ma non possono scrivere né conoscere nessuno. Sono semplicemente presenti, come lo sarebbero di persona.',
    steps: [
      { title: 'Attiva «Richiedi un mahram»', body: 'Un solo interruttore nelle impostazioni.' },
      { title: 'Invita fino a tre mahram', body: 'L’invito arriva per email e il mahram lo accetta nell’app.' },
      {
        title: 'Loro leggono, tu parli',
        body: 'Il mahram vede conversazioni e corrispondenze. Non può scrivere dal portale e non usa funzioni per conoscere qualcuno.',
      },
    ],
    who: [
      { label: 'Per lei', body: 'Non sei sola. La famiglia è presente senza starti sopra le spalle.' },
      { label: 'Per la famiglia', body: 'Sapete con chi parla e come. Senza segreti.' },
      { label: 'Per lui', body: 'Un segno chiaro che fa sul serio e che la famiglia è coinvolta.' },
    ],
    parentsTitle: 'Genitori, questo è per voi.',
    parentsBody:
      'Sappiamo che «app di incontri» non suona come qualcosa per vostra figlia o vostra sorella. In Niyyah potete essere nelle sue conversazioni e vedere con chi scrive e come, senza scrivere nulla voi. Una conversazione non può nemmeno aprirsi prima che entrambe le parti mostrino interesse, e tutto questo è gratis.',
    share: 'Mandale questa pagina',
    shareDone: 'Link copiato',
    shareText: 'Niyyah: l’app per il matrimonio in cui la famiglia può essere nella conversazione.',
    imageAlt: 'Il portale del mahram: un padre legge la conversazione della figlia, senza poter scrivere.',
  },

  mockPortal: {
    title: 'Portale del mahram',
    readOnly: 'Solo lettura',
    watching: 'Stai seguendo: Amina',
    with: 'Conversazione con: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaikum. Grazie per aver aperto la conversazione.' },
      { from: 'her', text: 'Wa alaikum assalam. Hai scritto che vorresti che le famiglie si conoscessero presto?' },
      { from: 'him', text: 'Sì. I miei genitori vorrebbero conoscere i tuoi prima di qualcosa di serio.' },
    ],
    locked: 'Dal portale non si può scrivere',
  },

  how: {
    kicker: 'Come funziona',
    title: 'Dal profilo alla conversazione, in quattro passi.',
    steps: [
      { title: 'Crea un profilo con intenzione', body: 'Fede, preghiera, progetti di matrimonio e le tue parole.' },
      {
        title: 'Scopri',
        body: 'Persone che condividono i tuoi valori, con la percentuale di affinità. Schede o mappa, con filtri per età, città e fede.',
      },
      {
        title: 'L’interesse reciproco apre la conversazione',
        body: 'Finché non vi piacete entrambi, la conversazione resta chiusa. Con le tue domande prima del primo messaggio.',
      },
      { title: 'La famiglia è con te', body: 'Un mahram nella conversazione, quando vuoi.' },
    ],
  },

  questions: {
    kicker: 'Domande prima della conversazione',
    title: 'Chiedi ciò che conta, prima del primo messaggio.',
    body:
      'Poni fino a tre domande. Dopo la corrispondenza l’altra persona risponde per prima, poi tu leggi e decidi se la conversazione si apre. Senza tre settimane di messaggi per scoprire che non siete d’accordo sull’essenziale.',
    flow: ['Le domande le poni tu', 'L’altra persona risponde', 'Decidi tu'],
    topics: ['Preghiera', 'Hijab', 'Trasferimento', 'Figli'],
    topicsLabel: 'Si chiede più spesso di',
    imageAlt: 'Domande prima della conversazione: tre risposte e la scelta se aprirla.',
  },

  mockQuestions: {
    title: 'Emir ha risposto alle tue domande',
    qa: [
      { q: 'Preghi regolarmente?', a: 'Sì, tutte e cinque. Il fajr è il più faticoso per me, ma mi impegno.' },
      { q: 'Dove ti vedi dopo il nikah?', a: 'A Sarajevo, ma sono aperto a parlare di un trasferimento.' },
      { q: 'Quanto pesa la famiglia nelle tue decisioni?', a: 'Molto. Vorrei che le famiglie si conoscessero presto.' },
    ],
    no: 'Non mi piace',
    yes: 'Mi piace',
  },

  profile: {
    kicker: 'Profilo',
    title: 'Conosci come pensa, non solo come appare.',
    lead:
      'Oltre alle foto e alla descrizione, il profilo porta ciò di cui si parla prima del nikah. Meno congetture, meno tempo perso, più in fretta a un «sì» o a un «no».',
    fields: [
      { k: 'Rapporto con la fede', v: ['Praticante', 'Mi impegno', 'Al momento non pratico'] },
      { k: 'Preghiera', v: ['Regolarmente', 'A volte', 'Raramente'] },
      { k: 'Madhhab', v: ['Hanafita', 'Shafiita', 'Malikita', 'Hanbalita', 'Non importa'] },
      { k: 'Hijab', v: ['Lo porto', 'Non lo porto', 'Ho intenzione'] },
      { k: 'Tempi per il matrimonio', v: ['Subito', 'Entro un anno', '1–2 anni', 'Nessuna fretta'] },
      { k: 'Trasferimento', v: ['Disponibile', 'Non possibile', 'Aperto/a a parlarne'] },
      { k: 'Figli', v: ['Ne voglio', 'Non ne voglio', 'Ne ho già', 'Non sono sicuro/a'] },
    ],
    more: 'E ancora: fumo, studi, professione, lingua madre, altezza e interessi.',
    promptsTitle: 'Con le tue parole',
    prompts: ['La fede nel matrimonio significa…', 'Che cosa cerchi in un coniuge?', 'Come passi il fine settimana?'],
    situationsTitle: 'Situazioni',
    situationsBody:
      'Rispondi a scenari reali in sette ambiti. Gli altri vedono come pensi, non solo come appari.',
    situations: ['Matrimonio', 'Comunicazione', 'Risolvere i conflitti', 'Famiglia', 'Fede', 'Soldi', 'Essere genitori'],
    matchTitle: 'Percentuale di affinità',
    matchBody: 'Su ogni scheda: interessi comuni, rapporto con la fede e intenzione.',
    imageAlt: 'Dettagli del profilo in Niyyah: fede, progetti di matrimonio e risposte alle situazioni.',
  },

  mockDetails: {
    title: 'Su Emir',
    rows: [
      { k: 'Matrimonio', v: 'Entro un anno' },
      { k: 'Trasferimento', v: 'Aperto a parlarne' },
      { k: 'Figli', v: 'Ne voglio' },
      { k: 'Professione', v: 'Ingegnere' },
    ],
    situation: 'Situazione · Risolvere i conflitti',
    question: 'Avete litigato per la famiglia. Che cosa fai per primo?',
    answer: 'Aspetto che ci siamo calmati entrambi, poi le chiedo come la vede lei. Solo dopo dico la mia.',
  },

  safety: {
    kicker: 'Sicurezza e riservatezza',
    title: 'La tua riservatezza non è il prodotto.',
    lead: 'Non vendiamo mai i tuoi dati. La sicurezza è costruita dentro l’app, non aggiunta come opzione.',
    items: [
      {
        icon: 'pin',
        title: 'Mai la posizione esatta',
        body: 'La mappa mostra solo una zona approssimativa, e soltanto finché la tieni attiva. La disattivi e sparisci dalla mappa.',
      },
      {
        icon: 'photo',
        title: 'Controllo delle foto',
        body: 'Le foto sfocate o troppo piccole non vengono accettate, e i dati nascosti nell’immagine, come la posizione GPS, il sistema li rimuove. Il tuo selfie di verifica viene confrontato automaticamente con le tue foto, e ciò che non è chiaro lo controlla una persona del nostro team.',
      },
      {
        icon: 'badge',
        title: 'Contrassegno Verificato',
        body: 'Un controllo breve che tu sia la persona delle foto. Numero di telefono o email li confermi prima di entrare in Scopri.',
      },
      {
        icon: 'people',
        title: 'Moderatori veri',
        body: 'Le segnalazioni le legge una squadra di moderazione dedicata che può sospendere e bandire profili.',
      },
      {
        icon: 'block',
        title: 'Il blocco vale nei due sensi',
        body: 'Se blocchi qualcuno, sparite l’uno all’altro dentro l’app.',
      },
      {
        icon: 'pause',
        title: 'Metti Scopri in pausa',
        body: 'Nascondi il profilo senza cancellarlo. Corrispondenze e conversazioni restano.',
      },
      {
        icon: 'finger',
        title: 'Sblocco con impronta o volto',
        body: 'La tua impronta non lascia mai il tuo dispositivo.',
      },
    ],
    ayahRef: 'Al-Qiyama 75:4',
    ayahNote:
      'Sulla schermata di sblocco c’è un versetto della sura Al-Qiyama (75:3–4), su Allah, capace di ricomporre perfino i polpastrelli.',
  },

  community: {
    kicker: 'Comunità',
    title: 'Un posto per imparare del matrimonio prima del matrimonio.',
    lead:
      'Chiedi, leggi esperienze, impari dagli altri. Ogni pubblicazione passa da un moderatore prima di comparire, e non ci sono commenti sotto i quali nessuno metterebbe il proprio nome.',
    items: [
      { title: 'Chiedi ai fratelli, Chiedi alle sorelle', body: 'Spazi separati che vede solo un sesso.' },
      {
        title: 'Anonimo, quando serve',
        body: 'Alcune domande si fanno a fatica col proprio nome. Pubblica come «Sorella anonima» o «Fratello anonimo».',
      },
      { title: 'Domanda del giorno', body: 'Ogni giorno una domanda su matrimonio e valori, sulla schermata iniziale.' },
      {
        title: 'Racconti senza commenti pubblici',
        body: '24 ore o una sola visualizzazione. Per tutta la comunità o solo per le tue corrispondenze.',
      },
    ],
    reactionsLabel: 'Reazioni che premiano l’utilità, non l’ego',
    reactions: ['Utile', 'Ha senso', 'Ispirante', 'Ben pensato'],
    imageAlt: 'La comunità di Niyyah: una domanda anonima nello spazio Chiedi alle sorelle.',
  },

  mockPost: {
    space: 'Chiedi alle sorelle',
    author: 'Sorella anonima',
    category: 'Matrimonio',
    text: 'Come avete detto ai vostri genitori che cercavate un coniuge tramite un’app? Come hanno reagito?',
    reviewed: 'Rivisto da un moderatore',
  },

  languages: {
    title: 'La pagina nella tua lingua, l’app in nove lingue.',
    lead:
      'Questa pagina la leggi in italiano. L’app stessa, le email e le notifiche sono in nove lingue: bosniaco, inglese, tedesco, turco, arabo, indonesiano, urdu, malese e francese. L’arabo e l’urdu si leggono da destra a sinistra. Che tu sia a Milano, Roma, Sarajevo o Istanbul.',
  },


  pricing: {
    kicker: 'Gratis e monete',
    title: 'Ciò che ti protegge è gratis.',
    lead: 'Il mahram, le domande prima della conversazione, la chat chiusa e la moderazione sono per tutti. Per la sicurezza non facciamo pagare. Le monete accelerano soltanto — e non c’è abbonamento.',
    freeTitle: 'Gratis, per tutti',
    free: [
      'Un profilo e 30 profili al giorno in Scopri',
      '20 «mi piace» al giorno',
      'Vedi chi ti ha messo «mi piace»: 1 persona al giorno',
      'Leggere tutti i messaggi che ti inviano',
      'Corrispondenze e conversazione illimitata con loro',
      'Un mahram nella conversazione',
      'Domande prima della conversazione',
      'Comunità, racconti e Domanda del giorno',
      'Monete gratis ogni giorno',
    ],
    premiumTitle: 'Monete, quando vuoi di più',
    premium: [
      'Vedi tutti quelli che ti hanno messo «mi piace»',
      'Super «mi piace»: il tuo «mi piace» in cima, con nome e foto',
      'Messaggi diretti (un «mi piace» con messaggio)',
      'Più «mi piace» e profili per oggi',
      'Recupera un profilo che hai saltato',
      'Rispondere ai racconti della comunità',
      'Boost: il tuo profilo per primo in Scopri',
    ],
    extra:
      'Le monete le guadagni anche gratis: ogni giorno, per sette giorni di fila, per il profilo completato e per gli amici invitati. Le compri solo se vuoi, una volta sola, sull’App Store o su Google Play — senza abbonamento e senza rinnovo automatico.',
  },


  about: {
    kicker: 'Chi siamo',
    quote:
      'Niyyah esiste per chi cerca un coniuge, non un passatempo. Tutto qui è costruito attorno a quell’unico scopo: profili che dicono qualcosa di vero, conversazioni in cui la famiglia può essere presente, e limiti che tengono senza che nessuno debba custodirli.',
    small:
      'Siamo una piccola squadra che costruisce per la propria comunità, e preferiamo un’app silenziosa e affidabile a una rumorosa e affollata.',
    made: 'Fatta con cura in Bosnia ed Erzegovina.',
  },

  faq: {
    title: 'Le domande che ci fanno spesso',
    items: [
      {
        q: 'In che cosa Niyyah è diversa dalle altre app di incontri?',
        a: 'Niyyah è costruita per il matrimonio, non per lo scorrimento. Scopri mostra solo il sesso opposto, i messaggi si aprono solo quando vi siete piaciuti entrambi, e una sorella può inserire un mahram nelle sue conversazioni. Il profilo porta ciò che conta prima del nikah: la preghiera, il madhhab, i progetti di matrimonio, i figli e il trasferimento.',
      },
      {
        q: 'Che cos’è un mahram e come lo aggiungo?',
        a: 'Un mahram è un parente maschio con cui il matrimonio è vietato per sempre, per esempio il padre, il fratello o lo zio. Puoi invitare anche un tutore. Nelle impostazioni attivi «Richiedi un mahram» e inviti fino a tre persone. L’invito arriva per email e il mahram lo accetta nell’app. Nel portale del mahram vede poi le tue conversazioni e corrispondenze, ma non può scrivere. La funzione è disponibile sui profili femminili.',
      },
      {
        q: 'Niyyah è halal?',
        a: 'Non emettiamo fatwa e non sosteniamo di essere approvati da alcuna istituzione. Ciò che possiamo mostrare sono i limiti costruiti nell’app: vedi solo il sesso opposto, una conversazione si apre solo con interesse reciproco, un mahram può leggere le conversazioni e i moderatori rivedono la comunità. Con quale intenzione la usi resta a te. Se hai dubbi, chiedi a un imam di cui ti fidi.',
      },
      {
        q: 'Che cosa sono le domande prima della conversazione?',
        a: 'Un’opzione in cui poni fino a tre domande tue. Dopo la corrispondenza, l’altra persona risponde per prima. Tu leggi le risposte e decidi: «Mi piace» apre la conversazione, «Non mi piace» non la apre.',
      },
      {
        q: 'Chi può vedere la mia posizione?',
        a: 'Nessuno vede la tua posizione esatta. Sulla mappa di Scopri compari solo come zona approssimativa, e soltanto se la attivi. La disattivi e sparisci dalla mappa. I dati nascosti nelle foto, come la posizione GPS, vengono rimossi al caricamento.',
      },
      {
        q: 'Come vi proteggete dai profili falsi?',
        a: 'Il contrassegno Verificato significa che la persona ha superato un controllo del volto: una sua foto scattata dal vivo è stata confrontata con le immagini del profilo. Le segnalazioni le leggono moderatori veri, che possono sospendere o bandire un profilo, e il blocco vale nei due sensi. Un account bandito non può semplicemente tornare con un nuovo indirizzo email.',
      },
      {
        q: 'Che cosa è gratis e che cosa costa monete?',
        a: 'Tutto ciò che ti protegge è gratis: il mahram, le domande prima della conversazione, la chat chiusa e la moderazione, più 30 profili e 20 «mi piace» al giorno, una persona al giorno tra quelle che ti hanno messo «mi piace», la lettura di tutti i messaggi che ti inviano e una conversazione illimitata con le tue corrispondenze. Con le monete puoi vedere tutti quelli che ti hanno messo «mi piace», inviare un super «mi piace» (il tuo «mi piace» in cima, in evidenza, con nome e foto) o un messaggio diretto (un «mi piace» con messaggio, che l’altra persona legge gratis), avere più profili e «mi piace» per la giornata e rispondere ai racconti. La conversazione si apre solo quando vi piacete a vicenda. Guadagni monete gratis ogni giorno, e puoi anche comprarle una volta sola. Non c’è abbonamento, quindi non c’è niente da disdire.',
      },
      {
        q: 'Posso nascondere il profilo per un po’?',
        a: 'Sì. Metti Scopri in pausa e il profilo sparisce da Scopri senza essere cancellato. Corrispondenze e conversazioni restano, e riporti il profilo quando vuoi.',
      },
      {
        q: 'In quali lingue è l’app?',
        a: 'In nove: bosniaco, inglese, tedesco, turco, arabo, indonesiano, urdu, malese e francese. I dispositivi in croato e serbo ricevono il bosniaco in automatico.',
      },
    ],
  },

  final: {
    title: 'Comincia con un’intenzione.',
    leadLaunched: 'Crea il profilo e incontra persone che vogliono davvero costruire qualcosa di vero.',
    leadWaitlist:
      'Lascia la tua email e ti avviseremo appena Niyyah parte. Poi crea il profilo e incontra persone che vogliono davvero costruire qualcosa di vero.',
  },

  consent: {
    title: 'Misurazione degli annunci',
    more: 'Che cosa significa',
    details:
      'Un pixel di Facebook conta quante persone porta qui il nostro annuncio e chi si iscrive. Il tuo indirizzo email non glielo inviamo mai. Se rifiuti, da Facebook non viene caricato nulla.',
    close: 'Chiudi',
    body:
      'Misuriamo quante persone portano qui i nostri annunci. Nient’altro, e il tuo indirizzo email non va mai oltre.',
    accept: 'Accetto',
    decline: 'No, grazie',
    label: 'Misurazione degli annunci',
    change: 'Scelta sulla misurazione',
  },

  footer: {
    tagline: 'Il matrimonio, cercato con intenzione.',
    made: 'Fatta con cura in Bosnia ed Erzegovina.',
    language: 'Lingua',
  },
}
