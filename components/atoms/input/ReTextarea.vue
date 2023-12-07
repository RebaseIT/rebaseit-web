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
  <Textarea
    rows="4"
    cols="30"
  />
</template>

