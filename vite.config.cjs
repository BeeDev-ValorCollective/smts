/**
 * Vite Configuration File (CommonJS)
 * 
 * This configuration sets up a React project using Vite and adds support
 * for prerendering routes via `vite-plugin-prerender`. We are using the 
 * CommonJS format (`.cjs`) to avoid "require is not defined" errors caused 
 * by certain dependencies.
 * 
 * Key Features:
 * - Includes @vitejs/plugin-react for handling React files.
 * - Uses vite-plugin-prerender to visit each specified route in a headless browser 
 *   and produce a static HTML snapshot of the final rendered page (including dynamic meta tags).
 * 
 * Usage:
 * - Rename this file to `vite.config.cjs` so Vite loads it as a CommonJS module.
 * - Add or remove routes in the `routes` array based on your app's paths.
 * - Run `npm run build` to produce static files in the `dist` folder.
 * - Deploy the `dist` folder to any static hosting for SEO-friendly pages.
 */

const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const prerender = require('vite-plugin-prerender');

module.exports = defineConfig({
  plugins: [
    // React plugin
    react(),

    // Prerender plugin configuration
    prerender({
      routes: [
        '/',
        '/home',
        '/services',
        '/contact',
        '/mission',
        // Add more routes if needed
      ],
    }),
  ],
});
