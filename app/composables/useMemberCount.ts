/**
 * Koliko Niyyah ima članova (vlasnik, 11.11.2026: „ukupno korisnika, lijepo
 * naglašeno"). Stranica pokazuje broj zaokružen nadolje na desetice, s „+":
 * okrugao broj se ne mijenja sa svakim novim članom, ne pretjeruje, a riječ
 * uz njega uvijek stoji u istom obliku („860+ članova").
 *
 * Ispod praga se ne prikazuje, kao ni broj liste čekanja. Stranica je
 * statična, pa se broj dohvata u pregledaču; dok ne stigne ili ako server ne
 * odgovori, mjesta za njega jednostavno nema.
 */
const FLOOR = 100

export function useMemberCount() {
  const { publicStatsEndpoint } = useRuntimeConfig().public
  const count = useState<number | null>('member-count', () => null)
  const loaded = useState<boolean>('member-count-loaded', () => false)

  onMounted(async () => {
    if (loaded.value || !publicStatsEndpoint) return
    loaded.value = true
    try {
      const res = await $fetch<{ members: number | string }>(publicStatsEndpoint as string)
      const n = Number(res?.members)
      count.value = Number.isFinite(n) ? n : null
    } catch {
      count.value = null
    }
  })

  /** Zaokružen broj (npr. 860), ili `null` ako ga još nema dovoljno. */
  return computed(() => (count.value !== null && count.value >= FLOOR ? Math.floor(count.value / 10) * 10 : null))
}
