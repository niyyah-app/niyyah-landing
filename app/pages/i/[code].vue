<script setup lang="ts">
/**
 * Link pozivnice: niyyahmarriage.com/i/KOD (P11 / L1).
 *
 * Na telefonu s aplikacijom ovu stranicu niko ne vidi — iOS (Universal
 * Links) i Android (App Links) link otvore pravo u aplikaciji, a ona kod
 * pamti do registracije. Ovdje stiže samo onaj ko aplikaciju još nema, ili
 * je link otvorio na računaru: kaže mu se šta da uradi i koji je kod.
 *
 * Kod se ne generiše unaprijed (ima ih koliko i članova), pa GitHub Pages
 * ovu adresu služi kroz 404.html, a Nuxt je u pregledaču prikaže. Tekst se
 * zato bira po jeziku pregledača, ne po adresi — link se dijeli jedan za
 * sve jezike.
 */
defineI18nRoute({ locales: ['bs'] })

type Lang = 'bs' | 'en' | 'de' | 'tr' | 'fr' | 'id' | 'ms' | 'ar' | 'ur'

const COPY: Record<Lang, { title: string; lead: string; codeLabel: string; copy: string; copied: string; open: string; steps: string[] }> = {
  bs: {
    title: 'Pozvan/a si na Niyyah',
    lead: 'Prijatelj/ica te poziva na Niyyah — mjesto za one koji brak traže s namjerom.',
    codeLabel: 'Tvoj kod pozivnice',
    copy: 'Kopiraj kod',
    copied: 'Kopirano',
    open: 'Već imam aplikaciju — otvori',
    steps: [
      'Instaliraj Niyyah na telefon.',
      'Otvori ovaj link ponovo na telefonu — ili upiši kod pri registraciji.',
      'Prođi provjeru lica. Tako poziv vrijedi i onome ko te pozvao.',
    ],
  },
  en: {
    title: 'You’re invited to Niyyah',
    lead: 'A friend is inviting you to Niyyah — a place for people looking for marriage with intention.',
    codeLabel: 'Your invite code',
    copy: 'Copy code',
    copied: 'Copied',
    open: 'I have the app — open it',
    steps: [
      'Install Niyyah on your phone.',
      'Open this link again on your phone — or enter the code when you sign up.',
      'Pass the face check. That is what makes the invite count for your friend.',
    ],
  },
  de: {
    title: 'Du bist zu Niyyah eingeladen',
    lead: 'Jemand lädt dich zu Niyyah ein — dem Ort für alle, die mit Absicht eine Ehe suchen.',
    codeLabel: 'Dein Einladungscode',
    copy: 'Code kopieren',
    copied: 'Kopiert',
    open: 'Ich habe die App — öffnen',
    steps: [
      'Installiere Niyyah auf deinem Handy.',
      'Öffne diesen Link erneut auf dem Handy — oder gib den Code bei der Anmeldung ein.',
      'Bestehe die Gesichtsprüfung. Erst dann zählt die Einladung für deine Freundin oder deinen Freund.',
    ],
  },
  tr: {
    title: 'Niyyah’a davet edildin',
    lead: 'Bir arkadaşın seni Niyyah’a davet ediyor — evliliği niyetle arayanların yeri.',
    codeLabel: 'Davet kodun',
    copy: 'Kodu kopyala',
    copied: 'Kopyalandı',
    open: 'Uygulamam var — aç',
    steps: [
      'Niyyah’ı telefonuna yükle.',
      'Bu bağlantıyı telefonunda tekrar aç — ya da kaydolurken kodu gir.',
      'Yüz kontrolünü geç. Davet ancak o zaman arkadaşın için sayılır.',
    ],
  },
  fr: {
    title: 'Tu es invité(e) sur Niyyah',
    lead: 'Un ami t’invite sur Niyyah — l’endroit pour celles et ceux qui cherchent le mariage avec intention.',
    codeLabel: 'Ton code d’invitation',
    copy: 'Copier le code',
    copied: 'Copié',
    open: 'J’ai l’application — l’ouvrir',
    steps: [
      'Installe Niyyah sur ton téléphone.',
      'Rouvre ce lien sur ton téléphone — ou saisis le code à l’inscription.',
      'Passe la vérification du visage. C’est ce qui fait compter l’invitation pour ton ami.',
    ],
  },
  id: {
    title: 'Kamu diundang ke Niyyah',
    lead: 'Seorang teman mengundangmu ke Niyyah — tempat bagi mereka yang mencari pernikahan dengan niat.',
    codeLabel: 'Kode undanganmu',
    copy: 'Salin kode',
    copied: 'Tersalin',
    open: 'Saya sudah punya aplikasinya — buka',
    steps: [
      'Pasang Niyyah di ponselmu.',
      'Buka tautan ini lagi di ponsel — atau masukkan kode saat mendaftar.',
      'Lolos pemeriksaan wajah. Dengan itu undangan dihitung untuk temanmu.',
    ],
  },
  ms: {
    title: 'Anda dijemput ke Niyyah',
    lead: 'Seorang rakan menjemput anda ke Niyyah — tempat bagi mereka yang mencari perkahwinan dengan niat.',
    codeLabel: 'Kod jemputan anda',
    copy: 'Salin kod',
    copied: 'Disalin',
    open: 'Saya ada aplikasinya — buka',
    steps: [
      'Pasang Niyyah pada telefon anda.',
      'Buka pautan ini sekali lagi pada telefon — atau masukkan kod semasa mendaftar.',
      'Lulus pemeriksaan wajah. Barulah jemputan dikira untuk rakan anda.',
    ],
  },
  ar: {
    title: 'أنت مدعو إلى نيّة',
    lead: 'صديق يدعوك إلى نيّة — المكان لمن يبحث عن الزواج بنيّة صادقة.',
    codeLabel: 'رمز دعوتك',
    copy: 'انسخ الرمز',
    copied: 'تم النسخ',
    open: 'لدي التطبيق — افتحه',
    steps: [
      'ثبّت تطبيق نيّة على هاتفك.',
      'افتح هذا الرابط مرة أخرى على هاتفك — أو أدخل الرمز عند التسجيل.',
      'اجتز فحص الوجه. عندها فقط تُحتسب الدعوة لصديقك.',
    ],
  },
  ur: {
    title: 'آپ کو نیّہ پر مدعو کیا گیا ہے',
    lead: 'ایک دوست آپ کو نیّہ پر بلا رہا ہے — ان لوگوں کی جگہ جو نیت کے ساتھ نکاح تلاش کرتے ہیں۔',
    codeLabel: 'آپ کا دعوتی کوڈ',
    copy: 'کوڈ کاپی کریں',
    copied: 'کاپی ہو گیا',
    open: 'ایپ میرے پاس ہے — کھولیں',
    steps: [
      'اپنے فون پر نیّہ انسٹال کریں۔',
      'یہ لنک فون پر دوبارہ کھولیں — یا رجسٹریشن کے وقت کوڈ درج کریں۔',
      'چہرے کی جانچ پاس کریں۔ تبھی دعوت آپ کے دوست کے لیے شمار ہوگی۔',
    ],
  },
}

const route = useRoute()
const { siteUrl } = useRuntimeConfig().public

// Kod kao u aplikaciji (PendingInvite): velika slova, najviše 12 znakova.
const code = computed(() => {
  const raw = String(route.params.code ?? '').trim().toUpperCase()
  return /^[A-Z0-9]{1,12}$/.test(raw) ? raw : ''
})

// Jezik pregledača, tek na klijentu (stranica se ionako crta tamo).
const lang = ref<Lang>('bs')
onMounted(() => {
  const wanted = (navigator.languages?.length ? navigator.languages : [navigator.language])
    .map((l) => l.toLowerCase().split('-')[0])
    .find((l): l is Lang => l in COPY)
  if (wanted) lang.value = wanted
})
const t = computed(() => COPY[lang.value])
const rtl = computed(() => lang.value === 'ar' || lang.value === 'ur')

const appLink = computed(() => (code.value ? `niyyah://invite/${code.value}` : 'niyyah://'))

const copied = ref(false)
async function copyCode() {
  if (!code.value) return
  try {
    await navigator.clipboard.writeText(code.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // Pregledač bez dozvole za međuspremnik: kod je ionako napisan krupno.
  }
}

useSeoMeta({
  title: () => `${t.value.title} | Niyyah`,
  description: () => t.value.lead,
  ogTitle: () => t.value.title,
  ogDescription: () => t.value.lead,
  ogSiteName: 'Niyyah',
  // Lična pozivnica nije stranica za pretragu.
  robots: 'noindex, nofollow',
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})
</script>

<template>
  <div>
    <SiteHeader />
    <main id="sadrzaj" class="inv" :dir="rtl ? 'rtl' : 'ltr'">
      <div class="wrap inv__wrap">
        <h1 class="h2">{{ t.title }}</h1>
        <p class="lead inv__lead">{{ t.lead }}</p>

        <div v-if="code" class="inv__code" aria-live="polite">
          <span class="inv__code-label">{{ t.codeLabel }}</span>
          <strong class="inv__code-value" dir="ltr">{{ code }}</strong>
          <button type="button" class="btn inv__copy" @click="copyCode">
            {{ copied ? t.copied : t.copy }}
          </button>
        </div>

        <ol class="inv__steps">
          <li v-for="step in t.steps" :key="step">{{ step }}</li>
        </ol>

        <a :href="appLink" class="inv__open">{{ t.open }}</a>

        <div class="inv__cta">
          <PrimaryCta />
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.inv {
  padding-top: calc(var(--hdr-h) + 2.5rem);
  padding-bottom: clamp(4rem, 3rem + 5vw, 7rem);
  background: var(--paper);
}

.inv__wrap {
  max-width: 40rem;
}

.inv__lead {
  margin-top: 1.1rem;
  color: var(--ink-2);
}

.inv__code {
  display: grid;
  justify-items: start;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1.25rem 1.4rem;
  border: 1px solid color-mix(in srgb, var(--ink-2) 25%, transparent);
  border-radius: 1rem;
}

.inv__code-label {
  font-size: var(--fs-small);
  color: var(--ink-2);
}

.inv__code-value {
  font-size: clamp(1.8rem, 1.4rem + 2vw, 2.6rem);
  letter-spacing: 0.18em;
  word-break: break-all;
}

.inv__steps {
  margin-top: 2rem;
  padding-inline-start: 1.25rem;
  display: grid;
  gap: 0.6rem;
}

.inv__open {
  display: inline-block;
  margin-top: 1.5rem;
  color: var(--ink-2);
}

.inv__cta {
  margin-top: 2.5rem;
}
</style>
