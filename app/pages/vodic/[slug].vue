<script setup lang="ts">
import { articlesIn, findArticle, guideLocales, guideUi, loadBody, translationsOf, type GuideLocale } from '~/guide/registry'
import { parseMarkdown, plain } from '~/utils/markdown'

// Vodič postoji samo na jezicima na kojima ima članaka. Ostalim jezicima ne
// pravimo prazne adrese — to bi bile tanke stranice za tražilicu.
defineI18nRoute({
  locales: ['bs', 'en', 'de', 'tr'],
  paths: {
    bs: '/vodic/[slug]',
    en: '/guide/[slug]',
    de: '/ratgeber/[slug]',
    tr: '/rehber/[slug]',
  },
})

const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()
const { siteUrl, ogImage } = useRuntimeConfig().public

// Jezik i članak se uzmu jednom, pri otvaranju. Svaka adresa dobija svoju
// instancu stranice; dok se jezik prebacuje, globalni `locale` se promijeni
// prije nego što stara stranica nestane, i reaktivno bi ona na trenutak
// tražila svoj slug na tuđem jeziku (ili vodič na jeziku koji ga nema).
const lang = locale.value as GuideLocale
const slug = String(route.params.slug)
const found = findArticle(lang, slug)
if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true })
}
const article = found

const ui = guideUi[lang]

const { data: blocks } = await useAsyncData(
  `guide:${lang}:${slug}`,
  async () => parseMarkdown(await loadBody(article)),
)
// Članak u registru bez teksta ne smije otići online kao prazna stranica:
// pri generisanju ovo obori build.
if (!blocks.value?.length) {
  throw createError({ statusCode: 500, statusMessage: `Nema teksta: ${lang}/${slug}`, fatal: true })
}

const toc = computed(() => (blocks.value ?? []).filter((b) => b.t === 'h2'))
const minutes = computed(() => {
  const words = (blocks.value ?? [])
    .map((b) => ('v' in b ? plain(b.v) : 'items' in b ? b.items.map(plain).join(' ') : b.lines.map(plain).join(' ')))
    .join(' ')
    .split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
})

// Bosanski nema podataka u ICU-u pregledača i Nodea („2026 M10 6"), pa
// se piše ručno; ostali jezici vodiča ih imaju.
const BS_MONTHS = ['januara', 'februara', 'marta', 'aprila', 'maja', 'juna', 'jula', 'augusta', 'septembra', 'oktobra', 'novembra', 'decembra']
const date = (iso: string) => {
  const d = new Date(iso)
  if (lang === 'bs') return `${d.getUTCDate()}. ${BS_MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}.`
  return new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeZone: 'UTC' }).format(d)
}

const related = articlesIn(lang).filter((a) => a.slug !== slug)

// Prebacivanje jezika i hreflang vode na isti članak na drugom jeziku.
// Jezik bez prijevoda dobije prazan slug: bez njega bi i18n zadržao
// bosanski slug i napravio adresu koja ne postoji (/en/guide/nikah-uslovi).
// Prazan slug znači „nema ove stranice" — hreflang je izostavi, a link
// jezika vodi na vodič tog jezika (useLanguageLink).
const setI18nParams = useSetI18nParams()
const translated = Object.fromEntries(translationsOf(article.key).map((t) => [t.locale, t.slug]))
setI18nParams(Object.fromEntries(guideLocales.map((l) => [l, { slug: translated[l] ?? '' }])))

const url = `${siteUrl}${localePath({ name: 'vodic-slug', params: { slug } }, lang)}`
const guideUrl = `${siteUrl}${localePath('/vodic', lang)}`
const homeUrl = `${siteUrl}${localePath('/', lang) === '/' ? '' : localePath('/', lang)}`
const image = `${siteUrl}${ogImage}`

useSeoMeta({
  title: () => `${article.title} | Niyyah`,
  description: () => article.description,
  ogTitle: () => article.title,
  ogDescription: () => article.description,
  ogType: 'article',
  ogSiteName: 'Niyyah',
  ogUrl: url,
  ogImage: image,
  twitterCard: 'summary_large_image',
  articlePublishedTime: () => article.published,
  articleModifiedTime: () => article.updated,
})

useHead(() => ({
  script: [
    {
      key: 'ld-json',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            inLanguage: lang,
            datePublished: article.published,
            dateModified: article.updated,
            mainEntityOfPage: url,
            image,
            author: { '@id': `${siteUrl}/#org` },
            publisher: { '@id': `${siteUrl}/#org` },
          },
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#org`,
            name: 'Niyyah',
            url: siteUrl,
            logo: `${siteUrl}/favicon-512.jpg`,
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Niyyah', item: homeUrl },
              { '@type': 'ListItem', position: 2, name: ui.name, item: guideUrl },
              { '@type': 'ListItem', position: 3, name: article.title, item: url },
            ],
          },
        ],
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <SiteHeader />
    <main id="sadrzaj" class="art">
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb">
          <NuxtLink :to="localePath('/', lang)">{{ ui.home }}</NuxtLink>
          <span aria-hidden="true">/</span>
          <NuxtLink :to="localePath('/vodic', lang)">{{ ui.name }}</NuxtLink>
        </nav>

        <header class="art__head">
          <h1 class="h2 art__title">{{ article.title }}</h1>
          <p class="lead art__lead">{{ article.description }}</p>
          <p class="art__meta">
            {{ ui.updated }} <time :datetime="article.updated">{{ date(article.updated) }}</time>
            · {{ minutes }} {{ ui.minutes }}
          </p>
        </header>

        <div class="art__grid">
          <aside v-if="toc.length > 2" class="toc" :aria-label="ui.contents">
            <p class="toc__title">{{ ui.contents }}</p>
            <ol>
              <li v-for="h in toc" :key="h.id">
                <a :href="`#${h.id}`"><GuideInline :v="'v' in h ? h.v : []" /></a>
              </li>
            </ol>
          </aside>

          <article class="art__body">
            <GuideBody :blocks="blocks ?? []" />
            <p class="art__note">{{ ui.note }}</p>
          </article>
        </div>

        <nav v-if="related.length" class="more" :aria-label="ui.more">
          <h2 class="h3">{{ ui.more }}</h2>
          <ul>
            <li v-for="a in related" :key="a.slug">
              <NuxtLink :to="localePath({ name: 'vodic-slug', params: { slug: a.slug } }, lang)">{{ a.title }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <FinalCta />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.art {
  padding-top: calc(var(--hdr-h) + 2.5rem);
  background: var(--paper);
}

.crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: var(--fs-small);
  color: var(--ink-3);
}

.crumbs a {
  color: var(--ink-2);
  text-decoration: none;
}

.crumbs a:hover {
  text-decoration: underline;
}

.art__head {
  max-width: 52rem;
  margin-top: 1.5rem;
}

.art__title {
  font-size: clamp(2.1rem, 1.4rem + 2.8vw, 3.75rem);
}

.art__lead {
  margin-top: 1.25rem;
  color: var(--ink-2);
}

.art__meta {
  margin-top: 1rem;
  font-size: var(--fs-small);
  color: var(--ink-3);
}

.art__grid {
  display: grid;
  grid-template-columns: minmax(0, 15rem) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;
  margin-top: clamp(2.5rem, 2rem + 2vw, 4rem);
  padding-top: clamp(2rem, 1.5rem + 2vw, 3rem);
  border-top: 1px solid var(--line);
}

.art__grid:not(:has(.toc)) {
  grid-template-columns: minmax(0, 1fr);
}

.toc {
  position: sticky;
  top: 110px;
  font-size: var(--fs-small);
}

.toc__title {
  font-weight: 500;
  color: var(--ink-2);
}

.toc ol {
  display: grid;
  gap: 0.6rem;
  margin-top: 0.9rem;
}

.toc a {
  color: var(--ink-2);
  text-decoration: none;
  line-height: 1.4;
}

.toc a:hover {
  color: var(--gold-deep);
}

.art__note {
  max-width: 68ch;
  margin-top: 3rem;
  padding: 1.1rem 1.3rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  font-size: var(--fs-small);
  color: var(--ink-2);
}

.more {
  max-width: 68ch;
  margin-block: clamp(3rem, 2rem + 4vw, 6rem);
  margin-inline-start: auto;
}

.more ul {
  display: grid;
  gap: 0.25rem;
  margin-top: 1rem;
}

.more a {
  display: block;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  text-decoration: none;
  font-weight: 500;
}

.more a:hover {
  color: var(--gold-deep);
}

@media (max-width: 860px) {
  .art__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .toc {
    position: static;
    padding: 1.1rem 1.3rem;
    border-radius: var(--radius);
    background: var(--paper-2);
  }
}
</style>
