<template>
  <div>
    <!-- //* Transition single elements/components -->
    <!-- transition wrapper component - entering/leaving transitions -->
    <!-- 
      conditional rendering: v-if
      conditional display: v-show
      dynamic components
      component root nodes
     -->
     <div id="demo">
         <button v-on:click="show = !show">
          Toggle
        </button>
        <transition name="fade">
          <p v-if="show">Hello!</p>
        </transition>
     </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>

/* 
fade-enter-active - active state; applied during the entire entering phase
                  - added before the element is inserted, removed when the transition finished
                  - here you can define duration, delay etc for the entering transition

fade-leave-active - active state for leave; applied during the entire leaving phase
                  - added when leave transition is triggered, removed when the animation/transition ends
                  - here you can define duratiom delay etc for the leave transition
*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

/* 
  fade-enter - starting state; before the element is inserted ; removed after 1 frame
  fade-leave-to - ending state for leave, added one frame after a leaving transitions is triggered;
                - removed when the transition/animation ends
 */
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

