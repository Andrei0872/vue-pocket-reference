<script>

const HIDDEN = 0;
const VISIBLE = 1;
const EDITABLE = 2;

export default {
  name: 'permission-comp',
  props: {
    permissionType: Number,
  },
  render(h) {
    if (this.$slots.default.length > 1) return;

    // tag - the wrapper tag
    const { tag, children } = this.$slots.default[0];
    const { permissionType } = this.$props;


    const result = !this.hasPermission(permissionType, HIDDEN)
      ? h(
        `${tag}`, this.hasPermission(permissionType, EDITABLE)
          ? children
          : this.filterByPermission(h, children), children,
      )
      : null;

    return result;
  },

  methods: {
    hasPermission(value, status) {
      return value === status;
    },

    filterByPermission(h, children) {
      const elem = children.find(
        child => child.data !== undefined
                    && child.data.staticClass === 'it-depends',
      );

      elem && (elem.componentOptions.propsData.isDisabled = true);
    },
  },
};
</script>
