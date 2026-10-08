// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  ssr: true,

  app: {
    baseURL: '/cd-tech-website/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'CD.Tech - 工业可视化 & 智能应用解决方案',
      meta: [
        { name: 'description', content: 'CD.Tech 专注于工业级拓扑图、3D模型展示、储能大屏及英语口语应用开发，为企业提供一站式可视化与智能化解决方案。' },
        { name: 'keywords', content: '工业拓扑图,3D模型展示,储能大屏,英语口语App,可视化,CD.Tech' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'CD.Tech - 工业可视化 & 智能应用解决方案' },
        { property: 'og:description', content: 'CD.Tech 专注于工业级拓扑图、3D模型展示、储能大屏及英语口语应用开发' },
        { name: 'theme-color', content: '#0a0f1e' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    compressPublicAssets: true,
  },

  experimental: {
    payloadExtraction: true,
  },

  routeRules: {
    '/': { prerender: true },
    '/products/**': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
  },
})
