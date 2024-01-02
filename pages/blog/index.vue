<script setup lang="ts">
import { useViewport } from "~/composables/useViewport";

const { isSmaller: isMobile } = useViewport('lg');
const title = 'Publicaciones';
const subtitle = 'Enterate de todas las noticias que Rebase IT tiene para vos.';
const image = {
  src: '/images/news.png',
  alt: 'news-image',
  maxWidth: '350px'
};
const sectionTop = { title, subtitle, image };
</script>

<template>
  <ReSectionImage
    class="pt-8"
    v-bind="sectionTop"
  />
  <ReSectionContainer
    bg-color="var(--light-blue)"
    background=""
  >
    <div
      class="flex justify-content-between py-8 px-6 gap-8"
      :class="{ 'flex-column align-items-center': isMobile }"
    >
      <div class="flex flex-column justify-space-between gap-3">
        <ReTitleGradient
          font-family="IBM Plex Mono"
          font-weight="600"
        >
          Última noticia:
        </ReTitleGradient>
        <ReTitleGradient>
          Presentamos Sherlock, la mejor respuesta para tu análisis de ciberseguridad
        </ReTitleGradient>
        <ReTitleGradient
          font-weight="600"
          font-size="15px"
          class="align-self-end"
        >
          Publicado el 23/03/23
        </ReTitleGradient>
        <NuxtLink to="/blog/sherlock">
          <ReButton
            label="Conocé más"
            class="max-w-12rem"
          />
        </NuxtLink>
      </div>
      <ReImage
        src="/images/sherlock.png"
        alt="sherlock-image"
        max-width="480px"
      />
    </div>
  </ReSectionContainer>
  <ReCategoryPosts />
  <ReRecentPosts />
  <ReContactUs />
</template>
