<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  image: {
    type: [String, Boolean],
    required: false,
    default: 'url(/images/background/background-1.png)'
  },
  bgColor: {
    type: String,
    required: false,
    default: 'transparent'
  }
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
  background-color: v-bind(bgColor);
  background-image: v-bind(image);
  background-repeat: repeat;
  background-size: cover;
  .content {
    position: relative;
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>
