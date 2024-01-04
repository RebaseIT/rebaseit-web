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
  isRequired: {
    type: Boolean,
    default: true
  },
  validators: {
    type: Array,
    default: () => []
  },
  fieldType: {
    type: String,
    default: 'text'
  }
})
const inputValue = ref(props.modelValue);
const error = ref(false);
const errorMessage = ref('');

const errorMessages = {
  required: 'Este campo es requerido',
  textarea: 'El campo debe contener al menos 10 caracteres'
};

const validateInput = () => {
  if (props.isRequired && !inputValue.value) {
    error.value = true;
    errorMessage.value = errorMessages.required;
  } else {
    return validateError(props.validators, inputValue.value, 'textarea');
  }
}

const validateError = (validators, input, key) => {
  validators.map(validator => {
    if (validator(input)) {
      error.value = true;
      errorMessage.value = errorMessages[key];
    } else {
      error.value = false;
      errorMessage.value = '';
    }
  })
}

watch(inputValue, (newVal) => {
  validateInput();
  emit('update:modelValue', newVal);
  emit('invalid', error.value);
});
</script>

<template>
  <label>{{ label }}</label>
  <Textarea
    @blur="validateInput"
    rows="4"
    cols="30"
    :class="{ 'p-invalid': error }"
    v-model="inputValue"
  />
  <ReTitleSpan
    v-if="error"
    font-weight="400"
    font-size="xs"
    color="red"
  >
    {{ errorMessage }}
  </ReTitleSpan>
</template>

