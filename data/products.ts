import type { Product } from '~/types'

export const products: Product[] = [
  {
    id: 'paes',
    name: 'Pães',
    description: 'Disponibilizamos nossos pães nas mais diversas versões para que você possa servir sua família, amigos ou clientes em todas as ocasiões. São pacotes repletos de sabor e carinho para tornar seus momentos práticos, marcantes e deliciosos!',
    image: '/images/produto_paes.jpg',
    alt: 'Pães artesanais da Panificadora Veneza',
  },
  {
    id: 'panettones',
    name: 'Bolos, Colombas Pascais e Panettones',
    description: 'As receitas dos nossos bolos, colombas pascais e panettones carregam muito recheio, massa fofinha e sabores marcantes! Além de deixarem as datas festivas mais saborosas, enriquecem sua mesa com um aroma único de frutas e chocolate!',
    image: '/images/produto_panettone.jpg',
    alt: 'Panettones e colombas pascais da Panificadora Veneza',
  },
  {
    id: 'ovos-chocolate',
    name: 'Ovos de Chocolate',
    description: 'Os ovos de chocolate são destaque em sabor e cremosidade. São os queridinhos na hora de presentear a família, clientes e funcionários. Suas embalagens, além de coloridas, encantam!',
    image: '/images/produto_ovos_chocolate.jpg',
    alt: 'Ovos de chocolate da Panificadora Veneza',
  },
]
