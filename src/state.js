// Small shared state. The "Solar for" cards set this so the calculator opens on the right property type.
import { ref } from 'vue'

/** @type {import('vue').Ref<'home'|'society'>} */
export const calculatorMode = ref('home')
