<script setup>
import { ref } from "vue";

const images = ref([
  {src: '/images/gatito1.jpeg'},
  {src: '/images/gatito2.jpeg'},
  {src: '/images/gatito3.jpeg'},
]);
</script>

<template>
  <div class="card">
    <Carousel
      :value="images"
      :num-visible="1"
      :num-scroll="1"
      class="carousel-color"
    >
      <template #item="slotProps">
        <div class="border surface-border border-round p-5">
          <ReParagraphSpan
            color="black"
            font-weight
          >
            Desde que adoptamos Sherlock en nuestro departamento de
            Sistemas, hemos podido detectar cualquier brecha de seguridad
            en tiempo record!
          </ReParagraphSpan>

          <div class="pt-4 row">
            <img
              :src="slotProps.data.src"
              height="60"
              width="60"
              class="img-border"
            >

            <div>
              <ReTitleSpan
                bold
                color="black"
                class="font-size-text"
              >
                Eva López
              </ReTitleSpan>
            </div>
            <div>
              <ReTitleSpan
                color="black"
                class="font-size-text"
              >
                CEO Smart Co.
              </ReTitleSpan>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-color {
  .img-border {
    border-radius: 100%;
  }
  &:deep(.p-carousel-content){
    background-color: #F5FAFF;
    border-radius: 10px;
  }
  &:deep(.p-carousel-indicator .p-link){
    border-radius: 100%;
    width: 16px;
    height: 16px;
    border: 1px solid #0470B8;
    background: transparent;
  }
  &:deep(.p-carousel-indicator.p-highlight button){
    background-color: #0470B8;
  }
  &:deep(.p-carousel-next-icon){
    width: 34px;
    height: 34px;
    color: #0470B8;
  }
  &:deep(.p-carousel-prev-icon){
    width: 34px;
    height: 34px;
    color: #0470B8;
  }
  &:deep(.p-carousel-item){
    flex: 1 0 100% !important;
  }
  &:deep(.p-carousel-next),
  &:deep(.p-carousel-prev) {
    margin-top: 56px;
  }
}
</style>
