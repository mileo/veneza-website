<script setup lang="ts">
defineProps<{
  image: string
  alt?: string
  overlay?: boolean
  overlayColor?: string
}>()
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="absolute inset-0 parallax-bg"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <div
      v-if="overlay !== false"
      class="absolute inset-0"
      :class="overlayColor || 'bg-dark-brown/60'"
    />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
