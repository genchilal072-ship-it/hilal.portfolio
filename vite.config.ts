import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Vite config — https://vitejs.dev/config/
// './' göreli yol kullanır; GitHub Pages'te repo adı ne olursa olsun
// (kullaniciadi.github.io/REPO-ADI) çalışır, ayar değiştirmen gerekmez.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
