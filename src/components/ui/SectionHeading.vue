<script setup>
// Standard opening for every section: small label, heading, optional Hindi tagline and intro line.
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  hindi: { type: String, default: '' },
  lede: { type: String, default: '' },
  center: { type: Boolean, default: false },
})
</script>

<template>
  <div class="section-heading" :class="{ 'section-heading--center': center }">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="hindi" class="hi" lang="hi">{{ hindi }}</p>
    <p v-if="lede" class="lede">{{ lede }}</p>
  </div>
</template>

<style scoped>
.section-heading { display: grid; gap: 14px; margin-bottom: clamp(32px, 4.5vw, 56px); max-width: 780px; }
.section-heading h2 { margin: 0; }
.section-heading--center { margin-inline: auto; text-align: center; justify-items: center; }
</style>
