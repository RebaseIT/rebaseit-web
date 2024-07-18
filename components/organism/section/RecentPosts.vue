<script setup lang="ts">
import { useViewport } from "~/composables/useViewport";

const { t } = useI18n()
const { isSmaller: isMobile } = useViewport('sm');
const recentPosts = ref([
  {
    title: 'blog.recentPosts.remoteOnsiteIntegration',
    date: '15/07/2024',
    image: {
      src: '/images/posts/integracionDeEquiposRemotosOnsite.png'
    },
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7218632141075599360/?actorCompanyId=89238225'
  },
  {
    title: 'blog.recentPosts.agilePositiveImpact',
    date: '08/07/2024',
    image: {
      src: '/images/posts/agileSuImpactoPositivoEnElDesarrolloDeSW.png'
    },
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7216094172334682114/?actorCompanyId=89238225'
  },
  {
    title: 'blog.recentPosts.staticSiteHosting',
    date: '01/07/2024',
    image: {
      src: '/images/posts/hosteandoUnSitioEstatico.png'
    },
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7213558557256945666/'
  },
  {
    title: 'blog.recentPosts.staffAugmentation',
    date: '24/06/2024',
    image: {
      src: '/images/posts/staffAugmentation.png'
    },
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7211026648056418305/'
  },
  {
    title: 'blog.recentPosts.systemScalability',
    date: '17/06/2024',
    image: {
      src: '/images/posts/escalabilidadDeSistemas.png'
    },
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7208482742165028867/'
  },
  {
    title: 'blog.recentPosts.automatedFunctionalTests',
    date: '10/06/2024',
    image: {
      src: '/images/posts/pruebasFuncionalesAutomatizadas.png'
    },
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7205949532885442560/'
  }
])
</script>

<template>
  <ReSectionContainer background="/images/background/background-2.png">
    <div class="px-4">
      <ReTitleGradient>
        {{ t('blog.recentPosts.title') }}
      </ReTitleGradient>
      <div class="card-container flex flex-wrap gap-3 mt-4">
        <a
          :href="value.route"
          target="_blank"
          class="card-content cursor-pointer flex justify-space-between p-3 gap-6"
          v-for="(value, index) in recentPosts"
          :key="index"
        >
          <div class="flex flex-column">
            <ReTitleSpan
              class="primary"
              text-transform="uppercase"
              font-size="xs"
              font-weight="600"
            >
              {{ value.date }}
            </ReTitleSpan>
            <ReTitleSpan
              class="primary mt-3 font-semibold"
              text-transform="uppercase"
              font-size="xs"
              font-weight="700"
            >
              {{ t(value.title) }}
            </ReTitleSpan>
          </div>
          <ReImage
            :src="value.image.src"
            :alt="value.title"
            :max-width="isMobile ? '80px' : '140px'"
            :height="isMobile ? '80px' : 'auto'"
          />
        </a>
      </div>
    </div>
  </ReSectionContainer>
</template>

<style lang="scss" scoped>
.card-container {
  justify-content: center;
  @media (min-width: 1315px) {
    justify-content: flex-start;
  }
  .card-content {
    background-color: var(--light-blue);
    border-radius: 14px;
    width: 100%;
    max-width: 598px;
    transition: all .5s ease-in-out;
    &:hover {
      background-color: var(--third-color);
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
