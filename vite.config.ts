import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/components/*.vue', 'src/composables/*.ts', 'src/lib.ts'],
      outputDir: 'dist',
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/lib.ts',
      name: 'TabbedInterface',
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },
});
