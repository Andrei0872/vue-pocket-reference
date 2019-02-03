
<script>
export default {
    props: {
        on: {
            type: Boolean,
            default: false
        }
    },
    render () {
        // Invoke the default scoped slot passing through any slot props, the returns the result
        return this.$scopedSlots.default({
            on: this.currentState,
            setOn: this.setOn,
            setOff: this.setOff,
            toggle: this.toggle,
        })
    },
    data () {
        return { currentState: this.on }
    },
    methods: {
        setOn () {
            this.currentState = true
        },
        setOff () {
            this.currentState = false
        },
        toggle () {
            this.currentState = !this.currentState
        }
    },
}
</script>
