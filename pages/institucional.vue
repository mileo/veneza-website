<script setup lang="ts">
import { company } from '~/data/company'
import { products } from '~/data/products'

useSeoMeta({
  title: 'Institucional | Panificadora Veneza',
  ogTitle: 'Institucional | Panificadora Veneza',
  description: `A família Veneza soma mais de 35 anos de experiência no mercado de panificação. Receitas italianas, fermentação natural e ingredientes selecionados.`,
  ogDescription: 'Conheça a história da Panificadora Veneza — tradição italiana em panificação.',
  ogImage: '/images/og_image.jpg',
})
</script>

<template>
  <div>
    <!-- Hero banner -->
    <ParallaxBackground image="/images/bg_institucional.jpg" overlay-color="bg-dark-brown/60">
      <div class="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Institucional
          </h1>
          <div class="w-20 h-0.5 bg-caramel mx-auto" />
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
              Cuidamos de tudo para que você leve muito carinho, respeito e sabor à sua mesa!
            </p>
          </div>
        </AnimateOnScroll>

        <DecorativeDivider class="my-16" />

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
