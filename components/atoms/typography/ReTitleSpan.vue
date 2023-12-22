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
  bigText: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#FFFFFF'
  }
})

const fontWeight = computed(() => props.bold ? 400 : 200)
const bigText = computed(() => props.bigText ? '22px' : '18px');

</script>

<template>
  <span class="re-title-span">
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.re-title-span {
  color: v-bind(color);
  font-size: v-bind(bigText);
  font-family: Raleway;
  line-height: normal;
  font-weight: v-bind(fontWeight)
}
</style>
