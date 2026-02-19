<script setup lang="ts">
import { company } from '~/data/company'

useSeoMeta({
  title: 'Contato | Jacareí SP',
  ogTitle: 'Contato — Panificadora Veneza | Jacareí SP',
  description: `Entre em contato com a Panificadora Veneza. ${company.address.street}, ${company.address.city}, ${company.address.state}. Tel: ${company.phone}`,
  ogDescription: 'Fale conosco — Panificadora Veneza, Jacareí SP.',
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
          { '@type': 'ListItem', 'position': 2, 'name': 'Contato', 'item': 'https://www.veneza.ind.br/contato' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Bakery',
        'name': 'Panificadora Veneza',
        'url': 'https://www.veneza.ind.br',
        'telephone': '+551239513195',
        'email': 'contato@veneza.ind.br',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Estrada do Jardim, 1600',
          'addressLocality': 'Jacareí',
          'addressRegion': 'SP',
          'postalCode': '12326-830',
          'addressCountry': 'BR',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -23.31393,
          'longitude': -45.91189,
        },
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
            Fale com a Veneza
          </h1>
          <p class="text-lg md:text-xl text-white/80 font-light tracking-wide">
            Estamos prontos para atender você
          </p>
          <div class="w-20 h-0.5 bg-caramel mx-auto mt-4" />
        </div>
      </div>
    </ParallaxBackground>

    <!-- Contact info -->
    <section class="py-20 lg:py-28 bg-cream relative grain-texture">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <div class="text-center mb-16">
            <h2 class="text-3xl font-serif text-burgundy font-bold mb-6">
              {{ company.tradeName }}
            </h2>
            <div class="space-y-3 text-warm-gray text-lg">
              <p>{{ company.address.street }}</p>
              <p>{{ company.address.city }}, {{ company.address.state }} {{ company.address.zip }}</p>
              <p>
                <a href="tel:+551239513195" class="hover:text-caramel transition-colors">
                  Tel: {{ company.phone }}
                </a>
              </p>
              <p>
                <a :href="`https://wa.me/${company.whatsapp}`" target="_blank" rel="noopener" class="hover:text-caramel transition-colors">
                  WhatsApp: {{ company.whatsappFormatted }}
                </a>
              </p>
              <p>
                <a :href="`mailto:${company.email}`" class="hover:text-caramel transition-colors">
                  {{ company.email }}
                </a>
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <DecorativeDivider />

        <AnimateOnScroll>
          <p class="text-center text-warm-gray text-lg leading-relaxed mt-12 max-w-2xl mx-auto">
            Atendemos padarias, restaurantes, supermercados e eventos em todo o Vale do Paraíba.
            Solicite nosso catálogo completo ou peça uma amostra dos nossos produtos.
          </p>
        </AnimateOnScroll>
      </div>
    </section>

    <!-- Map -->
    <section class="py-20 lg:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading title="Como chegar" subtitle="Estrada do Jardim, 1600 — Jacareí, SP" />
        </AnimateOnScroll>

        <div class="mt-12">
          <AnimateOnScroll>
            <GoogleMap height="400px" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  </div>
</template>
