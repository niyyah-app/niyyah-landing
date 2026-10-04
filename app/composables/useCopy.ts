import { bs, type Copy } from '~/content/bs'
import { am } from '~/content/am'
import { ar } from '~/content/ar'
import { az } from '~/content/az'
import { bn } from '~/content/bn'
import { ckb } from '~/content/ckb'
import { de } from '~/content/de'
import { en } from '~/content/en'
import { es } from '~/content/es'
import { fa } from '~/content/fa'
import { fr } from '~/content/fr'
import { gu } from '~/content/gu'
import { ha } from '~/content/ha'
import { hi } from '~/content/hi'
import { id } from '~/content/id'
import { it } from '~/content/it'
import { jv } from '~/content/jv'
import { kk } from '~/content/kk'
import { ku } from '~/content/ku'
import { ky } from '~/content/ky'
import { ml } from '~/content/ml'
import { ms } from '~/content/ms'
import { nl } from '~/content/nl'
import { pa } from '~/content/pa'
import { ps } from '~/content/ps'
import { ru } from '~/content/ru'
import { sd } from '~/content/sd'
import { so } from '~/content/so'
import { sq } from '~/content/sq'
import { sv } from '~/content/sv'
import { su } from '~/content/su'
import { sw } from '~/content/sw'
import { ta } from '~/content/ta'
import { te } from '~/content/te'
import { tg } from '~/content/tg'
import { tl } from '~/content/tl'
import { tr } from '~/content/tr'
import { ug } from '~/content/ug'
import { ur } from '~/content/ur'
import { uz } from '~/content/uz'
import { wo } from '~/content/wo'

/**
 * Tekst stranice po jeziku.
 *
 * Svaki jezik je potpun: tip `Copy` ne pušta fajl koji nešto ne prevede, pa
 * build pada prije nego što neprevedeni ključ stigne na stranicu. Spajanje s
 * bosanskim ostaje kao mreža za slučaj da se nekad doda jezik u pripremi —
 * tada se vidi šta mu fali, a stranica ne pada na `undefined` usred
 * renderovanja.
 */
const byLocale: Record<string, Copy> = {
  bs,
  am,
  ar,
  az,
  bn,
  ckb,
  de,
  en,
  es,
  fa,
  fr,
  gu,
  ha,
  hi,
  id,
  it,
  jv,
  kk,
  ku,
  ky,
  ml,
  ms,
  nl,
  pa,
  ps,
  ru,
  sd,
  so,
  sq,
  sv,
  su,
  sw,
  ta,
  te,
  tg,
  tl,
  tr,
  ug,
  ur,
  uz,
  wo,
}

function merge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base
  if (Array.isArray(base) || typeof base !== 'object') return over as T

  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) }
  for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
    out[k] = merge((base as Record<string, unknown>)[k], v)
  }
  return out as T
}

const cache = new Map<string, Copy>()

export function useCopy() {
  const { locale } = useI18n()
  return computed<Copy>(() => {
    const code = locale.value
    if (!cache.has(code)) {
      cache.set(code, code === 'bs' ? bs : merge(bs, byLocale[code]))
    }
    return cache.get(code)!
  })
}
