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
})
const inputValue = ref(props.modelValue);
const error = ref(false);
const errorMessage = ref('');

const errorMessages = {
  required: 'Este campo es requerido',
  minLength: 'El campo debe contener al menos 10 caracteres'
};

const fieldsValidation = {
  textarea: () => {
    const regex = /^.{10,}$/;
    if (!regex.test(inputValue.value)) {
      error.value = true;
      errorMessage.value = errorMessages.minLength;
    } else {
      error.value = false;
      errorMessage.value = '';
    }
  }
};

const validateInput = () => {
  if (props.isRequired && !inputValue.value) {
    error.value = true;
    errorMessage.value = errorMessages.required;
  } else {
    return fieldsValidation.textarea();
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
    font-size="12px"
    color="red"
  >
    {{ errorMessage }}
  </ReTitleSpan>
</template>

