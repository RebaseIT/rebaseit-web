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
  color: {
    type: String,
    default: '#FFFFFF'
  },
  textTransform: {
    type: String,
    default: 'none'
  },
  fontSize: {
    type: String,
    default: '20px'
  },
  fontWeight: {
    type: String,
    default: '200'
  }
})
</script>

<template>
  <span class="re-title-span">
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.re-title-span {
  color: v-bind(color);
  font-size: v-bind(fontSize);
  font-family: Raleway;
  line-height: normal;
  font-weight: v-bind(fontWeight);
  text-transform: v-bind(textTransform);
}
</style>
