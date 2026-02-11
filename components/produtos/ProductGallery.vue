<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>

<template>
  <div v-if="images.length" class="overflow-x-auto -mx-4 px-4 py-4">
    <div class="flex gap-4 min-w-max">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="w-64 h-48 rounded-lg overflow-hidden flex-shrink-0 shadow-md"
      >
        <NuxtImg
          :src="img"
          :alt="`Produto ${i + 1}`"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
