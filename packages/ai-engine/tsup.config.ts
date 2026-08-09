import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  clean: true,
  sourcemap: false,
  external: ['@langchain/core', '@langchain/langgraph', '@langchain/ollama', 'zod'],
});