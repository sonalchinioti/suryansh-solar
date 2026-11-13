<script setup>
// Label / amount rows, like lines on a bill. rows: [{ label, value, highlight? }]
defineProps({
  rows: { type: Array, required: true },
  plain: { type: Boolean, default: false }, // no box, for use inside another card
})
</script>

<template>
  <dl class="ledger" :class="{ 'ledger--plain': plain }">
    <div v-for="row in rows" :key="row.label" :class="{ win: row.highlight }">
      <dt>{{ row.label }}</dt>
      <dd>{{ row.value }}</dd>
    </div>
  </dl>
</template>

<style scoped>
.ledger { background: var(--bg); border: 1px solid var(--line); border-radius: 16px; padding: 20px 22px; font-size: 0.95rem; margin: 0; }
.ledger--plain { background: transparent; border: 0; padding: 0; }
.ledger div { display: flex; justify-content: space-between; gap: 16px; padding-block: 8px; }
.ledger div + div { border-top: 1px dashed var(--line); }
.ledger dt { color: var(--muted); font-weight: 400; }
.ledger dd { font-family: var(--mono); font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; margin: 0; }
.ledger .win dt, .ledger .win dd { color: var(--leaf); font-weight: 700; }
</style>
