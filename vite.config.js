import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep CRA's output folder so the S3 / gh-pages deploy script stays the same
    outDir: 'build',
  },
});
