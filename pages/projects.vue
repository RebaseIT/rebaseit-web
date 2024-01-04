<script setup lang="ts">
const title = 'Nuestros Proyectos.';
const subtitle = 'Desde Rebase IT, acompañamos a nuestros clientes en todo el ciclo de vida del proyecto, brindándoles soluciones superadoras y ajustadas a sus necesidades particulares.';
const image = {
  src: '/images/folder.png',
  alt: 'folder-image',
  maxWidth: '350px'
};
</script>

<template>
  <SectionImage
    class="pt-8"
    :title="title"
    :subtitle="subtitle"
    :image="image"
  />
  <ReSectionContainer
    class="py-2 px-6"
    background="/images/background/background-2.png"
  >
    <ProjectsCarousel />
  </ReSectionContainer>
  <ContactUs />
</template>
