import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "public",
    assetsInlineLimit: 0,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/icons",
          dest: "assets",
        },
      ],
    }),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Random Bag",
        icons: [
          {
            src: "/assets/icons/192-logo.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/assets/icons/192-logo.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/assets/icons/512-logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/assets/icons/512-logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 3000,
  },
});
