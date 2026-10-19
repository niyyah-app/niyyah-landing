<script setup lang="ts">
/**
 * Odbrojavanje do objave, uz telefon u hero sekciji.
 *
 * Crta se tek u pregledniku: stranica je statična, pa bi broj sekundi iz
 * builda bio pogrešan već sekundu poslije, a razlika između servera i
 * preglednika ruši hidrataciju. Nestaje kad trenutak prođe ili kad je
 * `appLaunched` uključen.
 *
 * Nazivi jedinica (dana, sati…) su u prijevodima, u obliku koji stoji uz
 * bilo koji broj. `Intl.NumberFormat` je probao: mnogi preglednici nemaju
 * bosanski, albanski, kurdski… i pišu „21 day“.
 */
const c = useCopy()
const { launchAt, appLaunched } = useRuntimeConfig().public

const target = launchAt ? Date.parse(String(launchAt)) : Number.NaN
const now = ref<number | null>(null)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  now.value = Date.now()
  timer = setInterval(() => (now.value = Date.now()), 1000)
})
onBeforeUnmount(() => clearInterval(timer))

const left = computed(() => (now.value === null || Number.isNaN(target) ? 0 : Math.max(0, target - now.value)))
const visible = computed(() => !appLaunched && now.value !== null && left.value > 0)

const units = ['day', 'hour', 'minute', 'second'] as const

const cells = computed(() => {
  const s = Math.floor(left.value / 1000)
  const values = [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60]
  return units.map((u, i) => ({
    unit: u,
    value: i === 0 ? String(values[i]) : String(values[i]).padStart(2, '0'),
    label: c.value.hero.countdownUnits[i] ?? u,
  }))
})

// Čitač ekrana ne treba čuti svaku sekundu: dobija jednu rečenicu s danima.
const spoken = computed(() => `${c.value.hero.countdown} ${cells.value[0]!.value} ${cells.value[0]!.label}`)
</script>

<template>
  <ClientOnly>
    <aside v-if="visible" class="countdown" :aria-label="spoken">
      <svg class="countdown__glass" viewBox="0 0 48 64" aria-hidden="true">
        <defs>
          <clipPath id="cd-top"><path d="M12 8h24c0 10-8 16-12 24C20 24 12 18 12 8z" /></clipPath>
          <clipPath id="cd-bottom"><path d="M24 32c4 8 12 14 12 24H12c0-10 8-16 12-24z" /></clipPath>
        </defs>
        <path class="countdown__frame" d="M8 4h32M8 60h32" />
        <path class="countdown__bulb" d="M12 6c0 12 8 18 12 26-4 8-12 14-12 26M36 6c0 12-8 18-12 26 4 8 12 14 12 26" />
        <rect class="countdown__sand countdown__sand--top" clip-path="url(#cd-top)" x="10" y="8" width="28" height="24" />
        <rect class="countdown__sand countdown__sand--bottom" clip-path="url(#cd-bottom)" x="10" y="32" width="28" height="24" />
        <line class="countdown__stream" x1="24" y1="31" x2="24" y2="55" />
      </svg>

      <p class="countdown__title">{{ c.hero.countdown }}</p>

      <ol class="countdown__cells" aria-hidden="true">
        <li v-for="cell in cells" :key="cell.unit" class="countdown__cell">
          <span class="countdown__value">{{ cell.value }}</span>
          <span class="countdown__label">{{ cell.label }}</span>
        </li>
      </ol>
    </aside>
  </ClientOnly>
</template>

<style scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  width: 11.5rem;
  padding: 1.2rem 1rem 1.1rem;
  border: 1px solid var(--gold-glow);
  border-radius: 1.4rem;
  background: linear-gradient(160deg, oklch(0.3 0.05 272 / 0.72), oklch(0.2 0.042 272 / 0.82));
  box-shadow:
    0 18px 48px oklch(0.12 0.03 272 / 0.55),
    inset 0 1px 0 oklch(0.955 0.018 80 / 0.08);
  backdrop-filter: blur(12px);
  text-align: center;
  animation: appear 900ms var(--ease-out) 600ms both;
}

.countdown__glass {
  width: 2.6rem;
  height: auto;
  animation: tilt 6s ease-in-out infinite;
}

.countdown__frame {
  stroke: var(--gold);
  stroke-width: 3;
  stroke-linecap: round;
}

.countdown__bulb {
  fill: none;
  stroke: var(--gold-soft);
  stroke-width: 1.6;
  opacity: 0.85;
}

.countdown__sand {
  fill: var(--gold);
}

/* Gornji pijesak se spušta, donji raste — jedan krug traje minut, kao
   kazaljka sekundi ispod. */
.countdown__sand--top {
  transform-box: fill-box;
  transform-origin: bottom;
  animation: drain 60s linear infinite;
}

.countdown__sand--bottom {
  transform-box: fill-box;
  transform-origin: bottom;
  animation: fill 60s linear infinite;
}

.countdown__stream {
  stroke: var(--gold);
  stroke-width: 1.2;
  stroke-dasharray: 2 3;
  animation: stream 0.6s linear infinite;
}

.countdown__title {
  margin: 0;
  color: var(--gold-soft);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.countdown__cells {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.countdown__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.2rem 0.4rem;
  border-radius: 0.8rem;
  background: oklch(0.955 0.018 80 / 0.05);
}

/* Sans cifre: serifne iz naslova izgledaju starinski. */
.countdown__value {
  color: var(--moon);
  font-family: var(--font-body);
  font-size: 1.55rem;
  font-weight: 600;
  line-height: 1.1;
  font-variant-numeric: tabular-nums lining-nums;
}

.countdown__label {
  color: var(--moon-3);
  font-size: 0.7rem;
  line-height: 1.2;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}

@keyframes tilt {
  50% {
    transform: rotate(-6deg);
  }
}

@keyframes drain {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0.05);
  }
}

@keyframes fill {
  from {
    transform: scaleY(0.05);
  }
  to {
    transform: scaleY(1);
  }
}

@keyframes stream {
  to {
    stroke-dashoffset: -5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .countdown,
  .countdown__glass,
  .countdown__sand--top,
  .countdown__sand--bottom,
  .countdown__stream {
    animation: none;
  }
}
</style>
