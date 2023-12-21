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
  <ReSectionContainer image="images/background_3.jpg">
    <slot>{{ text }}</slot>
  </ReSectionContainer>
</template>
