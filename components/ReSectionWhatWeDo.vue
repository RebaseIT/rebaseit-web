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
  <ReContainer image="images/background_3.jpg">
    <slot>{{ text }}</slot>
  </ReContainer>
</template>
