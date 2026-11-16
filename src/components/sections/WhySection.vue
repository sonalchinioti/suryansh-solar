<script setup>
// "Why Suryansh": four reasons in a grid. Text comes from data/content.js.
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import AppIcon from '../ui/AppIcon.vue'
import { benefits } from '../../data/content'
</script>

<template>
  <section id="why" class="band band--surface">
    <BContainer>
      <SectionHeading
        center
        eyebrow="Why Suryansh"
        title="One team for finance, subsidy, installation and service"
        lede="No chasing vendors, bank officers or government portals. You make one phone call and we stay with you for the life of the plant."
      />
      <BRow tag="ul" class="list-unstyled mb-0 g-4">
        <BCol v-for="benefit in benefits" :key="benefit.title" tag="li" sm="6" lg="3">
          <div class="benefit">
            <span class="icon-badge"><AppIcon :name="benefit.icon" :size="26" /></span>
            <h3>{{ benefit.title }}</h3>
            <p class="text-muted-ink">{{ benefit.text }}</p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.benefit { height: 100%; display: grid; gap: 12px; align-content: start; padding: 26px; background: var(--bg); border: 1px solid var(--line); border-radius: var(--radius); }
.benefit h3 { margin: 6px 0 0; }
.benefit p { font-size: 0.95rem; }
</style>
