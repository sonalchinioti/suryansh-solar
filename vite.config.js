import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' keeps asset paths relative, so the build works on any host or sub-folder (e.g. GitHub Pages).
export default defineConfig({
  base: './',
  plugins: [vue()],
})
