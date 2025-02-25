<script setup>
import ReParagraphSpan from '~/components/atoms/typography/ReParagraphSpan.vue';
import SelectButton from 'primevue/selectbutton';
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted } from 'vue';

const { isSmaller: isMobile } = useViewport('lg')
const { locale } = useI18n()
const languages = ref([
  { optionLabel: '/images/flags/Flag_ES.svg', optionValue: 'es' },
  { optionLabel: '/images/flags/Flag_EN.svg', optionValue: 'en' }
])
const selectedLanguage = computed({
  get: () => {
    return languages.value.find(language => language.optionValue === locale.value) || languages.value[0];  
  },
  set: (value) => {
    locale.value = value.optionValue
    localStorage.setItem('locale', value.optionValue);
  }
})
// TODO seems like primevue does not supports Listbox and panel in mobile view, refactor that once its fixed
onMounted(() => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    locale.value = savedLocale;
  }
});
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
    class="flex align-items-center justify-content-center w-100"
  >
    <SelectButton
      v-model="selectedLanguage"
      :options="languages"
      option-label="optionLabel"
      data-key="optionValue"
      class="w-100 select-option-button"
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
  background-color: var(--surface-b);
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
  color: black!important;
}
.select-option-button{
  display: contents;
}
:deep(.select-option-button) .p-button.p-component {
  display: block!important;
  width: 100%;
}

:deep(.select-option-button) .p-button.p-component.p-highlight{
  background: var(--third-color);
  border-color: var(--third-color);
  margin: 8px;
}

</style>