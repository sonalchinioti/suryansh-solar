<script setup>
// Thin contact bar above the header.
import { BContainer } from 'bootstrap-vue-next'
import { site } from '../../data/site'
</script>

<template>
  <div id="top" class="util">
    <BContainer class="d-flex flex-wrap justify-content-between column-gap-4 row-gap-1 py-2">
      <p class="d-flex flex-wrap column-gap-4 row-gap-1">
        <span>Call / WhatsApp: <b>{{ site.phone }}</b></span>
        <span>{{ site.hours }}</span>
        <span class="d-none d-lg-inline">{{ site.email }}</span>
      </p>
      <p class="d-none d-lg-flex column-gap-4">
        <a href="#support">Customer Support</a>
        <a href="#calculator">Savings Calculator</a>
      </p>
    </BContainer>
  </div>
</template>

<style scoped>
.util { background: var(--panel); color: var(--on-panel); font-size: 0.88rem; }
.util a { color: var(--gold); text-decoration: none; font-weight: 600; }
.util a:hover { text-decoration: underline; }
</style>
