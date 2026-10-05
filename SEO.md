# SEO — stanje i šta dalje

Pregled onoga što je urađeno za pronalaženje stranice, i lista onoga što
ostaje. Tvrdnje u člancima i u `public/llms.txt` slijede `CLAUDE.md` —
kad se tamo nešto promijeni (cijene, izlazak u trgovine, opcija
„Upoznavanje"), provjeri i ova dva mjesta.

## Urađeno (oktobar 2026)

**Tehnički**

- Adrese bez `www.` i bez preusmjerenja: canonical, hreflang i sitemap
  pokazuju tačnu adresu koja vraća 200 (`/de`, ne `/de/`).
- Googlebot ostaje na bosanskoj početnoj; ljudi se i dalje prebacuju na
  jezik pregledača (`app/plugins/i18n-bots.client.ts`).
- Brzina na mobilnom: svaki jezik se učitava posebno (glavni JS 1,1 MB →
  199 KB), logo 314 KB → 45 KB, bez prefetcha, font naslova unaprijed.
  LCP 8,9 s → 4,8 s.
- Slika za dijeljenje `og-image.jpg` i ikona bez riječi „dating".
- Pristupačnost 100: svi jezici u podnožju vidljivi, ime dugmeta jezika.
- `public/llms.txt`: sažetak za AI pretraživače (ChatGPT, Perplexity…).

**Sadržaj — vodič**

| Članak | bs | en | de | tr |
|---|---|---|---|---|
| Ko je mahrem | ✓ | ✓ | ✓ | ✓ |
| Da li je upoznavanje preko aplikacije halal | ✓ | ✓ | ✓ | ✓ |
| Pitanja prije braka | ✓ | ✓ | ✓ | ✓ |
| Nikah: uslovi, veli, svjedoci, mehr | ✓ | | | |
| Kako tražiti bračnog druga u islamu | ✓ | | | |
| Roditelji i traženje bračnog druga | ✓ | | | |

Adrese: `/vodic`, `/en/guide`, `/de/ratgeber`, `/tr/rehber`. Landing ima
sekciju „Vodič" prije FAQ-a, a podnožje link na vodič.

## Prije spajanja u `main` — važno

**Vjerski tekstovi trebaju čitanje imama ili teologa.** Članci navode
ajete i hadise sa zbirkom, drže se hanefijskog mezheba i nigdje ne daju
fetvu, ali ih je pisao Claude, ne učenjak. Prije objave neka ih neko
pročita, posebno:

- `app/guide/bs/nikah-uslovi.md` — veli po mezhebima, svjedoci, mehr,
  redoslijed građansko → šerijatsko vjenčanje u BiH
- `app/guide/bs/ko-je-mahrem.md` — spisak mahrema
- `app/guide/bs/kako-traziti-bracnog-druga-u-islamu.md` — istihara

Ako recenzent pristane da mu ime stoji javno, dodaj ga u članak („Pregledao:
…"). Google kod vjerskih tema cijeni stručnost koja se vidi.

## Ostaje na tebi

### 1. Search Console i Bing (prvi dan nakon objave)

1. [search.google.com/search-console](https://search.google.com/search-console)
   → dodaj property tipa **Domain** za `niyyahmarriage.com` (potvrda preko
   DNS zapisa u Cloudflareu).
2. Sitemaps → pošalji `https://niyyahmarriage.com/sitemap_index.xml`.
3. URL Inspection → `https://niyyahmarriage.com/` → „Test live URL" →
   „View tested page": mora biti bosanski tekst, ne engleski.
4. Isto za `/de` i `/vodic/ko-je-mahrem`, pa „Request indexing".
5. [bing.com/webmasters](https://www.bing.com/webmasters) → „Import from
   Google Search Console". Bing hrani i ChatGPT pretragu.

### 2. Provjera ključnih riječi

Klasteri u planu su procjena, ne mjerenje. U Google Keyword Planneru
(besplatno uz Google Ads nalog) provjeri obim za bs/hr/sr, de, en, tr.
Kad prođe 4–6 sedmica, Search Console → Performance pokaže stvarne upite:
upiti s puno prikaza a malo klikova su kandidati za novi članak ili bolji
naslov.

### 3. Sljedeći članci (po redu)

1. Prijevodi na en/de/tr: nikah, traženje bračnog druga, roditelji.
2. **Mehr: šta je, koliko i kada se daje** (bs) — često traženo.
3. **Nikah u Njemačkoj i Austriji** (bs + de) — treba provjeriti pravni dio
   (vjersko vjenčanje bez građanskog nema pravno dejstvo; detalji po
   državi) prije pisanja. Nije napisan jer to nije provjereno.
4. **Kako prepoznati ozbiljnu namjeru** (bs) — povezuje Verified oznaku i
   profil.

Kako dodati članak: tekst u `app/guide/<jezik>/<slug>.md` (format u
`app/utils/markdown.ts`), podaci u `app/guide/registry.ts`. Prijevod dobije
isti `key`. Build pada ako članak u registru nema teksta.

### 4. App Store i Google Play (kad aplikacija izlazi)

Velik dio pretraga za aplikacijom dešava se u trgovini, ne na Googleu.
Prijedlozi (provjeri dužine u App Store Connectu):

| | Naziv (≤30) | Podnaslov (≤30) | Ključne riječi (App Store, ≤100) |
|---|---|---|---|
| bs | Niyyah: Brak s namjerom | Halal upoznavanje za nikah | brak,nikah,muslimani,mahrem,bračni drug,supruga,suprug,islam,vjenčanje,halal |
| en | Niyyah: Muslim Marriage | Halal, with a mahram present | nikah,muslim,marriage,halal,mahram,wali,spouse,islamic,singles,matrimony |
| de | Niyyah: Muslimisch heiraten | Halal, mit Mahram im Gespräch | nikah,muslim,heirat,ehepartner,halal,mahram,islam,partnersuche,ehe |
| tr | Niyyah: Müslüman Evlilik | Helal tanışma, mahrem yanında | nikah,evlilik,müslüman,eş,helal,mahrem,izdivaç,islam,eş bulma |

Riječ „dating" je izostavljena svuda, po briefu. Ona se u trgovinama ipak
mnogo traži — odluka je tvoja.

### 5. Linkovi iz zajednice

Jedan dobar link s poznatog muslimanskog portala vrijedi više od desetina
slabih. Ideje (provjeri kontakte):

- bosanski portali: Preporod, Saff, Akos, Minber — gostujući tekst o
  mahremu ili o pitanjima prije braka, s linkom na vodič
- džematski i omladinski programi u dijaspori (Njemačka, Austrija,
  Švicarska, Skandinavija) — predavanja o braku, gdje vodič može biti
  materijal
- imami i hodže koji drže predavanja o braku — ako im se vodič svidi,
  linkuju ga

Ne kupovati linkove i ne praviti mreže lažnih stranica: Google to kažnjava.

### 6. Kad aplikacija izađe

- `nuxt.config.ts`: `appLaunched = true` i linkovi trgovina.
- `public/llms.txt`: rečenicu „not yet in the App Store…" zamijeni linkovima.
- Instagram/Facebook profili kad postoje → dodaj ih kao `sameAs` u schemu
  (`app/pages/index.vue`).

## Svjesno nije mijenjano

- **Title i meta opis landinga** ostaju kako ih propisuje `CLAUDE.md` §9.
- **FAQ** nije proširen: novi odgovori bi trebali tvrdnje kojih u briefu
  nema; vodič pokriva ta pitanja.
- **31 jezik bez vodiča** ima samo landing — članci samo tamo gdje ih neko
  može održavati.
