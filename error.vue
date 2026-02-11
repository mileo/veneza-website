<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-cream flex items-center justify-center px-4">
    <div class="text-center max-w-md">
      <NuxtImg
        src="/images/logo.png"
        alt="Panificadora Veneza"
        class="h-20 w-auto mx-auto mb-8"
      />

      <h1 class="text-8xl font-serif font-bold text-burgundy mb-4">
        {{ error.statusCode }}
      </h1>
      <p class="text-xl text-warm-gray mb-2 font-serif">
        Página não encontrada
      </p>
      <p class="text-warm-gray/70 mb-8">
        A página que você procura pode ter sido removida ou está temporariamente indisponível.
      </p>

      <button
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-caramel text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-caramel-dark hover:shadow-lg transition-all duration-300"
        @click="handleError"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Voltar ao Início
      </button>
    </div>
  </div>
</template>
