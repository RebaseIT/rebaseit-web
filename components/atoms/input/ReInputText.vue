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
  fieldType: {
    type: String,
    default: 'text'
  },
  validators: {
    type: Array,
    default: () => []
  }
})

const inputValue = ref(props.modelValue);
const error = ref(false);
const errorMessage = ref('');

const errorMessages = {
  required: 'Este campo es requerido',
  email: 'Por favor, introduce un correo electrónico válido',
  phone: 'Por favor, introduce un número de teléfono válido',
  text: 'El campo debe contener al menos 3 caracteres'
};

const validateInput = () => {
  if (props.isRequired && !inputValue.value) {
    error.value = true;
    errorMessage.value = errorMessages.required;
  } else {
    return validateError(props.validators, inputValue.value, props.fieldType);
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
  <InputText
    @blur="validateInput"
    type="text"
    class="re-input-text"
    :class="{ 'p-invalid': error }"
    aria-describedby="text-error"
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
