import { ref, onMounted, onUnmounted } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
export function useViewport(key) {
  const breakpoints = useBreakpoints({ ...breakpointsTailwind, xl: 1240 })
  const isMobile = ref(false);
  let checkViewport;

  onMounted(() => {

    checkViewport = () => {
      isMobile.value = breakpoints.isSmaller(key);
    };

    window.addEventListener('resize', checkViewport);
    checkViewport();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkViewport);
  });

  return { isMobile };
}
