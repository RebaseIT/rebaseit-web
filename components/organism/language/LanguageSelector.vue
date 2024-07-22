<script setup>
import ReParagraphSpan from '~/components/atoms/typography/ReParagraphSpan.vue';

const { locale } = useI18n()
const languages = ref([
  { optionLabel: '/images/flags/Flag_ES.svg', optionValue: 'es' },
  { optionLabel: '/images/flags/Flag_EN.svg', optionValue: 'en' }
])
const selectedLanguage = computed({
  get: () => {
    return languages.value.find(language => language.optionValue === locale.value) || languages[0]
  },
  set: (value) => {
    locale.value = value.optionValue
  }
})
</script>
<template>
  <Dropdown
    v-model="selectedLanguage"
    :options="languages"
    option-label="optionLabel"
    :option-value="option => option"
    class="re-language-selector"
  >
    <template #value="{ value }">
      <ReImage
        :src="value.optionLabel"
        class="cursor-pointer re-language-selector--image"
        alt="language"
      />
    </template>
    <template #option="{ option }">
      <div class="d-flex align-items-center">
        <ReImage
          :src="option.optionLabel"
          class="cursor-pointer re-language-selector--image mr-2"
          alt="language"
        />
        <ReParagraphSpan>
          {{ option.optionValue.toUpperCase() }}
        </ReParagraphSpan>
      </div>
    </template>
  </Dropdown>
</template>
<style lang="scss" scoped>
.re-language-selector {
  background: transparent;
  border: none;
  display: flex !important;
  flex-direction: row-reverse;
  padding: 0rem 1rem;
  &:deep(.p-dropdown-trigger){
    width: auto;
    display: flex;
    align-items: center;
  }
}
.re-language-selector--image {
  width: auto !important;
}
</style>