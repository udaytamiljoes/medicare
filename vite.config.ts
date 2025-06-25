import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Use SWC instead of Babel
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});