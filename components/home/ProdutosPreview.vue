<script setup lang="ts">
import { products } from '~/data/products'
</script>

<template>
  <ParallaxBackground image="/images/bg_produtos.jpg" overlay-color="bg-dark-brown/80">
    <section class="py-20 lg:py-32">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Produtos"
            subtitle="Feitos com receitas italianas e fermentação natural"
            light
          />
        </AnimateOnScroll>

        <AnimateOnScroll animation="stagger">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div class="text-center mt-12">
            <NuxtLink
              to="/produtos"
              class="inline-flex items-center gap-2 px-8 py-3.5 bg-caramel text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-caramel-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Nossa Linha Completa
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  </ParallaxBackground>
</template>
