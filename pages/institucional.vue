<script setup lang="ts">
import { company } from '~/data/company'
import { products } from '~/data/products'

useSeoMeta({
  title: 'Nossa História | Tradição Italiana desde 1989',
  ogTitle: 'Nossa História — Panificadora Veneza | Tradição Italiana desde 1989',
  description: `A família Veneza soma mais de 35 anos de experiência no mercado de panificação. Receitas italianas, fermentação natural e ingredientes selecionados.`,
  ogDescription: 'Conheça a história da Panificadora Veneza — tradição italiana em panificação.',
  ogImage: '/images/og_image.jpg',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.veneza.ind.br/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Institucional', 'item': 'https://www.veneza.ind.br/institucional' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Panificadora Veneza',
        'alternateName': 'Panifício Veneza',
        'url': 'https://www.veneza.ind.br',
        'logo': 'https://www.veneza.ind.br/images/logo.png',
        'foundingDate': '1989',
        'description': 'Mais de 35 anos de tradição em panificação com receitas italianas e fermentação natural.',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Estrada do Jardim, 1600',
          'addressLocality': 'Jacareí',
          'addressRegion': 'SP',
          'postalCode': '12326-830',
          'addressCountry': 'BR',
        },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- Hero banner -->
    <ParallaxBackground image="/images/bg_institucional.jpg" overlay-color="bg-dark-brown/60">
      <div class="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Mais de 35 Anos de Tradição Italiana
          </h1>
          <p class="text-lg md:text-xl text-white/80 font-light tracking-wide">
            Da família Veneza para a sua mesa, desde 1989
          </p>
          <div class="w-20 h-0.5 bg-caramel mx-auto mt-4" />
        </div>
      </div>
    </ParallaxBackground>

    <!-- About content -->
    <section class="py-20 lg:py-28 bg-cream relative grain-texture">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <div class="text-center space-y-8 text-warm-gray leading-relaxed text-lg">
            <p>
              A família Veneza soma mais de <strong class="text-burgundy">35 anos de experiência</strong> no mercado de panificação e produz uma extensa linha de produtos, incluindo pães de alho, colombas pascais, ovos de chocolate e os deliciosos panettones.
            </p>
            <p>
              Para entregar produtos de alta qualidade, utilizamos <strong class="text-burgundy">ingredientes selecionados</strong> um a um, massa madre ou <strong class="text-burgundy">levain</strong> e <strong class="text-burgundy">fermentação natural</strong> seguindo as tradicionais receitas italianas.
            </p>
            <p class="text-xl font-serif text-burgundy italic">
              Cuidamos de tudo para que você leve muito carinho, respeito e sabor à sua mesa.
            </p>
          </div>
        </AnimateOnScroll>

        <DecorativeDivider class="my-16" />

        <!-- Nossos Diferenciais -->
        <AnimateOnScroll animation="stagger">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-burgundy/10 flex items-center justify-center">
                <svg class="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="font-serif text-burgundy font-semibold mb-1">Fermentação Natural 24h</h3>
              <p class="text-warm-gray text-sm">Processo artesanal sem atalhos</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-burgundy/10 flex items-center justify-center">
                <svg class="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c-1.2 0-2.4.6-3 1.5C8.4 3.6 7.2 3 6 3 3.8 3 2 4.8 2 7c0 4 5 8.5 10 12 5-3.5 10-8 10-12 0-2.2-1.8-4-4-4-1.2 0-2.4.6-3 1.5C14.4 3.6 13.2 3 12 3z" />
                </svg>
              </div>
              <h3 class="font-serif text-burgundy font-semibold mb-1">Receitas Italianas</h3>
              <p class="text-warm-gray text-sm">Tradição passada por três gerações</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-burgundy/10 flex items-center justify-center">
                <svg class="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="font-serif text-burgundy font-semibold mb-1">Ingredientes Selecionados</h3>
              <p class="text-warm-gray text-sm">Escolhidos um a um, sem conservantes</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-burgundy/10 flex items-center justify-center">
                <svg class="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 class="font-serif text-burgundy font-semibold mb-1">+35 Anos de Tradição</h3>
              <p class="text-warm-gray text-sm">Desde 1989 em Jacareí, SP</p>
            </div>
          </div>
        </AnimateOnScroll>

        <!-- Product preview circles -->
        <AnimateOnScroll animation="stagger">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <NuxtLink
              v-for="product in products"
              :key="product.id"
              :to="`/produtos#${product.id}`"
              class="group text-center"
            >
              <div class="relative mx-auto w-36 h-36 rounded-full overflow-hidden mb-4 ring-4 ring-burgundy/20 group-hover:ring-caramel/60 transition-all duration-500 group-hover:scale-105">
                <NuxtImg
                  :src="product.image"
                  :alt="product.alt"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  width="144"
                  height="144"
                />
              </div>
              <h3 class="font-serif text-burgundy font-semibold group-hover:text-caramel transition-colors">
                {{ product.name }}
              </h3>
            </NuxtLink>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  </div>
</template>
