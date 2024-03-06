import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir)
}

const alias = {
  '@': pathResolve("src"),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, loaderContext) => {
          const { resourcePath } = loaderContext;
          if (/variables\.scss/.test(resourcePath) || /mixin\.scss/.test(resourcePath)) {
            return content
          }
          return '@import "@/assets/style/variables.scss";' + '@import "@/assets/style/mixin.scss";' + content
        },
      }
    }
  },
  server: {
    // port: 8080, //启动端口
    // hmr: {
    //   host: '127.0.0.1',
    //   port: 8080
    // },
    proxy: {
      '/api': {
        target: 'http://172.16.91.27:9059',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
