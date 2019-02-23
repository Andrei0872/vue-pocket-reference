
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
    },
  },
  functional: true,
  render(h, { props, parent }) {
    const { data: countries } = props;

    return (
            <select onChange={parent.changeSelectedCountry}>
                {
                    countries.map(({ id, name }) => <option value={ id }>{ name }</option>)
                }
            </select>
    );
  },
};
</script>
