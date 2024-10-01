import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  i18n: {
    defaultLocale: 'es', // Idioma por defecto
    locales: ['es', 'ca'], // Idiomas locales
    routing: {
      prefixDefaultLocale: false // true: es -> /es  ca -> /ca (cambia la url)
    }
  },
  devToolbar: {
    enabled: false
  }
});