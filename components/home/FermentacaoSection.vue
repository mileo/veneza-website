<script setup lang="ts">
</script>

<template>
  <ParallaxBackground image="/images/bg_fermentacao.jpg" overlay-color="bg-cream/90">
    <section class="py-20 lg:py-32">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading title="O Que Torna Nosso Pão Diferente?" subtitle="Fermentação natural de 24 horas — sem atalhos, sem aditivos" />
        </AnimateOnScroll>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <AnimateOnScroll animation="slide-left">
            <div class="space-y-6 text-warm-gray leading-relaxed">
              <p>
                Enquanto a maioria dos pães industriais fermenta em minutos, o nosso leva <strong class="text-burgundy">24 horas</strong>. Esse tempo permite que elementos naturais incorporem <strong class="text-burgundy">maciez, aroma e sabor</strong> à massa — sem atalhos, sem aditivos.
              </p>
              <p>
                O resultado? Um pão com <strong class="text-burgundy">mais sabor</strong>, <strong class="text-burgundy">mais aroma</strong> e <strong class="text-burgundy">mais nutrientes</strong> do que qualquer pão de fermentação rápida.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right">
            <div class="space-y-6 text-warm-gray leading-relaxed">
              <h3 class="text-xl font-serif font-semibold text-burgundy">
                Bom para o paladar. Melhor para o corpo.
              </h3>
              <p>
                O pão de fermentação natural tem <strong class="text-burgundy">menor índice glicêmico</strong> — isso significa mais saciedade por mais tempo e menos picos de açúcar no sangue. Ideal para quem quer <strong class="text-burgundy">comer bem sem abrir mão do sabor</strong>.
              </p>
              <p class="text-lg font-serif text-burgundy italic border-l-4 border-caramel pl-6">
                Hoje no Brasil, são poucas as empresas que fabricam em escala industrial com esse padrão de fermentação.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  </ParallaxBackground>
</template>
