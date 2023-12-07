<script setup>

</script>
<template>
  <div class="row flex px-8 justify-space-between">
    <div class="col-6">
      <ReTitleGradient> Contactanos </ReTitleGradient>
      <div class="py-4">
        <ReParagraphSpan  
          big-text      
          black-text
        >
          Nos comunicaremos en breve.
        </ReParagraphSpan>
      </div>   
      <div>
        <ReCarousel />
      </div>
    </div>
    <div class="col-4">
      <Card class="border-color">
        <template #content>
          <form
            class="flex flex-column gap-2"
          >
            <ReInputText label="Nombre" />
            <ReInputText label="Apellido" />
            <ReInputText label="Dirección de E-mail" />
            <ReInputText label="Número de Teléfono" />
            <ReTextarea label="Deja tu mensaje" />
            <ReButton label="Enviar" />
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.border-color{
    &:deep(.p-card ){
    border-color: #0470B8;
  }
}
</style>