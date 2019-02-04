
<script>
// You can't return JSX inside a template

export default {
    props: {
        renderFn: Function
    },
    data: () => ({
        x: 0,
        y: 0,
        name: 'Andrei'
    }),
    methods: {
        handleClick (ev) {
            this.x = ev.clientX;
            this.y = ev.clientY;
        }
    },
    render(h) {
        return (
            <div style={{ color: 'green' }} onMousemove={this.handleClick}>
                { this.$props.renderFn(this) }
            </div>
        )
    },
    created () {
        console.log(this)
        console.log(this.$props)
    }
}
</script>