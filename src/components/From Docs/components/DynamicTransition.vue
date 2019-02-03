<template>
    <div>
        FadeIn: <input type="range" v-model="fadeInRange" min="0" :max="maxFadeDuration">
        <br>
        FadeOut: <input type="range" v-model="fadeOutRange" min="0"
        :max="maxFadeDuration">
        <hr>

        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
            :css="false"
        >
            <!-- false->true: entering phase -->
            <!-- true->false: leaving phase -->
            <p v-if="show">Hello!</p>
        </transition>

        <!-- stop: display the other button -->
        <!-- show: hide the paragraph above -->
        <button v-if="!stop" @click="stop = true">
            Stop
        </button>
        <!-- display the button above and stop the animation of the paragraph -->
        <button v-else @click="stop = false, show = false">
            Start the magic!
        </button>
    </div>
</template>


<script>
import Velocity from 'velocity-animate'

export default {
    data() {
        return {
            show: true,
            fadeInRange: 1000,
            fadeOutRange: 1000,
            maxFadeDuration: 1500,
            stop: true,
            ok: true,
            firstClick: true
        }
    },
    methods: {
        beforeEnter(elem) {
            // vm.show = true
            elem.style.opacity = 0;
        },
        enter(elem, done) {
            const vm = this
            Velocity(elem, {
                // Display the elem after vm.fadeInRange ms 
                opacity: 1,
                translateX: vm.stop ? '0px' : '30px' // This will be applied if the stop btn has been pressed during the leaving phase
            }, {
                duration: vm.fadeInRange,
                complete() {
                    // After the elem is displayed
                    done()
                    // Invoke the leaving phase if the stop btn hasn't been pressed
                    // If we're at this phase(entering) and the stop btn is pressed
                    // it won't trigger the leaving phase
                    if(!vm.stop) return vm.show = false
                    
                    // This will get executed if the stop btn has been pressed during the entering phase
                    Velocity(elem, {
                        translateX: '0px'
                    }, {
                        duration: vm.fadeInRange,
                        complete: done
                    })
                }
            })
        },
        leave(elem, done) {
            const vm = this
            Velocity(elem, {
                // Being the leaving phase, we want to hide the element after vm.fadeOutRange ms
                opacity: 0,
                translateX: '-30px'
            }, {
                duration: vm.fadeOutRange,
                complete() {
                    // After the elem is hidden
                    done()
                    console.log(vm.stop)
                    // Invoke the entering phase
                    // If we're at this phase(leaving) and the stop btn is pressed
                    // it will trigger the entering phase, but the entering phase won't trigger this one
                    vm.show = true
                }
            })
        },
        beforeLeave(elem) {
            console.log('before leaving')
            // if(!this.firstClick)
            //     elem.style.transform = "translateX(30px)"
            // else this.firstClick = false
        }
    }
}
</script>
