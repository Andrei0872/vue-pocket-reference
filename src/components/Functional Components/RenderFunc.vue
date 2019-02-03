
<script>
    import Test from './Test.vue';

    export default {
        props: ['items'],
        render (h) {
            const items = this.$props.items.map((item, index) => h('div', {
                on: {
                    click: this.func
                },
                attrs: {
                    'data-index': index
                }
            }, [h('b', item.title),' ', h('i', item.img)]))
            
            let self = this;

            const result = this.selected ? h('Test', { 
                props: { details: this.info }, 
                on: { // This will be eventually used by the 'Test' component
                    click: function() { self.selected = !self.selected } 
                    } 
                }) : h('div',[items]);

            const transition = h('transition', {
                 props: { name: "fade", mode: "out-in" } 
                }, [result] );
            
            return transition
        },
        methods: {
            // Update the DOM 
            func(e) {
                const index = e.currentTarget.getAttribute('data-index')
                this.info = this.items[index]
                this.info.index = index
                this.selected = !this.selected
            },
            testFunc() {
                this.selected = !this.selected
            }
        },
        data() {
            return {
                info: {},
                selected: false
            }
        },
        components: {
            Test
        }
    }
</script>

<style >
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s ease;
    }

    .fade-leave-to {
        opacity: 0;
    }
</style>