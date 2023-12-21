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
  <ReSectionContainer class="pt-8" image="url(images/background_1.jpg)">
    <slot>{{ text }}</slot>
  </ReSectionContainer>
</template>
