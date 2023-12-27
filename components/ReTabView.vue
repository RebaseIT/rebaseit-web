<script setup>
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('md');
const isSelected = ref(false);
const selected = () => {
  isSelected.value = !isSelected.value;
};

</script>

<template>
  <div class="container">
    <TabView class="card-tab-view">
      <div @click="selected">
        <TabPanel>
          <template #header>
            <div class="header-img">
              <img
                src="/images/logo_sherlock_deg.png"
                height="50"
              >
            </div>
          </template>
          <div
            class="flex justify-content-center align-items-center lg:p-6 gap-5"
            :class="{ 'flex-column p-1': isMobile }"
          >
            <img
              src="/images/sherlock_img.jpg"
              height="250"
            >
            <div class="max-w-24rem">
              ¿Alguna vez te hackearon o intentaron hackear a alguien de tu organización?
              Cuando se trata de ciberseguridad, podés optar por <b>Sherlock</b>: una solución que centraliza y automatiza las tareas de respuesta a incidentes realizadas por los analistas de ciberseguridad.
            </div>
          </div>
        </TabPanel>
      </div>
      <div @click="selected">
        <TabPanel>
          <template #header>
            <div class="header-img">
              <img
                src="/images/reconnect.png"
                height="50"
              >
            </div>
          </template>
          <div
            class="flex justify-content-center align-items-center lg:p-6 gap-5"
            :class="{ 'flex-column p-1': isMobile }"
          >
            <img
              src="/images/sherlock_2_img.jpg"
              height="250"
            >
            <div class="max-w-24rem">
              El proceso de contratación y el manejo de datos de grandes sumas de candidatos puede ser desordenado y desorientador.
              <b>Rebase Connect</b> es una aplicación de análisis de datos dedicada a los contratadores, encargándose de la <b>estandarización</b> de información, <b>seguimiento</b> de búsquedas, e <b>indicadores</b> de métricas.
            </div>
          </div>
        </TabPanel>
      </div>
    </TabView>
  </div>
</template>


<style scoped lang="scss">
.container {
  max-width: 1240px;
  margin: 0 auto;
  .card-tab-view {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    border-radius: 8px;
    padding: 2px;
    background: linear-gradient(var(--secondary-color),var(--primary-color));
    &:deep(.p-tabview-nav){
      display: flex;
      flex-direction: column;
      border: 0;
    }
    &:deep(.p-tabview-nav-content){
      border-radius: 8px 8px 0 0;
      outline: none !important;
      box-shadow: none !important;
    }
    &:deep(.p-tabview-panels){
      font-family: Raleway;
      font-size: 18px
    }
    &:deep(.p-tabview-nav-link){
      background: transparent !important;
      border: 0 !important;
      padding: 8px !important;
    }
    &:deep(.p-tabview-header){
      display: flex;
      justify-content: center;
      width: 100%;
      border-bottom: 0;
      background-color: var(--surface-a);
    }
    &:deep(.p-highlight){
      border: 0;
      border-bottom: 2px solid var(--secondary-color);
      background: rgba(242, 250, 255, 1);
    }
    &:deep(.p-tabview){
      border: 0 !important;
    }
    img {
      border-radius: 10px;
      width: 100%;
      max-width: 300px
    }
    @media (min-width: 768px) {
      &:deep(.p-tabview-nav){
        flex-direction: row;
        justify-content: space-around;
        border: none;
      }
      &:deep(.p-tabview-header){
        border-bottom: 2px solid var(--secondary-color);
        background: rgba(242, 250, 255, 1);
      }
      &:deep(.p-highlight){
        background: var(--surface-a);
      }
      &:deep(.p-highlight[data-pc-index="0"][data-pc-section="header"]){
        border-bottom: 0;
        border-right: 2px solid var(--secondary-color);
        border-radius: 0 6px 0 0;;
        background-color: var(--surface-a);
      }
      &:deep(.p-highlight[data-pc-index="1"][data-pc-section="header"]){
        border-bottom: 0;
        border-left: 2px solid var(--secondary-color);
        border-radius: 6px 0 0 0;
        background-color: var(--surface-a);
      }
    }
  }
}
.p-tabview-nav-link:focus,
p-tabview-nav-link:active {
  background-color: rebeccapurple;
  box-shadow: none !important;
}
</style>
