<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  isClickable: {
    type: Boolean,
    default: false
  }
})
</script>


<template>
  <span
    class="re-subtitle"
    :class="{'clickable': isClickable}"
  >
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
.clickable:hover {
  color: var(--secondary-color) !important;
}
</style>

