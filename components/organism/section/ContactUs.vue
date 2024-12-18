<script setup>
import { useViewport } from '~/composables/useViewport';
import { useToast } from 'primevue/usetoast';
import { isRequired, isValidEmail, isValidPhone, minLength } from '~/constants/fieldErrors';
import emailjs from 'emailjs-com';

const { t } = useI18n()
const { isSmaller: isMobile } = useViewport('lg');
const router = useRouter();
const toast = useToast();

const fields = ref([
  {
    model: 'name',
    id: 'name',
    type: 'text',
    label: 'contactUs.name',
    validators: [
      (v) => isRequired(v, t('rules.required'))
    ]
  },
  {
    model: 'lastName',
    id: 'lastName',
    type: 'text',
    label: 'contactUs.lastName',
    validators: [
      (v) => isRequired(v, t('rules.required'))
    ]
  },
  {
    model: 'email',
    id: 'email',
    type: 'text',
    label: 'contactUs.email',
    validators: [
      (v) => isRequired(v, t('rules.required')),
      (v) => isValidEmail(v, t('rules.email')),
    ]
  },
  {
    model: 'phone',
    id: 'phone',
    type: 'text',
    label: 'contactUs.phone',
    validators: [
      (v) => isValidPhone(v, t('rules.phone'))
    ]
  },
  {
    model: 'message',
    id: 'message',
    type: 'textarea',
    label: 'contactUs.message',
    validators: [
      (v) => isRequired(v, t('rules.required')),
      (v) => minLength(v, 10, t('rules.minLength', {min: 10}))
    ]
  }
]);
const sendConfirmationEmail = (user) => {
  emailjs.send(
    'service_65b5hhl',        // ID del servicio (EmailJS)
    'template_wg7g6yi',       // ID de la plantilla de correo
    {
      user_email: user.email,  
      subject: t('email.subject'),
      message: `${t('email.greeting')} ${user.name}! \n \n ${t('email.messageReceived')} \n \n "${user.message}" \n \n ${t('email.finalMessage')}`,
    },
    'L7xFdBwoFqY2rWaY0'            // ID de usuario
  )
    .then((response) => {
      console.log('Correo enviado', response);
    })
    .catch((error) => { 
      console.error('Error al enviar el correo', error);
    });
};

const sendEmail = async (formData) => {
  await $fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {...formData, access_key: import.meta.env.VITE_WEB3FORMS_KEY},
  })
    .then(() => {
      sendConfirmationEmail(formData);
      router.push('/thank-you');
    }).catch((err) => {
      console.error(err)
      toast.add({
        severity: 'error', 
        detail: err.message,
        life: 3000,
      });
    });
}
</script>
<template>
  <ReSectionContainer
    background="/images/background/background-2.png"
    id="contact-us-section"
  >
    <div class="py-6 px-4">
      <div class="w-full">
        <ReTitleGradient> {{ t('homePage.contactUs') }} </ReTitleGradient>
        <div class="py-4">
          <ReParagraphSpan
            big-text
            color="black"
          >
            {{ t('contactUs.getInTouchShortly') }}
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
                  <b>{{ t('contactUs.orMessageTo') }}</b>
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
