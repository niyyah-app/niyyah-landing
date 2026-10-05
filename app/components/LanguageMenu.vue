<script setup lang="ts">
/**
 * Izbor jezika.
 *
 * Dok su bila dva jezika, jedno dugme koje ih zamjenjuje bilo je dovoljno.
 * S dvadeset osam nije: dugme „EN" ne kaže šta još postoji, a čovjek koji je
 * stranicu vidio preko reklame na svom jeziku i ne zna da treba tražiti.
 *
 * Svaki jezik je pravi link na svoju adresu, ne klik koji mijenja stanje —
 * tako ga tražilice vide, i tako radi otvaranje u novoj kartici.
 */
const props = withDefaults(defineProps<{ variant?: 'header' | 'mobile' }>(), {
  variant: 'header',
})

const c = useCopy()
const { locale, locales } = useI18n()
const languageLink = useLanguageLink()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

// `locales` se koristi kakav je — bez vlastitog tipa u sredini, da se spisak
// jezika ne mora održavati na dva mjesta.
const current = computed(() => locales.value.find((l) => l.code === locale.value))

/** Kratka oznaka na dugmetu: „BS", „EN", „SQ". */
const short = computed(() => locale.value.slice(0, 2).toUpperCase())
// Ime dugmeta počinje onim što piše na njemu („BS · Jezik"): čitač ekrana i
// glasovna komanda „klikni BS" moraju se slagati s onim što se vidi.

function close() {
  open.value = false
}

function onPointerDown(e: Event) {
  if (!root.value?.contains(e.target as Node)) close()
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    close()
    // Fokus se vraća na dugme, inače Escape ostavi čovjeka nigdje.
    ;(root.value?.querySelector('.lang__btn') as HTMLElement | null)?.focus()
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', onPointerDown)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onPointerDown)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="lang" :class="`lang--${props.variant}`">
    <button
      type="button"
      class="lang__btn"
      :aria-expanded="open"
      aria-haspopup="true"
      :aria-label="`${props.variant === 'mobile' ? (current?.name ?? short) : short} · ${c.nav.language}`"
      @click="open = !open"
    >
      <Icon name="globe" :size="17" />
      <span class="lang__now">{{ props.variant === 'mobile' ? (current?.name ?? short) : short }}</span>
      <Icon name="caret" :size="15" class="lang__caret" :class="{ 'is-open': open }" />
    </button>

    <ul v-show="open" class="lang__list" :aria-label="c.nav.language">
      <li v-for="l in locales" :key="l.code">
        <NuxtLink
          :to="languageLink(l.code)"
          :hreflang="l.language ?? l.code"
          :lang="l.language ?? l.code"
          :dir="l.dir"
          class="lang__item"
          :class="{ 'is-current': l.code === locale }"
          :aria-current="l.code === locale ? 'true' : undefined"
          @click="close"
        >
          <span>{{ l.name ?? l.code }}</span>
          <Icon v-if="l.code === locale" name="check" :size="15" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lang {
  position: relative;
}

.lang__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 44px;
  padding: 0 0.8rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--moon-2);
  font: inherit;
  font-size: var(--fs-small);
  font-weight: 500;
  cursor: pointer;
  transition: color 200ms ease;
}

.lang__btn:hover {
  color: var(--moon);
}

.lang__caret {
  transition: transform 200ms var(--ease-out);
}

.lang__caret.is-open {
  transform: rotate(180deg);
}

/* ── Lista ───────────────────────────────────────────────────────────────
   Dvadeset osam jezika su viša lista od većine ekrana, pa ima svoj skrol i
   gornju granicu vezanu za visinu prozora, a ne fiksnu.
   ─────────────────────────────────────────────────────────────────────── */
.lang__list {
  position: absolute;
  top: calc(100% + 0.4rem);
  right: 0;
  z-index: 60;
  width: max-content;
  min-width: 11rem;
  max-height: min(70vh, 26rem);
  margin: 0;
  padding: 0.4rem;
  list-style: none;
  overflow-y: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--night-line);
  border-radius: 16px;
  background: oklch(0.205 0.042 272 / 0.98);
  box-shadow: 0 18px 44px oklch(0.15 0.03 272 / 0.5);
}

/* Zdesna nalijevo se meni otvara uz lijevi kraj dugmeta. */
:global([dir='rtl']) .lang__list {
  right: auto;
  left: 0;
}

.lang__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  color: var(--moon-2);
  text-decoration: none;
  font-size: var(--fs-small);
  white-space: nowrap;
  transition:
    background-color 160ms ease,
    color 160ms ease;
}

.lang__item:hover,
.lang__item:focus-visible {
  background: oklch(1 0 0 / 0.07);
  color: var(--moon);
}

.lang__item.is-current {
  color: var(--gold);
}

/* ── U mobilnom meniju ───────────────────────────────────────────────────
   Tu dugme stoji u koloni s ostalim stavkama, pa nosi njihov izgled, a
   lista se otvara ispod njega i razmiče sadržaj umjesto da ga prekrije.
   ─────────────────────────────────────────────────────────────────────── */
.lang--mobile {
  border-top: 1px solid var(--night-line);
}

.lang--mobile .lang__btn {
  width: 100%;
  justify-content: flex-start;
  padding: 0.95rem 0;
  color: var(--moon);
  font-family: var(--font-display);
  font-size: 1.5rem;
}

.lang--mobile .lang__caret {
  margin-left: auto;
}

.lang--mobile .lang__list {
  position: static;
  width: auto;
  max-height: 14rem;
  margin-bottom: 1rem;
  box-shadow: none;
}
</style>
