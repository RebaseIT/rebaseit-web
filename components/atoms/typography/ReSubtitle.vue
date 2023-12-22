<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
})
</script>


<template>
  <span class="re-subtitle">
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.re-subtitle {
  color: #ffffff;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 100;
  line-height: normal;
  text-decoration: none;
}
</style>

