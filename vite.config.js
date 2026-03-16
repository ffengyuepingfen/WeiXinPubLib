import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署配置
  // 部署到 https://用户名.github.io/WeiXinPubLib/
  base: '/WeiXinPubLib/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
