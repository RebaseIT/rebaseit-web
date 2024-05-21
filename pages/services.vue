<script setup lang="ts">
const title = 'Nuestros servicios';
const subtitle = '<b>Rebase IT</b> cuenta con un amplio repertorio de especialidades, dando así la atención más completa y la solución indicada para tus necesidades.';
const image = {
  src: '/images/gears.png',
  alt: 'gears-image',
  maxWidth: '370px'
};
</script>

<template>
  <Head>
    <Title>Servicios</Title>
  </Head>
  <SectionImage
    class="pt-8"
    :title="title"
    :subtitle="subtitle"
    :image="image"
  />
  <ReSectionContainer background="/images/background-3.png">
    <ServicesCarousel />
  </ReSectionContainer>
  <ContactUs />
</template>
