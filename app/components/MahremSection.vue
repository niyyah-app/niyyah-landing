<script setup lang="ts">
import mahremShot from '~/assets/images/mahrem-portal-shot.webp'
const c = useCopy()
</script>

<template>
  <section id="mahrem" class="section mahrem on-night" aria-labelledby="mahrem-title">
    <GeoPattern :opacity="0.08" :size="120" />

    <div class="wrap">
      <div class="mahrem__grid">
        <div class="mahrem__text">
          <p v-reveal class="kicker"><StarMark /> {{ c.mahrem.kicker }}</p>
          <h2 id="mahrem-title" v-reveal="60" class="h2 mahrem__title">{{ c.mahrem.title }}</h2>
          <p v-reveal="120" class="lead mahrem__body">{{ c.mahrem.body }}</p>

          <ol class="mahrem__steps">
            <li v-for="(s, i) in c.mahrem.steps" :key="i" v-reveal="i * 80">
              <span class="mahrem__n" aria-hidden="true">{{ i + 1 }}</span>
              <div>
                <h3>{{ s.title }}</h3>
                <p>{{ s.body }}</p>
              </div>
            </li>
          </ol>
        </div>

        <div v-reveal="100" class="mahrem__visual">
          <PhoneShot :src="mahremShot" :alt="c.mahrem.imageAlt" :img-width="1024" :img-height="1536" :width="500" />
        </div>
      </div>

      <ul class="mahrem__who">
        <li v-for="(w, i) in c.mahrem.who" :key="w.label" v-reveal="i * 80">
          <h3 class="h3">{{ w.label }}</h3>
          <p>{{ w.body }}</p>
        </li>
      </ul>
      <p v-reveal class="mahrem__note">{{ c.mahrem.note }}</p>

      <aside v-reveal class="parents" aria-labelledby="parents-title">
        <h3 id="parents-title" class="h2 parents__title">{{ c.mahrem.parentsTitle }}</h3>
        <div class="parents__body">
          <p class="lead">{{ c.mahrem.parentsBody }}</p>
          <ShareButton :label="c.mahrem.share" :done="c.mahrem.shareDone" :text="c.mahrem.shareText" />
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.mahrem {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.mahrem .geo {
  z-index: -1;
}

.mahrem__grid {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  gap: clamp(3rem, 6vw, 7rem);
  align-items: center;
}

.mahrem__title {
  margin-top: 1.1rem;
  max-width: 13em;
}

.mahrem__body {
  margin-top: 1.6rem;
  color: var(--moon-2);
}

.mahrem__steps {
  display: grid;
  gap: 0;
  margin-top: clamp(2.2rem, 2rem + 1vw, 3rem);
  max-width: 36em;
}

.mahrem__steps li {
  display: grid;
  grid-template-columns: 2.6rem 1fr;
  gap: 1rem;
  padding-block: 1.1rem;
  border-top: 1px solid var(--night-line);
}

.mahrem__n {
  display: grid;
  place-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-size: var(--fs-small);
  font-weight: 500;
}

.mahrem__steps h3 {
  font-size: 1.1rem;
  font-weight: 500;
}

.mahrem__steps p {
  color: var(--moon-2);
}

.mahrem__visual {
  display: flex;
  justify-content: center;
}

.mahrem__who {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem clamp(1.5rem, 3vw, 3.5rem);
  margin-top: clamp(4.5rem, 3rem + 5vw, 8rem);
}

.mahrem__who li {
  padding-top: 1.2rem;
  border-top: 1px solid var(--gold);
}

.mahrem__who p {
  margin-top: 0.5rem;
  color: var(--moon-2);
}

.mahrem__note {
  margin-top: 2rem;
  font-size: var(--fs-small);
  color: var(--moon-3);
}

.parents {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 1.5rem clamp(2rem, 5vw, 5rem);
  margin-top: clamp(4rem, 3rem + 4vw, 7rem);
  padding: clamp(2rem, 1.2rem + 3vw, 4rem);
  border-radius: var(--radius-lg);
  background: var(--paper);
  color: var(--ink);
}

.parents__title {
  font-size: clamp(2rem, 1.3rem + 2.4vw, 3.4rem);
}

.parents__body {
  display: grid;
  gap: 1.6rem;
  justify-items: start;
  color: var(--ink-2);
}

.parents__body :deep(.share) {
  color: var(--ink);
}

@media (max-width: 900px) {
  .mahrem__grid,
  .parents {
    grid-template-columns: 1fr;
  }
  .mahrem__who {
    grid-template-columns: 1fr;
  }
  .mahrem__visual {
  }
}
</style>
