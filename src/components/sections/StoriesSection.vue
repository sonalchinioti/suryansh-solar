<script setup>
// Chapter 3: worked examples. Add or edit stories in data/content.js.
import { BContainer } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import StoryCard from '../ui/StoryCard.vue'
import { stories } from '../../data/content'
</script>

<template>
  <section id="stories" class="band">
    <BContainer>
      <SectionHeading
        chapter="Chapter 3 · Three roofs"
        title="What this looks like on a real roof."
        hindi="आपके जैसे परिवारों की कहानी।"
        lede="Three typical cases, worked out with the same numbers our calculator uses."
      />
      <div class="d-grid gap-4">
        <StoryCard v-for="story in stories" :key="story.title" :story="story" />
      </div>
      <p class="note mt-4">
        Illustrative examples with representative names. Assumes ₹8 per unit, about 120 units generated per kW each
        month, a 5-year loan at 10% a year, and current central subsidy slabs. Your survey report will carry your
        exact figures.
      </p>
    </BContainer>
  </section>
</template>
