<script setup>
</script>
<template>
  <ReSectionContainer image="">
    <div class="row flex px-8 justify-space-between">
      <div class="col-6">
        <ReTitleGradient> Contactanos </ReTitleGradient>
        <div class="py-4">
          <ReParagraphSpan
              big-text
              color="var(--black)"
          >
            Nos comunicaremos en breve.
          </ReParagraphSpan>
        </div>
        <div>
          <ReCarousel />
        </div>
      </div>
      <div class="col-4 contact-card">
        <Card>
          <template #content>
            <form class="flex flex-column gap-2">
              <ReInputText label="Nombre *" />
              <ReInputText label="Apellido *" />
              <ReInputText label="Dirección de E-mail *" />
              <ReInputText label="Número de Teléfono" />
              <ReTextarea label="Deja tu mensaje *" />
              <ReButton label="Enviar" />
            </form>
            <div class="pt-3">
              <ReParagraphSpan color="var(--primary-color)">
                <b>O envianos un mensaje a: </b>
              </ReParagraphSpan>
              <ReParagraphSpan color="var(--black)">
                <b><a href="mailto:sales@rebaseit.tech">sales@rebaseit.tech</a></b>
              </ReParagraphSpan>
            </div>

          </template>
        </Card>
      </div>
    </div>
  </ReSectionContainer>
</template>

<style lang="scss" scoped>
.contact-card {
    &:deep(.p-card){
    border: 2px solid var(--primary-color);
    background-color: var(--light-blue);
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
}
</style>
