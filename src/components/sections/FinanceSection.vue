<script setup>
// Chapter 2: how the NBFC loan, the subsidy and the bill savings fit together.
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import YearsTimeline from '../ui/YearsTimeline.vue'
import { financeSteps } from '../../data/content'
</script>

<template>
  <section id="math" class="band band--panel">
    <BContainer>
      <SectionHeading
        chapter="Chapter 2 · How it pays for itself"
        title="Your bill becomes the EMI. The subsidy shortens the loan."
        hindi="बिल ही बनेगा EMI, 5 साल में प्लांट आपका।"
        lede="You don't need savings to go solar. You need a roof and an electricity bill. Here is how 25 years look, drawn to scale."
      />
      <YearsTimeline />
      <BRow tag="ol" class="list-unstyled mb-0 mt-5 g-4">
        <BCol v-for="step in financeSteps" :key="step.title" tag="li" sm="6" lg="3">
          <div class="flow-step">
            <h3>{{ step.title }}</h3>
            <p class="text-muted-ink">{{ step.text }}</p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.flow-step { display: grid; gap: 8px; border-top: 2px solid var(--sun); padding-top: 16px; }
.flow-step h3 { margin: 0; }
.flow-step p { font-size: 0.98rem; }
</style>
