<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  image: {
    type: String,
    required: false,
    default: 'url(/images/background_1.jpg)'
  },
})
</script>
<template>
  <div class="section">
    <div class="content">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  background-image: v-bind(image);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .content {
    position: relative;
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>
