<script setup lang="ts">
import { company, navigation } from '~/data/company'
</script>

<template>
  <footer class="bg-burgundy text-white relative grain-texture">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Column 1: Logo + About -->
        <div>
          <NuxtImg
            src="/images/logo.png"
            alt="Panificadora Veneza"
            class="h-20 w-auto brightness-0 invert mb-6"
            width="144"
            height="80"
          />
          <p class="text-white/70 text-sm leading-relaxed">
            {{ company.description }}
          </p>
          <div class="mt-6">
            <SocialIcons light />
          </div>
        </div>

        <!-- Column 2: Navigation -->
        <div>
          <h3 class="text-lg font-serif font-semibold mb-6 text-caramel">Navegação</h3>
          <ul class="space-y-3">
            <li v-for="item in navigation" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="text-white/70 hover:text-caramel transition-colors text-sm"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact -->
        <div>
          <h3 class="text-lg font-serif font-semibold mb-6 text-caramel">Contato</h3>
          <ul class="space-y-4 text-sm text-white/70">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-caramel flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ company.address.street }}<br>{{ company.address.city }}, {{ company.address.state }} {{ company.address.zip }}</span>
            </li>
            <li>
              <a href="tel:+551239513195" class="flex items-center gap-3 hover:text-caramel transition-colors">
                <svg class="w-5 h-5 text-caramel flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ company.phone }}
              </a>
            </li>
            <li>
              <a :href="`https://wa.me/${company.whatsapp}`" target="_blank" rel="noopener" class="flex items-center gap-3 hover:text-caramel transition-colors">
                <svg class="w-5 h-5 text-caramel flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.318A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.365 0-4.557-.82-6.285-2.188l-.44-.352-3.202.902.84-3.084-.377-.464A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                {{ company.whatsappFormatted }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${company.email}`" class="flex items-center gap-3 hover:text-caramel transition-colors">
                <svg class="w-5 h-5 text-caramel flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ company.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright bar -->
    <div class="bg-burgundy-dark py-4 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/50 text-xs">
        &copy; {{ new Date().getFullYear() }} {{ company.tradeName }}. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>
