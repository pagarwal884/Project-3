// ===== Vite Configuration =====
// Vite is a fast build tool that helps develop and build the app
// This file tells Vite which plugins to use

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Plugin for React JSX support
import tailwindcss from '@tailwindcss/vite' // Plugin for Tailwind CSS styling

// https://vite.dev/config/
export default defineConfig({
  // Plugins enable special features:
  // - tailwindcss(): Allows using Tailwind utility classes
  // - react(): Allows writing React components with JSX syntax
  plugins: [ tailwindcss(), react()],
})
