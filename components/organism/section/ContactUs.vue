<script setup>
import { useViewport } from '~/composables/useViewport';
import { useToast } from 'primevue/usetoast';
import { isRequired, biggerThan, isValidEmail, isValidPhone } from '~/constants/fieldErrors';

const { isSmaller: isMobile } = useViewport('lg');
const router = useRouter();
const toast = useToast();

const fields = [
  {
    model: 'name',
    id: 'name',
    type: 'text',
    label: 'Nombre *',
    validators: [
      isRequired,
      biggerThan(3)
    ]
  },
  {
    model: 'lastName',
    id: 'lastName',
    type: 'text',
    label: 'Apellido *',
    validators: [
      isRequired,
      biggerThan(3)
    ]
  },
  {
    model: 'email',
    id: 'email',
    type: 'text',
    label: 'Dirección de E-mail *',
    validators: [
      isRequired,
      isValidEmail
    ]
  },
  {
    model: 'phone',
    id: 'phone',
    type: 'text',
    label: 'Número de Teléfono',
    validators: [
      isValidPhone
    ]
  },
  {
    model: 'message',
    id: 'message',
    type: 'textarea',
    label: 'Deja tu mensaje *',
    validators: [
      isRequired,
      biggerThan(10)
    ]
  }
];
const sendEmail = async (formData) => {
  const template = `
    <div>
      <h1>¡Hola!</h1>
      <p>Recibiste un mensaje de ${formData.name} ${formData.lastName}</p>
      <p>Nombre: ${formData.name}</p>
      <p>Apellido: ${formData.lastName}</p>
      <p>Correo: ${formData.email}</p>
      <p>Teléfono: ${formData.phone}</p>
      <p>Mensaje: ${formData.message}</p>
    </div>
  `;
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
        value: template
      }
    ]
  }
  await useFetch("/api/sendgrid", {
    method: "POST",
    body: msg
  }).then(() => {
    router.push('/thank-you');
  }).catch((err) => {
    toast.add({
      severity: 'error',
      detail: err.message,
      life: 3000,
    });
  });
}
</script>
<template>
  <ReSectionContainer background="/images/background/background-2.png">
    <div class="py-8 px-6"
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
      </div>
      <div
        class="flex flex-row gap-4 justify-space-between"
        :class="{ 'flex-column-reverse align-items-center': isMobile }"
      >
        <div
          class="carrousel-container"
          :class="{ 'align-self-center': isMobile }"
        >
          <ReviewsCarousel />
        </div>
        <div class="contact-card">
          <Card>
            <template #content>
              <DynamicForm
                  :fields="fields"
                  @form="sendEmail"
              />
              <div class="pt-3">
                <ReParagraphSpan class="primary">
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
    </div>
  </ReSectionContainer>
</template>

<style lang="scss" scoped>
.contact-card {
  width: 100%;
  max-width: 900px;
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
  @media (min-width: 1080px) {
    margin: 0;
  }
}
</style>
