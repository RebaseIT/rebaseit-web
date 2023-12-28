import { ref, onMounted, onUnmounted } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
export function useViewport(key) {
  const breakpoints = useBreakpoints({ ...breakpointsTailwind, lg: 1080 })
  const isSmaller = ref(false);
  const isGreaterOrEqual = ref(false);
  let checkViewport;

  onMounted(() => {

    checkViewport = () => {
      isSmaller.value = breakpoints.isSmaller(key);
      isGreaterOrEqual.value = breakpoints.isGreaterOrEqual(key);
    };

    window.addEventListener('resize', checkViewport);
    checkViewport();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkViewport);
  });

  return { isSmaller, isGreaterOrEqual };
}
