<script setup lang="ts">
/**
 * „Šta kažu članovi" (vlasnik, 5.11.2026).
 *
 * Samo mišljenja koja je osoblje odobrilo i za koja je član dao pristanak;
 * ime i zamućena slika, nikad prezime ni oštra slika. Bez ijednog takvog
 * mišljenja sekcije nema. Uz kartice uvijek stoji izjava da član za
 * mišljenje dobija 50 coinsa bez obzira na ocjenu — ovo nisu ocjene iz
 * App Storea ni Google Playa i ne vode tamo.
 */
const c = useCopy()
const { locale } = useI18n()
const { items } = useTestimonials()

function when(date: string | null): string {
  if (!date) return ''
  const d = new Date(`${date}T12:00:00Z`)
  if (Number.isNaN(d.getTime())) return ''
  // Bosanski pregledači često ne znaju (ispisivali su „2026 M11" ili
  // „2026-11-03"), pa ga pišemo sami: „3. 11. 2026.".
  if (locale.value === 'bs') return `${d.getUTCDate()}. ${d.getUTCMonth() + 1}. ${d.getUTCFullYear()}.`
  try {
    return new Intl.DateTimeFormat(locale.value, { day: 'numeric', month: 'numeric', year: 'numeric' }).format(d)
  } catch {
    return date
  }
}

const ratingLabel = (n: number) => c.value.testimonials.rating.replace('{n}', String(n))
</script>

<template>
  <section v-if="items.length" class="section tst" aria-labelledby="tst-title">
    <div class="wrap">
      <p v-reveal class="kicker"><StarMark /> {{ c.testimonials.kicker }}</p>
      <h2 id="tst-title" v-reveal="60" class="h2 tst__title">{{ c.testimonials.title }}</h2>
      <p v-reveal="120" class="tst__disclosure">{{ c.testimonials.disclosure }}</p>

      <ul class="tst__grid">
        <li v-for="(t, i) in items" :key="`${t.first_name}-${t.date}-${i}`" v-reveal="i * 60" class="tst__card">
          <div class="tst__head">
            <span class="tst__photo">
              <img
                v-if="t.photo_url"
                :src="t.photo_url"
                :alt="c.testimonials.photoAlt"
                loading="lazy"
                decoding="async"
                referrerpolicy="no-referrer"
              />
              <span v-else class="tst__initial" aria-hidden="true">{{ t.first_name.charAt(0) }}</span>
            </span>
            <div>
              <p class="tst__name">{{ t.first_name }}</p>
              <p class="tst__stars" role="img" :aria-label="ratingLabel(t.rating)">
                <span v-for="n in 5" :key="n" :class="{ on: n <= t.rating }" aria-hidden="true">★</span>
              </p>
            </div>
          </div>
          <blockquote class="tst__body">{{ t.body }}</blockquote>
          <p v-if="when(t.date)" class="tst__date">{{ when(t.date) }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.tst {
  background: var(--paper);
}

.tst__title {
  margin-top: 1rem;
  max-width: 14em;
}

.tst__disclosure {
  margin-top: 1rem;
  max-width: 46em;
  font-size: var(--fs-small);
  color: var(--ink-3);
}

.tst__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.75rem);
  margin-top: clamp(2rem, 1.5rem + 2vw, 3rem);
  padding: 0;
  list-style: none;
}

.tst__card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--paper-2);
  border: 1px solid var(--line);
  border-radius: 20px;
  min-width: 0;
}

.tst__head {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.tst__photo {
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--paper-3);
  display: grid;
  place-items: center;
}

/* Slika sa servera je već zamućena; ovdje još jednom, da oštar kadar ne
   iskoči ni dok se učitava ni ako bi server ikad poslao pogrešnu. */
.tst__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(6px);
  transform: scale(1.15);
}

.tst__initial {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--gold-deep);
}

.tst__name {
  font-weight: 600;
  color: var(--ink);
}

.tst__stars {
  margin-top: 0.15rem;
  letter-spacing: 0.08em;
  color: var(--line);
  font-size: 1rem;
  line-height: 1;
}

.tst__stars .on {
  color: var(--gold);
}

.tst__body {
  margin: 0;
  color: var(--ink-2);
  overflow-wrap: anywhere;
  white-space: pre-line;
}

.tst__date {
  margin-top: auto;
  font-size: var(--fs-small);
  color: var(--ink-3);
}

@media (max-width: 900px) {
  .tst__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .tst__grid {
    grid-template-columns: 1fr;
  }
}
</style>
