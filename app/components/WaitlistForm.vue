<script setup lang="ts">
const props = defineProps<{ tone?: 'night' | 'day' }>()
const c = useCopy()
const { locale } = useI18n()
const { waitlistEndpoint } = useRuntimeConfig().public
const id = useId()

const email = ref('')
const trap = ref('') // honeypot za botove
const state = ref<'idle' | 'sending' | 'done' | 'error'>('idle')
const message = ref('')
const { shown: waiting, increment } = useWaitlistCount()

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

async function submit() {
  if (state.value === 'sending') return
  if (trap.value) {
    state.value = 'done'
    return
  }
  if (!EMAIL.test(email.value.trim())) {
    state.value = 'error'
    message.value = c.value.cta.invalid
    return
  }
  if (!waitlistEndpoint) {
    state.value = 'error'
    message.value = c.value.cta.notConnected
    return
  }
  state.value = 'sending'
  try {
    await $fetch(waitlistEndpoint, {
      method: 'POST',
      body: { email: email.value.trim(), locale: locale.value },
    })
    state.value = 'done'
    increment()

    // Bez ovoga Meta broji samo posjete, pa reklamu ne može optimizovati —
    // ne zna koja je posjeta završila prijavom. Adresa se ne šalje: Meti
    // treba znati da se prijava desila, ne ko se prijavio.
    ;(window as typeof window & { fbq?: (...a: unknown[]) => void }).fbq?.(
      'track',
      'Lead',
      { content_name: 'waitlist', content_category: locale.value },
    )
  } catch (e) {
    // Tri različita razloga, tri različita savjeta: loša adresa se ispravlja,
    // previše pokušaja se čeka, a sve ostalo (mreža, server) se ponavlja.
    const status = (e as { statusCode?: number; status?: number }).statusCode
      ?? (e as { status?: number }).status
    state.value = 'error'
    message.value =
      status === 422 ? c.value.cta.invalid
      : status === 429 ? c.value.cta.tooMany
      : c.value.cta.error
  }
}
</script>

<template>
  <div class="wl" :class="`wl--${props.tone ?? 'night'}`">
    <p v-if="state === 'done'" class="wl__done" role="status">
      <Icon name="check" :size="20" />
      {{ c.cta.success }}
    </p>
    <form v-else class="wl__form" novalidate @submit.prevent="submit">
      <label :for="`${id}-email`" class="sr-only">{{ c.cta.emailLabel }}</label>
      <Icon class="wl__icon" name="mail" :size="20" />
      <input
        :id="`${id}-email`"
        v-model="email"
        class="wl__input"
        type="email"
        inputmode="email"
        autocomplete="email"
        spellcheck="false"
        :placeholder="c.cta.emailPlaceholder"
        :aria-invalid="state === 'error' ? 'true' : undefined"
        :aria-describedby="`${id}-msg`"
        required
        @input="state === 'error' && (state = 'idle')"
      />
      <input v-model="trap" class="wl__trap" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" />
      <button class="btn btn--gold wl__btn" type="submit" :disabled="state === 'sending'">
        <span>{{ state === 'sending' ? c.cta.sending : c.cta.waitlist }}</span>
        <Icon name="arrow" :size="18" />
      </button>
    </form>
    <p :id="`${id}-msg`" class="wl__msg" :class="{ 'is-error': state === 'error' }" aria-live="polite">
      {{ state === 'error' ? message : state === 'done' ? '' : c.cta.privacy }}
    </p>
    <p v-if="waiting !== null" class="wl__count">
      <span class="wl__pulse" aria-hidden="true" />
      {{ c.cta.waiting.replace('{count}', waiting.toLocaleString(locale)) }}
    </p>
  </div>
</template>

<style scoped>
.wl {
  width: 100%;
  max-width: 540px;
}

/* ── Koliko ih već čeka ──────────────────────────────────────────────────
   Ispod poruke o privatnosti, tiše od nje: ovo je dokaz, ne poziv.
   ─────────────────────────────────────────────────────────────────────── */
.wl__count {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.55rem 0 0;
  font-size: var(--fs-small);
  font-weight: 500;
  /* Zeleno, ne zlatno: ovo je jedini broj na stranici koji je živ — raste
     dok se stranica gleda, i poraste za jedan čim se neko prijavi. Zlatom
     je izgledao kao još jedan ukras među zlatnim ukrasima. */
  color: var(--live);
}

.wl--day .wl__count {
  /* Svijetlo zeleno na papiru se gubi. */
  color: var(--live-deep);
}

.wl__pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--live);
  box-shadow: 0 0 0 0 var(--live-glow);
  animation: wl-pulse 2.4s ease-out infinite;
}

.wl--day .wl__pulse {
  background: var(--live-deep);
}

@keyframes wl-pulse {
  70% {
    box-shadow: 0 0 0 7px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wl__pulse {
    animation: none;
  }
}

.wl__form {
  display: flex;
  /* Bez ovoga se djeca rastežu po visini, pa ikona koverte stoji razvučena
     uz vrh umjesto poravnata s tekstom. */
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  border-radius: 999px;
  background: oklch(1 0 0 / 0.06);
  box-shadow: inset 0 0 0 1px var(--night-line);
  transition: box-shadow 200ms ease;
}

.wl__form:focus-within {
  box-shadow: inset 0 0 0 1px var(--gold);
}

.wl--day .wl__form {
  background: var(--paper);
  box-shadow: inset 0 0 0 1px var(--line);
}

.wl__icon {
  flex: none;
  margin-left: 1.15rem;
  color: var(--moon-3);
}

.wl__input {
  flex: 1;
  min-width: 0;
  padding: 0 1.1rem;
  border: 0;
  background: transparent;
  font-size: 1rem;
  outline: none;
}

.wl__input::placeholder {
  color: var(--moon-3);
}

.wl--day .wl__input::placeholder {
  color: var(--ink-3);
}

/* ── Sjaj po rubu dugmeta ────────────────────────────────────────────────
   Kao kartice u Otkrij ekranu aplikacije: konusni gradijent se vrti, a
   maska ostavlja prsten od 1 px, pa svjetlo putuje samim rubom umjesto da
   preko njega stoji druga linija.
   ─────────────────────────────────────────────────────────────────────── */
.wl__btn {
  position: relative;
  isolation: isolate;
}

.wl__btn::before {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  border-radius: inherit;
  padding: 1.5px;
  background: conic-gradient(
    from var(--sheen),
    transparent 0deg,
    transparent 190deg,
    oklch(0.86 0.065 85 / 0.55) 255deg,
    oklch(1 0 0 / 0.95) 292deg,
    oklch(0.86 0.065 85 / 0.55) 330deg,
    transparent 360deg
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  animation: wl-sheen 4.5s linear infinite;
  pointer-events: none;
}

@keyframes wl-sheen {
  to {
    --sheen: 360deg;
  }
}

.wl__btn[disabled] {
  opacity: 0.75;
  cursor: progress;
}

.wl__trap {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.wl__msg {
  min-height: 1.5em;
  margin-top: 0.75rem;
  padding-inline: 1.1rem;
  font-size: var(--fs-small);
  color: var(--moon-3);
}

.wl--day .wl__msg {
  color: var(--ink-3);
}

.wl__msg.is-error {
  color: oklch(0.8 0.1 40);
}

.wl--day .wl__msg.is-error {
  color: oklch(0.5 0.15 30);
}

.wl__done {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 60px;
  padding: 0 1.2rem;
  border-radius: 999px;
  background: var(--gold-glow);
  color: var(--gold-soft);
  font-weight: 500;
  animation: wl-in 500ms var(--ease-out);
}

.wl--day .wl__done {
  background: var(--paper-2);
  color: var(--ink);
}

@keyframes wl-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}

/* ── Uski ekran ──────────────────────────────────────────────────────────
   Polje i dugme jedno ispod drugog. Okvir tada nestaje, a polje dobija svoj
   — inače bi na uskom ekranu ostao prazan prsten oko dva složena elementa.
   ─────────────────────────────────────────────────────────────────────── */
@media (max-width: 560px) {
  .wl__form {
    flex-direction: column;
    align-items: stretch;
    gap: 0.6rem;
    padding: 0;
    border-radius: 0;
    background: none;
    box-shadow: none;
  }

  .wl__form:focus-within {
    box-shadow: none;
  }

  /* Ikona pripada jednorednom polju; u stupcu bi stajala sama iznad njega. */
  .wl__icon {
    display: none;
  }

  .wl__input {
    min-height: 54px;
    padding: 0 1.3rem;
    border-radius: 999px;
    background: oklch(1 0 0 / 0.06);
    box-shadow: inset 0 0 0 1px var(--night-line);
  }

  .wl__input:focus {
    box-shadow: inset 0 0 0 1px var(--gold);
  }

  .wl--day .wl__input {
    background: var(--paper);
    box-shadow: inset 0 0 0 1px var(--line);
  }

  .wl__btn {
    width: 100%;
  }

  .wl__msg {
    padding-inline: 0.25rem;
  }
}

/* Ukras; ko ga je isključio, ne treba ga dobiti. */
@media (prefers-reduced-motion: reduce) {
  .wl__btn::before {
    animation: none;
  }
}
</style>
