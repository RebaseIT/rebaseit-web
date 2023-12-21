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
  <ReContainer class="pt-8" image="images/background_1.jpg">
    <slot>{{ text }}</slot>
  </ReContainer>
</template>
