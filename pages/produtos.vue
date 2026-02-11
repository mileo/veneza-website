<script setup lang="ts">
import { products } from '~/data/products'

useSeoMeta({
  title: 'Produtos | Panificadora Veneza',
  ogTitle: 'Produtos | Panificadora Veneza',
  description: 'Conheça nossa linha de pães artesanais, panettones, colombas pascais e ovos de chocolate. Receitas italianas com fermentação natural.',
  ogDescription: 'Pães, panettones, colombas pascais e ovos de chocolate com fermentação natural.',
  ogImage: '/images/og_image.jpg',
})

const galleryImages: Record<string, string[]> = {
  paes: ['/images/banner_produtos_paes.jpg'],
  panettones: ['/images/banner_produtos_panettones.jpg'],
  'ovos-chocolate': [],
}
</script>

<template>
  <div>
    <!-- Hero banner -->
    <ParallaxBackground image="/images/bg_produtos.jpg" overlay-color="bg-dark-brown/60">
      <div class="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Nossos Produtos
          </h1>
          <p class="text-lg md:text-xl text-white/80 font-light tracking-wide">
            Feitos com receitas italianas e fermentação natural de 24 horas
          </p>
          <div class="w-20 h-0.5 bg-caramel mx-auto mt-4" />
        </div>
      </div>
    </ParallaxBackground>

    <!-- Products listing -->
    <section class="py-20 lg:py-28">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          :id="product.id"
          class="scroll-mt-28"
        >
          <AnimateOnScroll>
            <div
              class="flex flex-col items-center gap-8 py-12"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <!-- Product image -->
              <div class="flex-shrink-0">
                <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-burgundy/20 shadow-xl">
                  <NuxtImg
                    :src="product.image"
                    :alt="product.alt"
                    class="w-full h-full object-cover"
                    loading="lazy"
                    width="224"
                    height="224"
                  />
                </div>
              </div>

              <!-- Product info -->
              <div class="flex-1 text-center md:text-left">
                <h2 class="text-2xl md:text-3xl font-serif font-bold text-burgundy mb-4">
                  {{ product.name }}
                </h2>
                <p class="text-warm-gray leading-relaxed text-lg">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <!-- Gallery strip -->
          <AnimateOnScroll v-if="galleryImages[product.id]?.length">
            <ProductGallery :images="galleryImages[product.id]" />
          </AnimateOnScroll>

          <DecorativeDivider v-if="index < products.length - 1" />
        </div>
      </div>
    </section>
  </div>
</template>
