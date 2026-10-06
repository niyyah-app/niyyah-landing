<script setup lang="ts">
import type { Block } from '~/utils/markdown'

defineProps<{ blocks: Block[] }>()
</script>

<template>
  <div class="gb">
    <template v-for="(b, i) in blocks" :key="i">
      <h2 v-if="b.t === 'h2'" :id="b.id"><GuideInline :v="b.v" /></h2>
      <h3 v-else-if="b.t === 'h3'" :id="b.id"><GuideInline :v="b.v" /></h3>
      <p v-else-if="b.t === 'p'"><GuideInline :v="b.v" /></p>
      <ul v-else-if="b.t === 'ul'">
        <li v-for="(it, j) in b.items" :key="j"><GuideInline :v="it" /></li>
      </ul>
      <ol v-else-if="b.t === 'ol'">
        <li v-for="(it, j) in b.items" :key="j"><GuideInline :v="it" /></li>
      </ol>
      <blockquote v-else-if="b.t === 'quote'">
        <p v-for="(l, j) in b.lines" :key="j"><GuideInline :v="l" /></p>
        <footer v-if="b.cite"><GuideInline :v="b.cite" /></footer>
      </blockquote>
    </template>
  </div>
</template>

<style scoped>
.gb {
  max-width: 68ch;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--ink);
}

.gb > * + * {
  margin-top: 1.15em;
}

.gb h2 {
  margin-top: 2.2em;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(1.6rem, 1.2rem + 1.4vw, 2.25rem);
  line-height: 1.15;
  letter-spacing: -0.01em;
  text-wrap: balance;
  scroll-margin-top: 110px;
}

.gb h3 {
  margin-top: 1.8em;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.35;
  scroll-margin-top: 110px;
}

.gb h2 + *,
.gb h3 + * {
  margin-top: 0.6em;
}

.gb p {
  text-wrap: pretty;
}

.gb :deep(a) {
  color: var(--gold-deep);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

.gb :deep(strong) {
  font-weight: 500;
}

.gb ul,
.gb ol {
  display: grid;
  gap: 0.5em;
  padding-inline-start: 1.4em;
}

.gb ul {
  list-style: none;
}

.gb ul li {
  position: relative;
}

/* Zlatna tačka umjesto crne — ista zvijezda-boja kao na ostatku stranice. */
.gb ul li::before {
  content: '';
  position: absolute;
  inset-inline-start: -1.1em;
  top: 0.68em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}

.gb ol {
  list-style: decimal;
}

.gb ol li::marker {
  color: var(--gold-deep);
  font-weight: 500;
}

.gb blockquote {
  margin-block: 1.8em;
  padding: 1.4rem 1.6rem;
  border-inline-start: 3px solid var(--gold);
  border-radius: 0 var(--radius) var(--radius) 0;
  background: var(--paper-2);
}

[dir='rtl'] .gb blockquote {
  border-radius: var(--radius) 0 0 var(--radius);
}

.gb blockquote p {
  font-family: var(--font-display);
  font-size: 1.2rem;
  line-height: 1.5;
}

.gb blockquote p + p {
  margin-top: 0.5em;
}

.gb blockquote footer {
  margin-top: 0.8rem;
  font-size: var(--fs-small);
  color: var(--ink-2);
}
</style>
