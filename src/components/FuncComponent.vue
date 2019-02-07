    
    <!-- <div>
        <h3 @click="$emit('customEvent', 'andrei')">I'm NOT a functional component.Click me!</h3>
    </div> -->

<!-- <template functional> 
    <div>
        <button @click="listeners['customEvent']('andrei')">Click me!</button>
    </div>
</template>
-->

<script>

const call = (fn, ...args) => context => fn(...args, context)

export default {
    functional: true,
    render (h, { listeners }) {
        return h('button', {
            class: { redText: true },
            on: {
                click: call(listeners.customEvent, 'andrei!')
            }
        }, 'click me!')
    }
}
</script>

<style scoped>
    .redText {
        color: red;
    }
</style>