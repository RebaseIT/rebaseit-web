<script setup>
const menus = ref([
  {
    title: "Home",
    to: "/home"
  },
  {
    title: "Conocenos",
    to: "/",
  },
  {
    title: "Proyectos",
    to: "/",
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
    to: "/",
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
    to: "/",
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

</script>
<template>
  <div class="footer">
    <div class="row flex p-3">
      <div class="col-4 px-8">
        <div>
          <img
            alt="logo"
            src="/assets/logo-footer.png"
            height="70"
            width="130"
          >
        </div>
        <div class="py-4">
          <ReTitleSpan>
            ¿Tenés un proyecto?
          </ReTitleSpan>
          <ReTitleSpan bold>
            Hablemos
          </ReTitleSpan>
        </div>
        <div class="py-4">
          <img
            alt="logo"
            src="/assets/logo-insta.svg"
            height="28"
            width="28"
          >
          <img
            class="mx-4"
            alt="logo"
            src="/assets/logo-linkedin.svg"
            height="28"
            width="28"
          >
        </div>
      </div>
      <div class="col-8 flex justify-content-evenly">
        <div
          class="py-4"
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
            <NuxtLink
              :to="menu.to"
              class="text-link"
            >
              <ReSubtitle>
                {{ submenu.title }}
              </ReSubtitle>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
    background: linear-gradient(135deg, #0470B8 46.44%, #88ABFE 100%);
}
/*
ESTO NO TIENE QUE QUEDAR ACA MOVER A UN COMPONENTE
*/
.text-link {
  text-decoration: none;
}
/*
ESTO NO TIENE QUE QUEDAR ACA Y EL NOMBRE ESTA MAL --> MOVER A ARCHIVO GENERICO
*/
.text-color {
  background-color: #FFFFFF;
}
</style>
