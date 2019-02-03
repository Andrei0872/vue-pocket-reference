<template>
    <div>
        <!-- <button @click="show = !show">
            Toggle
        </button>
        <transition 
            name="slide-fade"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
            >
            <p v-if="show">Hello!</p>
        </transition> -->
        
        
        <!-- out-in - current element transitions first, then, when complete -->
        <!-- the new element transitions in -->
        <transition name="slide-fade" mode="out-in">
            <button v-if="!ok" key="off" @click="ok = !ok">Off</button>
            <button v-if="ok" key="on" @click="ok = !ok">On</button>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            ok: true
        }
    },
    // methods: {
    //         // --------
    // // ENTERING
    // // --------

    // beforeEnter: function (el) {
    //     // ...
    //     console.log('before enter')
    // },
    // // the done callback is optional when
    // // used in combination with CSS
    // enter: function (el, done) {
    //     // ...
    //     console.log('enter')
    //     done()
    // },
    // afterEnter: function (el) {
    //     // ...
    //     console.log('after enter')
    // },
    // enterCancelled: function (el) {
    //     // ...
    //     console.log('enter cancelled')
    // },

    // // --------
    // // LEAVING
    // // --------

    // beforeLeave: function (el) {
    //     // ...
    //     console.log('before leave')
    // },
    // // the done callback is optional when
    // // used in combination with CSS
    // leave: function (el, done) {
    //     // ...
    //     console.log('leave')
    //     done()
    // },
    // afterLeave: function (el) {
    //     // ...
    //     console.log('after leave')
    // },
    // // leaveCancelled only available with v-show
    // leaveCancelled: function (el) {
    //     // ...
    //     console.log('leave cancelled')
    // }
    // }
}
</script>


<style scoped>

.slide-fade-enter-active {
    transition: all .9s;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

/* 
v-leave-to : added when v-leave is removed

fade it to the right when in leaving phase

when in entering phase, start from the 'leaving' state
*/
.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    /* transform: translateX(10px); */
}

/* ================================ */

/* .simple-fade-enter-active, .simple-fade-leave-active {
    transition: opacity .6s;
}

.simple-fade-enter, .simple-fade-leave-to {
    opacity: 0;
} */

</style>
