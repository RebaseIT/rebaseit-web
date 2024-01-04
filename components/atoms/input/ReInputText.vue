<script setup>
const emit = defineEmits(['update:modelValue', 'invalid']);
const props = defineProps({
  label :{
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  validators: {
    type: Array,
    default: () => []
  }
})

const inputValue = ref(props.modelValue);
const errorMessage = ref('');

const validateInput = () => {
  errorMessage.value = '';
  validateError(props.validators, inputValue.value);
}

const validateError = (validators, input) => {
  errorMessage.value = validators.map(validator => validator(input)).find(Boolean);
}

watch(inputValue, (newVal) => {
  validateInput();
  emit('update:modelValue', newVal);
});
</script>

<template>
  <label>{{ label }}</label>
  <InputText
    @blur="validateInput"
    type="text"
    class="re-input-text"
    :class="{ 'p-invalid': !!errorMessage }"
    aria-describedby="text-error"
    v-model="inputValue"
  />
  <ReTitleSpan
    v-if="errorMessage"
    font-weight="400"
    font-size="xs"
    color="red"
  >
    {{ errorMessage }}
  </ReTitleSpan>
</template>

<style lang="scss" scoped>
.re-input-text {
  &:focus{
    border-color: transparent !important;
  }
  &:deep(.p-inputtext) {
    border-color: var(--primary-color) !important;
  }
}
</style>
