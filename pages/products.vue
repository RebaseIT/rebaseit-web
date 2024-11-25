<script setup lang="ts">
const { t } = useI18n()
const image = {
  src: '/images/folder.png',
  alt: 'folder-image',
  maxWidth: '350px'
};
</script>

<template>
  <Head>
    <Title>{{ t('pages.products') }}</Title>
  </Head>
  <SectionImage
    class="pt-8"
    :title="t('products.title')"
    id="our-products-section"
    :subtitle="t('products.subtitle')"
    :image="image"
  />
  <ReSectionContainer
    class="py-2 px-6"
    background="/images/background/background-2.png"
  >
    <ProductsCarousel />
  </ReSectionContainer>
  <ContactUs />
</template>
