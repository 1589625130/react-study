import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
// https://vitejs.dev/config/
//
const pathResolve = (dir: string): string => resolve(__dirname, '.', dir)

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
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: pathResolve('src') },
    ],
  },
  css: {
    preprocessorOptions: {
      // 配置less
      less: {
        javascriptEnabled: true,
        //全局less
      },
    },
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
