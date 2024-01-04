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
  <Textarea
    @blur="validateInput"
    rows="4"
    cols="30"
    :class="{ 'p-invalid': !!errorMessage }"
    v-model="inputValue"
  />
  <ReTitleSpan
    v-if="errorMessage"
    font-weight="400"
    font-size="12px"
    color="red"
  >
    {{ errorMessage }}
  </ReTitleSpan>
</template>

