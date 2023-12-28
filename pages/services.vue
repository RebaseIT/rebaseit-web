<script setup lang="ts">
const title = 'Nuestros servicios.';
const subtitle = '<b>Rebase IT</b> cuenta con un amplio repertorio de especialidades, dando así la atención más completa y la solución indicada para tus necesidades.';
const image = {
  src: '/images/gears.png',
  alt: 'gears-image',
  maxWidth: '370px'
};
const sectionTop = { title, subtitle, image };
</script>

<template>
  <ReSectionImage
    class="pt-8"
    v-bind="sectionTop"
  />
  <ReSectionContainer image="url(/images/background_4.jpg)">
    <ReCarouselServices />
  </ReSectionContainer>
  <ReContactUs />
</template>
