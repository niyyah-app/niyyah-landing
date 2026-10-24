<script setup lang="ts">
import type { NuxtError } from '#app'
import { isLegalLocale, legalUi, type LegalLocale } from '~/legal/content'
import { support } from '~/legal/support'

/**
 * Stranica greške, u ruhu sajta.
 *
 * Na GitHub Pages svaka nepostojeća adresa dobija 404.html — prazan Nuxt
 * omotač koji se digne u pregledaču, ne nađe rutu i pokaže ovo. Dotad je to
 * bila Nuxtova generička stranica na engleskom, bez zaglavlja, podnožja i
 * puta nazad. Jezik se čita iz adrese (/de/nesto → njemački), pa i pogrešan
 * link na drugom jeziku ostane na tom jeziku.
 *
 * Tekst je na devet jezika aplikacije (isti kao pravne stranice); ostali
 * jezici dobiju engleski, a zaglavlje i podnožje i dalje govore njihov.
 */
const props = defineProps<{ error: NuxtError }>()

const { locale } = useI18n()
const localePath = useLocalePath()

type ErrorCopy = { notFound: string; notFoundText: string; failed: string; failedText: string; home: string; more: string }

const copy: Record<LegalLocale, ErrorCopy> = {
  bs: {
    notFound: 'Stranica nije pronađena',
    notFoundText: 'Adresa koju si otvorio ne postoji ili je premještena. Provjeri link ili kreni s početne stranice.',
    failed: 'Nešto nije u redu',
    failedText: 'Stranica se trenutno ne može prikazati. Pokušaj ponovo za trenutak.',
    home: 'Na početnu',
    more: 'Korisni linkovi',
  },
  en: {
    notFound: 'Page not found',
    notFoundText: 'The address you opened doesn’t exist or has moved. Check the link, or start from the home page.',
    failed: 'Something went wrong',
    failedText: 'This page can’t be shown right now. Please try again in a moment.',
    home: 'Go to the home page',
    more: 'Useful links',
  },
  de: {
    notFound: 'Seite nicht gefunden',
    notFoundText: 'Die Adresse, die du geöffnet hast, gibt es nicht oder sie wurde verschoben. Prüfe den Link oder fang auf der Startseite an.',
    failed: 'Etwas ist schiefgelaufen',
    failedText: 'Diese Seite kann gerade nicht angezeigt werden. Versuch es gleich noch einmal.',
    home: 'Zur Startseite',
    more: 'Nützliche Links',
  },
  tr: {
    notFound: 'Sayfa bulunamadı',
    notFoundText: 'Açtığın adres yok ya da taşındı. Bağlantıyı kontrol et veya ana sayfadan başla.',
    failed: 'Bir şeyler ters gitti',
    failedText: 'Bu sayfa şu anda gösterilemiyor. Birazdan tekrar dene.',
    home: 'Ana sayfaya git',
    more: 'Faydalı bağlantılar',
  },
  fr: {
    notFound: 'Page introuvable',
    notFoundText: 'L’adresse que tu as ouverte n’existe pas ou a été déplacée. Vérifie le lien ou repars de la page d’accueil.',
    failed: 'Un problème est survenu',
    failedText: 'Cette page ne peut pas s’afficher pour le moment. Réessaie dans un instant.',
    home: 'Aller à l’accueil',
    more: 'Liens utiles',
  },
  id: {
    notFound: 'Halaman tidak ditemukan',
    notFoundText: 'Alamat yang kamu buka tidak ada atau sudah dipindahkan. Periksa tautannya, atau mulai dari beranda.',
    failed: 'Terjadi kesalahan',
    failedText: 'Halaman ini tidak dapat ditampilkan saat ini. Coba lagi sebentar lagi.',
    home: 'Ke beranda',
    more: 'Tautan berguna',
  },
  ms: {
    notFound: 'Halaman tidak ditemui',
    notFoundText: 'Alamat yang awak buka tidak wujud atau sudah dipindahkan. Semak pautan itu, atau mula dari halaman utama.',
    failed: 'Ada sesuatu yang tidak kena',
    failedText: 'Halaman ini tidak dapat dipaparkan sekarang. Cuba lagi sebentar lagi.',
    home: 'Ke halaman utama',
    more: 'Pautan berguna',
  },
  ar: {
    notFound: 'الصفحة غير موجودة',
    notFoundText: 'العنوان الذي فتحته غير موجود أو نُقل إلى مكان آخر. تحقّق من الرابط أو ابدأ من الصفحة الرئيسية.',
    failed: 'حدث خطأ ما',
    failedText: 'لا يمكن عرض هذه الصفحة الآن. حاول مرة أخرى بعد قليل.',
    home: 'إلى الصفحة الرئيسية',
    more: 'روابط مفيدة',
  },
  ur: {
    notFound: 'صفحہ نہیں ملا',
    notFoundText: 'آپ نے جو پتہ کھولا وہ موجود نہیں یا کہیں اور منتقل ہو گیا ہے۔ لنک چیک کریں یا ہوم پیج سے شروع کریں۔',
    failed: 'کچھ غلط ہو گیا',
    failedText: 'یہ صفحہ اس وقت نہیں دکھایا جا سکتا۔ تھوڑی دیر بعد دوبارہ کوشش کریں۔',
    home: 'ہوم پیج پر جائیں',
    more: 'مفید لنکس',
  },
}

// Pravni tekst postoji na jezicima aplikacije; ostali jezici vode na engleski
// (isto kao SiteFooter).
const legalLang = computed<LegalLocale>(() => (isLegalLocale(locale.value) ? locale.value : 'en'))
const t = computed(() => copy[legalLang.value])
const legal = computed(() => legalUi[legalLang.value])
const supportLabel = computed(() => support[legalLang.value].footer)

const notFound = computed(() => (props.error?.statusCode ?? 404) === 404)
const title = computed(() => (notFound.value ? t.value.notFound : t.value.failed))
const text = computed(() => (notFound.value ? t.value.notFoundText : t.value.failedText))

// app.vue (lang, dir, hreflang) se ne crta uz grešku, pa jezik i smjer
// pisma postavlja ova stranica. Bez canonical/hreflang: ova adresa nije
// verzija nijedne stranice. noindex: GitHub Pages ionako vraća 404, ali
// pretraga ne smije uzeti ni ovu kopiju.
const head = useLocaleHead()
useHead(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang, dir: head.value.htmlAttrs?.dir },
  title: `${title.value} | Niyyah`,
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
}))

// Prije prelaska na drugu stranicu greška se mora očistiti, inače bi ova
// stranica ostala preko nove.
function go(path: string, lang?: string) {
  clearError({ redirect: localePath(path, lang) })
}
</script>

<template>
  <div>
    <SiteHeader />
    <main id="sadrzaj" class="err">
      <div class="wrap err__wrap">
        <p class="err__code" aria-hidden="true">{{ error?.statusCode ?? 404 }}</p>
        <h1 class="h2">{{ title }}</h1>
        <p class="err__text">{{ text }}</p>

        <a :href="localePath('/')" class="btn btn--gold err__home" @click.prevent="go('/')">{{ t.home }}</a>

        <nav class="err__more" :aria-label="t.more">
          <h2 class="err__label">{{ t.more }}</h2>
          <ul>
            <li>
              <a :href="localePath('/privatnost', legalLang)" @click.prevent="go('/privatnost', legalLang)">{{ legal.privacy }}</a>
            </li>
            <li>
              <a :href="localePath('/uslovi', legalLang)" @click.prevent="go('/uslovi', legalLang)">{{ legal.terms }}</a>
            </li>
            <li>
              <a :href="localePath('/podrska', legalLang)" @click.prevent="go('/podrska', legalLang)">{{ supportLabel }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
/* Isti papir i razmaci kao pravne stranice. */
.err {
  padding-top: calc(var(--hdr-h) + 3rem);
  padding-bottom: clamp(4rem, 3rem + 5vw, 7rem);
  background: var(--paper);
  min-height: 70vh;
}

.err__wrap {
  max-width: 40rem;
}

.err__code {
  color: var(--gold);
  font-family: var(--font-display);
  font-size: clamp(3rem, 2rem + 4vw, 5rem);
  line-height: 1;
  margin-bottom: 1rem;
}

.err__text {
  margin-top: 0.75rem;
  color: var(--ink-2);
  line-height: 1.7;
}

.err__home {
  margin-top: 2rem;
}

.err__more {
  margin-top: clamp(2.5rem, 2rem + 2vw, 3.5rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
}

.err__label {
  font-size: var(--fs-small);
  font-weight: 500;
  color: var(--ink-3);
}

.err__more ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin-top: 0.75rem;
  padding: 0;
  list-style: none;
}

.err__more a {
  color: var(--ink-2);
  text-underline-offset: 3px;
}

.err__more a:hover {
  color: var(--ink);
}
</style>
