<script setup lang="ts">
import { heroSlides } from '~/data/slides'

const currentSlide = ref(0)
const isTransitioning = ref(false)
let interval: ReturnType<typeof setInterval>

function nextSlide() {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  setTimeout(() => { isTransitioning.value = false }, 1200)
}

function goToSlide(index: number) {
  if (isTransitioning.value || index === currentSlide.value) return
  isTransitioning.value = true
  currentSlide.value = index
  setTimeout(() => { isTransitioning.value = false }, 1200)
  resetInterval()
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(nextSlide, 6000)
}

onMounted(() => {
  interval = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
    <!-- Slides -->
    <div
      v-for="(slide, index) in heroSlides"
      :key="slide.id"
      class="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
      :class="index === currentSlide ? 'opacity-100' : 'opacity-0'"
    >
      <NuxtImg
        :src="slide.image"
        :alt="slide.alt"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        sizes="100vw"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-dark-brown/50 via-dark-brown/30 to-dark-brown/70" />
    </div>

    <!-- Content overlay -->
    <div class="relative z-10 h-full flex items-center justify-center text-center px-4">
      <div class="max-w-3xl">
        <Transition name="slide-up" mode="out-in">
          <div :key="currentSlide">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              {{ heroSlides[currentSlide].title }}
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide">
              {{ heroSlides[currentSlide].subtitle }}
            </p>
          </div>
        </Transition>

        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/produtos"
            class="inline-flex items-center justify-center px-8 py-3.5 bg-caramel text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-caramel-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Conheça Nossos Produtos
          </NuxtLink>
          <a
            href="https://wa.me/5512997437379"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/60 text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Dots navigation -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
      <button
        v-for="(slide, index) in heroSlides"
        :key="slide.id"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="index === currentSlide ? 'bg-caramel scale-125' : 'bg-white/50 hover:bg-white/80'"
        :aria-label="`Ir para slide ${index + 1}`"
        @click="goToSlide(index)"
      />
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 right-8 z-20 hidden md:block">
      <div class="flex flex-col items-center gap-2 text-white/50">
        <span class="text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">Scroll</span>
        <div class="w-px h-12 bg-white/30 animate-pulse mt-12" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-up-enter-active {
  transition: all 0.8s ease;
}
.slide-up-leave-active {
  transition: all 0.5s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
