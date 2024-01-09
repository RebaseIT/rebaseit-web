<script setup>
const route = useRoute()
const items = ref([
  {
    label: 'Conocenos',
    url: '/about-us'
  },
  {
    label: 'Proyectos',
    url: '/projects'
  },
  {
    label: 'Servicios',
    url: '/services'
  },
  {
    label: 'Blog',
    url: '/blog'
  }
])
</script>

<template>
  <div class="re-header">
    <Menubar
      :model="items"
      class="menu-bar px-6"
    >
      <template #start>
        <NuxtLink
          to="/"
          class="text-link"
        >
          <ReImage
            class="cursor-pointer"
            alt="logo"
            src="/images/logo-header.png"
            max-width="130px"
          />
        </NuxtLink>
      </template>
      <template #item="{ item, props }">
        <NuxtLink v-if="item.url" v-slot="{ href, navigate }" :to="item.url" custom>
          <a
            :class="{ 'current-page': item.url === route.path }"
            :href="href"
            v-bind="props.action"
            @click="navigate"
          >
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </NuxtLink>
      </template>
    </Menubar>
  </div>
</template>

<style lang="scss" scoped>
.re-header {
  opacity: 0.8;
  display: flex;
  border-radius: 0;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.4);
  background-color: var(--surface-b);
  position: fixed;
  width: 100%;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100;
}
.menu-bar {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  justify-content: space-between;
  border: none;
  a {
    text-decoration: none;
  }
  &:deep(.p-menubar-button) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:deep(.p-menuitem-content) {
    border-radius: 8px;
    margin: 0 4px;
    a {
      color: var(--primary-color) !important;
    }
    .current-page {
      border-radius: 8px;
      background: var(--third-color) !important;
    }
  }
  @media (min-width: 961px) {
    align-items: center;
    padding: 0.5rem;
    background: var(--surface-b);
    border-radius: 6px;
    &:deep(.p-menubar-button) {
      display: none
    }
    &:deep(.p-menubar-root-list) {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      list-style-type: none !important;
    }
  }
}
</style>
