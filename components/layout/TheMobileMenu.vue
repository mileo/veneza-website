<script setup lang="ts">
import { navigation } from '~/data/company'

const isOpen = useState('mobileMenu', () => false)

function close() {
  isOpen.value = false
}

watch(isOpen, (val) => {
  if (import.meta.server) return
  document.body.style.overflow = val ? 'hidden' : ''
})

const route = useRoute()
watch(() => route.path, () => {
  close()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 z-50 lg:hidden"
        @click="close"
      />
    </Transition>

    <Transition name="slide">
      <div
        v-if="isOpen"
        class="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-burgundy z-50 lg:hidden flex flex-col"
      >
        <!-- Close button -->
        <div class="flex items-center justify-between p-6">
          <NuxtImg
            src="/images/logo.png"
            alt="Veneza"
            class="h-12 w-auto brightness-0 invert"
          />
          <button
            class="p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar menu"
            @click="close"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navigation links -->
        <nav class="flex-1 px-6 py-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="block py-4 text-lg font-serif text-white/80 hover:text-caramel transition-colors border-b border-white/10"
            active-class="!text-caramel"
            @click="close"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Social + contact -->
        <div class="p-6 border-t border-white/10">
          <SocialIcons light class="mb-4" />
          <a href="tel:+551239513195" class="block text-white/70 text-sm mb-1">(12) 3951-3195</a>
          <a href="mailto:faleconosco@veneza.ind.br" class="block text-white/70 text-sm">faleconosco@veneza.ind.br</a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
