import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { configDefaults } from "vitest/config";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    babel({
      presets: [reactCompilerPreset()],
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "**.spec.ts"],
  },
});
