<script setup>
const projects = [
  {
    src: '/images/clients/nineAzul.png',
    content: 'Realizamos el proceso de configuración del sistema de administración digital de iluminación LED de nuestro cliente Nine Shopping, para que puedan celebrar las fiestas de la mejor manera.'
  },
  {
    src: '/images/logo_sherlock_deg.png',
    content: '¿Alguna vez te hackearon o intentaron hackear a alguien de tu organización? Cuando se trata de ciberseguridad, podés optar por Sherlock: una solución que centraliza y automatiza las tareas de respuesta a incidentes realizadas por los analistas de ciberseguridad.'
  },
  {
    src: '/images/reconnect.png',
    content: 'Rebase Connect es una aplicación de análisis de datos dedicada a los contratadores, encargándose de la estandarización de información, seguimiento de búsquedas, e indicadores de métricas.'
  }
];

const responsiveOptions = ref([
  {
    breakpoint: '980px',
    numVisible: 1,
    numScroll: 1
  }
]);

const carrouselItems = ref([...projects, ...projects]);

const middleIndex = ref(1);

const updateMiddleIndex = (event) => {
  middleIndex.value = event + 1;
};
</script>

<template>
  <Carousel
      class="carousel"
      :value="carrouselItems"
      :num-visible="3"
      :num-scroll="1"
      :responsive-options="responsiveOptions"
      @update:page="updateMiddleIndex($event)"
      circular
  >
    <template #item="slotProps">
      <div
        :class="{ 'middle-item': slotProps.index === middleIndex }"
        class="flex justify-content-center py-4 px-2 card-style"
      >
        <Card>
          <template #title>
            <div class="flex justify-content-center">
              <img
                  :src="slotProps.data.src"
                  height="40"
              >
            </div>
          </template>
          <template #content>
            <ReParagraphSpan
                color="black"
                font-weight
                class="flex justify-content-center"
            >
              {{ slotProps.data.content }}
            </ReParagraphSpan>
          </template>
          <template #footer>
            <div class="flex justify-content-center">
              <ReButton
                  label="Conocé más"
              />
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
.middle-item {
  transform: scale(1.2);
  transition: transform 0.5s;
}
.carousel {
  &:deep(.p-carousel-items-content) {
    height: 460px !important;
    padding-top: 20px;
  }
}
.card-style {
  &:deep(.p-card){
    background-color: #F2FAFF;
    min-height: 22em;
    width: 100%;
    max-width: 14em;
    &:deep(.p-carousel-item p-carousel-item-active p-carousel-item-start){
      background-color: #F2FAFF;
    }
  }
}
</style>


