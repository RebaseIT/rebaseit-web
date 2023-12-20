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
    default: ''
  },
  maxWidth: {
    type: String,
    required: false,
    default: ''
  },
  height: {
    type: String,
    required: false,
    default: ''
  },
  maxHeight: {
    type: String,
    required: false,
    default: ''
  },
})

const width = computed(() => props.width || '100%');
const height = computed(() => props.height || 'auto');
const maxWidth = computed(() => `${props.maxWidth}px`);
const maxHeight = computed(() => `${props.maxHeight}px`);

</script>
<template>
  <img :src="src" :alt="alt">
</template>

<style lang="scss" scoped>
img {
  width: v-bind(width);
  height: v-bind(height);
  max-width: v-bind(maxWidth);
  max-height: v-bind(maxHeight);
}
</style>
