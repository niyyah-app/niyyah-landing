<script setup lang="ts">
defineI18nRoute({
  locales: ['bs', 'en', 'de', 'tr', 'fr', 'id', 'ms', 'ar', 'ur'],
  paths: {
    bs: '/uslovi',
    en: '/terms',
    de: '/nutzungsbedingungen',
    tr: '/kullanim-sartlari',
    fr: '/conditions',
    id: '/syarat',
    ms: '/terma',
    ar: '/terms',
    ur: '/terms',
  },
})
</script>

<template>
  <LegalDocument kind="terms" />
</template>
