<script setup lang="ts">
import { legalUi, type LegalLocale } from '~/legal/content'
import { supportEmail } from '~/legal/deletion'
import { support } from '~/legal/support'

// Javna stranica podrške — App Store Connect je traži kao „Support URL", a
// Google Play kao kontakt uz aplikaciju. Isti jezici kao politika i uslovi.
defineI18nRoute({
  locales: ['bs', 'en', 'de', 'tr', 'fr', 'id', 'ms', 'ar', 'ur'],
  paths: {
    bs: '/podrska',
    en: '/support',
    de: '/hilfe',
    tr: '/destek',
    fr: '/assistance',
    id: '/bantuan',
    ms: '/bantuan',
    ar: '/support',
    ur: '/support',
  },
})

const { locale } = useI18n()
const localePath = useLocalePath()
const { siteUrl } = useRuntimeConfig().public

const lang = locale.value as LegalLocale
const ui = legalUi[lang]
const c = support[lang] ?? support.en

const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent(c.emailSubject)}`
const [emailBefore, emailAfter] = c.emailBody.split('{email}')

useSeoMeta({
  title: `${c.title} | Niyyah`,
  description: c.description,
  ogTitle: c.title,
  ogDescription: c.description,
  ogType: 'website',
  ogSiteName: 'Niyyah',
  ogUrl: `${siteUrl}${localePath('/podrska', lang)}`,
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
          <h1 class="h2">{{ c.title }}</h1>
          <p class="legal__intro">{{ c.intro }}</p>
        </header>

        <section class="legal__sec" aria-labelledby="u-aplikaciji">
          <h2 id="u-aplikaciji" class="h3">{{ c.appTitle }}</h2>
          <ol class="legal__steps">
            <li v-for="(s, i) in c.appSteps" :key="i">{{ s }}</li>
          </ol>
        </section>

        <section class="legal__sec" aria-labelledby="e-mailom">
          <h2 id="e-mailom" class="h3">{{ c.emailTitle }}</h2>
          <p>
            {{ emailBefore }}<a :href="mailto" dir="ltr">{{ supportEmail }}</a>{{ emailAfter }}
          </p>
        </section>

        <section class="legal__sec" aria-labelledby="prijava">
          <h2 id="prijava" class="h3">{{ c.safetyTitle }}</h2>
          <ul class="legal__bullets">
            <li v-for="(s, i) in c.safety" :key="i">{{ s }}</li>
          </ul>
        </section>

        <section class="legal__sec" aria-labelledby="jos">
          <h2 id="jos" class="h3">{{ c.moreTitle }}</h2>
          <ul class="legal__bullets">
            <li><NuxtLink :to="localePath('/brisanje-naloga', lang)">{{ c.deleteLink }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/privatnost', lang)">{{ ui.privacy }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/uslovi', lang)">{{ ui.terms }}</NuxtLink></li>
          </ul>
        </section>

        <p class="legal__operator">{{ c.operator }}</p>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
/* Isti izgled kao brisanje naloga i LegalDocument. */
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

.legal__intro {
  margin-top: 0.75rem;
  color: var(--ink-2);
  line-height: 1.7;
}

.legal__sec {
  margin-top: clamp(2rem, 1.5rem + 2vw, 3rem);
}

/* Ko pruža uslugu: sitno, na dnu, kao impresum. */
.legal__operator {
  margin-top: clamp(2rem, 1.5rem + 2vw, 3rem);
  padding-top: 1rem;
  border-top: 1px solid var(--line);
  color: var(--ink-3);
  font-size: var(--fs-small);
  line-height: 1.6;
}

.legal__sec p,
.legal__steps,
.legal__bullets {
  margin-top: 0.6rem;
  color: var(--ink-2);
  line-height: 1.7;
}

.legal__steps,
.legal__bullets {
  display: grid;
  gap: 0.5rem;
  padding-inline-start: 1.4rem;
}

/* Globalni CSS skida oznake listama; ovdje su koraci i stavke sadržaj. */
.legal__steps {
  list-style: decimal;
}

.legal__bullets {
  list-style: disc;
}

.legal__sec a {
  color: inherit;
  text-underline-offset: 3px;
}
</style>
