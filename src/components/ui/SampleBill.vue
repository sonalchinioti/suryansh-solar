<script setup>
// The "after solar" electricity bill shown in the hero.
import { computed } from 'vue'
import { estimate, formatInr } from '../../utils/solarEstimate'

const props = defineProps({
  monthlyBill: { type: Number, default: 3000 },
})
const plan = computed(() => estimate(props.monthlyBill, 'home'))
const units = computed(() => plan.value.kw * 120)
</script>

<template>
  <figure class="bill" aria-label="Sample electricity bill after solar">
    <header><span>Electricity bill</span><span>{{ plan.kw }} kW rooftop · Net meter</span></header>
    <dl>
      <div><dt>Units used from grid</dt><dd>{{ units }} kWh</dd></div>
      <div><dt>Units your roof exported</dt><dd class="plus">− {{ units }} kWh</dd></div>
      <div><dt>Net units billed</dt><dd>0 kWh</dd></div>
    </dl>
    <footer>
      <span>Energy charges payable</span>
      <p class="due"><s>{{ formatInr(plan.monthlySaving) }}</s><strong>₹0</strong></p>
      <small>Sample bill. Fixed meter charges set by your electricity board still apply.</small>
    </footer>
  </figure>
</template>

<style scoped>
.bill { background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 24px; margin: 0; font-family: var(--mono); font-size: 0.9rem; transform: rotate(1.5deg); box-shadow: 0 24px 48px -28px rgba(15, 35, 64, 0.45); }
.bill header { display: flex; justify-content: space-between; gap: 12px; padding-bottom: 14px; border-bottom: 2px dashed var(--line); color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.75rem; }
.bill dl { display: grid; gap: 10px; padding-block: 16px; margin: 0; }
.bill dl div { display: flex; justify-content: space-between; gap: 12px; }
.bill dt { color: var(--muted); font-weight: 400; }
.bill dd { font-variant-numeric: tabular-nums; margin: 0; }
.bill .plus { color: var(--leaf); }
.bill footer { border-top: 2px dashed var(--line); padding-top: 16px; display: grid; gap: 4px; }
.bill footer span { color: var(--muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; }
.bill .due { display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap; }
.bill .due s { color: var(--muted); font-size: 1.3rem; }
.bill .due strong { font: 800 3.4rem/1 var(--display); color: var(--leaf); letter-spacing: -0.03em; }
.bill small { color: var(--muted); font-size: 0.72rem; }
@media (max-width: 991.98px) { .bill { transform: none; } }
</style>
