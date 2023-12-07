<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
})
</script>
<template>
  <div class="section px-8">
    <slot>{{ text }}</slot>
  </div>
</template>

<style lang="scss" scoped>
.section{
  background-image: url("images/background_4.jpg"); 
}
</style>