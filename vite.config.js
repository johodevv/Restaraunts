import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    host: '0.0.0.0', // Bu kompyuteringizdagi barcha tarmoqlarga ruxsat beradi
    port: 5173       // Agar port band bo'lsa, buni 5174 deb o'zgartirishingiz mumkin
  }
})