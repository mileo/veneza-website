<script setup lang="ts">
import type { Product } from '~/types'

defineProps<{
  product: Product
  expanded?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="`/produtos#${product.id}`"
    class="group text-center block"
  >
    <div class="relative mx-auto w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden mb-6 ring-4 ring-white/20 group-hover:ring-caramel/60 transition-all duration-500 group-hover:scale-105">
      <NuxtImg
        :src="product.image"
        :alt="product.alt"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        width="208"
        height="208"
      />
    </div>
    <h3 class="text-xl font-serif font-semibold text-white mb-3 group-hover:text-caramel transition-colors">
      {{ product.name }}
    </h3>
    <p v-if="expanded" class="text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
      {{ product.description }}
    </p>
  </NuxtLink>
</template>
