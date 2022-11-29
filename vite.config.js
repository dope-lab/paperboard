/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactScopedCssPlugin } from "rollup-plugin-react-scoped-css";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@C": path.resolve(__dirname, "./src/components"),
      "@A": path.resolve(__dirname, "./src/assets"),
      "@S": path.resolve(__dirname, "./src/store")
    }
  },
  plugins: [react(), reactScopedCssPlugin()]
});
