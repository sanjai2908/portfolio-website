import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config tailored for a simple React portfolio site
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
