import type { Product } from '~/types'

export const products: Product[] = [
  {
    id: 'paes',
    name: 'Pães',
    description: 'Pão de alho, pão artesanal, pão para hambúrguer — temos a opção certa para cada momento. Todos feitos com fermentação natural de 24 horas e ingredientes selecionados, para que cada mordida tenha o sabor que só a Veneza entrega.',
    image: '/images/produto_paes.jpg',
    alt: 'Pães artesanais da Panificadora Veneza',
  },
  {
    id: 'panettones',
    name: 'Bolos Pascais e Panettones',
    description: 'Massa fofinha, recheio generoso e o aroma inconfundível de frutas cristalizadas e chocolate. Nossos panettones, bolos pascais e bolos especiais seguem receitas italianas com fermentação natural — o segredo para aquele sabor que marca as festas da família.',
    image: '/images/produto_panettone.jpg',
    alt: 'Panettones e bolos pascais da Panificadora Veneza',
  },
  {
    id: 'ovos-chocolate',
    name: 'Ovos de Chocolate',
    description: 'Chocolate cremoso em embalagens que encantam. Nossos ovos de Páscoa são os preferidos para presentear família, clientes e colaboradores — porque sabor e apresentação fazem toda a diferença.',
    image: '/images/produto_ovos_chocolate.jpg',
    alt: 'Ovos de chocolate da Panificadora Veneza',
  },
]
