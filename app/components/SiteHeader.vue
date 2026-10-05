<script setup lang="ts">
const c = useCopy()
const localePath = useLocalePath()
const { appLaunched } = useRuntimeConfig().public

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

watch(open, (v) => document.documentElement.classList.toggle('menu-open', v))
</script>

<template>
  <a class="skip" href="#sadrzaj">{{ c.nav.skip }}</a>
  <header class="hdr" :class="{ 'is-solid': scrolled || open }">
    <div class="wrap hdr__row">
      <NuxtLink :to="localePath('/')" class="hdr__brand" :aria-label="c.nav.home">
        <img src="/logo-372.webp" alt="Niyyah" width="414" height="372" />
      </NuxtLink>

      <nav class="hdr__nav" :aria-label="c.nav.label">
        <a v-for="l in c.nav.links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>

      <!-- Na telefonu je ovo redom kojim se i vidi: dugme, meni, jezik. Na
           širokom ekranu nema dugmeta za meni, pa se jezik vraća ispred
           dugmeta preko `order` — jedan od ta dva reda mora biti postavljen
           u CSS-u, jer se razilaze, a telefon je taj koji se više gleda. -->
      <div class="hdr__end">
        <a href="#pridruzi" class="btn btn--gold hdr__cta">
          {{ appLaunched ? c.cta.download : c.cta.waitlistShort }}
        </a>
        <button
          type="button"
          class="hdr__menu"
          :aria-expanded="open"
          aria-controls="mob-nav"
          :aria-label="open ? c.nav.close : c.nav.menu"
          @click="open = !open"
        >
          <Icon :name="open ? 'close' : 'menu'" :size="22" />
        </button>
        <LanguageMenu class="hdr__lang" />
      </div>
    </div>

    <nav id="mob-nav" class="mob" :class="{ 'is-open': open }" :aria-label="c.nav.label" :inert="!open || undefined">
      <div class="mob__in">
        <a v-for="l in c.nav.links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
        <LanguageMenu variant="mobile" />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.skip {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 100;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: var(--gold);
  color: var(--night-950);
  font-weight: 500;
  transform: translateY(-160%);
  transition: transform 200ms var(--ease-out);
}

.skip:focus {
  transform: none;
}

.hdr {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  color: var(--moon);
  transition:
    background-color 300ms ease,
    box-shadow 300ms ease;
}

.hdr.is-solid {
  background: oklch(0.205 0.042 272 / 0.96);
  box-shadow: 0 1px 0 var(--night-line);
}

.hdr__row {
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 0.2rem + 1.4vw, 1.5rem);
  height: var(--hdr-h);
  /* Bez ovoga flex djeca ne smiju ispod svoje prirodne širine, pa duži
     prijevod ili veće zumiranje izgura sadržaj iz zaglavlja umjesto da ga
     stisne. */
  min-width: 0;
}

.hdr__brand {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--moon);
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1.6rem;
  line-height: 1;
}

/* Logotip je cijeli lockup — par, ime i slogan — a ne ikona, pa ne ide ni u
   krug ni u prsten: oboje bi mu odsjekli tekst. Visina prati širinu prozora
   umjesto fiksnih 78 px: na užem ekranu je manji i ostavlja mjesta
   navigaciji, umjesto da je istisne. */
.hdr__brand img {
  width: auto;
  height: clamp(48px, 2rem + 2.6vw, 78px);
}

.hdr__nav {
  display: flex;
  gap: clamp(0.9rem, 0.2rem + 1.4vw, 1.9rem);
  /* Uz desni kraj, do jezika i dugmeta — ne po sredini zaglavlja. */
  margin-left: auto;
  min-width: 0;
}

.hdr__nav a {
  position: relative;
  white-space: nowrap;
  color: var(--moon-2);
  text-decoration: none;
  font-size: var(--fs-small);
  transition: color 200ms ease;
}

.hdr__nav a:hover {
  color: var(--moon);
}

.hdr__end {
  flex: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: auto;
}

.hdr__nav + .hdr__end {
  margin-left: clamp(0.9rem, 0.3rem + 1.2vw, 1.9rem);
}

.hdr__lang {
  flex: none;
}

/* Širok ekran: jezik prvi, pa dugme — kako je i bilo. */
@media (min-width: 1101px) {
  .hdr__lang {
    order: -1;
  }
}

.hdr__cta {
  min-height: 42px;
  padding: 0 1.15rem;
  font-size: var(--fs-small);
  white-space: nowrap;
}

.hdr__menu {
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--moon);
  cursor: pointer;
}

.mob {
  display: none;
}

@media (max-width: 1100px) {
  .hdr__nav {
    display: none;
  }
  /* `display: none` ne vadi navigaciju iz reda susjeda, pa je
     `.hdr__nav + .hdr__end` i dalje gazio `margin-left: auto` svojim malim
     razmakom — zato je cijela grupa na telefonu stajala odmah uz logotip, s
     praznim prostorom desno. */
  .hdr__nav + .hdr__end {
    margin-left: auto;
  }
  .hdr__menu {
    display: grid;
  }
  .mob {
    display: grid;
    grid-template-rows: 0fr;
    padding-inline: var(--gutter);
    background: var(--night-900);
    transition: grid-template-rows 320ms var(--ease-out);
    overflow: hidden;
  }
  .mob.is-open {
    grid-template-rows: 1fr;
    box-shadow: 0 1px 0 var(--night-line);
  }
  .mob__in {
    min-height: 0;
  }
  .mob a {
    display: block;
    padding: 0.95rem 0;
    border-top: 1px solid var(--night-line);
    color: var(--moon);
    text-decoration: none;
    font-family: var(--font-display);
    font-size: 1.5rem;
  }
}

@media (max-width: 420px) {
  .hdr__cta {
    display: none;
  }
}
</style>
