<script setup>
// "What goes on your roof": the parts of a rooftop plant. Text comes from data/content.js.
import { BContainer } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import AppIcon from '../ui/AppIcon.vue'
import { systemParts } from '../../data/content'
</script>

<template>
  <section id="system" class="band">
    <BContainer>
      <SectionHeading
        center
        eyebrow="The plant"
        title="What goes on your roof"
        lede="Five parts, installed and looked after by one team."
      />
      <ol class="parts">
        <li v-for="(part, i) in systemParts" :key="part.title">
          <div class="part-top">
            <span class="ring"><AppIcon :name="part.icon" :size="30" /></span>
            <span class="no num" aria-hidden="true">0{{ i + 1 }}</span>
          </div>
          <h3>{{ part.title }}</h3>
          <p class="text-muted-ink">{{ part.text }}</p>
        </li>
      </ol>
    </BContainer>
  </section>
</template>

<style scoped>
.parts { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px; }
.parts li { display: grid; gap: 10px; align-content: start; padding: 24px 20px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); min-width: 0; }
.part-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
/* Icon inside two thin rings */
.ring { width: 64px; height: 64px; border-radius: 50%; display: grid; place-items: center; color: var(--sun-ink); background: var(--blue-soft); box-shadow: 0 0 0 6px var(--surface), 0 0 0 7px var(--line); }
.no { font: 800 1.6rem/1 var(--display); letter-spacing: -0.03em; color: var(--line); }
.parts h3 { margin: 0; }
.parts p { font-size: 0.92rem; }
@media (max-width: 1199.98px) {
  .parts { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 767.98px) {
  .parts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 479.98px) {
  .parts { grid-template-columns: minmax(0, 1fr); }
}
</style>
