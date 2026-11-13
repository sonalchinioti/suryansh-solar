<script setup>
// Sticky main header: logo, menu and the main call-to-action. Collapses behind a toggle on small screens.
import { ref } from 'vue'
import { BNavbar, BNavbarBrand, BNavbarNav, BNavItem, BCollapse, BButton } from 'bootstrap-vue-next'
import BrandLogo from '../ui/BrandLogo.vue'
import { navLinks, site } from '../../data/site'

const open = ref(false)
</script>

<template>
  <BNavbar toggleable="lg" sticky="top" container class="site-head py-2">
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
      <BNavbarNav class="ms-auto align-items-lg-center column-gap-lg-2">
        <BNavItem v-for="link in navLinks" :key="link.href" :href="link.href" @click="open = false">
          {{ link.label }}
        </BNavItem>
        <li class="nav-item ms-lg-2 my-2 my-lg-0">
          <BButton variant="sun" size="sm" href="#contact" @click="open = false">Book Free Site Visit</BButton>
        </li>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<style scoped>
.site-head {
  --bs-navbar-color: var(--ink);
  --bs-navbar-hover-color: var(--sun-ink);
  --bs-navbar-active-color: var(--sun-ink);
  --bs-navbar-toggler-border-color: var(--line);
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 8px 20px -16px rgba(0, 0, 0, 0.4);
  font-weight: 600;
  font-size: 0.98rem;
}
</style>
