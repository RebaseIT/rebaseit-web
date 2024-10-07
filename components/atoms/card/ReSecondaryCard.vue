<template>
  <div class="card-style mx-4 mb-4">
    <Card>
      <template #title>
        <div class="flex justify-content-center">
          <ReTitleGradient :font-size="isMobile ? 'md' : 'l'">
            {{ title }}
          </ReTitleGradient>
        </div>
      </template>
      <template #content>
        <ReParagraphSpan
          color="black"
          font-weight
          class="flex justify-content-center"
        >
          <span class="add-white-spaces">
            {{ content }}
          </span>
        </ReParagraphSpan>
      </template>
      <template #footer>
        <div class="flex justify-content-center">
          <a
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
<script setup>
const { isSmaller: isMobile } = useViewport('lg')
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
.card-style {
  &:deep(.p-card){
    background-color: var(--light-blue-10);
    height: 420px;
    width: 270px;
    text-align: center;
  }
}
.add-white-spaces {
  white-space:pre-wrap;
  font-size: 17px;
}
</style>