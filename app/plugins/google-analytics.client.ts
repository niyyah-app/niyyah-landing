/**
 * Google Analytics (GA4).
 *
 * Ista vrata kao Meta pixel: ništa se ne učitava dok pristanak ne postoji, ni
 * sam `gtag.js`, jer i to učitavanje odnese Googleu IP adresu posjetioca. Van
 * EU pristanak dolazi sam od sebe, pa se GA pali odmah; u EU čeka klik na
 * kartici, i pali se istog trena, bez osvježavanja.
 *
 * Promjene rute (jezik, druga adresa) GA4 sam broji kao nove stranice preko
 * „Enhanced measurement" → „Page changes based on browser history events",
 * pa se `page_view` ovdje ne šalje ručno — bilo bi dvostruko.
 *
 * ID stoji u konfiguraciji, ne ovdje. Prazan ga potpuno isključuje.
 */
export default defineNuxtPlugin(() => {
  const { gaMeasurementId } = useRuntimeConfig().public
  if (!gaMeasurementId) return

  const { state, decide } = useConsent()
  let started = false

  function start() {
    if (started) return
    started = true

    const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
    w.dataLayer = w.dataLayer || []
    // gtag.js čita `arguments` objekt, ne niz — zato `function`, ne strelica.
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments)
    }
    w.gtag('js', new Date())
    w.gtag('config', gaMeasurementId)

    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
    document.head.appendChild(s)
  }

  watch(state, (value) => {
    if (value === 'granted') start()
  }, { immediate: true })

  decide()
})
