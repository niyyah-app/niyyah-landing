<script setup lang="ts">
import { articlesIn, guideUi, type GuideLocale } from '~/guide/registry'

defineI18nRoute({
  locales: ['bs', 'en', 'de', 'tr'],
  paths: {
    bs: '/vodic',
    en: '/guide',
    de: '/ratgeber',
    tr: '/rehber',
  },
})

const { locale } = useI18n()
const localePath = useLocalePath()
const { siteUrl, ogImage } = useRuntimeConfig().public

// Jezik se uzme jednom, pri otvaranju — vidi [slug].vue.
const lang = locale.value as GuideLocale
const ui = guideUi[lang]
const list = articlesIn(lang)
const url = `${siteUrl}${localePath('/vodic', lang)}`
const image = `${siteUrl}${ogImage}`

useSeoMeta({
  title: () => `${ui.title} | Niyyah`,
  description: () => ui.metaDescription,
  ogTitle: () => ui.title,
  ogDescription: () => ui.metaDescription,
  ogType: 'website',
  ogSiteName: 'Niyyah',
  ogUrl: url,
  ogImage: image,
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  script: [
    {
      key: 'ld-json',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: ui.title,
        description: ui.metaDescription,
        url,
        inLanguage: lang,
        hasPart: list.map((a) => ({
          '@type': 'Article',
          headline: a.title,
          url: `${siteUrl}${localePath({ name: 'vodic-slug', params: { slug: a.slug } }, lang)}`,
        })),
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <SiteHeader />
    <main id="sadrzaj" class="gi">
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb">
          <NuxtLink :to="localePath('/', lang)">{{ ui.home }}</NuxtLink>
        </nav>
        <header class="gi__head">
          <h1 class="h2">{{ ui.title }}</h1>
          <p class="lead gi__lead">{{ ui.lead }}</p>
        </header>

        <ol class="gi__list">
          <li v-for="a in list" :key="a.slug">
            <NuxtLink :to="localePath({ name: 'vodic-slug', params: { slug: a.slug } }, lang)" class="card">
              <h2 class="h3">{{ a.title }}</h2>
              <p>{{ a.description }}</p>
            </NuxtLink>
          </li>
        </ol>
      </div>
      <FinalCta />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.gi {
  padding-top: calc(var(--hdr-h) + 2.5rem);
  background: var(--paper);
}

.crumbs {
  font-size: var(--fs-small);
}

.crumbs a {
  color: var(--ink-2);
  text-decoration: none;
}

.gi__head {
  max-width: 52rem;
  margin-top: 1.5rem;
}

.gi__lead {
  margin-top: 1.25rem;
  color: var(--ink-2);
}

.gi__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  gap: 1rem;
  margin-block: clamp(2.5rem, 2rem + 3vw, 4.5rem) clamp(4rem, 3rem + 5vw, 7rem);
}

.card {
  display: grid;
  gap: 0.75rem;
  height: 100%;
  padding: 1.6rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--paper);
  color: var(--ink);
  text-decoration: none;
  transition:
    border-color 200ms ease,
    background-color 200ms ease;
}

.card p {
  color: var(--ink-2);
  font-size: var(--fs-small);
}

@media (hover: hover) and (pointer: fine) {
  .card:hover {
    border-color: var(--gold);
    background: var(--paper-2);
  }
}
</style>
