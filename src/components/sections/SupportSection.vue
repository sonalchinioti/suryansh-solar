<script setup>
// Chapter 5: after-sales support, online and on site.
import { BContainer, BRow, BCol, BCard } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import { supportChannels } from '../../data/content'
</script>

<template>
  <section id="support" class="band">
    <BContainer>
      <SectionHeading
        chapter="Chapter 5 · After the installers leave"
        title="A plant is a 25-year relationship. We act like it."
        hindi="लगाने के बाद भी, हम आपके साथ।"
        lede="Most solar complaints are about the company disappearing after installation. Our customers recommend us for what happens next."
      />
      <BRow class="g-4">
        <BCol v-for="channel in supportChannels" :key="channel.title" md="6">
          <BCard class="h-100">
            <h3 class="mb-3">{{ channel.title }}</h3>
            <ul class="points text-muted-ink">
              <li v-for="point in channel.points" :key="point">{{ point }}</li>
            </ul>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>
