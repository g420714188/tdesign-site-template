import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import tdocPlugin from './plugin-tdoc/index.js'
import svgLoader from "vite-svg-loader";


const publicPathMap = {
  intranet: '/',
  production: 'http://192.168.100.171/site/'
}

export default ({ mode }) => {
  return defineConfig({
    base: publicPathMap[mode],
    assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.hdr'],
    resolve: {
      extensions: ['.js', '.ts', '.mjs', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@docs': path.resolve(__dirname, './src/docs'),
        '@consts': path.resolve(__dirname, './src/consts'),
        '@components': path.resolve(__dirname, './src/components'),
        '@tdesign': path.resolve(__dirname, './tdesign')
      }
    },
    build: {
      outDir: '_site',
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html'),
          contributor: path.resolve(__dirname, 'contributor.html')
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 10000,
      open: '/',
      https: false,
      fs: {
        strict: false
      }
    },
    plugins: [
      vue(
          {
            include: /(\.md|\.vue)$/,
            template: {
              compilerOptions: {
                isCustomElement: tag => tag.startsWith('td-')
              }
            }
          }
      ),
      vueJsx(),
      tdocPlugin(),
      svgLoader(),
    ]
  })
}
