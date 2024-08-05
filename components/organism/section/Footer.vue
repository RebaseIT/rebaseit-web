<script setup>
const { t } = useI18n()
import { useViewport } from '~/composables/useViewport';
const menus = ref([
  {
    title: "footer.home",
    to: "/"
  },
  {
    title: "footer.aboutUs",
    to: "/about-us",
  },
  {
    title: "footer.projects",
    to: "/projects",
    menus: [
      {
        title: "footer.sherlock",
        to: "/projects"
      },
      {
        title: "footer.rebaseConnect",
        to: "/projects"
      },
    ]
  },
  {
    title: "footer.services",
    to: "/services",
    menus: [
      {
        title: "footer.frontend",
        to: "/services"
      },
      {
        title: "footer.backend",
        to: "/services"
      },
      {
        title: "footer.database",
        to: "/services"
      },
      {
        title: "footer.cloudProviders",
        to: "/services"
      },
      {
        title: "footer.devOpsTools",
        to: "/services"
      },
      {
        title: "footer.integrationTech",
        to: "/services"
      },
    ]
  },  {
    title: "footer.blog",
    to: "/blog",
    menus: [
      {
        title: "footer.allArticles",
        to: "/blog"
      },
      {
        title: "footer.news",
        to: "/blog"
      },
      {
        title: "footer.projects",
        to: "/blog"
      },
      {
        title: "footer.individualJobs",
        to: "/blog"
      },
      {
        title: "footer.events",
        to: "/blog"
      },
    ]
  }
])
const { isSmaller: isMobile } = useViewport('sm')
const scrollToSection = () => {
  document.getElementById('contact-us-section').scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <div class="footer py-5">
    <div
      class="footer-content row flex px-4 gap-4"
      :class="{ 'flex-column': isMobile }"
    >
      <div class="w-full footer-logo-container">
        <div>
          <NuxtLink
            to="/"
            class="text-link"
          >
            <ReImage
              alt="logo-footer"
              src="/images/logo-footer.png"
              max-width="170px"
            />
          </NuxtLink>
        </div>
        <div
          class="flex gap-2 w-full"
          :class="isMobile ? 'flex-row justify-content-between' : 'flex-column'"
        >
          <div class="py-4 gap-3">
            <ReTitleSpan
              class="text-white"
              font-size="lg"
            >
              {{ t('footer.gotAProject') }}
            </ReTitleSpan>
            <br>
            <ReTitleSpan
              class="text-white"
              font-size="lg"
              font-weight="400"
              is-clickable
              @click="scrollToSection"
            >
              {{ t('footer.letsTalk') }}
            </ReTitleSpan>
          </div>
          <div
            class="py-4 gap-3"
            :class="{ 'flex align-items-center': isMobile }"
          >
            <!-- TODO: add instagram link
              <a href="https://www.linkedin.com/company/rebase-it/">
                <img
                alt="logo"
                src="/assets/logo-insta.svg"
                height="28"
                width="28"
              </a>
            >-->
            <a
              href="https://www.linkedin.com/company/rebase-it/"
            >
              <ReImage
                alt="linkedin"
                src="/images/logo-linkedin.svg"
                max-width="32px"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        class="w-full gap-3 flex md:justify-content-evenly flex-wrap"
        :class="{ 'justify-content-start flex-column': isMobile }"
      >
        <div
          class="gap-3 flex flex-column"
          :class="isMobile ? 'py-2' : 'py-4'"
          :key="`menu-${index}`"
          v-for="(menu, index) in menus"
        >
          <NuxtLink
            :to="menu.to"
            class="text-link"
          >
            <ReTitle
              class="text-white"
              is-clickable
            >
              {{ t(menu.title) }}
            </ReTitle>
          </NuxtLink>
          <template v-if="!isMobile">
            <div
              class="py-1"
              v-for="(submenu, idx) in menu.menus"
              :key="`submenu-${idx}`"
            >
              <NuxtLink
                :to="submenu.to"
                class="text-link"
              >
                <div>
                  <ReSubtitle is-clickable>
                    {{ t(submenu.title) }}
                  </ReSubtitle>
                </div>
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
    background: linear-gradient(135deg, var(--primary-color) 46.44%, var(--secondary-color) 100%);
  .footer-content {
    max-width: 1320px;
    margin: 0 auto;
  }
  .footer-logo-container {
    min-width: 230px;
    max-width: 330px;
  }
}
.text-link {
  text-decoration: none;
}
</style>
