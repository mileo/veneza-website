<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <TheMobileMenu />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
    <WhatsAppButton />
    <BackToTop />
  </div>
</template>
