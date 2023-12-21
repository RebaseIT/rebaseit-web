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
  <ReContainer image="images/section_products_bg.png">
    <slot>{{ text }}</slot>
  </ReContainer>
</template>

