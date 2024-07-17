<script setup lang="ts">
const title = 'Nuestros servicios';
const subtitle = 'Contamos con un amplio repertorio de especialidades, garantizando una atención integral y soluciones precisas para todas tus necesidades. Tenemos experiencia en diversas áreas del mundo de la tecnología: diseño y desarrollo web y mobile, infraestructura, ciberseguridad, inteligencia artificial y gestión de proyectos.\n\nPor otro lado, entre nuestros principales servicios de consultoría se encuentra staff augmentation donde conectamos a las organizaciones con grandes talentos.';
const image = {
  src: '/images/gears.png',
  alt: 'gears-image',
  maxWidth: '370px'
};
</script>

<template>
  <Head>
    <Title>Servicios | Rebase IT</Title>
  </Head>
  <SectionImage
    class="pt-8"
    :title="title"
    :subtitle="subtitle"
    :image="image"
  />
  <ReSectionContainer background="/images/background/background-3.png">
    <ServicesCarousel />
  </ReSectionContainer>
  <ContactUs />
</template>
