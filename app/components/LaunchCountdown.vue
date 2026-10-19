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
const props = defineProps<{ compact?: boolean }>()

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
    <aside
      v-if="visible"
      class="countdown"
      :class="{ 'countdown--compact': props.compact }"
      :aria-label="spoken"
    >
      <span class="countdown__medal" aria-hidden="true">
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
      </span>

      <div class="countdown__body">
      <p class="countdown__title">{{ c.hero.countdown }}</p>

      <ol class="countdown__cells" aria-hidden="true">
        <li v-for="cell in cells" :key="cell.unit" class="countdown__cell">
          <span class="countdown__value">{{ cell.value }}</span>
          <span class="countdown__label">{{ cell.label }}</span>
        </li>
      </ol>
      </div>
    </aside>
  </ClientOnly>
</template>

<style scoped>
.countdown {
  /* Niska i široka: sat lijevo, naslov i brojevi desno u jednom redu. */
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.95rem 1.15rem 0.95rem 0.95rem;
  border: 1px solid var(--gold-glow);
  border-radius: 1.35rem;
  background: linear-gradient(160deg, oklch(0.3 0.05 272 / 0.72), oklch(0.2 0.042 272 / 0.82));
  border-color: oklch(0.76 0.105 82 / 0.45);
  box-shadow:
    0 0 36px oklch(0.76 0.105 82 / 0.32),
    0 0 90px oklch(0.76 0.105 82 / 0.18),
    0 18px 48px oklch(0.12 0.03 272 / 0.55),
    inset 0 1px 0 oklch(0.955 0.018 80 / 0.08);
  backdrop-filter: blur(12px);
  animation:
    appear 900ms var(--ease-out) 600ms both,
    halo 5s ease-in-out 1.5s infinite;
}

/* Tanka zlatna linija po gornjoj ivici, kao rub stakla. */
.countdown::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 18%;
  right: 18%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-soft), transparent);
}

/* Sat stoji u zlatnom medaljonu, odvojen linijom od brojeva. */
.countdown__medal {
  position: relative;
  flex: none;
  display: grid;
  place-items: center;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  border: 1px solid oklch(0.76 0.105 82 / 0.5);
  background: radial-gradient(circle at 50% 35%, oklch(0.76 0.105 82 / 0.32), oklch(0.76 0.105 82 / 0.06) 70%);
  box-shadow: 0 0 18px oklch(0.76 0.105 82 / 0.28);
}

.countdown__glass {
  width: 1.65rem;
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

.countdown__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-inline-start: 1rem;
  border-inline-start: 1px solid oklch(0.76 0.105 82 / 0.22);
}

.countdown__title {
  margin: 0;
  color: var(--gold-soft);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  white-space: nowrap;
  text-transform: uppercase;
}

.countdown__cells {
  display: grid;
  grid-template-columns: repeat(4, 3.35rem);
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.countdown__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.45rem 0.1rem 0.35rem;
  border-radius: 0.75rem;
  border: 1px solid oklch(0.76 0.105 82 / 0.16);
  background: linear-gradient(180deg, oklch(0.955 0.018 80 / 0.08), oklch(0.955 0.018 80 / 0.02));
}

/* Sans cifre: serifne iz naslova izgledaju starinski. */
.countdown__value {
  color: var(--moon);
  background: linear-gradient(180deg, var(--moon), var(--gold-soft));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-body);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.1;
  font-variant-numeric: tabular-nums lining-nums;
}

.countdown__label {
  margin-top: 0.1rem;
  color: var(--moon-3);
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  line-height: 1.2;
  white-space: nowrap;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}

/* Zlatni sjaj iza kartice lagano diše, kao krug iza telefona. */
@keyframes halo {
  50% {
    box-shadow:
      0 0 48px oklch(0.76 0.105 82 / 0.45),
      0 0 120px oklch(0.76 0.105 82 / 0.26),
      0 18px 48px oklch(0.12 0.03 272 / 0.55),
      inset 0 1px 0 oklch(0.955 0.018 80 / 0.08);
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

/* Uska varijanta za laptop ekrane gdje široka ne stane pored telefona:
   sat i naslov gore, brojevi 2 × 2 ispod. */
.countdown--compact {
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 0.9rem;
  text-align: center;
}

.countdown--compact .countdown__body {
  align-items: center;
  padding-inline-start: 0;
  border-inline-start: 0;
}

.countdown--compact .countdown__title {
  max-width: 9.5rem;
  white-space: normal;
  line-height: 1.4;
  text-wrap: balance;
}

.countdown--compact .countdown__cells {
  grid-template-columns: repeat(2, 3.6rem);
}

/* Uski telefoni: ista kartica, malo zbijenija, da stane u marginu od 16 px. */
@media (max-width: 480px) {
  .countdown {
    gap: 0.7rem;
    padding: 0.8rem 0.85rem 0.8rem 0.75rem;
  }

  .countdown__medal {
    width: 2.8rem;
    height: 2.8rem;
  }

  .countdown__body {
    padding-inline-start: 0.7rem;
  }

  .countdown__cells {
    grid-template-columns: repeat(4, 2.85rem);
    gap: 0.3rem;
  }

  .countdown__value {
    font-size: 1.3rem;
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
