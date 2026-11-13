<script setup>
// WhatsApp / site-visit bar pinned to the bottom of the screen on phones and tablets.
import { BButton } from 'bootstrap-vue-next'
import { site } from '../../data/site'
</script>

<template>
  <div class="callbar d-lg-none">
    <BButton variant="wa" size="sm" :href="site.whatsappUrl" target="_blank" rel="noopener">WhatsApp Us</BButton>
    <BButton variant="sun" size="sm" href="#contact">Free Site Visit</BButton>
  </div>
</template>

<style scoped>
.callbar {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 1030;
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px;
  background: var(--surface); border-top: 1px solid var(--line);
  padding: 10px max(16px, env(safe-area-inset-right, 0px)) calc(10px + env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px));
}
</style>
