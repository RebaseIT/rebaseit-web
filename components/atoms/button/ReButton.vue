<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['submit', 'reset', 'button'].includes(value),
  },
})
</script>

<template>
  <Button
    :type="type"
    class="re-button"
    size="small"
  />
</template>

<style  lang="scss" scoped>
.re-button {
  background-color: var(--primary-color);
  border: 0;
  &:hover {
    background-color: var(--secondary-color) !important;
  }
  &:deep(.p-button){
    background-color: var(--primary-color);
    color: var(--primary-color);
  }
}
</style>
