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
  <ReSectionContainer image="url(/images/background/background-2.png)">
    <slot>{{ text }}</slot>
  </ReSectionContainer>
</template>

