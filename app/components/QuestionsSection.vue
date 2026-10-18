<script setup lang="ts">
import questionsShot from '~/assets/images/pitanja-shot.webp'
const c = useCopy()
</script>

<template>
  <section class="section qs" aria-labelledby="qs-title">
    <div class="wrap qs__grid">
      <div v-reveal class="qs__visual">
        <PhoneShot :src="questionsShot" :alt="c.questions.imageAlt" :img-width="979" :img-height="1606" :width="380" />
      </div>

      <div class="qs__text">
        <p v-reveal class="kicker"><StarMark /> {{ c.questions.kicker }}</p>
        <h2 id="qs-title" v-reveal="60" class="h2 qs__title">{{ c.questions.title }}</h2>
        <p v-reveal="120" class="lead qs__body">{{ c.questions.body }}</p>

        <ol v-reveal="160" class="qs__flow">
          <li v-for="(f, i) in c.questions.flow" :key="i">
            <span>{{ f }}</span>
            <Icon v-if="i < c.questions.flow.length - 1" name="arrow" :size="16" />
          </li>
        </ol>

        <div v-reveal="200" class="qs__topics">
          <p>{{ c.questions.topicsLabel }}</p>
          <ul>
            <li v-for="t in c.questions.topics" :key="t" class="chip">{{ t }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.qs__grid {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(3rem, 7vw, 8rem);
  align-items: center;
}

.qs__visual {
  display: flex;
  justify-content: center;
}

.qs__title {
  margin-top: 1rem;
}

.qs__body {
  margin-top: 1.5rem;
  color: var(--ink-2);
}

.qs__flow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 2.2rem;
}

.qs__flow li {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 500;
}

.qs__flow span {
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: var(--night-900);
  color: var(--moon);
  font-size: var(--fs-small);
}

.qs__flow li:last-child span {
  background: var(--gold);
  color: var(--night-950);
}

.qs__flow svg {
  color: var(--ink-3);
}

.qs__topics {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
  font-size: var(--fs-small);
  color: var(--ink-3);
}

.qs__topics ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.qs__topics .chip {
  color: var(--ink);
}

@media (max-width: 900px) {
  .qs__grid {
    grid-template-columns: 1fr;
  }
  .qs__visual {
    order: 2;
  }
}
</style>
