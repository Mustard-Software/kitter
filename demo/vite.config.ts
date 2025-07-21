import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'demo',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../demo-dist',
  },
});
