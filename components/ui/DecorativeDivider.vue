<script setup lang="ts">
defineProps<{
  light?: boolean
}>()
</script>

<template>
  <div class="flex items-center justify-center gap-4 my-8">
    <div class="h-px flex-1 max-w-[100px]" :class="light ? 'bg-white/30' : 'bg-burgundy/20'" />
    <svg class="w-6 h-6" :class="light ? 'text-caramel' : 'text-burgundy'" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" opacity="0.3"/>
      <circle cx="12" cy="12" r="3" />
    </svg>
    <div class="h-px flex-1 max-w-[100px]" :class="light ? 'bg-white/30' : 'bg-burgundy/20'" />
  </div>
</template>
