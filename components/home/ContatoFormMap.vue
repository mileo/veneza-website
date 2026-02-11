<script setup lang="ts">
</script>

<template>
  <ParallaxBackground image="/images/bg_contato.jpg" overlay-color="bg-dark-brown/85">
    <section class="py-20 lg:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading title="Fale com a gente!" light />
        </AnimateOnScroll>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <!-- Contact Form -->
          <AnimateOnScroll animation="slide-left">
            <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <ContactForm />
            </div>
          </AnimateOnScroll>

          <!-- Map -->
          <AnimateOnScroll animation="slide-right">
            <GoogleMap height="100%" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  </ParallaxBackground>
</template>
