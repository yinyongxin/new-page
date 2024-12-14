import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [solid()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['solid-js', 'gridstack'],
        },
      },
    },
  },
});
