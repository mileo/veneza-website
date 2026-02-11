import type { CompanyInfo, NavItem } from '~/types'

export const company: CompanyInfo = {
  name: 'Panificadora Veneza',
  tradeName: 'Panifício Veneza',
  description: 'Mais de 35 anos de tradição em panificação com receitas italianas e fermentação natural.',
  address: {
    street: 'Estrada do Jardim, 1600',
    city: 'Jacareí',
    state: 'SP',
    zip: '12326-830',
    country: 'BR',
  },
  phone: '(12) 3951-3195',
  whatsapp: '5512997437379',
  whatsappFormatted: '(12) 99743-7379',
  email: 'faleconosco@veneza.ind.br',
  socialMedia: {
    facebook: 'https://www.facebook.com/panaboraveneza',
    instagram: 'https://www.instagram.com/panaboraveneza',
  },
}

export const navigation: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Institucional', to: '/institucional' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Contato', to: '/contato' },
  { label: 'Trabalhe Conosco', to: '/trabalhe-conosco' },
]

export const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8!2d-45.97!3d-23.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE2JzQ4LjAiUyA0NcKwNTgnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1'
