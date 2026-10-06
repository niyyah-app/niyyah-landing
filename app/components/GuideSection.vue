<script setup lang="ts">
import { articlesIn, guideUi, isGuideLocale } from '~/guide/registry'

// Most između landinga i vodiča: i za čitaoca koji ima pitanje prije nego
// što ima aplikaciju, i za tražilicu, kojoj je ovo put do članaka.
// Na jezicima bez vodiča sekcije nema.
const { locale } = useI18n()
const localePath = useLocalePath()

const ui = computed(() => (isGuideLocale(locale.value) ? guideUi[locale.value] : null))
const list = computed(() => articlesIn(locale.value).slice(0, 6))
</script>

<template>
  <section v-if="ui && list.length" id="vodic" class="section guide" aria-labelledby="guide-title">
    <div class="wrap guide__grid">
      <div class="guide__intro">
        <p class="kicker"><StarMark />{{ ui.sectionKicker }}</p>
        <h2 id="guide-title" v-reveal class="h2">{{ ui.sectionTitle }}</h2>
        <p class="guide__lead">{{ ui.sectionLead }}</p>
        <NuxtLink :to="localePath('/vodic')" class="link-arrow guide__all">
          {{ ui.all }} <Icon name="arrow" :size="16" />
        </NuxtLink>
      </div>

      <ul class="guide__list">
        <li v-for="a in list" :key="a.slug">
          <NuxtLink :to="localePath({ name: 'vodic-slug', params: { slug: a.slug } })">
            <span class="guide__t">{{ a.title }}</span>
            <Icon name="arrow" :size="18" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.guide {
  background: var(--paper-2);
}

.guide__grid {
  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 7fr);
  gap: 2rem clamp(3rem, 6vw, 7rem);
  align-items: start;
}

.guide__intro .h2 {
  margin-top: 1rem;
  max-width: 10em;
}

.guide__lead {
  margin-top: 1.25rem;
  max-width: 40ch;
  color: var(--ink-2);
}

.guide__all {
  margin-top: 1.75rem;
  color: var(--ink);
}

.guide__list li {
  border-top: 1px solid var(--line);
}

.guide__list li:last-child {
  border-bottom: 1px solid var(--line);
}

.guide__list a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.3rem 0;
  color: var(--ink);
  text-decoration: none;
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1.4;
}

.guide__list a :deep(svg) {
  flex: none;
  color: var(--gold-deep);
  transition: transform 200ms var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .guide__list a:hover {
    color: var(--gold-deep);
  }
  .guide__list a:hover :deep(svg) {
    transform: translateX(4px);
  }
}

@media (max-width: 860px) {
  .guide__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
