<script setup lang="ts">
defineProps<{
  height?: string
}>()
</script>

<template>
  <div class="w-full rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8!2d-45.97!3d-23.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdc5b7a8b36bed%3A0x3c8d8c8f8a8a8a8a!2sEstrada%20do%20Jardim%2C%201600%20-%20Jacare%C3%AD%2C%20SP!5e0!3m2!1spt-BR!2sbr"
      :style="{ height: height || '350px' }"
      class="w-full border-0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Localização da Panificadora Veneza"
    />
  </div>
</template>
