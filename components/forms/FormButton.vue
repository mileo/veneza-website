<script setup lang="ts">
defineProps<{
  loading?: boolean
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <button
    type="submit"
    :disabled="loading || disabled"
    class="inline-flex items-center justify-center px-8 py-3 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[
      variant === 'secondary'
        ? 'bg-cream text-burgundy hover:bg-cream-dark'
        : 'bg-caramel text-white hover:bg-caramel-dark hover:shadow-lg hover:-translate-y-0.5'
    ]"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <slot>Enviar</slot>
  </button>
</template>
