import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    output: 'server',
  vite: {
    server: {
      proxy: {
        '/api': 'http://localhost:8080'
      }
    }
  },
  integrations: [tailwind(), react()]
});