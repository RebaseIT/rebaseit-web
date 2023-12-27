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
  <ReSectionContainer class="p-6 h-full" image="url(/images/section_products_bg.png)">
    <ReCarouselProjects />
  </ReSectionContainer>
  <section class="py-8">
    <ReContactUs />
  </section>
</template>
