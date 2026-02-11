<script setup lang="ts">
import { company } from '~/data/company'

useSeoMeta({
  title: 'Contato | Panificadora Veneza',
  ogTitle: 'Contato | Panificadora Veneza',
  description: `Entre em contato com a Panificadora Veneza. ${company.address.street}, ${company.address.city}, ${company.address.state}. Tel: ${company.phone}`,
  ogDescription: 'Fale conosco — Panificadora Veneza, Jacareí SP.',
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

    <!-- Form + Map -->
    <section class="py-20 lg:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading title="Fale com a gente!" subtitle="Respondemos em até 24 horas úteis." />
        </AnimateOnScroll>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimateOnScroll animation="slide-left">
            <div class="bg-cream/50 rounded-2xl p-8 shadow-lg">
              <ContactForm />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right">
            <GoogleMap height="100%" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  </div>
</template>
