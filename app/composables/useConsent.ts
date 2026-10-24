/**
 * Pristanak na mjerenje reklama.
 *
 * Pixel je alat za reklamiranje, ne dio stranice, pa se ne učitava dok
 * posjetilac izričito ne pristane — svugdje, ne samo u EU (L1, Pregled 18).
 * Dotad se van EU/EEA, Britanije, Švicarske, zapadnog Balkana i Turske
 * pixel palio bez pitanja, a politika privatnosti kaže da Meta mjeri posjete
 * „samo uz tvoj pristanak". Sada to važi doslovno.
 */

const KEY = 'niyyah_consent'

// Pixel i Analytics oba pitaju na učitavanju; jedno pitanje Cloudflareu je dosta.
let deciding: Promise<void> | null = null

export type ConsentState = 'checking' | 'asking' | 'granted' | 'denied'

export function useConsent() {
  const state = useState<ConsentState>('consent', () => 'checking')

  function remember(value: 'granted' | 'denied') {
    try {
      localStorage.setItem(KEY, value)
    } catch {
      // Privatni prozor ili blokirana pohrana: izbor vrijedi za ovu posjetu.
    }
    state.value = value
  }

  function decide() {
    if (!import.meta.client || state.value !== 'checking') return
    deciding ??= resolve()
    return deciding
  }

  async function resolve() {

    let stored: string | null = null
    try {
      stored = localStorage.getItem(KEY)
    } catch {
      stored = null
    }
    if (stored === 'granted' || stored === 'denied') {
      state.value = stored
      return
    }

    // Bez sačuvanog izbora: pita se, bez obzira na državu.
    state.value = 'asking'
  }

  return {
    state,
    decide,
    grant: () => remember('granted'),
    deny: () => remember('denied'),
    /**
     * Iks na kartici: „ne sada".
     *
     * Pixel ostaje ugašen, ali se ništa ne pamti, pa se pita opet sljedeći
     * put. Zatvaranje prozora nije pristanak, a nije ni odbijanje — čovjek
     * nije rekao ni jedno ni drugo.
     */
    dismiss: () => {
      state.value = 'denied'
    },

    /** Predomišljanje: veza u podnožju vraća karticu. */
    reopen: () => {
      try {
        localStorage.removeItem(KEY)
      } catch {
        // Ništa: traka se ionako otvara ispod.
      }
      state.value = 'asking'
    },
  }
}
