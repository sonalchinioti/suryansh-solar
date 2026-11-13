<script setup>
// Chapter 1: what the visitor is paying today.
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import { billFacts } from '../../data/content'
</script>

<template>
  <section class="band band--surface">
    <BContainer>
      <SectionHeading
        chapter="Chapter 1 · The bill that never ends"
        title="You are already paying for a solar plant. You just don't own one."
        hindi="हर महीने का बिल, सालों का किराया।"
        lede="A family paying ₹3,000 a month hands over ₹9 lakh to the electricity board across 25 years, even if tariffs never rise. All of it is rent. None of it builds anything on your roof."
      />
      <BRow tag="ul" class="facts list-unstyled mb-0 g-0">
        <BCol v-for="fact in billFacts" :key="fact.title" tag="li" md="4" class="fact">
          <span class="figure num">{{ fact.figure }}</span>
          <h3>{{ fact.title }}</h3>
          <p class="text-muted-ink">{{ fact.text }}</p>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.facts { border-top: 1px solid var(--line); }
.fact { display: grid; gap: 10px; align-content: start; padding: 28px 28px 8px 0; }
.fact h3 { margin: 0; }
.figure { font: 800 2.6rem/1 var(--display); letter-spacing: -0.03em; color: var(--sun-ink); }
@media (min-width: 768px) {
  .fact + .fact { padding-left: 28px; border-left: 1px solid var(--line); }
}
@media (max-width: 767.98px) {
  .fact { padding: 22px 0; }
  .fact + .fact { border-top: 1px solid var(--line); }
}
</style>
