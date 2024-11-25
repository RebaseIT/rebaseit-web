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
    size="small"
    outlined
    class="re-secondary-button"
  />
</template>

<style  lang="scss" scoped>
.re-secondary-button {
  color: var(--primary-color);
  &:hover {
    background-color: var(--third-color) !important;
    color: var(--primary-color) !important;
  }
  &:deep(.p-button){
    color: var(--primary-color);
  }
}
</style>
