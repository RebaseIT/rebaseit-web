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
  <ReSectionContainer background="url(/images/background/background-1.png)">
    <slot>{{ text }}</slot>
  </ReSectionContainer>
</template>
