<script setup lang="ts">
import heroShot from '~/assets/images/hero-discover.webp'

const c = useCopy()
const { appLaunched } = useRuntimeConfig().public

// "Brak, tražen s namjerom." → drugi dio naslova u zlatu
const title = computed(() => {
  const t = c.value.hero.title
  const i = t.indexOf(', ')
  return i === -1 ? { a: t, b: '' } : { a: t.slice(0, i + 1), b: t.slice(i + 2) }
})
</script>

<template>
  <section class="hero on-night" aria-labelledby="hero-title">
    <GeoPattern :opacity="0.12" />

    <div class="wrap hero__grid">
      <div class="hero__text">
        <p class="hero__eyebrow">{{ c.cta.eyebrow }}</p>
        <h1 id="hero-title" class="display hero__title">
          {{ title.a }} <span>{{ title.b }}</span>
        </h1>
        <svg class="hero__flourish" viewBox="0 0 320 14" aria-hidden="true">
          <path
            d="M4 9.5c38-5.5 76-7 114-4.5s76 6.5 114 3.5 62-6 84-8"
            fill="none"
            stroke="url(#flourish)"
            stroke-width="2.4"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient id="flourish" x1="0" x2="1">
              <stop offset="0" stop-color="oklch(0.76 0.105 82 / 0)" />
              <stop offset="0.25" stop-color="oklch(0.86 0.065 85 / 0.95)" />
              <stop offset="0.7" stop-color="oklch(0.76 0.105 82 / 0.7)" />
              <stop offset="1" stop-color="oklch(0.76 0.105 82 / 0)" />
            </linearGradient>
          </defs>
        </svg>
        <p class="lead hero__lead">{{ c.hero.lead }}</p>

        <div class="hero__cta">
          <PrimaryCta tone="night" />
        </div>
      </div>

      <div class="hero__visual">
        <PhoneShot
          class="hero__phone"
          :src="heroShot"
          :alt="c.hero.imageAlt"
          :img-width="1024"
          :img-height="1536"
          :width="420"
          eager
        />
        <!-- Ista slika, okrenuta i izblijedjela: odraz pod uređajem. Ukras,
             pa je skrivena od čitača ekrana i ne nosi alt. -->
        <img
          class="hero__reflection"
          :src="heroShot"
          alt=""
          width="1024"
          height="1536"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding-top: calc(var(--hdr-h) + clamp(1rem, 0.4rem + 2vw, 2.5rem));
  padding-bottom: clamp(2.5rem, 1.5rem + 4vw, 5rem);
  background:
    radial-gradient(120% 80% at 80% 0%, var(--night-800) 0%, transparent 60%),
    var(--night-900);
}

.hero .geo {
  z-index: -1;
}

/* ── Mreža ───────────────────────────────────────────────────────────── */
.hero__grid {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 46fr) minmax(0, 54fr);
  align-items: center;
  gap: clamp(2rem, 1rem + 3vw, 4.5rem);
}

/* ── Tekst ───────────────────────────────────────────────────────────────
   Veličine su vezane za širinu ekrana tako da se na širini mockupa
   (1774 px) poklope tačno, a clamp ih drži čitljivim ispod toga.
   ─────────────────────────────────────────────────────────────────────── */
.hero__eyebrow {
  display: inline-block;
  margin: 0 0 1.1rem;
  padding: 0.55rem 1.3rem;
  border: 1px solid var(--gold-glow);
  border-radius: 999px;
  color: var(--gold);
  font-size: clamp(0.72rem, 0.79vw, 0.9rem);
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.hero__title {
  font-size: clamp(2.5rem, 5.4vw, 6rem);
  line-height: 1.02;
}

.hero__title span {
  color: var(--gold);
}

.hero__flourish {
  display: block;
  width: min(100%, 340px);
  height: auto;
  margin: 0.2rem 0 0;
}

.hero__lead {
  margin-top: clamp(1.2rem, 0.9rem + 1vw, 2rem);
  font-size: clamp(1.02rem, 1.07vw, 1.28rem);
  color: var(--moon-2);
  max-width: 30em;
}

.hero__cta {
  margin-top: clamp(1.6rem, 1.2rem + 1.2vw, 2.4rem);
}

/* ── Telefon ─────────────────────────────────────────────────────────────
   Dio mreže, ne dijete pozadine: dok je bio zalijepljen za piksele slike,
   pratio je njenu veličinu, a ona zavisi od visine sadržaja — pa je na
   svakoj rezoluciji ispadao drukčije.
   ─────────────────────────────────────────────────────────────────────── */
.hero__visual {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

/* Topli krug iza telefona. Vezan je za kolonu u kojoj telefon stoji, ne za
   sekciju — dok je bio vezan za sekciju, svaka promjena veličine telefona
   tražila je da se krug ručno pomjera za njim. */
.hero__visual::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  width: min(140%, 760px);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, var(--gold-glow) 0%, transparent 65%);
  animation: glow 7s ease-in-out infinite;
  pointer-events: none;
}

@keyframes glow {
  50% {
    opacity: 0.65;
  }
}

.hero__phone {
  width: 100%;
}

.hero__phone :deep(.shot__img) {
  position: relative;
  z-index: 1;
  width: min(100%, clamp(280px, 30vw, 520px));
}

/* Odraz stoji IZA uređaja, ne ispod njega: apsolutno pozicioniran, pa ne
   zauzima prostor u koloni i ne pomjera ništa. Uvećan, zamućen i jedva
   vidljiv — sjena samog telefona, a ne druga slika pored njega. */
.hero__reflection {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  width: min(112%, clamp(310px, 34vw, 580px));
  height: auto;
  transform: translate(-50%, -48%) scale(1.04);
  opacity: 0.16;
  filter: blur(18px) saturate(0.6);
  pointer-events: none;
}

/* ── Učitavanje ──────────────────────────────────────────────────────── */
.hero__text > * {
  animation: rise 900ms var(--ease-out) both;
}

.hero__text > :nth-child(2) {
  animation-delay: 90ms;
}

.hero__text > :nth-child(3) {
  animation-delay: 180ms;
}

.hero__text > :nth-child(4) {
  animation-delay: 260ms;
}

.hero__visual {
  animation: rise-phone 1200ms var(--ease-out) 200ms both;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
}

@keyframes rise-phone {
  from {
    opacity: 0;
    transform: translateY(48px);
  }
}

/* ── Raspored po širini ──────────────────────────────────────────────────
   Preko 1200 px drži se kompozicija s mockupa. Ispod toga se ne pokušava
   držati: telefon ide pod tekst, a slika prestaje da bude kompozicija i
   postaje atmosfera.
   ─────────────────────────────────────────────────────────────────────── */
@media (max-width: 1199px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: clamp(2rem, 1rem + 4vw, 3.5rem);
  }

      .hero__phone :deep(.shot__img) {
    width: min(100%, 360px);
  }
}

@media (max-width: 767px) {
  .hero__eyebrow {
    letter-spacing: 0.16em;
  }

  .hero__phone :deep(.shot__img) {
    width: min(100%, 290px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__text > *,
  .hero__visual,
  .hero__visual::before {
    animation: none;
  }
}
</style>
