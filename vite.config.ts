import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// type the following in Google
// How can I avoid publishing _commonHelper file in Vite for github pages?
export default defineConfig({
  plugins: [react()],
  base: "/my-project/",
  build: {
    rollupOptions: {
      external: ["/_commonjsHelpers-DCkdB7M8.js"],
    },
  },
});
