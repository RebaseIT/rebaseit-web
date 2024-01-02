<script setup lang="ts">
const ourValues = [
  {
    title: 'Honestidad y transparencia',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    img: {
      src: '/images/values/value-1.png',
      srcAlt: '/images/values/value-alt-1.png',
      width: '64px',
      height: '115px'
    }
  },
  {
    title: 'Excelencia técnica',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    img: {
      src: '/images/values/value-2.png',
      srcAlt: '/images/values/value-alt-2.png',
      width: '86px',
      height: '115px'
    }
  },
  {
    title: 'Compromiso',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    img: {
      src: '/images/values/value-3.png',
      srcAlt: '/images/values/value-alt-3.png',
      width: '133px',
      height: '57px',
      mb: '58px'
    }
  },
  {
    title: 'Proactividad',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    img: {
      src: '/images/values/value-4.png',
      srcAlt: '/images/values/value-alt-4.png',
      width: '122px',
      height: '115px'
    }
  },
  {
    title: 'Racionalidad',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    img: {
      src: '/images/values/value-5.png',
      srcAlt: '/images/values/value-alt-5.png',
      width: '101px',
      height: '115px'
    }
  },
  {
    title: 'Aprendizaje e innovación',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
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
  <ReSectionContainer image="url(/images/background/background-2.png)">
    <div
      class="flex flex-column pb-8 px-6"
    >
      <ReTitleGradient class="align-self-center">
        Valores que nos definen
      </ReTitleGradient>
      <div
        class="flex flex-row flex-wrap justify-content-center gap-2 mt-6"
      >
        <ReCard
          v-for="value in ourValues"
          :key="value.title"
          :value="value"
        />
      </div>
    </div>
  </ReSectionContainer>
</template>
