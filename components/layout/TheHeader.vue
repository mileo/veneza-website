<script setup lang="ts">
import { company, navigation } from '~/data/company'

const isScrolled = ref(false)
const isMobileMenuOpen = useState('mobileMenu', () => false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 lg:h-24">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0" aria-label="Panificadora Veneza - Página inicial">
          <NuxtImg
            src="/images/logo.png"
            alt="Panificadora Veneza"
            width="180"
            height="100"
            class="h-14 lg:h-18 w-auto transition-all duration-300"
            :class="isScrolled ? 'brightness-100' : 'brightness-0 invert'"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 rounded-sm"
            :class="[
              isScrolled
                ? 'text-dark-brown hover:text-caramel'
                : 'text-white/90 hover:text-caramel'
            ]"
            active-class="!text-caramel font-semibold"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Social icons desktop -->
          <div class="flex items-center gap-3 ml-4 pl-4 border-l" :class="isScrolled ? 'border-dark-brown/20' : 'border-white/30'">
            <SocialIcons :light="!isScrolled" size="sm" />
          </div>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="lg:hidden p-2 rounded-md transition-colors"
          :class="isScrolled ? 'text-dark-brown' : 'text-white'"
          aria-label="Abrir menu"
          @click="isMobileMenuOpen = true"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
