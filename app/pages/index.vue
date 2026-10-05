<script setup lang="ts">
const c = useCopy()
const { locale, locales } = useI18n()
const { siteUrl, ogImage, appLaunched, appStoreUrl, googlePlayUrl } = useRuntimeConfig().public
const storeLinks = appLaunched ? [appStoreUrl, googlePlayUrl].filter(Boolean) : []
// Safari na iPhoneu prikazuje traku "Otvori / Preuzmi" iznad stranice.
const appleId = appLaunched ? /id(\d+)/.exec(appStoreUrl)?.[1] : undefined

const pageUrl = computed(() => (locale.value === 'bs' ? siteUrl : `${siteUrl}/${locale.value}`))
const image = `${siteUrl}${ogImage}`

useSeoMeta({
  title: () => c.value.meta.title,
  description: () => c.value.meta.description,
  ogTitle: () => c.value.meta.title,
  ogDescription: () => c.value.meta.description,
  ogType: 'website',
  ogSiteName: 'Niyyah',
  ogUrl: () => pageUrl.value,
  ogImage: image,
  ogImageAlt: () => c.value.meta.ogAlt,
  twitterCard: 'summary_large_image',
  twitterTitle: () => c.value.meta.title,
  twitterDescription: () => c.value.meta.description,
  twitterImage: image,
})

useHead(() => ({
  meta: appleId ? [{ key: 'apple-itunes-app', name: 'apple-itunes-app', content: `app-id=${appleId}` }] : [],
  script: [
    {
      key: 'ld-json',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#org`,
            name: 'Niyyah',
            url: siteUrl,
            logo: `${siteUrl}/favicon-512.jpg`,
            slogan: c.value.footer.tagline,
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Niyyah',
            inLanguage: locales.value.map((l) => l.language ?? l.code),
            publisher: { '@id': `${siteUrl}/#org` },
          },
          {
            '@type': 'MobileApplication',
            name: 'Niyyah',
            operatingSystem: 'iOS, Android',
            applicationCategory: 'LifestyleApplication',
            description: c.value.meta.description,
            url: pageUrl.value,
            image,
            inLanguage: ['bs', 'en', 'de', 'tr', 'ar', 'id', 'ur', 'ms', 'fr'],
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
            ...(storeLinks.length ? { downloadUrl: storeLinks, sameAs: storeLinks } : {}),
            publisher: { '@id': `${siteUrl}/#org` },
          },
          {
            '@type': 'FAQPage',
            url: pageUrl.value,
            inLanguage: locale.value,
            mainEntity: c.value.faq.items.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ],
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <SiteHeader />
    <main>
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <MahremSection />
      <HowSection />
      <QuestionsSection />
      <ProfileSection />
      <SafetySection />
      <CommunitySection />
      <LanguagesSection />
      <PricingSection />
      <AboutSection />
      <FaqSection />
      <FinalCta />
    </main>
    <SiteFooter />
  </div>
</template>
