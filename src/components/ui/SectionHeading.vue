<script setup>
// Standard opening for every section: small label, heading, optional Hindi tagline and intro line.
defineProps({
  chapter: { type: String, default: '' },
  title: { type: String, required: true },
  hindi: { type: String, default: '' },
  lede: { type: String, default: '' },
})
</script>

<template>
  <div class="section-heading">
    <p v-if="chapter" class="chapter">{{ chapter }}</p>
    <h2>{{ title }}</h2>
    <p v-if="hindi" class="hi" lang="hi">{{ hindi }}</p>
    <p v-if="lede" class="lede">{{ lede }}</p>
  </div>
</template>

<style scoped>
.section-heading { display: grid; gap: 16px; margin-bottom: clamp(32px, 5vw, 56px); }
.section-heading h2 { margin: 0; }
</style>
