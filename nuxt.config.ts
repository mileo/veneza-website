export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      import('@tailwindcss/vite').then(m => m.default()),
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#74262C' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
      ],
    },
  },

  site: {
    url: 'https://www.veneza.ind.br',
    name: 'Panificadora Veneza',
    description: 'Panificadora Veneza - Mais de 35 anos de tradição em panificação com receitas italianas e fermentação natural.',
    defaultLocale: 'pt-BR',
  },

  googleFonts: {
    families: {
      Lora: [400, 500, 600, 700],
      Inter: [300, 400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },

  image: {
    quality: 80,
    formats: ['webp', 'jpg'],
  },

  nitro: {
    prerender: {
      routes: ['/', '/institucional', '/produtos', '/contato', '/trabalhe-conosco'],
    },
  },
})
