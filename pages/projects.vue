<script setup lang="ts">
const title = 'Nuestros Proyectos.';
const subtitle = 'Desde Rebase IT, acompañamos a nuestros clientes en todo el ciclo de vida del proyecto, brindándoles soluciones superadoras y ajustadas a sus necesidades particulares.';
const image = {
  src: '/images/folder.png',
  alt: 'folder-image',
  maxWidth: '350px'
};
const sectionTop = { title, subtitle, image };
</script>

<template>
  <ReSectionImage
    class="pt-8"
    v-bind="sectionTop"
  />
  <ReSectionContainer
    class="py-2 px-6"
    background="url(/images/background/background-2.png)"
  >
    <ReCarouselProjects />
  </ReSectionContainer>
  <ReContactUs />
</template>
