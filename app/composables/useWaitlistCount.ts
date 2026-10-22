/**
 * Koliko ih već čeka.
 *
 * Dokaz da iza stranice ima ljudi — ali samo kad ih stvarno ima. Ispod praga
 * se broj ne prikazuje: „troje već čeka" je slabija reklama od nikakve, a
 * izmišljati broj ne dolazi u obzir, jer bi se prvi dan nakon pokretanja
 * vidjelo da ne stoji.
 *
 * Stranica je statična, pa se broj dohvata u pregledaču nakon učitavanja.
 * Dok ne stigne, nema ni praznog mjesta ni treperenja — jednostavno ga nema.
 */
const FLOOR = 25

export function useWaitlistCount() {
  const { waitlistCountEndpoint } = useRuntimeConfig().public
  // useState: jedan dohvat za sve forme na stranici, ne jedan po formi.
  const count = useState<number | null>('waitlist-count', () => null)
  const loaded = useState<boolean>('waitlist-count-loaded', () => false)

  async function load() {
    if (loaded.value || !waitlistCountEndpoint) return
    loaded.value = true
    try {
      const res = await $fetch<{ count: number | string }>(waitlistCountEndpoint)
      // Server je jedno vrijeme slao broj kao tekst ("267"); prihvati oboje.
      const n = Number(res?.count)
      count.value = Number.isFinite(n) ? n : null
    } catch {
      // Broj je ukras, ne sadržaj: ako ne stigne, stranica ništa ne gubi.
      count.value = null
    }
  }

  onMounted(load)

  /** Broj koji se smije pokazati, ili `null` ako ga još nema dovoljno. */
  const shown = computed(() => (count.value !== null && count.value >= FLOOR ? count.value : null))

  /** Nakon vlastite prijave čovjek vidi i sebe u broju. */
  function increment() {
    if (count.value !== null) count.value += 1
  }

  return { shown, increment }
}
