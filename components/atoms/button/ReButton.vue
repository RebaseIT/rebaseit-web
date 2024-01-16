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
  />
</template>

<style  lang="scss" scoped>
.re-button {
  background-color: var(--primary-color);
  border: 0px;
  &:deep(.p-button){
    background-color: var(--primary-color);
    color: var(--primary-color);
  }
}

</style>
