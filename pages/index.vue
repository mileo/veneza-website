<script setup lang="ts">
useHead({ titleTemplate: '%s' })

useSeoMeta({
  title: 'Panificadora Veneza | Pães Artesanais com Fermentação Natural em Jacareí',
  ogTitle: 'Panificadora Veneza | Pães Artesanais com Fermentação Natural em Jacareí',
  description: 'Pães, panettones e colombas com fermentação natural de 24 horas e receitas italianas. Panificadora Veneza — tradição desde 1989 em Jacareí, SP.',
  ogDescription: 'Pães, panettones e colombas com fermentação natural de 24 horas e receitas italianas. Tradição desde 1989.',
  ogImage: '/images/og_image.jpg',
  ogUrl: 'https://www.veneza.ind.br',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Bakery',
        'name': 'Panificadora Veneza',
        'alternateName': 'Panifício Veneza',
        'url': 'https://www.veneza.ind.br',
        'logo': 'https://www.veneza.ind.br/images/logo.png',
        'image': 'https://www.veneza.ind.br/images/og_image.jpg',
        'telephone': '+551239513195',
        'email': 'contato@veneza.ind.br',
        'foundingDate': '1989',
        'priceRange': '$$',
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
        'areaServed': {
          '@type': 'GeoCircle',
          'geoMidpoint': {
            '@type': 'GeoCoordinates',
            'latitude': -23.31393,
            'longitude': -45.91189,
          },
          'geoRadius': '100000',
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '07:00',
            'closes': '17:00',
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSlider />
    <FermentacaoSection />
    <ProdutosPreview />
    <ContatoSection />
    <ContatoFormMap />
  </div>
</template>
