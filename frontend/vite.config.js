import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from `.env` file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Custom port for development
    proxy: {
      // Proxy API requests to your backend server
      '/api': {
        target: 'http://localhost:4000', // Backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Generate source maps for debugging
  },
  resolve: {
    alias: {
      '@': '/src', // Add a custom alias for cleaner imports
    },
  },
  define: {
    // Inject global variables if needed
    'process.env': process.env,
  },
});
