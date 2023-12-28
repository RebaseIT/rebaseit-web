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
    route: '/blog/nine-azul'
  },
  {
    content: '¿Alguna vez te hackearon o intentaron hackear a alguien de tu organización? Cuando se trata de ciberseguridad, podés optar por <b>Sherlock</b>: una solución que centraliza y automatiza las tareas de respuesta a incidentes realizadas por los analistas de ciberseguridad.',
    image: {
      src: '/images/logo_sherlock_deg.png',
      maxWidth: '290px'
    },
    route: '/blog/sherlock'
  },
  {
    content: '<b>Rebase Connect</b> es una aplicación de análisis de datos dedicada a los contratadores, encargándose de la <b>estandarización</b> de información, <b>seguimiento</b> de búsquedas, e <b>indicadores</b> de métricas.',
    image: {
      src: '/images/reconnect.png',
      maxWidth: '290px'
    },
    route: '/blog/rebase-connect'
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
    circular
  >
    <template #item="slotProps">
      <div
        v-if="slotProps.data.content"
        :class="{ 'middle-item': slotProps.index === middleIndex }"
        class="flex justify-content-center py-4 px-2 card-style"
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
              :html="slotProps.data.content"
            />
          </template>
          <template #footer>
            <div class="flex justify-content-center">
              <NuxtLink :to="slotProps.data.route">
                <ReButton
                  label="Conocé más"
                />
              </NuxtLink>
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


