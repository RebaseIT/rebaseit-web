<script setup lang="ts">
const { t } = useI18n()
const image = {
  src: '/images/gears.png',
  alt: 'gears-image',
  maxWidth: '370px'
};
</script>

<template>
  <Head>
    <Title>{{ t('pages.services') }}</Title>
  </Head>
  <SectionImage
    class="pt-8"
    :title="t('services.title')"
    :subtitle="t('services.subtitle')"
    :image="image"
  />
  <ReSectionContainer background="/images/background/background-3.png">
    <ServicesCarousel />
  </ReSectionContainer>
  <ContactUs />
</template>
