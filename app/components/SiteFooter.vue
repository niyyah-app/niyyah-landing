<script setup lang="ts">
import { guideUi, isGuideLocale } from '~/guide/registry'
import { isLegalLocale, legalUi } from '~/legal/content'
import { deletion } from '~/legal/deletion'

const c = useCopy()
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const languageLink = useLanguageLink()
const year = new Date().getFullYear()
const { reopen } = useConsent()
const guide = computed(() => (isGuideLocale(locale.value) ? guideUi[locale.value] : null))
// Pravni tekst postoji na jezicima aplikacije; ostali jezici vode na engleski.
const legalLang = computed(() => (isLegalLocale(locale.value) ? locale.value : 'en'))
const legal = computed(() => legalUi[legalLang.value])
const deletionLabel = computed(() => deletion[legalLang.value].footer)
</script>

<template>
  <footer class="ftr">
    <div class="wrap ftr__row">
      <div class="ftr__brand">
        <img
          src="/logo-372.webp"
          alt="Niyyah"
          width="414"
          height="372"
          loading="lazy"
        />
        <div>
          <p>{{ c.footer.tagline }}</p>
          <NuxtLink v-if="guide" :to="localePath('/vodic')" class="ftr__guide">{{ guide.title }}</NuxtLink>
        </div>
      </div>

      <nav class="ftr__langs" :aria-label="c.footer.language">
        <NuxtLink
          v-for="l in locales"
          :key="l.code"
          :to="languageLink(l.code)"
          :hreflang="l.language ?? l.code"
          :lang="l.language ?? l.code"
          :aria-current="l.code === locale ? 'true' : undefined"
        >
          {{ l.name }}
        </NuxtLink>
      </nav>
    </div>
    <div class="wrap ftr__bottom">
      <p>{{ c.footer.made }}</p>
      <!-- Pristanak se mora moći povući isto tako lako kao što se daje. -->
      <button type="button" class="ftr__consent" @click="reopen">{{ c.consent.change }}</button>
      <NuxtLink :to="localePath('/privatnost', legalLang)" class="ftr__consent">{{ legal.privacy }}</NuxtLink>
      <NuxtLink :to="localePath('/uslovi', legalLang)" class="ftr__consent">{{ legal.terms }}</NuxtLink>
      <NuxtLink :to="localePath('/brisanje-naloga', legalLang)" class="ftr__consent">{{ deletionLabel }}</NuxtLink>
      <p>© {{ year }} {{ c.footer.rights }}</p>
    </div>
  </footer>
</template>

<style scoped>
.ftr__consent {
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.ftr__consent:hover {
  color: var(--moon);
}

.ftr {
  padding-block: 3.5rem 2rem;
  background: var(--night-950);
  color: var(--moon-2);
  font-size: var(--fs-small);
}

.ftr__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.ftr__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ftr__brand img {
  width: auto;
  height: 124px;
}

.ftr__guide {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--gold);
  text-underline-offset: 3px;
}

/* Četrdeset i jedan jezik ne staje u red: bez prelamanja je većina bila
   odsječena desno od ekrana, vidljiva samo tražilici. */
.ftr__langs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.ftr__langs a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 1rem;
  border-radius: 999px;
  border: 1px solid var(--night-line);
  text-decoration: none;
  transition:
    color 200ms ease,
    border-color 200ms ease;
}

.ftr__langs a:hover {
  color: var(--moon);
}

.ftr__langs a[aria-current] {
  border-color: var(--gold);
  color: var(--gold);
}

.ftr__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 2rem;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--night-line);
  color: var(--moon-3);
}
</style>
