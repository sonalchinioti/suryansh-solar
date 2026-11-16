<script setup>
// "Solar for": one card per kind of customer. Cards come from data/content.js.
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import AppIcon from '../ui/AppIcon.vue'
import { segments } from '../../data/content'
import { calculatorMode } from '../../state'

function pick(segment) {
  if (segment.mode) calculatorMode.value = segment.mode
}
</script>

<template>
  <section class="band">
    <BContainer>
      <SectionHeading center eyebrow="Who we work with" title="Get solar for your roof" />
      <BRow class="g-4">
        <BCol v-for="segment in segments" :key="segment.title" md="4">
          <a class="segment" :href="segment.href" @click="pick(segment)">
            <span class="icon-badge icon-badge--sun"><AppIcon :name="segment.icon" :size="26" /></span>
            <h3>{{ segment.title }}</h3>
            <p class="text-muted-ink">{{ segment.text }}</p>
            <span class="more">{{ segment.cta }} <AppIcon name="arrow" :size="18" /></span>
          </a>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.segment {
  height: 100%; display: grid; gap: 12px; align-content: start; padding: 28px;
  background: var(--surface); color: var(--ink); text-decoration: none;
  border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow);
  transition: transform 0.18s ease, border-color 0.18s ease;
}
.segment:hover { transform: translateY(-4px); border-color: var(--sun-ink); }
.segment h3 { margin: 6px 0 0; font-size: 1.3rem; }
.more { display: inline-flex; align-items: center; gap: 8px; margin-top: 6px; font-weight: 700; color: var(--sun-ink); }
.segment:hover .more .icon { transform: translateX(4px); }
.more .icon { transition: transform 0.18s ease; }
</style>
