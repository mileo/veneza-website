<script setup lang="ts">
</script>

<template>
  <ParallaxBackground image="/images/bg_fermentacao.jpg" overlay-color="bg-cream/90">
    <section class="py-20 lg:py-32">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading title="Nossa Fermentação" subtitle="O segredo do sabor autêntico" />
        </AnimateOnScroll>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <AnimateOnScroll animation="slide-left">
            <div class="space-y-6 text-warm-gray leading-relaxed">
              <p>
                A <strong class="text-burgundy">fermentação</strong> é o momento mais importante para a produção dos nossos pães. Ela acontece com a ajuda de <strong class="text-burgundy">elementos naturais</strong> e sua função é incorporar e dar <strong class="text-burgundy">maciez e sabor</strong> à massa.
              </p>
              <p>
                Ela ocorre durante a mistura da farinha e a água onde o amido e o oxigênio, juntos, se transformam em açúcar. Leveduras passam a se alimentar desse ambiente formando bolhas que fazem o pão crescer, deixando a massa mais leve.
              </p>
              <p>
                Além dos aspectos nutricionais, o pão de fermentação natural se difere dos outros. Devido ao processo, tem uma <strong class="text-burgundy">maior acidez</strong> e é <strong class="text-burgundy">mais aromático</strong>, além de ficar <strong class="text-burgundy">mais saboroso</strong>.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right">
            <div class="space-y-6 text-warm-gray leading-relaxed">
              <p>
                O índice glicêmico é a capacidade de um alimento aumentar a quantidade de açúcar no sangue. Quando consumimos alimentos de índice muito alto, ele acaba resultando no armazenamento rápido de energia, causando um aumento de peso e saciedade por um menor período.
              </p>
              <p>
                Sendo assim, consumir o <strong class="text-burgundy">pão de levain</strong> é uma alternativa ideal para quem deseja <strong class="text-burgundy">manter o peso</strong> ou <strong class="text-burgundy">emagrecer</strong>, bem como garantir a <strong class="text-burgundy">saciedade por mais tempo</strong>, aumentando o intervalo entre as refeições.
              </p>
              <p class="text-lg font-serif text-burgundy italic border-l-4 border-caramel pl-6">
                Nosso processo de fermentação leva 24 horas para ser produzido — hoje no Brasil são poucas as empresas que fabricam em escala industrial dentro desse padrão de fermentação.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  </ParallaxBackground>
</template>
