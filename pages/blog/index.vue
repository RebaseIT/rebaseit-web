<script setup lang="ts">
import { useViewport } from "~/composables/useViewport";

const { t } = useI18n()
const { isSmaller: isMobile } = useViewport('lg');
const image = {
  src: '/images/news.png',
  alt: 'news-image',
  maxWidth: '350px'
};
</script>

<template>
  <Head>
    <Title>{{ t('pages.blog') }}</Title>
  </Head>
  <SectionImage
    class="pt-8"
    :title="t('blog.title')"
    :subtitle="t('blog.subtitle')"
    :image="image"
  />
  <ReSectionContainer class="bg-light-blue">
    <div
      class="flex justify-content-between py-8 px-4 gap-8"
      :class="{ 'flex-column align-items-center': isMobile }"
    >
      <div class="flex flex-column justify-space-between gap-3">
        <ReTitleGradient
          font-family="IBM Plex Mono"
          font-weight="600"
        >
          {{ t('blog.breakingNews') }}
        </ReTitleGradient>
        <ReTitleGradient>
          {{ t('blog.sherlockPresented') }}
        </ReTitleGradient>
        <ReTitleGradient
          font-weight="600"
          font-size="sm"
          class="align-self-end"
        >
          {{ t('blog.publishedOn') }}
        </ReTitleGradient>
        <NuxtLink to="/blog/sherlock">
          <ReButton
            :label="t('projects.knowMore')"
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
  <CategoryPosts />
  <RecentPosts />
  <ContactUs />
</template>
