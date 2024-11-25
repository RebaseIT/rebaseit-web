<script setup>
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('md');
const { t } = useI18n()
const { products } = useProducts()
const productsToShow = products.filter(project => project.content && project.isInternalProject)
</script>

<template>
  <div class="container">
    <TabView
      class="card-tab-view"
    >
      <TabPanel
        v-for="projectToShow in productsToShow"
        :key="projectToShow"
      >
        <template #header>
          <div class="header-img">
            <ReImage
              :src="projectToShow.image.src"
              max-width="200px"
            />
          </div>
        </template>
        <div
          class="flex align-items-center lg:p-4"
          :class="{ 'flex-column p-1': isMobile }"
        >
          <img
            class="content-img gray-border"
            :src="projectToShow.imageContent.src"
          >
          <div
            class="max-w-24rem"
            :class="isMobile ? 'ml-0 mt-4' : 'ml-6'"
          >
            <span class="add-white-spaces">
              {{ t(projectToShow.content) }}
            </span>
          </div>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>


<style scoped lang="scss">
.add-white-spaces{
  white-space: pre-line;
}
.gray-border {
  border: 1px solid #E0E2F5;
}
.container {
  max-width: 1320px;
  margin: 0 auto;
  .card-tab-view {
    position: relative;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    border-radius: 8px;
    padding: 2px;
    background: linear-gradient(var(--secondary-color),var(--primary-color));
    &:deep(.p-tabview-nav){
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border: none;
      border: 0;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &:deep(.p-tabview-ink-bar) {
      position: absolute;
    }
    &:deep(.p-tabview-nav-content){
      border-radius: 8px 8px 0 0;
      outline: none !important;
      box-shadow: none !important;
    }
    &:deep(.p-tabview-panels){
      font-family: Raleway;
      font-size: var(--font-size-md)
    }
    &:deep(.p-tabview-nav-link){
      background: transparent !important;
      border: 0 !important;
      padding: 8px !important;
      box-shadow: none !important;
    }
    &:deep(.p-tabview-header){
      display: flex;
      justify-content: center;
      width: 100%;
      border-bottom: 0;
      background-color: var(--surface-a);
    }
    &:deep(.p-highlight){
      border: 0;
      border-bottom: 2px solid var(--secondary-color);
      background: rgba(242, 250, 255, 1);
    }
    &:deep(.p-tabview){
      border: 0 !important;
    }
    .content-img {
      border-radius: 10px;
      width: 100%;
      max-width: 700px
    }
    &:deep(.p-tabview-header){
      border-bottom: 2px solid var(--secondary-color);
      background: rgba(242, 250, 255, 1);
    }
    &:deep(.p-highlight){
      background: var(--surface-a);
    }
    &:deep(.p-highlight[data-pc-index="0"][data-pc-section="header"]){
      border-bottom: 0;
      border-right: 2px solid var(--secondary-color);
      border-radius: 0 6px 0 0;;
      background-color: var(--surface-a);
    }
    &:deep(.p-highlight[data-pc-index="1"][data-pc-section="header"]){
      border-bottom: 0;
      border-left: 2px solid var(--secondary-color);
      border-right: 2px solid var(--secondary-color);
      border-radius: 6px 6px 0 0;
      background-color: var(--surface-a);
    }
    &:deep(.p-highlight[data-pc-index="2"][data-pc-section="header"]){
      border-bottom: 0;
      border-left: 2px solid var(--secondary-color);
      border-radius: 6px 0 0 0;
      background-color: var(--surface-a);
    }
  }
}
.p-tabview-nav-link:focus,
p-tabview-nav-link:active {
  background-color: rebeccapurple;
  box-shadow: none !important;
}
</style>
