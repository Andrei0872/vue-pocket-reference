<template>
    <div>
        <button @click="show = !show">
            Toggle
        </button>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css=false
        >
            <p v-if="show">Hello!</p>
        </transition>
    </div>
</template>

<script>
import Velocity from 'velocity-animate';

/* 
When using JavaScript-only transitions, the done() cbs are required
otherwise the hooks will be called synchronously and the transition will finish immediately
*/

export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        beforeEnter(elem) {
            elem.style.opacity = 0;
        },
        enter(elem, done) {
            Velocity(elem, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
            Velocity(elem, { fontSize: '1em' }, { complete: done })
        },
        leave(elem, done) {
            Velocity(elem, { translateX: '15px', rotateZ: '50deg' }, { duration: 600})
            Velocity(elem, { rotateZ: '100deg' }, { loop: 2 });
            Velocity(elem, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    }
}
</script>