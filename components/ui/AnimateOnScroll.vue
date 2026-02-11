<script setup lang="ts">
const props = defineProps<{
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'stagger'
  delay?: number
}>()

const el = ref<HTMLElement>()

const animationClass = computed(() => {
  switch (props.animation) {
    case 'fade-in': return 'animate-fade-in'
    case 'slide-left': return 'animate-slide-left'
    case 'slide-right': return 'animate-slide-right'
    case 'stagger': return 'stagger-children'
    default: return 'animate-on-scroll'
  }
})

onMounted(() => {
  if (!el.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (props.delay) {
            setTimeout(() => entry.target.classList.add('is-visible'), props.delay)
          } else {
            entry.target.classList.add('is-visible')
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
  observer.observe(el.value)
})
</script>

<template>
  <div ref="el" :class="animationClass">
    <slot />
  </div>
</template>
