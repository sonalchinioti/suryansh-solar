<script setup>
// Slim one-line bar above the header. Text comes from data/site.js.
import { BContainer } from 'bootstrap-vue-next'
import { announcement } from '../../data/site'
</script>

<template>
  <div id="top" class="announce">
    <BContainer class="d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1 py-2 text-center">
      <span>{{ announcement.text }}</span>
      <a :href="announcement.href">{{ announcement.linkLabel }} →</a>
    </BContainer>
  </div>
</template>

<style scoped>
.announce { background: var(--panel-deep); color: var(--on-panel); font-size: 0.86rem; font-weight: 500; }
.announce a { color: var(--gold); font-weight: 700; text-decoration: none; white-space: nowrap; }
.announce a:hover { text-decoration: underline; }
</style>
