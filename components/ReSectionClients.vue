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
  <div class="section px-6">
    <div class="content">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  background-image: url("images/background_2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  .content {
    max-width: 1240px;
    margin: 32px auto 0;
  }
}
</style>
