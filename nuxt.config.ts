import { existsSync } from 'node:fs'

// Bez `www.` — to je ono što `CNAME` stvarno poslužuje, a `www.` se samo
// preusmjerava na njega.
//
// Odavde ide sve što stranica tvrdi o sebi: `canonical`, `og:url`, svih
// 41 `hreflang`, i sitemap. Dok je ovdje stajao `www.`, svaka od tih
// adresa je pokazivala na host koji vraća 301 na pravi. Google traži da
// `hreflang` veze idu na kanonske adrese do kojih se stiže bez
// preusmjerenja i da budu uzajamne; kad nisu, cijelu grupu jezika
// odbacuje. To znači da četrdeset prijevoda — malajski, indonežanski,
// turski, arapski — nikad nije ni bilo povezano kao verzije iste
// stranice, pa ih pretraga nema razloga ponuditi nikome ko traži na tom
// jeziku. Sitemap je uz to bio „cross-submission": na jednom hostu, a
// nabraja adrese drugog.
const siteUrl = 'https://niyyahmarriage.com'

// Linkovi na Niyyah u trgovinama, npr.
//   https://apps.apple.com/app/niyyah/id1234567890
//   https://play.google.com/store/apps/details?id=com.niyyah.app
const appStoreUrl = ''
const googlePlayUrl = ''

// true: CTA je „Preuzmi Niyyah" + dugmad trgovina. false: lista čekanja.
const appLaunched = false

// Build pada ako se tvrdi da je aplikacija izašla, a linkovi su prazni — to bi
// bila dugmad koja ne vode nigdje. Dok je appLaunched false nema ni dugmadi,
// pa ni šta da pukne: CTA je lista čekanja. Kad se prebaci na true, brana traži
// linkove.
const isBuild = process.argv.some((a) => a === 'build' || a === 'generate')
if (isBuild && appLaunched && (!appStoreUrl || !googlePlayUrl)) {
  throw new Error('Upiši appStoreUrl i googlePlayUrl na vrhu nuxt.config.ts prije builda.')
}

// Ako postoji public/og-image.jpg koristi se on, inače logo (vidi SLIKE.md).
const ogImage = existsSync('public/og-image.jpg') ? '/og-image.jpg' : '/favicon-512.jpg'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  site: {
    url: siteUrl,
    name: 'Niyyah',
  },

  runtimeConfig: {
    public: {
      siteUrl,
      ogImage,
      appLaunched,
      appStoreUrl,
      googlePlayUrl,
      // Lista čekanja: POST { email, locale } → 202. Backend upisuje adresu i
      // prikazuje je u admin portalu; duplikat je uspjeh, ne greška.
      waitlistEndpoint: 'https://api.niyyahmarriage.com/api/waitlist',
      // Broj prijavljenih, za dokaz na stranici. Vraća samo { count }.
      waitlistCountEndpoint: 'https://api.niyyahmarriage.com/api/waitlist/count',
      // Meta pixel za reklame na Facebooku i Instagramu. Nije tajna: svako
      // ko otvori izvor stranice ga vidi. Prazno ga potpuno isključuje.
      metaPixelId: '4603339379933380',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'bs' },
      meta: [
        { name: 'theme-color', content: '#12162b' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      // Za posjetioce bez JavaScripta. Pixel se inače učitava iz dodatka,
      // koji bez JS-a ne postoji; ova slika je jedino što od njega ostane.
      noscript: [
        {
          innerHTML:
            '<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=4603339379933380&ev=PageView&noscript=1">',
          tagPosition: 'bodyClose',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', href: '/favicon-512.jpg' },
      ],
    },
  },

  i18n: {
    baseUrl: siteUrl,
    strategy: 'prefix_except_default',
    defaultLocale: 'bs',
    // Prvih devet su jezici same aplikacije. Ostali su tu zbog reklama i
    // dijaspore: stranica govori jezik posjetioca i kad aplikacija još ne
    // govori, a FAQ mu kaže na kojih devet jezika je aplikacija — da nikome
    // ne obećamo svoj jezik unutra ako ga tamo nema.
    locales: [
      { code: 'bs', language: 'bs-BA', name: 'Bosanski' },
      { code: 'en', language: 'en', name: 'English' },
      { code: 'de', language: 'de', name: 'Deutsch' },
      { code: 'tr', language: 'tr', name: 'Türkçe' },
      { code: 'fr', language: 'fr', name: 'Français' },
      { code: 'id', language: 'id', name: 'Bahasa Indonesia' },
      { code: 'ms', language: 'ms', name: 'Bahasa Melayu' },
      // Pišu se zdesna nalijevo; dir ide u <html> preko useHead u app.vue.
      { code: 'ar', language: 'ar', name: 'العربية', dir: 'rtl' },
      { code: 'ur', language: 'ur', name: 'اردو', dir: 'rtl' },

      // Dodani zbog reklama: susjedstvo, dijaspora i velike muslimanske
      // zajednice koje ne govore ni jedan od gornjih.
      { code: 'sq', language: 'sq', name: 'Shqip' },
      { code: 'sv', language: 'sv', name: 'Svenska' },
      { code: 'nl', language: 'nl', name: 'Nederlands' },
      { code: 'es', language: 'es', name: 'Español' },
      { code: 'it', language: 'it', name: 'Italiano' },
      { code: 'ru', language: 'ru', name: 'Русский' },
      { code: 'bn', language: 'bn', name: 'বাংলা' },
      { code: 'hi', language: 'hi', name: 'हिन्दी' },
      { code: 'fa', language: 'fa', name: 'فارسی', dir: 'rtl' },
      { code: 'az', language: 'az', name: 'Azərbaycanca' },
      { code: 'uz', language: 'uz', name: 'O‘zbekcha' },
      { code: 'sw', language: 'sw', name: 'Kiswahili' },
      { code: 'so', language: 'so', name: 'Soomaali' },
      { code: 'ml', language: 'ml', name: 'മലയാളം' },
      { code: 'ta', language: 'ta', name: 'தமிழ்' },
      { code: 'tl', language: 'tl', name: 'Filipino' },
      { code: 'ku', language: 'ku', name: 'Kurdî' },
      { code: 'ky', language: 'ky', name: 'Кыргызча' },
      { code: 'ha', language: 'ha', name: 'Hausa' },
      { code: 'ps', language: 'ps', name: 'پښتو', dir: 'rtl' },
      { code: 'jv', language: 'jv', name: 'Basa Jawa' },
      { code: 'su', language: 'su', name: 'Basa Sunda' },
      { code: 'gu', language: 'gu', name: 'ગુજરાતી' },
      { code: 'kk', language: 'kk', name: 'Қазақша' },
      { code: 'pa', language: 'pa', name: 'پنجابی', dir: 'rtl' },
      { code: 'sd', language: 'sd', name: 'سنڌي', dir: 'rtl' },
      { code: 'te', language: 'te', name: 'తెలుగు' },
      { code: 'ug', language: 'ug', name: 'ئۇيغۇرچە', dir: 'rtl' },
      { code: 'tg', language: 'tg', name: 'Тоҷикӣ' },
      { code: 'am', language: 'am', name: 'አማርኛ' },
      { code: 'wo', language: 'wo', name: 'Wolof' },
      { code: 'ckb', language: 'ckb', name: 'کوردی', dir: 'rtl' },
    ],

    // Jezik pretraživača odlučuje, ali samo na korijenu.
    //
    // `redirectOn: 'root'` znači da reklama koja vodi na `/` odvede čovjeka
    // na njegov jezik, a direktan link na `/de` ostane njemački — bez ovoga
    // bi svaki dijeljeni link vodio na jezik onoga ko ga je otvorio, ne na
    // jezik koji je dijeljen.
    //
    // Kolačić pamti ručni izbor, pa padajući meni nadjača pretraživač i
    // ostane nadjačan. Stranica je statična (GitHub Pages), pa se ovo
    // odlučuje u pregledaču nakon učitavanja, ne na serveru.
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'niyyah_lang',
      cookieCrossOrigin: true,
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'bs',
    },
    vueI18n: './i18n.config.ts',
  },

  fonts: {
    defaults: {
      subsets: ['latin', 'latin-ext'],
    },
    families: [
      { name: 'Gloock', provider: 'google', weights: [400] },
      // Jost nosi i ćirilicu; bez tog podskupa ruski bi pao na sistemski font
      // i stranica bi na ruskom izgledala kao tuđa.
      { name: 'Jost', provider: 'google', weights: [400, 500], subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'] },
      { name: 'Amiri', provider: 'google', weights: [400], subsets: ['arabic'] },
      // Devanagari i bengalsko pismo: Gloock i Jost ih ne pokrivaju.
      { name: 'Noto Serif Devanagari', provider: 'google', weights: [400, 500], subsets: ['devanagari'] },
      { name: 'Noto Serif Bengali', provider: 'google', weights: [400, 500], subsets: ['bengali'] },
      { name: 'Noto Serif Malayalam', provider: 'google', weights: [400, 500], subsets: ['malayalam'] },
      { name: 'Noto Serif Tamil', provider: 'google', weights: [400, 500], subsets: ['tamil'] },
      { name: 'Noto Serif Gujarati', provider: 'google', weights: [400, 500], subsets: ['gujarati'] },
      { name: 'Noto Serif Telugu', provider: 'google', weights: [400, 500], subsets: ['telugu'] },
      { name: 'Noto Serif Ethiopic', provider: 'google', weights: [400, 500], subsets: ['ethiopic'] },
      // Za bilješku uz telefon — jedino mjesto gdje se koristi rukopis.
      { name: 'Caveat', provider: 'google', weights: [500] },
    ],
  },

  sitemap: {
    autoI18n: true,
  },

  nitro: {
    prerender: {
      // `/de` se piše kao de.html, ne de/index.html. Iz podfoldera hosting
      // vraća /de → 308 → /de/, a canonical i hreflang kažu /de — Google bi
      // tako na svakom jeziku dobio adresu koja se preusmjerava.
      autoSubfolderIndex: false,
      routes: ['/', '/en'],
      crawlLinks: true,
    },
  },
})
