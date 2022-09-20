import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
// @ts-ignore
const pathResolve = (dir: string): string => resolve(__dirname, '.', dir)

const alias: Record<string, any> = {
  '@': pathResolve('src'),
}
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      supportTs: true,
      mockPath: 'mock',
      localEnabled: true,
      prodEnabled: false,
      watchFiles: true,
    }),
  ],
  resolve: {
    alias: alias,
  },
  //代理
  server: {
    proxy: {
      '/dev-api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, ''),
      },
    },
  },
})
