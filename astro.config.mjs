import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://runoff-website.vercel.app",
  output: "static",
  server: {
    port: Number(process.env.PORT ?? 4321),
  },
});
