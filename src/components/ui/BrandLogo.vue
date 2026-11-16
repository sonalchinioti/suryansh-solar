<script setup>
import { site } from '../../data/site'

defineProps({
  onDark: { type: Boolean, default: false }, // for use on a dark-blue background (footer)
})
</script>

<template>
  <span class="brand" :class="{ 'brand--dark': onDark }">
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="18" r="9" fill="var(--sun)" />
      <g stroke="var(--sun)" stroke-width="2.5" stroke-linecap="round">
        <path d="M22 2v4M8 18H4M40 18h-4M10.5 6.5l2.8 2.8M33.5 6.5l-2.8 2.8" />
      </g>
      <path class="roof" d="M3 34 22 20l19 14v6H3z" />
      <path d="M12 33l10-7.4L32 33" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span>
      <b>{{ site.name }}</b>
      <small>{{ site.tagline }}</small>
    </span>
  </span>
</template>

<style scoped>
.brand { display: flex; align-items: center; gap: 12px; min-width: 0; color: var(--ink); }
.brand svg { width: 42px; height: 42px; flex: none; }
.roof { fill: var(--panel-2); }
.brand b { display: block; font: 800 1.25rem/1.1 var(--display); letter-spacing: -0.02em; }
.brand small { display: block; margin-top: 3px; font-size: 0.64rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
@media (max-width: 575.98px) {
  .brand small { font-size: 0.56rem; letter-spacing: 0.04em; }
  .brand svg { width: 38px; height: 38px; }
  .brand { gap: 10px; }
}
.brand--dark { color: var(--on-panel); }
.brand--dark small { color: var(--on-panel-muted); }
</style>
