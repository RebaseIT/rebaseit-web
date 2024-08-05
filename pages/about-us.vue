<script setup lang="ts">
import { useViewport } from '~/composables/useViewport';

const { t } = useI18n()
const { isSmaller: isMobile } = useViewport('lg');
const { isGreaterOrEqual: showPolygon } = useViewport('xl');

const image = {
  src: '/images/id.png',
  alt: 'id-image',
  maxWidth: '400px'
};

const teamOptions = [
  {
    name: 'Juan Cueli',
    role: 'aboutUs.juanRole',
    image: '/images/team/juan.png',
    alt: 'juan',
  },
  {
    name: 'Ezequiel Díaz',
    role: 'aboutUs.ezequielRole',
    image: '/images/team/ezequiel.png',
    alt: 'ezequiel',
  },
  {
    name: 'Rodrigo Díaz',
    role: 'aboutUs.rodrigoRole',
    image: '/images/team/rodrigo.png',
    alt: 'rodrigo',
  },
  {
    name: 'Martín Urteaga',
    role: 'aboutUs.martinURole',
    image: '/images/team/martin.png',
    alt: 'martin'
  },
  {
    name: 'Jorge Covello',
    role: 'aboutUs.jorgeRole',
    image: '/images/team/jorge.png',
    alt: 'jorge'
  }
  // {
  //   name: 'Martín Lejman',
  //   role: 'aboutUs.martinLRole',
  //   image: '/images/team/martinL.png',
  //   alt: 'martinL'
  // }
];

const sectionOptions = [
  {
    title: 'aboutUs.missionTitle',
    description: 'aboutUs.missionDetail',
    image: {
      src: '/images/puzzle.png',
      alt: 'puzzle-image',
      maxWidth: '262px'
    }
  },
  {
    title: 'aboutUs.valueTitle',
    description: 'aboutUs.valueDetail',
    image: {
      src: '/images/brujula.png',
      alt: 'brujula-image',
      maxWidth: '210px'
    }
  }
]

const polygons = [
  {
    height: '115px',
    width: '100px',
    top: '250px',
    right: '420px',
  },
  {
    height: '150px',
    width: '130px',
    top: '420px',
    right: '300px',
  },
  {
    height: '210px',
    width: '185px',
    top: '80px',
    right: '180px',
  },
  {
    height: '255px',
    width: '225px',
    top: '280px',
    right: '-20px',
  },
  {
    height: '170px',
    width: '150px',
    top: '600px',
    right: '100px',
  },
  {
    height: '100px',
    width: '90px',
    top: '700px',
    right: '350px',
  },
  {
    height: '90px',
    width: '80px',
    top: '840px',
    right: '250px',
  }
]
</script>

<template>
  <Head>
    <Title>{{ t('pages.aboutUs') }}</Title>
  </Head>
  <SectionImage
    class="pt-8"
    :title="t('aboutUs.title')"
    :subtitle="t('aboutUs.subtitle')"
    id="about-us-section"
    :image="image"
  />
  <ReSectionContainer background="/images/background/background-2.png">
    <div class="flex flex-column py-8 px-4">
      <ReTitleGradient
        class="align-self-center"
      >
        {{ t('aboutUs.ourStory') }}
      </ReTitleGradient>
      <div class="p-gradient-card mt-4">
        <div
          class="p-gradient-card-content relative"
          :class="{ 'p-container-min-h': showPolygon }"
        >
          <div
            :class="showPolygon ? 'col-6' : 'col-12'"
          >
            <ReTitleSpan
              color="black"
              font-weight="400"
            >
              {{ t('aboutUs.ourStoryDetail1') }}
              <br
                v-for="index in 2"
                :key="`${index}-id`"
              >
              {{ t('aboutUs.ourStoryDetail2') }}
              <br
                v-for="index in 2"
                :key="`${index}-alt`"
              >
              <div class="text-center">
                <ReImage
                  src="/images/sherlock-conaiisi.jpeg"
                  alt="sherlock-conaiisi"
                  max-width="500px"
                />
              </div>
              <br>
              {{ t('aboutUs.ourStoryDetail3') }}  
            </ReTitleSpan>
          </div>
          <template v-if="showPolygon">
            <RePolygon
              v-for="(item, index) in polygons"
              :key="index"
              :height="item.height"
              :width="item.width"
              :top="item.top"
              :right="item.right"
            />
          </template>
        </div>
      </div>
    </div>
  </ReSectionContainer>
  <ReSectionContainer background="/images/background/background-2.png">
    <div
      class="flex flex-column pb-8 px-2"
      :class="{ 'px-6': isMobile }"
    >
      <ReTitleGradient class="align-self-center mb-4">
        {{ t('aboutUs.meetOurTeam') }}
      </ReTitleGradient>
      <div
        class="flex flex-row flex-wrap justify-content-center gap-4 xl:gap-4"
        :class="{ 'mt-6': isMobile }"
      >
        <div
          class="flex flex-column align-items-center w-fit"
          :class="{ 'mx-8': !isMobile }"
          v-for="(member, index) in teamOptions"
          :key="`member-${index}`"
        >
          <ReImage
            :alt="member.alt"
            :src="member.image"
            width="150px"
            height="242px"
            :class="isMobile ? 'mt-0' : 'mt-4'"
          />
          <div class="hex-width text-center mt-4">
            <div>
              <ReTitleSpan
                class="primary mt-3 font-semibold"
                text-transform="uppercase"
              >
                {{ member.name }}
              </ReTitleSpan>
            </div>
            <div class="mt-2">
              <ReParagraphSpan>
                {{ t(member.role) }}
              </ReParagraphSpan>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ReSectionContainer>
  <OurValues />
  <ReSectionContainer background="/images/background/background-2.png">
    <div
      class="flex p-4 gap-8 justify-space-between"
      :class="{ 'flex-column': isMobile }"
    >
      <div
        class="p-gradient-card"
        v-for="(section, index) in sectionOptions"
        :key="`section-${index}`"
      >
        <div class="p-gradient-card-content-hovered flex flex-column justify-center align-items-center">
          <ReTitleGradient class="align-self-center">
            {{ t(section.title) }}
          </ReTitleGradient>
          <ReTitleSpan
            class="my-4"
            color="black"
          >
            {{ t(section.description) }}
          </ReTitleSpan>
          <ReImage
            :alt="section.image.alt"
            :src="section.image.src"
            :max-width="section.image.maxWidth"
          />
        </div>
      </div>
    </div>
  </ReSectionContainer>
  <ContactUs />
</template>

<style scoped>
.hex-width {
  max-width: 150px;
}
</style>