<script setup>
import { useField } from 'vee-validate'

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
  return props.validators.map(validator => validator(value)).find(element => typeof element === 'string') || true
})
</script>

<style scoped>
.resizable-none {
  resize: none;
}
</style>

<template>
  <label :for="id">{{ label }}</label>
  <Textarea
    :id="id"
    v-model="inputValue"
    rows="4"
    cols="30"
    class="resizable-none"
    :class="{ 'p-invalid': errorMessage }"
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

