<script setup>
// Chapter 4: the six-step end-to-end service. Steps come from data/content.js, in order.
import { BContainer, BRow, BCol, BCard } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import { processSteps } from '../../data/content'
</script>

<template>
  <section id="process" class="band band--surface">
    <BContainer>
      <SectionHeading
        chapter="Chapter 4 · One team, start to finish"
        title="You make one phone call. We handle the other six steps."
        hindi="सर्वे से सर्विस तक, सब कुछ हम संभालेंगे।"
        lede="No chasing vendors, bank officers or government portals. One team does all of it and stays with you afterwards."
      />
      <BRow tag="ol" class="list-unstyled mb-0 g-4">
        <BCol v-for="(step, i) in processSteps" :key="step.title" tag="li" md="6" lg="4">
          <BCard class="step h-100">
            <span class="step-no" aria-hidden="true">{{ i + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p class="text-muted-ink">{{ step.text }}</p>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.step { --bs-card-bg: var(--bg); }
.step :deep(.card-body) { display: grid; gap: 10px; align-content: start; }
.step h3 { margin: 0; }
.step p { font-size: 0.98rem; }
.step-no { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; background: var(--sun); color: var(--on-sun); font: 800 1.2rem var(--display); }
</style>
