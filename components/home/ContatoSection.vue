<script setup lang="ts">
import { company } from '~/data/company'
</script>

<template>
  <section class="py-20 lg:py-28 bg-cream relative grain-texture">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimateOnScroll>
        <SectionHeading title="Contato" />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <div class="text-center">
          <h3 class="text-2xl font-serif text-burgundy font-semibold mb-6">
            {{ company.tradeName }}
          </h3>

          <div class="space-y-3 text-warm-gray">
            <p>{{ company.address.street }}</p>
            <p>{{ company.address.city }}, {{ company.address.state }} {{ company.address.zip }}</p>
            <p>
              <a href="tel:+551239513195" class="hover:text-caramel transition-colors">
                Tel: {{ company.phone }}
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
    </div>
  </section>
</template>
