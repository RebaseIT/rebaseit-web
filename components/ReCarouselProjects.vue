<script setup>

const projects = ref([
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
])
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>
<template>
  <div class="card">
    <Carousel
      :value="projects"
      :num-visible="3"
      :num-scroll="3"
      circular
    >
      <template #item="slotProps">
        <div class="flex justify-content-center py-4 px-2 card-style">
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
                black-text
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
  </div>
</template>

<style lang="scss" scoped>

.card-style {
  &:deep(.p-card){
    background-color: #F2FAFF;
    height: 22em;
    width: 14em;
    &:deep(.p-carousel-item p-carousel-item-active p-carousel-item-start){
      background-color: #F2FAFF;
    }
  }  
}
</style>


