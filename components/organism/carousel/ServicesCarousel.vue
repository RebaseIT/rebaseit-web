<script setup lang="ts">
const { t } = useI18n()
const { isSmaller: isMobile } = useViewport('lg');
const images = ref([
  {
    title: 'services.staffTitle',
    subtitles: [
      {
        title: 'services.staffSub1',
        text: 'services.staffText1'
      },
      {
        title: 'services.staffSub2',
        text: 'services.staffText2'
      },
      {
        title: 'services.staffSub3',
        text: 'services.staffText3'
      }
    ],
    src: 'services.staffImage',
    maxWidth: '750px'
  },
  {
    title: 'services.frontTitle',
    subtitles: [
      {
        title: 'services.frontSub1',
        text: 'services.frontText1'
      },
      {
        title: 'services.frontSub2',
        text: 'services.frontText2'
      },
      {
        title: 'services.frontSub3',
        text: 'services.frontText3'
      }
    ],
    src: 'services.frontImage',
    maxWidth: '700px'
  },
  {
    title: 'services.backTitle',
    subtitles: [
      {
        title: 'services.backSub1',
        text: 'services.backText1'
      },
      {
        title: 'services.backSub2',
        text: 'services.backText2'
      },
      {
        title: 'services.backSub3',
        text: 'services.backText3'
      }
    ],
    src: 'services.backImage',
    maxWidth: '700px'
  },
  {
    title: 'services.dbTitle',
    subtitles: [
      {
        title: 'services.dbSub1',
        text: 'services.dbText1'
      },
      {
        title: 'services.dbSub2',
        text: 'services.dbText2'
      },
      {
        title: 'services.dbSub3',
        text: 'services.dbText3'
      },
      {
        title: 'services.dbSub4',
        text: 'services.dbText4'
      }
    ],
    src: 'services.dbImage',
    maxWidth: '700px'
  },
  {
    title: 'services.infraTitle',
    subtitles: [
      {
        title: 'services.infraSub1',
        text: 'services.infraText1'
      },
      {
        title: 'services.infraSub2',
        text: 'services.infraText2'
      },
      {
        title: 'services.infraSub3',
        text: 'services.infraText3'
      }
    ],
    src: 'services.infraImage',
    maxWidth: '750px'
  },
  {
    title: 'services.integrationTitle',
    subtitles: [
      {
        title: 'services.integrationSub1',
        text: 'services.integrationText1'
      },
      {
        title: 'services.integrationSub2',
        text: 'services.integrationText2'
      },
      {
        title: 'services.integrationSub3',
        text: 'services.integrationText3'
      }
    ],
    src: 'services.integrationImage',
    maxWidth: '650px'
  },
]);
</script>

<template>
  <div
    class="card"
    id="services-carousel"
  >
    <Carousel
      :value="images"
      :num-visible="1"
      :num-scroll="1"
      :show-indicators="false"
      class="carousel-items-position"
      circular
    >
      <template #item="slotProps">
        <div class="mt-4">
          <div>
            <ReTitleGradient :font-size="isMobile ? 'md' : 'xl'">
              {{ t(slotProps.data.title) }}
            </ReTitleGradient>
          </div>
          <div
            class="row flex"
            :class="{ 'flex-column justify-center': isMobile }"
          >
            <div
              v-for="(subtitle, index) in slotProps.data.subtitles"
              :key="index"
              :class="isMobile ? 'col-12' : `col-${12/slotProps.data.subtitles.length}`"
            >
              <div class="mt-2">
                <ReTitleGradient :font-size="isMobile ? 'sm' : 'lg'">
                  {{ t(subtitle.title) }}
                </ReTitleGradient>
              </div>
              <div class="py-2">
                <ReParagraphSpan
                  big-text
                  color="black"
                >
                  {{ t(subtitle.text) }}
                </ReParagraphSpan>
              </div>
            </div>
          </div>
          <div class="flex py-4 px-1">
            <ReImage
              class="m-auto"
              :src="t(slotProps.data.src)"
              :max-width="slotProps.data.maxWidth"
            />
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-items-position { 
  &:deep(.p-carousel-item) {
    align-items: center !important;
    align-self: center !important;
  }
}
</style>