<script setup lang="ts">
import { googleMapsEmbedUrl } from '~/data/company'

defineProps<{
  height?: string
}>()
</script>

<template>
  <div class="w-full rounded-lg overflow-hidden shadow-lg">
    <iframe
      :src="googleMapsEmbedUrl"
      :style="{ height: height || '350px' }"
      class="w-full border-0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Localização da Panificadora Veneza"
    />
  </div>
</template>
