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
  background-color: #0470B8;
  border: 0px;
  &:deep(.p-button){
    background-color: #0470B8;
    color: #0470B8;
  }
}

</style>
