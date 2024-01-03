<script setup>
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('lg');
const router = useRouter();

const invalidField = ref(false);

const form = ref({
  name: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});

const isValid = computed(() => {
  return form.value.name && form.value.lastName && form.value.email && form.value.message && !invalidField.value
});

const emailTemplate = computed(() => {
  return `
    <div>
      <h1>¡Hola!</h1>
      <p>Recibiste un mensaje de ${form.value.name} ${form.value.lastName}</p>
      <p>Nombre: ${form.value.name}</p>
      <p>Apellido: ${form.value.lastName}</p>
      <p>Correo: ${form.value.email}</p>
      <p>Teléfono: ${form.value.phone}</p>
      <p>Mensaje: ${form.value.message}</p>
    </div>
  `;
});
const sendEmail = async () => {
  const msg = {
    personalizations: [
      {
        to: [
          {
            email: "sales@rebaseit.tech",
            name: "Rebase IT"
          }
        ]
      }
    ],
    from: {
      email: "devops@rebaseit.tech",
      name: "Rebase IT"
    },
    subject: "Solicitud de contacto desde web",
    content: [
      {
        type: "text/html",
        value: emailTemplate.value
      }
    ]
  }
  await useFetch("/api/sendgrid", {
    method: "POST",
    body: msg
  }).then(() => {
    router.push('/thank-you');
  }).catch((err) => {
    console.log(err);
  });
}
</script>
<template>
  <ReSectionContainer background="url(/images/background/background-2.png)">
    <div
      class="row flex py-8 px-6 justify-space-between gap-4"
      :class="{ 'flex-column align-items-center': isMobile }"
    >
      <div class="w-full">
        <ReTitleGradient> Contactanos </ReTitleGradient>
        <div class="py-4">
          <ReParagraphSpan
            big-text
            color="black"
          >
            Nos comunicaremos en breve.
          </ReParagraphSpan>
        </div>
        <div class="carrousel-container align-self-center">
          <ReCarousel />
        </div>
      </div>
      <div class="contact-card">
        <Card>
          <template #content>
            <form class="flex flex-column gap-2">
              <ReInputText
                v-model="form.name"
                label="Nombre *"
                @invalid="invalidField = $event"
              />
              <ReInputText
                v-model="form.lastName"
                label="Apellido *"
                @invalid="invalidField = $event"
              />
              <ReInputText
                v-model="form.email"
                label="Dirección de E-mail *"
                field-type="email"
                @invalid="invalidField = $event"
              />
              <ReInputText
                v-model="form.phone"
                label="Número de Teléfono"
                field-type="phone"
                :is-required="false"
                @invalid="invalidField = $event"
              />
              <ReTextarea
                v-model="form.message"
                label="Deja tu mensaje *"
                @invalid="invalidField = $event"
              />
              <ReButton
                @click="sendEmail"
                :class="{ 'p-disabled': !isValid }"
                label="Enviar"
              />
            </form>
            <div class="pt-3">
              <ReParagraphSpan color="var(--primary-color)">
                <b>O envianos un mensaje a: </b>
              </ReParagraphSpan>
              <ReParagraphSpan color="black">
                <b><a href="mailto:sales@rebaseit.tech">sales@rebaseit.tech</a></b>
              </ReParagraphSpan>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </ReSectionContainer>
</template>

<style lang="scss" scoped>
.contact-card {
  width: 100%;
  max-width: 430px;
  &:deep(.p-card){
  border: 2px solid var(--primary-color);
  background-color: var(--light-blue);
    a {
      text-decoration: none;
      color: black;
    }
  }
  &:deep(.p-card-body){
    padding: 32px;
  }
}
.carrousel-container {
  width: 100%;
  max-width: 625px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    margin: 0;
  }
}
</style>
