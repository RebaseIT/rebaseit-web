<script setup>
const props = defineProps({
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  top: {
    type: String,
    default: ''
  },
  left: {
    type: String,
    default: ''
  },
  right: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <img
    alt="polygon"
    src="/images/polygon-blue.png"
    class="floating-image"
  >
</template>

<style lang="scss" scoped>
.floating-image {
  z-index: 99;
  animation: float 1s ease-in-out forwards, fadeIn 1s ease-in-out forwards;
  position: absolute;
  width: v-bind(width);
  height: v-bind(height);
  top: v-bind(top);
  left: v-bind(left);
  right: v-bind(right);
  opacity: 0;
}
@keyframes float {
  0% {
    transform: translateY(10vh);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
