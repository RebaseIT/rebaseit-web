<script setup>
const items = ref([
  {
    label: 'Conocenos',
    to: '/about-us'
  },
  {
    label: 'Proyectos',
    to: '/projects'
  },
  {
    label: 'Servicios',
    to: '/services'
  },
  {
    label: 'Blog',
    to: '/blog'
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
    </Menubar>
  </div>
</template>

<style scoped lang="scss">
.re-header {
  opacity: 0.8;
  display: flex;
  border-radius: 0;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.4);
  background-color: var(--surface-b);
}
.menu-bar {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  justify-content: space-between;
  border: none;
  &:deep(.p-menuitem-text) {
    color: #0470B8 !important;
  }
}
.re-header {
  position: fixed;
  width: 100%;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100;
}
</style>
