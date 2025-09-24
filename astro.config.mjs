// @ts-check
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        tabler: ["*"], // Incluir todos los iconos de Tabler
        "simple-icons": ["*"], // Incluir todos los iconos de Simple Icons
      },
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});