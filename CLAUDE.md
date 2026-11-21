# Niyyah — brief za landing stranicu

> Ovaj fajl je izvor istine za landing stranicu. Sve tvrdnje ispod su provjerene
> u kodu mobilne aplikacije (Flutter + Laravel API) u septembru 2026. Ako nešto
> nije ovdje, ne izmišljaj — pitaj. Stavke označene **[POTVRDI]** još čekaju
> odluku vlasnika i ne smiju na stranicu dok se ne potvrde.

---

## 1. Šta je Niyyah, u jednoj rečenici

Niyyah je mobilna aplikacija (iOS i Android) u kojoj muslimani traže bračnog
druga, s porodicom uz sebe i s granicama koje su ugrađene u samu aplikaciju.

**Ime:** *niyyah* / *nijjet* znači **namjera**. Cijeli brend stoji na toj riječi:
ovdje se ne upoznaje radi zabave, nego s namjerom braka.

**Postojeći tagline iz aplikacije** (koristi ga, dobar je):
> **Brak, tražen s namjerom.**

**Misija, riječima tima (iz ekrana "O Niyyah"):**
> Niyyah postoji za ljude koji traže bračnog druga, a ne razonodu. Sve ovdje je
> građeno oko te jedne svrhe: profili koji govore nešto stvarno, razgovori u
> kojima porodica može biti prisutna, i granice koje drže bez da ih iko mora
> čuvati. Mi smo mali tim koji gradi za vlastitu zajednicu, i draže nam je da
> aplikacija bude tiha i pouzdana nego glasna i prometna.

"Napravljeno s pažnjom u Bosni i Hercegovini."

---

## 2. Za koga je

**Primarna publika:** muslimani i muslimanke od ~20 do ~40 godina, u BiH,
regiji i dijaspori (Njemačka, Austrija, Skandinavija, Turska…), koji ozbiljno
žele brak i žele ga tražiti na način koji se slaže s njihovom vjerom.

**Sekundarna publika (važna!):** roditelji, braća, amidže/dajdže — ljudi koji
su skeptični prema "aplikacijama za upoznavanje". Landing mora i njih uvjeriti,
jer oni često odlučuju hoće li sestra/kćerka uopće instalirati aplikaciju.

### Šta ih boli (koristi njihove riječi)

- Obične dating aplikacije su napravljene da skrolaš, ne da se oženiš/udaš.
- Ne znaš ko je ozbiljan, a ko je tu "da vidi".
- Razgovori u kojima se osjećaš neugodno i koje ne bi pokazao/la roditeljima.
- Sestre: strah od uznemiravanja, lažnih profila, i od toga da je sama u tome.
- Upoznavanje preko rodbine i poznanika je sporo, uski krug, i puno pritiska.
- Opšte muslimanske aplikacije često su prevedeni američki proizvodi koji ne
  razumiju naš jezik, mezheb, običaje ni dijasporu.

### Prigovori koje landing mora srušiti

| Prigovor | Odgovor (iz stvarnih funkcija) |
|---|---|
| "Aplikacija za upoznavanje je haram / nije za nas." | Halal po dizajnu: samo suprotni spol, razgovor tek na obostrani interes (prije toga jedna kratka poruka uz lajk), mahrem u razgovoru, moderirana zajednica. |
| "Šta će reći porodica?" | Porodica može biti *u* razgovoru — mahrem portal. |
| "Bojim se lažnih profila i uznemiravanja." | Provjera fotografije, verifikacija telefona/emaila, Verified oznaka, prijave koje čitaju stvarni moderatori, obostrano blokiranje. |
| "Bojim se za privatnost / lokaciju." | Tačna lokacija se nikad ne prikazuje; mapa se može isključiti; Discover se može pauzirati. |
| "Opet neki koji samo dopisuju bez namjere." | Namjera je na svakom profilu; pitanja prije razgovora filtriraju neozbiljne. |

---

## 3. Velika ideja (pozicioniranje)

**Niyyah nije dating aplikacija s islamskom bojom. To je aplikacija za brak u
kojoj su šerijatske granice ugrađene u funkcije, a ne ostavljene savjesti.**

Tri stuba (koriste se kroz cijelu stranicu):

1. **Namjera** — svi su ovdje zbog braka, i to se vidi na profilu.
2. **Porodica** — mahrem može biti prisutan; ništa nije skriveno od onih čije
   mišljenje znači.
3. **Granice** — halal po dizajnu: aplikacija sama drži granice, ne moraš ih ti
   čuvati.

Poređenje koje radi (koristiti oprezno, bez imenovanja konkurenata):
> Ostale aplikacije mjere uspjeh vremenom koje provedeš u njima. Mi ga mjerimo
> nikahom nakon kojeg ti više ne trebamo.

---

## 4. Glas i ton

- **Miran, topao, dostojanstven.** "Tiha i pouzdana, ne glasna i prometna."
- **Bez uzvičnika.** Bez lažne hitnosti, bez "revolucionarno", "najbolja".
- **Obraćanje na "ti"**, kao u aplikaciji. Rodno uključivo gdje treba
  (siguran/na, došao/la) — ali na landingu radije preformuliši rečenicu da
  kosa crta ne treba.
- **Islamski izrazi prirodno, bez objašnjavanja na silu:** Esselamu alejkum,
  nijjet, nikah, mahrem, din, ahlak, berićet, in šā Allāh. Mahrem objasni jednom
  (vidi FAQ), ostalo publika zna.
- **Jezik:** bosanski, ijekavica (kao aplikacija). Termini iz aplikacije:
  *Otkrivaj*, *Podudaranja*, *Zajednica*, *Poruke*, *Pitanje dana*, *Situacije*,
  *Pitanja prije razgovora*, *Mahrem portal*, *Verified oznaka*, *Boost*.

**Ne koristi:** "dating", "swipe", "hookup", "chemistry", "flert", "spoj",
"match" kao glavni pojam (u aplikaciji je "podudaranje"; "match" može usput),
"srodna duša" (zvuči kao Hollywood, ne kao nikah).

---

## 5. Funkcije → prednosti (sve provjereno u kodu)

### 5.1 Halal po dizajnu
- **Otkrivaj prikazuje samo suprotni spol.** Muškarci vide samo žene, žene samo
  muškarce — to je pravilo servera, ne filter koji se može isključiti.
- **Razgovor se otvara tek na obostrani interes.** Dok se oboje ne lajkate,
  razgovor je zaključan.
- **Jedna kratka poruka uz lajk** (ispravljeno 21.11.2026 — ranija verzija je
  pogrešno tvrdila da poruka čeka do spoja): uz lajk se može poslati jedna
  kratka poruka (coinsi ili kredit iz pozivnica); druga osoba je čita odmah i
  besplatno, a odgovara samo lajkom. Broj, @korisničko ime ili link u njoj ne
  prolaze; sestra koja s novima razgovara samo uz mahrema je ne dobija.
  Na stranici nikad ne pisati „poruke tek na obostrani interes”.
- Iz misije: "Nema prevlačenja radi zabave, nema anonimnog razgledanja suprotnog
  spola, nema funkcija koje imaju smisla samo izvan braka."

**Prednost:** ne moraš se braniti od nepoželjnih poruka — one ne mogu ni doći.

### 5.2 Mahrem u razgovoru (glavni diferencijator — hero materijal)
- Sestra u postavkama uključi **"Zahtijevaj mahrema"** i pozove do **3 mahrema**:
  otac, brat, amidža/dajdža, staratelj ili drugi mahrem.
- Pozivnica ide e-mailom; mahrem je prihvata u aplikaciji.
- Mahrem dobija **Mahrem portal**: vidi njene razgovore i podudaranja, ali samo
  čita — ne može pisati iz portala i ne koristi funkcije za upoznavanje.
- Jedan mahrem može paziti na više osoba (npr. otac na dvije kćerke).
- Funkcija je dostupna ženskim profilima.

**Prednost za nju:** nisi sama; porodica je tu bez da ti stoji nad ramenom.
**Prednost za porodicu:** znate s kim razgovara i kako — bez tajni.
**Prednost za njega:** jasan znak da je ozbiljna i da je porodica uključena.

### 5.3 Pitanja prije razgovora
- Uključiš opciju i postaviš **do 3 svoja pitanja**.
- Nakon podudaranja, druga osoba prvo odgovara na tvoja pitanja.
- Ti pročitaš odgovore i **tek onda odlučuješ** hoće li se razgovor otvoriti
  ("Sviđa mi se" / "Ne sviđa mi se").

**Prednost:** o onome što ti je najvažnije (namaz, hidžab, selidba, djeca…)
saznaš prije prve poruke, ne nakon tri sedmice dopisivanja.

### 5.4 Profil koji govori nešto stvarno
Pored slika i opisa, profil nosi ono o čemu se razgovara prije nikaha:
- Odnos prema vjeri (praktikujem / trudim se / trenutno ne praktikujem)
- **Namaz** (redovno, ponekad, rijetko…), **mezheb** (hanefijski, šafijski,
  malikijski, hanbelijski, nije bitno), **hidžab** (nosim / ne nosim / planiram)
- **Vremenski okvir za brak** (odmah, unutar godinu dana, 1–2 godine, nema žurbe)
- **Selidba** (spreman/na, ne mogu, otvoren/a za razgovor)
- **Djeca** (želim, ne želim, već imam, nisam siguran/na)
- Pušenje, obrazovanje, zanimanje, maternji jezik, visina, interesi
- **Promptovi:** "Vjera u vezi znači…", "Šta tražiš u partneru?", "Kako provodiš
  vikend?"
- **Situacije:** odgovori na stvarne scenarije u 7 oblasti — brak, komunikacija,
  rješavanje sukoba, porodica, vjera, finansije, roditeljstvo. Drugi vide *kako
  razmišljaš*, ne samo kako izgledaš.
- **Postotak usklađenosti** na svakoj kartici (zajednički interesi, odnos prema
  vjeri i namjera).

**Prednost:** manje nagađanja, manje izgubljenog vremena, brže do "da" ili "ne".

### 5.5 Otkrivaj
- Kartice ili **mapa** ljudi u blizini (samo približno područje).
- Filteri: dob, grad, odnos prema vjeri, klanja, ne puši, želi djecu, samo
  verifikovani profili.

### 5.6 Sigurnost i privatnost
- **Tvoja tačna lokacija se nikad ne prikazuje.** Mapa pokazuje samo približno
  područje, i to samo dok to sam/a uključiš. Isključiš — nestaješ s mape.
- **Pauziraj Otkrivaj** — skloni profil bez brisanja; podudaranja i razgovori
  ostaju.
- **Provjera fotografija pri uploadu:** mora biti jasno lice, jedna osoba, nije
  mutno, lice nije prekriveno. Skrivene metapodatke (EXIF, npr. GPS iz slike)
  sistem uklanja.
- **Verifikacija** broja telefona (SMS kod) ili e-maila prije Otkrivaj.
- **Verified oznaka** — jednokratno, uz kratku provjeru da si osoba sa slika.
- **Blokiranje djeluje u oba smjera** — nestajete jedno drugom iz aplikacije.
- **Prijave čitaju stvarni moderatori** (poseban moderatorski tim s alatima za
  suspenziju i zabranu).
- **Otključavanje otiskom/licem** — otisak nikad ne napušta tvoj uređaj. (Detalj
  za dušu: na ekranu za otključavanje stoji ajet El-Kijame 75:3–4 — o Allahu koji
  može sastaviti i jagodice prstiju.)
- "Tvoja privatnost nije proizvod" — nikad ne prodajemo tvoje podatke.

### 5.7 Zajednica (moderirana)
- Feed objava: tekst, slika, anketa, citat (hadis, ajet), pitanje.
- **Svaka objava prolazi pregled moderatora prije nego se pojavi.**
- **Pitaj braću / Pitaj sestre** — odvojeni prostori koje vidi samo jedan spol.
- **Anonimno objavljivanje** ("Anonimna sestra", "Anonimni brat") za pitanja
  koja se teško postavljaju pod imenom.
- Kategorije: brak, odnosi, porodica, vjera, lični rast, savjeti, priče, pitanja.
- Reakcije koje nagrađuju korisnost, ne ego: *Korisno, Ima smisla, Inspirativno,
  Promišljeno*.
- Nivoi doprinosa (Novi član → Saradnik → Pouzdan → Mentor) i rang lista
  najkorisnijih.
- **Priče**: 24 sata ili "jedan pregled"; vidljivost cijeloj zajednici ili samo
  podudaranjima; nema javnih komentara.

**Prednost:** mjesto gdje se uči o braku prije braka — pitaš, čitaš iskustva,
bez komentara ispod kojih se ne bi potpisao/la.

### 5.8 Svaki dan nešto za srce
- **Pitanje dana** na početnoj — jedno pitanje o braku i vrijednostima, vidiš
  koliko je ljudi odgovorilo.
- **Pratilac** — nježni podsjetnici bez pritiska ("Ne žuri s upoznavanjem.
  Možeš pogledati profil prije nego odlučiš šta ti odgovara.").
- Pozdrav "Esselamu alejkum" i poruka: "Njeguj srce — svaki iskren korak je rast."

### 5.9 Na tvom jeziku
Aplikacija, e-mailovi i obavijesti na **9 jezika**: bosanski, engleski,
njemački, turski, arapski, indonežanski, urdu, malajski i francuski (arapski i
urdu zdesna nalijevo). Hrvatski i srpski uređaji automatski dobijaju bosanski.
Za dijasporu je ovo velika stvar — spomenuti.

### 5.10 Podrška u aplikaciji
Tiketi direktno u aplikaciji, odgovor stiže tu gdje si ga postavio/la.

---

## 6. Besplatno i Premium

**Besplatno (provjereno):** profil, Otkrivaj, **20 lajkova dnevno**, **1 uvodna
poruka dnevno**, podudaranja i neograničen razgovor s podudaranjima, mahrem,
pitanja prije razgovora, zajednica, priče (objava i gledanje), Pitanje dana.

**Premium otključava:**
- ko te je lajkao
- neograničene lajkove
- neograničene uvodne poruke iz Otkrivaj
- dodatne filtere
- odgovaranje na priče u zajednici

**Dodatno, jednokratno:** Verified oznaka, Boost profila (tvoj profil prvi u
Otkrivaj na određeno vrijeme; jedan besplatan boost povremeno, paketi 1/5/10).

**Cijene — [POTVRDI]:** u kodu stoji 1 dan 1,99 €, mjesec 9,99 €, godina
59,99 € (≈5 €/mj). Tekst u aplikaciji kaže "godišnji plan izlazi 2,50 €
mjesečno — upola jeftinije od mjesečnog", što se s tim ne slaže. **Dok se ne
potvrdi, landing ne navodi iznose** — samo "Besplatno za početak, Premium kad
poželiš više."

Poruka za landing: **Sve što čini Niyyah halal — mahrem, pitanja prije
razgovora, zaključan chat, moderacija — besplatno je za svakoga.** Premium
samo ubrzava. (Jako dobar argument povjerenja — ne naplaćujemo sigurnost.)

---

## 7. NE tvrditi na landingu (zamke)

Ovo postoji u starim tekstovima ili dizajnima, ali **nije tačno ili nije aktivno**:

- ❌ "Fotografije su vidljive samo podudaranjima" — **netačno**, profilne slike
  se vide u Otkrivaj.
- ❌ Večernji zikr, dnevna refleksija s ajetom, "Niyyah znak", Rulet srca,
  igre na početnoj (Bračni dvoboj, Ovo ili Ono, Bračni sud…), "Niz za brak" —
  **nije u aplikaciji** (stari, uklonjeni ekrani).
- ❌ "Gold" plan, potvrde čitanja — ne postoje.
- ❌ "10× više podudaranja", "11× više pregleda" i slični brojevi — nisu mjereni.
- ❌ Izmišljeni brojevi korisnika, brakova, recenzije i citati korisnika. Dok
  nema stvarnih — sekcija sa svjedočanstvima se ne pravi.
- ❌ "Svaki profil ručno pregledan" — **[POTVRDI]** da li tim zaista pregleda
  svaki profil prije nego postane vidljiv.
- ❌ Push obavijesti kao funkcija — tehnički spremne, ali još nisu uključene.
- ❌ **Kur'an, sufara, provjera islamskog znanja** — **[POTVRDI]**, u kodu ne
  postoji (vidi pitanja na kraju).
- ⚠️ Namjera pri registraciji ima tri opcije: *brak*, *ozbiljna veza* i
  *upoznavanje*. Ne pisati "svi su ovdje isključivo za brak" dok se to ne
  riješi — pisati "građeno za brak".

---

## 8. Predložena struktura stranice i copy

Primarni CTA: **preuzimanje aplikacije** (App Store / Google Play).
**[POTVRDI]** Ako aplikacija još nije u trgovinama, CTA je lista čekanja
("Javi mi kad Niyyah krene"), a sve ostalo ostaje isto.

### 8.1 Hero

**Naslov — varijante:**
- A: **Brak, tražen s namjerom.** — postojeći tagline, kratak, nosi ime brenda.
  *Preporuka.*
- B: **Upoznaj budućeg supružnika, a porodica neka bude uz tebe.** — odmah
  pokazuje glavni diferencijator (mahrem).
- C: **Za one koji traže nikah, ne zabavu.** — polarizira, jasno filtrira publiku.

**Podnaslov:**
> Niyyah je aplikacija za muslimane koji ozbiljno traže bračnog druga. Razgovor
> se otvara tek na obostrani interes; uz lajk možeš poslati jednu kratku poruku.
> Mahrem može biti u razgovoru, a granice drži aplikacija, ne ti.

**CTA:** "Preuzmi Niyyah" · sekundarni link: "Kako funkcioniše mahrem →"
**Ispod CTA (mikrocopy):** "Besplatno. Na bosanskom i još 8 jezika."
**Vizual:** telefon s karticom profila (namaz, mezheb, vremenski okvir za brak,
postotak usklađenosti) — ne fotografija para koji se grli.

### 8.2 Problem (PAS)
**Naslov:** Aplikacije za upoznavanje nisu pravljene za brak.
> Pravljene su da skrolaš. Beskonačne kartice, ljudi bez jasne namjere,
> poruke koje ne bi pokazao/la roditeljima. A upoznavanje preko rodbine je
> sporo i uskog kruga. Između ta dva svijeta nije bilo ničeg za nas.

### 8.3 Tri stuba
1. **Namjera na prvom mjestu** — Svaki profil kaže šta osoba traži i kada.
   Vremenski okvir za brak, djeca, selidba — prije prve poruke.
2. **Porodica, ne sama** — Sestra može pozvati oca, brata ili staratelja da
   bude u njenim razgovorima.
3. **Halal po dizajnu** — Samo suprotni spol. Razgovor tek na obostrani interes, uz lajk jedna kratka poruka.
   Zajednica koju pregledaju moderatori.

### 8.4 Spotlight: Mahrem (najveća sekcija)
**Naslov:** Ništa skriveno od onih čije mišljenje znači.
> Uključi "Zahtijevaj mahrema" i pozovi do tri osobe od povjerenja — oca,
> brata, amidžu ili dajdžu, staratelja. Oni vide tvoje razgovore u Mahrem
> portalu i ne mogu pisati ni upoznavati. Samo su tu — kao što bi bili i
> uživo.

Mikro-blok za porodicu: **"Roditelji, ovo je za vas."** — 2–3 rečenice koje
direktno odgovaraju ocu/majci. Tu je realna konverzija.

### 8.5 Kako funkcioniše (4 koraka)
1. **Napravi profil s namjerom** — vjera, namaz, planovi za brak, tvoje riječi.
2. **Otkrivaj** — ljudi koji dijele tvoje vrijednosti, uz postotak usklađenosti.
3. **Obostrani interes otvara razgovor** — uz tvoja pitanja prije prve poruke.
4. **Porodica je uz tebe** — mahrem u razgovoru, kad god to želiš.

### 8.6 Pitanja prije razgovora
**Naslov:** Pitaj ono što je važno — prije prve poruke.
> Postavi do tri pitanja. Nakon podudaranja druga osoba prvo odgovori, ti
> pročitaš i odlučiš hoće li se razgovor otvoriti. Bez tri sedmice dopisivanja
> da bi saznao/la da se ne slažete oko osnovnog.

### 8.7 Profil koji govori nešto stvarno
Vizual kartice + lista polja (vidi 5.4) + Situacije.
**Naslov:** Upoznaj kako razmišlja, ne samo kako izgleda.

### 8.8 Sigurnost i privatnost
**Naslov:** Tvoja privatnost nije proizvod.
Ikonice: tačna lokacija nikad · provjera fotografija · Verified oznaka ·
stvarni moderatori · obostrano blokiranje · otključavanje otiskom.

### 8.9 Zajednica
**Naslov:** Mjesto da učiš o braku prije braka.
Pitaj braću / Pitaj sestre, anonimna pitanja, moderirane objave.

### 8.10 Jezici i dijaspora
**Naslov:** Na tvom jeziku, gdje god da si.
9 jezika — bosanski, njemački, turski, arapski, engleski…

### 8.11 Besplatno / Premium
**Naslov:** Ono što te čuva je besplatno.
> Mahrem, pitanja prije razgovora, zaključan chat i moderacija dostupni su
> svima. Premium samo dodaje: vidi ko te lajkao, neograničeni lajkovi i uvodne
> poruke, dodatni filteri.

### 8.12 O nama
"Mali tim koji gradi za vlastitu zajednicu. Napravljeno s pažnjom u Bosni i
Hercegovini." — kratko, iskreno, bez korporativnog tona.

### 8.13 FAQ (odgovori već postoje u aplikaciji — prenijeti skraćeno)
1. Po čemu se Niyyah razlikuje od drugih aplikacija za upoznavanje?
2. Šta je mahrem i kako ga dodajem?
3. Da li je Niyyah halal? *(novo — odgovoriti funkcijama, ne fetvom; ne tvrditi
   da je aplikacija "odobrena" od neke institucije ako nije)*
4. Šta su pitanja prije razgovora?
5. Ko može vidjeti moju lokaciju?
6. Kako se štitite od lažnih profila?
7. Šta je besplatno, a šta Premium? Kako otkazujem?
8. Mogu li privremeno sakriti profil?
9. Na kojim jezicima je aplikacija?

### 8.14 Završni CTA
**Naslov:** Kreni s nijjetom.
> Napravi profil i upoznaj ljude koji ozbiljno žele izgraditi nešto stvarno.
**CTA:** "Preuzmi Niyyah" (+ bedževi App Store / Google Play)

### CTA varijante
- **Preuzmi Niyyah** — jasno, preporuka za primarni.
- **Napravi svoj profil** — kad je fokus na početku puta.
- **Započni s nijjetom** — brendirano, za završni blok.
- **Javi mi kad krene** — samo za pre-launch listu čekanja.
- Izbjegavati: "Registruj se", "Saznaj više", "Klikni ovdje".

---

## 9. SEO

- **Title:** Niyyah — Halal aplikacija za pronalazak bračnog druga
- **Meta description:** Niyyah je aplikacija za muslimane koji traže brak.
  Razgovor tek na obostrani interes (uz lajk jedna kratka poruka), mahrem u razgovoru i moderirana zajednica.
  Besplatno, na bosanskom i još 8 jezika.
- **Ključne fraze:** halal upoznavanje, muslimanska aplikacija za brak, bračni
  drug musliman, upoznavanje za nikah, mahrem, muslimani BiH dijaspora.
- Stranica bi kasnije trebala imati jezičke verzije (de, tr, en) s hreflang.

---

## 10. Vizualni smjer (sugestija, ne pravilo)

- Aplikacija ima "luxury" auth UI i više tema (svijetle i tamne). Landing treba
  biti smiren, elegantan, s puno prostora — ne šaren kao tipične dating stranice.
- Nema fotografija parova u zagrljaju, ruku koje se drže i sl. Radije: ekrani
  aplikacije, apstraktni islamski geometrijski motivi, topli neutralni tonovi.
- Fotografije ljudi (ako ih ima) — pristojno odjeveni, pojedinačno, prirodno.

---

## 11. Otvorena pitanja za vlasnika

1. **Kur'an / sufara / islamsko znanje** — u kodu ne postoji ništa od toga. Je
   li to planirana funkcija (npr. nivo učenja Kur'ana na profilu, kviz znanja,
   provjera sufare)? Dok nije u aplikaciji, ne ide na landing.
2. **Status objave** — je li aplikacija već u App Storeu / Google Playu? (Android
   paket još nosi privremeni ID.) Od toga zavisi CTA: preuzimanje ili lista
   čekanja.
3. **Cijene** — koja je tačna cijena mjesečnog i godišnjeg plana?
4. **Pregled profila** — pregleda li tim svaki novi profil ručno?
5. **Opcija "Upoznavanje"** pri registraciji — ostaje li? Ako se ukloni, landing
   može tvrđe reći "samo za brak".
6. **Primarno tržište i jezik landinga** — BiH na bosanskom kao prva verzija, pa
   njemački/engleski za dijasporu?
7. **Dokazi** — ima li beta korisnika, citata ili brojki koje smijemo koristiti?
