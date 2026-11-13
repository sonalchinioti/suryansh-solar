<script setup>
import { BContainer } from 'bootstrap-vue-next'
import { site } from '../../data/site'
</script>

<template>
  <footer class="foot">
    <BContainer class="d-grid gap-2 py-4">
      <p><strong>{{ site.name }}</strong> · {{ site.description }}</p>
      <p>{{ site.disclaimer }}</p>
    </BContainer>
  </footer>
</template>

<style scoped>
.foot { border-top: 1px solid var(--line); font-size: 0.85rem; color: var(--muted); }
/* leave room for the mobile call bar */
@media (max-width: 991.98px) { .foot { padding-bottom: 76px; } }
</style>
