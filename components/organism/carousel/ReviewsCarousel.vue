<script setup>
const { t } = useI18n()
const { clientReviews } = useClientReviews()
</script>

<template>
  <div class="card">
    <Carousel
      :value="clientReviews"
      :num-visible="1"
      :num-scroll="1"
      class="carousel-color"
      circular
    >
      <template #item="slotProps">
        <div
          class="border surface-border border-round pt-6 px-2 pb-0"
        >
          <div class="pt-4 row">
            <img
              :src="slotProps.data.src"
              height="60%"
              width="60%"
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
}
.comment-text {
  font-size: 1.5rem;
}

.border {
  display: flex;
  flex-direction: row; 
  align-items: center;
  gap: 1rem; 
}

.comment-text {
  flex: 1; 
  font-size: 1.5rem;
}
@media only screen and (max-width: 600px) {
  .border {
    display: block; 
    align-items: center;
    justify-content: center;
    gap: 1rem; 
  }
  .img-border{
    display: flex;
    margin: auto;
  }
}
</style>
