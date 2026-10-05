<script setup lang="ts">
import type { Inline } from '~/utils/markdown'

defineProps<{ v: Inline[] }>()
</script>

<template>
  <template v-for="(x, i) in v" :key="i">
    <strong v-if="x.t === 'b'">{{ x.v }}</strong>
    <em v-else-if="x.t === 'i'">{{ x.v }}</em>
    <!-- Unutrašnji linkovi idu kroz router, pa se članak otvara bez ponovnog
         učitavanja; vanjski izvori u novoj kartici. -->
    <NuxtLink v-else-if="x.t === 'a' && x.href.startsWith('/')" :to="x.href">{{ x.v }}</NuxtLink>
    <a v-else-if="x.t === 'a'" :href="x.href" target="_blank" rel="noopener">{{ x.v }}</a>
    <template v-else>{{ x.v }}</template>
  </template>
</template>
