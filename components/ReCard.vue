<script setup lang="ts">
const hovered = ref(false);
const handleMouseOver = () => {
  hovered.value = true;
};
const handleMouseOut = () => {
  hovered.value = false;
};

const props = defineProps({
  value: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div
    class="p-gradient-card"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @click="handleMouseOver"
  >
    <div
      class="p-gradient-card-content flex flex-column align-items-center justify-content-center p-4"
    >
      <ReImage
        class="p-gradient-card-content-image"
        :alt="value.title"
        :src="hovered ? value.img.srcAlt : value.img.src"
        :width="value.img.width"
        :height="value.img.height"
        :style="{ marginBottom: value.img.mb }"
      />
      <ReTitleSpan
        class="p-gradient-card-content-title mt-3 font-bold text-center"
        :color="!hovered ? 'var(--primary-color)' : 'white'"
      >
        {{ value.title }}
      </ReTitleSpan>
      <ReSubtitle
        class="text-white text-center mt-4"
        v-show="hovered"
      >
        {{ value.description }}
      </ReSubtitle>
    </div>
  </div>
</template>

<style scoped>
.p-gradient-card-content {
  transition: all .3s ease-in-out;
  height: 26rem !important;
  width: 12rem !important;
}
.p-gradient-card-content:hover,
.p-gradient-card-content:active,
.p-gradient-card-content:focus {
  background: linear-gradient(180deg, #0470B8 0%, #88ABFE 100%);
  .p-gradient-card-content-image,
  .p-gradient-card-content-title {
    transition: all .3s ease;
    transform: translateY(-20px);
  }
}
</style>

