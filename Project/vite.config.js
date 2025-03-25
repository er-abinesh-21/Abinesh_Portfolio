import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Ensures static assets are served from the correct directory
    sourcemap: true, // Enables source maps for debugging
  },
});