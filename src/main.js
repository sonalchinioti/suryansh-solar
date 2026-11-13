import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/theme.css'

import App from './App.vue'

// Follow the visitor's light/dark preference. Bootstrap and our theme tokens both read data-bs-theme.
const root = document.documentElement
const media = window.matchMedia('(prefers-color-scheme: dark)')
const applyTheme = () => {
  const forced = root.getAttribute('data-theme') // set by some hosts/previews
  root.setAttribute('data-bs-theme', forced || (media.matches ? 'dark' : 'light'))
}
applyTheme()
media.addEventListener('change', applyTheme)
new MutationObserver(applyTheme).observe(root, { attributes: true, attributeFilter: ['data-theme'] })

createApp(App).use(createBootstrap()).mount('#app')
