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
    default: ''
  },
})
const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${props.image})`
}))
</script>
<template>
  <div class="section" :style="backgroundImageStyle">
    <div class="content">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  .content {
    position: relative;
    max-width: 1240px;
    margin: 0 auto;
  }
}
</style>
