<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
})
</script>
<template>
  <ReSectionContainer image="url(images/section_products_bg.png)">
    <slot>{{ text }}</slot>
  </ReSectionContainer>
</template>

