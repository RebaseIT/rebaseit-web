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
        route: '/blog/sherlock'
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
        route: '/blog/rrhh'
      },
      {
        text: '- Presentamos Shelock, la mejor respuesta para tu análisis de ciberseguridad',
        route: '/blog/sherlock'
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
        route: '/blog/nine-shopping'
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
        text: '- Desde nuestro equipo te deseamos, FELICES FIESTAS',
        route: '/blog/holiday'
      }
    ]
  }
])
</script>

<template>
  <ReSectionContainer image="url(/images/section_products_bg.png)">
    <div class="py-8 px-6">
      <ReTitleGradient>
        Posteos por categoría
      </ReTitleGradient>
      <div class="flex flex-wrap justify-content-center gap-4 mt-4">
        <div class="p-gradient-card max-w-17rem" v-for="value in recentPosts" :key="value.title">
          <div class="p-gradient-card-content h-full flex flex-column p-3 gap-4 align-items-center">
            <ReTitleGradient
              class="text-center"
              font-size="25px"
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
            <div v-for="item in value.items" :key="item.text">
              <a :href="item.route">
                <ReParagraphSpan
                    class="p-gradient-card-content-span"
                    color="var(--primary-color)"
                    bold
                >
                  {{ item.text }}
                </ReParagraphSpan>
              </a>
              <hr class="text-blue-400">
            </div>
          </div>

        </div>
      </div>
    </div>
  </ReSectionContainer>
</template>

<style lang="scss" scoped>
.p-gradient-card {
  min-height: 540px;
  .p-gradient-card-content {
    background-color: var(--light-blue);
    .p-gradient-card-content-span {
      text-decoration: underline;
    }
  }
}
</style>
