<script setup>
import ReParagraphSpan from '~/components/atoms/typography/ReParagraphSpan.vue';
import SelectButton from 'primevue/selectbutton';

const { isSmaller: isMobile } = useViewport('lg')
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
// TODO seems like primevue does not supports Listbox and panel in mobile view, refactor that once its fixed
</script>
<template>
  <Dropdown
    v-if="!isMobile"
    v-model="selectedLanguage"
    :options="languages"
    option-label="optionLabel"
    toggleable
    :option-value="option => option"
    class="re-language-selector"
  >
    <template #value="{ value }">
      <ReImage
        :src="value.optionLabel"
        class="cursor-pointer re-language-selector--image ml-1"
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
  <div
    v-else
    class="flex align-items-center justify-content-center"
  >
    <SelectButton
      v-model="selectedLanguage"
      :options="languages"
      option-label="optionLabel"
      data-key="optionValue"
    >
      <template #option="slotProps">
        <i>
          <ReImage
            :src="slotProps.option.optionLabel"
            class="cursor-pointer re-language-selector--image mr-2"
            alt="language"
          />
          <span :class="{'selected-option-text': slotProps.option === selectedLanguage}">
            {{ slotProps.option.optionValue.toUpperCase() }}
          </span>
        </i>
      </template>
    </SelectButton>
  </div>
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

.menu-bar .p-menuitem-content .selected-option-text {
  color: white!important;
}
</style>