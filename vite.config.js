import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep CRA's output folder so the S3 / gh-pages deploy script stays the same
    outDir: 'build',
  },
});
