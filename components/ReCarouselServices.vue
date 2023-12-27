<script setup lang="ts">
const images = ref([
  {
    src: '/images/services/service_1.png',
    maxWidth: '700px'
  },
  {
    src: '/images/services/service_2.png',
    maxWidth: '700px'
  },
  {
    src: '/images/services/service_3.png',
    maxWidth: '700px'
  },
  {
    src: '/images/services/service_4.png',
    maxWidth: '700px'
  },
  {
    src: '/images/services/service_5.png',
    maxWidth: '700px'
  },
  {
    src: '/images/services/service_6.png',
    maxWidth: '700px'
  },
]);
</script>

<template>
  <div class="card">
    <Carousel
      :value="images"
      :num-visible="1"
      :num-scroll="1"
      :show-indicators="false"
      class="carousel-color"
      circular
    >
      <template #item="slotProps">
        <div class="flex py-6 h-full">
          <ReImage
            class="m-auto"
            :src="slotProps.data.src"
            :max-width="slotProps.data.maxWidth"
          />
        </div>
      </template>
    </Carousel>
  </div>
</template>
