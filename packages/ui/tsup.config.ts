import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'],
  dts: true,
  splitting: true,
  clean: true,
  sourcemap: false,
  external: ['react', 'react-dom'],
});
