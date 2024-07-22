<script setup>
import { useField } from 'vee-validate'
import { isString } from 'lodash'

const emit = defineEmits(['update:modelValue'])
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
})

const { value: inputValue, errorMessage, handleBlur } = useField(props.id, value => {
  return props.validators.map(validator => validator(value)).find(element => isString(element)) || true
})
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
    @update:model-value="emit('update:modelValue', $event)"
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
    border-color: var(--primary-color) !important;
  }
}
</style>
