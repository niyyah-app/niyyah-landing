<script setup lang="ts">
const head = useLocaleHead({ seo: true })
const routeBaseName = useRouteBaseName()
const route = useRoute()

// Članak vodiča sam postavlja canonical i hreflang (useSetI18nParams u
// pages/vodic/[slug].vue), jer samo on zna na kojim jezicima postoji.
// Ovdje bi se ti linkovi izračunali prije njega, s bosanskim slugom na
// svakom jeziku — i ostali bi u glavi uz njegove.
const ownsSeoLinks = computed(() => routeBaseName(route) === 'vodic-slug')

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang,
    dir: head.value.htmlAttrs?.dir,
  },
  link: ownsSeoLinks.value ? [] : (head.value.link ?? []),
  meta: head.value.meta ?? [],
}))
</script>

<template>
  <NuxtPage />
  <ConsentBar />
</template>
