import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [yaml()]
  }
});
