<script setup>
const { t } = useI18n()
const { clientReviews } = useClientReviews()
defineProps({
  isHome: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div>
    <Carousel
      :value="clientReviews"
      :num-visible="1"
      :num-scroll="1"
      :class="['carousel-color', { 'carousel--home': isHome }]"
      circular
    >
      <template #item="slotProps">
        <div
          class="border surface-border border-round pt-6 px-2 pb-0"
        >
          <div class="pt-4 row">
            <img
              :src="slotProps.data.src"
              height="100%"
              width="100%"
              class="img-border"
            >

            <div class="mt-2">
              <ReTitleSpan
                font-weight="400"
                color="black"
                class="font-size-text"
              >
                {{ slotProps.data.name }}
              </ReTitleSpan>
            </div>
            <div>
              <ReTitleSpan
                color="black"
                class="font-size-text"
              >
                {{ t(slotProps.data.jobTitle) }} - {{ slotProps.data.company }}
              </ReTitleSpan>
            </div>
          </div>
          <ReParagraphSpan
            color="black"
            font-weight
            class="comment-text"
          >
            {{ t(slotProps.data.content) }}
          </ReParagraphSpan>
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
    background-color: var(--light-blue-30);
    border-radius: 10px;
  }
  &:deep(.p-carousel-indicator .p-link){
    border-radius: 100%;
    width: 16px;
    height: 16px;
    border: 1px solid var(--primary-color);
    background: transparent;
  }
  &:deep(.p-carousel-indicator.p-highlight button){
    background-color: var(--primary-color);
  }
  &:deep(.p-carousel-item){
    // flex: 1 0 100% !important;
  }

.border {
  display: flex;
  flex-direction: row; 
  align-items: center;
  gap: 1rem; 
}

.comment-text {
  font-size: 1.5rem;
}
@media only screen and (max-width: 600px) {
  .border {
    display: block; 
    gap: 1rem; 
  }
  .img-border{
    width: 40%;
    height: 40%;
    display: flex;
    margin: auto;
  }
  .comment-text {
      font-size: 1rem;
    }
    .font-size-text{
      font-size: 1.2rem !important;
    }
}
}
//Estilos para el home, solo se aplican cuando se envia una prop verdadera como en el ContactUs
//cuando se lo llama desde el home
.carousel--home{
  .img-border {
    width: 40%;
    height: 40%;
    display: flex;
    margin: auto;
    border-radius: 100%;
  }
 
  .comment-text {
    font-size: 1.5rem;
  }
  .border {
    display: grid;
    flex-direction: row; 
    align-items: center;
    gap: 1rem; 
  }
  @media only screen and (max-width: 600px) {
    .comment-text {
      font-size: 0.8rem;
    }
    .font-size-text{
      font-size: 1rem !important;
    }
  }
}
</style>
