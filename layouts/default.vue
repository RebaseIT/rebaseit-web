<script setup>
</script>
<template>
  <Header />
  <div class="padding-top-82">
    <div class="scrollable-body">
      <slot />
      <Toast />
      <Footer />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.padding-top-82 {
  padding-top: 82px;
}
.scrollable-body {
  overflow-y: auto;
  max-height: calc(100vh - 82px);
}
</style>