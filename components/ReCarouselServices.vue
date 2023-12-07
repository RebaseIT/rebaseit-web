<script setup>
import { ref } from "vue";

const images = ref([  
  {src: '/images/services/service_1.png'},
  {src: '/images/services/service_2.png'},
  {src: '/images/services/service_3.png'},  
  {src: '/images/services/service_4.png'},
  {src: '/images/services/service_5.png'},
  {src: '/images/services/service_6.png'},
]);
const responsiveOptions = ref([
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '991px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>

<template>
  <div class="card">
    <Carousel
      :value="images"
      :num-visible="1"
      :num-scroll="1"
      :responsive-options="responsiveOptions"
      class="carousel-color"
    >
      <template #item="slotProps">
        <div class="">
          <img
            :src="slotProps.data.src"
            height="300"
          >
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>

.carousel-color {
  &:deep(.p-carousel-indicator .p-link){   
    border: 1px solid transparent;
    background: transparent;
  }&:deep(.p-carousel-indicator.p-highlight button){
    background-color: transparent;
  }&:deep(.p-carousel-next-icon){
    width: 34px;
    height: 34px;
    color: #0470B8;
  }&:deep(.p-carousel-prev-icon){
    width: 34px;
    height: 34px;
    color: #0470B8;
  }
}


</style>