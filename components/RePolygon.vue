<template>
  <img alt="polygon" src="images/polygon-blue.png" :style="styleObject" class="floating-image"/>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    width: String,
    height: String,
    top: String,
    left: String,
    right: String,
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
