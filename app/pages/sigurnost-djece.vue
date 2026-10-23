<script setup lang="ts">
import { legalUi, type LegalLocale } from '~/legal/content'
import { childSafety } from '~/legal/childSafety'
import { supportEmail } from '~/legal/deletion'
import { support } from '~/legal/support'

// Standardi zaštite djece (CSAE) — Google Play ih traži od aplikacija za
// upoznavanje i društvenih aplikacija, kao javnu stranicu čiji se URL upisuje
// u Play Console (App content → Child safety standards). Isti jezici kao
// politika, uslovi i brisanje naloga.
defineI18nRoute({
  locales: ['bs', 'en', 'de', 'tr', 'fr', 'id', 'ms', 'ar', 'ur'],
  paths: {
    bs: '/sigurnost-djece',
    en: '/child-safety',
    de: '/kinderschutz',
    tr: '/cocuk-guvenligi',
    fr: '/protection-enfants',
    id: '/keamanan-anak',
    ms: '/keselamatan-kanak-kanak',
    ar: '/child-safety',
    ur: '/child-safety',
  },
})

const { locale } = useI18n()
const localePath = useLocalePath()
const { siteUrl } = useRuntimeConfig().public

const lang = locale.value as LegalLocale
const ui = legalUi[lang]
const c = childSafety[lang] ?? childSafety.en

const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent(c.emailSubject)}`
const [emailBefore, emailAfter] = c.emailBody.split('{email}')
const [contactBefore, contactAfter] = c.contactBody.split('{email}')
const [emergencyBefore, emergencyAfter] = c.emergency.split('{link}')

useSeoMeta({
  title: `${c.title} | Niyyah`,
  description: c.description,
  ogTitle: c.title,
  ogDescription: c.description,
  ogType: 'website',
  ogSiteName: 'Niyyah',
  ogUrl: `${siteUrl}${localePath('/sigurnost-djece', lang)}`,
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

        <section class="legal__sec" aria-labelledby="standardi">
          <h2 id="standardi" class="h3">{{ c.standardsTitle }}</h2>
          <ul class="legal__bullets">
            <li v-for="(s, i) in c.standards" :key="i">{{ s }}</li>
          </ul>
        </section>

        <section class="legal__sec" aria-labelledby="prijava">
          <h2 id="prijava" class="h3">{{ c.reportTitle }}</h2>
          <ol class="legal__steps">
            <li v-for="(s, i) in c.reportSteps" :key="i">{{ s }}</li>
          </ol>
          <p>{{ c.reportNote }}</p>
        </section>

        <section class="legal__sec" aria-labelledby="bez-aplikacije">
          <h2 id="bez-aplikacije" class="h3">{{ c.emailTitle }}</h2>
          <p>
            {{ emailBefore }}<a :href="mailto" dir="ltr">{{ supportEmail }}</a>{{ emailAfter }}
          </p>
        </section>

        <section class="legal__sec" aria-labelledby="sta-radimo">
          <h2 id="sta-radimo" class="h3">{{ c.actionTitle }}</h2>
          <ul class="legal__bullets">
            <li v-for="(s, i) in c.actions" :key="i">{{ s }}</li>
          </ul>
          <p>
            {{ emergencyBefore }}<a href="https://www.inhope.org" rel="noopener" target="_blank" dir="ltr">inhope.org</a>{{ emergencyAfter }}
          </p>
        </section>

        <section class="legal__sec" aria-labelledby="kontakt">
          <h2 id="kontakt" class="h3">{{ c.contactTitle }}</h2>
          <p>
            {{ contactBefore }}<a :href="mailto" dir="ltr">{{ supportEmail }}</a>{{ contactAfter }}
          </p>
        </section>

        <p class="legal__operator">{{ (support[lang] ?? support.en).operator }}</p>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
/* Isti izgled kao LegalDocument (politika i uslovi). */
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
