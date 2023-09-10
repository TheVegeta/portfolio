import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  json: { stringify: true },
  base: "/portfolio/",
  build: {
    rollupOptions: {
      output: {
        dir: "build",
        entryFileNames: "ep-[hash].js",
        chunkFileNames: "ep-[hash].js",
        assetFileNames: "ep-[hash].[ext]",
      },
    },
  },
});
