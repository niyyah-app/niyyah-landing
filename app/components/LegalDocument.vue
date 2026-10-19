<script setup lang="ts">
import { legalUi, legalUpdated, privacy, terms, type LegalLocale } from '~/legal/content'
import { deletion } from '~/legal/deletion'

// Politika privatnosti ili uslovi, istim tekstom kao u aplikaciji. Trgovine
// (App Store, Google Play) traže javnu adresu politike; ovo je ta adresa.
const props = defineProps<{ kind: 'privacy' | 'terms' }>()

const { locale } = useI18n()
const localePath = useLocalePath()
const { siteUrl } = useRuntimeConfig().public

const lang = locale.value as LegalLocale
const ui = legalUi[lang]
const sections = (props.kind === 'privacy' ? privacy : terms)[lang] ?? (props.kind === 'privacy' ? privacy : terms).en
const title = props.kind === 'privacy' ? ui.privacy : ui.terms
const path = props.kind === 'privacy' ? '/privatnost' : '/uslovi'

// Put do brisanja naloga, odmah ispod odjeljka koji o brisanju govori: u
// politici „Tvoja prava“ (pretposljednji), u uslovima „Suspenzija,
// zatvaranje i žalbe“ (osmi). Redoslijed je isti na svim jezicima, a tekst
// se izvozi iz aplikacije, pa link ide uz njega, ne u njega.
const deletionLink = deletion[lang]?.link ?? deletion.en.link
const deletionAfter = props.kind === 'privacy' ? sections.length - 2 : 7
const arrow = lang === 'ar' || lang === 'ur' ? '←' : '→'

useSeoMeta({
  title: `${title} | Niyyah`,
  description: sections[0]?.b.slice(0, 155),
  ogTitle: title,
  ogType: 'website',
  ogSiteName: 'Niyyah',
  ogUrl: `${siteUrl}${localePath(path, lang)}`,
})
</script>

<template>
  <div>
    <SiteHeader />
    <main id="sadrzaj" class="legal">
      <div class="wrap legal__wrap">
        <nav class="crumbs" aria-label="Breadcrumb">
          <NuxtLink :to="localePath('/', lang)">{{ ui.home }}</NuxtLink>
        </nav>
        <header class="legal__head">
          <h1 class="h2">{{ title }}</h1>
          <p class="legal__updated">{{ ui.updated }}: {{ legalUpdated }}</p>
        </header>
        <ol class="legal__list">
          <li v-for="(s, i) in sections" :key="i">
            <h2 class="h3">{{ s.h }}</h2>
            <p>{{ s.b }}</p>
            <p v-if="i === deletionAfter" class="legal__more">
              <NuxtLink :to="localePath('/brisanje-naloga', lang)">{{ deletionLink }} {{ arrow }}</NuxtLink>
            </p>
          </li>
        </ol>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.legal {
  padding-top: calc(var(--hdr-h) + 2.5rem);
  padding-bottom: clamp(4rem, 3rem + 5vw, 7rem);
  background: var(--paper);
}

.legal__wrap {
  max-width: 46rem;
}

.crumbs {
  font-size: var(--fs-small);
}

.crumbs a {
  color: var(--ink-2);
  text-decoration: none;
}

.legal__head {
  margin-top: 1.5rem;
}

.legal__updated {
  margin-top: 0.75rem;
  color: var(--ink-2);
  font-size: var(--fs-small);
}

.legal__list {
  display: grid;
  gap: 2rem;
  margin-top: clamp(2rem, 1.5rem + 2vw, 3rem);
  padding: 0;
  list-style: none;
}

.legal__list p {
  margin-top: 0.6rem;
  color: var(--ink-2);
  line-height: 1.7;
}

.legal__more a {
  color: inherit;
  text-underline-offset: 3px;
}
</style>
