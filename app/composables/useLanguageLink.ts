import { isGuideLocale } from '~/guide/registry'

/**
 * Adresa trenutne stranice na drugom jeziku — ili najbliže što postoji.
 *
 * Landing postoji na svim jezicima, vodič samo na nekima, a neki članci
 * samo na bosanskom. Kad stranice na tom jeziku nema, `switchLocalePath`
 * vrati prazno; tada link vodi na vodič tog jezika (ako ga ima), inače na
 * njegovu početnu — nikad na adresu koja ne postoji.
 */
export function useLanguageLink() {
  const switchLocalePath = useSwitchLocalePath()
  const localePath = useLocalePath()
  const route = useRoute()

  return (code: string) => {
    const same = switchLocalePath(code)
    if (same) return same
    const onGuide = String(route.name ?? '').startsWith('vodic')
    return onGuide && isGuideLocale(code) ? localePath('/vodic', code) : localePath('/', code)
  }
}
