import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    devServer: {
        Proxy: {
            "/webapi": {
                target: "http://localhost:3000",
                changeOrigin: true
            }
        }
    }
})