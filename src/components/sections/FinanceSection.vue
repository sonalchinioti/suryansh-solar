<script setup>
// How the NBFC loan, the subsidy and the bill savings fit together.
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import YearsTimeline from '../ui/YearsTimeline.vue'
import { billFacts, financeSteps } from '../../data/content'
</script>

<template>
  <section id="math" class="band band--panel">
    <BContainer>
      <SectionHeading
        eyebrow="How it pays for itself"
        title="Your bill becomes the EMI. The subsidy shortens the loan."
        hindi="बिल ही बनेगा EMI, 5 साल में प्लांट आपका।"
        lede="You don't need savings to go solar. You need a roof and an electricity bill. Here is what a ₹3,000 monthly bill looks like over 25 years."
      />
      <BRow tag="ul" class="list-unstyled g-3 facts">
        <BCol v-for="fact in billFacts" :key="fact.title" tag="li" md="4">
          <div class="fact">
            <span class="figure num">{{ fact.figure }}</span>
            <h3>{{ fact.title }}</h3>
            <p class="text-muted-ink">{{ fact.text }}</p>
          </div>
        </BCol>
      </BRow>
      <YearsTimeline />
      <BRow tag="ol" class="list-unstyled mb-0 mt-5 g-4">
        <BCol v-for="(step, i) in financeSteps" :key="step.title" tag="li" sm="6" lg="3">
          <div class="flow-step">
            <span class="no num" aria-hidden="true">{{ i + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p class="text-muted-ink">{{ step.text }}</p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.facts { margin-bottom: clamp(28px, 4vw, 44px); }
.fact { height: 100%; display: grid; gap: 8px; align-content: start; padding: 24px; background: var(--panel-tint); border: 1px solid var(--panel-line); border-radius: var(--radius); }
.fact h3 { margin: 0; }
.fact p { font-size: 0.94rem; }
.figure { font: 800 clamp(2rem, 3.6vw, 2.6rem) / 1.05 var(--display); letter-spacing: -0.03em; color: var(--sun); }
.flow-step { display: grid; gap: 8px; align-content: start; }
.flow-step h3 { margin: 4px 0 0; }
.flow-step p { font-size: 0.94rem; }
.no { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; background: var(--sun); color: var(--on-sun); font-weight: 800; }
</style>
