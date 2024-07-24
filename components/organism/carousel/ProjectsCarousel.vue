<script setup>
import { useViewport } from '~/composables/useViewport';
const { t } = useI18n()
const { isSmaller: isMobile } = useViewport('lg');
const { projects } = useProjects()
const projectsToShow = projects.filter(project => project.content)

const responsiveOptions = ref([
  {
    breakpoint: '1080px',
    numVisible: 1,
    numScroll: 1
  }
]);

const carrouselItems = computed(() => {
  if (isMobile.value) {
    return [...projectsToShow];
  }
  // Add empty items to the start and end of the array to make the first and last items invisible in desktop
  return [{}, ...projectsToShow, {}];
});

const middleIndex = ref(1);

watch(isMobile, (newVal) => {
  middleIndex.value = newVal ? 0 : 1;
});

const updateMiddleIndex = (event) => {
  middleIndex.value = isMobile.value ? event : event + 1;
};
</script>

<template>
  <Carousel
    class="carousel"
    :value="carrouselItems"
    :num-visible="3"
    :num-scroll="1"
    :responsive-options="responsiveOptions"
    :show-indicators="false"
    @update:page="updateMiddleIndex($event)"
  >
    <template #item="slotProps">
      <div
        v-if="slotProps.data.content"
        class="flex justify-content-center py-4 px-2 card-style"
        :class="{ 'middle-item': slotProps.index === middleIndex }"
      >
        <Card>
          <template #title>
            <div class="flex justify-content-center">
              <ReImage
                :src="slotProps.data.image.src"
                :max-width="slotProps.data.image.maxWidth"
              />
            </div>
          </template>
          <template #content>
            <ReParagraphSpan
              color="black"
              font-weight
              class="flex justify-content-center"
            >
              <span class="add-white-spaces">
                {{ t(slotProps.data.content) }}
              </span>
            </ReParagraphSpan>
          </template>
          <template #footer>
            <div class="flex justify-content-center">
              <a
                :href="slotProps.data.route"
                target="_blank"
              >
                <!-- <ReButton
                  class="button-link"
                  :label="t('projects.knowMore')"
                /> -->
              </a>
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
.add-white-spaces{
  white-space: pre-line;
}
.button-link:deep(.p-button-label) {
  text-decoration: underline;
}
.carousel .p-carousel-items-container {
    align-items: center !important;
}
.carousel {
  &:deep(.p-carousel-items-container) {
    height: 100%;
    transition: all .5s ease-in-out;
  }
  &:deep(.p-carousel-item) {
    align-self: center;
  }
  &:deep(.p-carousel-items-content) {
    height: 750px !important;
    padding-top: 20px;
  }
  &:deep(.p-card-body){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}
.card-style {
  &:deep(.p-card){
    background-color: var(--light-blue-10);
    width: 100%;
    min-height: 398px;
    max-width: 256px;
    text-align: center;
  }
}
.middle-item {
  transform: scale(1.3);
  transition: transform .5s;
  &:deep(.p-card){
    background-color: var(--light-blue-20);
  }
}
@media (max-width: 580px) {
  .carousel {
    &:deep(.p-carousel-prev) {
      position: absolute;
      left: -50px;
    }
    &:deep(.p-carousel-next) {
      position: absolute;
      right: -50px;
    }
  }
  .card-style {
    &:deep(.p-card){
      min-height: 310px;
      max-width: 200px;
    }
  }
}
</style>


