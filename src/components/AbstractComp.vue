
<script>
export default {
    abstract: true,
    render () {
        try {
            if (this.$slots.default.length > 1) 
                throw 'Only one child component!'

            return this.$slots.default[0];
        } catch (err) {
            throw new Error(err)
        }
    },
    mounted () {
        this.observer = new IntersectionObserver(entries =>  {
            this.$emit(entries[0].isIntersecting ? 'intersect-enter' : 'intersect-leave', [entries[0]])
        })

        // Wait for the next tick so the child element has been updated & rendered
        this.$nextTick(() => {
            this.observer.observe(this.$slots.default[0].elm);
        });
    },
    destroyed () {
        this.observer.disconnect();
    }
}
</script>
