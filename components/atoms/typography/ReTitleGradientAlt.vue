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

const bigText = computed(() => props.bigText ? '60px' : '40px');
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
  font-family: Titillium Web;
  line-height: normal;
  font-style: normal;
  font-weight: 700;
}
</style>
