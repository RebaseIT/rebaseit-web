<template>
  <img
    alt="polygon"
    src="~/public/images/polygon-blue.png"
    :style="styleObject"
    class="floating-image"
  >
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
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
  },
  setup(props) {
    const styleObject = computed(() => ({
      width: props.width,
      height: props.height,
      position: 'absolute',
      top: props.top,
      left: props.left,
      right: props.right,
    }));

    return {
      styleObject
    }
  }
}
</script>

<style scoped>
.floating-image {
  z-index: 99;
  animation: float 1.5s ease-in-out forwards;
}

@keyframes float {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
