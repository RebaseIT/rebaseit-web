<script setup lang="ts">
const { t } = useI18n()
const ourValues = [
  {
    title: 'aboutUs.honestyTitle',
    description: 'aboutUs.honestyDetail',
    img: {
      src: '/images/values/value-1.png',
      srcAlt: '/images/values/value-alt-1.png',
      width: '64px',
      height: '115px'
    }
  },
  {
    title: 'aboutUs.excellenceTitle',
    description: 'aboutUs.excellenceDetail',
    img: {
      src: '/images/values/value-2.png',
      srcAlt: '/images/values/value-alt-2.png',
      width: '86px',
      height: '115px'
    }
  },
  {
    title: 'aboutUs.commitmentTitle',
    description: 'aboutUs.commitmentDetail',
    img: {
      src: '/images/values/value-3.png',
      srcAlt: '/images/values/value-alt-3.png',
      width: '133px',
      height: '57px',
      class: 'space-layout-bottom'
    }
  },
  {
    title: 'aboutUs.proactivityTitle',
    description: 'aboutUs.proactivityDetail',
    img: {
      src: '/images/values/value-4.png',
      srcAlt: '/images/values/value-alt-4.png',
      width: '122px',
      height: '115px'
    }
  },
  {
    title: 'aboutUs.innovationTitle',
    description: 'aboutUs.innovationDetail',
    img: {
      src: '/images/values/value-6.png',
      srcAlt: '/images/values/value-alt-6.png',
      width: '80px',
      height: '115px'
    }
  }
];
</script>

<template>
  <ReSectionContainer background="/images/background/background-2.png">
    <div
      class="flex flex-column pb-8 px-4"
    >
      <ReTitleGradient class="align-self-center">
        {{ t('aboutUs.valuesThatDefineUs') }}
      </ReTitleGradient>
      <div
        class="flex flex-row flex-wrap justify-content-center gap-2 mt-6"
      >
        <ReCard
          v-for="(value, index) in ourValues"
          :key="index"
          :value="value"
        />
      </div>
    </div>
  </ReSectionContainer>
</template>
