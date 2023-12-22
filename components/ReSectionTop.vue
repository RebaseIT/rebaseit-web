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
  <ReSectionContainer class="pt-8">
    <slot>{{ text }}</slot>
  </ReSectionContainer>
</template>
