import { defineConfig } from 'vite';

export default defineConfig({
  // Definir la entrada principal de tu aplicación
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});

