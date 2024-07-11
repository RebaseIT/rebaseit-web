<script setup lang="ts">
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('lg');
const router = useRouter()
const goBack = () => {
  router.back()
}
const images = [
  {
    src: '/images/sherlock/sherlock-1.png'
  },
  {
    src: '/images/sherlock/sherlock-2.png'
  },
  {
    src: '/images/sherlock/sherlock-3.png'
  },
]
</script>
<template>
  <Head>
    <Title>Sherlock</Title>
  </Head>
  <ReSectionContainer
    background="/images/background/background-1.png"
    class="pt-8"
  >
    <div
      class="flex gap-4 py-8 px-4 justify-space-between align-items-center"
      :class="{ 'flex-column justify-content-center': isMobile }"
    >
      <div class="flex flex-column gap-4 align-self-start">
        <ReTitleSpan
          @click="goBack"
          font-weight="600"
          class="primary cursor-pointer"
        >
          &lt; Volver
        </ReTitleSpan>
        <ReTitleGradient
          text-transform="uppercase"
          font-weight="600"
        >
          Presentamos Sherlock, la mejor respuesta para tu análisis de ciberseguridad
        </ReTitleGradient>
      </div>
      <ReImage
        src="/images/sherlock.png"
        alt="sherlock-image"
        max-width="480px"
      />
    </div>
  </ReSectionContainer>
  <ReSectionContainer
    bg-color="white"
  >
    <div class="flex py-8 px-4">
      <ReTitleSpan color="black">
        ¿Alguna vez te hackearon o intentaron hackear a alguien de tu organización? En ese caso, ¿qué tan rápido podrían responder? Así como cuando tenemos un auto, contratamos un seguro, en el mundo de la ciberseguridad podés optar por Sherlock: una solución que centraliza y automatiza las tareas de respuesta a incidentes realizadas por los analistas de ciberseguridad. Para más información, escribinos a
        <a href="mailto:sales@rebaseit.tech">
          sales@rebaseit.tech
        </a>
      </ReTitleSpan>
    </div>
  </ReSectionContainer>
  <ReSectionContainer class="bg-light-blue">
    <div
      class="flex py-8 px-4 gap-4 flex-wrap justify-space-between"
      :class="{ 'flex-column align-items-center': isMobile }"
    >
      <ReImage
        v-for="(image, index) in images"
        :key="`image-${index}`"
        :src="image.src"
        :alt="`sherlock-image-${index}`"
        max-width="580px"
      />
    </div>
  </ReSectionContainer>
  <ContactUs />
</template>

<style lang="scss" scoped>
a {
  color: black
}
</style>
