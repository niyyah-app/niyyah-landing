<script setup lang="ts">
/**
 * Render telefona koji već ima svoj okvir.
 *
 * Razlika prema PhoneFrame: tamo stranica crta okvir oko screenshota ekrana,
 * ovdje je okvir dio slike. Nacrtati još jedan oko njega značilo bi telefon u
 * telefonu, a kako su renderi pod uglom i u omjeru 2:3, okvir bi ih uz to
 * odsjekao sa strana.
 *
 * Slike moraju imati prozirnu pozadinu (.webp ili .png) — JPEG bi je popunio
 * bijelim pravougaonikom.
 */
withDefaults(
  defineProps<{
    src: string
    alt: string
    /** Stvarna veličina slike u pikselima — ide u width/height na <img>, pa
     *  preglednik rezerviše mjesto prije nego se slika učita i stranica ne
     *  skače. Prikazanu veličinu i dalje određuje `width` ispod (CSS). */
    imgWidth: number
    imgHeight: number
    width?: number
    eager?: boolean
    /** Topli oreol iza uređaja; hero ga ima, uže sekcije obično ne trebaju. */
    glow?: boolean
  }>(),
  { width: 420, eager: false, glow: false },
)
</script>

<template>
  <div
    class="shot"
    :class="{ 'shot--glow': glow }"
    :style="{ '--shot-w': `${width}px` }"
  >
    <img
      class="shot__img"
      :src="src"
      :alt="alt"
      :width="imgWidth"
      :height="imgHeight"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
    />
  </div>
</template>

<style scoped>
.shot {
  display: flex;
  justify-content: center;
  position: relative;
  isolation: isolate;
}

.shot__img {
  width: min(100%, var(--shot-w, 420px));
  height: auto;
}

/* Uži ekran, manji uređaj — unutar komponente, jer bi inline varijablu na
   elementu izvana ionako niko ne mogao nadjačati. */
@media (max-width: 900px) {
  .shot__img {
    width: min(100%, calc(var(--shot-w, 420px) * 0.8));
  }
}

/* Dvije elipse i kosi trag, sve u zlatu iz palete — svjetlo djeluje kao da
   dolazi od lampe na samoj slici, a ne kao dodatak preko nje. */
.shot--glow::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 2% -20% -2%;
  background:
    radial-gradient(30% 22% at 50% 38%, oklch(0.86 0.065 85 / 0.5), transparent 70%),
    radial-gradient(58% 44% at 50% 44%, oklch(0.76 0.105 82 / 0.42), transparent 72%),
    radial-gradient(92% 74% at 50% 54%, oklch(0.5 0.088 70 / 0.34), transparent 74%);
  filter: blur(42px);
  animation: shot-glow 7s var(--ease-in-out) infinite;
}

.shot--glow::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 14% 6% 18% 34%;
  background: linear-gradient(
    198deg,
    oklch(0.86 0.065 85 / 0.34),
    oklch(0.76 0.105 82 / 0.12) 46%,
    transparent 72%
  );
  filter: blur(30px);
  animation: shot-glow 7s var(--ease-in-out) 900ms infinite;
}

@keyframes shot-glow {
  0%,
  100% {
    opacity: 0.75;
    transform: scale(0.97);
  }
  50% {
    opacity: 1;
    transform: scale(1.03);
  }
}

@media (prefers-reduced-motion: reduce) {
  .shot--glow::before,
  .shot--glow::after {
    animation: none;
  }
}
</style>
