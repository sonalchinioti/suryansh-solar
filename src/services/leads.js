// The one place to connect the "free site visit" form to a backend (CRM, Google Sheet, email API, WhatsApp API).
// NOT CONNECTED YET: this returns ok:false so the form never tells a visitor their request was sent when it was not.
//
// Example once you have an endpoint:
//   const res = await fetch('https://your-api.example/leads', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(lead),
//   })
//   return { ok: res.ok }

/**
 * @param {{name: string, phone: string, city: string, property: string, bill: string}} lead
 * @returns {Promise<{ok: boolean, reason?: string}>}
 */
export async function submitLead(lead) {
  void lead
  return { ok: false, reason: 'not-configured' }
}

export function validateLead(lead) {
  if (!lead.name.trim() || !lead.city.trim()) {
    return 'Please fill in your name and city so our engineer knows who to call and where.'
  }
  if (lead.phone.replace(/\D/g, '').length < 10) {
    return 'Please enter a 10-digit mobile number.'
  }
  return ''
}
