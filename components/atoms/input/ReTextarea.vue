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
  <Textarea
    :id="id"
    v-model="inputValue"
    rows="4"
    cols="30"
    :class="{ 'p-invalid': errorMessage }"
    @blur="handleBlur"
  />
  <small
    class="p-error"
    id="text-error"
  >
    {{ errorMessage || '&nbsp;' }}
  </small>
</template>

