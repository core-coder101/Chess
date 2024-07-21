import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: true,
  },
  base: process.env.VITE_BASE_PATH,
  plugins: [
    react(),
    legacy({
    targets: ['defaults', 'not IE 11']
  })
],
})
