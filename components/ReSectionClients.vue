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
  <ReSectionContainer image="url(/images/background_2.jpg)">
    <slot>{{ text }}</slot>
  </ReSectionContainer>
</template>

