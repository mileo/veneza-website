<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label: string
  required?: boolean
  placeholder?: string
  rows?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const id = computed(() => `field-${props.label.toLowerCase().replace(/\s+/g, '-')}`)
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-dark-brown mb-1.5">
      {{ label }} <span v-if="required" class="text-burgundy">*</span>
    </label>
    <textarea
      :id="id"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :rows="rows || 5"
      class="w-full px-4 py-3 bg-white border border-rose/50 rounded-lg text-dark-brown placeholder:text-warm-gray/50 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 transition-all duration-300 resize-y"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </div>
</template>
