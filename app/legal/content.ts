// Generisano iz niyyah/frontend/lib/features/about/legal_content.dart — isti
// tekst kao u aplikaciji. Mijenja se tamo, pa se ovaj fajl ponovo izvozi.

export type LegalSection = { h: string; b: string }

export const legalUpdated = "23.10.2026."

export const privacy: Record<string, LegalSection[]> = {
  "en": [
    {
      "h": "Who is responsible",
      "b": "Niyyah is run by Puzzles IT OÜ, a private limited company registered in Estonia (registry code 16552842; address: Sepapaja tn 6, 15551 Tallinn, Estonia), which is the controller of your personal data. The company is represented by its management board member, Nermedin Džeković. For anything in this policy, write to support@niyyahmarriage.com."
    },
    {
      "h": "What we collect",
      "b": "What you give us: your name, date of birth, gender, email address, city, photos, and your answers on the profile (such as religious practice, marital status, children and plans for marriage). What arises as you use the app: likes, passes, matches, messages and voice messages, community posts, comments and stories, coin purchases, reports you file, the profiles and stories you have viewed, and the days on which you opened the app. Technical data: your device type, app version, time zone, a notification token, the identifier of your Google or Apple account if you sign in with one, and an identifier of your phone. The app keeps that identifier in the phone's secure storage, so it stays the same if you reinstall the app; our server stores only a fingerprint of it — a one-way hash from which the identifier cannot be recovered. To limit how many new accounts are opened from one network, we keep a fingerprint of your IP address for 24 hours; a report you file keeps one too, so that one person cannot pass for several reporters. If you sign in with Apple, we keep the token Apple issues for your account, encrypted, so that we can disconnect your Apple ID when you delete the account. Staff accounts also have a two-factor sign-in secret, stored encrypted. If you join the waitlist on our website, we keep only your email address and language: to tell you when Niyyah launches and to give you a welcome gift if you sign up with the same address. We delete it at the latest 12 months after the launch email. Once the gift has been given, the address itself is deleted and only a one-way fingerprint of it and its domain remain, for two years, so that the same gift cannot be claimed twice."
    },
    {
      "h": "Why we use it, and on what basis",
      "b": "To run the service you signed up for — showing you suitable profiles, delivering your messages, processing purchases and answering you when you write to us — because our agreement with you requires it. To keep the community safe — moderation, the automatic checks described below, and the fingerprints of devices, IP addresses and email addresses that keep banned people and duplicate accounts out — because that is our legitimate interest, and that of every member, in a safe service. Your religious information, the face check photo and a mahrem's identity documents are special categories of data, and we process them only with explicit consent: you give it for religious information when you sign the commitment at the end of sign-up, and for the face check and identity documents by choosing to submit them. Payment records are kept because accounting law requires it. On our website, Meta measures visits only with your consent. We do not build advertising profiles from your data, and we do not use your messages to target you with anything."
    },
    {
      "h": "Automatic checks",
      "b": "Some text is checked automatically before it is saved. A phone number, a username on another platform or a link is refused in your name, your bio and anything else other members read outside a chat — comments, intro messages, story captions, replies and answers — and the app tells you why. In a chat such details are let through, but a moderator is notified; they are refused only while a woman has asked for a mahrem and no mahrem has yet approved the conversation. Messages containing phrases typical of scams, such as requests for money, crypto or gift cards, are only marked for a moderator and never blocked. Photos are not checked automatically: community posts are read by a moderator before they appear, and stories from accounts that are new or have not passed the face check wait for a moderator before anyone else sees them. None of these checks decides anything about your account: a warning, a removal, a suspension or a ban is always decided by a person."
    },
    {
      "h": "Photos and the face check",
      "b": "Profile photos appear as soon as you add them; moderators remove photos that are reported and break the guidelines. For the face check you take a live photo, which is compared with your profile photos. The comparison is automatic: Amazon Web Services (Amazon Rekognition, in Frankfurt, EU) checks, on our behalf, that the photo shows one face, estimates its age range and measures how similar it is to your profile photos. A clear match is approved straight away; anything unclear — a lower similarity, an estimated age under 18, or a technical error — is decided by a person at Niyyah. A photo without a recognisable face is refused, and you can simply take it again. Amazon does not store the photos and does not use them to improve its services. The live photo is never published. It is stored encrypted and kept only while your account carries the verified badge, so a later check has something to compare with; it is deleted when the check is rejected, when the badge is removed, or when you delete your account. Because a face is sensitive data, the check is your choice and rests on your consent."
    },
    {
      "h": "Mahrem identity documents",
      "b": "A mahrem who wants to read a conversation confirms their identity, with their explicit consent, with an ID document and a selfie. These are stored encrypted, seen only by the person who reviews them, and deleted as soon as the decision is made."
    },
    {
      "h": "Location",
      "b": "We use your location only to work out your city. If you allow location access, your phone's own map service (Apple's on iPhone, Google's on Android) turns the coordinates into a place name, and our server finds the city and its centre with Nominatim, the OpenStreetMap Foundation's service, sending it only the coordinates or the name of the city — nothing that identifies you. If you type your city instead, the app looks it up with Open-Meteo's place search, which receives only what you type and, as with any website, your phone's IP address. Your exact position is not stored: it is reduced to the centre of your city before it is saved, and nothing other members see is more precise than that. You can withdraw location permission in your phone settings."
    },
    {
      "h": "Who sees what",
      "b": "Other members see your profile as you have set it up. A mahrem you approve sees the conversation from the moment of approval. Moderators see reported content, the automatic flags described above, and what is needed to judge them. When a conversation is reported, its last 20 messages — voice messages and recently withdrawn messages included — are copied into the report; when a message, a profile, a post or a reply is reported, a copy of it is kept with the report, so that deleting it does not erase the evidence. A message you withdraw disappears for the other person at once, but stays on the server for up to seven days so that it can still be reported, and is then deleted. Nobody at Niyyah reads private conversations as a matter of routine."
    },
    {
      "h": "Who processes data for us",
      "b": "Contabo (the servers the app runs on), Cloudflare (network protection), Google Firebase (push notifications), Apple and Google (sign-in and in-app purchases), RevenueCat (processing in-app purchases), Resend (sending email), Amazon Web Services (the automatic face check and photo checks, in the EU), Open-Meteo (city search) and the OpenStreetMap Foundation's Nominatim (turning a city or coordinates into a city centre). Each receives only what its part requires. Encrypted server backups are kept in Contabo Object Storage in the EU. We never see your card details — payments go through the App Store or Google Play. On our website, Meta (Facebook) measures visits only if you agree to it. We do not sell personal data, to anyone."
    },
    {
      "h": "Transfers outside Europe",
      "b": "Some of these companies are based in the United States or may process data there: Cloudflare, Google, Apple, Amazon, RevenueCat, Resend and Meta. When personal data leaves the EU/EEA or Bosnia and Herzegovina, it is protected by the EU–US Data Privacy Framework for companies certified under it, and otherwise by the European Commission's standard contractual clauses. Write to us if you would like to know which safeguard applies to which company."
    },
    {
      "h": "How long we keep it",
      "b": "Chat messages are deleted three days after they are sent, unless both of you have chosen to introduce your families, or the message has been reported (then until 30 days after the report is decided). A withdrawn message: up to seven days. Unanswered intro messages: 30 days. Replies to stories and who viewed them: 30 days after the story ends; story photos: seven days after the story ends. Profile views and read notifications: 180 days; unread notifications: 90 days. The days on which you opened the app: 120 days. A sign-in session not used for 180 days is ended and deleted. IP address fingerprints used to limit new accounts: 24 hours. Coin purchases that could not yet be matched to an account: one year. Reports stay until a moderator decides them; their content, together with the fingerprint of the reporter's IP address, is cleared 90 days after a dismissal and two years after a decision, and dismissed automatic flags are deleted entirely after 90 days. Server backups: up to 30 days."
    },
    {
      "h": "When you delete your account",
      "b": "Your profile, photos, matches and messages are deleted. A few things are kept, without your name: payment and coin records, for accounting; and one-way fingerprints of your email address, your Google or Apple sign-in and the phones you used, together with whether the account was banned and why, which members had blocked you, any unpaid coin debt, and which one-time rewards you had already received. They are used for this: for 30 days after you delete an account whose sign-up you completed, no new account can be created with the same email address or Google or Apple account, or on the phone on which the deleted account was created; a ban and other members' blocks follow you to a new account; unpaid coins cannot be escaped; and one-time rewards are not given twice. The record of a banned account is kept indefinitely, and unpaid debt until it is settled; a block is kept for as long as the member who made it has an account; everything else is deleted one year after the account is closed."
    },
    {
      "h": "Your rights",
      "b": "You can get a copy of your data in a machine-readable format (JSON — Settings sends it to your email) and take it to another service; correct what is wrong; delete your account; ask us to restrict the use of your data, for example while a complaint is being looked into; object to a use based on our legitimate interest; and withdraw a consent at any time, without affecting what was done before. To withdraw consent for the face check, write to us and we will delete the photo and remove the badge. Religious information is part of every profile here, so withdrawing consent for it means deleting the account. No decision with legal or similarly significant effects is made about you by automated means alone. For anything else write to support@niyyahmarriage.com — you will get an answer within 30 days. You also have the right to complain to a data protection authority. Our lead supervisory authority is the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon, www.aki.ee); you can also complain to the authority in your own country — in the EU your national authority, in Bosnia and Herzegovina the Personal Data Protection Agency."
    },
    {
      "h": "Security, minors and changes",
      "b": "Data travels over encrypted connections, access inside the team is limited to the people whose work requires it, and staff accounts are protected with two-factor sign-in. No system is perfect, so tell us at once if something looks wrong with your account. Niyyah is not for anyone under 18; if we find such an account we close it and delete its data. If we change this policy in a way that matters, we will tell you in the app before it takes effect."
    },
    {
      "h": "Religious information, reminders and other details",
      "b": "Religious information means everything you tell us about your faith: religious practice, prayer, Quran reading, madhab and hijab. We store it only once you have given explicit consent; until then your answers stay on your phone. Accounts created before 21.10.2026 are asked for this consent once in the app: until they answer, these answers are not shown to anyone and are not used for matching or filters, and if consent is not given, we delete them. We record when you consented and to which version of the text. Reminders (for example an unfinished sign-up or a message about to expire), holiday greetings and news about new members near you are sent by push notification or email only if you tick the box for them when you sign the commitment — accounts created earlier keep their current setting — and you can turn them off in Settings or with the link in each email; notices about your account are always sent. Push notifications travel through Google Firebase and Apple Push Notification service (APNs); a message notification shows the sender's name and the start of the message unless you turn on discreet notifications, and a notification that could not be delivered is kept on our server for at most 48 hours. Our servers log the IP address, time and requested address of each request, and errors, for security and troubleshooting: access logs for up to 14 days, error and service logs for up to eight weeks. Further periods: a sign-up that stopped before the commitment was signed is deleted, with its photos, 30 days after the last activity; a mahrem's identity documents that nobody reviews within 30 days are deleted and the mahrem is asked to send them again; a person you invite as mahrem who is not a member is told so in the invitation itself, and their name and address are deleted 90 days after the invitation is declined, withdrawn or expires; support conversations: two years after they are closed; face check attempts (outcome and technical details, no photo): one year; records of staff decisions and of mahrem oversight: three years; payment records and the coin ledger: ten years from the end of the year in which they were made, as accounting law requires. When you delete your account we also ask RevenueCat to delete the purchase history kept under your account, and for 35 days we keep only the deleted account's identifier, with no other data, so that a restored backup cannot bring the account back. Your copy of your data can also be downloaded through a one-time link valid for 24 hours; it includes the messages others sent you that you can still see in the app, without their profile."
    }
  ],
  "bs": [
    {
      "h": "Ko je odgovoran",
      "b": "Niyyah vodi Puzzles IT OÜ, društvo s ograničenom odgovornošću registrovano u Estoniji (registarski broj 16552842; adresa: Sepapaja tn 6, 15551 Tallinn, Estonija), koje je rukovalac tvojih ličnih podataka. Društvo zastupa član uprave Nermedin Džeković. Za sve iz ove politike piši na support@niyyahmarriage.com."
    },
    {
      "h": "Šta prikupljamo",
      "b": "Ono što nam daš: ime, datum rođenja, spol, e-mail adresu, grad, fotografije i odgovore na profilu (npr. vjerska praksa, bračni status, djeca i planovi za brak). Ono što nastaje dok koristiš aplikaciju: lajkovi, preskočeni profili, spojevi, poruke i glasovne poruke, objave, komentari i priče u zajednici, kupovine coinsa, prijave koje podneseš, profili i priče koje si pogledao/la, i dani kad si otvorio/la aplikaciju. Tehnički podaci: tip uređaja, verzija aplikacije, vremenska zona, oznaka za obavijesti, oznaka tvog Google ili Apple naloga ako se njime prijavljuješ, i oznaka tvog telefona. Aplikacija tu oznaku čuva u zaštićenom spremištu telefona, pa ostaje ista i kad aplikaciju ponovo instaliraš; naš server čuva samo njen otisak — jednosmjerni hash iz kojeg se oznaka ne može vratiti. Da bismo ograničili broj novih naloga s jedne mreže, otisak tvoje IP adrese čuvamo 24 sata; i prijava koju podneseš čuva jedan, da se jedna osoba ne bi predstavljala kao više prijavilaca. Ako se prijavljuješ Appleom, čuvamo šifrovan token koji Apple izda za tvoj nalog, da bismo pri brisanju naloga mogli prekinuti vezu s tvojim Apple ID-jem. Nalozi osoblja imaju i šifrovanu tajnu za prijavu u dva koraka. Ako se upišeš na listu čekanja na našoj web stranici, čuvamo samo tvoju e-mail adresu i jezik: da ti javimo kad Niyyah krene i da te dočeka poklon dobrodošlice ako se prijaviš istom adresom. Brišemo je najkasnije 12 mjeseci nakon obavijesti o pokretanju. Kad je poklon dat, sama adresa se briše, a dvije godine ostaju samo njen jednosmjerni otisak i domena, da se isti poklon ne bi mogao uzeti dvaput."
    },
    {
      "h": "Zašto to koristimo i na kojem osnovu",
      "b": "Da bi servis za koji si se prijavio/la radio — da ti pokažemo prikladne profile, isporučimo poruke, obradimo kupovine i odgovorimo ti kad nam pišeš — jer to traži naš ugovor s tobom. Da zajednica ostane sigurna — moderacija, automatske provjere opisane ispod i otisci uređaja, IP adresa i e-mail adresa koji banovane osobe i duple naloge drže vani — jer je to naš legitimni interes, i interes svakog člana, da servis bude siguran. Vjerski podaci, fotografija za provjeru lica i lični dokumenti mahrema su posebne kategorije podataka i obrađujemo ih samo uz izričit pristanak: za vjerske podatke daješ ga kad potpišeš obavezu na kraju registracije, a za provjeru lica i dokumente time što ih sam/a odlučiš poslati. Podatke o plaćanjima čuvamo jer to traže računovodstveni propisi. Na našoj web stranici Meta mjeri posjete samo uz tvoj pristanak. Od tvojih podataka ne gradimo oglašivačke profile i ne koristimo tvoje poruke da bismo ti bilo šta ciljano nudili."
    },
    {
      "h": "Automatske provjere",
      "b": "Dio teksta se automatski provjerava prije spremanja. Broj telefona, korisničko ime s druge platforme ili link ne prolaze u imenu, biografiji i svemu drugom što drugi članovi čitaju van razgovora — komentarima, uvodnim porukama, opisima priča, odgovorima — i aplikacija ti kaže zašto. U razgovoru takvi podaci prolaze, ali dobija ih na uvid moderator; odbijaju se samo dok žena koja je tražila mahrema nema mahrema koji je razgovor odobrio. Poruke s izrazima tipičnim za prevaru, npr. traženje novca, kriptovaluta ili poklon-kartica, samo se označe moderatoru i nikad se ne blokiraju. Fotografije se ne provjeravaju automatski: objave u zajednici moderator pročita prije nego se pojave, a priče novih naloga i naloga koji nisu prošli provjeru lica čekaju moderatora prije nego ih iko drugi vidi. Nijedna od ovih provjera ne odlučuje ništa o tvom nalogu: upozorenje, uklanjanje, suspenziju ili zabranu uvijek odlučuje čovjek."
    },
    {
      "h": "Fotografije i provjera lica",
      "b": "Profilne fotografije se vide čim ih dodaš; moderatori uklanjaju prijavljene fotografije koje krše pravila. Za provjeru lica snimaš fotografiju uživo, koja se poredi s tvojim profilnim fotografijama. Poređenje je automatsko: Amazon Web Services (Amazon Rekognition, u Frankfurtu, EU) u naše ime provjerava da je na fotografiji jedno lice, procjenjuje raspon godina i mjeri koliko liči na tvoje profilne fotografije. Jasno podudaranje se odobrava odmah; sve što nije jasno — manja sličnost, procjena ispod 18 godina ili tehnička greška — odlučuje osoba iz Niyyah. Fotografija bez prepoznatljivog lica se odbija, i možeš je jednostavno snimiti ponovo. Amazon ne čuva fotografije i ne koristi ih za razvoj svojih usluga. Fotografija uživo se nikad ne objavljuje. Čuva se šifrovana i samo dok tvoj nalog nosi oznaku provjere, da bi kasnija provjera imala s čim da se uporedi; briše se kad je provjera odbijena, kad se oznaka skine ili kad obrišeš nalog. Pošto je lice osjetljiv podatak, provjera je tvoj izbor i počiva na tvom pristanku."
    },
    {
      "h": "Dokumenti mahrema",
      "b": "Mahrem koji želi čitati razgovor potvrđuje identitet, uz svoj izričit pristanak, ličnim dokumentom i selfijem. Oni se čuvaju šifrovani, vidi ih samo osoba koja ih pregleda, i brišu se čim je odluka donesena."
    },
    {
      "h": "Lokacija",
      "b": "Lokaciju koristimo samo da odredimo tvoj grad. Ako dozvoliš pristup lokaciji, mapska usluga samog telefona (Appleova na iPhoneu, Googleova na Androidu) pretvara koordinate u naziv mjesta, a naš server pronalazi grad i njegov centar preko usluge Nominatim fondacije OpenStreetMap, kojoj šalje samo koordinate ili naziv grada — ništa po čemu bi se znalo ko si. Ako grad radije upišeš, aplikacija ga traži preko pretrage mjesta Open-Meteo, koja dobija samo ono što upišeš i, kao svaka web stranica, IP adresu telefona. Tačan položaj se ne čuva: prije spremanja se svodi na centar grada, i ništa što drugi članovi vide nije preciznije od toga. Dozvolu za lokaciju možeš povući u postavkama telefona."
    },
    {
      "h": "Ko šta vidi",
      "b": "Drugi članovi vide tvoj profil onako kako si ga postavio/la. Mahrem kojeg odobriš vidi razgovor od trenutka odobrenja. Moderatori vide prijavljeni sadržaj, automatske oznake opisane gore i ono što im treba da o njima odluče. Kad se prijavi razgovor, njegovih posljednjih 20 poruka — uključujući glasovne i nedavno povučene — kopira se u prijavu; kad se prijavi poruka, profil, objava ili odgovor, uz prijavu ostaje njegova kopija, da brisanje ne bi uklonilo dokaz. Poruka koju povučeš odmah nestaje kod druge osobe, ali na serveru ostaje do sedam dana, da se još može prijaviti, i onda se briše. Niko u Niyyah ne čita privatne razgovore kao stvar rutine."
    },
    {
      "h": "Ko za nas obrađuje podatke",
      "b": "Contabo (serveri na kojima aplikacija radi), Cloudflare (zaštita mreže), Google Firebase (push obavijesti), Apple i Google (prijava i kupovine u aplikaciji), RevenueCat (obrada kupovina u aplikaciji), Resend (slanje e-maila), Amazon Web Services (automatska provjera lica i provjera fotografija, u EU), Open-Meteo (pretraga grada) i Nominatim fondacije OpenStreetMap (pretvaranje grada ili koordinata u centar grada). Svako dobija samo ono što mu treba za njegov dio. Šifrovane rezervne kopije servera čuvaju se u Contabo Object Storageu u EU. Podatke o kartici nikad ne vidimo — plaćanje ide preko App Store-a ili Google Play-a. Na našoj web stranici Meta (Facebook) mjeri posjete samo ako na to pristaneš. Lične podatke ne prodajemo, nikome."
    },
    {
      "h": "Prenos podataka van Evrope",
      "b": "Neke od ovih kompanija su u Sjedinjenim Američkim Državama ili podatke mogu obrađivati tamo: Cloudflare, Google, Apple, Amazon, RevenueCat, Resend i Meta. Kad lični podaci napuste EU/EEP ili Bosnu i Hercegovinu, štiti ih Okvir za privatnost podataka EU–SAD (Data Privacy Framework) kod kompanija koje su po njemu certificirane, a inače standardne ugovorne klauzule Evropske komisije. Piši nam ako želiš znati koja zaštita važi za koju kompaniju."
    },
    {
      "h": "Koliko dugo čuvamo",
      "b": "Poruke u razgovoru brišu se tri dana nakon slanja, osim ako ste oboje odlučili upoznati porodice, ili je poruka prijavljena (tada do 30 dana nakon odluke o prijavi). Povučena poruka: do sedam dana. Uvodne poruke bez odgovora: 30 dana. Odgovori na priče i ko je pogledao priču: 30 dana nakon isteka priče; fotografije priča: sedam dana nakon isteka priče. Pregledi profila i pročitane obavijesti: 180 dana; nepročitane obavijesti: 90 dana. Dani kad si otvorio/la aplikaciju: 120 dana. Sesija prijave koja se ne koristi 180 dana se gasi i briše. Otisci IP adresa za ograničenje novih naloga: 24 sata. Kupovine coinsa koje se još nisu mogle povezati s nalogom: godinu dana. Prijave ostaju dok o njima ne odluči moderator; njihov sadržaj, zajedno s otiskom IP adrese prijavioca, briše se 90 dana nakon odbacivanja i dvije godine nakon odluke, a odbačene automatske oznake se nakon 90 dana brišu u potpunosti. Rezervne kopije servera: do 30 dana."
    },
    {
      "h": "Kad obrišeš nalog",
      "b": "Brišu se profil, fotografije, spojevi i poruke. Ostaje nekoliko stvari, bez tvog imena: podaci o plaćanjima i coinsima, radi računovodstva; i jednosmjerni otisci tvoje e-mail adrese, Google ili Apple prijave i telefona koje si koristio/la, zajedno s tim je li nalog bio banovan i zašto, koji su te članovi blokirali, neplaćeni dug u coinsima i koje si jednokratne nagrade već dobio/la. Služe za ovo: 30 dana nakon što obrišeš nalog čiju si registraciju završio/la ne može se napraviti nov nalog s istom e-mail adresom ni istim Google ili Apple nalogom, niti na telefonu na kojem je obrisani nalog napravljen; zabrana i tuđe blokade prate te i na novi nalog; neplaćeni coinsi se ne mogu izbjeći; i jednokratne nagrade se ne daju dvaput. Zapis o banovanom nalogu čuva se trajno, a neplaćeni dug dok se ne izmiri; blokada se čuva dok član koji je blokirao ima nalog; sve ostalo se briše godinu dana nakon zatvaranja naloga."
    },
    {
      "h": "Tvoja prava",
      "b": "Možeš dobiti kopiju svojih podataka u mašinski čitljivom obliku (JSON — Postavke je šalju na tvoj e-mail) i prenijeti je drugom servisu; ispraviti ono što nije tačno; obrisati nalog; tražiti da ograničimo upotrebu tvojih podataka, npr. dok se rješava prigovor; usprotiviti se upotrebi koja počiva na našem legitimnom interesu; i povući pristanak u bilo kojem trenutku, bez uticaja na ono što je urađeno prije. Za povlačenje pristanka za provjeru lica piši nam, pa ćemo obrisati fotografiju i skinuti oznaku. Vjerski podaci su dio svakog profila ovdje, pa povlačenje pristanka za njih znači brisanje naloga. O tebi se ne donosi nijedna odluka s pravnim ili sličnim značajnim posljedicama samo automatski. Za sve ostalo piši na support@niyyahmarriage.com — odgovor stiže u roku od 30 dana. Imaš i pravo na pritužbu tijelu za zaštitu podataka. Naše vodeće nadzorno tijelo je Estonski inspektorat za zaštitu podataka (Andmekaitse Inspektsioon, www.aki.ee); pritužbu možeš podnijeti i tijelu u svojoj zemlji — u EU svom nacionalnom tijelu, u Bosni i Hercegovini Agenciji za zaštitu ličnih podataka."
    },
    {
      "h": "Sigurnost, maloljetnici i izmjene",
      "b": "Podaci putuju šifrovanim vezama, pristup unutar tima imaju samo oni kojima to posao traži, a nalozi osoblja su zaštićeni prijavom u dva koraka. Nijedan sistem nije savršen, pa nam odmah javi ako nešto s tvojim nalogom izgleda pogrešno. Niyyah nije za osobe mlađe od 18 godina; takav nalog zatvaramo i brišemo njegove podatke. Ako ovu politiku izmijenimo na bitan način, javit ćemo ti u aplikaciji prije nego stupi na snagu."
    },
    {
      "h": "Vjerski podaci, podsjetnici i ostali detalji",
      "b": "Vjerski podaci su sve što nam kažeš o svojoj vjeri: vjerska praksa, namaz, učenje Kur'ana, mezheb i hidžab. Čuvamo ih tek kad daš izričit pristanak; do tada tvoji odgovori ostaju na telefonu. Nalozi napravljeni prije 21.10.2026. jednom u aplikaciji dobiju pitanje za taj pristanak: dok ne odgovore, ti odgovori se nikome ne prikazuju i ne koriste se za podudaranje ni filtere, a ako pristanak ne daju, brišemo ih. Bilježimo kad si pristao/la i na koju verziju teksta. Podsjetnike (npr. nedovršena registracija ili poruka koja uskoro ističe), praznične čestitke i vijesti o novim članovima u blizini šaljemo pushom ili e-mailom samo ako to označiš kad potpisuješ obavezu — raniji nalozi zadržavaju postojeću postavku — i možeš ih isključiti u Postavkama ili linkom u svakom e-mailu; obavijesti o tvom nalogu šaljemo uvijek. Push obavijesti idu preko Google Firebasea i Appleove usluge za obavijesti (APNs); obavijest o poruci pokazuje ime pošiljaoca i početak poruke, osim ako uključiš diskretne obavijesti, a obavijest koja nije mogla biti isporučena čuva se na našem serveru najviše 48 sati. Naši serveri bilježe IP adresu, vrijeme i adresu svakog zahtjeva, te greške, radi sigurnosti i otklanjanja kvarova: pristupni zapisi do 14 dana, zapisi grešaka i servisa do osam sedmica. Ostali rokovi: registracija koja je stala prije potpisa obaveze briše se, sa slikama, 30 dana nakon zadnje aktivnosti; lični dokumenti mahrema koje niko ne pregleda u 30 dana brišu se i mahrem dobija poruku da ih pošalje ponovo; osoba koju pozoveš kao mahrema a nije član to saznaje iz same pozivnice, a njeno ime i adresu brišemo 90 dana nakon što poziv bude odbijen, povučen ili istekne; razgovori s podrškom: dvije godine nakon zatvaranja; pokušaji provjere lica (ishod i tehnički podaci, bez fotografije): godinu dana; zapisi odluka osoblja i nadzora mahrema: tri godine; podaci o plaćanjima i knjiga coinsa: deset godina od kraja godine u kojoj su nastali, kako traže računovodstveni propisi. Kad obrišeš nalog, tražimo i od RevenueCata da obriše historiju kupovina vezanu za tvoj nalog, a 35 dana čuvamo samo oznaku obrisanog naloga, bez ikakvih drugih podataka, da ga vraćanje rezervne kopije ne bi vratilo. Kopiju svojih podataka možeš preuzeti i preko jednokratnog linka koji važi 24 sata; ona sadrži i poruke koje su ti drugi poslali, a koje još vidiš u aplikaciji, bez njihovog profila."
    }
  ],
  "de": [
    {
      "h": "Wer verantwortlich ist",
      "b": "Niyyah wird von der Puzzles IT OÜ betrieben, einer in Estland eingetragenen Gesellschaft mit beschränkter Haftung (Registernummer 16552842; Anschrift: Sepapaja tn 6, 15551 Tallinn, Estland), die Verantwortliche für deine personenbezogenen Daten ist. Die Gesellschaft wird durch ihr Vorstandsmitglied Nermedin Džeković vertreten. Für alles in dieser Erklärung schreib an support@niyyahmarriage.com."
    },
    {
      "h": "Was wir erheben",
      "b": "Was du uns gibst: Name, Geburtsdatum, Geschlecht, E-Mail-Adresse, Stadt, Fotos und deine Angaben im Profil (z. B. religiöse Praxis, Familienstand, Kinder und Heiratspläne). Was bei der Nutzung entsteht: Likes, übersprungene Profile, Matches, Nachrichten und Sprachnachrichten, Beiträge, Kommentare und Storys in der Community, Coin-Käufe, Meldungen, die du einreichst, die Profile und Storys, die du angesehen hast, und die Tage, an denen du die App geöffnet hast. Technische Daten: Gerätetyp, App-Version, Zeitzone, ein Benachrichtigungs-Token, die Kennung deines Google- oder Apple-Kontos, wenn du dich damit anmeldest, und eine Kennung deines Telefons. Die App bewahrt diese Kennung im geschützten Speicher des Telefons auf, sodass sie auch nach einer Neuinstallation gleich bleibt; unser Server speichert nur einen Fingerabdruck davon — einen Einweg-Hash, aus dem sich die Kennung nicht zurückgewinnen lässt. Um zu begrenzen, wie viele neue Konten aus einem Netz eröffnet werden, speichern wir einen Fingerabdruck deiner IP-Adresse 24 Stunden lang; auch eine Meldung, die du einreichst, behält einen, damit sich eine Person nicht als mehrere Meldende ausgeben kann. Wenn du dich mit Apple anmeldest, speichern wir das Token, das Apple für dein Konto ausstellt, verschlüsselt, damit wir die Verbindung zu deiner Apple-ID trennen können, wenn du das Konto löschst. Konten des Teams haben zusätzlich ein verschlüsselt gespeichertes Geheimnis für die Zwei-Faktor-Anmeldung. Wenn du dich auf unserer Website in die Warteliste einträgst, speichern wir nur deine E-Mail-Adresse und Sprache: um dir zu sagen, wann Niyyah startet, und dir ein Willkommensgeschenk zu geben, wenn du dich mit derselben Adresse registrierst. Wir löschen sie spätestens 12 Monate nach der Start-E-Mail. Sobald das Geschenk vergeben ist, wird die Adresse selbst gelöscht; nur ihr Einweg-Fingerabdruck und ihre Domain bleiben zwei Jahre, damit dasselbe Geschenk nicht zweimal beansprucht werden kann."
    },
    {
      "h": "Wozu wir sie nutzen und auf welcher Grundlage",
      "b": "Um den Dienst zu betreiben, für den du dich angemeldet hast — dir passende Profile zu zeigen, Nachrichten zuzustellen, Käufe abzuwickeln und dir zu antworten, wenn du uns schreibst —, weil unser Vertrag mit dir das erfordert. Um die Community sicher zu halten — Moderation, die unten beschriebenen automatischen Prüfungen und die Fingerabdrücke von Geräten, IP-Adressen und E-Mail-Adressen, die gesperrte Personen und Doppelkonten fernhalten —, weil das unser berechtigtes Interesse und das jedes Mitglieds an einem sicheren Dienst ist. Deine Angaben zur Religion, das Foto für die Gesichtsprüfung und die Ausweisdokumente eines Mahrem sind besondere Kategorien von Daten; wir verarbeiten sie nur mit ausdrücklicher Einwilligung: Für die Angaben zur Religion gibst du sie, wenn du am Ende der Registrierung die Verpflichtung unterschreibst, für die Gesichtsprüfung und die Dokumente dadurch, dass du dich entscheidest, sie einzureichen. Zahlungsdaten bewahren wir auf, weil das Buchhaltungsrecht es verlangt. Auf unserer Website misst Meta Besuche nur mit deiner Einwilligung. Wir erstellen keine Werbeprofile aus deinen Daten und nutzen deine Nachrichten nicht, um dir gezielt etwas anzubieten."
    },
    {
      "h": "Automatische Prüfungen",
      "b": "Manche Texte werden vor dem Speichern automatisch geprüft. Eine Telefonnummer, ein Benutzername auf einer anderen Plattform oder ein Link werden abgelehnt in deinem Namen, deiner Beschreibung und allem anderen, was andere Mitglieder außerhalb eines Chats lesen — Kommentaren, Einstiegsnachrichten, Story-Texten, Antworten —, und die App sagt dir, warum. Im Chat gehen solche Angaben durch, aber ein Moderator wird darauf hingewiesen; abgelehnt werden sie nur, solange eine Frau einen Mahrem verlangt hat und noch kein Mahrem das Gespräch bestätigt hat. Nachrichten mit Formulierungen, die für Betrug typisch sind, etwa Bitten um Geld, Kryptowährung oder Geschenkkarten, werden nur für einen Moderator markiert und nie blockiert. Fotos werden nicht automatisch geprüft: Community-Beiträge liest ein Moderator, bevor sie erscheinen, und Storys von neuen Konten oder von Konten ohne bestandene Gesichtsprüfung warten auf einen Moderator, bevor andere sie sehen. Keine dieser Prüfungen entscheidet etwas über dein Konto: Eine Verwarnung, eine Entfernung, eine Sperre auf Zeit oder eine dauerhafte Sperre entscheidet immer ein Mensch."
    },
    {
      "h": "Fotos und Gesichtsprüfung",
      "b": "Profilfotos sind sichtbar, sobald du sie hinzufügst; Moderatoren entfernen gemeldete Fotos, die gegen die Regeln verstoßen. Für die Gesichtsprüfung machst du ein Live-Foto, das mit deinen Profilfotos verglichen wird. Der Vergleich ist automatisch: Amazon Web Services (Amazon Rekognition, in Frankfurt, EU) prüft in unserem Auftrag, ob das Foto genau ein Gesicht zeigt, schätzt die Altersspanne und misst, wie ähnlich es deinen Profilfotos ist. Eine eindeutige Übereinstimmung wird sofort bestätigt; alles Unklare — eine geringere Ähnlichkeit, ein geschätztes Alter unter 18 oder ein technischer Fehler — entscheidet eine Person bei Niyyah. Ein Foto ohne erkennbares Gesicht wird abgelehnt, und du kannst es einfach neu aufnehmen. Amazon speichert die Fotos nicht und nutzt sie nicht zur Verbesserung seiner Dienste. Das Live-Foto wird nie veröffentlicht. Es wird verschlüsselt gespeichert und nur so lange aufbewahrt, wie dein Konto das Verifiziert-Abzeichen trägt, damit eine spätere Prüfung etwas zum Vergleichen hat; es wird gelöscht, wenn die Prüfung abgelehnt, das Abzeichen entfernt oder dein Konto gelöscht wird. Da ein Gesicht ein sensibles Datum ist, ist die Prüfung freiwillig und beruht auf deiner Einwilligung."
    },
    {
      "h": "Ausweisdokumente des Mahrem",
      "b": "Ein Mahrem, der ein Gespräch lesen möchte, bestätigt mit seiner ausdrücklichen Einwilligung seine Identität mit einem Ausweisdokument und einem Selfie. Beides wird verschlüsselt gespeichert, nur von der prüfenden Person gesehen und gelöscht, sobald die Entscheidung gefallen ist."
    },
    {
      "h": "Standort",
      "b": "Wir nutzen deinen Standort nur, um deine Stadt zu bestimmen. Wenn du den Standortzugriff erlaubst, macht der Kartendienst deines Telefons (der von Apple auf dem iPhone, der von Google auf Android) aus den Koordinaten einen Ortsnamen, und unser Server ermittelt die Stadt und ihren Mittelpunkt mit Nominatim, dem Dienst der OpenStreetMap Foundation, an den er nur die Koordinaten oder den Namen der Stadt sendet — nichts, was dich identifiziert. Wenn du deine Stadt lieber eintippst, sucht die App sie über die Ortssuche von Open-Meteo, die nur erhält, was du eintippst, und wie jede Website die IP-Adresse deines Telefons. Die genaue Position wird nicht gespeichert: Sie wird vor dem Speichern auf das Stadtzentrum reduziert, und nichts, was andere sehen, ist genauer. Die Standortberechtigung kannst du in den Telefoneinstellungen entziehen."
    },
    {
      "h": "Wer was sieht",
      "b": "Andere Mitglieder sehen dein Profil so, wie du es eingerichtet hast. Ein Mahrem, den du bestätigst, sieht das Gespräch ab dem Moment der Bestätigung. Moderatoren sehen gemeldete Inhalte, die oben beschriebenen automatischen Markierungen und was sie zur Entscheidung brauchen. Wird ein Gespräch gemeldet, werden seine letzten 20 Nachrichten — einschließlich Sprachnachrichten und kürzlich zurückgezogener Nachrichten — in die Meldung kopiert; wird eine Nachricht, ein Profil, ein Beitrag oder eine Antwort gemeldet, bleibt eine Kopie davon bei der Meldung, damit Löschen den Beweis nicht beseitigt. Eine Nachricht, die du zurückziehst, verschwindet für die andere Person sofort, bleibt aber bis zu sieben Tage auf dem Server, damit sie noch gemeldet werden kann, und wird dann gelöscht. Niemand bei Niyyah liest routinemäßig private Gespräche."
    },
    {
      "h": "Wer Daten für uns verarbeitet",
      "b": "Contabo (Server der App), Cloudflare (Netzwerkschutz), Google Firebase (Push-Benachrichtigungen), Apple und Google (Anmeldung und In-App-Käufe), RevenueCat (Abwicklung von In-App-Käufen), Resend (E-Mail-Versand), Amazon Web Services (automatische Gesichtsprüfung und Fotoprüfung, in der EU), Open-Meteo (Suche nach der Stadt) und Nominatim der OpenStreetMap Foundation (macht aus einer Stadt oder Koordinaten ein Stadtzentrum). Jeder erhält nur, was er für seinen Teil braucht. Verschlüsselte Server-Backups liegen im Contabo Object Storage in der EU. Kartendaten sehen wir nie — bezahlt wird über den App Store oder Google Play. Auf unserer Website misst Meta (Facebook) Besuche nur mit deiner Zustimmung. Wir verkaufen keine personenbezogenen Daten, an niemanden."
    },
    {
      "h": "Übermittlung außerhalb Europas",
      "b": "Einige dieser Unternehmen haben ihren Sitz in den Vereinigten Staaten oder können Daten dort verarbeiten: Cloudflare, Google, Apple, Amazon, RevenueCat, Resend und Meta. Verlassen personenbezogene Daten die EU/den EWR oder Bosnien und Herzegowina, schützt sie bei danach zertifizierten Unternehmen der EU-US-Datenschutzrahmen (Data Privacy Framework), ansonsten die Standardvertragsklauseln der Europäischen Kommission. Schreib uns, wenn du wissen möchtest, welche Garantie für welches Unternehmen gilt."
    },
    {
      "h": "Wie lange wir speichern",
      "b": "Chat-Nachrichten werden drei Tage nach dem Senden gelöscht, außer ihr habt beide beschlossen, eure Familien bekannt zu machen, oder die Nachricht wurde gemeldet (dann bis 30 Tage nach der Entscheidung). Eine zurückgezogene Nachricht: bis zu sieben Tage. Unbeantwortete Einstiegsnachrichten: 30 Tage. Antworten auf Storys und wer sie angesehen hat: 30 Tage nach Ablauf der Story; Story-Fotos: sieben Tage nach Ablauf der Story. Profilaufrufe und gelesene Benachrichtigungen: 180 Tage; ungelesene Benachrichtigungen: 90 Tage. Die Tage, an denen du die App geöffnet hast: 120 Tage. Eine Anmeldesitzung, die 180 Tage nicht benutzt wurde, wird beendet und gelöscht. Fingerabdrücke von IP-Adressen zur Begrenzung neuer Konten: 24 Stunden. Coin-Käufe, die noch keinem Konto zugeordnet werden konnten: ein Jahr. Meldungen bleiben, bis ein Moderator über sie entscheidet; ihr Inhalt wird zusammen mit dem Fingerabdruck der IP-Adresse der meldenden Person 90 Tage nach einer Abweisung und zwei Jahre nach einer Entscheidung gelöscht, und abgewiesene automatische Markierungen werden nach 90 Tagen vollständig gelöscht. Server-Backups: bis zu 30 Tage."
    },
    {
      "h": "Wenn du dein Konto löschst",
      "b": "Profil, Fotos, Matches und Nachrichten werden gelöscht. Einiges bleibt, ohne deinen Namen: Zahlungs- und Coin-Daten für die Buchhaltung; und Einweg-Fingerabdrücke deiner E-Mail-Adresse, deiner Google- oder Apple-Anmeldung und der Telefone, die du benutzt hast, zusammen damit, ob das Konto gesperrt war und warum, welche Mitglieder dich blockiert hatten, eine etwaige unbezahlte Coin-Schuld und welche einmaligen Belohnungen du schon erhalten hast. Sie dienen dazu: 30 Tage nachdem du ein Konto gelöscht hast, dessen Registrierung du abgeschlossen hattest, kann kein neues Konto mit derselben E-Mail-Adresse oder demselben Google- oder Apple-Konto erstellt werden, auch nicht auf dem Telefon, auf dem das gelöschte Konto erstellt wurde; eine Sperre und Blockierungen anderer folgen dir auf ein neues Konto; unbezahlte Coins lassen sich nicht umgehen; und einmalige Belohnungen gibt es nicht zweimal. Der Eintrag eines gesperrten Kontos wird unbefristet aufbewahrt, eine unbezahlte Schuld bis zu ihrer Begleichung; eine Blockierung so lange, wie das Mitglied, das sie gesetzt hat, ein Konto hat; alles andere wird ein Jahr nach Schließung des Kontos gelöscht."
    },
    {
      "h": "Deine Rechte",
      "b": "Du kannst eine Kopie deiner Daten in einem maschinenlesbaren Format erhalten (JSON — die Einstellungen senden sie an deine E-Mail) und zu einem anderen Dienst mitnehmen; Falsches berichtigen; dein Konto löschen; verlangen, dass wir die Nutzung deiner Daten einschränken, etwa während eine Beschwerde geprüft wird; einer Nutzung widersprechen, die auf unserem berechtigten Interesse beruht; und eine Einwilligung jederzeit widerrufen, ohne dass das Bisherige davon berührt wird. Um die Einwilligung zur Gesichtsprüfung zu widerrufen, schreib uns, dann löschen wir das Foto und entfernen das Abzeichen. Angaben zur Religion gehören hier zu jedem Profil, daher bedeutet der Widerruf dieser Einwilligung, das Konto zu löschen. Über dich wird keine Entscheidung mit rechtlicher oder ähnlich erheblicher Wirkung ausschließlich automatisiert getroffen. Für alles Weitere schreib an support@niyyahmarriage.com — du bekommst innerhalb von 30 Tagen eine Antwort. Du hast außerdem das Recht, dich bei einer Datenschutzbehörde zu beschweren. Unsere federführende Aufsichtsbehörde ist die estnische Datenschutzaufsicht (Andmekaitse Inspektsioon, www.aki.ee); du kannst dich auch an die Behörde in deinem eigenen Land wenden — in der EU an deine nationale Behörde, in Bosnien und Herzegowina an die Agentur für den Schutz personenbezogener Daten."
    },
    {
      "h": "Sicherheit, Minderjährige und Änderungen",
      "b": "Daten werden verschlüsselt übertragen, im Team haben nur die Zugriff, deren Arbeit es erfordert, und Konten des Teams sind mit Zwei-Faktor-Anmeldung geschützt. Kein System ist perfekt, also melde dich sofort, wenn mit deinem Konto etwas nicht stimmt. Niyyah ist nicht für Personen unter 18; solche Konten schließen wir und löschen ihre Daten. Ändern wir diese Erklärung wesentlich, informieren wir dich in der App, bevor die Änderung gilt."
    },
    {
      "h": "Religiöse Angaben, Erinnerungen und weitere Details",
      "b": "Religiöse Angaben sind alles, was du uns über deinen Glauben sagst: religiöse Praxis, Gebet, Koranlesen, Rechtsschule (Madhhab) und Hidschab. Wir speichern sie erst, wenn du ausdrücklich eingewilligt hast; bis dahin bleiben deine Antworten auf deinem Handy. Konten, die vor dem 21.10.2026 erstellt wurden, werden in der App einmal um diese Einwilligung gebeten: Bis sie antworten, werden diese Angaben niemandem gezeigt und weder für Matches noch für Filter verwendet, und wird die Einwilligung nicht erteilt, löschen wir sie. Wir halten fest, wann du eingewilligt hast und in welche Fassung des Textes. Erinnerungen (etwa an eine unvollständige Registrierung oder eine bald ablaufende Nachricht), Feiertagsgrüße und Hinweise auf neue Mitglieder in deiner Nähe senden wir per Push oder E-Mail nur, wenn du das beim Unterschreiben der Verpflichtung ankreuzt — ältere Konten behalten ihre bisherige Einstellung —, und du kannst sie in den Einstellungen oder über den Link in jeder E-Mail abschalten; Mitteilungen zu deinem Konto senden wir immer. Push-Benachrichtigungen laufen über Google Firebase und den Apple Push Notification Service (APNs); eine Nachrichten-Benachrichtigung zeigt den Namen des Absenders und den Anfang der Nachricht, außer du schaltest diskrete Benachrichtigungen ein, und eine nicht zustellbare Benachrichtigung bleibt höchstens 48 Stunden auf unserem Server. Unsere Server protokollieren IP-Adresse, Zeitpunkt und aufgerufene Adresse jeder Anfrage sowie Fehler, zur Sicherheit und Fehlerbehebung: Zugriffsprotokolle bis zu 14 Tage, Fehler- und Dienstprotokolle bis zu acht Wochen. Weitere Fristen: Eine Registrierung, die vor der Unterschrift der Verpflichtung stehen geblieben ist, wird samt Fotos 30 Tage nach der letzten Aktivität gelöscht; Ausweisdokumente eines Mahrem, die 30 Tage lang niemand prüft, werden gelöscht, und der Mahrem wird gebeten, sie erneut zu senden; eine Person, die du als Mahrem einlädst und die kein Mitglied ist, erfährt das aus der Einladung selbst, und ihr Name und ihre Adresse werden 90 Tage nach Ablehnung, Rücknahme oder Ablauf der Einladung gelöscht; Support-Gespräche: zwei Jahre nach dem Schließen; Versuche der Gesichtsprüfung (Ergebnis und technische Daten, kein Foto): ein Jahr; Aufzeichnungen über Entscheidungen des Teams und die Mahrem-Aufsicht: drei Jahre; Zahlungsdaten und das Coin-Konto: zehn Jahre ab Ende des Jahres, in dem sie entstanden sind, wie es das Buchhaltungsrecht verlangt. Wenn du dein Konto löschst, bitten wir auch RevenueCat, den zu deinem Konto gespeicherten Kaufverlauf zu löschen, und wir bewahren 35 Tage lang nur die Kennung des gelöschten Kontos ohne weitere Daten auf, damit eine wiederhergestellte Sicherung das Konto nicht zurückbringt. Die Kopie deiner Daten kannst du auch über einen einmaligen, 24 Stunden gültigen Link herunterladen; sie enthält auch die Nachrichten, die andere dir geschickt haben und die du in der App noch siehst, ohne deren Profil."
    }
  ],
  "tr": [
    {
      "h": "Kim sorumlu",
      "b": "Niyyah, Estonya’da tescilli bir limited şirket olan Puzzles IT OÜ tarafından işletilir (sicil numarası 16552842; adres: Sepapaja tn 6, 15551 Tallinn, Estonya). Kişisel verilerinin sorumlusu bu şirkettir; şirketi yönetim kurulu üyesi Nermedin Džeković temsil eder. Bu politikayla ilgili her şey için support@niyyahmarriage.com adresine yaz."
    },
    {
      "h": "Ne topluyoruz",
      "b": "Bize verdiklerin: adın, doğum tarihin, cinsiyetin, e-posta adresin, şehrin, fotoğrafların ve profildeki cevapların (örneğin dini pratik, medeni durum, çocuklar ve evlilik planları). Uygulamayı kullanırken oluşanlar: beğeniler, geçilen profiller, eşleşmeler, mesajlar ve sesli mesajlar, topluluktaki gönderiler, yorumlar ve hikâyeler, coin satın alımları, yaptığın şikâyetler, baktığın profiller ve hikâyeler ve uygulamayı açtığın günler. Teknik veriler: cihaz türü, uygulama sürümü, saat dilimi, bir bildirim belirteci, Google veya Apple ile giriş yapıyorsan o hesabın kimliği ve telefonunun bir tanımlayıcısı. Uygulama bu tanımlayıcıyı telefonun korumalı deposunda tutar; bu yüzden uygulamayı yeniden yüklesen de aynı kalır. Sunucumuz bunun yalnızca bir parmak izini saklar — tanımlayıcının geri elde edilemeyeceği tek yönlü bir özet (hash). Tek bir ağdan açılan yeni hesap sayısını sınırlamak için IP adresinin parmak izini 24 saat saklarız; yaptığın bir şikâyet de bir tane saklar, böylece tek bir kişi kendini birden çok şikâyetçi gibi gösteremez. Apple ile giriş yapıyorsan, hesabını sildiğinde Apple kimliğinle bağlantıyı kesebilmek için Apple’ın hesabın için verdiği belirteci şifreli olarak saklarız. Ekip hesaplarında ayrıca iki adımlı giriş için şifreli saklanan bir gizli anahtar bulunur. Web sitemizde bekleme listesine katılırsan yalnızca e-posta adresini ve dilini saklarız: Niyyah başladığında sana haber vermek ve aynı adresle kaydolursan sana hoş geldin hediyesi vermek için. Bunu en geç lansman e-postasından 12 ay sonra sileriz. Hediye verildikten sonra adresin kendisi silinir; aynı hediye iki kez alınamasın diye iki yıl boyunca yalnızca tek yönlü parmak izi ve alan adı kalır."
    },
    {
      "h": "Neden kullanıyoruz ve hangi dayanakla",
      "b": "Kaydolduğun hizmeti yürütmek için — sana uygun profilleri göstermek, mesajlarını iletmek, satın alımları işlemek ve bize yazdığında cevap vermek — çünkü seninle yaptığımız sözleşme bunu gerektirir. Topluluğu güvende tutmak için — moderasyon, aşağıda anlatılan otomatik kontroller ve yasaklı kişileri ve mükerrer hesapları dışarıda tutan cihaz, IP adresi ve e-posta adresi parmak izleri — çünkü güvenli bir hizmet bizim ve her üyenin meşru menfaatidir. Dini bilgilerin, yüz doğrulaması fotoğrafı ve bir mahremin kimlik belgeleri özel nitelikli verilerdir ve bunları yalnızca açık rızayla işleriz: dini bilgiler için rızanı kaydın sonunda taahhüdü imzaladığında, yüz doğrulaması ve belgeler için ise onları göndermeyi seçerek verirsin. Ödeme kayıtlarını muhasebe mevzuatı gerektirdiği için saklarız. Web sitemizde Meta ziyaretleri yalnızca rızanla ölçer. Verilerinden reklam profili oluşturmayız ve mesajlarını sana hedefli bir şey sunmak için kullanmayız."
    },
    {
      "h": "Otomatik kontroller",
      "b": "Bazı metinler kaydedilmeden önce otomatik olarak kontrol edilir. Telefon numarası, başka bir platformdaki kullanıcı adı veya bağlantı; adında, biyografinde ve diğer üyelerin sohbet dışında okuduğu her şeyde — yorumlar, tanışma mesajları, hikâye açıklamaları, cevaplar — kabul edilmez ve uygulama sana nedenini söyler. Sohbette bu tür bilgiler geçer ama bir moderatöre bildirilir; yalnızca bir kadın mahrem istemişken ve henüz hiçbir mahrem sohbeti onaylamamışken reddedilir. Para, kripto para veya hediye kartı istemek gibi dolandırıcılığa özgü ifadeler içeren mesajlar yalnızca moderatör için işaretlenir, asla engellenmez. Fotoğraflar otomatik olarak kontrol edilmez: topluluk gönderilerini yayımlanmadan önce bir moderatör okur, yeni hesapların veya yüz doğrulamasını geçmemiş hesapların hikâyeleri de başkaları görmeden önce moderatörü bekler. Bu kontrollerin hiçbiri hesabın hakkında bir karar vermez: uyarı, kaldırma, askıya alma veya yasaklama her zaman bir insan tarafından kararlaştırılır."
    },
    {
      "h": "Fotoğraflar ve yüz doğrulaması",
      "b": "Profil fotoğrafları eklediğin anda görünür; moderatörler şikâyet edilen ve kuralları çiğneyen fotoğrafları kaldırır. Yüz doğrulaması için canlı bir fotoğraf çekersin ve bu fotoğraf profil fotoğraflarınla karşılaştırılır. Karşılaştırma otomatiktir: Amazon Web Services (Amazon Rekognition, Frankfurt, AB) bizim adımıza fotoğrafta tek bir yüz olduğunu kontrol eder, yaş aralığını tahmin eder ve profil fotoğraflarına ne kadar benzediğini ölçer. Net bir eşleşme hemen onaylanır; belirsiz olan her şeye — daha düşük benzerlik, 18 yaşın altında tahmin edilen yaş veya teknik bir hata — Niyyah’tan bir kişi karar verir. Tanınabilir bir yüz içermeyen fotoğraf reddedilir ve onu kolayca yeniden çekebilirsin. Amazon fotoğrafları saklamaz ve hizmetlerini geliştirmek için kullanmaz. Canlı fotoğraf asla yayımlanmaz. Şifreli olarak saklanır ve yalnızca hesabın doğrulanmış rozetini taşıdığı sürece tutulur, böylece sonraki bir kontrolün karşılaştıracak bir şeyi olur; doğrulama reddedildiğinde, rozet kaldırıldığında veya hesabını sildiğinde silinir. Yüz hassas bir veri olduğu için doğrulama senin tercihindir ve rızana dayanır."
    },
    {
      "h": "Mahrem kimlik belgeleri",
      "b": "Bir sohbeti okumak isteyen mahrem, açık rızasıyla, kimliğini bir kimlik belgesi ve bir özçekimle doğrular. Bunlar şifreli saklanır, yalnızca inceleyen kişi tarafından görülür ve karar verilir verilmez silinir."
    },
    {
      "h": "Konum",
      "b": "Konumunu yalnızca şehrini belirlemek için kullanırız. Konum erişimine izin verirsen, telefonunun kendi harita hizmeti (iPhone’da Apple’ınki, Android’de Google’ınki) koordinatları bir yer adına çevirir; sunucumuz da şehri ve merkezini OpenStreetMap Vakfı’nın hizmeti Nominatim ile bulur ve ona yalnızca koordinatları veya şehrin adını gönderir — seni tanıtan hiçbir şey göndermez. Şehrini kendin yazmayı tercih edersen uygulama onu Open-Meteo’nun yer aramasıyla bulur; bu hizmet yalnızca yazdığını ve her web sitesi gibi telefonunun IP adresini alır. Tam konumun saklanmaz: kaydedilmeden önce şehir merkezine indirgenir ve diğer üyelerin gördüğü hiçbir şey bundan daha kesin değildir. Konum iznini telefon ayarlarından geri alabilirsin."
    },
    {
      "h": "Kim neyi görür",
      "b": "Diğer üyeler profilini senin ayarladığın şekilde görür. Onayladığın mahrem sohbeti onay anından itibaren görür. Moderatörler şikâyet edilen içeriği, yukarıda anlatılan otomatik işaretleri ve karar vermek için gerekenleri görür. Bir sohbet şikâyet edildiğinde son 20 mesajı — sesli mesajlar ve yakın zamanda geri çekilen mesajlar dahil — şikâyete kopyalanır; bir mesaj, profil, gönderi veya cevap şikâyet edildiğinde bir kopyası şikâyetle birlikte saklanır, böylece silmek kanıtı ortadan kaldırmaz. Geri çektiğin bir mesaj karşı taraf için hemen kaybolur ama hâlâ şikâyet edilebilmesi için sunucuda yedi güne kadar kalır, sonra silinir. Niyyah’ta hiç kimse özel sohbetleri rutin olarak okumaz."
    },
    {
      "h": "Verileri bizim için kim işler",
      "b": "Contabo (uygulamanın çalıştığı sunucular), Cloudflare (ağ koruması), Google Firebase (anlık bildirimler), Apple ve Google (giriş ve uygulama içi satın alımlar), RevenueCat (uygulama içi satın alımların işlenmesi), Resend (e-posta gönderimi), Amazon Web Services (otomatik yüz doğrulaması ve fotoğraf kontrolleri, AB’de), Open-Meteo (şehir arama) ve OpenStreetMap Vakfı’nın Nominatim hizmeti (bir şehri veya koordinatları şehir merkezine çevirme). Her biri yalnızca kendi kısmı için gerekeni alır. Şifreli sunucu yedekleri AB’deki Contabo Object Storage’da tutulur. Kart bilgilerini asla görmeyiz — ödemeler App Store veya Google Play üzerinden yapılır. Web sitemizde Meta (Facebook) ziyaretleri yalnızca kabul edersen ölçer. Kişisel verileri hiç kimseye satmayız."
    },
    {
      "h": "Avrupa dışına aktarım",
      "b": "Bu şirketlerin bazıları Amerika Birleşik Devletleri’nde bulunur veya verileri orada işleyebilir: Cloudflare, Google, Apple, Amazon, RevenueCat, Resend ve Meta. Kişisel veriler AB/AEA’dan veya Bosna-Hersek’ten çıktığında, buna göre sertifikalı şirketlerde AB–ABD Veri Gizliliği Çerçevesi (Data Privacy Framework), diğerlerinde ise Avrupa Komisyonu’nun standart sözleşme hükümleri ile korunur. Hangi şirket için hangi güvencenin geçerli olduğunu öğrenmek istersen bize yaz."
    },
    {
      "h": "Ne kadar saklıyoruz",
      "b": "Sohbet mesajları gönderildikten üç gün sonra silinir; ikiniz de ailelerinizi tanıştırmaya karar verdiyseniz veya mesaj şikâyet edildiyse (o zaman şikâyet hakkındaki karardan 30 gün sonrasına kadar) silinmez. Geri çekilen mesaj: yedi güne kadar. Cevapsız tanışma mesajları: 30 gün. Hikâyelere verilen cevaplar ve kimin izlediği: hikâye bittikten 30 gün sonra; hikâye fotoğrafları: hikâye bittikten yedi gün sonra. Profil görüntülemeleri ve okunmuş bildirimler: 180 gün; okunmamış bildirimler: 90 gün. Uygulamayı açtığın günler: 120 gün. 180 gün kullanılmayan bir oturum sonlandırılır ve silinir. Yeni hesapları sınırlamak için kullanılan IP adresi parmak izleri: 24 saat. Henüz bir hesapla eşleştirilemeyen coin satın alımları: bir yıl. Şikâyetler bir moderatör karar verene kadar kalır; içerikleri, şikâyet edenin IP adresi parmak iziyle birlikte, reddedildikten 90 gün ve karar verildikten iki yıl sonra silinir; reddedilen otomatik işaretler ise 90 gün sonra tamamen silinir. Sunucu yedekleri: en fazla 30 gün."
    },
    {
      "h": "Hesabını sildiğinde",
      "b": "Profilin, fotoğrafların, eşleşmelerin ve mesajların silinir. Adın olmadan birkaç şey saklanır: muhasebe için ödeme ve coin kayıtları; ve e-posta adresinin, Google veya Apple girişinin ve kullandığın telefonların tek yönlü parmak izleri — bunlarla birlikte hesabın yasaklı olup olmadığı ve nedeni, seni hangi üyelerin engellediği, varsa ödenmemiş coin borcu ve daha önce aldığın tek seferlik ödüller. Bunlar şunun içindir: kaydını tamamladığın bir hesabı sildikten sonraki 30 gün boyunca aynı e-posta adresiyle, aynı Google ya da Apple hesabıyla ya da silinen hesabın oluşturulduğu telefonda yeni hesap açılamaz; yasak ve diğer üyelerin engellemeleri yeni hesabına da geçer; ödenmemiş coinlerden kaçılamaz; ve tek seferlik ödüller iki kez verilmez. Yasaklı bir hesabın kaydı süresiz, ödenmemiş borç ödenene kadar saklanır; bir engelleme, onu yapan üyenin hesabı olduğu sürece saklanır; geri kalan her şey hesap kapandıktan bir yıl sonra silinir."
    },
    {
      "h": "Hakların",
      "b": "Verilerinin bir kopyasını makine tarafından okunabilir biçimde (JSON — Ayarlar e-postana gönderir) alabilir ve başka bir hizmete taşıyabilir; yanlış olanı düzeltebilir; hesabını silebilir; örneğin bir şikâyet incelenirken verilerinin kullanımını kısıtlamamızı isteyebilir; meşru menfaatimize dayanan bir kullanıma itiraz edebilir; ve verdiğin bir rızayı, daha önce yapılanları etkilemeden, istediğin zaman geri alabilirsin. Yüz doğrulaması için verdiğin rızayı geri almak istersen bize yaz; fotoğrafı silip rozeti kaldırırız. Dini bilgiler buradaki her profilin parçasıdır, bu yüzden bu rızayı geri almak hesabı silmek anlamına gelir. Hakkında hukuki veya benzer şekilde önemli sonuç doğuran hiçbir karar yalnızca otomatik yollarla verilmez. Diğer her şey için support@niyyahmarriage.com adresine yaz — 30 gün içinde cevap alırsın. Ayrıca bir veri koruma otoritesine şikâyet hakkın var. Başlıca denetim otoritemiz Estonya Veri Koruma Müfettişliği’dir (Andmekaitse Inspektsioon, www.aki.ee); kendi ülkendeki otoriteye de şikâyette bulunabilirsin — AB’de ulusal otoritene, Bosna-Hersek’te Kişisel Verileri Koruma Ajansı’na."
    },
    {
      "h": "Güvenlik, reşit olmayanlar ve değişiklikler",
      "b": "Veriler şifreli bağlantılarla taşınır, ekip içinde yalnızca işi gerektirenler erişebilir ve ekip hesapları iki adımlı girişle korunur. Hiçbir sistem kusursuz değildir; hesabında bir şey ters görünürse hemen bize haber ver. Niyyah 18 yaşından küçükler için değildir; böyle bir hesap bulursak kapatır ve verilerini sileriz. Bu politikayı önemli bir şekilde değiştirirsek, yürürlüğe girmeden önce sana uygulamada haber veririz."
    },
    {
      "h": "Dini bilgiler, hatırlatmalar ve diğer ayrıntılar",
      "b": "Dini bilgiler, inancınla ilgili bize söylediğin her şeydir: dini pratik, namaz, Kur’an okuma, mezhep ve başörtüsü. Bunları ancak açık rızanı verdikten sonra saklarız; o zamana kadar cevapların telefonunda kalır. 21.10.2026’dan önce açılmış hesaplardan bu rıza uygulamada bir kez istenir: cevap verilene kadar bu bilgiler kimseye gösterilmez, eşleştirmede ve filtrelerde kullanılmaz; rıza verilmezse onları sileriz. Ne zaman ve metnin hangi sürümüne rıza verdiğini kaydederiz. Hatırlatmaları (örneğin yarım kalan kayıt ya da süresi dolmak üzere olan bir mesaj), bayram tebriklerini ve yakınındaki yeni üyelerle ilgili haberleri push bildirimi veya e-posta ile yalnızca taahhüdü imzalarken bunu işaretlersen göndeririz — daha önce açılmış hesaplar mevcut ayarlarını korur — ve bunları Ayarlar’dan ya da her e-postadaki bağlantıyla kapatabilirsin; hesabınla ilgili bildirimleri her zaman göndeririz. Push bildirimleri Google Firebase ve Apple’ın bildirim hizmeti (APNs) üzerinden iletilir; mesaj bildirimi, gizli bildirimleri açmadıysan gönderenin adını ve mesajın başını gösterir; iletilemeyen bir bildirim sunucumuzda en fazla 48 saat kalır. Sunucularımız güvenlik ve hata giderme amacıyla her isteğin IP adresini, zamanını ve istenen adresini, ayrıca hataları kaydeder: erişim kayıtları en fazla 14 gün, hata ve hizmet kayıtları en fazla sekiz hafta saklanır. Diğer süreler: taahhüt imzalanmadan yarım kalan bir kayıt, fotoğraflarıyla birlikte son etkinlikten 30 gün sonra silinir; bir mahremin 30 gün içinde kimsenin incelemediği kimlik belgeleri silinir ve mahremden onları yeniden göndermesi istenir; mahrem olarak davet ettiğin ve üye olmayan bir kişi bunu davetin kendisinden öğrenir, adı ve adresi davet reddedildikten, geri çekildikten veya süresi dolduktan 90 gün sonra silinir; destek yazışmaları: kapatıldıktan iki yıl sonra; yüz doğrulama denemeleri (sonuç ve teknik veriler, fotoğraf yok): bir yıl; ekip kararlarının ve mahrem denetiminin kayıtları: üç yıl; ödeme kayıtları ve coin defteri: muhasebe mevzuatının gerektirdiği şekilde, oluşturuldukları yılın sonundan itibaren on yıl. Hesabını sildiğinde RevenueCat’ten de hesabına bağlı satın alma geçmişini silmesini isteriz ve geri yüklenen bir yedeğin hesabı geri getirmemesi için 35 gün boyunca yalnızca silinen hesabın kimliğini, başka hiçbir veri olmadan saklarız. Verilerinin kopyasını 24 saat geçerli, tek kullanımlık bir bağlantıyla da indirebilirsin; kopya, başkalarının sana gönderdiği ve uygulamada hâlâ gördüğün mesajları da, onların profili olmadan içerir."
    }
  ],
  "ar": [
    {
      "h": "من المسؤول",
      "b": "يدير Niyyah شركة Puzzles IT OÜ، وهي شركة خاصة محدودة المسؤولية مسجّلة في إستونيا (رقم التسجيل: 16552842؛ العنوان: Sepapaja tn 6, 15551 Tallinn، إستونيا)، وهي المسؤولة عن بياناتك الشخصية. ويمثّل الشركة عضو مجلس إدارتها Nermedin Džeković. لأي أمر في هذه السياسة اكتب إلى support@niyyahmarriage.com."
    },
    {
      "h": "ما الذي نجمعه",
      "b": "ما تقدمه لنا: اسمك وتاريخ ميلادك وجنسك وبريدك الإلكتروني ومدينتك وصورك وإجاباتك في الملف الشخصي (مثل الالتزام الديني والحالة الاجتماعية والأطفال وخطط الزواج). وما ينشأ أثناء استخدام التطبيق: الإعجابات، والملفات التي تخطيتها، والتطابقات، والرسائل والرسائل الصوتية، ومنشورات المجتمع وتعليقاته وقصصه، وشراء العملات، والبلاغات التي تقدمها، والملفات والقصص التي شاهدتها، والأيام التي فتحت فيها التطبيق. والبيانات التقنية: نوع الجهاز، وإصدار التطبيق، والمنطقة الزمنية، ورمز الإشعارات، ومعرّف حسابك في Google أو Apple إن كنت تسجّل الدخول به، ومعرّف لهاتفك. يحفظ التطبيق هذا المعرّف في المخزن المحمي للهاتف، فيبقى كما هو حتى لو أعدت تثبيت التطبيق؛ ولا يحفظ خادمنا إلا بصمة له، أي تجزئة أحادية الاتجاه لا يمكن استعادة المعرّف منها. وللحد من عدد الحسابات الجديدة التي تُفتح من شبكة واحدة نحتفظ ببصمة لعنوان IP الخاص بك لمدة 24 ساعة؛ ويحتفظ البلاغ الذي تقدمه ببصمة أيضًا، حتى لا يتظاهر شخص واحد بأنه عدة مبلِّغين. إذا سجّلت الدخول عبر Apple نحتفظ، مشفّرًا، بالرمز الذي تصدره Apple لحسابك، حتى نتمكن من فصل معرّف Apple الخاص بك عند حذف الحساب. ولحسابات فريق العمل أيضًا مفتاح سري للتحقق بخطوتين، محفوظ مشفّرًا. إذا انضممت إلى قائمة الانتظار على موقعنا، نحتفظ فقط ببريدك الإلكتروني ولغتك: لنخبرك عند إطلاق Niyyah ولنمنحك هدية ترحيب إذا سجّلت بالعنوان نفسه. ونحذفه في موعد أقصاه 12 شهرًا بعد رسالة الإطلاق. وبعد منح الهدية يُحذف العنوان نفسه، ولا تبقى إلا بصمته الأحادية الاتجاه ونطاقه لمدة سنتين، حتى لا تُطلب الهدية نفسها مرتين."
    },
    {
      "h": "لماذا نستخدمها وعلى أي أساس",
      "b": "لتشغيل الخدمة التي سجّلت فيها — عرض ملفات مناسبة عليك، وإيصال رسائلك، ومعالجة المشتريات، والرد عليك حين تكتب إلينا — لأن اتفاقنا معك يقتضي ذلك. وللحفاظ على أمان المجتمع — الإشراف، والفحوص التلقائية المذكورة أدناه، وبصمات الأجهزة وعناوين IP والبريد الإلكتروني التي تمنع عودة المحظورين والحسابات المكررة — لأن ذلك مصلحتنا المشروعة ومصلحة كل عضو في خدمة آمنة. معلوماتك الدينية وصورة التحقق من الوجه ووثائق هوية المحرم فئات خاصة من البيانات، ولا نعالجها إلا بموافقة صريحة: تمنحها للمعلومات الدينية حين توقّع التعهد في نهاية التسجيل، وللتحقق من الوجه والوثائق باختيارك إرسالها. ونحتفظ بسجلات الدفع لأن قوانين المحاسبة تفرض ذلك. وعلى موقعنا لا تقيس Meta الزيارات إلا بموافقتك. لا نبني من بياناتك ملفات إعلانية، ولا نستخدم رسائلك لاستهدافك بأي شيء."
    },
    {
      "h": "الفحوص التلقائية",
      "b": "يُفحص بعض النصوص تلقائيًا قبل حفظه. يُرفض رقم الهاتف أو اسم المستخدم على منصة أخرى أو الرابط في اسمك ونبذتك وكل ما يقرؤه الأعضاء الآخرون خارج المحادثة — التعليقات ورسائل التعارف وتعليقات القصص والردود — ويخبرك التطبيق بالسبب. أما في المحادثة فتمر هذه البيانات، لكن يُنبَّه مشرف إليها؛ ولا تُرفض إلا ما دامت امرأة قد طلبت محرمًا ولم يوافق أي محرم على المحادثة بعد. والرسائل التي تحتوي عبارات معتادة في الاحتيال، كطلب المال أو العملات المشفرة أو بطاقات الهدايا، تُعلَّم للمشرف فقط ولا تُحجب أبدًا. لا تُفحص الصور تلقائيًا: يقرأ مشرف منشورات المجتمع قبل ظهورها، وتنتظر قصص الحسابات الجديدة أو التي لم تجتز التحقق من الوجه مشرفًا قبل أن يراها غيرك. ولا يقرر أي من هذه الفحوص شيئًا بشأن حسابك: فالتحذير أو الإزالة أو الإيقاف المؤقت أو الحظر يقرره دائمًا إنسان."
    },
    {
      "h": "الصور والتحقق من الوجه",
      "b": "تظهر صور الملف الشخصي فور إضافتها، ويزيل المشرفون الصور المبلَّغ عنها التي تخالف القواعد. للتحقق من الوجه تلتقط صورة مباشرة تُقارَن بصور ملفك. والمقارنة تلقائية: تتحقق Amazon Web Services ‏(Amazon Rekognition، في فرانكفورت، الاتحاد الأوروبي) نيابةً عنا من أن الصورة تُظهر وجهًا واحدًا، وتقدّر الفئة العمرية، وتقيس مدى تشابهها مع صور ملفك. يُعتمد التطابق الواضح فورًا؛ وكل ما ليس واضحًا — تشابه أقل، أو عمر مقدَّر دون 18، أو خطأ تقني — يقرر فيه شخص من Niyyah. وتُرفض الصورة التي لا يظهر فيها وجه واضح، ويمكنك ببساطة التقاطها من جديد. لا تحتفظ Amazon بالصور ولا تستخدمها لتحسين خدماتها. لا تُنشر الصورة المباشرة أبدًا. تُحفظ مشفّرة ولا يُحتفظ بها إلا ما دام حسابك يحمل شارة التحقق، ليكون لأي تحقق لاحق ما يقارن به؛ وتُحذف عند رفض التحقق أو إزالة الشارة أو حذف حسابك. ولأن الوجه بيان حساس، فالتحقق اختيارك ويقوم على موافقتك."
    },
    {
      "h": "وثائق هوية المحرم",
      "b": "المحرم الذي يريد قراءة محادثة يؤكد هويته، بموافقته الصريحة، بوثيقة هوية وصورة ذاتية. تُحفظ مشفّرة، ولا يراها إلا من يراجعها، وتُحذف فور اتخاذ القرار."
    },
    {
      "h": "الموقع",
      "b": "نستخدم موقعك فقط لتحديد مدينتك. إذا سمحت بالوصول إلى الموقع، تحوّل خدمة الخرائط في هاتفك نفسه (خدمة Apple على iPhone وخدمة Google على Android) الإحداثيات إلى اسم مكان، ويحدد خادمنا المدينة ومركزها عبر Nominatim، خدمة مؤسسة OpenStreetMap، مرسلًا إليها الإحداثيات أو اسم المدينة فقط — ولا شيء يكشف هويتك. وإذا فضّلت كتابة مدينتك، يبحث التطبيق عنها عبر بحث الأماكن في Open-Meteo، الذي لا يتلقى إلا ما تكتبه، وكأي موقع إلكتروني عنوان IP لهاتفك. لا يُحفظ موقعك الدقيق: يُختزل إلى مركز مدينتك قبل حفظه، ولا شيء مما يراه الأعضاء الآخرون أدق من ذلك. يمكنك سحب إذن الموقع من إعدادات هاتفك."
    },
    {
      "h": "من يرى ماذا",
      "b": "يرى الأعضاء الآخرون ملفك كما أعددته. ويرى المحرم الذي توافق عليه المحادثة منذ لحظة الموافقة. ويرى المشرفون المحتوى المبلَّغ عنه والعلامات التلقائية المذكورة أعلاه وما يلزم للحكم فيها. عند الإبلاغ عن محادثة تُنسخ آخر 20 رسالة منها — بما فيها الرسائل الصوتية والرسائل المسحوبة حديثًا — إلى البلاغ؛ وعند الإبلاغ عن رسالة أو ملف شخصي أو منشور أو رد تُحفظ نسخة منه مع البلاغ، حتى لا يمحو الحذف الدليل. الرسالة التي تسحبها تختفي عند الطرف الآخر فورًا، لكنها تبقى على الخادم حتى سبعة أيام ليظل الإبلاغ عنها ممكنًا، ثم تُحذف. لا أحد في Niyyah يقرأ المحادثات الخاصة بشكل روتيني."
    },
    {
      "h": "من يعالج البيانات لنا",
      "b": "Contabo (الخوادم التي يعمل عليها التطبيق)، وCloudflare (حماية الشبكة)، وGoogle Firebase (الإشعارات الفورية)، وApple وGoogle (تسجيل الدخول والمشتريات داخل التطبيق)، وRevenueCat (معالجة المشتريات داخل التطبيق)، وResend (إرسال البريد الإلكتروني)، وAmazon Web Services (التحقق التلقائي من الوجه وفحص الصور، داخل الاتحاد الأوروبي)، وOpen-Meteo (البحث عن المدينة)، وNominatim التابعة لمؤسسة OpenStreetMap (تحويل المدينة أو الإحداثيات إلى مركز المدينة). ولا يتلقى كل منهم إلا ما يحتاجه لدوره. تُحفظ النسخ الاحتياطية المشفّرة للخادم في Contabo Object Storage داخل الاتحاد الأوروبي. لا نرى بيانات بطاقتك أبدًا — فالدفع يتم عبر App Store أو Google Play. وعلى موقعنا لا تقيس Meta (فيسبوك) الزيارات إلا إذا وافقت. ولا نبيع البيانات الشخصية لأحد."
    },
    {
      "h": "النقل خارج أوروبا",
      "b": "بعض هذه الشركات مقرها في الولايات المتحدة أو قد تعالج البيانات هناك: Cloudflare وGoogle وApple وAmazon وRevenueCat وResend وMeta. عندما تغادر البيانات الشخصية الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية أو البوسنة والهرسك، يحميها إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة (Data Privacy Framework) لدى الشركات المعتمدة بموجبه، وإلا فالبنود التعاقدية النموذجية للمفوضية الأوروبية. اكتب إلينا إن أردت معرفة الضمانة التي تنطبق على كل شركة."
    },
    {
      "h": "مدة الاحتفاظ",
      "b": "تُحذف رسائل المحادثة بعد ثلاثة أيام من إرسالها، إلا إذا اخترتما كلاكما تعريف العائلتين، أو إذا أُبلغ عن الرسالة (فحينئذ حتى 30 يومًا بعد البت في البلاغ). الرسالة المسحوبة: حتى سبعة أيام. رسائل التعارف بلا رد: 30 يومًا. الردود على القصص ومن شاهدها: 30 يومًا بعد انتهاء القصة؛ وصور القصص: سبعة أيام بعد انتهاء القصة. زيارات الملف والإشعارات المقروءة: 180 يومًا؛ والإشعارات غير المقروءة: 90 يومًا. الأيام التي فتحت فيها التطبيق: 120 يومًا. جلسة تسجيل الدخول التي لا تُستخدم 180 يومًا تُنهى وتُحذف. بصمات عناوين IP المستخدمة للحد من الحسابات الجديدة: 24 ساعة. مشتريات العملات التي لم يمكن ربطها بحساب بعد: سنة واحدة. تبقى البلاغات حتى يبت فيها مشرف؛ ثم يُمسح محتواها، مع بصمة عنوان IP للمبلِّغ، بعد 90 يومًا من رفضها وبعد سنتين من البت فيها، وتُحذف العلامات التلقائية المرفوضة كليًا بعد 90 يومًا. النسخ الاحتياطية للخادم: حتى 30 يومًا."
    },
    {
      "h": "عند حذف حسابك",
      "b": "يُحذف ملفك الشخصي وصورك وتطابقاتك ورسائلك. ويبقى القليل، دون اسمك: سجلات الدفع والعملات لأغراض المحاسبة؛ وبصمات أحادية الاتجاه لبريدك الإلكتروني ولتسجيل دخولك عبر Google أو Apple وللهواتف التي استخدمتها، ومعها ما إذا كان الحساب محظورًا وسبب ذلك، والأعضاء الذين حجبوك، وأي دين غير مدفوع من العملات، والمكافآت لمرة واحدة التي حصلت عليها من قبل. وتُستخدم لما يلي: خلال 30 يومًا بعد حذف حساب أكملت تسجيله، لا يمكن إنشاء حساب جديد بالبريد الإلكتروني نفسه أو بحساب Google أو Apple نفسه، ولا على الهاتف الذي أُنشئ عليه الحساب المحذوف؛ ويتبعك الحظر وحجب الأعضاء الآخرين إلى أي حساب جديد؛ ولا يمكن التهرب من العملات غير المدفوعة؛ ولا تُمنح المكافآت لمرة واحدة مرتين. يُحتفظ بسجل الحساب المحظور دون حد زمني، وبالدين غير المدفوع حتى سداده؛ ويُحتفظ بالحجب ما دام للعضو الذي قام به حساب؛ ويُحذف كل ما عدا ذلك بعد سنة من إغلاق الحساب."
    },
    {
      "h": "حقوقك",
      "b": "يمكنك الحصول على نسخة من بياناتك بصيغة قابلة للقراءة آليًا (JSON — ترسلها الإعدادات إلى بريدك) ونقلها إلى خدمة أخرى؛ وتصحيح الخطأ؛ وحذف حسابك؛ وأن تطلب منا تقييد استخدام بياناتك، مثلًا أثناء النظر في شكوى؛ والاعتراض على استخدام يقوم على مصلحتنا المشروعة؛ وسحب أي موافقة في أي وقت، دون أن يؤثر ذلك على ما تم قبلها. لسحب موافقتك على التحقق من الوجه اكتب إلينا، فنحذف الصورة ونزيل الشارة. المعلومات الدينية جزء من كل ملف هنا، لذا فإن سحب الموافقة عليها يعني حذف الحساب. لا يُتخذ بشأنك أي قرار ذي أثر قانوني أو أثر مهم مماثل بوسائل آلية وحدها. لأي أمر آخر اكتب إلى support@niyyahmarriage.com، وستصلك إجابة خلال 30 يومًا. ولك الحق في الشكوى إلى سلطة لحماية البيانات. السلطة الرقابية الرئيسية المختصة بنا هي هيئة التفتيش الإستونية لحماية البيانات (Andmekaitse Inspektsioon، www.aki.ee)؛ ويمكنك أيضًا الشكوى إلى السلطة في بلدك: في الاتحاد الأوروبي سلطتك الوطنية، وفي البوسنة والهرسك وكالة حماية البيانات الشخصية."
    },
    {
      "h": "الأمان والقاصرون والتغييرات",
      "b": "تنتقل البيانات عبر اتصالات مشفّرة، ولا يصل إليها داخل الفريق إلا من يتطلب عمله ذلك، وحسابات فريق العمل محمية بتسجيل دخول بخطوتين. لا يوجد نظام مثالي، فأخبرنا فورًا إن بدا شيء غير صحيح في حسابك. Niyyah ليس لمن هم دون 18 عامًا؛ إن وجدنا حسابًا كهذا أغلقناه وحذفنا بياناته. إذا غيّرنا هذه السياسة تغييرًا مهمًا، سنخبرك في التطبيق قبل سريانه."
    },
    {
      "h": "المعلومات الدينية والتذكيرات وتفاصيل أخرى",
      "b": "المعلومات الدينية هي كل ما تخبرنا به عن دينك: الالتزام الديني، والصلاة، وقراءة القرآن، والمذهب، والحجاب. لا نحفظها إلا بعد أن تعطي موافقتك الصريحة؛ وحتى ذلك الحين تبقى إجاباتك على هاتفك. الحسابات التي أُنشئت قبل 21.10.2026 يُطلب منها هذه الموافقة مرة واحدة في التطبيق: وإلى أن تجيب، لا تُعرض هذه الإجابات على أحد ولا تُستخدم في التوافق أو الفلاتر، وإذا لم تُعطَ الموافقة نحذفها. ونسجّل متى وافقت وعلى أي نسخة من النص. التذكيرات (مثل تسجيل لم يكتمل أو رسالة على وشك الانتهاء) وتهاني الأعياد وأخبار الأعضاء الجدد القريبين منك نرسلها بإشعار أو بالبريد الإلكتروني فقط إذا اخترت ذلك عند توقيع الالتزام — وتحتفظ الحسابات الأقدم بإعدادها الحالي — ويمكنك إيقافها من الإعدادات أو عبر الرابط في كل رسالة بريد؛ أما الإشعارات المتعلقة بحسابك فنرسلها دائمًا. تمر الإشعارات عبر Google Firebase وخدمة إشعارات Apple (APNs)؛ ويُظهر إشعار الرسالة اسم المرسل وبداية الرسالة ما لم تفعّل الإشعارات المتحفظة، ويُحتفظ بالإشعار الذي تعذّر تسليمه على خادمنا 48 ساعة على الأكثر. تسجّل خوادمنا عنوان IP ووقت كل طلب والعنوان المطلوب، والأخطاء، لأغراض الأمان وإصلاح الأعطال: سجلات الوصول حتى 14 يومًا، وسجلات الأخطاء والخدمات حتى ثمانية أسابيع. مدد أخرى: التسجيل الذي توقّف قبل توقيع الالتزام يُحذف مع صوره بعد 30 يومًا من آخر نشاط؛ ووثائق هوية المحرم التي لا يراجعها أحد خلال 30 يومًا تُحذف ويُطلب من المحرم إرسالها مجددًا؛ والشخص الذي تدعوه محرمًا وليس عضوًا يُعلَم بذلك في الدعوة نفسها، ويُحذف اسمه وعنوانه بعد 90 يومًا من رفض الدعوة أو سحبها أو انتهائها؛ ومحادثات الدعم: سنتان بعد إغلاقها؛ ومحاولات التحقق من الوجه (النتيجة والبيانات التقنية، دون صورة): سنة واحدة؛ وسجلات قرارات الفريق وإشراف المحرم: ثلاث سنوات؛ وسجلات المدفوعات ودفتر العملات: عشر سنوات من نهاية السنة التي أُنشئت فيها، كما يقتضي قانون المحاسبة. عند حذف حسابك نطلب أيضًا من RevenueCat حذف سجل المشتريات المحفوظ باسم حسابك، ولا نحتفظ لمدة 35 يومًا إلا بمعرّف الحساب المحذوف دون أي بيانات أخرى، حتى لا تعيده نسخة احتياطية مستعادة. ويمكنك أيضًا تنزيل نسخة بياناتك عبر رابط لمرة واحدة صالح لمدة 24 ساعة؛ وتتضمن أيضًا الرسائل التي أرسلها لك الآخرون ولا تزال تراها في التطبيق، دون ملفاتهم الشخصية."
    }
  ],
  "id": [
    {
      "h": "Siapa yang bertanggung jawab",
      "b": "Niyyah dijalankan oleh Puzzles IT OÜ, perseroan terbatas swasta yang terdaftar di Estonia (nomor registrasi 16552842; alamat: Sepapaja tn 6, 15551 Tallinn, Estonia), yang merupakan pengendali data pribadimu. Perusahaan ini diwakili oleh anggota dewan direksinya, Nermedin Džeković. Untuk apa pun dalam kebijakan ini, tulis ke support@niyyahmarriage.com."
    },
    {
      "h": "Apa yang kami kumpulkan",
      "b": "Yang kamu berikan: nama, tanggal lahir, jenis kelamin, alamat email, kota, foto, dan jawabanmu di profil (misalnya praktik keagamaan, status pernikahan, anak, dan rencana menikah). Yang muncul saat kamu memakai aplikasi: suka, profil yang dilewati, kecocokan, pesan dan pesan suara, postingan, komentar, dan cerita di komunitas, pembelian koin, laporan yang kamu ajukan, profil dan cerita yang kamu lihat, serta hari-hari saat kamu membuka aplikasi. Data teknis: jenis perangkat, versi aplikasi, zona waktu, token notifikasi, ID akun Google atau Apple-mu jika kamu masuk dengannya, dan sebuah pengenal ponselmu. Aplikasi menyimpan pengenal itu di penyimpanan aman ponsel, sehingga tetap sama walaupun aplikasi dipasang ulang; server kami hanya menyimpan sidik jarinya — hash satu arah yang tidak bisa dikembalikan menjadi pengenal aslinya. Untuk membatasi jumlah akun baru dari satu jaringan, kami menyimpan sidik jari alamat IP-mu selama 24 jam; laporan yang kamu ajukan juga menyimpan satu, agar satu orang tidak bisa berpura-pura menjadi beberapa pelapor. Jika kamu masuk dengan Apple, kami menyimpan token yang diterbitkan Apple untuk akunmu dalam bentuk terenkripsi, agar kami bisa memutus hubungan dengan Apple ID-mu saat kamu menghapus akun. Akun tim juga memiliki kunci rahasia untuk masuk dua langkah, disimpan terenkripsi. Jika kamu bergabung dengan daftar tunggu di situs kami, kami hanya menyimpan alamat email dan bahasamu: untuk memberitahumu saat Niyyah diluncurkan dan memberimu hadiah sambutan jika kamu mendaftar dengan alamat yang sama. Kami menghapusnya paling lambat 12 bulan setelah email peluncuran. Setelah hadiah diberikan, alamat itu sendiri dihapus; hanya sidik jari satu arahnya dan domainnya yang tersisa, selama dua tahun, agar hadiah yang sama tidak bisa diklaim dua kali."
    },
    {
      "h": "Untuk apa kami menggunakannya, dan atas dasar apa",
      "b": "Untuk menjalankan layanan yang kamu daftari — menampilkan profil yang cocok, mengirimkan pesanmu, memproses pembelian, dan menjawabmu saat kamu menulis kepada kami — karena perjanjian kami denganmu memerlukannya. Untuk menjaga komunitas tetap aman — moderasi, pemeriksaan otomatis yang dijelaskan di bawah, serta sidik jari perangkat, alamat IP, dan alamat email yang menjauhkan orang yang diblokir permanen dan akun ganda — karena itu kepentingan sah kami, dan kepentingan setiap anggota, atas layanan yang aman. Informasi keagamaanmu, foto pemeriksaan wajah, dan dokumen identitas mahram adalah kategori data khusus, dan kami memprosesnya hanya dengan persetujuan tegas: untuk informasi keagamaan kamu memberikannya saat menandatangani komitmen di akhir pendaftaran, dan untuk pemeriksaan wajah serta dokumen dengan memilih untuk mengirimkannya. Catatan pembayaran kami simpan karena hukum akuntansi mewajibkannya. Di situs kami, Meta mengukur kunjungan hanya dengan persetujuanmu. Kami tidak membuat profil iklan dari datamu, dan tidak memakai pesanmu untuk menargetkanmu dengan apa pun."
    },
    {
      "h": "Pemeriksaan otomatis",
      "b": "Sebagian teks diperiksa secara otomatis sebelum disimpan. Nomor telepon, nama pengguna di platform lain, atau tautan ditolak di namamu, biomu, dan semua yang dibaca anggota lain di luar obrolan — komentar, pesan perkenalan, keterangan cerita, balasan — dan aplikasi memberitahumu alasannya. Di dalam obrolan, informasi seperti itu tetap terkirim, tetapi seorang moderator diberi tahu; informasi itu hanya ditolak selama seorang perempuan telah meminta mahram dan belum ada mahram yang menyetujui obrolan tersebut. Pesan yang berisi ungkapan khas penipuan, seperti meminta uang, kripto, atau kartu hadiah, hanya ditandai untuk moderator dan tidak pernah diblokir. Foto tidak diperiksa secara otomatis: postingan komunitas dibaca moderator sebelum tampil, dan cerita dari akun baru atau akun yang belum lolos pemeriksaan wajah menunggu moderator sebelum dilihat orang lain. Tidak satu pun dari pemeriksaan ini memutuskan apa pun tentang akunmu: peringatan, penghapusan, penangguhan, atau pemblokiran permanen selalu diputuskan oleh manusia."
    },
    {
      "h": "Foto dan pemeriksaan wajah",
      "b": "Foto profil tampil begitu kamu menambahkannya; moderator menghapus foto yang dilaporkan dan melanggar aturan. Untuk pemeriksaan wajah, kamu mengambil foto langsung yang dibandingkan dengan foto profilmu. Perbandingan ini otomatis: Amazon Web Services (Amazon Rekognition, di Frankfurt, UE) atas nama kami memeriksa bahwa foto menampilkan satu wajah, memperkirakan rentang usia, dan mengukur seberapa mirip foto itu dengan foto profilmu. Kecocokan yang jelas langsung disetujui; semua yang tidak jelas — kemiripan lebih rendah, perkiraan usia di bawah 18 tahun, atau kesalahan teknis — diputuskan oleh seseorang dari Niyyah. Foto tanpa wajah yang dapat dikenali ditolak, dan kamu cukup mengambilnya lagi. Amazon tidak menyimpan foto tersebut dan tidak menggunakannya untuk mengembangkan layanannya. Foto langsung tidak pernah dipublikasikan. Foto itu disimpan terenkripsi dan hanya selama akunmu memiliki lencana terverifikasi, agar pemeriksaan berikutnya punya pembanding; foto dihapus saat pemeriksaan ditolak, saat lencana dicabut, atau saat kamu menghapus akun. Karena wajah adalah data sensitif, pemeriksaan ini pilihanmu dan berdasar pada persetujuanmu."
    },
    {
      "h": "Dokumen identitas mahram",
      "b": "Mahram yang ingin membaca percakapan mengonfirmasi identitasnya, dengan persetujuan tegasnya, menggunakan dokumen identitas dan swafoto. Keduanya disimpan terenkripsi, hanya dilihat oleh orang yang meninjaunya, dan dihapus segera setelah keputusan dibuat."
    },
    {
      "h": "Lokasi",
      "b": "Kami memakai lokasimu hanya untuk menentukan kotamu. Jika kamu mengizinkan akses lokasi, layanan peta bawaan ponselmu (milik Apple di iPhone, milik Google di Android) mengubah koordinat menjadi nama tempat, dan server kami mencari kota beserta pusatnya melalui Nominatim, layanan OpenStreetMap Foundation, dengan hanya mengirimkan koordinat atau nama kota — tidak ada yang mengidentifikasimu. Jika kamu lebih suka mengetik kotamu, aplikasi mencarinya melalui pencarian tempat Open-Meteo, yang hanya menerima apa yang kamu ketik dan, seperti situs web mana pun, alamat IP ponselmu. Posisi tepatmu tidak disimpan: posisi itu disederhanakan menjadi pusat kotamu sebelum disimpan, dan tidak ada yang dilihat anggota lain yang lebih tepat dari itu. Kamu dapat mencabut izin lokasi di pengaturan ponsel."
    },
    {
      "h": "Siapa melihat apa",
      "b": "Anggota lain melihat profilmu sebagaimana kamu mengaturnya. Mahram yang kamu setujui melihat percakapan sejak saat persetujuan. Moderator melihat konten yang dilaporkan, tanda otomatis yang dijelaskan di atas, dan apa yang diperlukan untuk menilainya. Saat sebuah obrolan dilaporkan, 20 pesan terakhirnya — termasuk pesan suara dan pesan yang baru ditarik — disalin ke dalam laporan; saat sebuah pesan, profil, postingan, atau balasan dilaporkan, salinannya disimpan bersama laporan, agar menghapusnya tidak menghilangkan bukti. Pesan yang kamu tarik langsung hilang bagi orang lain, tetapi tetap di server hingga tujuh hari agar masih bisa dilaporkan, lalu dihapus. Tidak ada seorang pun di Niyyah yang membaca percakapan pribadi secara rutin."
    },
    {
      "h": "Siapa yang memproses data untuk kami",
      "b": "Contabo (server tempat aplikasi berjalan), Cloudflare (perlindungan jaringan), Google Firebase (notifikasi push), Apple dan Google (masuk dan pembelian dalam aplikasi), RevenueCat (pemrosesan pembelian dalam aplikasi), Resend (pengiriman email), Amazon Web Services (pemeriksaan wajah otomatis dan pemeriksaan foto, di UE), Open-Meteo (pencarian kota), dan Nominatim milik OpenStreetMap Foundation (mengubah kota atau koordinat menjadi pusat kota). Masing-masing hanya menerima yang diperlukan untuk bagiannya. Cadangan server terenkripsi disimpan di Contabo Object Storage di UE. Kami tidak pernah melihat data kartumu — pembayaran melalui App Store atau Google Play. Di situs kami, Meta (Facebook) mengukur kunjungan hanya jika kamu setuju. Kami tidak menjual data pribadi kepada siapa pun."
    },
    {
      "h": "Transfer ke luar Eropa",
      "b": "Beberapa perusahaan ini berkedudukan di Amerika Serikat atau dapat memproses data di sana: Cloudflare, Google, Apple, Amazon, RevenueCat, Resend, dan Meta. Saat data pribadi keluar dari UE/EEA atau Bosnia dan Herzegovina, data itu dilindungi oleh Kerangka Privasi Data UE–AS (Data Privacy Framework) bagi perusahaan yang tersertifikasi di dalamnya, dan selebihnya oleh klausul kontrak standar Komisi Eropa. Tulis kepada kami jika kamu ingin tahu perlindungan mana yang berlaku untuk perusahaan mana."
    },
    {
      "h": "Berapa lama kami menyimpan",
      "b": "Pesan obrolan dihapus tiga hari setelah dikirim, kecuali kalian berdua memilih memperkenalkan keluarga, atau pesan dilaporkan (maka sampai 30 hari setelah laporan diputuskan). Pesan yang ditarik: hingga tujuh hari. Pesan perkenalan tanpa balasan: 30 hari. Balasan cerita dan siapa yang melihatnya: 30 hari setelah cerita berakhir; foto cerita: tujuh hari setelah cerita berakhir. Kunjungan profil dan notifikasi yang dibaca: 180 hari; notifikasi yang belum dibaca: 90 hari. Hari-hari saat kamu membuka aplikasi: 120 hari. Sesi masuk yang tidak dipakai selama 180 hari diakhiri dan dihapus. Sidik jari alamat IP untuk membatasi akun baru: 24 jam. Pembelian koin yang belum bisa dikaitkan dengan akun: satu tahun. Laporan disimpan sampai moderator memutuskannya; isinya, bersama sidik jari alamat IP pelapor, dihapus 90 hari setelah ditolak dan dua tahun setelah diputuskan, dan tanda otomatis yang ditolak dihapus seluruhnya setelah 90 hari. Cadangan server: hingga 30 hari."
    },
    {
      "h": "Saat kamu menghapus akun",
      "b": "Profil, foto, kecocokan, dan pesanmu dihapus. Beberapa hal disimpan, tanpa namamu: catatan pembayaran dan koin, untuk pembukuan; serta sidik jari satu arah dari alamat emailmu, login Google atau Apple-mu, dan ponsel yang kamu pakai, bersama keterangan apakah akun itu diblokir permanen dan alasannya, anggota yang memblokirmu, utang koin yang belum dibayar, dan hadiah sekali pakai yang sudah kamu terima. Gunanya: selama 30 hari setelah kamu menghapus akun yang pendaftarannya sudah kamu selesaikan, tidak bisa dibuat akun baru dengan alamat email yang sama atau akun Google atau Apple yang sama, atau di ponsel tempat akun yang dihapus itu dibuat; pemblokiran permanen dan blokir dari anggota lain mengikutimu ke akun baru; koin yang belum dibayar tidak bisa dihindari; dan hadiah sekali pakai tidak diberikan dua kali. Catatan akun yang diblokir permanen disimpan tanpa batas waktu, dan utang yang belum dibayar sampai dilunasi; blokir disimpan selama anggota yang memblokir masih punya akun; semua lainnya dihapus satu tahun setelah akun ditutup."
    },
    {
      "h": "Hak-hakmu",
      "b": "Kamu dapat memperoleh salinan datamu dalam format yang dapat dibaca mesin (JSON — Pengaturan mengirimkannya ke emailmu) dan membawanya ke layanan lain; memperbaiki yang salah; menghapus akun; meminta kami membatasi penggunaan datamu, misalnya selama keberatan sedang ditinjau; menolak penggunaan yang berdasar pada kepentingan sah kami; dan menarik persetujuan kapan saja, tanpa memengaruhi apa yang telah dilakukan sebelumnya. Untuk menarik persetujuan pemeriksaan wajah, tulis kepada kami, maka kami akan menghapus foto dan mencabut lencananya. Informasi keagamaan adalah bagian dari setiap profil di sini, jadi menarik persetujuan untuknya berarti menghapus akun. Tidak ada keputusan dengan akibat hukum atau akibat signifikan serupa yang diambil tentangmu semata-mata secara otomatis. Untuk hal lain, tulis ke support@niyyahmarriage.com — jawaban dalam 30 hari. Kamu juga berhak mengadu ke otoritas perlindungan data. Otoritas pengawas utama kami adalah Inspektorat Perlindungan Data Estonia (Andmekaitse Inspektsioon, www.aki.ee); kamu juga dapat mengadu ke otoritas di negaramu sendiri — di UE ke otoritas nasionalmu, di Bosnia dan Herzegovina ke Badan Perlindungan Data Pribadi."
    },
    {
      "h": "Keamanan, anak di bawah umur, dan perubahan",
      "b": "Data dikirim melalui koneksi terenkripsi, di dalam tim hanya mereka yang pekerjaannya memerlukan yang punya akses, dan akun tim dilindungi dengan masuk dua langkah. Tidak ada sistem yang sempurna, jadi segera beri tahu kami jika ada yang tampak salah dengan akunmu. Niyyah bukan untuk siapa pun di bawah 18 tahun; jika kami menemukan akun seperti itu, kami menutupnya dan menghapus datanya. Jika kami mengubah kebijakan ini secara penting, kami akan memberitahumu di aplikasi sebelum berlaku."
    },
    {
      "h": "Informasi keagamaan, pengingat, dan rincian lain",
      "b": "Informasi keagamaan adalah semua yang kamu ceritakan kepada kami tentang imanmu: praktik keagamaan, salat, membaca Al-Qur’an, mazhab, dan hijab. Kami menyimpannya hanya setelah kamu memberi persetujuan tegas; sampai saat itu jawabanmu tetap di ponselmu. Akun yang dibuat sebelum 21.10.2026 diminta persetujuan ini satu kali di aplikasi: sampai mereka menjawab, jawaban tersebut tidak ditampilkan kepada siapa pun dan tidak dipakai untuk pencocokan maupun filter, dan jika persetujuan tidak diberikan, kami menghapusnya. Kami mencatat kapan kamu memberi persetujuan dan untuk versi teks yang mana. Pengingat (misalnya pendaftaran yang belum selesai atau pesan yang akan segera kedaluwarsa), ucapan hari raya, dan kabar tentang anggota baru di dekatmu kami kirim lewat notifikasi push atau email hanya jika kamu mencentangnya saat menandatangani komitmen — akun lama tetap memakai pengaturan yang ada — dan kamu bisa mematikannya di Pengaturan atau lewat tautan di setiap email; pemberitahuan tentang akunmu selalu kami kirim. Notifikasi push dikirim lewat Google Firebase dan layanan notifikasi Apple (APNs); notifikasi pesan menampilkan nama pengirim dan awal pesan kecuali kamu menyalakan notifikasi diskret, dan notifikasi yang tidak dapat dikirim disimpan di server kami paling lama 48 jam. Server kami mencatat alamat IP, waktu, dan alamat yang diminta pada setiap permintaan, serta kesalahan, untuk keamanan dan perbaikan masalah: log akses paling lama 14 hari, log kesalahan dan layanan paling lama delapan minggu. Jangka waktu lain: pendaftaran yang berhenti sebelum komitmen ditandatangani dihapus, beserta fotonya, 30 hari setelah aktivitas terakhir; dokumen identitas mahram yang tidak ditinjau siapa pun dalam 30 hari dihapus dan mahram diminta mengirimnya lagi; orang yang kamu undang sebagai mahram dan bukan anggota diberi tahu hal ini dalam undangan itu sendiri, dan nama serta alamatnya dihapus 90 hari setelah undangan ditolak, ditarik, atau kedaluwarsa; percakapan dengan dukungan: dua tahun setelah ditutup; percobaan pemeriksaan wajah (hasil dan data teknis, tanpa foto): satu tahun; catatan keputusan tim dan pengawasan mahram: tiga tahun; catatan pembayaran dan buku koin: sepuluh tahun sejak akhir tahun pembuatannya, sebagaimana diwajibkan hukum akuntansi. Saat kamu menghapus akun, kami juga meminta RevenueCat menghapus riwayat pembelian yang tersimpan atas akunmu, dan selama 35 hari kami hanya menyimpan pengenal akun yang dihapus, tanpa data lain, agar pemulihan cadangan tidak mengembalikan akun itu. Salinan datamu juga bisa diunduh lewat tautan sekali pakai yang berlaku 24 jam; salinan itu juga memuat pesan yang dikirim orang lain kepadamu dan yang masih kamu lihat di aplikasi, tanpa profil mereka."
    }
  ],
  "ur": [
    {
      "h": "ذمہ دار کون ہے",
      "b": "Niyyah کو Puzzles IT OÜ چلاتی ہے، جو اسٹونیا میں رجسٹرڈ ایک نجی لمیٹڈ کمپنی ہے (رجسٹری نمبر 16552842؛ پتہ: Sepapaja tn 6, 15551 Tallinn، اسٹونیا)، اور یہی کمپنی آپ کے ذاتی ڈیٹا کی کنٹرولر ہے۔ کمپنی کی نمائندگی اس کے مینجمنٹ بورڈ کے رکن Nermedin Džeković کرتے ہیں۔ اس پالیسی سے متعلق کسی بھی بات کے لیے support@niyyahmarriage.com پر لکھیں۔"
    },
    {
      "h": "ہم کیا جمع کرتے ہیں",
      "b": "جو آپ ہمیں دیتے ہیں: آپ کا نام، تاریخ پیدائش، جنس، ای میل ایڈریس، شہر، تصاویر اور پروفائل پر آپ کے جوابات (مثلاً دینی عمل، ازدواجی حیثیت، بچے اور شادی کے منصوبے)۔ ایپ استعمال کرتے ہوئے جو بنتا ہے: لائکس، چھوڑے گئے پروفائل، میچز، پیغامات اور صوتی پیغامات، کمیونٹی کی پوسٹس، تبصرے اور کہانیاں، سکوں کی خریداری، آپ کی رپورٹس، وہ پروفائل اور کہانیاں جو آپ نے دیکھیں، اور وہ دن جب آپ نے ایپ کھولی۔ تکنیکی ڈیٹا: ڈیوائس کی قسم، ایپ کا ورژن، ٹائم زون، اطلاعات کا ٹوکن، اگر آپ Google یا Apple سے لاگ اِن کرتے ہیں تو اس اکاؤنٹ کی شناخت، اور آپ کے فون کا ایک شناخت کنندہ۔ ایپ یہ شناخت کنندہ فون کے محفوظ اسٹوریج میں رکھتی ہے، اس لیے ایپ دوبارہ انسٹال کرنے پر بھی یہ وہی رہتا ہے؛ ہمارا سرور اس کا صرف ایک نشان رکھتا ہے — یک طرفہ ہیش جس سے شناخت کنندہ واپس حاصل نہیں کیا جا سکتا۔ ایک نیٹ ورک سے کھلنے والے نئے اکاؤنٹس کو محدود کرنے کے لیے ہم آپ کے IP ایڈریس کا نشان 24 گھنٹے رکھتے ہیں؛ آپ کی بھیجی ہوئی رپورٹ بھی ایک نشان رکھتی ہے، تاکہ ایک شخص خود کو کئی رپورٹ کرنے والے ظاہر نہ کر سکے۔ اگر آپ Apple سے لاگ اِن کرتے ہیں تو ہم Apple کا جاری کردہ ٹوکن خفیہ (encrypted) صورت میں رکھتے ہیں، تاکہ اکاؤنٹ حذف کرتے وقت آپ کی Apple ID سے رابطہ ختم کر سکیں۔ ٹیم کے اکاؤنٹس میں دو مرحلوں والے لاگ اِن کا ایک خفیہ کوڈ بھی ہوتا ہے، جو خفیہ صورت میں محفوظ ہے۔ اگر آپ ہماری ویب سائٹ پر انتظار کی فہرست میں شامل ہوں تو ہم صرف آپ کا ای میل اور زبان رکھتے ہیں: تاکہ Niyyah شروع ہونے پر آپ کو بتائیں اور اسی ایڈریس سے رجسٹر ہونے پر خوش آمدید کا تحفہ دیں۔ ہم اسے لانچ ای میل کے زیادہ سے زیادہ 12 ماہ بعد حذف کر دیتے ہیں۔ تحفہ دیے جانے کے بعد ایڈریس خود حذف ہو جاتا ہے، اور دو سال تک صرف اس کا یک طرفہ نشان اور ڈومین رہتے ہیں، تاکہ وہی تحفہ دو بار نہ لیا جا سکے۔"
    },
    {
      "h": "ہم اسے کیوں اور کس بنیاد پر استعمال کرتے ہیں",
      "b": "اس سروس کو چلانے کے لیے جس کے لیے آپ نے رجسٹر کیا — آپ کو موزوں پروفائل دکھانا، آپ کے پیغامات پہنچانا، خریداریاں پراسیس کرنا اور آپ کے لکھنے پر جواب دینا — کیونکہ آپ کے ساتھ ہمارا معاہدہ یہی تقاضا کرتا ہے۔ کمیونٹی کو محفوظ رکھنے کے لیے — نگرانی (موڈریشن)، نیچے بیان کردہ خودکار جانچ، اور ڈیوائسز، IP ایڈریسز اور ای میل ایڈریسز کے وہ نشانات جو پابندی شدہ افراد اور دوہرے اکاؤنٹس کو باہر رکھتے ہیں — کیونکہ محفوظ سروس ہمارا اور ہر رکن کا جائز مفاد ہے۔ آپ کی مذہبی معلومات، چہرے کی تصدیق کی تصویر اور محرم کی شناختی دستاویزات خاص زمرے کا ڈیٹا ہیں، اور ہم انہیں صرف واضح رضامندی سے پراسیس کرتے ہیں: مذہبی معلومات کے لیے آپ یہ رضامندی رجسٹریشن کے آخر میں عہد پر دستخط کرتے وقت دیتے ہیں، اور چہرے کی تصدیق اور دستاویزات کے لیے انہیں بھیجنے کا انتخاب کر کے۔ ادائیگی کا ریکارڈ ہم اس لیے رکھتے ہیں کہ حساب کتاب کا قانون اس کا تقاضا کرتا ہے۔ ہماری ویب سائٹ پر Meta وزٹس صرف آپ کی رضامندی سے ناپتا ہے۔ ہم آپ کے ڈیٹا سے اشتہاری پروفائل نہیں بناتے اور آپ کے پیغامات کو آپ کو کچھ ہدف بنا کر پیش کرنے کے لیے استعمال نہیں کرتے۔"
    },
    {
      "h": "خودکار جانچ",
      "b": "کچھ متن محفوظ ہونے سے پہلے خودکار طور پر جانچا جاتا ہے۔ فون نمبر، کسی دوسرے پلیٹ فارم کا یوزر نیم یا لنک آپ کے نام، تعارف اور ہر اس چیز میں قبول نہیں ہوتا جو دوسرے اراکین گفتگو کے باہر پڑھتے ہیں — تبصرے، تعارفی پیغامات، کہانیوں کی عبارتیں، جوابات — اور ایپ آپ کو وجہ بتاتی ہے۔ گفتگو میں ایسی معلومات گزر جاتی ہیں، لیکن ایک موڈریٹر کو مطلع کیا جاتا ہے؛ یہ صرف تب رد ہوتی ہیں جب کسی خاتون نے محرم مانگا ہو اور ابھی کسی محرم نے گفتگو کی منظوری نہ دی ہو۔ دھوکہ دہی میں عام جملوں والے پیغامات، جیسے پیسے، کرپٹو یا گفٹ کارڈ مانگنا، صرف موڈریٹر کے لیے نشان زد ہوتے ہیں اور کبھی روکے نہیں جاتے۔ تصاویر خودکار طور پر نہیں جانچی جاتیں: کمیونٹی کی پوسٹس شائع ہونے سے پہلے موڈریٹر پڑھتا ہے، اور نئے اکاؤنٹس یا چہرے کی تصدیق پاس نہ کرنے والے اکاؤنٹس کی کہانیاں دوسروں کے دیکھنے سے پہلے موڈریٹر کا انتظار کرتی ہیں۔ ان میں سے کوئی جانچ آپ کے اکاؤنٹ کے بارے میں کوئی فیصلہ نہیں کرتی: انتباہ، ہٹانا، معطلی یا پابندی ہمیشہ ایک انسان طے کرتا ہے۔"
    },
    {
      "h": "تصاویر اور چہرے کی تصدیق",
      "b": "پروفائل کی تصاویر شامل کرتے ہی نظر آتی ہیں؛ موڈریٹرز رپورٹ شدہ تصاویر ہٹاتے ہیں جو اصولوں کی خلاف ورزی کرتی ہوں۔ چہرے کی تصدیق کے لیے آپ ایک لائیو تصویر لیتے ہیں، جس کا موازنہ آپ کی پروفائل تصاویر سے کیا جاتا ہے۔ یہ موازنہ خودکار ہے: Amazon Web Services (Amazon Rekognition، فرینکفرٹ، یورپی یونین) ہماری طرف سے یہ جانچتی ہے کہ تصویر میں ایک ہی چہرہ ہے، عمر کی حد کا اندازہ لگاتی ہے اور ناپتی ہے کہ تصویر آپ کی پروفائل تصاویر سے کتنی ملتی ہے۔ واضح مماثلت فوراً منظور ہو جاتی ہے؛ جو کچھ واضح نہ ہو — کم مماثلت، 18 سال سے کم اندازہ شدہ عمر، یا کوئی تکنیکی خرابی — اس کا فیصلہ Niyyah کا ایک شخص کرتا ہے۔ جس تصویر میں پہچانا جا سکنے والا چہرہ نہ ہو وہ رد کر دی جاتی ہے، اور آپ اسے آسانی سے دوبارہ لے سکتے ہیں۔ Amazon یہ تصاویر محفوظ نہیں رکھتی اور انہیں اپنی خدمات بہتر بنانے کے لیے استعمال نہیں کرتی۔ لائیو تصویر کبھی شائع نہیں ہوتی۔ یہ خفیہ صورت میں محفوظ ہوتی ہے اور صرف اس وقت تک رکھی جاتی ہے جب تک آپ کے اکاؤنٹ پر تصدیق کا نشان ہو، تاکہ بعد کی جانچ کے پاس موازنے کے لیے کچھ ہو؛ تصدیق رد ہونے، نشان ہٹنے یا اکاؤنٹ حذف کرنے پر یہ حذف ہو جاتی ہے۔ چونکہ چہرہ حساس ڈیٹا ہے، تصدیق آپ کا انتخاب ہے اور آپ کی رضامندی پر مبنی ہے۔"
    },
    {
      "h": "محرم کی شناختی دستاویزات",
      "b": "جو محرم گفتگو پڑھنا چاہتا ہے وہ اپنی واضح رضامندی سے شناختی دستاویز اور سیلفی کے ذریعے اپنی شناخت کی تصدیق کرتا ہے۔ یہ خفیہ صورت میں محفوظ ہوتی ہیں، صرف جائزہ لینے والا شخص انہیں دیکھتا ہے، اور فیصلہ ہوتے ہی حذف کر دی جاتی ہیں۔"
    },
    {
      "h": "مقام",
      "b": "ہم آپ کا مقام صرف آپ کا شہر معلوم کرنے کے لیے استعمال کرتے ہیں۔ اگر آپ مقام تک رسائی کی اجازت دیں تو آپ کے فون کی اپنی نقشہ سروس (iPhone پر Apple کی، Android پر Google کی) نقاط کو جگہ کے نام میں بدلتی ہے، اور ہمارا سرور OpenStreetMap فاؤنڈیشن کی سروس Nominatim کے ذریعے شہر اور اس کا مرکز معلوم کرتا ہے، اور اسے صرف نقاط یا شہر کا نام بھیجتا ہے — ایسی کوئی چیز نہیں جس سے آپ کی شناخت ہو۔ اگر آپ اپنا شہر خود لکھنا پسند کریں تو ایپ اسے Open-Meteo کی جگہ تلاش سے ڈھونڈتی ہے، جسے صرف وہی ملتا ہے جو آپ لکھتے ہیں اور، ہر ویب سائٹ کی طرح، آپ کے فون کا IP ایڈریس۔ آپ کا درست مقام محفوظ نہیں ہوتا: محفوظ کرنے سے پہلے اسے شہر کے مرکز تک محدود کر دیا جاتا ہے، اور دوسرے اراکین جو دیکھتے ہیں وہ اس سے زیادہ درست نہیں۔ آپ فون کی سیٹنگز میں مقام کی اجازت واپس لے سکتے ہیں۔"
    },
    {
      "h": "کون کیا دیکھتا ہے",
      "b": "دوسرے اراکین آپ کا پروفائل ویسا ہی دیکھتے ہیں جیسا آپ نے بنایا ہے۔ جس محرم کو آپ منظور کریں وہ منظوری کے لمحے سے گفتگو دیکھتا ہے۔ موڈریٹرز رپورٹ شدہ مواد، اوپر بیان کردہ خودکار نشانات اور فیصلے کے لیے ضروری چیزیں دیکھتے ہیں۔ جب کسی گفتگو کی رپورٹ ہو تو اس کے آخری 20 پیغامات — صوتی پیغامات اور حال ہی میں واپس لیے گئے پیغامات سمیت — رپورٹ میں نقل ہو جاتے ہیں؛ جب کسی پیغام، پروفائل، پوسٹ یا جواب کی رپورٹ ہو تو اس کی ایک نقل رپورٹ کے ساتھ رکھی جاتی ہے، تاکہ حذف کرنے سے ثبوت مٹ نہ جائے۔ جو پیغام آپ واپس لیتے ہیں وہ دوسرے شخص کے لیے فوراً غائب ہو جاتا ہے، لیکن سات دن تک سرور پر رہتا ہے تاکہ اس کی رپورٹ ہو سکے، پھر حذف ہو جاتا ہے۔ Niyyah میں کوئی بھی معمول کے طور پر نجی گفتگو نہیں پڑھتا۔"
    },
    {
      "h": "ہمارے لیے ڈیٹا کون پراسیس کرتا ہے",
      "b": "Contabo (وہ سرور جن پر ایپ چلتی ہے)، Cloudflare (نیٹ ورک کا تحفظ)، Google Firebase (پش اطلاعات)، Apple اور Google (لاگ اِن اور ایپ میں خریداری)، RevenueCat (ایپ میں خریداری کی پراسیسنگ)، Resend (ای میل بھیجنا)، Amazon Web Services (چہرے کی خودکار تصدیق اور تصاویر کی جانچ، یورپی یونین میں)، Open-Meteo (شہر کی تلاش) اور OpenStreetMap فاؤنڈیشن کی Nominatim (شہر یا نقاط کو شہر کے مرکز میں بدلنا)۔ ہر ایک کو صرف وہی ملتا ہے جو اس کے کام کے لیے ضروری ہے۔ سرور کے خفیہ بیک اپ یورپی یونین میں Contabo Object Storage میں رکھے جاتے ہیں۔ ہم آپ کے کارڈ کی تفصیلات کبھی نہیں دیکھتے — ادائیگی App Store یا Google Play کے ذریعے ہوتی ہے۔ ہماری ویب سائٹ پر Meta (Facebook) وزٹس صرف آپ کی رضامندی سے ناپتا ہے۔ ہم ذاتی ڈیٹا کسی کو نہیں بیچتے۔"
    },
    {
      "h": "یورپ سے باہر منتقلی",
      "b": "ان میں سے کچھ کمپنیاں ریاستہائے متحدہ امریکہ میں ہیں یا وہاں ڈیٹا پراسیس کر سکتی ہیں: Cloudflare، Google، Apple، Amazon، RevenueCat، Resend اور Meta۔ جب ذاتی ڈیٹا یورپی یونین/یورپی اقتصادی علاقے یا بوسنیا و ہرزیگووینا سے باہر جاتا ہے تو اس کے تحت سرٹیفائیڈ کمپنیوں کے لیے EU–US ڈیٹا پرائیویسی فریم ورک (Data Privacy Framework) اور باقیوں کے لیے یورپی کمیشن کی معیاری معاہداتی شقیں اس کا تحفظ کرتی ہیں۔ اگر آپ جاننا چاہیں کہ کس کمپنی پر کون سا تحفظ لاگو ہے تو ہمیں لکھیں۔"
    },
    {
      "h": "ہم کتنی دیر رکھتے ہیں",
      "b": "گفتگو کے پیغامات بھیجنے کے تین دن بعد حذف ہو جاتے ہیں، سوائے اس کے کہ آپ دونوں نے خاندانوں کا تعارف کرانے کا فیصلہ کیا ہو یا پیغام رپورٹ ہوا ہو (پھر رپورٹ کے فیصلے کے 30 دن بعد تک)۔ واپس لیا گیا پیغام: زیادہ سے زیادہ سات دن۔ بغیر جواب کے تعارفی پیغامات: 30 دن۔ کہانیوں کے جوابات اور کس نے دیکھا: کہانی ختم ہونے کے 30 دن بعد؛ کہانیوں کی تصاویر: کہانی ختم ہونے کے سات دن بعد۔ پروفائل وزٹس اور پڑھی گئی اطلاعات: 180 دن؛ نہ پڑھی گئی اطلاعات: 90 دن۔ وہ دن جب آپ نے ایپ کھولی: 120 دن۔ 180 دن تک استعمال نہ ہونے والا لاگ اِن سیشن ختم اور حذف کر دیا جاتا ہے۔ نئے اکاؤنٹس محدود کرنے کے لیے IP ایڈریسز کے نشانات: 24 گھنٹے۔ سکوں کی وہ خریداریاں جو ابھی کسی اکاؤنٹ سے نہیں جوڑی جا سکیں: ایک سال۔ رپورٹس اس وقت تک رہتی ہیں جب تک موڈریٹر فیصلہ نہ کرے؛ پھر ان کا مواد، رپورٹ کرنے والے کے IP ایڈریس کے نشان سمیت، مسترد ہونے کے 90 دن اور فیصلے کے دو سال بعد مٹا دیا جاتا ہے، اور مسترد شدہ خودکار نشانات 90 دن بعد مکمل طور پر حذف ہو جاتے ہیں۔ سرور بیک اپ: زیادہ سے زیادہ 30 دن۔"
    },
    {
      "h": "جب آپ اپنا اکاؤنٹ حذف کریں",
      "b": "آپ کا پروفائل، تصاویر، میچز اور پیغامات حذف ہو جاتے ہیں۔ آپ کے نام کے بغیر چند چیزیں رہتی ہیں: حساب کتاب کے لیے ادائیگی اور سکوں کا ریکارڈ؛ اور آپ کے ای میل ایڈریس، Google یا Apple لاگ اِن اور آپ کے استعمال کردہ فونز کے یک طرفہ نشانات، اس کے ساتھ کہ آیا اکاؤنٹ پر پابندی تھی اور کیوں، کن اراکین نے آپ کو بلاک کیا تھا، سکوں کا کوئی غیر ادا شدہ قرض، اور کون سے ایک بار کے انعامات آپ پہلے لے چکے ہیں۔ ان کا استعمال یہ ہے: جس اکاؤنٹ کی رجسٹریشن آپ نے مکمل کی ہو اسے حذف کرنے کے بعد 30 دن تک اسی ای میل ایڈریس یا اسی Google یا Apple اکاؤنٹ سے، یا اس فون پر جہاں حذف شدہ اکاؤنٹ بنایا گیا تھا، نیا اکاؤنٹ نہیں بن سکتا؛ پابندی اور دوسرے اراکین کے بلاک نئے اکاؤنٹ پر بھی آپ کے ساتھ جاتے ہیں؛ غیر ادا شدہ سکوں سے بچا نہیں جا سکتا؛ اور ایک بار کے انعامات دو بار نہیں دیے جاتے۔ پابندی شدہ اکاؤنٹ کا ریکارڈ غیر معینہ مدت تک رکھا جاتا ہے، اور غیر ادا شدہ قرض اس کی ادائیگی تک؛ بلاک اس وقت تک رکھا جاتا ہے جب تک بلاک کرنے والے رکن کا اکاؤنٹ موجود ہو؛ باقی سب کچھ اکاؤنٹ بند ہونے کے ایک سال بعد حذف ہو جاتا ہے۔"
    },
    {
      "h": "آپ کے حقوق",
      "b": "آپ اپنے ڈیٹا کی کاپی مشین سے پڑھے جانے والے فارمیٹ میں (JSON — سیٹنگز اسے آپ کی ای میل پر بھیجتی ہیں) لے کر کسی دوسری سروس میں منتقل کر سکتے ہیں؛ غلط کو درست کر سکتے ہیں؛ اکاؤنٹ حذف کر سکتے ہیں؛ ہم سے اپنے ڈیٹا کے استعمال کو محدود کرنے کا کہہ سکتے ہیں، مثلاً جب کسی شکایت کا جائزہ ہو رہا ہو؛ ہمارے جائز مفاد پر مبنی کسی استعمال پر اعتراض کر سکتے ہیں؛ اور کسی بھی وقت رضامندی واپس لے سکتے ہیں، جس سے پہلے کیے گئے کام پر اثر نہیں پڑتا۔ چہرے کی تصدیق کی رضامندی واپس لینے کے لیے ہمیں لکھیں، ہم تصویر حذف کر کے نشان ہٹا دیں گے۔ مذہبی معلومات یہاں ہر پروفائل کا حصہ ہیں، اس لیے ان کی رضامندی واپس لینے کا مطلب اکاؤنٹ حذف کرنا ہے۔ آپ کے بارے میں قانونی یا اسی طرح کے اہم اثر والا کوئی فیصلہ صرف خودکار طریقے سے نہیں کیا جاتا۔ باقی ہر چیز کے لیے support@niyyahmarriage.com پر لکھیں — 30 دن میں جواب ملے گا۔ آپ کو ڈیٹا تحفظ اتھارٹی سے شکایت کا حق بھی ہے۔ ہماری مرکزی نگران اتھارٹی اسٹونیا کا ڈیٹا تحفظ انسپکٹوریٹ (Andmekaitse Inspektsioon، www.aki.ee) ہے؛ آپ اپنے ملک کی اتھارٹی سے بھی شکایت کر سکتے ہیں — یورپی یونین میں اپنی قومی اتھارٹی سے، بوسنیا و ہرزیگووینا میں ذاتی ڈیٹا کے تحفظ کی ایجنسی سے۔"
    },
    {
      "h": "حفاظت، نابالغ اور تبدیلیاں",
      "b": "ڈیٹا خفیہ کنکشنز کے ذریعے منتقل ہوتا ہے، ٹیم میں صرف وہی رسائی رکھتے ہیں جن کے کام کو اس کی ضرورت ہو، اور ٹیم کے اکاؤنٹس دو مرحلوں والے لاگ اِن سے محفوظ ہیں۔ کوئی نظام کامل نہیں، اس لیے اگر آپ کے اکاؤنٹ میں کچھ غلط لگے تو فوراً ہمیں بتائیں۔ Niyyah 18 سال سے کم عمر افراد کے لیے نہیں؛ ایسا اکاؤنٹ ملنے پر ہم اسے بند کر کے اس کا ڈیٹا حذف کر دیتے ہیں۔ اگر ہم اس پالیسی میں کوئی اہم تبدیلی کریں تو نافذ ہونے سے پہلے آپ کو ایپ میں بتائیں گے۔"
    },
    {
      "h": "مذہبی معلومات، یاد دہانیاں اور دیگر تفصیلات",
      "b": "مذہبی معلومات وہ سب کچھ ہے جو آپ ہمیں اپنے دین کے بارے میں بتاتے ہیں: دینی عمل، نماز، قرآن کی تلاوت، مسلک اور حجاب۔ ہم انہیں صرف آپ کی واضح رضامندی کے بعد محفوظ کرتے ہیں؛ تب تک آپ کے جوابات آپ کے فون پر رہتے ہیں۔ 21.10.2026 سے پہلے بنائے گئے اکاؤنٹس سے ایپ میں ایک بار یہ رضامندی مانگی جاتی ہے: جب تک وہ جواب نہ دیں، یہ جوابات کسی کو نہیں دکھائے جاتے اور نہ میچنگ یا فلٹرز میں استعمال ہوتے ہیں، اور اگر رضامندی نہ دی جائے تو ہم انہیں حذف کر دیتے ہیں۔ ہم یہ درج کرتے ہیں کہ آپ نے کب اور متن کے کس ورژن پر رضامندی دی۔ یاد دہانیاں (مثلاً نامکمل رجسٹریشن یا جلد ختم ہونے والا پیغام)، تہواروں کی مبارکباد اور آپ کے قریب نئے اراکین کی خبریں ہم پش نوٹیفکیشن یا ای میل سے صرف تب بھیجتے ہیں جب آپ عہد پر دستخط کرتے وقت اس کا نشان لگائیں — پرانے اکاؤنٹس اپنی موجودہ ترتیب برقرار رکھتے ہیں — اور آپ انہیں ترتیبات میں یا ہر ای میل کے لنک سے بند کر سکتے ہیں؛ آپ کے اکاؤنٹ سے متعلق اطلاعات ہم ہمیشہ بھیجتے ہیں۔ پش نوٹیفکیشنز Google Firebase اور Apple کی نوٹیفکیشن سروس (APNs) کے ذریعے جاتی ہیں؛ پیغام کی اطلاع میں بھیجنے والے کا نام اور پیغام کا آغاز دکھایا جاتا ہے، الا یہ کہ آپ محتاط اطلاعات آن کریں، اور جو اطلاع پہنچائی نہ جا سکے وہ ہمارے سرور پر زیادہ سے زیادہ 48 گھنٹے رہتی ہے۔ ہمارے سرورز سلامتی اور خرابیوں کے ازالے کے لیے ہر درخواست کا IP پتہ، وقت اور مطلوبہ پتہ، اور خرابیاں درج کرتے ہیں: رسائی کے ریکارڈ زیادہ سے زیادہ 14 دن، خرابی اور سروس کے ریکارڈ زیادہ سے زیادہ آٹھ ہفتے۔ دیگر مدتیں: عہد پر دستخط سے پہلے رکی ہوئی رجسٹریشن اپنی تصاویر سمیت آخری سرگرمی کے 30 دن بعد حذف ہو جاتی ہے؛ محرم کی شناختی دستاویزات جن کا 30 دن میں کوئی جائزہ نہ لے، حذف کر دی جاتی ہیں اور محرم سے انہیں دوبارہ بھیجنے کو کہا جاتا ہے؛ جس شخص کو آپ محرم کے طور پر مدعو کریں اور وہ رکن نہ ہو، اسے یہ بات خود دعوت نامے سے معلوم ہوتی ہے، اور اس کا نام اور پتہ دعوت مسترد، واپس یا ختم ہونے کے 90 دن بعد حذف کر دیا جاتا ہے؛ سپورٹ کی گفتگو: بند ہونے کے دو سال بعد؛ چہرے کی تصدیق کی کوششیں (نتیجہ اور تکنیکی ڈیٹا، تصویر نہیں): ایک سال؛ ٹیم کے فیصلوں اور محرم کی نگرانی کا ریکارڈ: تین سال؛ ادائیگیوں کا ریکارڈ اور کوائنز کا کھاتہ: جس سال بنے اس کے اختتام سے دس سال، جیسا کہ اکاؤنٹنگ کا قانون تقاضا کرتا ہے۔ جب آپ اپنا اکاؤنٹ حذف کرتے ہیں تو ہم RevenueCat سے بھی آپ کے اکاؤنٹ کے تحت محفوظ خریداری کی تاریخ حذف کرنے کو کہتے ہیں، اور 35 دن تک صرف حذف شدہ اکاؤنٹ کی شناخت، بغیر کسی اور ڈیٹا کے، رکھتے ہیں تاکہ بحال کیا گیا بیک اپ اکاؤنٹ کو واپس نہ لائے۔ اپنے ڈیٹا کی کاپی آپ 24 گھنٹے کے لیے کارآمد ایک بار کے لنک سے بھی ڈاؤن لوڈ کر سکتے ہیں؛ اس میں وہ پیغامات بھی شامل ہیں جو دوسروں نے آپ کو بھیجے اور جو آپ ایپ میں اب بھی دیکھتے ہیں، ان کی پروفائل کے بغیر۔"
    }
  ],
  "ms": [
    {
      "h": "Siapa yang bertanggungjawab",
      "b": "Niyyah dikendalikan oleh Puzzles IT OÜ, sebuah syarikat sendirian berhad yang didaftarkan di Estonia (nombor pendaftaran 16552842; alamat: Sepapaja tn 6, 15551 Tallinn, Estonia), iaitu pengawal data peribadi anda. Syarikat ini diwakili oleh ahli lembaga pengurusannya, Nermedin Džeković. Untuk apa-apa dalam dasar ini, tulis kepada support@niyyahmarriage.com."
    },
    {
      "h": "Apa yang kami kumpul",
      "b": "Apa yang anda berikan: nama, tarikh lahir, jantina, alamat e-mel, bandar, foto dan jawapan anda pada profil (contohnya amalan agama, status perkahwinan, anak dan rancangan perkahwinan). Apa yang terhasil semasa anda menggunakan aplikasi: suka, profil yang dilangkau, padanan, mesej dan mesej suara, hantaran, komen dan cerita komuniti, pembelian syiling, laporan yang anda buat, profil dan cerita yang anda lihat, dan hari-hari anda membuka aplikasi. Data teknikal: jenis peranti, versi aplikasi, zon waktu, token pemberitahuan, pengenal akaun Google atau Apple anda jika anda log masuk dengannya, dan satu pengenal telefon anda. Aplikasi menyimpan pengenal itu dalam storan selamat telefon, jadi ia kekal sama walaupun aplikasi dipasang semula; pelayan kami hanya menyimpan cap jarinya — cincangan sehala yang tidak boleh dikembalikan kepada pengenal asal. Untuk mengehadkan bilangan akaun baharu dari satu rangkaian, kami menyimpan cap jari alamat IP anda selama 24 jam; laporan yang anda buat juga menyimpan satu, supaya seorang tidak boleh menyamar sebagai beberapa pelapor. Jika anda log masuk dengan Apple, kami menyimpan token yang dikeluarkan Apple untuk akaun anda dalam bentuk tersulit, supaya kami boleh memutuskan sambungan dengan Apple ID anda apabila anda memadam akaun. Akaun pasukan juga mempunyai rahsia log masuk dua langkah, disimpan tersulit. Jika anda menyertai senarai menunggu di laman web kami, kami hanya menyimpan alamat e-mel dan bahasa anda: untuk memberitahu anda apabila Niyyah dilancarkan dan memberi hadiah sambutan jika anda mendaftar dengan alamat yang sama. Kami memadamnya selewat-lewatnya 12 bulan selepas e-mel pelancaran. Selepas hadiah diberikan, alamat itu sendiri dipadam; hanya cap jari sehalanya dan domainnya yang tinggal, selama dua tahun, supaya hadiah yang sama tidak boleh dituntut dua kali."
    },
    {
      "h": "Mengapa kami menggunakannya, dan atas asas apa",
      "b": "Untuk menjalankan perkhidmatan yang anda daftari — menunjukkan profil yang sesuai, menghantar mesej anda, memproses pembelian dan menjawab apabila anda menulis kepada kami — kerana perjanjian kami dengan anda memerlukannya. Untuk memastikan komuniti selamat — moderasi, semakan automatik yang diterangkan di bawah, dan cap jari peranti, alamat IP dan alamat e-mel yang menghalang orang yang disekat dan akaun pendua daripada kembali — kerana itu kepentingan sah kami, dan kepentingan setiap ahli, terhadap perkhidmatan yang selamat. Maklumat agama anda, foto semakan wajah dan dokumen pengenalan mahram ialah kategori data khas, dan kami memprosesnya hanya dengan persetujuan nyata: untuk maklumat agama anda memberikannya apabila menandatangani ikrar di akhir pendaftaran, dan untuk semakan wajah dan dokumen dengan memilih untuk menghantarnya. Rekod bayaran disimpan kerana undang-undang perakaunan mewajibkannya. Di laman web kami, Meta mengukur lawatan hanya dengan persetujuan anda. Kami tidak membina profil pengiklanan daripada data anda, dan tidak menggunakan mesej anda untuk menyasarkan apa-apa kepada anda."
    },
    {
      "h": "Semakan automatik",
      "b": "Sesetengah teks disemak secara automatik sebelum disimpan. Nombor telefon, nama pengguna di platform lain atau pautan ditolak dalam nama anda, bio anda dan apa sahaja yang dibaca ahli lain di luar sembang — komen, mesej perkenalan, kapsyen cerita, balasan — dan aplikasi memberitahu anda sebabnya. Dalam sembang, maklumat sebegini dibenarkan, tetapi seorang moderator dimaklumkan; ia hanya ditolak selagi seorang wanita telah meminta mahram dan belum ada mahram yang meluluskan perbualan itu. Mesej yang mengandungi ungkapan biasa dalam penipuan, seperti meminta wang, kripto atau kad hadiah, hanya ditandakan untuk moderator dan tidak pernah disekat. Foto tidak disemak secara automatik: hantaran komuniti dibaca oleh moderator sebelum dipaparkan, dan cerita daripada akaun baharu atau akaun yang belum lulus semakan wajah menunggu moderator sebelum orang lain melihatnya. Tiada satu pun semakan ini membuat keputusan tentang akaun anda: amaran, pembuangan, penggantungan atau sekatan sentiasa diputuskan oleh manusia."
    },
    {
      "h": "Foto dan semakan wajah",
      "b": "Foto profil dipaparkan sebaik sahaja anda menambahnya; moderator membuang foto yang dilaporkan dan melanggar peraturan. Untuk semakan wajah anda mengambil foto langsung, yang dibandingkan dengan foto profil anda. Perbandingan ini automatik: Amazon Web Services (Amazon Rekognition, di Frankfurt, EU) bagi pihak kami menyemak bahawa foto menunjukkan satu wajah, menganggarkan julat umur dan mengukur sejauh mana ia menyerupai foto profil anda. Padanan yang jelas diluluskan serta-merta; apa-apa yang tidak jelas — persamaan yang lebih rendah, anggaran umur di bawah 18 tahun atau ralat teknikal — diputuskan oleh seorang daripada Niyyah. Foto tanpa wajah yang boleh dikenali ditolak, dan anda boleh mengambilnya semula dengan mudah. Amazon tidak menyimpan foto tersebut dan tidak menggunakannya untuk menambah baik perkhidmatannya. Foto langsung tidak pernah diterbitkan. Ia disimpan tersulit dan hanya selagi akaun anda membawa lencana disahkan, supaya semakan kemudian mempunyai bahan perbandingan; ia dipadam apabila semakan ditolak, apabila lencana dibuang atau apabila anda memadam akaun. Oleh kerana wajah ialah data sensitif, semakan ini pilihan anda dan berasaskan persetujuan anda."
    },
    {
      "h": "Dokumen pengenalan mahram",
      "b": "Mahram yang ingin membaca perbualan mengesahkan identitinya, dengan persetujuan nyatanya, menggunakan dokumen pengenalan dan swafoto. Ia disimpan tersulit, hanya dilihat oleh orang yang menyemaknya, dan dipadam sebaik sahaja keputusan dibuat."
    },
    {
      "h": "Lokasi",
      "b": "Kami menggunakan lokasi anda hanya untuk menentukan bandar anda. Jika anda membenarkan akses lokasi, perkhidmatan peta telefon anda sendiri (milik Apple pada iPhone, milik Google pada Android) menukar koordinat kepada nama tempat, dan pelayan kami mencari bandar serta pusatnya melalui Nominatim, perkhidmatan OpenStreetMap Foundation, dengan hanya menghantar koordinat atau nama bandar — tiada apa-apa yang mengenal pasti anda. Jika anda lebih suka menaip bandar anda, aplikasi mencarinya melalui carian tempat Open-Meteo, yang hanya menerima apa yang anda taip dan, seperti mana-mana laman web, alamat IP telefon anda. Kedudukan tepat anda tidak disimpan: ia dikurangkan kepada pusat bandar anda sebelum disimpan, dan tiada apa yang dilihat ahli lain lebih tepat daripada itu. Anda boleh menarik balik kebenaran lokasi dalam tetapan telefon."
    },
    {
      "h": "Siapa melihat apa",
      "b": "Ahli lain melihat profil anda seperti yang anda tetapkan. Mahram yang anda luluskan melihat perbualan sejak saat kelulusan. Moderator melihat kandungan yang dilaporkan, tanda automatik yang diterangkan di atas, dan apa yang perlu untuk menilainya. Apabila perbualan dilaporkan, 20 mesej terakhirnya — termasuk mesej suara dan mesej yang baru ditarik balik — disalin ke dalam laporan; apabila mesej, profil, hantaran atau balasan dilaporkan, salinannya disimpan bersama laporan, supaya memadamnya tidak menghapuskan bukti. Mesej yang anda tarik balik hilang serta-merta bagi orang lain, tetapi kekal di pelayan sehingga tujuh hari supaya masih boleh dilaporkan, kemudian dipadam. Tiada sesiapa di Niyyah membaca perbualan peribadi secara rutin."
    },
    {
      "h": "Siapa yang memproses data untuk kami",
      "b": "Contabo (pelayan tempat aplikasi berjalan), Cloudflare (perlindungan rangkaian), Google Firebase (pemberitahuan tolak), Apple dan Google (log masuk dan pembelian dalam aplikasi), RevenueCat (pemprosesan pembelian dalam aplikasi), Resend (penghantaran e-mel), Amazon Web Services (semakan wajah automatik dan semakan foto, di EU), Open-Meteo (carian bandar) dan Nominatim milik OpenStreetMap Foundation (menukar bandar atau koordinat kepada pusat bandar). Setiap satu hanya menerima apa yang diperlukan untuk bahagiannya. Sandaran pelayan tersulit disimpan dalam Contabo Object Storage di EU. Kami tidak pernah melihat butiran kad anda — bayaran melalui App Store atau Google Play. Di laman web kami, Meta (Facebook) mengukur lawatan hanya jika anda bersetuju. Kami tidak menjual data peribadi kepada sesiapa."
    },
    {
      "h": "Pemindahan ke luar Eropah",
      "b": "Sesetengah syarikat ini berpangkalan di Amerika Syarikat atau mungkin memproses data di sana: Cloudflare, Google, Apple, Amazon, RevenueCat, Resend dan Meta. Apabila data peribadi keluar dari EU/EEA atau Bosnia dan Herzegovina, ia dilindungi oleh Rangka Kerja Privasi Data EU–AS (Data Privacy Framework) bagi syarikat yang diperakui di bawahnya, dan selainnya oleh klausa kontrak standard Suruhanjaya Eropah. Tulis kepada kami jika anda ingin tahu perlindungan mana yang terpakai bagi syarikat mana."
    },
    {
      "h": "Berapa lama kami simpan",
      "b": "Mesej sembang dipadam tiga hari selepas dihantar, kecuali kamu berdua memilih untuk memperkenalkan keluarga, atau mesej itu dilaporkan (maka sehingga 30 hari selepas laporan diputuskan). Mesej yang ditarik balik: sehingga tujuh hari. Mesej perkenalan tanpa balasan: 30 hari. Balasan cerita dan siapa yang melihatnya: 30 hari selepas cerita tamat; foto cerita: tujuh hari selepas cerita tamat. Lawatan profil dan pemberitahuan yang dibaca: 180 hari; pemberitahuan yang belum dibaca: 90 hari. Hari-hari anda membuka aplikasi: 120 hari. Sesi log masuk yang tidak digunakan selama 180 hari ditamatkan dan dipadam. Cap jari alamat IP untuk mengehadkan akaun baharu: 24 jam. Pembelian syiling yang belum dapat dikaitkan dengan akaun: satu tahun. Laporan kekal sehingga moderator memutuskannya; kandungannya, bersama cap jari alamat IP pelapor, dipadam 90 hari selepas ditolak dan dua tahun selepas diputuskan, dan tanda automatik yang ditolak dipadam sepenuhnya selepas 90 hari. Sandaran pelayan: sehingga 30 hari."
    },
    {
      "h": "Apabila anda memadam akaun",
      "b": "Profil, foto, padanan dan mesej anda dipadam. Beberapa perkara disimpan, tanpa nama anda: rekod bayaran dan syiling, untuk perakaunan; dan cap jari sehala alamat e-mel anda, log masuk Google atau Apple anda dan telefon yang anda gunakan, bersama sama ada akaun itu disekat dan sebabnya, ahli yang telah menyekat anda, sebarang hutang syiling yang belum dibayar, dan ganjaran sekali sahaja yang telah anda terima. Ia digunakan untuk ini: selama 30 hari selepas anda memadam akaun yang pendaftarannya telah anda lengkapkan, akaun baharu tidak boleh dibuat dengan alamat e-mel yang sama atau akaun Google atau Apple yang sama, atau pada telefon tempat akaun yang dipadam itu dibuat; sekatan dan blok ahli lain mengikuti anda ke akaun baharu; syiling yang belum dibayar tidak boleh dielakkan; dan ganjaran sekali sahaja tidak diberikan dua kali. Rekod akaun yang disekat disimpan tanpa had masa, dan hutang yang belum dibayar sehingga dijelaskan; blok disimpan selagi ahli yang membuatnya masih mempunyai akaun; selebihnya dipadam satu tahun selepas akaun ditutup."
    },
    {
      "h": "Hak anda",
      "b": "Anda boleh mendapatkan salinan data anda dalam format yang boleh dibaca mesin (JSON — Tetapan menghantarnya ke e-mel anda) dan membawanya ke perkhidmatan lain; membetulkan yang salah; memadam akaun; meminta kami mengehadkan penggunaan data anda, contohnya semasa aduan disemak; membantah penggunaan yang berasaskan kepentingan sah kami; dan menarik balik persetujuan pada bila-bila masa, tanpa menjejaskan apa yang telah dilakukan sebelumnya. Untuk menarik balik persetujuan semakan wajah, tulis kepada kami dan kami akan memadam foto serta membuang lencana. Maklumat agama ialah sebahagian daripada setiap profil di sini, jadi menarik balik persetujuan untuknya bermakna memadam akaun. Tiada keputusan yang membawa kesan undang-undang atau kesan ketara yang serupa dibuat tentang anda semata-mata secara automatik. Untuk perkara lain, tulis kepada support@niyyahmarriage.com — jawapan dalam 30 hari. Anda juga berhak membuat aduan kepada pihak berkuasa perlindungan data. Pihak berkuasa penyelia utama kami ialah Inspektorat Perlindungan Data Estonia (Andmekaitse Inspektsioon, www.aki.ee); anda juga boleh membuat aduan kepada pihak berkuasa di negara anda sendiri — di EU kepada pihak berkuasa kebangsaan anda, di Bosnia dan Herzegovina kepada Agensi Perlindungan Data Peribadi."
    },
    {
      "h": "Keselamatan, bawah umur dan perubahan",
      "b": "Data bergerak melalui sambungan tersulit, dalam pasukan hanya mereka yang memerlukannya untuk kerja mempunyai akses, dan akaun pasukan dilindungi dengan log masuk dua langkah. Tiada sistem yang sempurna, jadi beritahu kami segera jika ada yang kelihatan tidak kena dengan akaun anda. Niyyah bukan untuk sesiapa di bawah 18 tahun; jika kami menemui akaun sebegitu, kami menutupnya dan memadam datanya. Jika kami mengubah dasar ini dengan cara yang penting, kami akan memberitahu anda dalam aplikasi sebelum ia berkuat kuasa."
    },
    {
      "h": "Maklumat agama, peringatan dan butiran lain",
      "b": "Maklumat agama ialah semua yang anda beritahu kami tentang iman anda: amalan agama, solat, bacaan al-Quran, mazhab dan hijab. Kami menyimpannya hanya selepas anda memberi persetujuan nyata; sehingga itu jawapan anda kekal di telefon anda. Akaun yang dibuat sebelum 21.10.2026 diminta persetujuan ini sekali dalam aplikasi: sehingga mereka menjawab, jawapan tersebut tidak ditunjukkan kepada sesiapa dan tidak digunakan untuk padanan atau penapis, dan jika persetujuan tidak diberi, kami memadamkannya. Kami merekodkan bila anda bersetuju dan versi teks yang mana. Peringatan (contohnya pendaftaran yang belum selesai atau mesej yang hampir tamat tempoh), ucapan hari raya dan berita tentang ahli baharu berhampiran anda dihantar melalui pemberitahuan push atau e-mel hanya jika anda menandakannya semasa menandatangani komitmen — akaun lama mengekalkan tetapan sedia ada — dan anda boleh mematikannya dalam Tetapan atau melalui pautan dalam setiap e-mel; notis tentang akaun anda sentiasa dihantar. Pemberitahuan push dihantar melalui Google Firebase dan perkhidmatan pemberitahuan Apple (APNs); pemberitahuan mesej menunjukkan nama pengirim dan permulaan mesej kecuali anda menghidupkan pemberitahuan berhemah, dan pemberitahuan yang tidak dapat dihantar disimpan di pelayan kami paling lama 48 jam. Pelayan kami merekodkan alamat IP, masa dan alamat yang diminta bagi setiap permintaan, serta ralat, untuk keselamatan dan penyelesaian masalah: log akses sehingga 14 hari, log ralat dan perkhidmatan sehingga lapan minggu. Tempoh lain: pendaftaran yang berhenti sebelum komitmen ditandatangani dipadam, bersama fotonya, 30 hari selepas aktiviti terakhir; dokumen pengenalan mahram yang tidak disemak sesiapa dalam 30 hari dipadam dan mahram diminta menghantarnya semula; orang yang anda jemput sebagai mahram dan bukan ahli dimaklumkan tentang perkara ini dalam jemputan itu sendiri, dan nama serta alamatnya dipadam 90 hari selepas jemputan ditolak, ditarik balik atau tamat tempoh; perbualan dengan sokongan: dua tahun selepas ditutup; percubaan semakan wajah (keputusan dan data teknikal, tanpa foto): setahun; rekod keputusan pasukan dan pengawasan mahram: tiga tahun; rekod pembayaran dan lejar koin: sepuluh tahun dari akhir tahun ia dibuat, seperti yang dikehendaki undang-undang perakaunan. Apabila anda memadam akaun, kami juga meminta RevenueCat memadam sejarah pembelian yang disimpan di bawah akaun anda, dan selama 35 hari kami hanya menyimpan pengecam akaun yang dipadam, tanpa data lain, supaya sandaran yang dipulihkan tidak mengembalikan akaun itu. Salinan data anda juga boleh dimuat turun melalui pautan sekali guna yang sah selama 24 jam; ia turut mengandungi mesej yang dihantar orang lain kepada anda dan yang masih anda lihat dalam aplikasi, tanpa profil mereka."
    }
  ],
  "fr": [
    {
      "h": "Qui est responsable",
      "b": "Niyyah est géré par Puzzles IT OÜ, société à responsabilité limitée immatriculée en Estonie (code registre 16552842 ; adresse : Sepapaja tn 6, 15551 Tallinn, Estonie), responsable du traitement de tes données personnelles. La société est représentée par son membre du directoire, Nermedin Džeković. Pour toute question sur cette politique, écris à support@niyyahmarriage.com."
    },
    {
      "h": "Ce que nous collectons",
      "b": "Ce que tu nous donnes : ton nom, ta date de naissance, ton genre, ton adresse e-mail, ta ville, tes photos et tes réponses sur le profil (par exemple pratique religieuse, situation matrimoniale, enfants et projets de mariage). Ce qui naît de l’utilisation de l’app : les likes, les profils passés, les matchs, les messages et messages vocaux, les publications, commentaires et stories de la communauté, les achats de pièces, les signalements que tu fais, les profils et stories que tu as consultés, et les jours où tu as ouvert l’app. Données techniques : type d’appareil, version de l’app, fuseau horaire, un jeton de notification, l’identifiant de ton compte Google ou Apple si tu t’en sers pour te connecter, et un identifiant de ton téléphone. L’app conserve cet identifiant dans l’espace sécurisé du téléphone, si bien qu’il reste le même si tu réinstalles l’app ; notre serveur n’en garde qu’une empreinte — un hachage à sens unique dont on ne peut pas retrouver l’identifiant. Pour limiter le nombre de nouveaux comptes ouverts depuis un même réseau, nous gardons une empreinte de ton adresse IP pendant 24 heures ; un signalement que tu fais en garde une aussi, pour qu’une seule personne ne puisse pas se faire passer pour plusieurs. Si tu te connectes avec Apple, nous conservons, chiffré, le jeton qu’Apple émet pour ton compte, afin de pouvoir couper le lien avec ton identifiant Apple quand tu supprimes ton compte. Les comptes de l’équipe ont aussi un secret de connexion en deux étapes, conservé chiffré. Si tu t’inscris sur la liste d’attente de notre site, nous ne gardons que ton adresse e-mail et ta langue : pour te dire quand Niyyah sera lancé et t’offrir un cadeau de bienvenue si tu t’inscris avec la même adresse. Nous la supprimons au plus tard 12 mois après l’e-mail de lancement. Une fois le cadeau remis, l’adresse elle-même est supprimée ; seuls son empreinte à sens unique et son domaine restent, deux ans, pour que le même cadeau ne puisse pas être obtenu deux fois."
    },
    {
      "h": "Pourquoi nous les utilisons, et sur quelle base",
      "b": "Pour faire fonctionner le service auquel tu t’es inscrit(e) — te montrer des profils adaptés, acheminer tes messages, traiter les achats et te répondre quand tu nous écris —, parce que notre contrat avec toi l’exige. Pour garder la communauté sûre — la modération, les vérifications automatiques décrites ci-dessous et les empreintes d’appareils, d’adresses IP et d’adresses e-mail qui tiennent à l’écart les personnes bannies et les comptes en double —, parce que c’est notre intérêt légitime, et celui de chaque membre, d’avoir un service sûr. Tes informations religieuses, la photo de la vérification du visage et les pièces d’identité d’un mahram sont des catégories particulières de données, et nous ne les traitons qu’avec un consentement explicite : pour les informations religieuses, tu le donnes en signant l’engagement à la fin de l’inscription ; pour la vérification du visage et les pièces d’identité, en choisissant de les envoyer. Les données de paiement sont conservées parce que la loi comptable l’impose. Sur notre site, Meta mesure les visites uniquement avec ton consentement. Nous ne construisons pas de profils publicitaires à partir de tes données et n’utilisons pas tes messages pour te cibler."
    },
    {
      "h": "Vérifications automatiques",
      "b": "Certains textes sont vérifiés automatiquement avant d’être enregistrés. Un numéro de téléphone, un nom d’utilisateur sur une autre plateforme ou un lien sont refusés dans ton nom, ta bio et tout ce que les autres membres lisent en dehors d’une conversation — commentaires, messages d’introduction, légendes de stories, réponses —, et l’app te dit pourquoi. Dans une conversation, ces informations passent, mais un modérateur en est averti ; elles ne sont refusées que tant qu’une femme a demandé un mahram et qu’aucun mahram n’a encore approuvé la conversation. Les messages contenant des formules typiques des arnaques, comme des demandes d’argent, de cryptomonnaie ou de cartes cadeaux, sont seulement signalés à un modérateur et jamais bloqués. Les photos ne sont pas vérifiées automatiquement : les publications de la communauté sont lues par un modérateur avant de paraître, et les stories des comptes récents ou n’ayant pas passé la vérification du visage attendent un modérateur avant que d’autres les voient. Aucune de ces vérifications ne décide quoi que ce soit au sujet de ton compte : un avertissement, une suppression, une suspension ou un bannissement est toujours décidé par une personne."
    },
    {
      "h": "Photos et vérification du visage",
      "b": "Les photos de profil apparaissent dès que tu les ajoutes ; les modérateurs retirent les photos signalées qui enfreignent les règles. Pour la vérification du visage, tu prends une photo en direct, qui est comparée à tes photos de profil. La comparaison est automatique : Amazon Web Services (Amazon Rekognition, à Francfort, UE) vérifie pour notre compte que la photo montre un seul visage, estime la tranche d’âge et mesure à quel point elle ressemble à tes photos de profil. Une correspondance nette est validée tout de suite ; tout ce qui n’est pas clair — une ressemblance plus faible, un âge estimé de moins de 18 ans ou une erreur technique — est tranché par une personne de Niyyah. Une photo sans visage reconnaissable est refusée, et tu peux simplement la reprendre. Amazon ne conserve pas les photos et ne les utilise pas pour améliorer ses services. La photo en direct n’est jamais publiée. Elle est stockée chiffrée et conservée seulement tant que ton compte porte le badge vérifié, pour qu’une vérification ultérieure ait un point de comparaison ; elle est supprimée quand la vérification est refusée, quand le badge est retiré ou quand tu supprimes ton compte. Le visage étant une donnée sensible, la vérification est ton choix et repose sur ton consentement."
    },
    {
      "h": "Pièces d’identité du mahram",
      "b": "Un mahram qui veut lire une conversation confirme son identité, avec son consentement explicite, par une pièce d’identité et un selfie. Elles sont stockées chiffrées, vues uniquement par la personne qui les examine, et supprimées dès que la décision est prise."
    },
    {
      "h": "Localisation",
      "b": "Nous utilisons ta localisation uniquement pour déterminer ta ville. Si tu autorises l’accès à la localisation, le service de cartes de ton téléphone (celui d’Apple sur iPhone, celui de Google sur Android) transforme les coordonnées en nom de lieu, et notre serveur trouve la ville et son centre avec Nominatim, le service de la Fondation OpenStreetMap, auquel il n’envoie que les coordonnées ou le nom de la ville — rien qui t’identifie. Si tu préfères saisir ta ville, l’app la cherche avec la recherche de lieux d’Open-Meteo, qui ne reçoit que ce que tu tapes et, comme tout site web, l’adresse IP de ton téléphone. Ta position exacte n’est pas conservée : elle est ramenée au centre de ta ville avant d’être enregistrée, et rien de ce que voient les autres membres n’est plus précis. Tu peux retirer l’autorisation de localisation dans les réglages du téléphone."
    },
    {
      "h": "Qui voit quoi",
      "b": "Les autres membres voient ton profil tel que tu l’as configuré. Un mahram que tu approuves voit la conversation à partir de l’approbation. Les modérateurs voient le contenu signalé, les signalements automatiques décrits plus haut et ce qui est nécessaire pour en juger. Quand une conversation est signalée, ses 20 derniers messages — y compris les vocaux et les messages retirés récemment — sont copiés dans le signalement ; quand un message, un profil, une publication ou une réponse est signalé, une copie en est gardée avec le signalement, pour que la suppression n’efface pas la preuve. Un message que tu retires disparaît aussitôt pour l’autre personne, mais reste sur le serveur jusqu’à sept jours pour pouvoir encore être signalé, puis il est supprimé. Personne chez Niyyah ne lit les conversations privées par routine."
    },
    {
      "h": "Qui traite les données pour nous",
      "b": "Contabo (les serveurs de l’app), Cloudflare (protection du réseau), Google Firebase (notifications push), Apple et Google (connexion et achats intégrés), RevenueCat (traitement des achats intégrés), Resend (envoi d’e-mails), Amazon Web Services (vérification automatique du visage et contrôle des photos, dans l’UE), Open-Meteo (recherche de ville) et Nominatim de la Fondation OpenStreetMap (transformer une ville ou des coordonnées en centre-ville). Chacun ne reçoit que ce dont il a besoin pour sa part. Les sauvegardes chiffrées du serveur sont conservées dans Contabo Object Storage, dans l’UE. Nous ne voyons jamais tes données de carte — les paiements passent par l’App Store ou Google Play. Sur notre site, Meta (Facebook) ne mesure les visites que si tu l’acceptes. Nous ne vendons de données personnelles à personne."
    },
    {
      "h": "Transferts hors d’Europe",
      "b": "Certaines de ces entreprises sont établies aux États-Unis ou peuvent y traiter des données : Cloudflare, Google, Apple, Amazon, RevenueCat, Resend et Meta. Quand des données personnelles quittent l’UE/l’EEE ou la Bosnie-Herzégovine, elles sont protégées par le cadre de protection des données UE–États-Unis (Data Privacy Framework) pour les entreprises certifiées, et sinon par les clauses contractuelles types de la Commission européenne. Écris-nous si tu veux savoir quelle garantie s’applique à quelle entreprise."
    },
    {
      "h": "Durée de conservation",
      "b": "Les messages sont supprimés trois jours après l’envoi, sauf si vous avez tous deux choisi de présenter vos familles, ou si le message a été signalé (alors jusqu’à 30 jours après la décision). Un message retiré : jusqu’à sept jours. Messages d’introduction sans réponse : 30 jours. Réponses aux stories et qui les a vues : 30 jours après la fin de la story ; photos des stories : sept jours après la fin de la story. Vues de profil et notifications lues : 180 jours ; notifications non lues : 90 jours. Les jours où tu as ouvert l’app : 120 jours. Une session de connexion inutilisée pendant 180 jours est fermée et supprimée. Empreintes d’adresses IP servant à limiter les nouveaux comptes : 24 heures. Achats de pièces pas encore rattachés à un compte : un an. Les signalements restent jusqu’à ce qu’un modérateur tranche ; leur contenu, avec l’empreinte de l’adresse IP de la personne qui a signalé, est effacé 90 jours après un rejet et deux ans après une décision, et les signalements automatiques rejetés sont entièrement supprimés au bout de 90 jours. Sauvegardes du serveur : jusqu’à 30 jours."
    },
    {
      "h": "Quand tu supprimes ton compte",
      "b": "Ton profil, tes photos, tes matchs et tes messages sont supprimés. Quelques éléments sont conservés, sans ton nom : les données de paiement et de pièces, pour la comptabilité ; et des empreintes à sens unique de ton adresse e-mail, de ta connexion Google ou Apple et des téléphones que tu as utilisés, avec l’indication que le compte était banni ou non et pourquoi, les membres qui t’avaient bloqué(e), une éventuelle dette de pièces impayée et les récompenses uniques déjà reçues. Elles servent à ceci : pendant 30 jours après la suppression d’un compte dont tu avais terminé l’inscription, aucun nouveau compte ne peut être créé avec la même adresse e-mail ou le même compte Google ou Apple, ni sur le téléphone où le compte supprimé avait été créé ; un bannissement et les blocages des autres membres te suivent sur un nouveau compte ; les pièces impayées ne peuvent pas être esquivées ; et les récompenses uniques ne sont pas données deux fois. La trace d’un compte banni est conservée sans limite de durée, une dette impayée jusqu’à son règlement ; un blocage tant que le membre qui l’a fait a un compte ; tout le reste est supprimé un an après la fermeture du compte."
    },
    {
      "h": "Tes droits",
      "b": "Tu peux obtenir une copie de tes données dans un format lisible par machine (JSON — les Réglages l’envoient à ton e-mail) et l’emporter vers un autre service ; corriger ce qui est faux ; supprimer ton compte ; nous demander de limiter l’utilisation de tes données, par exemple pendant l’examen d’une réclamation ; t’opposer à un usage fondé sur notre intérêt légitime ; et retirer un consentement à tout moment, sans effet sur ce qui a été fait avant. Pour retirer ton consentement à la vérification du visage, écris-nous : nous supprimerons la photo et retirerons le badge. Les informations religieuses font partie de chaque profil ici, donc retirer ce consentement signifie supprimer le compte. Aucune décision produisant des effets juridiques ou d’effet similairement important n’est prise à ton sujet sur la seule base d’un traitement automatisé. Pour le reste, écris à support@niyyahmarriage.com — réponse sous 30 jours. Tu peux aussi porter plainte auprès d’une autorité de protection des données. Notre autorité de contrôle chef de file est l’Inspection estonienne de la protection des données (Andmekaitse Inspektsioon, www.aki.ee) ; tu peux aussi t’adresser à l’autorité de ton propre pays — dans l’UE ton autorité nationale, en Bosnie-Herzégovine l’Agence pour la protection des données personnelles."
    },
    {
      "h": "Sécurité, mineurs et modifications",
      "b": "Les données circulent par des connexions chiffrées, dans l’équipe seuls ceux dont le travail l’exige y ont accès, et les comptes de l’équipe sont protégés par une connexion en deux étapes. Aucun système n’est parfait : préviens-nous tout de suite si quelque chose cloche avec ton compte. Niyyah n’est pas destiné aux moins de 18 ans ; nous fermons de tels comptes et supprimons leurs données. Si nous modifions cette politique de façon importante, nous te le dirons dans l’app avant qu’elle s’applique."
    },
    {
      "h": "Informations religieuses, rappels et autres précisions",
      "b": "Les informations religieuses sont tout ce que tu nous dis de ta foi : pratique religieuse, prière, lecture du Coran, madhhab et hijab. Nous ne les enregistrons qu’après ton consentement explicite ; jusque-là, tes réponses restent sur ton téléphone. Les comptes créés avant le 21.10.2026 se voient demander ce consentement une fois dans l’application : tant qu’ils n’ont pas répondu, ces réponses ne sont montrées à personne et ne servent ni aux correspondances ni aux filtres, et si le consentement n’est pas donné, nous les supprimons. Nous enregistrons la date de ton consentement et la version du texte. Les rappels (par exemple une inscription inachevée ou un message sur le point d’expirer), les vœux pour les fêtes et les nouvelles de nouveaux membres près de chez toi sont envoyés par notification push ou par e-mail seulement si tu coches la case prévue en signant l’engagement — les comptes plus anciens gardent leur réglage actuel — et tu peux les désactiver dans les Réglages ou via le lien de chaque e-mail ; les avis concernant ton compte sont toujours envoyés. Les notifications push passent par Google Firebase et le service de notifications d’Apple (APNs) ; une notification de message affiche le nom de l’expéditeur et le début du message, sauf si tu actives les notifications discrètes, et une notification qui n’a pas pu être remise reste au plus 48 heures sur notre serveur. Nos serveurs enregistrent l’adresse IP, l’heure et l’adresse demandée de chaque requête, ainsi que les erreurs, pour la sécurité et le dépannage : journaux d’accès jusqu’à 14 jours, journaux d’erreurs et de service jusqu’à huit semaines. Autres durées : une inscription arrêtée avant la signature de l’engagement est supprimée, avec ses photos, 30 jours après la dernière activité ; les pièces d’identité d’un mahram que personne n’examine dans les 30 jours sont supprimées et le mahram est invité à les renvoyer ; une personne que tu invites comme mahram et qui n’est pas membre en est informée dans l’invitation elle-même, et son nom et son adresse sont supprimés 90 jours après le refus, le retrait ou l’expiration de l’invitation ; conversations avec l’assistance : deux ans après leur clôture ; tentatives de vérification du visage (résultat et données techniques, sans photo) : un an ; traces des décisions de l’équipe et de la supervision des mahrams : trois ans ; données de paiement et registre des coins : dix ans à compter de la fin de l’année où ils ont été créés, comme l’exige le droit comptable. Quand tu supprimes ton compte, nous demandons aussi à RevenueCat de supprimer l’historique d’achats lié à ton compte, et nous ne gardons pendant 35 jours que l’identifiant du compte supprimé, sans aucune autre donnée, pour qu’une sauvegarde restaurée ne puisse pas le faire revenir. Tu peux aussi télécharger la copie de tes données via un lien à usage unique valable 24 heures ; elle contient aussi les messages que d’autres t’ont envoyés et que tu vois encore dans l’application, sans leur profil."
    }
  ]
}

export const terms: Record<string, LegalSection[]> = {
  "en": [
    {
      "h": "Who we are, and what this covers",
      "b": "Niyyah is a matchmaking service for Muslims seeking marriage, provided by Puzzles IT OÜ, a company registered in Estonia (registry code 16552842, VAT number EE102585232; Sepapaja tn 6, 15551 Tallinn, Estonia). These terms are the agreement between you and Puzzles IT OÜ (\"we\", \"us\") for your use of the Niyyah app. By creating an account you accept them. If you do not accept them, please do not use the service. If you downloaded the app from the App Store, Apple's standard licence agreement for apps (EULA) also applies to it."
    },
    {
      "h": "Who may use Niyyah",
      "b": "You must be at least 18 years old and legally free to marry. One person, one account. You may not use Niyyah on behalf of somebody else, and you may not create a new account to get around a suspension or ban. We may ask you to confirm your age or identity at any time."
    },
    {
      "h": "Your account and your profile",
      "b": "The information on your profile must be true, and your photos must be recent pictures of you. Keep your login details to yourself — anything done through your account is treated as done by you. Tell us straight away at support@niyyahmarriage.com if you think someone else has got into it."
    },
    {
      "h": "How we expect people to behave",
      "b": "Treat everyone here as you would want your own family treated. No harassment, no insults, no pressure, no sexual content, and no photos that would not be appropriate in front of that person's family. Do not use Niyyah to advertise, to recruit, to solicit money, or to pursue anything other than marriage. We remove content and accounts that cross these lines. We have zero tolerance for objectionable content and abusive users: you can report or block anyone from their profile, a message, a story or a post, our moderators review every report within 24 hours, and content or accounts that break these rules are removed."
    },
    {
      "h": "What you post stays yours",
      "b": "Your photos, your profile text and your messages remain yours. You give us only the permission we need to run the service — to store your content, show it to the members it is meant for, and keep backups. Posts to the community feed are reviewed before they appear, and both posts and messages may be read by our moderators when they are reported."
    },
    {
      "h": "Coins and purchases",
      "b": "Some features are paid for with coins. Coins are bought through the App Store or Google Play, which handle the payment, and some are earned in the app (daily visits, invitations, completing your profile). Coins are not money: they cannot be exchanged, transferred or cashed out, and a refund from the store takes back the coins it paid for. The price in coins is shown before anything is charged. Refunds follow the policy of the store you bought from. Coins are delivered immediately: by buying them you agree to immediate delivery and acknowledge that the right of withdrawal ends once they are credited, without affecting the store's refund policy."
    },
    {
      "h": "Verification and mahrem access",
      "b": "The verified badge means somebody at Niyyah looked at a live photo of you beside your profile pictures and found the same person. It is free and part of signing up — it is not sold. It is not a background check, and it is not a guarantee about anyone's character or intentions. If you invite a mahrem, that person can read the conversations you have given them access to — invite only someone you genuinely want reading them, and know that you can withdraw that access."
    },
    {
      "h": "Suspension, closure and appeals",
      "b": "We may suspend or close an account that breaks these terms, that puts other members at risk, or that we are legally required to act on. Where we can, we will tell you why. You can close your own account at any time from Settings, which deletes your profile, photos, matches and messages. If you believe we got a decision wrong, write to support@niyyahmarriage.com and a person will look at it."
    },
    {
      "h": "Limits, changes and governing law",
      "b": "Niyyah is provided as it is. We work hard to keep it safe and available, but we cannot promise it will never be interrupted, and we cannot be responsible for how any member behaves, on the app or off it. Meeting anyone in person is your decision and your responsibility. We may update these terms; if a change matters, we will tell you in the app before it takes effect. These terms are governed by the law of Estonia. This does not deprive you of the protection of the mandatory consumer-protection rules of the country where you live. Disputes are decided by the courts of Estonia (Harju County Court, Harju Maakohus), without prejudice to your right as a consumer to bring proceedings in the courts of the country where you live."
    }
  ],
  "bs": [
    {
      "h": "Ko smo mi i šta ovo pokriva",
      "b": "Niyyah je servis za upoznavanje muslimana koji traže brak koji pruža Puzzles IT OÜ, društvo registrovano u Estoniji (registarski broj 16552842, PDV broj EE102585232; Sepapaja tn 6, 15551 Tallinn, Estonija). Ovi uslovi su ugovor između tebe i društva Puzzles IT OÜ („mi“, „nas“) za korištenje Niyyah aplikacije. Otvaranjem naloga prihvataš ih. Ako ih ne prihvataš, molimo te da ne koristiš servis. Za aplikaciju preuzetu iz App Store-a važi i Appleov standardni licencni ugovor za aplikacije (EULA)."
    },
    {
      "h": "Ko može koristiti Niyyah",
      "b": "Moraš imati najmanje 18 godina i biti pravno slobodan/na za brak. Jedna osoba, jedan nalog. Ne smiješ koristiti Niyyah u ime nekog drugog, niti otvarati novi nalog da zaobiđeš suspenziju ili zabranu. Možemo te u bilo kojem trenutku zamoliti da potvrdiš godine ili identitet."
    },
    {
      "h": "Tvoj nalog i tvoj profil",
      "b": "Podaci na tvom profilu moraju biti istiniti, a fotografije moraju biti tvoje i skorašnje. Podatke za prijavu čuvaj za sebe — sve što se uradi preko tvog naloga smatra se tvojim djelom. Odmah nam javi na support@niyyahmarriage.com ako misliš da je neko drugi ušao u njega."
    },
    {
      "h": "Kako očekujemo da se ljudi ponašaju",
      "b": "Ophodi se prema svima ovdje kako bi želio/la da se neko ophodi prema tvojoj porodici. Bez uznemiravanja, vrijeđanja, pritiska, seksualnog sadržaja i fotografija koje ne bi bile primjerene pred porodicom te osobe. Ne koristi Niyyah za reklamiranje, regrutovanje, traženje novca, niti za bilo šta osim braka. Sadržaj i naloge koji prelaze ove granice uklanjamo. Za neprimjeren sadržaj i korisnike koji zlostavljaju druge nema nikakve tolerancije: svakoga možeš prijaviti ili blokirati iz profila, poruke, priče ili objave, naši moderatori pregledaju svaku prijavu u roku od 24 sata, a sadržaj i nalozi koji krše ova pravila se uklanjaju."
    },
    {
      "h": "Ono što objaviš ostaje tvoje",
      "b": "Tvoje fotografije, tekst profila i poruke ostaju tvoji. Nama daješ samo dozvolu koja nam treba da servis radi — da čuvamo tvoj sadržaj, pokažemo ga članovima kojima je namijenjen i držimo sigurnosne kopije. Objave na zajednici pregledaju se prije nego se pojave, a i objave i poruke mogu pročitati naši moderatori kada budu prijavljene."
    },
    {
      "h": "Coinsi i kupovine",
      "b": "Neke mogućnosti se plaćaju coinsima. Coinsi se kupuju preko App Store-a ili Google Play-a, koji obavljaju plaćanje, a neki se zarađuju u aplikaciji (dnevni dolasci, pozivnice, popunjen profil). Coinsi nisu novac: ne mogu se zamijeniti, prenijeti ni isplatiti, a povrat novca u trgovini poništava (oduzima) coinse kupljene tim plaćanjem. Cijena u coinsima se pokaže prije nego se išta naplati. Povrat novca ide po pravilima trgovine u kojoj je kupovina obavljena. Coinsi se isporučuju odmah: kupovinom pristaješ na trenutnu isporuku i potvrđuješ da pravo na odustanak prestaje čim se coinsi upišu, bez uticaja na pravila povrata novca u trgovini."
    },
    {
      "h": "Verifikacija i pristup mahrema",
      "b": "Verifikovana oznaka znači da je neko iz Niyyah pogledao fotografiju uživo pored tvojih profilnih slika i prepoznao istu osobu. Besplatna je i dio je registracije — ne prodaje se. To nije provjera prošlosti niti garancija nečijeg karaktera ili namjera. Ako pozoveš mahrema, ta osoba može čitati razgovore kojima si joj dao/la pristup — pozovi samo nekoga za koga zaista želiš da ih čita, i znaj da taj pristup možeš povući."
    },
    {
      "h": "Suspenzija, zatvaranje i žalbe",
      "b": "Možemo suspendovati ili zatvoriti nalog koji krši ove uslove, koji dovodi druge članove u rizik, ili na koji smo zakonski dužni reagovati. Gdje god možemo, reći ćemo ti razlog. Svoj nalog možeš zatvoriti sam/a u bilo kojem trenutku iz Postavki, čime se brišu tvoj profil, fotografije, spojevi i poruke. Ako misliš da smo pogriješili, piši na support@niyyahmarriage.com i čovjek će to pogledati."
    },
    {
      "h": "Ograničenja, izmjene i mjerodavno pravo",
      "b": "Niyyah se pruža takva kakva jeste. Trudimo se da bude sigurna i dostupna, ali ne možemo obećati da nikada neće biti prekida, niti možemo odgovarati za to kako se neki član ponaša, u aplikaciji ili van nje. Susret uživo je tvoja odluka i tvoja odgovornost. Ove uslove možemo mijenjati; ako je izmjena bitna, javit ćemo ti u aplikaciji prije nego stupi na snagu. Na ove uslove primjenjuje se pravo Estonije. Time ne gubiš zaštitu koju ti daju obavezni propisi o zaštiti potrošača zemlje u kojoj živiš. Za sporove su nadležni sudovi u Estoniji (Okružni sud Harju, Harju Maakohus), bez uticaja na tvoje pravo da kao potrošač pokreneš postupak pred sudom zemlje u kojoj živiš."
    }
  ],
  "de": [
    {
      "h": "Wer wir sind und was das hier regelt",
      "b": "Niyyah ist ein Vermittlungsdienst für Muslime, die eine Ehe suchen, bereitgestellt von der Puzzles IT OÜ, einer in Estland eingetragenen Gesellschaft (Registernummer 16552842, USt-IdNr. EE102585232; Sepapaja tn 6, 15551 Tallinn, Estland). Diese Bedingungen sind die Vereinbarung zwischen dir und der Puzzles IT OÜ („wir“, „uns“) über die Nutzung der Niyyah-App. Mit dem Anlegen eines Kontos nimmst du sie an. Wenn du sie nicht annimmst, nutze den Dienst bitte nicht. Für die aus dem App Store geladene App gilt zusätzlich Apples Standard-Lizenzvertrag für Apps (EULA)."
    },
    {
      "h": "Wer Niyyah nutzen darf",
      "b": "Du musst mindestens 18 Jahre alt und rechtlich frei sein zu heiraten. Eine Person, ein Konto. Du darfst Niyyah nicht für jemand anderen nutzen und kein neues Konto anlegen, um eine Sperre zu umgehen. Wir können jederzeit um eine Bestätigung deines Alters oder deiner Identität bitten."
    },
    {
      "h": "Dein Konto und dein Profil",
      "b": "Die Angaben in deinem Profil müssen wahr sein, und deine Fotos müssen aktuelle Bilder von dir sein. Behalte deine Zugangsdaten für dich — alles, was über dein Konto geschieht, gilt als von dir getan. Melde dich sofort unter support@niyyahmarriage.com, wenn du glaubst, dass jemand anderes hineingekommen ist."
    },
    {
      "h": "Wie wir erwarten, dass man sich verhält",
      "b": "Behandle hier jeden so, wie du es dir für deine eigene Familie wünschen würdest. Keine Belästigung, keine Beleidigungen, kein Druck, keine sexuellen Inhalte und keine Fotos, die vor der Familie dieser Person unpassend wären. Nutze Niyyah nicht für Werbung, Anwerbung, Geldforderungen oder irgendetwas außer der Ehe. Inhalte und Konten, die diese Grenzen überschreiten, entfernen wir. Für anstößige Inhalte und missbräuchliche Nutzer gilt null Toleranz: Du kannst jede Person über ihr Profil, eine Nachricht, eine Story oder einen Beitrag melden oder blockieren, unsere Moderatoren prüfen jede Meldung innerhalb von 24 Stunden, und Inhalte oder Konten, die gegen diese Regeln verstoßen, werden entfernt."
    },
    {
      "h": "Was du veröffentlichst, bleibt deins",
      "b": "Deine Fotos, dein Profiltext und deine Nachrichten bleiben deine. Du gibst uns nur die Erlaubnis, die wir zum Betrieb brauchen — deine Inhalte zu speichern, sie den vorgesehenen Mitgliedern zu zeigen und Sicherungen zu führen. Beiträge im Gemeinschafts-Feed werden vor der Veröffentlichung geprüft, und sowohl Beiträge als auch Nachrichten können von unseren Moderatoren gelesen werden, wenn sie gemeldet wurden."
    },
    {
      "h": "Coins und Käufe",
      "b": "Manche Funktionen werden mit Coins bezahlt. Coins werden über den App Store oder Google Play gekauft, die die Zahlung abwickeln; manche verdienst du in der App (tägliche Besuche, Einladungen, vollständiges Profil). Coins sind kein Geld: Sie können nicht umgetauscht, übertragen oder ausgezahlt werden, und eine Erstattung durch den Store nimmt die damit bezahlten Coins zurück. Der Preis in Coins wird angezeigt, bevor etwas berechnet wird. Erstattungen richten sich nach den Regeln des Stores, in dem du gekauft hast. Coins werden sofort geliefert: Mit dem Kauf stimmst du der sofortigen Lieferung zu und bestätigst, dass das Widerrufsrecht erlischt, sobald sie gutgeschrieben sind; die Erstattungsregeln des Stores bleiben davon unberührt."
    },
    {
      "h": "Verifizierung und Mahram-Zugang",
      "b": "Das Verifizierungsabzeichen bedeutet, dass jemand bei Niyyah ein Live-Foto neben deinen Profilbildern angesehen und dieselbe Person erkannt hat. Es ist kostenlos und Teil der Anmeldung — es wird nicht verkauft. Es ist keine Hintergrundprüfung und keine Garantie für den Charakter oder die Absichten einer Person. Wenn du einen Mahram einlädst, kann diese Person die Gespräche lesen, für die du ihr Zugang gegeben hast — lade nur jemanden ein, von dem du das wirklich möchtest, und wisse, dass du diesen Zugang widerrufen kannst."
    },
    {
      "h": "Sperrung, Schließung und Einspruch",
      "b": "Wir können ein Konto sperren oder schließen, das gegen diese Bedingungen verstößt, andere Mitglieder gefährdet oder bei dem wir rechtlich handeln müssen. Wo möglich, nennen wir dir den Grund. Du kannst dein Konto jederzeit selbst in den Einstellungen schließen; damit werden Profil, Fotos, Matches und Nachrichten gelöscht. Hältst du eine Entscheidung für falsch, schreib an support@niyyahmarriage.com — ein Mensch sieht es sich an."
    },
    {
      "h": "Grenzen, Änderungen und anwendbares Recht",
      "b": "Niyyah wird so bereitgestellt, wie es ist. Wir arbeiten daran, den Dienst sicher und verfügbar zu halten, können aber keine unterbrechungsfreie Nutzung versprechen und nicht dafür einstehen, wie sich ein Mitglied verhält — in der App oder außerhalb. Ein persönliches Treffen ist deine Entscheidung und deine Verantwortung. Wir können diese Bedingungen ändern; ist eine Änderung wesentlich, informieren wir dich vorher in der App. Es gilt das Recht von Estland. Dadurch verlierst du nicht den Schutz der zwingenden Verbraucherschutzvorschriften des Landes, in dem du lebst. Für Streitigkeiten sind die Gerichte in Estland zuständig (Kreisgericht Harju, Harju Maakohus); dein Recht als Verbraucher, vor den Gerichten deines Wohnsitzlandes zu klagen, bleibt unberührt."
    }
  ],
  "tr": [
    {
      "h": "Biz kimiz ve bu metin neyi kapsıyor",
      "b": "Niyyah, evlilik arayan Müslümanlar için bir tanışma hizmetidir ve Estonya’da tescilli Puzzles IT OÜ şirketi tarafından sunulur (sicil numarası 16552842, KDV numarası EE102585232; Sepapaja tn 6, 15551 Tallinn, Estonya). Bu koşullar, Niyyah uygulamasını kullanman konusunda seninle Puzzles IT OÜ (“biz”) arasındaki sözleşmedir. Hesap oluşturarak bunları kabul etmiş olursun. Kabul etmiyorsan lütfen hizmeti kullanma. App Store’dan indirilen uygulama için Apple’ın standart uygulama lisans sözleşmesi (EULA) de geçerlidir."
    },
    {
      "h": "Niyyah’ı kimler kullanabilir",
      "b": "En az 18 yaşında ve hukuken evlenmeye engeli bulunmayan biri olmalısın. Bir kişi, bir hesap. Niyyah’ı başkası adına kullanamaz, bir askıya alma ya da yasağı aşmak için yeni hesap açamazsın. Yaşını veya kimliğini doğrulamanı her zaman isteyebiliriz."
    },
    {
      "h": "Hesabın ve profilin",
      "b": "Profilindeki bilgiler doğru olmalı, fotoğrafların ise sana ait ve güncel olmalıdır. Giriş bilgilerini kendine sakla — hesabın üzerinden yapılan her şey senin yapmış olduğun kabul edilir. Başkasının hesabına girdiğini düşünüyorsan hemen support@niyyahmarriage.com adresine yaz."
    },
    {
      "h": "İnsanlardan beklediğimiz davranış",
      "b": "Buradaki herkese, kendi ailene davranılmasını istediğin gibi davran. Taciz yok, hakaret yok, baskı yok, cinsel içerik yok ve o kişinin ailesinin önünde uygun olmayacak fotoğraflar yok. Niyyah’ı reklam, üye toplama, para isteme ya da evlilik dışında bir amaç için kullanma. Bu sınırları aşan içerik ve hesapları kaldırırız. Uygunsuz içeriğe ve taciz eden kullanıcılara sıfır tolerans gösteririz: herkesi profilinden, bir mesajdan, bir hikâyeden veya bir gönderiden şikâyet edebilir ya da engelleyebilirsin; moderatörlerimiz her şikâyeti 24 saat içinde inceler ve bu kuralları çiğneyen içerik ve hesaplar kaldırılır."
    },
    {
      "h": "Paylaştığın şey senin kalır",
      "b": "Fotoğrafların, profil metnin ve mesajların senin kalır. Bize yalnızca hizmeti yürütmek için gereken izni verirsin — içeriğini saklamak, ilgili üyelere göstermek ve yedek tutmak. Topluluk akışındaki gönderiler yayınlanmadan önce incelenir; şikâyet edildiğinde hem gönderiler hem mesajlar moderatörlerimiz tarafından okunabilir."
    },
    {
      "h": "Coin’ler ve satın alımlar",
      "b": "Bazı özellikler coin ile ödenir. Coin’ler ödemeyi yürüten App Store veya Google Play üzerinden satın alınır; bazıları uygulamada kazanılır (günlük ziyaretler, davetler, tamamlanmış profil). Coin’ler para değildir: değiştirilemez, devredilemez veya nakde çevrilemez; mağazadan yapılan iade, ödediği coin’leri geri alır. Coin cinsinden fiyat, herhangi bir ücret alınmadan önce gösterilir. İadeler satın aldığın mağazanın kurallarına tabidir. Coin’ler hemen teslim edilir: satın alarak anında teslimatı kabul eder ve coin’ler hesabına geçtiği anda cayma hakkının sona erdiğini onaylarsın; bu, mağazanın iade kurallarını etkilemez."
    },
    {
      "h": "Doğrulama ve mahrem erişimi",
      "b": "Doğrulanmış rozet, Niyyah’tan birinin canlı bir fotoğrafı profil resimlerinin yanında inceleyip aynı kişiyi gördüğü anlamına gelir. Ücretsizdir ve kayıt adımlarının bir parçasıdır — satılmaz. Bu bir geçmiş araştırması değildir ve kimsenin karakteri ya da niyeti hakkında bir garanti vermez. Bir mahrem davet edersen, o kişi erişim verdiğin sohbetleri okuyabilir — yalnızca gerçekten okumasını istediğin birini davet et ve bu erişimi geri alabileceğini bil."
    },
    {
      "h": "Askıya alma, kapatma ve itiraz",
      "b": "Bu koşulları ihlal eden, diğer üyeleri riske atan veya hakkında yasal olarak işlem yapmak zorunda olduğumuz hesapları askıya alabilir ya da kapatabiliriz. Mümkün olduğunda sebebini sana bildiririz. Kendi hesabını istediğin zaman Ayarlar’dan kapatabilirsin; bu, profilini, fotoğraflarını, eşleşmelerini ve mesajlarını siler. Bir kararın yanlış olduğunu düşünüyorsan support@niyyahmarriage.com adresine yaz, bir insan inceleyecek."
    },
    {
      "h": "Sınırlar, değişiklikler ve uygulanacak hukuk",
      "b": "Niyyah olduğu gibi sunulur. Güvenli ve erişilebilir kalması için çalışırız, ancak hiç kesinti olmayacağını vaat edemez ve bir üyenin uygulama içinde ya da dışında nasıl davrandığından sorumlu olamayız. Biriyle yüz yüze görüşmek senin kararın ve senin sorumluluğundur. Bu koşulları güncelleyebiliriz; değişiklik önemliyse yürürlüğe girmeden önce uygulamada bildiririz. Bu koşullara Estonya hukuku uygulanır. Bu, yaşadığın ülkenin emredici tüketici koruma kurallarının sağladığı korumayı senden almaz. Uyuşmazlıklarda Estonya mahkemeleri (Harju İlçe Mahkemesi, Harju Maakohus) yetkilidir; tüketici olarak yaşadığın ülkenin mahkemelerinde dava açma hakkın saklıdır."
    }
  ],
  "ar": [
    {
      "h": "من نحن وما الذي تغطيه هذه الشروط",
      "b": "Niyyah خدمة للتعارف بغرض الزواج للمسلمين، تقدّمها شركة Puzzles IT OÜ المسجّلة في إستونيا (رقم التسجيل: 16552842، رقم ضريبة القيمة المضافة: EE102585232؛ Sepapaja tn 6, 15551 Tallinn، إستونيا). هذه الشروط هي الاتفاق بينك وبين Puzzles IT OÜ («نحن») بشأن استخدامك لتطبيق Niyyah. بإنشاء حساب فإنك تقبلها. وإن كنت لا تقبلها، فالرجاء عدم استخدام الخدمة. إذا نزّلت التطبيق من App Store، تسري عليه أيضًا اتفاقية الترخيص القياسية من Apple للتطبيقات (EULA)."
    },
    {
      "h": "من يحق له استخدام Niyyah",
      "b": "يجب أن يكون عمرك 18 عامًا على الأقل وأن تكون حرًّا قانونًا في الزواج. شخص واحد، حساب واحد. لا يجوز استخدام Niyyah نيابة عن غيرك، ولا إنشاء حساب جديد للالتفاف على إيقاف أو حظر. ويجوز لنا في أي وقت أن نطلب منك تأكيد عمرك أو هويتك."
    },
    {
      "h": "حسابك وملفك الشخصي",
      "b": "يجب أن تكون المعلومات في ملفك صحيحة، وأن تكون صورك حديثة ولك أنت. احتفظ ببيانات الدخول لنفسك — فكل ما يجري عبر حسابك يُعتبر صادرًا عنك. راسلنا فورًا على support@niyyahmarriage.com إذا اعتقدت أن شخصًا آخر قد دخل إليه."
    },
    {
      "h": "كيف نتوقع أن يتعامل الناس",
      "b": "عامل كل شخص هنا كما تحب أن تُعامَل أسرتك. لا مضايقة، ولا إهانة، ولا ضغط، ولا محتوى جنسي، ولا صور لا تليق أمام أهل ذلك الشخص. لا تستخدم Niyyah للإعلان أو الاستقطاب أو طلب المال أو لأي غرض سوى الزواج. ونحن نزيل المحتوى والحسابات التي تتجاوز هذه الحدود. لا نتسامح مطلقًا مع المحتوى المسيء أو المستخدمين المسيئين: يمكنك الإبلاغ عن أي شخص أو حظره من ملفه أو رسالة أو قصة أو منشور، ويراجع مشرفونا كل بلاغ خلال 24 ساعة، ويُزال المحتوى والحسابات التي تخالف هذه القواعد."
    },
    {
      "h": "ما تنشره يبقى ملكك",
      "b": "صورك ونص ملفك ورسائلك تبقى ملكك. أنت تمنحنا فقط الإذن اللازم لتشغيل الخدمة — لحفظ محتواك وعرضه على الأعضاء المقصودين والاحتفاظ بنسخ احتياطية. تُراجع منشورات المجتمع قبل ظهورها، ويمكن لمشرفينا قراءة المنشورات والرسائل عند الإبلاغ عنها."
    },
    {
      "h": "العملات والمشتريات",
      "b": "تُدفع بعض الميزات بالعملات. تُشترى العملات عبر App Store أو Google Play اللذين يتوليان الدفع، ويُكسب بعضها داخل التطبيق (الزيارات اليومية، الدعوات، إكمال الملف). العملات ليست نقودًا: لا يمكن استبدالها أو تحويلها أو صرفها، واسترداد المال من المتجر يسترجع العملات التي دفعها. يُعرض السعر بالعملات قبل أي خصم. يخضع الاسترداد لسياسة المتجر الذي اشتريت منه. تُسلَّم العملات فورًا: بشرائها توافق على التسليم الفوري وتقرّ بأن حق العدول ينتهي بمجرد إضافتها إلى رصيدك، دون المساس بسياسة الاسترداد في المتجر."
    },
    {
      "h": "التوثيق ووصول المحرم",
      "b": "تعني شارة التوثيق أن أحد العاملين في Niyyah نظر إلى صورة حيّة لك بجانب صور ملفك الشخصي فوجد الشخص نفسه. وهي مجانية وجزء من التسجيل — ولا تُباع. وهي ليست تحقيقًا في السوابق، وليست ضمانًا لأخلاق أحد أو نيّته. وإذا دعوت محرمًا، فبإمكانه قراءة المحادثات التي منحته الوصول إليها — فادعُ فقط من ترغب حقًا في أن يقرأها، واعلم أن بإمكانك سحب هذا الوصول."
    },
    {
      "h": "الإيقاف والإغلاق والاعتراض",
      "b": "يجوز لنا إيقاف أو إغلاق أي حساب يخالف هذه الشروط، أو يعرّض الأعضاء الآخرين للخطر، أو يلزمنا القانون بالتصرف حياله. وسنبيّن لك السبب كلما أمكن. ويمكنك إغلاق حسابك بنفسك في أي وقت من الإعدادات، وهو ما يحذف ملفك وصورك وتوافقاتك ورسائلك. وإن رأيت أن قرارًا كان خاطئًا، فاكتب إلى support@niyyahmarriage.com وسينظر فيه إنسان."
    },
    {
      "h": "الحدود والتغييرات والقانون الواجب التطبيق",
      "b": "يُقدَّم Niyyah كما هو. نعمل جاهدين على إبقائه آمنًا ومتاحًا، لكننا لا نستطيع الوعد بألا ينقطع أبدًا، ولا أن نتحمل مسؤولية سلوك أي عضو داخل التطبيق أو خارجه. ولقاء أي شخص على أرض الواقع قرارك ومسؤوليتك. وقد نحدّث هذه الشروط؛ وإذا كان التغيير جوهريًا فسنخبرك داخل التطبيق قبل سريانه. ويحكم هذه الشروط قانون إستونيا. ولا يحرمك ذلك من الحماية التي تمنحها لك قواعد حماية المستهلك الإلزامية في البلد الذي تعيش فيه. وتختص محاكم إستونيا (محكمة مقاطعة هاريو، Harju Maakohus) بالفصل في النزاعات، دون المساس بحقك بصفتك مستهلكًا في رفع الدعوى أمام محاكم البلد الذي تعيش فيه."
    }
  ],
  "id": [
    {
      "h": "Siapa kami, dan apa yang diatur di sini",
      "b": "Niyyah adalah layanan perjodohan bagi Muslim yang mencari pernikahan, yang disediakan oleh Puzzles IT OÜ, perusahaan yang terdaftar di Estonia (nomor registrasi 16552842, nomor PPN EE102585232; Sepapaja tn 6, 15551 Tallinn, Estonia). Ketentuan ini adalah perjanjian antara kamu dan Puzzles IT OÜ (\"kami\") atas penggunaan aplikasi Niyyah. Dengan membuat akun, kamu menerimanya. Jika kamu tidak menerimanya, mohon jangan gunakan layanan ini. Untuk aplikasi yang diunduh dari App Store, perjanjian lisensi standar Apple untuk aplikasi (EULA) juga berlaku."
    },
    {
      "h": "Siapa yang boleh menggunakan Niyyah",
      "b": "Kamu harus berusia minimal 18 tahun dan secara hukum bebas untuk menikah. Satu orang, satu akun. Kamu tidak boleh menggunakan Niyyah atas nama orang lain, dan tidak boleh membuat akun baru untuk menghindari penangguhan atau pemblokiran. Kami dapat memintamu mengonfirmasi usia atau identitas kapan saja."
    },
    {
      "h": "Akun dan profilmu",
      "b": "Informasi di profilmu harus benar, dan fotomu harus foto dirimu yang terbaru. Simpan data masukmu untuk dirimu sendiri — apa pun yang dilakukan melalui akunmu dianggap dilakukan olehmu. Segera beri tahu kami di support@niyyahmarriage.com jika kamu menduga orang lain telah masuk ke dalamnya."
    },
    {
      "h": "Bagaimana kami berharap orang bersikap",
      "b": "Perlakukan setiap orang di sini sebagaimana kamu ingin keluargamu diperlakukan. Tanpa pelecehan, tanpa hinaan, tanpa tekanan, tanpa konten seksual, dan tanpa foto yang tidak pantas ditampilkan di hadapan keluarga orang tersebut. Jangan gunakan Niyyah untuk beriklan, merekrut, meminta uang, atau untuk tujuan apa pun selain pernikahan. Konten dan akun yang melewati batas ini kami hapus. Kami sama sekali tidak menoleransi konten yang tidak pantas dan pengguna yang melecehkan: kamu dapat melaporkan atau memblokir siapa pun dari profilnya, pesan, cerita, atau postingan; moderator kami meninjau setiap laporan dalam 24 jam, dan konten atau akun yang melanggar aturan ini dihapus."
    },
    {
      "h": "Apa yang kamu unggah tetap milikmu",
      "b": "Fotomu, teks profilmu, dan pesanmu tetap milikmu. Kamu hanya memberi kami izin yang kami perlukan untuk menjalankan layanan — menyimpan kontenmu, menampilkannya kepada anggota yang dituju, dan menyimpan cadangan. Unggahan di beranda komunitas ditinjau sebelum muncul, dan baik unggahan maupun pesan dapat dibaca moderator kami ketika dilaporkan."
    },
    {
      "h": "Koin dan pembelian",
      "b": "Beberapa fitur dibayar dengan koin. Koin dibeli melalui App Store atau Google Play, yang menangani pembayaran; sebagian diperoleh di aplikasi (kunjungan harian, undangan, profil lengkap). Koin bukan uang: tidak dapat ditukar, dipindahkan, atau dicairkan, dan pengembalian dana dari toko menarik kembali koin yang dibayarnya. Harga dalam koin ditampilkan sebelum ada yang ditagih. Pengembalian dana mengikuti kebijakan toko tempat kamu membeli. Koin dikirim seketika: dengan membelinya kamu menyetujui pengiriman seketika dan mengakui bahwa hak penarikan berakhir begitu koin dikreditkan, tanpa memengaruhi kebijakan pengembalian dana toko."
    },
    {
      "h": "Verifikasi dan akses mahram",
      "b": "Lencana terverifikasi berarti seseorang di Niyyah melihat foto langsungmu bersama foto profilmu dan menemukan orang yang sama. Lencana ini gratis dan bagian dari pendaftaran — tidak dijual. Itu bukan pemeriksaan latar belakang, dan bukan jaminan atas akhlak atau niat siapa pun. Jika kamu mengundang mahram, orang itu dapat membaca percakapan yang kamu beri akses — undanglah hanya orang yang benar-benar kamu ingin membacanya, dan ketahuilah bahwa akses itu bisa kamu cabut."
    },
    {
      "h": "Penangguhan, penutupan, dan banding",
      "b": "Kami dapat menangguhkan atau menutup akun yang melanggar ketentuan ini, yang membahayakan anggota lain, atau yang secara hukum mengharuskan kami bertindak. Sebisa mungkin, kami akan menyampaikan alasannya. Kamu dapat menutup akunmu sendiri kapan saja dari Pengaturan, yang akan menghapus profil, foto, kecocokan, dan pesanmu. Jika kamu menganggap keputusan kami keliru, tulis ke support@niyyahmarriage.com dan seorang manusia akan meninjaunya."
    },
    {
      "h": "Batasan, perubahan, dan hukum yang berlaku",
      "b": "Niyyah disediakan apa adanya. Kami berupaya menjaganya tetap aman dan tersedia, tetapi kami tidak dapat menjanjikan tidak akan pernah ada gangguan, dan kami tidak dapat bertanggung jawab atas perilaku anggota mana pun, baik di dalam aplikasi maupun di luarnya. Bertemu siapa pun secara langsung adalah keputusan dan tanggung jawabmu. Kami dapat memperbarui ketentuan ini; jika ada perubahan penting, kami akan memberi tahu di aplikasi sebelum berlaku. Ketentuan ini tunduk pada hukum Estonia. Hal ini tidak menghilangkan perlindungan yang diberikan kepadamu oleh aturan wajib perlindungan konsumen di negara tempat kamu tinggal. Sengketa diputus oleh pengadilan di Estonia (Pengadilan Distrik Harju, Harju Maakohus), tanpa mengurangi hakmu sebagai konsumen untuk menggugat di pengadilan negara tempat kamu tinggal."
    }
  ],
  "ur": [
    {
      "h": "ہم کون ہیں، اور یہ کن باتوں پر لاگو ہے",
      "b": "Niyyah نکاح کے خواہشمند مسلمانوں کے لیے رشتہ تلاش کرنے کی خدمت ہے، جو اسٹونیا میں رجسٹرڈ کمپنی Puzzles IT OÜ فراہم کرتی ہے (رجسٹری نمبر 16552842، VAT نمبر EE102585232؛ Sepapaja tn 6, 15551 Tallinn، اسٹونیا)۔ یہ شرائط Niyyah ایپ کے استعمال کے بارے میں آپ کے اور Puzzles IT OÜ (جسے یہاں \"ہم\" کہا گیا ہے) کے درمیان معاہدہ ہیں۔ اکاؤنٹ بنا کر آپ انہیں قبول کرتے ہیں۔ اگر آپ انہیں قبول نہیں کرتے تو براہ کرم یہ خدمت استعمال نہ کریں۔ App Store سے ڈاؤن لوڈ کی گئی ایپ پر Apple کا معیاری لائسنس معاہدہ برائے ایپس (EULA) بھی لاگو ہوتا ہے۔"
    },
    {
      "h": "Niyyah کون استعمال کر سکتا ہے",
      "b": "آپ کی عمر کم از کم 18 سال ہونی چاہیے اور آپ قانوناً نکاح کے لیے آزاد ہوں۔ ایک شخص، ایک اکاؤنٹ۔ آپ کسی اور کی طرف سے Niyyah استعمال نہیں کر سکتے، اور نہ ہی معطلی یا پابندی سے بچنے کے لیے نیا اکاؤنٹ بنا سکتے ہیں۔ ہم کسی بھی وقت آپ سے عمر یا شناخت کی تصدیق طلب کر سکتے ہیں۔"
    },
    {
      "h": "آپ کا اکاؤنٹ اور پروفائل",
      "b": "آپ کے پروفائل کی معلومات سچی ہونی چاہییں، اور تصاویر آپ کی حالیہ ہونی چاہییں۔ اپنی لاگ اِن تفصیلات اپنے پاس رکھیں — آپ کے اکاؤنٹ سے جو کچھ ہوتا ہے وہ آپ کا کیا ہوا سمجھا جاتا ہے۔ اگر آپ کو لگے کہ کسی اور نے اس تک رسائی حاصل کر لی ہے تو فوراً support@niyyahmarriage.com پر ہمیں بتائیں۔"
    },
    {
      "h": "ہم لوگوں سے کس رویّے کی توقع رکھتے ہیں",
      "b": "یہاں ہر شخص کے ساتھ ویسا سلوک کریں جیسا آپ اپنے خاندان کے لیے چاہیں گے۔ نہ ہراسانی، نہ توہین، نہ دباؤ، نہ جنسی مواد، اور نہ ایسی تصاویر جو اُس شخص کے خاندان کے سامنے مناسب نہ ہوں۔ Niyyah کو اشتہار، بھرتی، پیسے مانگنے، یا نکاح کے علاوہ کسی مقصد کے لیے استعمال نہ کریں۔ ان حدود سے تجاوز کرنے والا مواد اور اکاؤنٹ ہم ہٹا دیتے ہیں۔ قابلِ اعتراض مواد اور بدسلوکی کرنے والے صارفین کے لیے ہماری برداشت صفر ہے: آپ کسی کو بھی اس کے پروفائل، پیغام، اسٹوری یا پوسٹ سے رپورٹ یا بلاک کر سکتے ہیں، ہمارے ماڈریٹرز ہر رپورٹ کا 24 گھنٹوں کے اندر جائزہ لیتے ہیں، اور ان اصولوں کی خلاف ورزی کرنے والا مواد اور اکاؤنٹس ہٹا دیے جاتے ہیں۔"
    },
    {
      "h": "جو آپ شائع کرتے ہیں وہ آپ کا رہتا ہے",
      "b": "آپ کی تصاویر، پروفائل کا متن اور پیغامات آپ کے رہتے ہیں۔ آپ ہمیں صرف وہ اجازت دیتے ہیں جو خدمت چلانے کے لیے ضروری ہے — آپ کا مواد محفوظ رکھنا، متعلقہ اراکین کو دکھانا، اور بیک اپ رکھنا۔ کمیونٹی فیڈ کی پوسٹس ظاہر ہونے سے پہلے جانچی جاتی ہیں، اور شکایت کی صورت میں پوسٹس اور پیغامات دونوں ہمارے موڈریٹرز پڑھ سکتے ہیں۔"
    },
    {
      "h": "سکے اور خریداری",
      "b": "کچھ سہولیات کی ادائیگی سکوں سے ہوتی ہے۔ سکے App Store یا Google Play کے ذریعے خریدے جاتے ہیں جو ادائیگی سنبھالتے ہیں، اور کچھ ایپ میں کمائے جاتے ہیں (روزانہ آمد، دعوت نامے، مکمل پروفائل)۔ سکے رقم نہیں ہیں: انہیں بدلا، منتقل یا کیش نہیں کیا جا سکتا، اور اسٹور سے رقم کی واپسی ان سکوں کو بھی واپس لے لیتی ہے جن کی ادائیگی ہوئی تھی۔ سکوں میں قیمت کچھ وصول کرنے سے پہلے دکھائی جاتی ہے۔ رقم کی واپسی اسی اسٹور کی پالیسی کے مطابق ہوتی ہے جہاں سے خریدا گیا۔ سکے فوراً فراہم کیے جاتے ہیں: خریداری کر کے آپ فوری فراہمی پر رضامندی دیتے ہیں اور تسلیم کرتے ہیں کہ سکے اکاؤنٹ میں آتے ہی دستبرداری کا حق ختم ہو جاتا ہے؛ اس سے اسٹور کی رقم واپسی کی پالیسی متاثر نہیں ہوتی۔"
    },
    {
      "h": "تصدیق اور محرم کی رسائی",
      "b": "تصدیق شدہ نشان کا مطلب ہے کہ Niyyah میں کسی شخص نے آپ کی زندہ تصویر کو آپ کی پروفائل تصاویر کے ساتھ رکھ کر دیکھا اور وہی شخص پایا۔ یہ مفت ہے اور رجسٹریشن کا حصہ ہے — یہ بیچا نہیں جاتا۔ یہ ماضی کی جانچ نہیں، اور نہ ہی کسی کے کردار یا نیت کی ضمانت۔ اگر آپ محرم کو مدعو کرتے ہیں تو وہ شخص وہ گفتگو پڑھ سکتا ہے جن تک آپ نے رسائی دی — صرف اُسی کو مدعو کریں جس کے بارے میں آپ واقعی یہ چاہتے ہیں، اور جان لیں کہ یہ رسائی واپس لی جا سکتی ہے۔"
    },
    {
      "h": "معطلی، بندش اور اپیل",
      "b": "ہم ایسا اکاؤنٹ معطل یا بند کر سکتے ہیں جو ان شرائط کی خلاف ورزی کرے، دوسرے اراکین کو خطرے میں ڈالے، یا جس پر ہمیں قانوناً کارروائی کرنی پڑے۔ جہاں ممکن ہو، ہم آپ کو وجہ بتائیں گے۔ آپ اپنا اکاؤنٹ کسی بھی وقت ترتیبات سے خود بند کر سکتے ہیں، جس سے آپ کا پروفائل، تصاویر، جوڑ اور پیغامات حذف ہو جاتے ہیں۔ اگر آپ کو لگے کہ ہمارا فیصلہ غلط تھا تو support@niyyahmarriage.com پر لکھیں اور ایک انسان اس کا جائزہ لے گا۔"
    },
    {
      "h": "حدود، تبدیلیاں اور مجازی قانون",
      "b": "Niyyah جیسا ہے ویسا فراہم کیا جاتا ہے۔ ہم اسے محفوظ اور دستیاب رکھنے کی کوشش کرتے ہیں، مگر یہ وعدہ نہیں کر سکتے کہ کبھی رکاوٹ نہیں آئے گی، اور نہ ہی کسی رکن کے رویّے کے ذمہ دار ہو سکتے ہیں، ایپ کے اندر ہو یا باہر۔ کسی سے بالمشافہ ملاقات آپ کا فیصلہ اور آپ کی ذمہ داری ہے۔ ہم یہ شرائط تبدیل کر سکتے ہیں؛ اگر تبدیلی اہم ہو تو نافذ ہونے سے پہلے ایپ میں بتائیں گے۔ ان شرائط پر اسٹونیا کا قانون لاگو ہوتا ہے۔ اس سے آپ اپنے ملکِ رہائش کے لازمی صارف تحفظ قوانین کے تحفظ سے محروم نہیں ہوتے۔ تنازعات کا فیصلہ اسٹونیا کی عدالتیں (ہاریو کاؤنٹی کورٹ، Harju Maakohus) کرتی ہیں، اور صارف کی حیثیت سے اپنے ملکِ رہائش کی عدالتوں میں مقدمہ دائر کرنے کا آپ کا حق برقرار رہتا ہے۔"
    }
  ],
  "ms": [
    {
      "h": "Siapa kami, dan apa yang diliputi",
      "b": "Niyyah ialah perkhidmatan mencari jodoh untuk umat Islam yang mahu berkahwin, yang disediakan oleh Puzzles IT OÜ, syarikat yang didaftarkan di Estonia (nombor pendaftaran 16552842, nombor VAT EE102585232; Sepapaja tn 6, 15551 Tallinn, Estonia). Syarat ini ialah perjanjian antara awak dan Puzzles IT OÜ (\"kami\") bagi penggunaan aplikasi Niyyah. Dengan mencipta akaun, awak menerimanya. Jika awak tidak menerimanya, sila jangan gunakan perkhidmatan ini. Bagi aplikasi yang dimuat turun dari App Store, perjanjian lesen standard Apple untuk aplikasi (EULA) turut terpakai."
    },
    {
      "h": "Siapa boleh menggunakan Niyyah",
      "b": "Awak mesti berumur sekurang-kurangnya 18 tahun dan bebas dari segi undang-undang untuk berkahwin. Seorang, satu akaun. Awak tidak boleh menggunakan Niyyah bagi pihak orang lain, dan tidak boleh mencipta akaun baharu untuk mengelak penggantungan atau pengharaman. Kami boleh meminta awak mengesahkan umur atau identiti pada bila-bila masa."
    },
    {
      "h": "Akaun dan profil awak",
      "b": "Maklumat dalam profil awak mestilah benar, dan foto awak mestilah gambar terkini awak. Simpan butiran log masuk untuk diri sendiri — apa sahaja yang dilakukan melalui akaun awak dianggap dilakukan oleh awak. Beritahu kami dengan segera di support@niyyahmarriage.com jika awak fikir orang lain telah memasukinya."
    },
    {
      "h": "Cara kami harapkan orang bertindak",
      "b": "Layan setiap orang di sini sebagaimana awak mahu keluarga awak dilayan. Tiada gangguan, tiada penghinaan, tiada tekanan, tiada kandungan seksual, dan tiada foto yang tidak sesuai di hadapan keluarga orang itu. Jangan gunakan Niyyah untuk mengiklan, merekrut, meminta wang, atau untuk apa-apa selain perkahwinan. Kandungan dan akaun yang melanggar batas ini akan kami buang. Kami langsung tidak bertolak ansur dengan kandungan yang tidak wajar dan pengguna yang menganiaya: awak boleh melaporkan atau menyekat sesiapa sahaja daripada profilnya, mesej, cerita atau siaran; moderator kami menyemak setiap laporan dalam masa 24 jam, dan kandungan atau akaun yang melanggar peraturan ini dikeluarkan."
    },
    {
      "h": "Apa yang awak hantar kekal milik awak",
      "b": "Foto, teks profil dan mesej awak kekal milik awak. Awak hanya memberi kami kebenaran yang diperlukan untuk mengendalikan perkhidmatan — menyimpan kandungan awak, menunjukkannya kepada ahli yang berkenaan, dan menyimpan salinan sandaran. Hantaran ke suapan komuniti disemak sebelum muncul, dan kedua-dua hantaran serta mesej boleh dibaca oleh moderator kami apabila dilaporkan."
    },
    {
      "h": "Syiling dan pembelian",
      "b": "Sesetengah ciri dibayar dengan syiling. Syiling dibeli melalui App Store atau Google Play, yang mengendalikan bayaran; sebahagiannya diperoleh dalam aplikasi (lawatan harian, jemputan, profil lengkap). Syiling bukan wang: ia tidak boleh ditukar, dipindah atau ditunaikan, dan bayaran balik oleh kedai menarik balik syiling yang dibayarnya. Harga dalam syiling ditunjukkan sebelum apa-apa dicaj. Bayaran balik mengikut dasar kedai tempat anda membeli. Syiling dihantar serta-merta: dengan membelinya awak bersetuju dengan penghantaran serta-merta dan mengakui bahawa hak penarikan diri berakhir sebaik sahaja syiling dikreditkan, tanpa menjejaskan dasar bayaran balik kedai."
    },
    {
      "h": "Pengesahan dan akses mahram",
      "b": "Lencana disahkan bermakna seseorang di Niyyah melihat foto langsung awak di sebelah gambar profil awak dan mendapati orang yang sama. Ia percuma dan sebahagian daripada pendaftaran — ia tidak dijual. Ia bukan semakan latar belakang, dan bukan jaminan tentang akhlak atau niat sesiapa. Jika awak menjemput mahram, orang itu boleh membaca perbualan yang awak beri akses — jemput hanya orang yang awak benar-benar mahu membacanya, dan ketahuilah bahawa akses itu boleh ditarik balik."
    },
    {
      "h": "Penggantungan, penutupan dan rayuan",
      "b": "Kami boleh menggantung atau menutup akaun yang melanggar syarat ini, yang membahayakan ahli lain, atau yang kami diwajibkan bertindak menurut undang-undang. Di mana boleh, kami akan memberitahu awak sebabnya. Awak boleh menutup akaun awak sendiri pada bila-bila masa daripada Tetapan, yang memadam profil, foto, padanan dan mesej awak. Jika awak rasa keputusan kami silap, tulis ke support@niyyahmarriage.com dan seorang manusia akan menyemaknya."
    },
    {
      "h": "Had, perubahan dan undang-undang yang terpakai",
      "b": "Niyyah disediakan sebagaimana adanya. Kami berusaha memastikannya selamat dan tersedia, tetapi kami tidak boleh menjanjikan ia tidak akan terganggu, dan kami tidak boleh bertanggungjawab atas kelakuan mana-mana ahli, di dalam aplikasi mahupun di luar. Bertemu sesiapa secara bersemuka ialah keputusan dan tanggungjawab awak. Kami boleh mengemas kini syarat ini; jika perubahan itu penting, kami akan memberitahu dalam aplikasi sebelum ia berkuat kuasa. Syarat ini tertakluk kepada undang-undang Estonia. Ini tidak menghilangkan perlindungan yang diberikan kepada awak oleh peraturan wajib perlindungan pengguna di negara tempat awak tinggal. Pertikaian diputuskan oleh mahkamah di Estonia (Mahkamah Daerah Harju, Harju Maakohus), tanpa menjejaskan hak awak sebagai pengguna untuk membawa tindakan di mahkamah negara tempat awak tinggal."
    }
  ],
  "fr": [
    {
      "h": "Qui nous sommes et ce que couvre ce texte",
      "b": "Niyyah est un service de mise en relation en vue du mariage, destiné aux musulmans et fourni par Puzzles IT OÜ, société immatriculée en Estonie (code registre 16552842, n° TVA EE102585232 ; Sepapaja tn 6, 15551 Tallinn, Estonie). Ces conditions constituent l'accord entre toi et Puzzles IT OÜ (« nous ») concernant l'utilisation de l'application Niyyah. En créant un compte, tu les acceptes. Si tu ne les acceptes pas, n'utilise pas le service. Pour l’app téléchargée depuis l’App Store, le contrat de licence standard d’Apple pour les apps (EULA) s’applique également."
    },
    {
      "h": "Qui peut utiliser Niyyah",
      "b": "Tu dois avoir au moins 18 ans et être légalement libre de te marier. Une personne, un compte. Tu ne peux pas utiliser Niyyah pour le compte de quelqu'un d'autre, ni créer un nouveau compte pour contourner une suspension ou un bannissement. Nous pouvons te demander de confirmer ton âge ou ton identité à tout moment."
    },
    {
      "h": "Ton compte et ton profil",
      "b": "Les informations de ton profil doivent être exactes, et tes photos doivent être des photos récentes de toi. Garde tes identifiants pour toi — tout ce qui est fait depuis ton compte est considéré comme fait par toi. Préviens-nous immédiatement à support@niyyahmarriage.com si tu penses que quelqu'un d'autre y a accédé."
    },
    {
      "h": "Comment nous attendons que chacun se comporte",
      "b": "Traite chaque personne ici comme tu voudrais qu'on traite ta propre famille. Pas de harcèlement, pas d'insultes, pas de pression, pas de contenu à caractère sexuel, et aucune photo que tu ne montrerais pas devant la famille de la personne. N'utilise pas Niyyah pour faire de la publicité, recruter, demander de l'argent, ni pour autre chose que le mariage. Les contenus et les comptes qui franchissent ces limites sont retirés. Nous appliquons une tolérance zéro envers les contenus inappropriés et les utilisateurs abusifs : tu peux signaler ou bloquer n’importe qui depuis son profil, un message, une story ou une publication, nos modérateurs examinent chaque signalement sous 24 heures, et les contenus ou comptes qui enfreignent ces règles sont supprimés."
    },
    {
      "h": "Ce que tu publies reste à toi",
      "b": "Tes photos, le texte de ton profil et tes messages restent les tiens. Tu nous accordes seulement les autorisations nécessaires au fonctionnement du service : stocker ton contenu, le montrer aux membres concernés et en conserver des sauvegardes. Les publications destinées au fil de la communauté sont examinées avant d'apparaître, et publications comme messages peuvent être lus par nos modérateurs lorsqu'ils sont signalés."
    },
    {
      "h": "Pièces et achats",
      "b": "Certaines fonctions se paient en pièces. Les pièces s’achètent via l’App Store ou Google Play, qui gèrent le paiement ; certaines se gagnent dans l’app (visites quotidiennes, invitations, profil complété). Les pièces ne sont pas de l’argent : elles ne peuvent être ni échangées, ni transférées, ni encaissées, et un remboursement par le store reprend les pièces payées. Le prix en pièces est affiché avant tout débit. Les remboursements suivent la politique du store où tu as acheté. Les pièces sont livrées immédiatement : en les achetant, tu acceptes leur livraison immédiate et reconnais que le droit de rétractation prend fin dès qu’elles sont créditées, sans préjudice de la politique de remboursement du store."
    },
    {
      "h": "Vérification et accès du mahram",
      "b": "Le badge vérifié signifie qu'une personne chez Niyyah a regardé une photo prise en direct à côté de tes photos de profil et y a reconnu la même personne. Il est gratuit et fait partie de l'inscription — il n'est pas vendu. Ce n'est pas une enquête d'antécédents, et ce n'est pas une garantie sur le caractère ou les intentions de qui que ce soit. Si tu invites un mahram, cette personne peut lire les conversations auxquelles tu lui donnes accès — n'invite que quelqu'un dont tu veux vraiment qu'il les lise, et sache que cet accès peut être retiré."
    },
    {
      "h": "Suspension, fermeture et recours",
      "b": "Nous pouvons suspendre ou fermer un compte qui enfreint ces conditions, qui met d'autres membres en danger, ou lorsque la loi nous oblige à agir. Dans la mesure du possible, nous t'expliquerons pourquoi. Tu peux fermer ton compte toi-même à tout moment depuis les Paramètres, ce qui supprime ton profil, tes photos, tes affinités et tes messages. Si tu penses que notre décision est erronée, écris à support@niyyahmarriage.com et un être humain la réexaminera."
    },
    {
      "h": "Limites, modifications et droit applicable",
      "b": "Niyyah est fournie en l'état. Nous faisons de notre mieux pour qu'elle reste sûre et disponible, mais nous ne pouvons pas promettre qu'elle ne connaîtra jamais d'interruption, et nous ne pouvons pas être tenus responsables du comportement d'un membre, dans l'application comme en dehors. Rencontrer quelqu'un en personne relève de ta décision et de ta responsabilité. Nous pouvons mettre ces conditions à jour ; si la modification est importante, nous te préviendrons dans l'application avant son entrée en vigueur. Ces conditions sont régies par le droit estonien. Cela ne te prive pas de la protection des règles impératives de protection des consommateurs du pays où tu vis. Les litiges relèvent des tribunaux d’Estonie (tribunal de comté de Harju, Harju Maakohus), sans préjudice de ton droit, en tant que consommateur, d’agir devant les tribunaux du pays où tu vis."
    }
  ]
}

/** Jezici na kojima pravni tekst postoji (isti kao u aplikaciji). */
export const legalLocales = ['bs', 'en', 'de', 'tr', 'fr', 'id', 'ms', 'ar', 'ur'] as const
export type LegalLocale = (typeof legalLocales)[number]
export const isLegalLocale = (l: string): l is LegalLocale => (legalLocales as readonly string[]).includes(l)

export const legalUi: Record<LegalLocale, { privacy: string; terms: string; updated: string; home: string }> = {
  bs: { privacy: 'Politika privatnosti', terms: 'Uslovi korištenja', updated: 'Ažurirano', home: 'Početna' },
  en: { privacy: 'Privacy Policy', terms: 'Terms of Service', updated: 'Last updated', home: 'Home' },
  de: { privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', updated: 'Zuletzt aktualisiert', home: 'Startseite' },
  tr: { privacy: 'Gizlilik Politikası', terms: 'Kullanım Şartları', updated: 'Son güncelleme', home: 'Ana sayfa' },
  fr: { privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation', updated: 'Dernière mise à jour', home: 'Accueil' },
  id: { privacy: 'Kebijakan Privasi', terms: 'Syarat Layanan', updated: 'Terakhir diperbarui', home: 'Beranda' },
  ms: { privacy: 'Dasar Privasi', terms: 'Terma Perkhidmatan', updated: 'Kemas kini terakhir', home: 'Laman utama' },
  ar: { privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', updated: 'آخر تحديث', home: 'الرئيسية' },
  ur: { privacy: 'پرائیویسی پالیسی', terms: 'شرائط استعمال', updated: 'آخری اپ ڈیٹ', home: 'ہوم' },
}
