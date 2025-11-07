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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    // vitePrerenderPlugin({
    //   // where your app mounts in index.html
    //   renderTarget: '#root',
    //   // absolute path to a prerender script (created below)
    //   prerenderScript: path.resolve(process.cwd(), 'prerender.jsx'),
    //   // optional: add routes that aren’t discoverable by links
    //   additionalPrerenderRoutes: ['/', '/home', '/services', '/contact', '/mission'],
    //   discoverLinks: false,
    // }),
  ],
});