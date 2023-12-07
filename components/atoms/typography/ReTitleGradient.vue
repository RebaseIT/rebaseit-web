
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
  bigText: {
    type: Boolean,
    default: false
  }

})

const bigText = computed(() => props.bigText ? '56px' : '32px');
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
  font-size: v-bind(bigText);
  font-family: IBM Plex Mono;
  font-weight: 600;
  line-height: normal;
}
</style>