<script setup>
import { useViewport } from '~/composables/useViewport';
import { useToast } from 'primevue/usetoast';
import ReInputText from "~/components/atoms/input/ReInputText.vue";
import ReTextarea from "~/components/atoms/input/ReTextarea.vue";

const { isSmaller: isMobile } = useViewport('lg');
const router = useRouter();
const toast = useToast();

const regex = {
  text: /.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /^\d{10,}$/,
  textarea: /^.{10,}$/
}

const invalidField = ref(false);
const form = ref({
  name: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});

const fields = [
  {
    component: ReInputText,
    model: 'name',
    label: 'Nombre *',
    isRequired: true,
    validators: [
      (value) => !regex.text.test(value)
    ]
  },
  {
    component: ReInputText,
    model: 'lastName',
    label: 'Apellido *',
    isRequired: true,
    validators: [
      (value) => !regex.text.test(value)
    ]
  },
  {
    component: ReInputText,
    model: 'email',
    label: 'Dirección de E-mail *',
    isRequired: true,
    fieldType: 'email',
    validators: [
      (value) => !regex.email.test(value)
    ]
  },
  {
    component: ReInputText,
    model: 'phone',
    label: 'Número de Teléfono',
    isRequired: false,
    fieldType: 'phone',
    validators: [
      (value) => !regex.phone.test(value)
    ]
  },
  {
    component: ReTextarea,
    model: 'message',
    label: 'Deja tu mensaje *',
    isRequired: true,
    validators: [
      (value) => !regex.textarea.test(value)
    ]
  }
]

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
              <template
                v-for="(item, index) in fields"
                :key="index"
              >
                <component
                  v-model="form[item.model]"
                  :is="item.component"
                  :label="item.label"
                  :is-required="item.isRequired"
                  :field-type="item.fieldType"
                  :validators="item.validators"
                  @invalid="invalidField = $event"
                />
              </template>
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
