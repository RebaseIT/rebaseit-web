<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  background: {
    type: String,
    required: false,
    default: ''
  }
})
const backgroundImg = computed(() => {
  return `url(${props.background})`
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
  background-image: v-bind(backgroundImg);
  background-repeat: repeat;
  background-size: cover;
  .content {
    position: relative;
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>
