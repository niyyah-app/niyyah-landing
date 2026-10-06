/**
 * Robot ostaje na jeziku adrese koju je otvorio.
 *
 * Na `/` stranica prebacuje čovjeka na jezik njegovog pregledača (vidi
 * `detectBrowserLanguage` u nuxt.config.ts) — zbog reklama. Googlebot
 * renderuje stranicu s `en-US`, pa bi i njega `/` odvelo na `/en`, i bosanska
 * početna nikad ne bi ušla u indeks. Jezičke verzije Google nalazi preko
 * hreflanga, ne preko preusmjeravanja.
 *
 * Robotu zato jezik pregledača ostaje prazan: detekcija nema šta da nađe, i
 * stranica ostaje na jeziku adrese. Robot vidi istu stranicu kao čovjek s
 * bosanskim pregledačem — nije to posebna verzija za tražilice, samo izostaje
 * skok na drugi jezik.
 */
const BOT = /bot|crawl|spider|slurp|lighthouse|inspectiontool|facebookexternalhit|embedly|preview/i

export default defineNuxtPlugin({
  name: 'niyyah:i18n-bots',
  enforce: 'pre',
  setup() {
    if (!BOT.test(navigator.userAgent)) return

    Object.defineProperty(navigator, 'languages', { get: () => [], configurable: true })
  },
})
