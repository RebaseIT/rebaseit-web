import { ref, onMounted, onUnmounted } from 'vue';

export function useViewport() {
    const isMobile = ref(false);
    let checkViewport;

    onMounted(() => {
        checkViewport = () => {
            isMobile.value = window.innerWidth <= 1040;
        };

        window.addEventListener('resize', checkViewport);
        checkViewport();
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkViewport);
    });

    return { isMobile };
}
