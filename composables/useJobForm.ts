import type { JobFormData } from '~/types'

export function useJobForm() {
  const form = reactive<JobFormData>({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    dataInicio: '',
    linkCurriculo: '',
  })

  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref('')

  async function submit() {
    isSubmitting.value = true
    errorMessage.value = ''
    isSuccess.value = false

    try {
      await $fetch('/api/job-application', {
        method: 'POST',
        body: form,
      })
      isSuccess.value = true
      form.nome = ''
      form.sobrenome = ''
      form.email = ''
      form.telefone = ''
      form.dataInicio = ''
      form.linkCurriculo = ''
    } catch {
      errorMessage.value = 'Erro ao enviar candidatura. Tente novamente.'
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
