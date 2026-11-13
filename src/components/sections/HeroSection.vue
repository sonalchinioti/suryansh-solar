<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'
import SampleBill from '../ui/SampleBill.vue'
import { site, trustPoints } from '../../data/site'
</script>

<template>
  <section class="hero">
    <BContainer>
      <BRow class="align-items-center g-5">
        <BCol lg="7" class="hero-copy">
          <p class="chapter">Rooftop solar for homes and housing societies</p>
          <h1>Pay your electricity bill for 5 more years. Then <mark>never again</mark>.</h1>
          <p class="hi hi--hero" lang="hi">अब छत से बनेगी बिजली, बिल से मिलेगी छुट्टी।</p>
          <p class="lede">
            We put a solar plant on your roof with no money down. Our finance partner pays the full cost upfront, the
            government subsidy cuts the loan, and the money you used to send to the electricity board becomes the EMI.
            In about five years the plant is yours, debt-free, with a 25-year warranty.
          </p>
          <div class="d-flex flex-wrap gap-3">
            <BButton variant="sun" href="#contact">Book Free Site Visit</BButton>
            <BButton variant="wa" :href="site.whatsappUrl" target="_blank" rel="noopener">WhatsApp Us</BButton>
            <BButton variant="outline-ink" href="#calculator">Calculate My Savings</BButton>
          </div>
          <ul class="trust">
            <li v-for="point in trustPoints" :key="point">{{ point }}</li>
          </ul>
        </BCol>
        <BCol lg="5">
          <SampleBill :monthly-bill="3000" />
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(32px, 6vw, 72px) clamp(56px, 8vw, 96px);
  background: radial-gradient(circle at 84% 34%, var(--sun-soft) 0 230px, transparent 231px);
}
.hero-copy { display: grid; gap: 24px; }
.hero-copy h1 { margin: 0; }
.hi--hero {
  width: fit-content; max-width: 100%;
  font-weight: 800; font-size: clamp(1.45rem, 3.4vw, 2.2rem); line-height: 1.4;
  color: var(--gold); background: var(--panel);
  padding: 12px 22px; border-radius: 14px; box-shadow: 6px 6px 0 var(--sun);
}
.trust { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px; }
.trust li { background: var(--surface); border: 1px solid var(--line); border-radius: 999px; padding: 6px 14px; font-weight: 600; font-size: 0.92rem; display: flex; gap: 8px; align-items: center; }
.trust li::before { content: "✓"; color: var(--leaf); font-weight: 800; }
@media (max-width: 991.98px) {
  .hero { background: radial-gradient(circle at 100% 0, var(--sun-soft) 0 180px, transparent 181px); }
}
</style>
