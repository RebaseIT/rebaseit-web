<script setup lang="ts">
const { t } = useI18n()
const image = {
  src: '/images/values/value-3.png',
  srcAlt: '/images/values/value-alt-3.png',
  width: '133px',
  height: '57px',
  class: 'space-layout-bottom'
};
</script>
<template>
  <SectionImage
    class="pt-8" 
    :title="t('clientReviews.title')"
    id="our-clients-section"
    :subtitle="t('clientReviews.subtitle')"
    :image="image"
  />
  <ReSectionContainer background="/images/background/background-3.png">
    <ReviewsCarousel />
  </ReSectionContainer> 
</template>