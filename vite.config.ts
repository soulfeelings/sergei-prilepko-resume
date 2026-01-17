import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  base: '/sergei-prilepko-resume/',
  resolve: {
    dedupe: ['react', 'react-dom']
  }
})
