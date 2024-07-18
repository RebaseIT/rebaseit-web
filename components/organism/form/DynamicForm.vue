<script setup>
import { useForm } from 'vee-validate';

const { t } = useI18n()
const { handleSubmit } = useForm();
const emit = defineEmits(['form']);
const props = defineProps({
  fields: {
    type: Array,
    required: true
  }
});
const form = ref(
  props.fields.reduce((acc, item) => {
    acc[item.model] = '';
    return acc;
  }, {})
);
const submitAfterValidateForm = handleSubmit((form) => {
  emit('form', form);
});
</script>
<template>
  <form
    @submit="submitAfterValidateForm"
    class="flex flex-column gap-2"
  >
    <template
      v-for="(field, index) in fields"
      :key="index"
    >
      <ReInputText
        v-if="field.type === 'text'"
        v-model="form[field.model]"
        :id="field.id"
        :label="t(field.label)"
        :validators="field.validators"
      />
      <ReTextarea
        v-if="field.type === 'textarea'"
        v-model="form[field.model]"
        :id="field.id"
        :label="t(field.label)"
        :validators="field.validators"
      />
    </template>
    <ReButton
      type="submit"
      label="Enviar"
    />
  </form>
</template>
