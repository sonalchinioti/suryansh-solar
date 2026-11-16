<script setup>
// Frequently asked questions. Add or edit questions in data/content.js.
import { BContainer } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import { faqs } from '../../data/content'
</script>

<template>
  <section id="faq" class="band band--surface">
    <BContainer>
      <SectionHeading center eyebrow="FAQ" title="Questions people ask before going solar" />
      <div class="faq">
        <details v-for="(item, i) in faqs" :key="item.q" :open="i === 0">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </BContainer>
  </section>
</template>

<style scoped>
.faq { max-width: 860px; margin-inline: auto; display: grid; gap: 12px; }
details { background: var(--bg); border: 1px solid var(--line); border-radius: 18px; }
details[open] { border-color: var(--sun-ink); }
summary {
  list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px;
  padding: 18px 22px; font: 700 1.05rem/1.4 var(--display); border-radius: 18px;
}
summary::-webkit-details-marker { display: none; }
summary::after {
  content: "+"; flex: none; width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center;
  background: var(--blue-soft); color: var(--sun-ink); font-size: 1.25rem; font-weight: 600; line-height: 1;
}
details[open] summary::after { content: "−"; background: var(--sun); color: var(--on-sun); }
details p { padding: 0 22px 20px; color: var(--muted); max-width: 72ch; }
</style>
