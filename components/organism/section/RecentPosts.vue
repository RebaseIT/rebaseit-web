<script setup lang="ts">
import { useViewport } from "~/composables/useViewport";

const { isSmaller: isMobile } = useViewport('sm');
const recentPosts = ref([
  {
    title: 'Presentamos Shelock, la mejor respuesta para tu análisis de ciberseguridad',
    date: '23/03/23',
    image: {
      src: '/images/posts/sherlock-1.png'
    },
    route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6994309011672068096-uj3V'
  },
  {
    title: 'Si trabajás en RRHH, te invitamos a rellenar una breve encuesta',
    date: '17/03/23',
    image: {
      src: '/images/posts/megaphone.png'
    },
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7008800849233633280/'
  },
  {
    title: 'Programamos las luces de Nine Shopping en Moreno',
    date: '26/12/22',
    image: {
      src: '/images/posts/shopping.png'
    },
    route: 'https://www.linkedin.com/posts/rebase-it_tech-sales-project-activity-7002987786941181952-cAVt'
  },
  {
    title: 'Desde nuestro equipo te deseamos, ¡FELICES FIESTAS!',
    date: '25/12/22',
    image: {
      src: '/images/posts/xmas.png'
    },
    route: 'https://www.linkedin.com/posts/rebase-it_estamos-llegando-a-fin-de-a%C3%B1o-y-con-el-equipo-activity-7012159369505062912-0zSQ'
  },
  {
    title: 'Sherlock, TOP 6 mejores trabajos en Argentina!',
    date: '15/12/22',
    image: {
      src: '/images/posts/team.png'
    },
    route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6995398634041143296-kqQ7'
  }
])
</script>

<template>
  <ReSectionContainer background="/images/background/background-2.png">
    <div class="px-4">
      <ReTitleGradient>
        Posteos recientes
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
              {{ value.title }}
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
