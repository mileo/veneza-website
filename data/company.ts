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
  whatsapp: '551239513195',
  whatsappFormatted: '(12) 3951-3195',
  email: 'contato@veneza.ind.br',
  socialMedia: {},
}

export const navigation: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Institucional', to: '/institucional' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Trabalhe Conosco', to: '/trabalhe-conosco' },
  { label: 'Contato', to: '/contato' },
]

export const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14656.060402574625!2d-45.920615275329574!3d-23.31521089279717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdca72c617198b%3A0x70ee2b24ab0ec195!2sEstr.%20Mun.%20do%20Jardim%2C%201600%20-%20Jardim%20Santo%20Antonio%20da%20Boa%20Vista%2C%20Jacare%C3%AD%20-%20SP%2C%2012315-540%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1770809551230!5m2!1spt-BR!2sus'
