export interface CompanyInfo {
  name: string
  tradeName: string
  description: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  phone: string
  whatsapp: string
  whatsappFormatted: string
  email: string
  socialMedia: {
    facebook?: string
    instagram?: string
  }
}

export interface Product {
  id: string
  name: string
  description: string
  image: string
  alt: string
}

export interface Slide {
  id: number
  image: string
  alt: string
  title?: string
  subtitle?: string
}

export interface NavItem {
  label: string
  to: string
}

export interface ContactFormData {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export interface JobFormData {
  nome: string
  sobrenome: string
  email: string
  telefone: string
  dataInicio: string
  linkCurriculo: string
}
