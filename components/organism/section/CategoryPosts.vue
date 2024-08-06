<script setup lang="ts">
const { t } = useI18n()
const recentPosts = ref([
  {
    title: 'blog.news.title',
    image: {
      src: '/images/posts/news.png',
      maxWidth: '110px',
      height: '100px'
    },
    items: [
      {
        text: 'blog.news.sherlock',
        route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6995398634041143296-kqQ7'
      }
    ]
  },
  {
    title: 'blog.projects.title',
    image: {
      src: '/images/posts/helmet.png',
      maxWidth: '130px',
      height: '58px'
    },
    items: [
      {
        text: 'blog.projects.hr',
        route: 'https://www.linkedin.com/feed/update/urn:li:activity:7008800849233633280/'
      },
      {
        text: 'blog.projects.sherlock',
        route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6994309011672068096-uj3V'
      }
    ]
  },
  {
    title: 'blog.individualJobs.title',
    image: {
      src: '/images/posts/hammer.png',
      maxWidth: '87px',
      height: '100px'
    },
    items: [
      {
        text: 'blog.individualJobs.nine',
        route: 'https://www.linkedin.com/posts/rebase-it_tech-sales-project-activity-7002987786941181952-cAVt'
      }
    ]
  },
  {
    title: 'blog.events.title',
    image: {
      src: '/images/posts/star.png',
      maxWidth: '95px',
      height: '90px'
    },
    items: [
      {
        text: 'blog.events.holidays',
        route: 'https://www.linkedin.com/posts/rebase-it_estamos-llegando-a-fin-de-a%C3%B1o-y-con-el-equipo-activity-7012159369505062912-0zSQ'
      }
    ]
  }
])
</script>

<template>
  <ReSectionContainer background="/images/background/background-2.png">
    <div class="py-8 px-4">
      <ReTitleGradient id="post-by-category">
        {{ t('blog.postsByCategory') }}
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
              {{ t(value.title) }}
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
              <NuxtLink
                :to="item.route"
                class="no-underline"
                target="_blank"
              >
                <ReParagraphSpan
                  class="primary p-gradient-card-content-span"
                  bold
                >
                  {{ t(item.text) }}
                </ReParagraphSpan>
              </NuxtLink>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ReSectionContainer>
</template>

<style lang="scss" scoped>
.no-underline {
  text-decoration: none
}
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
