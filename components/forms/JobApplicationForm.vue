<script setup lang="ts">
const { form, isSubmitting, isSuccess, errorMessage, submit } = useJobForm()

function handleSubmit() {
  submit()
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <FormInput
        v-model="form.nome"
        label="Nome"
        placeholder="Nome"
      />
      <FormInput
        v-model="form.sobrenome"
        label="Sobrenome"
        placeholder="Sobrenome"
      />
    </div>
    <FormInput
      v-model="form.email"
      label="Email"
      type="email"
      required
      placeholder="seu@email.com"
    />
    <FormInput
      v-model="form.telefone"
      label="Telefone"
      type="tel"
      placeholder="(00) 00000-0000"
    />
    <FormDatePicker
      v-model="form.dataInicio"
      label="Quando você pode começar?"
      required
    />
    <FormInput
      v-model="form.linkCurriculo"
      label="Link para o seu currículo"
      type="url"
      placeholder="https://"
    />

    <FormButton :loading="isSubmitting">
      Enviar Candidatura
    </FormButton>

    <Transition name="fade">
      <p v-if="isSuccess" class="text-success font-medium mt-4">
        Sua candidatura foi enviada com sucesso!
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
