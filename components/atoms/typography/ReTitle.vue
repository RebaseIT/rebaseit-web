<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  color: {
    type: String,
    default: '#FFFFFF'
  },
  bold: {
    type: Boolean,
    default: false
  }
})

const fontWeight = computed(() => props.bold ? 600 : 400)
</script>

<template>
  <span class="re-title">
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.re-title {
  color: v-bind(color);
  font-size: 20px;
  font-family: Roboto;
  font-weight: v-bind(fontWeight);
}
</style>

