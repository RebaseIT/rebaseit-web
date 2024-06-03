<script setup lang="ts">
const recentPosts = ref([
  {
    title: 'Noticias',
    image: {
      src: '/images/posts/news.png',
      maxWidth: '110px',
      height: '100px'
    },
    items: [
      {
        text: '- Sherlock, TOP 6 mejores trabajos en Argentina!',
        route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6995398634041143296-kqQ7'
      }
    ]
  },
  {
    title: 'Proyectos',
    image: {
      src: '/images/posts/helmet.png',
      maxWidth: '130px',
      height: '58px'
    },
    items: [
      {
        text: '- Si trabajas en RRHH, te invitamos a rellenar una breve encuesta',
        route: 'https://www.linkedin.com/feed/update/urn:li:activity:7008800849233633280/'
      },
      {
        text: '- Presentamos Sherlock, la mejor respuesta para tu análisis de ciberseguridad',
        route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6994309011672068096-uj3V'
      }
    ]
  },
  {
    title: 'Trabajos particulares',
    image: {
      src: '/images/posts/hammer.png',
      maxWidth: '87px',
      height: '100px'
    },
    items: [
      {
        text: '- Programamos las luces de Nine Shopping en Moreno',
        route: 'https://www.linkedin.com/posts/rebase-it_tech-sales-project-activity-7002987786941181952-cAVt'
      }
    ]
  },
  {
    title: 'Eventos',
    image: {
      src: '/images/posts/star.png',
      maxWidth: '95px',
      height: '90px'
    },
    items: [
      {
        text: '- Desde nuestro equipo te deseamos, ¡FELICES FIESTAS!',
        route: 'https://www.linkedin.com/posts/rebase-it_estamos-llegando-a-fin-de-a%C3%B1o-y-con-el-equipo-activity-7012159369505062912-0zSQ'
      }
    ]
  }
])
</script>

<template>
  <ReSectionContainer background="/images/background/background-2.png">
    <div class="py-8 px-6">
      <ReTitleGradient>
        Posteos por categoría
      </ReTitleGradient>
      <div class="flex flex-wrap justify-content-center gap-4 mt-4">
        <div
          class="p-gradient-card max-w-17rem"
          v-for="(value, index) in recentPosts"
          :key="`recent-${index}`"
        >
          <div class="p-gradient-card-content h-full flex flex-column p-3 gap-4 align-items-center">
            <ReTitleGradient
              class="text-center"
              font-size="lg"
            >
              {{ value.title }}
            </ReTitleGradient>
            <div class="flex min-h-7">
              <ReImage
                class="m-auto"
                :src="value.image.src"
                :alt="value.title"
                :max-width="value.image.maxWidth"
                :height="value.image.height"
              />
            </div>
            <div
              v-for="(item, idx) in value.items"
              :key="idx"
            >
              <a
                :href="item.route"
                target="_blank"
              >
                <ReParagraphSpan
                  class="primary p-gradient-card-content-span"
                  bold
                >
                  {{ item.text }}
                </ReParagraphSpan>
              </a>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ReSectionContainer>
</template>

<style lang="scss" scoped>
.p-gradient-card {
  .p-gradient-card-content {
    background-color: var(--light-blue);
    &:hover {
      background-color: var(--third-color);
      transition: all .5s ease-in-out;
    }
  }
}
hr {
  border: none;
  border-top: 1px solid var(--primary-color)
}
</style>
