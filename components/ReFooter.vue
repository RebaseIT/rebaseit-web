<script setup>
import { useViewport } from '~/composables/useViewport';
const menus = ref([
  {
    title: "Home",
    to: "/"
  },
  {
    title: "Conocenos",
    to: "/about-us",
  },
  {
    title: "Proyectos",
    to: "/projects",
    menus: [
      {
        title: "Sherlock",
        to: ""
      },
      {
        title: "Rebase Connect",
        to: ""
      },
    ]
  },
  {
    title: "Servicios",
    to: "/services",
    menus: [
      {
        title: "Frontend",
        to: ""
      },
      {
        title: "Backend",
        to: ""
      },
      {
        title: "Database",
        to: ""
      },
      {
        title: "Cloud Providers",
        to: ""
      },
      {
        title: "DevOps Tools",
        to: ""
      },
      {
        title: "Integration tech",
        to: ""
      },
    ]
  },  {
    title: "Blog",
    to: "/blog",
    menus: [
      {
        title: "Todos los artículos",
        to: ""
      },
      {
        title: "Noticias",
        to: ""
      },
      {
        title: "Proyectos",
        to: ""
      },
      {
        title: "Trabajos particulares",
        to: ""
      },
      {
        title: "Eventos",
        to: ""
      },
    ]
  }

])
const { isMobile } = useViewport('sm');
</script>
<template>
  <div class="footer">
    <div class="footer-content row flex px-6 gap-4" :class="{ 'flex-column': isMobile }">
      <div class="w-full footer-logo-container">
        <div>
          <NuxtLink to="/" class="text-link">
            <ReImage alt="logo-footer" src="/images/logo-footer.png" max-width="170px" />
          </NuxtLink>
        </div>
        <div class="py-4 gap-3">
          <ReTitleSpan big-text>
            ¿Tenés un proyecto?
          </ReTitleSpan>
          <br>
          <ReTitleSpan bold big-text>
            Hablemos
          </ReTitleSpan>
        </div>
        <div class="py-4 gap-3">
          <!-- TODO: add instagram link
          <a href="https://www.linkedin.com/company/rebase-it/">
            <img
              alt="logo"
              src="/assets/logo-insta.svg"
              height="28"
              width="28"
          </a>
          >-->
          <a href="https://www.linkedin.com/company/rebase-it/">
            <ReImage
                alt="linkedin"
                src="/images/logo-linkedin.svg"
                max-width="32px"
            />
          </a>
        </div>
      </div>
      <div class="w-full gap-3 flex md:justify-content-evenly flex-wrap" :class="{ 'justify-content-start': isMobile }">
        <div
          class="py-4 gap-3 flex flex-column"
          :key="`${index}-${menu.title}`"
          v-for="(menu, index) in menus"
        >
          <NuxtLink
            :to="menu.to"
            class="text-link"
          >
            <ReTitle>
              {{ menu.title }}
            </ReTitle>
          </NuxtLink>
          <div
            class="py-1"
            :key="`${submenu.title}`"
            v-for="(submenu) in menu.menus"
          >
            <div>
              <ReSubtitle>
                {{ submenu.title }}
              </ReSubtitle>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
    background: linear-gradient(135deg, #0470B8 46.44%, #88ABFE 100%);
  .footer-content {
    max-width: 1240px;
    margin: 0 auto;
  }
  .footer-logo-container {
    min-width: 230px;
    max-width: 240px;
  }
}
.text-link {
  text-decoration: none;
}
</style>
