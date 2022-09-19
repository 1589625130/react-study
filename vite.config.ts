import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/
// @ts-ignore
const pathResolve = (dir: string): string => resolve(__dirname, ".", dir);

const alias: Record<string, any> = {
  "@": pathResolve("src"),
};
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: alias,
  },
  //代理
  server: {
    proxy: {
      "/dev-api": {
        target: "http://localhost:5173",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, ""),
      },
    },
  },
});
