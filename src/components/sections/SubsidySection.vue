<script setup>
// Government scheme: PM Suryodaya Yojana, now running as PM Surya Ghar: Muft Bijli Yojana.
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import LedgerList from '../ui/LedgerList.vue'
import { subsidy } from '../../data/content'
</script>

<template>
  <section id="subsidy" class="band band--surface">
    <BContainer>
      <SectionHeading
        eyebrow="Government scheme · PM Surya Ghar"
        title="The government pays up to ₹78,000 of your plant. We get it for you."
        hindi="प्रधानमंत्री सूर्योदय योजना: सरकार दे रही है ₹78,000 तक की सब्सिडी।"
      />
      <BRow class="g-4 g-lg-5">
        <BCol lg="6" class="scheme-copy">
          <p>
            In January 2024 the Prime Minister announced the <strong>Pradhan Mantri Suryodaya Yojana</strong> to put
            rooftop solar on 1 crore homes. It is now running as <strong>PM Surya Ghar: Muft Bijli Yojana</strong>, and
            it is built to give a household up to 300 units of free electricity every month.
          </p>
          <p>
            The subsidy is paid straight into your bank account after the plant is installed and inspected. In our
            finance plan that money goes against your loan, which is why the EMI can stay close to your old bill.
          </p>
          <p class="deadline">
            <strong>The scheme is planned to run through 2026-27.</strong> Applying while it is open is the difference
            between a ₹1.95 lakh plant and a ₹1.17 lakh one.
          </p>
          <div class="handled">
            <h3>What we handle for you</h3>
            <ul class="points">
              <li v-for="item in subsidy.handledForYou" :key="item">{{ item }}</li>
            </ul>
          </div>
        </BCol>
        <BCol lg="6" class="d-grid gap-3 align-content-start">
          <h3 class="rate-title">Subsidy for homes</h3>
          <ul class="slabs">
            <li v-for="rate in subsidy.homeRates" :key="rate.label" :class="{ top: rate.highlight }">
              <b class="num">{{ rate.value }}</b>
              <span>{{ rate.label }}</span>
            </li>
          </ul>
          <h3 class="rate-title mt-3">Subsidy for housing societies</h3>
          <LedgerList :rows="subsidy.societyRates" />
          <p class="note">
            Central subsidy slabs as published for the scheme. The final amount is approved by the government after
            inspection, and some states add their own subsidy on top.
          </p>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.scheme-copy { display: grid; gap: 18px; align-content: start; }
.scheme-copy p { color: var(--muted); max-width: 58ch; }
.scheme-copy p strong { color: var(--ink); }
.deadline { background: var(--sun-soft); border-radius: 16px; padding: 16px 20px; }
.scheme-copy .deadline { color: var(--ink); }
.handled { display: grid; gap: 14px; margin-top: 8px; }
.scheme-copy h3, .rate-title { margin: 0; }
.slabs { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.slabs li { display: grid; gap: 6px; align-content: start; padding: 20px 18px; background: var(--bg); border: 1px solid var(--line); border-radius: 18px; min-width: 0; }
.slabs b { font: 800 clamp(1.3rem, 2.4vw, 1.75rem) / 1.1 var(--display); letter-spacing: -0.03em; color: var(--sun-ink); }
.slabs span { font-size: 0.86rem; color: var(--muted); line-height: 1.45; }
.slabs .top { background: var(--panel); border-color: var(--panel); }
.slabs .top b { color: var(--sun); }
.slabs .top span { color: var(--on-panel-muted); }
@media (max-width: 575.98px) {
  .slabs { grid-template-columns: minmax(0, 1fr); }
}
</style>
