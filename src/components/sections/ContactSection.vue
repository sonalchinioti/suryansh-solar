<script setup>
// Lead form. Sending is handled in services/leads.js, which is not connected to a backend yet.
import { reactive, ref } from 'vue'
import { BContainer, BRow, BCol, BButton, BForm, BFormGroup, BFormInput, BFormSelect, BAlert } from 'bootstrap-vue-next'
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
  <section id="contact" class="band">
    <BContainer>
      <BRow class="g-5 align-items-start">
        <BCol lg="6" class="d-grid gap-3">
          <p class="chapter">The last chapter is yours</p>
          <h2 class="m-0">Start with a free site visit.</h2>
          <p class="hi" lang="hi">आज ही फ्री साइट विज़िट बुक करें।</p>
          <p class="lede">
            Share your details and an engineer will call to fix a time. You get a written savings sheet for your roof.
            If the numbers don't work for you, you owe us nothing.
          </p>
          <p class="lines num">
            <span>Call or WhatsApp: {{ site.phone }}</span>
            <span>{{ site.email }}</span>
            <span>{{ site.hours }}</span>
          </p>
          <div>
            <BButton variant="wa" :href="site.whatsappUrl" target="_blank" rel="noopener">Chat on WhatsApp</BButton>
          </div>
        </BCol>
        <BCol lg="6">
          <BForm class="lead-form" novalidate @submit.prevent="onSubmit">
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
.lines { display: grid; gap: 6px; user-select: all; }
.lead-form { background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: clamp(20px, 3vw, 32px); }
</style>
