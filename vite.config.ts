import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/finance-app",
  plugins: [vue(), ViteAliases()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
});
