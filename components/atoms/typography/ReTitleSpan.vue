<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  bold: {
    type: Boolean,
    default: false
  },
  textTransform: {
    type: String,
    default: 'none'
  },
  fontSize: {
    type: String,
    default: 'base'
  },
  fontWeight: {
    type: String,
    default: '200'
  }
})
const fontSizeVar = computed(() => {
  return `var(--${props.fontSize})`
})
</script>

<template>
  <span class="re-title-span">
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.re-title-span {
  font-size: v-bind(fontSizeVar);
  font-family: Raleway;
  line-height: normal;
  font-weight: v-bind(fontWeight);
  text-transform: v-bind(textTransform);
}
</style>
