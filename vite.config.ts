import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rendering_engine_practice/",
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@models", replacement: "/src/models" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@services", replacement: "/src/services" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@translate", replacement: "/src/translate" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@", replacement: "/src" },
    ],
  },
});
