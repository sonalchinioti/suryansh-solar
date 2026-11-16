<script setup>
// Below 1200px: a WhatsApp / site-visit bar pinned to the bottom of the screen.
// From 1200px up: a quick-contact dock on the right edge (call, WhatsApp, email, calculator).
import { BButton } from 'bootstrap-vue-next'
import AppIcon from '../ui/AppIcon.vue'
import { site } from '../../data/site'

const dock = [
  { icon: 'phone', label: `Call ${site.phone}`, href: site.phoneHref },
  { icon: 'chat', label: 'Chat on WhatsApp', href: site.whatsappUrl, external: true, wa: true },
  { icon: 'mail', label: `Email ${site.email}`, href: `mailto:${site.email}` },
  { icon: 'calc', label: 'Savings calculator', href: '#calculator' },
]
</script>

<template>
  <div class="callbar d-xl-none">
    <BButton variant="wa" size="sm" :href="site.whatsappUrl" target="_blank" rel="noopener">
      <AppIcon name="chat" :size="18" /> WhatsApp Us
    </BButton>
    <BButton variant="sun" size="sm" href="#contact">Free Site Visit</BButton>
  </div>
  <nav class="dock d-none d-xl-grid" aria-label="Quick contact">
    <a
      v-for="item in dock"
      :key="item.icon"
      :href="item.href"
      :class="{ wa: item.wa }"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noopener' : undefined"
      :aria-label="item.label"
      :title="item.label"
    >
      <AppIcon :name="item.icon" :size="22" />
    </a>
  </nav>
</template>

<style scoped>
.callbar {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 1030;
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px;
  background: var(--surface); border-top: 1px solid var(--line);
  padding: 10px max(16px, env(safe-area-inset-right, 0px)) calc(10px + env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px));
}
.callbar .btn { --bs-btn-padding-x: 0.6rem; white-space: nowrap; }

.dock {
  position: fixed; right: 0; top: 50%; transform: translateY(-50%); z-index: 1030;
  border-radius: 16px 0 0 16px; overflow: hidden; box-shadow: var(--shadow-lg);
  background: var(--panel-deep); border: 1px solid var(--panel-line); border-right: 0;
}
.dock a { width: 48px; height: 48px; display: grid; place-items: center; color: var(--on-panel); transition: background-color 0.15s ease, color 0.15s ease; }
.dock a + a { border-top: 1px solid var(--panel-line); }
.dock a:hover { background: var(--sun); color: var(--on-sun); }
.dock a.wa { background: var(--leaf); color: var(--on-leaf); }
.dock a.wa:hover { background: var(--sun); color: var(--on-sun); }
.dock a:focus-visible { outline-offset: -3px; }
</style>
