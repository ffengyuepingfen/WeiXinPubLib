import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Gitee Pages 部署配置
  // 如果部署到 https://用户名.gitee.io/WeiXinPubLib/，需要设置 base
  // 如果部署到根目录 https://用户名.gitee.io/，设置为 '/'
  base: '/WeiXinPubLib/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
