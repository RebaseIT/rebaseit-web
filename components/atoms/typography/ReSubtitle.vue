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
  color: white;
  font-size: var(--font-size-sm);
  font-family: Roboto;
  font-weight: 100;
  line-height: normal;
  text-decoration: none;
  cursor: default;
}
</style>

