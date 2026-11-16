<script setup>
// Lead form. Sending is handled in services/leads.js, which is not connected to a backend yet.
import { reactive, ref } from 'vue'
import { BContainer, BRow, BCol, BButton, BForm, BFormGroup, BFormInput, BFormSelect, BAlert } from 'bootstrap-vue-next'
import AppIcon from '../ui/AppIcon.vue'
import { site } from '../../data/site'
import { propertyTypes } from '../../data/content'
import { submitLead, validateLead } from '../../services/leads'

const lead = reactive({ name: '', phone: '', city: '', property: propertyTypes[0], bill: '' })
const status = ref(null) // { variant, text }
const sending = ref(false)

async function onSubmit() {
  const problem = validateLead(lead)
  if (problem) {
    status.value = { variant: 'warning', text: problem }
    return
  }
  sending.value = true
  const result = await submitLead({ ...lead })
  sending.value = false
  if (result.ok) {
    status.value = { variant: 'success', text: 'Thank you. Our engineer will call you to fix a time for the site visit.' }
  } else if (result.reason === 'not-configured') {
    status.value = {
      variant: 'warning',
      text: `This form is not connected yet, so nothing was sent. Please call or WhatsApp us on ${site.phone}.`,
    }
  } else {
    status.value = { variant: 'danger', text: `We could not send your request. Please call or WhatsApp us on ${site.phone}.` }
  }
}
</script>

<template>
  <section id="contact" class="band band--panel">
    <BContainer>
      <BRow class="g-4 g-lg-5 align-items-center">
        <BCol lg="6" class="d-grid gap-3">
          <p class="eyebrow">Free site visit</p>
          <h2 class="m-0">Find out what your roof can save.</h2>
          <p class="hi" lang="hi">आज ही फ्री साइट विज़िट बुक करें।</p>
          <p class="lede">
            Share your details and an engineer will call to fix a time. You get a written savings sheet for your roof.
            If the numbers don't work for you, you owe us nothing.
          </p>
          <ul class="lines">
            <li><AppIcon name="phone" :size="20" /><a :href="site.phoneHref" class="num">{{ site.phone }}</a></li>
            <li><AppIcon name="mail" :size="20" /><a :href="`mailto:${site.email}`">{{ site.email }}</a></li>
            <li><AppIcon name="clock" :size="20" /><span>{{ site.hours }}</span></li>
          </ul>
          <div>
            <BButton variant="wa" :href="site.whatsappUrl" target="_blank" rel="noopener">
              <AppIcon name="chat" :size="18" /> Chat on WhatsApp
            </BButton>
          </div>
        </BCol>
        <BCol lg="6">
          <BForm class="lead-form" novalidate @submit.prevent="onSubmit">
            <h3 class="mb-3">Request a call back</h3>
            <BRow class="g-3">
              <BCol sm="6">
                <BFormGroup label="Your name" label-for="f-name">
                  <BFormInput id="f-name" v-model="lead.name" autocomplete="name" required />
                </BFormGroup>
              </BCol>
              <BCol sm="6">
                <BFormGroup label="Mobile number" label-for="f-phone">
                  <BFormInput id="f-phone" v-model="lead.phone" type="tel" inputmode="numeric" autocomplete="tel" placeholder="10-digit number" required />
                </BFormGroup>
              </BCol>
              <BCol sm="6">
                <BFormGroup label="City / area" label-for="f-city">
                  <BFormInput id="f-city" v-model="lead.city" autocomplete="address-level2" required />
                </BFormGroup>
              </BCol>
              <BCol sm="6">
                <BFormGroup label="Property" label-for="f-type">
                  <BFormSelect id="f-type" v-model="lead.property" :options="propertyTypes" />
                </BFormGroup>
              </BCol>
              <BCol cols="12">
                <BFormGroup label="Average monthly bill (₹)" label-for="f-bill">
                  <BFormInput id="f-bill" v-model="lead.bill" type="number" inputmode="numeric" min="0" placeholder="e.g. 3000" />
                </BFormGroup>
              </BCol>
              <BCol cols="12">
                <BButton type="submit" variant="sun" class="w-100" :disabled="sending">Request My Free Site Visit</BButton>
              </BCol>
              <BCol cols="12">
                <p class="free-note"><AppIcon name="shield" :size="18" /> The site visit is free. You pay nothing to book it.</p>
              </BCol>
              <BCol v-if="status" cols="12">
                <BAlert :model-value="true" :variant="status.variant" class="mb-0">{{ status.text }}</BAlert>
              </BCol>
            </BRow>
          </BForm>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.lines { list-style: none; padding: 0; margin: 8px 0; display: grid; gap: 10px; }
.lines li { display: flex; align-items: center; gap: 12px; font-weight: 600; }
.lines .icon { color: var(--sun); }
.lines a { color: inherit; text-decoration: none; overflow-wrap: anywhere; }
.lines a:hover { color: var(--gold); }
.lead-form { background: var(--surface); color: var(--ink); border-radius: 24px; padding: clamp(22px, 3vw, 36px); box-shadow: var(--shadow-lg); }
.free-note { display: flex; align-items: center; gap: 8px; font-size: 0.86rem; color: var(--muted); }
.free-note .icon { color: var(--leaf); }
</style>
