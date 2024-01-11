<script setup>
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('lg');
const projects = [
  {
    content: 'Realizamos el proceso de configuración del sistema de administración digital de iluminación LED de nuestro cliente Nine Shopping, para que puedan celebrar las fiestas de la mejor manera.',
    image: {
      src: '/images/clients/nineAzul.png',
      maxWidth: '130px'
    },
    route: 'https://www.linkedin.com/posts/rebase-it_tech-sales-project-activity-7002987786941181952-cAVt'
  },
  {
    content: '¿Alguna vez te hackearon o intentaron hackear a alguien de tu organización? Cuando se trata de ciberseguridad, podés optar por <b>Sherlock</b>: una solución que centraliza y automatiza las tareas de respuesta a incidentes realizadas por los analistas de ciberseguridad.',
    image: {
      src: '/images/logo_sherlock_deg.png',
      maxWidth: '290px'
    },
    route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6994309011672068096-uj3V'
  },
  {
    content: '<b>Rebase Connect</b> es una aplicación de análisis de datos dedicada a los contratadores, encargándose de la <b>estandarización</b> de información, <b>seguimiento</b> de búsquedas, e <b>indicadores</b> de métricas.',
    image: {
      src: '/images/reconnect.png',
      maxWidth: '290px'
    },
    route: 'https://www.linkedin.com/company/rebase-it/'
  }
];

const responsiveOptions = ref([
  {
    breakpoint: '1080px',
    numVisible: 1,
    numScroll: 1
  }
]);

const carrouselItems = computed(() => {
  if (isMobile.value) {
    return [...projects];
  }
  // Add empty items to the start and end of the array to make the first and last items invisible in desktop
  return [{}, ...projects, {}];
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
              <span v-html="slotProps.data.content" />
            </ReParagraphSpan>
          </template>
          <template #footer>
            <div class="flex justify-content-center">
              <a
                :href="slotProps.data.route"
                target="_blank"
              >
                <ReButton
                  label="Conocé más"
                />
              </a>
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
.carousel {
  &:deep(.p-carousel-items-container) {
    height: 100%;
    transition: all .5s ease-in-out;
  }
  &:deep(.p-carousel-item) {
    align-self: center;
  }
  &:deep(.p-carousel-items-content) {
    height: 600px !important;
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


