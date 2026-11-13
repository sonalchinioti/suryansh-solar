<script setup>
// 25-year bar drawn to scale: the loan years, then the free years.
import { computed } from 'vue'
import { ASSUMPTIONS } from '../../utils/solarEstimate'

const loanYears = computed(() => ASSUMPTIONS.loanMonths / 12)
const life = ASSUMPTIONS.plantLifeYears
</script>

<template>
  <div
    class="years"
    role="img"
    :aria-label="`${life}-year timeline: years 1 to ${loanYears} you pay an EMI about equal to your old bill, years ${loanYears + 1} to ${life} the electricity is free`"
  >
    <div class="years-bar">
      <div class="y-emi" :style="{ flex: loanYears }"><b>EMI ≈ your old bill</b><span>Years 1 to {{ loanYears }}</span></div>
      <div class="y-free" :style="{ flex: life - loanYears }">
        <b>Free electricity from a plant you own</b>
        <span>Years {{ loanYears + 1 }} to {{ life }}, covered by the {{ life }}-year warranty</span>
      </div>
    </div>
    <div class="years-axis num">
      <span>Year 1</span>
      <span class="mid" :style="{ left: (loanYears / life) * 100 + '%' }">Year {{ loanYears }}</span>
      <span>Year {{ life }}</span>
    </div>
  </div>
</template>

<style scoped>
.years { display: grid; gap: 14px; }
.years-bar { display: flex; gap: 4px; min-height: 108px; }
.years-bar > div { padding: 16px; border-radius: 16px; display: grid; align-content: space-between; gap: 8px; min-width: 0; }
.y-emi { background: var(--sun); color: var(--on-sun); }
.y-free { background: var(--panel-2); color: var(--on-panel); }
.years-bar b { font: 700 clamp(1rem, 2.4vw, 1.5rem) / 1.1 var(--display); }
.years-bar span { font-size: 0.85rem; }
.years-axis { position: relative; display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--on-panel-muted); }
.years-axis .mid { position: absolute; transform: translateX(-50%); }
@media (max-width: 480px) {
  .y-emi span { display: none; }
  .years-bar > div { padding: 12px 10px; }
}
</style>
