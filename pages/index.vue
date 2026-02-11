<script setup lang="ts">
useSeoMeta({
  title: 'Início | Panificadora Veneza',
  ogTitle: 'Início | Panificadora Veneza',
  description: 'Panificadora Veneza — Mais de 35 anos de tradição em panificação com receitas italianas e fermentação natural. Pães, panettones, colombas pascais e ovos de chocolate.',
  ogDescription: 'Mais de 35 anos de tradição em panificação com receitas italianas e fermentação natural.',
  ogImage: '/images/og_image.jpg',
  ogUrl: 'https://www.veneza.ind.br',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Panificadora Veneza',
        'url': 'https://www.veneza.ind.br',
        'image': 'https://www.veneza.ind.br/images/og_image.jpg',
        'telephone': '+5512997437379',
        'email': 'faleconosco@veneza.ind.br',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Estrada do Jardim, 1600',
          'addressLocality': 'Jacareí',
          'addressRegion': 'SP',
          'postalCode': '12326-830',
          'addressCountry': 'BR',
        },
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
