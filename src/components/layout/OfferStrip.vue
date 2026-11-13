<script setup>
// Yellow offer strip under the header.
import { BContainer } from 'bootstrap-vue-next'
import { offers } from '../../data/site'
</script>

<template>
  <div class="strip">
    <BContainer class="d-flex flex-wrap justify-content-center text-center column-gap-4 row-gap-1 py-2">
      <span v-for="offer in offers" :key="offer">{{ offer }}</span>
    </BContainer>
  </div>
</template>

<style scoped>
.strip { background: var(--sun); color: var(--on-sun); font-weight: 700; font-size: 0.92rem; }
</style>
