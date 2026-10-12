import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      ".trycloudflare.com", // allow all Cloudflare Tunnel subdomains
      ".ngrok-free.dev", // allow all Ngrok subdomains
    ],
  },
});
