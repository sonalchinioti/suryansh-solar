<script setup>
// Mid-page banner that sends the visitor to the calculator or the site-visit form.
import { BContainer, BButton } from 'bootstrap-vue-next'
import AppIcon from '../ui/AppIcon.vue'
</script>

<template>
  <section class="cta-wrap">
    <BContainer>
      <div class="cta">
        <div class="cta-copy">
          <h2>Electricity bill going up? See what your roof can save.</h2>
          <p>Move one slider to your monthly bill. No sign-up needed.</p>
        </div>
        <div class="cta-actions">
          <BButton variant="sun" href="#calculator">
            <AppIcon name="calc" :size="18" /> Open the Calculator
          </BButton>
          <BButton variant="outline-panel" href="#contact">Book Free Site Visit</BButton>
        </div>
      </div>
    </BContainer>
  </section>
</template>

<style scoped>
.cta-wrap { background: var(--surface); padding-bottom: clamp(56px, 8vw, 104px); }
.cta {
  position: relative; overflow: hidden; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px 40px;
  padding: clamp(28px, 4.5vw, 52px); border-radius: 28px; color: var(--on-panel);
  background: var(--cells), linear-gradient(120deg, var(--panel-deep), var(--panel) 50%, var(--panel-2)); box-shadow: var(--shadow-lg);
}
.cta-copy { display: grid; gap: 10px; max-width: 34rem; position: relative; z-index: 1; }
.cta h2 { margin: 0; font-size: clamp(1.5rem, 3vw, 2.1rem); }
.cta p { color: var(--on-panel-muted); }
.cta-actions { display: flex; flex-wrap: wrap; gap: 12px; position: relative; z-index: 1; }
</style>
