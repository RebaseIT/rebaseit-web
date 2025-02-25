<script setup>
import { useViewport } from '~/composables/useViewport';
import { useToast } from 'primevue/usetoast';
import { isRequired, isValidEmail, isValidPhone, minLength } from '~/constants/fieldErrors';
import { useRoute } from 'vue-router';

const { t } = useI18n()
const { isSmaller: isMobile } = useViewport('lg');
const router = useRouter();
const toast = useToast();
const route = useRoute();
const isHomePage = computed(() => route.path === '/');

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

const sendEmail = async (formData) => {
  await $fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {...formData, access_key: import.meta.env.VITE_WEB3FORMS_KEY},
  })
    .then(() => {
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
        class="flex flex-row gap-4"
        :class="{ 
          'justify-between': isHomePage,
          'justify-content-center': !isHomePage,
          'flex-column-reverse align-items-center': isMobile }"
      >
        <div 
          v-if="isHomePage" 
          class="carousel"
        >
          <ReviewsCarousel :is-home="true" />
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

.carousel{
  width: 60%;
}
@media only screen and (max-width: 1080px) {
  .carousel{
    width: 100%;
  }
}
</style>
