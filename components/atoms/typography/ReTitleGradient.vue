<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  textTransform: {
    type: String,
    default: 'none'
  },
  fontSize: {
    type: String,
    default: 'xl'
  },
  fontFamily: {
    type: String,
    default: 'Titillium Web'
  },
  fontWeight: {
    type: String,
    default: '700'
  }
})
const fontSizeVar = computed(() => {
  return `var(--${props.fontSize})`
})
</script>

<template>
  <span class="re-title-gradient">
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.re-title-gradient {
  background: -webkit-linear-gradient(45deg,rgb(4, 90, 147), rgb(136, 171, 254));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: v-bind(fontSizeVar);
  font-family: v-bind(fontFamily);
  font-weight: v-bind(fontWeight);
  line-height: normal;
  text-transform: v-bind(textTransform);
}
</style>
