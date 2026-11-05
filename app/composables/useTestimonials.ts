/**
 * Mišljenja članova sa servera (vlasnik, 5.11.2026).
 *
 * Server vraća samo ono što je osoblje odobrilo i za šta je član izričito
 * dao pristanak: ime (prva riječ), zamućenu sliku, ocjenu, tekst i datum.
 * Stranica je statična, pa se spisak dohvata u pregledaču nakon učitavanja;
 * dok ne stigne — ili ako je prazan, ili server ne odgovori — sekcije nema.
 * Član koji povuče pristanak nestaje sa servera odmah, pa i odavde pri
 * sljedećem učitavanju.
 */
export interface Testimonial {
  first_name: string
  rating: number
  body: string
  photo_url: string | null
  date: string | null
}

/** Koliko najviše kartica stoji na stranici. */
const LIMIT = 6

export function useTestimonials() {
  const { testimonialsEndpoint } = useRuntimeConfig().public
  const items = useState<Testimonial[]>('testimonials', () => [])
  const loaded = useState<boolean>('testimonials-loaded', () => false)

  async function load() {
    if (loaded.value || !testimonialsEndpoint) return
    loaded.value = true
    try {
      const res = await $fetch<{ data?: Testimonial[] }>(testimonialsEndpoint as string)
      items.value = (res?.data ?? [])
        .filter((t) => t && typeof t.body === 'string' && t.body.trim() !== '' && t.rating >= 1 && t.rating <= 5)
        .slice(0, LIMIT)
    } catch {
      // Ukras, ne sadržaj: bez odgovora sekcije jednostavno nema.
      items.value = []
    }
  }

  onMounted(load)

  return { items }
}
