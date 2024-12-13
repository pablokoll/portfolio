import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import vercelStatic from '@astrojs/vercel/static';
import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon(), playformCompress({ Path: ['./vercel/output', './dist'] })],
    output: 'static',
    adapter: vercelStatic({ webAnalytics: true }),
    site: 'https://pablokoll.com',
});
