<script setup lang="ts">
useSeoMeta({
  title: 'Trabalhe Conosco | Panificadora Veneza',
  ogTitle: 'Trabalhe Conosco | Panificadora Veneza',
  description: 'Faça parte da equipe da Panificadora Veneza. Envie sua candidatura e venha trabalhar conosco.',
  ogDescription: 'Trabalhe conosco — Panificadora Veneza, Jacareí SP.',
  ogImage: '/images/og_image.jpg',
})
</script>

<template>
  <div>
    <!-- Hero banner -->
    <ParallaxBackground image="/images/bg_contato.jpg" overlay-color="bg-dark-brown/60">
      <div class="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Trabalhe Conosco
          </h1>
          <div class="w-20 h-0.5 bg-caramel mx-auto" />
        </div>
      </div>
    </ParallaxBackground>

    <!-- Application form -->
    <section class="py-20 lg:py-28 bg-cream relative grain-texture">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <div class="text-center mb-12">
            <p class="text-warm-gray text-lg leading-relaxed">
              Quer fazer parte da nossa equipe? Preencha o formulário abaixo com seus dados e entraremos em contato.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <JobApplicationForm />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  </div>
</template>
