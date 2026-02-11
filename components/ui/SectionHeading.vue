<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}>()
</script>

<template>
  <div class="mb-8 lg:mb-12" :class="centered !== false ? 'text-center' : ''">
    <h2
      class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4"
      :class="light ? 'text-white' : 'text-burgundy'"
    >
      {{ title }}
    </h2>
    <div
      class="w-20 h-0.5 mx-auto mb-4"
      :class="[
        light ? 'bg-caramel' : 'bg-caramel',
        centered !== false ? 'mx-auto' : ''
      ]"
    />
    <p
      v-if="subtitle"
      class="text-lg max-w-2xl"
      :class="[
        light ? 'text-white/80' : 'text-warm-gray',
        centered !== false ? 'mx-auto' : ''
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
