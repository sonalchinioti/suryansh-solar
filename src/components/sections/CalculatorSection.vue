<script setup>
// Savings calculator. All maths lives in utils/solarEstimate.js.
import { ref, computed, watch } from 'vue'
import { BContainer, BButton, BFormInput } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import AppIcon from '../ui/AppIcon.vue'
import { estimate, formatInr, formatLakh, ASSUMPTIONS } from '../../utils/solarEstimate'
import { calculatorMode as mode } from '../../state'

// Slider range and starting bill for each property type.
const modes = {
  home: { label: 'Home', icon: 'home', min: 1000, max: 12000, step: 100, start: 3000 },
  society: { label: 'Housing society', icon: 'building', min: 10000, max: 200000, step: 1000, start: 45000 },
}

const bill = ref(modes[mode.value].start)
const slider = computed(() => modes[mode.value])
// The mode can also be changed from the "Solar for" cards, so reset the bill whenever it changes.
watch(mode, (next) => { bill.value = modes[next].start })

const plan = computed(() => estimate(Number(bill.value), mode.value))
const loanYears = ASSUMPTIONS.loanMonths / 12
const tiles = computed(() => [
  { label: 'Plant size for this bill', value: `${plan.value.kw} kW`, big: true },
  { label: 'Bill saved every month', value: formatInr(plan.value.monthlySaving), big: true, win: true },
  { label: `EMI for ${loanYears} years`, value: `${formatInr(plan.value.emi)} / month` },
  { label: `Net gain over ${ASSUMPTIONS.plantLifeYears} years`, value: formatLakh(plan.value.netGain), win: true },
])
</script>

<template>
  <section id="calculator" class="band">
    <BContainer>
      <SectionHeading
        center
        eyebrow="Savings calculator"
        title="See what your roof can save"
        hindi="अपनी बचत खुद देखिए।"
      />
      <div class="calc">
        <div class="controls">
          <div class="mode" role="group" aria-label="Property type">
            <button
              v-for="(m, key) in modes"
              :key="key"
              type="button"
              :class="{ active: mode === key }"
              :aria-pressed="mode === key"
              @click="mode = key"
            >
              <AppIcon :name="m.icon" :size="18" /> {{ m.label }}
            </button>
          </div>
          <div>
            <label for="bill" class="form-label">Monthly electricity bill</label>
            <output class="bill-out num d-block" for="bill">{{ formatInr(bill) }}</output>
            <BFormInput id="bill" v-model="bill" type="range" :min="slider.min" :max="slider.max" :step="slider.step" />
            <p class="range-ends num"><span>{{ formatInr(slider.min) }}</span><span>{{ formatInr(slider.max) }}</span></p>
          </div>
          <p class="hint">An estimate to start the conversation. The site visit gives you the exact plant size and a written savings sheet.</p>
          <BButton variant="sun" href="#contact">Get My Exact Numbers <AppIcon name="arrow" :size="18" class="arrow-dot" /></BButton>
        </div>
        <div class="results" aria-live="polite">
          <div class="tiles">
            <div v-for="tile in tiles" :key="tile.label" class="tile" :class="{ 'tile--big': tile.big, 'tile--win': tile.win }">
              <span>{{ tile.label }}</span>
              <b class="num">{{ tile.value }}</b>
            </div>
          </div>
          <div class="sum num">
            <div><span>Plant cost, financed in full</span><b>{{ formatInr(plan.cost) }}</b></div>
            <i aria-hidden="true">−</i>
            <div><span>Government subsidy</span><b>{{ formatInr(plan.subsidy) }}</b></div>
            <i aria-hidden="true">=</i>
            <div><span>Loan to repay</span><b>{{ formatInr(plan.loan) }}</b></div>
            <div class="upfront"><span>You pay upfront</span><b>₹0</b></div>
          </div>
        </div>
      </div>
      <p class="note mt-4 mx-auto text-center">
        Assumes ₹{{ ASSUMPTIONS.tariffPerUnit }} per unit, {{ ASSUMPTIONS.unitsPerKwMonth }} units per kW a month,
        {{ ASSUMPTIONS.annualInterest * 100 }}% interest over {{ ASSUMPTIONS.loanMonths }} months, flat tariffs, and
        current subsidy slabs. Actual cost, subsidy and loan terms depend on your roof, state and lender approval.
      </p>
    </BContainer>
  </section>
</template>

<style scoped>
.calc {
  display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: clamp(20px, 3vw, 36px);
  padding: clamp(20px, 3.5vw, 40px); border-radius: 28px; color: var(--on-panel);
  background: linear-gradient(160deg, var(--panel-deep), var(--panel) 55%, var(--panel-2)); box-shadow: var(--shadow-lg);
}
.controls { display: grid; gap: 24px; align-content: center; justify-items: start; }
.controls > div { width: 100%; }
.mode { display: inline-flex; flex-wrap: wrap; gap: 4px; padding: 5px; width: auto !important; max-width: 100%; border-radius: 999px; background: var(--panel-tint); border: 1px solid var(--panel-line); }
.mode button { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border: 0; border-radius: 999px; background: transparent; color: var(--on-panel); font-weight: 700; font-size: 0.92rem; }
.mode button.active { background: var(--sun); color: var(--on-sun); }
.form-label { color: var(--on-panel-muted); }
.bill-out { font: 800 clamp(2.4rem, 5.5vw, 3.4rem) / 1.1 var(--display); letter-spacing: -0.03em; color: var(--sun); margin-bottom: 10px; }
.range-ends { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--on-panel-muted); margin-top: 4px; }
.hint { font-size: 0.92rem; color: var(--on-panel-muted); }

.results { display: grid; gap: 14px; align-content: center; }
.tiles { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.tile, .sum { background: var(--surface); color: var(--ink); border-radius: 18px; }
.tile { display: grid; gap: 6px; align-content: start; padding: 20px 22px; min-width: 0; }
.tile span, .sum span { font-size: 0.84rem; font-weight: 600; color: var(--muted); }
.tile b { font: 800 1.3rem/1.15 var(--display); letter-spacing: -0.02em; overflow-wrap: anywhere; }
.tile--big b { font-size: clamp(1.7rem, 3.4vw, 2.5rem); }
.tile--win b { color: var(--leaf); }
.sum { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 18px; padding: 20px 22px; }
.sum div { display: grid; gap: 2px; }
.sum b { font: 800 1.15rem/1.2 var(--display); }
.sum i { font-style: normal; font-weight: 800; font-size: 1.3rem; color: var(--muted); }
.sum .upfront { flex-basis: 100%; display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; border-radius: 14px; background: var(--leaf-soft); }
.sum .upfront span { color: var(--ink); }
.sum .upfront b { color: var(--leaf); }

@media (max-width: 991.98px) {
  .calc { grid-template-columns: minmax(0, 1fr); }
}
@media (max-width: 575.98px) {
  .sum { display: grid; gap: 10px; }
  .sum div { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .sum i { display: none; }
  .sum b { font-size: 1rem; }
  .tile { padding: 16px; }
}
</style>
