import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es']
  }
})
