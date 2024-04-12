import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
    server: {
    port: 3000,
  },

  plugins: [remix({
      ignoredRouteFiles: ["**/*.css"],
    }), tsconfigPaths()],
  resolve: {
     extensions: ['.js', '.jsx', '.json','.ts', '.tsx'],
    alias: {
      "~": `${path.resolve(__dirname, "app")}/`,
    },
  },
});