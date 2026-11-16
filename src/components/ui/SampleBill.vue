<script setup>
// The "after solar" electricity bill card that floats over the hero illustration.
import { computed } from 'vue'
import { estimate, formatInr, ASSUMPTIONS } from '../../utils/solarEstimate'

const props = defineProps({
  monthlyBill: { type: Number, default: 3000 },
})
const plan = computed(() => estimate(props.monthlyBill, 'home'))
const units = computed(() => plan.value.kw * ASSUMPTIONS.unitsPerKwMonth)
</script>

<template>
  <figure class="bill" aria-label="Sample electricity bill after solar">
    <header><span>Sample bill</span><span>{{ plan.kw }} kW · Net meter</span></header>
    <dl>
      <div><dt>Used from grid</dt><dd>{{ units }} kWh</dd></div>
      <div><dt>Exported by your roof</dt><dd class="plus">− {{ units }} kWh</dd></div>
    </dl>
    <footer>
      <span>Energy charges payable</span>
      <p class="due"><s>{{ formatInr(plan.monthlySaving) }}</s><strong>₹0</strong></p>
      <small>Fixed meter charges set by your electricity board still apply.</small>
    </footer>
  </figure>
</template>

<style scoped>
.bill {
  background: var(--surface); color: var(--ink); border: 1px solid var(--line); border-radius: 18px;
  padding: 18px 20px; margin: 0; font-size: 0.86rem; font-variant-numeric: tabular-nums; box-shadow: var(--shadow-lg);
}
.bill header { display: flex; justify-content: space-between; gap: 12px; padding-bottom: 10px; border-bottom: 1px dashed var(--line); color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.68rem; font-weight: 700; }
.bill dl { display: grid; gap: 6px; padding-block: 12px; margin: 0; }
.bill dl div { display: flex; justify-content: space-between; gap: 12px; }
.bill dt { color: var(--muted); font-weight: 500; }
.bill dd { margin: 0; font-weight: 600; white-space: nowrap; }
.bill .plus { color: var(--leaf); }
.bill footer { border-top: 1px dashed var(--line); padding-top: 12px; display: grid; gap: 2px; }
.bill footer span { color: var(--muted); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
.bill .due { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
.bill .due s { color: var(--muted); font-size: 1.1rem; }
.bill .due strong { font: 800 2.5rem/1.1 var(--display); color: var(--leaf); letter-spacing: -0.03em; }
.bill small { color: var(--muted); font-size: 0.7rem; line-height: 1.4; }
</style>
