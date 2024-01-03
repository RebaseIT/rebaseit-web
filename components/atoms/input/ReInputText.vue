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

const fieldsValidation = {
  text: () => {
    const regex = /.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*/;
    if (!regex.test(inputValue.value)) {
      error.value = true;
      errorMessage.value = errorMessages.text;
    } else {
      error.value = false;
      errorMessage.value = '';
    }
  },
  email: () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(inputValue.value)) {
      error.value = true;
      errorMessage.value = errorMessages.email;
    } else {
      error.value = false;
      errorMessage.value = '';
    }
  },
  phone: () => {
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(inputValue.value)) {
      error.value = true;
      errorMessage.value = errorMessages.phone;
    } else {
      error.value = false;
      errorMessage.value = '';
    }
  }
}

const validateInput = () => {
  if (props.isRequired && !inputValue.value) {
    error.value = true;
    errorMessage.value = errorMessages.required;
  } else {
    return fieldsValidation[props.fieldType]();
  }
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
    font-size="12px"
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
    border-color: #0470B8 !important;
  }
}
</style>
