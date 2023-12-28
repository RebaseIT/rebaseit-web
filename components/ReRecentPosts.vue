<script setup lang="ts">
import { useViewport } from "~/composables/useViewport";

const { isSmaller: isMobile } = useViewport('sm');
const recentPosts = ref([
  {
    title: 'Presentamos Shelock, la mejor respuesta para tu análisis de ciberseguridad',
    date: '23/03/23',
    image: {
      src: '/images/posts/sherlock-1.png'
    }
  },
  {
    title: 'Si trabajas en RRHH, te invitamos a rellenar una breve encuesta',
    date: '17/03/23',
    image: {
      src: '/images/posts/megaphone.png'
    }
  },
  {
    title: 'Programamos las luces de Nine Shopping en Moreno',
    date: '26/12/22',
    image: {
      src: '/images/posts/shopping.png'
    }
  },
  {
    title: 'Desde nuestro equipo te deseamos, FELICES FIESTAS!',
    date: '25/12/22',
    image: {
      src: '/images/posts/xmas.png'
    }
  },
  {
    title: 'Sherlock, TOP 6 mejores trabajos en Argentina!',
    date: '15/12/22',
    image: {
      src: '/images/posts/team.png'
    }
  }
])
</script>

<template>
  <ReSectionContainer image="url(/images/section_products_bg.png)">
    <div class="px-6">
      <ReTitleGradient>
        Posteos recientes
      </ReTitleGradient>
      <div class="card-container flex flex-wrap gap-3 mt-4">
        <div class="card-content flex justify-space-between p-3 gap-6" v-for="value in recentPosts" :key="value.title">
          <div class="flex flex-column">
            <ReTitleSpan
              color="var(--primary-color)"
              text-transform="uppercase"
              font-size="12px"
              font-weight="600"
            >
              {{ value.date }}
            </ReTitleSpan>
            <ReTitleSpan
              class="mt-3 font-semibold"
              color="var(--primary-color)"
              text-transform="uppercase"
              font-size="12px"
              font-weight="700"
            >
              {{ value.title }}
            </ReTitleSpan>
          </div>
          <ReImage
            :src="value.image.src"
            :alt="value.title"
            :max-width="isMobile ? '80px' : '140px'"
          />
        </div>
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
}

</style>
