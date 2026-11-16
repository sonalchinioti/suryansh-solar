<script setup>
// After-sales support, online and on site.
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import AppIcon from '../ui/AppIcon.vue'
import { supportChannels } from '../../data/content'
import { site } from '../../data/site'
</script>

<template>
  <section id="support" class="band">
    <BContainer>
      <BRow class="g-4 g-lg-5 align-items-start">
        <BCol lg="5" class="intro">
          <SectionHeading
            eyebrow="Service and support"
            title="A plant is a 25-year relationship. We act like it."
            hindi="लगाने के बाद भी, हम आपके साथ।"
            lede="Most solar complaints are about the company disappearing after installation. Our customers recommend us for what happens next."
          />
          <BButton variant="outline-ink" :href="site.phoneHref">
            <AppIcon name="phone" :size="18" /> <span class="num">Call {{ site.phone }}</span>
          </BButton>
        </BCol>
        <BCol lg="7" class="d-grid gap-4">
          <div v-for="channel in supportChannels" :key="channel.title" class="channel">
            <span class="icon-badge icon-badge--sun"><AppIcon :name="channel.icon" :size="26" /></span>
            <div>
              <h3>{{ channel.title }}</h3>
              <ul class="points text-muted-ink">
                <li v-for="point in channel.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.intro :deep(.section-heading) { margin-bottom: 28px; }
.channel { display: flex; gap: 20px; align-items: flex-start; padding: 28px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); }
.channel h3 { margin: 0 0 14px; font-size: 1.3rem; }
@media (min-width: 992px) {
  .intro { position: sticky; top: 110px; }
}
@media (max-width: 575.98px) {
  .channel { flex-direction: column; gap: 14px; padding: 22px; }
}
</style>
