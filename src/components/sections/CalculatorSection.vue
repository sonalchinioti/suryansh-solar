<script setup>
// Chapter 6: savings calculator. All maths lives in utils/solarEstimate.js.
import { ref, computed } from 'vue'
import { BContainer, BRow, BCol, BButton, BButtonGroup, BFormInput } from 'bootstrap-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import LedgerList from '../ui/LedgerList.vue'
import { estimate, formatInr, formatLakh, ASSUMPTIONS } from '../../utils/solarEstimate'

// Slider range and starting bill for each property type.
const modes = {
  home: { label: 'Home', min: 1000, max: 12000, step: 100, start: 3000 },
  society: { label: 'Housing society', min: 10000, max: 200000, step: 1000, start: 45000 },
}

const mode = ref('home')
const bill = ref(modes.home.start)
const slider = computed(() => modes[mode.value])

function setMode(next) {
  mode.value = next
  bill.value = modes[next].start
}

const plan = computed(() => estimate(Number(bill.value), mode.value))
const loanYears = ASSUMPTIONS.loanMonths / 12
const rows = computed(() => [
  { label: 'Plant cost, financed in full', value: formatInr(plan.value.cost) },
  { label: 'Government subsidy', value: `− ${formatInr(plan.value.subsidy)}` },
  { label: `EMI for ${loanYears} years`, value: `${formatInr(plan.value.emi)} / month` },
  { label: 'Bill saved', value: `${formatInr(plan.value.monthlySaving)} / month` },
  { label: 'You pay upfront', value: '₹0' },
  { label: `Net gain over ${ASSUMPTIONS.plantLifeYears} years`, value: formatLakh(plan.value.netGain), highlight: true },
])
</script>

<template>
  <section id="calculator" class="band band--panel">
    <BContainer>
      <SectionHeading
        chapter="Chapter 6 · Your roof, your numbers"
        title="Move the slider to your monthly bill."
        hindi="अपनी बचत खुद देखिए।"
      />
      <BRow class="g-5 align-items-start">
        <BCol lg="5" class="d-grid gap-4">
          <BButtonGroup aria-label="Property type" class="mode">
            <BButton
              v-for="(m, key) in modes"
              :key="key"
              size="sm"
              :variant="mode === key ? 'sun' : 'outline-panel'"
              :pressed="mode === key"
              @click="setMode(key)"
            >
              {{ m.label }}
            </BButton>
          </BButtonGroup>
          <div>
            <label for="bill" class="form-label">Monthly electricity bill</label>
            <output class="bill-out num d-block" for="bill">{{ formatInr(bill) }}</output>
            <BFormInput id="bill" v-model="bill" type="range" :min="slider.min" :max="slider.max" :step="slider.step" />
          </div>
          <p class="lede">
            An estimate to start the conversation. The site recce gives you the exact plant size and savings sheet.
          </p>
        </BCol>
        <BCol lg="7">
          <div class="result" aria-live="polite">
            <h3>A {{ plan.kw }} kW plant fits this bill</h3>
            <LedgerList :rows="rows" plain />
            <p class="note mt-3">
              Assumes ₹{{ ASSUMPTIONS.tariffPerUnit }} per unit, {{ ASSUMPTIONS.unitsPerKwMonth }} units per kW a month,
              {{ ASSUMPTIONS.annualInterest * 100 }}% interest over {{ ASSUMPTIONS.loanMonths }} months, flat tariffs,
              and current subsidy slabs. Actual cost, subsidy and loan terms depend on your roof, state and lender
              approval.
            </p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.mode { width: fit-content; max-width: 100%; }
.bill-out { font: 800 clamp(2.4rem, 6vw, 3.6rem) / 1.1 var(--display); letter-spacing: -0.03em; color: var(--gold); margin-bottom: 8px; }
.result { background: var(--bg); color: var(--ink); border-radius: 16px; padding: 24px; }
.result h3 { margin-bottom: 8px; }
</style>
