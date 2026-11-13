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
        chapter="Government scheme · PM Suryodaya Yojana"
        title="The government pays up to ₹78,000 of your plant. We get it for you."
        hindi="प्रधानमंत्री सूर्योदय योजना: सरकार दे रही है ₹78,000 तक की सब्सिडी।"
      />
      <BRow class="g-5">
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
          <p>
            <strong>The scheme is planned to run through 2026-27.</strong> Applying while it is open is the difference
            between a ₹1.95 lakh plant and a ₹1.17 lakh one.
          </p>
          <h3>What we handle for you</h3>
          <ul class="points">
            <li v-for="item in subsidy.handledForYou" :key="item">{{ item }}</li>
          </ul>
        </BCol>
        <BCol lg="6" class="d-grid gap-3 align-content-start">
          <h3 class="rate-title">Subsidy for homes</h3>
          <LedgerList :rows="subsidy.homeRates" />
          <h3 class="rate-title">Subsidy for housing societies</h3>
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
.scheme-copy h3, .rate-title { margin: 0; }
.rate-title { font-size: 1.15rem; }
</style>
