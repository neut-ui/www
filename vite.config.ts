import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss()],
  server: {
    port: 3000,
  },
  build: { sourcemap: true, target: "esnext" },
  resolve: {
    dedupe: ["solid-js", "solid-js/web", "solid-js/store"],
  },
});
