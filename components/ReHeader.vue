<script setup>
const items = ref([
  {
    label: 'Conocenos',
    to: '/home'
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
      class="menu-bar px-8"
    >
      <template #start>
        <img
          alt="logo"
          src="/assets/logo-header.png"
          height="60"
          width="98"
        >
      </template>
    </Menubar>
  </div>
</template>

<style scoped lang="scss">

.menu-bar {
  opacity: 0.8;
  display: flex; 
  border-radius: 0; 
  height: 60px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  &:deep(.p-menuitem-text) {
    color: #0470B8 !important;     
  } 
 
}
.re-header {
  position: fixed;
  width: 100%; 
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1;  
}

</style>