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
  background-image: url("images/background_2.jpg"); 
  width: auto;
}
</style>