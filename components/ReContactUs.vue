<script setup>
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('lg');
</script>
<template>
  <ReSectionContainer image="url(images/background_5.png)">
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
              <ReInputText label="Nombre *" />
              <ReInputText label="Apellido *" />
              <ReInputText label="Dirección de E-mail *" />
              <ReInputText label="Número de Teléfono" />
              <ReTextarea label="Deja tu mensaje *" />
              <ReButton label="Enviar" />
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
