<script setup lang="ts">
/**
 * „Šta kažu članovi" (vlasnik, 5.11.2026).
 *
 * Samo mišljenja koja je osoblje odobrilo i za koja je član dao pristanak;
 * ime i zamućena slika, nikad prezime ni oštra slika. Bez ijednog takvog
 * mišljenja sekcije nema. Uz kartice uvijek stoji izjava da član za
 * mišljenje dobija 50 coinsa bez obzira na ocjenu — ovo nisu ocjene iz
 * App Storea ni Google Playa i ne vode tamo.
 *
 * Karusel (vlasnik, 21.11.2026): sva mišljenja, ne jedno ispod drugog —
 * strelice lijevo i desno, prevlačenje prstom, lagano samo listanje.
 * Kartice van fokusa blijede i malo se smanje. Listanje je obično
 * horizontalno klizanje sa „scroll-snap", pa radi i bez JS-a i na dodir.
 * Smanjeni pokreti: bez samog listanja i bez animacije.
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

const track = ref<HTMLElement | null>(null)
/** Kartice koje su sad većim dijelom na ekranu. */
const visible = ref<Set<number>>(new Set())
/** Prva vidljiva kartica (za brojač „3 / 26"). */
const current = computed(() => (visible.value.size ? Math.min(...visible.value) : 0))
const perView = computed(() => Math.max(1, visible.value.size))
const progress = computed(() => {
  const n = items.value.length
  if (!n) return 0
  return Math.min(1, (current.value + perView.value) / n)
})

/** Kartice čiji je tekst skraćen, i one koje je posjetilac otvorio. */
const clipped = ref<Set<number>>(new Set())
const opened = ref<Set<number>>(new Set())

function toggle(i: number) {
  stopAuto()
  const next = new Set(opened.value)
  if (next.has(i)) next.delete(i)
  else next.add(i)
  opened.value = next
}

let timer: ReturnType<typeof setInterval> | null = null
/** Ko jednom sam lista, samo listanje se više ne vraća. */
let userTookOver = false
const paused = ref(false)

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function isRtl(el: HTMLElement) {
  return getComputedStyle(el).direction === 'rtl'
}

/** Korak listanja: širina jedne kartice s razmakom. */
function step(el: HTMLElement) {
  const card = el.querySelector<HTMLElement>('.tst__card')
  if (!card) return el.clientWidth
  const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0
  return card.getBoundingClientRect().width + gap
}

function go(dir: 1 | -1, fromUser = true) {
  const el = track.value
  if (!el) return
  if (fromUser) stopAuto()
  const rtl = isRtl(el)
  const max = el.scrollWidth - el.clientWidth
  const pos = Math.abs(el.scrollLeft)
  const behavior: ScrollBehavior = reducedMotion() ? 'auto' : 'smooth'
  // Na kraju „naprijed" vodi na početak, na početku „nazad" na kraj.
  if (dir === 1 && pos >= max - 4) {
    el.scrollTo({ left: 0, behavior })
    return
  }
  if (dir === -1 && pos <= 4) {
    el.scrollTo({ left: rtl ? -max : max, behavior })
    return
  }
  el.scrollBy({ left: (rtl ? -1 : 1) * dir * step(el), behavior })
}

function onKey(e: KeyboardEvent) {
  const el = track.value
  if (!el) return
  const rtl = isRtl(el)
  if (e.key === 'ArrowRight') {
    e.preventDefault()
    go(rtl ? -1 : 1)
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    go(rtl ? 1 : -1)
  }
}

function startAuto() {
  if (timer || userTookOver || reducedMotion() || items.value.length < 2) return
  timer = setInterval(() => {
    // Samo dok je sekcija na ekranu: ko do nje dođe, zatekne je na početku.
    const r = track.value?.getBoundingClientRect()
    const onScreen = !!r && r.bottom > 0 && r.top < window.innerHeight
    if (!paused.value && onScreen && document.visibilityState === 'visible') go(1, false)
  }, 6000)
}

function stopAuto() {
  userTookOver = true
  if (timer) clearInterval(timer)
  timer = null
}

/**
 * Koje su kartice sad većim dijelom (60 %) unutar trake. Računa se iz
 * položaja, na svako klizanje i promjenu veličine — 20-ak kartica je
 * jeftino, a ne ovisi o IntersectionObserveru koji u pozadinskoj kartici
 * pregledača zna kasniti.
 */
function measure() {
  const el = track.value
  if (!el) return
  const box = el.getBoundingClientRect()
  const next = new Set<number>()
  el.querySelectorAll<HTMLElement>('.tst__card').forEach((card) => {
    const r = card.getBoundingClientRect()
    const overlap = Math.min(r.right, box.right) - Math.max(r.left, box.left)
    if (r.width > 0 && overlap / r.width >= 0.6) next.add(Number(card.dataset.i))
  })
  visible.value = next

  const cut = new Set<number>()
  el.querySelectorAll<HTMLElement>('.tst__body').forEach((body) => {
    if (body.scrollHeight > body.clientHeight + 2) cut.add(Number(body.dataset.i))
  })
  // Otvorena kartica više nije skraćena, ali je bila: „Prikaži manje" ostaje.
  for (const i of opened.value) if (clipped.value.has(i)) cut.add(i)
  clipped.value = cut
}

watch(
  () => items.value.length,
  async (n) => {
    if (!n || typeof window === 'undefined') return
    await nextTick()
    measure()
    startAuto()
  },
  { immediate: true },
)

onMounted(() => window.addEventListener('resize', measure, { passive: true }))

onBeforeUnmount(() => {
  window.removeEventListener('resize', measure)
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section v-if="items.length" id="preporuke" class="section tst" aria-labelledby="tst-title">
    <div class="wrap">
      <div class="tst__top">
        <div>
          <p v-reveal class="kicker"><StarMark /> {{ c.testimonials.kicker }}</p>
          <h2 id="tst-title" v-reveal="60" class="h2 tst__title">{{ c.testimonials.title }}</h2>
          <p v-reveal="120" class="tst__disclosure">{{ c.testimonials.disclosure }}</p>
        </div>
        <div v-if="items.length > 1" class="tst__nav tst__nav--top">
          <button type="button" class="tst__arrow tst__arrow--prev" :aria-label="c.testimonials.prev" @click="go(-1)">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" class="tst__arrow tst__arrow--next" :aria-label="c.testimonials.next" @click="go(1)">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <ul
        ref="track"
        class="tst__track"
        tabindex="0"
        role="region"
        aria-roledescription="carousel"
        :aria-label="c.testimonials.title"
        @keydown="onKey"
        @scroll.passive="measure"
        @pointerdown="stopAuto"
        @wheel.passive="stopAuto"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
        @focusin="paused = true"
        @focusout="paused = false"
      >
        <li
          v-for="(t, i) in items"
          :key="`${t.first_name}-${t.date}-${i}`"
          :data-i="i"
          class="tst__card"
          :class="{ 'is-in': visible.has(i) || !visible.size }"
          :aria-label="`${i + 1} / ${items.length}`"
        >
          <span class="tst__quote" aria-hidden="true">“</span>
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
          <blockquote :id="`tst-body-${i}`" class="tst__body" :class="{ open: opened.has(i) }" :data-i="i">{{ t.body }}</blockquote>
          <button
            v-if="clipped.has(i) || opened.has(i)"
            type="button"
            class="tst__more"
            :aria-expanded="opened.has(i)"
            :aria-controls="`tst-body-${i}`"
            @click="toggle(i)"
          >
            {{ opened.has(i) ? c.testimonials.less : c.testimonials.more }}
          </button>
          <p v-if="when(t.date)" class="tst__date">{{ when(t.date) }}</p>
        </li>
      </ul>

      <div v-if="items.length > 1" class="tst__foot">
        <div class="tst__nav tst__nav--bottom">
          <button type="button" class="tst__arrow tst__arrow--prev" :aria-label="c.testimonials.prev" @click="go(-1)">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
        </div>
        <div class="tst__progress" aria-hidden="true">
          <span :style="{ transform: `scaleX(${progress})` }" />
        </div>
        <p class="tst__count">{{ current + 1 }} / {{ items.length }}</p>
        <div class="tst__nav tst__nav--bottom">
          <button type="button" class="tst__arrow tst__arrow--next" :aria-label="c.testimonials.next" @click="go(1)">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tst {
  background: var(--paper);
  overflow: hidden;
}

.tst__top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
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

.tst__nav {
  display: flex;
  gap: 0.6rem;
  flex: none;
}

.tst__arrow {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid var(--gold);
  background: var(--paper-2);
  color: var(--gold-deep);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.25s ease;
}

.tst__arrow svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tst__arrow:hover {
  background: var(--gold);
  color: var(--ink);
  box-shadow: 0 8px 24px var(--gold-glow);
}

.tst__arrow--prev:hover {
  transform: translateX(-2px);
}

.tst__arrow--next:hover {
  transform: translateX(2px);
}

.tst__arrow:active {
  transform: scale(0.94);
}

/* Strelice prate smjer pisma. */
:dir(rtl) .tst__arrow svg {
  transform: scaleX(-1);
}

.tst__track {
  --per: 3;
  --gap: clamp(1rem, 2vw, 1.75rem);
  display: flex;
  gap: var(--gap);
  margin: clamp(2rem, 1.5rem + 2vw, 3rem) 0 0;
  padding: 0.75rem 0.25rem 1.75rem;
  list-style: none;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  outline-offset: 6px;
}

.tst__track::-webkit-scrollbar {
  display: none;
}

.tst__card {
  position: relative;
  flex: 0 0 calc((100% - (var(--per) - 1) * var(--gap)) / var(--per));
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem 1.5rem 1.5rem;
  background: var(--paper-2);
  border: 1px solid var(--line);
  border-radius: 22px;
  min-width: 0;
  opacity: 0.45;
  transform: scale(0.95);
  transition:
    opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.6s ease,
    border-color 0.6s ease;
}

.tst__card.is-in {
  opacity: 1;
  transform: none;
  border-color: color-mix(in oklch, var(--gold) 45%, var(--line));
  box-shadow: 0 18px 40px -22px var(--gold-glow), 0 2px 0 var(--gold-glow);
}

.tst__quote {
  position: absolute;
  top: 0.4rem;
  inset-inline-end: 1.1rem;
  font-family: var(--font-display);
  font-size: 4.5rem;
  line-height: 1;
  color: var(--gold-soft);
  pointer-events: none;
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
  box-shadow: 0 0 0 2px var(--paper-2), 0 0 0 3px var(--gold-soft);
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
  /* Kartice su iste visine; dugo mišljenje se skrati na sedam redova, da ne
     razvuče sve kratke. */
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tst__body.open {
  display: block;
  -webkit-line-clamp: unset;
  overflow: visible;
}

.tst__more {
  align-self: flex-start;
  margin-top: -0.4rem;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: var(--fs-small);
  font-weight: 600;
  color: var(--gold-deep);
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: var(--gold-soft);
  text-underline-offset: 3px;
}

.tst__more:hover {
  text-decoration-color: var(--gold);
}

.tst__date {
  margin-top: auto;
  font-size: var(--fs-small);
  color: var(--ink-3);
}

.tst__foot {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.25rem;
}

.tst__nav--bottom {
  display: none;
}

.tst__progress {
  flex: 1;
  height: 3px;
  border-radius: 3px;
  background: var(--line);
  overflow: hidden;
}

.tst__progress span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--gold-soft), var(--gold));
  transform-origin: left center;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

:dir(rtl) .tst__progress span {
  transform-origin: right center;
}

.tst__count {
  flex: none;
  font-variant-numeric: tabular-nums;
  font-size: var(--fs-small);
  color: var(--ink-3);
  min-width: 4.5em;
  text-align: end;
}

@media (max-width: 900px) {
  .tst__track {
    --per: 2;
  }
}

@media (max-width: 640px) {
  /* Na telefonu: jedna kartica i komad sljedeće, da se vidi da ima još. */
  .tst__track {
    --per: 1.15;
  }

  .tst__nav--top {
    display: none;
  }

  .tst__nav--bottom {
    display: flex;
  }

  .tst__arrow {
    width: 46px;
    height: 46px;
  }

  .tst__count {
    min-width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tst__track {
    scroll-behavior: auto;
  }

  .tst__card,
  .tst__progress span,
  .tst__arrow {
    transition: none;
  }

  .tst__card {
    opacity: 1;
    transform: none;
  }
}
</style>
