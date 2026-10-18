<script setup lang="ts">
defineI18nRoute({
  locales: ['bs', 'en', 'de', 'tr', 'fr', 'id', 'ms', 'ar', 'ur'],
  paths: {
    bs: '/privatnost',
    en: '/privacy',
    de: '/datenschutz',
    tr: '/gizlilik',
    fr: '/confidentialite',
    id: '/privasi',
    ms: '/privasi',
    ar: '/privacy',
    ur: '/privacy',
  },
})
</script>

<template>
  <LegalDocument kind="privacy" />
</template>
