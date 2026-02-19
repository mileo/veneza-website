<script setup lang="ts">
useSeoMeta({
  title: 'Trabalhe Conosco — Vagas em Jacareí',
  ogTitle: 'Trabalhe Conosco | Panificadora Veneza — Vagas em Jacareí',
  description: 'Faça parte da equipe da Panificadora Veneza. Envie sua candidatura e venha trabalhar conosco.',
  ogDescription: 'Trabalhe conosco — Panificadora Veneza, Jacareí SP.',
  ogImage: '/images/og_image.jpg',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.veneza.ind.br/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Trabalhe Conosco', 'item': 'https://www.veneza.ind.br/trabalhe-conosco' },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- Hero banner -->
    <ParallaxBackground image="/images/bg_contato.jpg" overlay-color="bg-dark-brown/60">
      <div class="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Faça Parte da Nossa Equipe
          </h1>
          <p class="text-lg md:text-xl text-white/80 font-light tracking-wide">
            Mais de 35 anos construindo tradição — e sempre buscando novos talentos
          </p>
          <div class="w-20 h-0.5 bg-caramel mx-auto mt-4" />
        </div>
      </div>
    </ParallaxBackground>

    <!-- Info section -->
    <section class="py-20 lg:py-28 bg-cream relative grain-texture">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <div class="text-center">
            <p class="text-warm-gray text-lg leading-relaxed mb-8">
              Na Veneza, acreditamos que grandes produtos nascem de grandes pessoas. Se você tem paixão pelo que faz e quer crescer em uma empresa com mais de três décadas de tradição, queremos conhecer você.
            </p>
            <p class="text-warm-gray text-lg leading-relaxed">
              Envie seu currículo para <a href="mailto:contato@veneza.ind.br" class="text-burgundy font-semibold hover:text-caramel transition-colors">contato@veneza.ind.br</a> e entraremos em contato.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  </div>
</template>
