import type { ContactFormData } from '~/types'

export function useContactForm() {
  const form = reactive<ContactFormData>({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })

  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref('')

  async function submit() {
    isSubmitting.value = true
    errorMessage.value = ''
    isSuccess.value = false

    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: form,
      })
      isSuccess.value = true
      form.nome = ''
      form.email = ''
      form.assunto = ''
      form.mensagem = ''
    } catch {
      errorMessage.value = 'Erro ao enviar mensagem. Tente novamente.'
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    isSubmitting,
    isSuccess,
    errorMessage,
    submit,
  }
}
