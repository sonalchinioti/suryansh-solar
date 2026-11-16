<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import BrandLogo from '../ui/BrandLogo.vue'
import AppIcon from '../ui/AppIcon.vue'
import { site, navLinks, footerLinks } from '../../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot">
    <BContainer>
      <BRow class="g-4 g-lg-5">
        <BCol lg="5" class="d-grid gap-3 align-content-start">
          <BrandLogo on-dark />
          <p class="about">{{ site.description }}</p>
        </BCol>
        <BCol sm="6" lg="2">
          <h2>Explore</h2>
          <ul>
            <li v-for="link in navLinks" :key="link.href"><a :href="link.href">{{ link.label }}</a></li>
          </ul>
        </BCol>
        <BCol sm="6" lg="2">
          <h2>Company</h2>
          <ul>
            <li v-for="link in footerLinks" :key="link.href"><a :href="link.href">{{ link.label }}</a></li>
          </ul>
        </BCol>
        <BCol lg="3">
          <h2>Contact</h2>
          <ul class="contact">
            <li><AppIcon name="phone" :size="18" /><a :href="site.phoneHref" class="num">{{ site.phone }}</a></li>
            <li><AppIcon name="chat" :size="18" /><a :href="site.whatsappUrl" target="_blank" rel="noopener">WhatsApp us</a></li>
            <li><AppIcon name="mail" :size="18" /><a :href="`mailto:${site.email}`">{{ site.email }}</a></li>
            <li><AppIcon name="clock" :size="18" /><span>{{ site.hours }}</span></li>
          </ul>
        </BCol>
      </BRow>
      <div class="legal">
        <p>{{ site.disclaimer }}</p>
        <p>© {{ year }} {{ site.name }}</p>
      </div>
    </BContainer>
  </footer>
</template>

<style scoped>
.foot { background: var(--panel-deep); color: var(--on-panel-muted); padding-block: clamp(48px, 6vw, 72px) 32px; font-size: 0.94rem; }
.about { max-width: 42ch; }
h2 { font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-panel); margin-bottom: 16px; font-weight: 700; }
ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
a { color: var(--on-panel-muted); text-decoration: none; overflow-wrap: anywhere; }
a:hover { color: var(--gold); }
.contact li { display: flex; align-items: center; gap: 10px; }
.contact .icon { color: var(--gold); }
.legal { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--panel-line); display: grid; gap: 10px; font-size: 0.82rem; }
/* leave room for the mobile call bar */
@media (max-width: 1199.98px) { .foot { padding-bottom: 100px; } }
</style>
