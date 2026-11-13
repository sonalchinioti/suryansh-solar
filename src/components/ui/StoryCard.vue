<script setup>
// One customer story with its cost breakdown. The breakdown is calculated, so it always matches the calculator.
import { computed } from 'vue'
import { BCard, BRow, BCol } from 'bootstrap-vue-next'
import LedgerList from './LedgerList.vue'
import { estimate, formatInr, formatLakh, ASSUMPTIONS } from '../../utils/solarEstimate'

const props = defineProps({
  story: { type: Object, required: true },
})

const loanYears = ASSUMPTIONS.loanMonths / 12
const rows = computed(() => {
  const p = estimate(props.story.bill, props.story.type)
  return [
    { label: 'Plant size', value: `${p.kw} kW` },
    { label: 'Plant cost, financed in full', value: formatInr(p.cost) },
    { label: 'Government subsidy', value: `− ${formatInr(p.subsidy)}` },
    { label: 'Loan left to repay', value: formatInr(p.loan) },
    { label: `EMI for ${loanYears} years`, value: `${formatInr(p.emi)} / month` },
    { label: 'Bill saved', value: `${formatInr(p.monthlySaving)} / month` },
    {
      label: `Free power, years ${loanYears + 1} to ${ASSUMPTIONS.plantLifeYears}`,
      value: formatLakh(p.freePowerValue),
      highlight: true,
    },
  ]
})
</script>

<template>
  <BCard class="story" body-class="p-4 p-lg-5">
    <BRow class="g-4 g-lg-5">
      <BCol lg="7" class="story-text">
        <p class="who">{{ story.who }}</p>
        <h3>{{ story.title }}</h3>
        <p v-for="(para, i) in story.paragraphs" :key="i" class="text-muted-ink">{{ para }}</p>
      </BCol>
      <BCol lg="5">
        <LedgerList :rows="rows" />
      </BCol>
    </BRow>
  </BCard>
</template>

<style scoped>
.story { --bs-card-border-radius: 20px; }
.story-text { display: grid; gap: 12px; align-content: start; }
.story-text h3 { margin: 0; }
.who { font-weight: 700; font-size: 0.85rem; letter-spacing: 0.04em; text-transform: uppercase; background: var(--sun-soft); color: var(--ink); padding: 4px 14px; border-radius: 999px; width: fit-content; }
</style>
