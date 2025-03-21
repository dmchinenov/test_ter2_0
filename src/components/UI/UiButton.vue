<template>
  <button
  :disabled="props.disabled"
  @click="click" class="ui-button"
  :title="props.disabled ? disabledText : ''"
  :class="{
    'ui-button_disabled': props.disabled,
    'ui-button_loading': props.isLoading
  }">
    <div v-if="isLoading" class="ui-button__loader">
      <div class="ui-button__spinner"/>
    </div>
    <slot v-else />
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  disabledText: {
    type: String,
    default: null,
  }
});

const emit = defineEmits(['click']);

const click = () => {
  if (props.disabled) return;
  emit('click')
}
</script>

<style lang="scss" scoped>
.ui-button {
  padding: 10px 10px;
  color: $button-primary-text;
  background: $button-primary-bg;
  border-radius: 4px;
  min-width: 100px;
  width: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  transition: background 0.1s;

  &_disabled {
    cursor: not-allowed;
    background: $button-disabled-bg;
    color: $button-disabled-text;
  }

  &_loading {
    background: $button-disabled-bg;
  }

  &:hover:not(.ui-button_disabled, .ui-button_loading) {
    background: rgba($primary-color, 0.6);
    color: $button-secondary-text;
  }
  &:active:not(.ui-button_disabled, .ui-button_loading) {
    background: rgba($primary-color, 0.8);
    color: $button-secondary-text;
    transition: none;
  }

  .ui-button__loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .ui-button__spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba($text-color, 0.5);
      border-top: 2px solid transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg); // Начальное положение
    }
    100% {
      transform: rotate(360deg); // Конечное положение (полный оборот)
    }
  }
}
</style>