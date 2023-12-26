<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: false,
    default: ''
  },
  width: {
    type: String,
    required: false,
    default: '100%'
  },
  maxWidth: {
    type: String,
    required: false,
    default: ''
  },
  height: {
    type: String,
    required: false,
    default: 'auto'
  },
  maxHeight: {
    type: String,
    required: false,
    default: ''
  },
})

</script>
<template>
  <img
    :src="src"
    :alt="alt"
  >
</template>

<style lang="scss" scoped>
img {
  width: v-bind(width);
  height: v-bind(height);
  max-width: v-bind(maxWidth);
  max-height: v-bind(maxHeight);
}
</style>
