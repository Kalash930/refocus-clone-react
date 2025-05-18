import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'my-vite-react-app' with your actual repo name
export default defineConfig({
  base: '/refocus-clone-react/',
  plugins: [react()],
})
