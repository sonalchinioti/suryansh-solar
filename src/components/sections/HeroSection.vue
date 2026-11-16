<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'
import SampleBill from '../ui/SampleBill.vue'
import RoofScene from '../ui/RoofScene.vue'
import AppIcon from '../ui/AppIcon.vue'
import { site, trustPoints, heroStats } from '../../data/site'
</script>

<template>
  <section class="hero">
    <BContainer>
      <BRow class="align-items-center g-4 g-lg-5">
        <BCol lg="6" class="hero-copy">
          <p class="eyebrow"><AppIcon name="sun" :size="16" /> Rooftop solar for homes and housing societies</p>
          <h1>Solar on your roof for <span class="hl">₹0 down</span>. Yours in 5 years.</h1>
          <p class="hi" lang="hi">अब छत से बनेगी बिजली, बिल से मिलेगी छुट्टी।</p>
          <p class="hero-lede">
            Our finance partner pays for the plant, the government subsidy cuts the loan, and the money you used to
            send to the electricity board becomes the EMI.
          </p>
          <div class="d-flex flex-wrap gap-3">
            <BButton variant="sun" href="#contact">Book Free Site Visit <AppIcon name="arrow" :size="18" class="arrow-dot" /></BButton>
            <BButton variant="outline-panel" href="#calculator">Calculate My Savings</BButton>
          </div>
          <ul class="trust">
            <li v-for="point in trustPoints" :key="point"><AppIcon name="check" :size="16" />{{ point }}</li>
          </ul>
        </BCol>
        <BCol lg="6">
          <div class="visual">
            <RoofScene />
            <SampleBill class="visual-bill" :monthly-bill="3000" />
          </div>
        </BCol>
      </BRow>
      <ul class="stats">
        <li v-for="stat in heroStats" :key="stat.label">
          <AppIcon :name="stat.icon" :size="30" />
          <div>
            <b class="num">{{ stat.figure }}</b>
            <span>{{ stat.label }}</span>
          </div>
        </li>
      </ul>
    </BContainer>
  </section>
</template>

<style scoped>
.hero {
  color: var(--on-panel);
  background:
    radial-gradient(900px 500px at 85% -10%, rgba(255, 194, 26, 0.16), transparent 60%),
    var(--cells),
    linear-gradient(160deg, var(--panel-deep), var(--panel) 55%, var(--panel-2));
  padding-block: clamp(40px, 6vw, 80px) clamp(40px, 5vw, 64px);
  overflow: hidden;
}
.hero-copy { display: grid; gap: 22px; }
.hero-copy h1 { margin: 0; }
.eyebrow { color: var(--gold); background: var(--panel-tint); border: 1px solid var(--panel-line); }
.hl { color: var(--sun); white-space: nowrap; }
.hi { color: var(--gold); }
.hero-lede { font-size: clamp(1.05rem, 1.5vw, 1.2rem); color: var(--on-panel-muted); max-width: 54ch; }
.trust { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 8px 22px; font-weight: 600; font-size: 0.92rem; }
.trust li { display: flex; gap: 8px; align-items: center; }
.trust .icon { color: var(--sun); }

.visual { position: relative; padding-bottom: 56px; }
/* Thin concentric rings behind the picture */
.visual::before {
  content: ""; position: absolute; inset: -18% -22% -6% -10%; pointer-events: none;
  background: repeating-radial-gradient(circle at 62% 42%, transparent 0 78px, var(--panel-line) 78px 79px);
  -webkit-mask-image: radial-gradient(circle at 62% 42%, #000 30%, transparent 70%);
  mask-image: radial-gradient(circle at 62% 42%, #000 30%, transparent 70%);
}
.visual > * { position: relative; }
.visual :deep(.scene) { box-shadow: var(--shadow-lg); }
.visual-bill { position: absolute; left: -28px; bottom: 0; width: min(300px, 78%); }

.stats {
  list-style: none; padding: 0; margin: clamp(40px, 5vw, 64px) 0 0;
  display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
  background: var(--panel-tint); border: 1px solid var(--panel-line); border-radius: var(--radius);
}
.stats li { display: flex; align-items: center; gap: 16px; padding: 22px 24px; min-width: 0; }
.stats li > .icon { color: var(--on-panel-muted); stroke-width: 1.4; }
.stats li div { display: grid; gap: 4px; min-width: 0; }
.stats li + li { border-left: 1px solid var(--panel-line); }
.stats b { display: block; font: 800 clamp(1.5rem, 2.8vw, 2.1rem) / 1.1 var(--display); letter-spacing: -0.03em; color: var(--sun); }
.stats span { font-size: 0.9rem; color: var(--on-panel-muted); }

@media (max-width: 1199.98px) {
  .visual-bill { left: 12px; }
}
@media (max-width: 767.98px) {
  .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .stats li { padding: 16px; gap: 12px; }
  .stats li > .icon { width: 24px; height: 24px; }
  .stats li + li { border-left: 0; }
  .stats li:nth-child(even) { border-left: 1px solid var(--panel-line); }
  .stats li:nth-child(n + 3) { border-top: 1px solid var(--panel-line); }
}
@media (max-width: 575.98px) {
  .stats li > .icon { display: none; }
  .visual { padding-bottom: 0; display: grid; gap: 16px; }
  .visual-bill { position: static; width: 100%; }
}
</style>
