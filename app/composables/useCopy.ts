import { bs, type Copy } from '~/content/bs'

/**
 * Tekst stranice po jeziku.
 *
 * Svaki jezik je potpun: tip `Copy` ne pušta fajl koji nešto ne prevede, pa
 * build pada prije nego što neprevedeni ključ stigne na stranicu. Spajanje s
 * bosanskim ostaje kao mreža za slučaj da se nekad doda jezik u pripremi —
 * tada se vidi šta mu fali, a stranica ne pada na `undefined` usred
 * renderovanja.
 *
 * Jezici se učitavaju po potrebi, svaki u svom komadu JS-a. Dok su svi bili
 * u glavnom fajlu, telefon je skidao i izvršavao 1,1 MB teksta na svim jezicima
 * da bi pokazao jedan — i naslov stranice se pojavljivao tek za tim. Bosanski
 * ostaje u glavnom fajlu: on je osnova za spajanje i rezerva dok se drugi
 * jezik učitava. Učitavanje pokreće `plugins/copy.ts`, prije renderovanja i
 * prije svake promjene jezika.
 */
const loaders = import.meta.glob<Record<string, Copy>>(['../content/*.ts', '!../content/bs.ts'])

function merge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base
  if (Array.isArray(base) || typeof base !== 'object') return over as T

  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) }
  for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
    out[k] = merge((base as Record<string, unknown>)[k], v)
  }
  return out as T
}

const cache = shallowReactive(new Map<string, Copy>([['bs', bs]]))

export async function loadCopy(code: string) {
  if (cache.has(code)) return
  const load = loaders[`../content/${code}.ts`]
  if (!load) return
  const mod = await load()
  cache.set(code, merge(bs, mod[code]))
}

export function useCopy() {
  const { locale } = useI18n()
  return computed<Copy>(() => cache.get(locale.value) ?? bs)
}
