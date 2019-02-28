<template>
    <button :disabled="isDisabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
