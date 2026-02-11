<script setup lang="ts">
const { form, isSubmitting, isSuccess, errorMessage, submit } = useContactForm()

function handleSubmit() {
  submit()
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <FormInput
      v-model="form.nome"
      label="Nome"
      required
      placeholder="Seu nome"
    />
    <FormInput
      v-model="form.email"
      label="Email"
      type="email"
      required
      placeholder="seu@email.com"
    />
    <FormInput
      v-model="form.assunto"
      label="Assunto"
      placeholder="Assunto da mensagem"
    />
    <FormTextarea
      v-model="form.mensagem"
      label="Mensagem"
      placeholder="Escreva sua mensagem..."
    />
    <FormButton :loading="isSubmitting">
      Enviar
    </FormButton>

    <Transition name="fade">
      <p v-if="isSuccess" class="text-success font-medium mt-4">
        Sua mensagem foi enviada com sucesso!
      </p>
    </Transition>
    <Transition name="fade">
      <p v-if="errorMessage" class="text-burgundy font-medium mt-4">
        {{ errorMessage }}
      </p>
    </Transition>
  </form>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
