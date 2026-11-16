<script setup>
// Sticky main header: logo, menu, phone and the main call-to-action. Collapses behind a toggle below 1200px.
import { ref } from 'vue'
import { BNavbar, BNavbarBrand, BNavbarNav, BNavItem, BCollapse, BButton } from 'bootstrap-vue-next'
import BrandLogo from '../ui/BrandLogo.vue'
import AppIcon from '../ui/AppIcon.vue'
import { navLinks, site } from '../../data/site'

const open = ref(false)
</script>

<template>
  <BNavbar toggleable="xl" sticky="top" container class="site-head">
    <BNavbarBrand href="#top" :aria-label="`${site.name}, home`"><BrandLogo /></BNavbarBrand>
    <button
      class="navbar-toggler"
      type="button"
      aria-controls="site-nav"
      :aria-expanded="open"
      aria-label="Toggle menu"
      @click="open = !open"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <BCollapse id="site-nav" v-model="open" is-nav>
      <BNavbarNav class="mx-auto align-items-xl-center column-gap-xl-1">
        <BNavItem v-for="link in navLinks" :key="link.href" :href="link.href" @click="open = false">
          {{ link.label }}
        </BNavItem>
      </BNavbarNav>
      <div class="actions">
        <a class="call" :href="site.phoneHref" :aria-label="`Call ${site.phone}`">
          <AppIcon name="phone" :size="18" />
          <span class="num">{{ site.phone }}</span>
        </a>
        <BButton variant="sun" size="sm" href="#contact" @click="open = false">Book Free Site Visit</BButton>
      </div>
    </BCollapse>
  </BNavbar>
</template>

<style scoped>
.site-head {
  --bs-navbar-color: var(--ink);
  --bs-navbar-hover-color: var(--sun-ink);
  --bs-navbar-active-color: var(--sun-ink);
  --bs-navbar-toggler-border-color: var(--line);
  --bs-navbar-padding-y: 0.6rem;
  --bs-navbar-nav-link-padding-x: 0.7rem;
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: saturate(160%) blur(14px);
  -webkit-backdrop-filter: saturate(160%) blur(14px);
  border-bottom: 1px solid var(--line);
  font-weight: 600;
  font-size: 0.94rem;
}
.site-head :deep(.navbar-brand) { margin-right: 0; min-width: 0; padding-block: 0; }
.site-head :deep(.navbar-toggler) { padding: 0.35rem 0.6rem; }
.site-head :deep(.nav-link) { border-radius: 999px; white-space: nowrap; }
.site-head :deep(.nav-link:hover) { background: var(--blue-soft); }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 18px; }
.call { display: inline-flex; align-items: center; gap: 8px; color: var(--ink); text-decoration: none; font-weight: 700; white-space: nowrap; }
.call:hover { color: var(--sun-ink); }
.actions .btn { white-space: nowrap; flex: none; }
/* Between 1200px and 1400px there is no room for the number, so the phone shows as a round icon button. */
@media (min-width: 1200px) and (max-width: 1399.98px) {
  .actions { flex-wrap: nowrap; }
  .call { width: 40px; height: 40px; justify-content: center; border-radius: 50%; background: var(--blue-soft); color: var(--sun-ink); }
  .call span { display: none; }
}
@media (min-width: 1400px) {
  .actions { flex-wrap: nowrap; }
}
@media (max-width: 1199.98px) {
  .site-head :deep(.navbar-nav) { padding-block: 12px 4px; }
  .site-head :deep(.nav-link) { padding-inline: 0.85rem; }
  .actions { padding: 8px 0 12px; }
}
</style>
