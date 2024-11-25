<script setup>
const { t } = useI18n()
const { isSmaller: isMobile } = useViewport('lg')
const route = useRoute()
const router = useRouter()
const menuItems = ref([
  {
    label: 'header.aboutUs',
    url: '/about-us',
    command: () => router.push('/about-us')
  },
  {
    label: 'header.products',
    url: '/products',
    command: () => router.push('/products')
  },
  {
    label: 'header.services',
    url: '/services',
    command: () => router.push('/services')
    // items: [
    //   {
    //     label: 'header.servicesSubTitles.frontend',
    //     url: '/services/frontend',
    //     command: () => router.push('/services/frontend')
    //   },
    //   {
    //     label: 'header.servicesSubTitles.backend',
    //     url: '/services/backend',
    //     command: () => router.push('/services/backend')
    //   }
    // ]
  },
  {
    label: 'header.blog',
    url: '/blog',
    command: () => router.push('/blog')
  },
  {
    src: '/images/flags/Flag_EN.svg',
    isLanguage: true,
    value: 'en',
    class: 'language-item'
  },
  {
    isButton: true,
    buttonProps: {
      onClick: () => scrollToSection('contact-us-section'),
      label: t('homePage.contactUs'),
    }
  }
])

const scrollToSection = (id) => {
  if (document.getElementById(id)) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<template>
  <div class="re-header">
    <Menubar
      :model="menuItems"
      class="menu-bar px-4"
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
            max-width="110px"
          />
        </NuxtLink>
      </template>
      <template #item="{ item, hasSubmenu }">
        <template v-if="item.isLanguage">
          <LanguageSelector 
            @click.stop="() => {}"
          />
        </template>
        <template v-else-if="hasSubmenu">
          <div class="d-flex align-items-center justify-space-between">
            <div>
              {{ t(item.label) }}
            </div>
            <div>
              <i class="pi menu-bar__dropdown-icon--down pi-angle-down ml-2" />
              <i class="pi menu-bar__dropdown-icon--up pi-angle-up ml-2" />
            </div>
          </div>
        </template>
        <ReButton
          v-else-if="item.isButton"
          v-bind="item.buttonProps"
          :class="isMobile ? 'w-full' : '' "
        />
        <span
          v-else
          :class="{ 'current-page': item.url === route.path}"
        >
          <span>{{ t(item.label) }}</span>
        </span>
      </template>
    </Menubar>
  </div>
</template>

<style lang="scss" scoped>
.re-header {
  display: flex;
  border-radius: 0;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.4);
  background-color: var(--surface-b);
  position: fixed;
  width: 100%;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100;
  height: 82px;
}
.menu-bar {
  :deep(li) {
    cursor: pointer;
  }
  :deep(.p-menuitem-link) {
    padding: 0 !important;
  }
  :deep(.p-submenu-list) {
    position: absolute;
    background-color: var(--surface-b);
    margin-top: 12px;
    border-radius: 8px;
    width: initial;
    @media (max-width: 960px) {
      position: relative;
      margin-top: 0px;
      margin-bottom: 16px;
      margin-left: 16px;
      margin-right: 16px;
    }
    .p-menuitem {
      list-style-type: none;
    }
    .p-menuitem-link {
      padding: 0 !important;
    }
  }
  &:deep(.p-menuitem-content) {
    border-radius: 8px;
    padding: 0.75rem 1.25rem;
    color: var(--primary-color) !important;
    & span:not(.p-button-label) {
      color: var(--primary-color) !important;
    }
    &:has(.re-language-selector){
      padding: 0;
    }
  }
  &:deep(.p-menubar-root-list > .p-menuitem-content:hover) {
    background: #e9ecef;
  }
  &:deep(.p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) .p-menuitem-content:hover) {
    background: #e9ecef;
    border-radius: 8px;
  }
  &:deep(.p-menuitem-content:has(.current-page)) {
    border-radius: 8px;
    background: var(--third-color) !important;
  }
  &:deep(.p-menuitem-active .menu-bar__dropdown-icon--down){
    display: none;
  }
  &:deep(.p-menuitem:not(.p-menuitem-active ) .menu-bar__dropdown-icon--up){
    display: none;
  }
}

.menu-bar {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  justify-content: space-between;
  border: none;
  z-index: 2;
  position: relative;
  &:deep(.p-menubar-root-list) {
    transition: all .5s ease-in-out;
    z-index: 1 !important;
    animation: fadeIn .5s ease-in-out forwards;
    @media (max-width: 960px) {
      margin-top: 0px;
    }
  }
  a {
    text-decoration: none;
  }
  &:deep(.p-menubar-button) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:deep(.p-icon) {
    transform: scale(1.5);
  }
  &:deep(.p-menuitem) {
    .flag {
      margin-top: 5px;
      @media (max-width: 960px) {
        margin-top: 0px;
      }
    }
  }
  &:deep(.p-menuitem-content) {
    border-radius: 8px;
    margin: 0 4px;
    @media (max-width: 960px) {
      margin-top: 16px;
      margin-bottom: 16px;
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  &:deep(.p-menubar-button) {
    box-shadow: none !important;
    width: 4rem;
    height: 4rem;
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
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

:deep(.p-menuitem.language-item) .p-menuitem-content {
  background: white !important;
}
:deep(.p-menuitem) .p-menuitem-content {
  margin-top: 4px;
  margin-bottom: 4px;
}

</style>
