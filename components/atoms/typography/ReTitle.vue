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
  isClickable: {
    type: Boolean,
    default: false
  }
})

const fontWeight = computed(() => props.bold ? 600 : 400)
</script>

<template>
  <span
    class="re-title"
    :class="{'clickable': isClickable}"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.re-title {
  font-size: var(--font-size-base);
  font-family: Roboto;
  font-weight: v-bind(fontWeight);
}
.clickable:hover {
  color: var(--secondary-color) !important;
}
</style>

