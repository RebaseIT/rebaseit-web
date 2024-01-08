<script setup>
import { useField } from 'vee-validate';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  validators: {
    type: Array,
    default: () => []
  }
});

const { value: inputValue, errorMessage, handleBlur } = useField(props.id, value => {
  const error = props.validators.map(validator => validator(value)).find(Boolean);
  return error || true;
});

watch(inputValue, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>


<template>
  <label :for="id">{{ label }}</label>
  <InputText
    :id="id"
    v-model="inputValue"
    type="text"
    :class="{ 'p-invalid': errorMessage }"
    aria-describedby="text-error"
    @blur="handleBlur"
  />
  <small
    class="p-error"
    id="text-error"
  >
    {{ errorMessage || '&nbsp;' }}
  </small>
</template>

<style lang="scss" scoped>
.re-input-text {
  &:focus{
    border-color: transparent !important;
  }
  &:deep(.p-inputtext) {
    border-color: #0470B8 !important;
  }
}
</style>
