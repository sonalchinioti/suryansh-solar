<script setup>
// The six-step end-to-end service. Steps come from data/content.js, in order.
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import AppIcon from '../ui/AppIcon.vue'
import { processSteps } from '../../data/content'
</script>

<template>
  <section id="process" class="band">
    <BContainer>
      <SectionHeading
        center
        eyebrow="Our process"
        title="We handle everything. You make one phone call."
        hindi="सर्वे से सर्विस तक, सब कुछ हम संभालेंगे।"
      />
      <BRow tag="ol" class="list-unstyled mb-0 g-4">
        <BCol v-for="(step, i) in processSteps" :key="step.title" tag="li" md="6" lg="4">
          <div class="step">
            <div class="step-top">
              <span class="icon-badge"><AppIcon :name="step.icon" :size="24" /></span>
              <span class="step-no num">Step {{ i + 1 }}</span>
            </div>
            <h3>{{ step.title }}</h3>
            <p class="text-muted-ink">{{ step.text }}</p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.step { height: 100%; display: grid; gap: 10px; align-content: start; padding: 26px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); }
.step-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 6px; }
.step-no { font-weight: 800; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--on-sun); background: var(--sun); padding: 4px 12px; border-radius: 999px; }
.step h3 { margin: 0; }
.step p { font-size: 0.95rem; }
</style>
