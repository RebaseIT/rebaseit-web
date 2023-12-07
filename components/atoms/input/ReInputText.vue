
<script setup>
const props = defineProps({
  label :{
    type: String,
    default: ''
  }
})

</script>

<template>
  <label>{{ label }}</label>
  <InputText
    type="text"
    class="re-input-text"
    aria-describedby="text-error"
  />
</template>

<style lang="scss" scoped>
.re-input-text {
  &:focus{
    border-color: transparent !important;
  }
  &:deep(.p-inputtext) {
    border-color: #0470B8 !important;
  } 
}
</style>
