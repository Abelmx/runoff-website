import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://runoff.dev",
  output: "static",
  server: {
    port: Number(process.env.PORT ?? 4321),
  },
});
