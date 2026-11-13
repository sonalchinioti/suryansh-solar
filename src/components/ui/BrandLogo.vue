<script setup>
import { site } from '../../data/site'
</script>

<template>
  <span class="brand">
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="18" r="9" fill="var(--sun)" />
      <g stroke="var(--sun)" stroke-width="2.5" stroke-linecap="round">
        <path d="M22 2v4M8 18H4M40 18h-4M10.5 6.5l2.8 2.8M33.5 6.5l-2.8 2.8" />
      </g>
      <path d="M3 34 22 20l19 14v6H3z" fill="var(--panel)" />
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
.brand svg { width: 44px; height: 44px; flex: none; }
.brand b { display: block; font: 800 1.4rem/1.1 var(--display); }
.brand small { display: block; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
</style>
