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
  },
  isClickable: {
    type: Boolean,
    default: false
  }
})
const cssFontSize = computed(() => {
  return `var(--font-size-${props.fontSize})`
})
</script>

<template>
  <span
    class="re-title-span"
    :class="{'clickable': isClickable}"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.re-title-span {
  font-size: v-bind(cssFontSize);
  font-family: Raleway;
  line-height: normal;
  font-weight: v-bind(fontWeight);
  text-transform: v-bind(textTransform);
}
.clickable:hover {
  color: var(--surface-200) !important;
}
</style>
