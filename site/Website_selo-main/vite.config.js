// дёргаем defineConfig из Vite (надо)
import { defineConfig } from 'vite'
// дёргаем плагин для поддержки Реакта
import react from '@vitejs/plugin-react-swc'

// Дёргаем конфиги по умолчанию
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
