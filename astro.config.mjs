import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  i18n: {
    defaultLocale: 'es',
    // Idioma por defecto
    locales: ['es', 'ca', 'en'],
    // Idiomas locales
    routing: {
      prefixDefaultLocale: false // true: es -> /es  ca -> /ca (cambia la url)
    }
  },
  devToolbar: {
    enabled: false
  },
  adapter: vercel()
});