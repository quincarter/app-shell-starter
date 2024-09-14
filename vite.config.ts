/// <reference types="vitest" />
import dns from 'dns';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import compression from 'vite-plugin-compression';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  base: './',
  plugins: [
    compression({
      // add extensions here --- e.g.:
      // filter: /\.(js|mjs|json|css)$/i
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallbackDenylist: [/^\/assets/],
      },
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        publicPath: './public',
        description: 'My Awesome App description',
        theme_color: 'red',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  build: {
    assetsDir: 'src',
    cssMinify: true,
  },
  test: {
    coverage: {
      exclude: [
        '**/.history',
        '**/dev-dist',
        '**/node_modules',
        '**/vite.config.*',
        '**/vite-env.d.ts',
        '**/.yarn',
        '**/configuration',
        '**/contexts'
      ],
      enabled: true,
      thresholds: {
        functions: 85,
        branches: 85,
        statements: 85,
        lines: 85,
      },
    },
  },
});
