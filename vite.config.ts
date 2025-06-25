import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    // Safely define default empty object if no defines are needed
    __DEFINES__: JSON.stringify({})
  },
  build: {
    // Ensure proper handling of environment variables
    target: 'esnext',
    emptyOutDir: true
  }
});