<template>
  <div class="ui-input">
    <input
    :type="props.type"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    @input="setValue"
    class="ui-input__input"
    :class="{ 'invalid': errorText }" />

    <p class="ui-input__error-text">{{ props.errorText }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Введите текст'
  },
  errorText: {
    type: String,
    default: null,
  },
  hasValidation: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'checkValue']);

const setValue = (event) => {
  emit('update:modelValue', event.target.value);
  if (props.hasValidation) emit('checkValue')
}

</script>

<style lang="scss" scoped>
.ui-input {
  position: relative;
  display: flex;
  width: 100%;

  .ui-input__input {
    padding: 10px 10px;
    color: $button-primary-text;
    background: $input-bg-color;
    border: 1px solid $input-border-color;
    border-radius: 6px;
    min-width: 180px;
    outline: none;
    transition: background 0.1s;
    width: 100%;
  }

  .ui-input__error-text {
    position: absolute;
    top: 40px;
    left: 2px;
    font-size: 13px;
    color: $input-error-text;
    word-break: break-word;
  }
 }
</style>