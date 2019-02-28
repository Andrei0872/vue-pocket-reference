<script>
export default {
  functional: true,

  render(h, { children, props: { isDisabled } }) {
    return h('button',
      { domProps: { disabled: isDisabled } },
      children);
  },

  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
