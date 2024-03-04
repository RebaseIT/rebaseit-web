<script setup lang="ts">
const ourValues = [
  {
    title: 'Honestidad y Transparencia',
    description: 'Priorizamos la comunicación abierta y honesta en todas nuestras interacciones.',
    img: {
      src: '/images/values/value-1.png',
      srcAlt: '/images/values/value-alt-1.png',
      width: '64px',
      height: '115px'
    }
  },
  {
    title: 'Excelencia Técnica',
    description: 'Nos esforzamos por alcanzar la máxima calidad en nuestras soluciones tecnológicas.',
    img: {
      src: '/images/values/value-2.png',
      srcAlt: '/images/values/value-alt-2.png',
      width: '86px',
      height: '115px'
    }
  },
  {
    title: 'Compromiso',
    description: ' Cumplimos nuestros compromisos con responsabilidad y dedicación.',
    img: {
      src: '/images/values/value-3.png',
      srcAlt: '/images/values/value-alt-3.png',
      width: '133px',
      height: '57px',
      class: 'space-layout-bottom'
    }
  },
  {
    title: 'Proactividad',
    description: 'No esperamos a que las cosas sucedan, las hacemos suceder.',
    img: {
      src: '/images/values/value-4.png',
      srcAlt: '/images/values/value-alt-4.png',
      width: '122px',
      height: '115px'
    }
  },
  {
    title: 'Innovación',
    description: 'Promovemos la creatividad y la originalidad para encontrar soluciones únicas y disruptivas.',
    img: {
      src: '/images/values/value-6.png',
      srcAlt: '/images/values/value-alt-6.png',
      width: '80px',
      height: '115px'
    }
  }
];
</script>

<template>
  <ReSectionContainer background="/images/background/background-2.png">
    <div
      class="flex flex-column pb-8 px-6"
    >
      <ReTitleGradient class="align-self-center">
        Valores que nos definen
      </ReTitleGradient>
      <div
        class="flex flex-row flex-wrap justify-content-center gap-2 mt-6"
      >
        <ReCard
          v-for="(value, index) in ourValues"
          :key="index"
          :value="value"
        />
      </div>
    </div>
  </ReSectionContainer>
</template>
