<script setup>

const isSelected = ref(false);

const selected = () => {
  isSelected.value = !isSelected.value;
};

</script>

<template>
  <div>
    <TabView class="card-tab-view ">
      <TabPanel
        class="flex-container"
        :class="{'shadow-tab': !isSelected}"
        @click="selected"
      >
        <template #header>
          <img
            src="/images/logo_sherlock_deg.png"
            height="50"
          >
        </template>
        <div class="flex flex-container">
          <img
            src="/images/sherlock_img.jpg"
            height="250"
          >
              
          <div class="">
            ¿Alguna vez te hackearon o intentaron hackear a alguien de tu organización?
            Cuando se trata de ciberseguridad, podés optar por <b>Sherlock</b>: una solución que centraliza y automatiza las tareas de respuesta a incidentes realizadas por los analistas de ciberseguridad.
          </div>
        </div>
      </TabPanel>
      <TabPanel
        :class="{'shadow-tab': !isSelected}"
        @click="selected()"
      >
        <template #header>
          <img
            src="/images/reconnect.png"
            height="50"
          >
        </template>
        <div class="flex">
          <img
            src="/images/sherlock_2_img.jpg"
            height="250"
          >   
          <div>
            El proceso de contratación y el manejo de datos de grandes sumas de candidatos puede ser desordenado y desorientador.
            Rebase Connect es una aplicación de análisis de datos dedicada a los contratadores, encargándose de la estandarización de información, seguimiento de búsquedas, e indicadores de métricas.
          </div>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>


<style scoped lang="scss">
.card-tab-view {
  width: 70%;
  border: 2px solid;
  border-image-slice: 1;
  border-width: 1.5px;
  border-image-source: linear-gradient(#0470B8,#88ABFE);
  &:deep(.p-tabview-nav){
    display: flex;
    justify-content: space-around;
    border: none;
  }
  
}
.flex-container {
  display: flex;
  flex-direction: row;
}

.shadow-tab {
  &:deep(.p-tabview-nav-link .p-tabview-header-action){
    background-color: #5f99bd;
  }  
}


</style>
