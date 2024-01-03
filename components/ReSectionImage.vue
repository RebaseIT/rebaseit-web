<script setup>
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('lg');
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false,
    default: ''
  },
  image: {
    type: Object,
    required: false,
    default: () => {
      return {
        src: '/images/background_1.jpg',
        alt: 'id-image',
        maxWidth: '400px'
      }
    }
  },
})
</script>

<template>
  <ReSectionContainer background="url(/images/background/background-1.png)">
    <div
      class="row flex py-8 px-6 justify-space-between align-items-center gap-4"
      :class="{ 'flex-column justify-center': isMobile }"
    >
      <div
        class="col-8"
        :class="{ 'col-12': isMobile }"
      >
        <ReTitleGradient
          font-family="IBM Plex Mono"
          :font-size="isMobile ? '40px' : '60px'"
          font-weight="600"
        >
          {{ title }}
        </ReTitleGradient>
        <div class="mt-4">
          <ReTitleSpan
            color="black"
            font-size="25px"
            font-weight="400"
          >
            <span v-html="subtitle" />
          </ReTitleSpan>
        </div>
      </div>
      <div class="flex">
        <ReImage
          :alt="image.alt"
          :src="image.src"
          :max-width="image.maxWidth"
        />
      </div>
    </div>
  </ReSectionContainer>
</template>
