import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs-extra'
// fs 模块为Node.js 的文件读写模块
import Pages from 'vite-plugin-pages'
// File system based route generator for ⚡️Vite
import Inspect from 'vite-plugin-inspect'
// vite inspect检查系统
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
// antfu 手笔 自适应 import
import Markdown from 'vite-plugin-vue-markdown'
import Vue from '@vitejs/plugin-vue'
import Shiki from 'markdown-it-shiki'
// 语法高亮器shiki 的 antfu 版本
import matter from 'gray-matter'
// 解析器
import AutoImport from 'unplugin-auto-import/vite'
// 自动导入器
import anchor from 'markdown-it-anchor'
// md 的锚点生成器
import LinkAttributes from 'markdown-it-link-attributes'
// <a href="https://example.com" target="_blank" rel="noopener">Example</a>
import UnoCSS from 'unocss/vite'
import SVG from 'vite-svg-loader'
// @ts-expect-error missing types
import TOC from 'markdown-it-table-of-contents'
import { slugify } from './scripts/slugify'
// var result = md.render("[Example](https://example.com");

export default defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'dayjs',
      'dayjs/plugin/localizedFormat',
    ],
  },
  plugins: [
    UnoCSS(),

    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    Pages({
      extensions: ['vue', 'md'],
      pagesDir: 'pages',
      extendRoute(route: { component: string; meta: any }) {
        const path = resolve(__dirname, route.component.slice(1))

        if (!path.includes('projects.md')) {
          const md = fs.readFileSync(path, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        return route
      },
    }),

    Markdown({
      wrapperComponent: 'post',
      wrapperClasses: 'prose m-auto',
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        })
        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })

        // @ts-expect-error anyway
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        md.use(TOC, {
          includeLevel: [1, 2, 3],
          slugify,
        })
      },
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
      ],
    }),

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    Inspect(),

    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
    }),

    SVG({
      svgo: false,
    }),
  ],

  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT')
          next(warning)
      },
    },
  },

  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
})
