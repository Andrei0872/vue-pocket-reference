<template>
    <div>
        <!-- are applied the same way as transitions -->
        <!-- //! v-enter is not removed immediately after the element is inserted -->
        <!-- but on an //* animationend event -->
        <button @click="show = !show">
            Toggle
        </button>
        <transition name="bounce" appear>
            <p v-if="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, hic.</p>
        </transition>
    </div>
</template>


<script>

export default {
    data() {
        return {
            show: true
        }
    }
}
</script>

<style scoped>

/* 
Obs: 
these 2 will be applied until the animation phase(entering/leaving) ends
because v-enter-to - is added after the element is inserted(at the same time v-enter is removed), and removed when animation ends
*/
.bounce-enter-to {
    color: green !important;
}
.bounce-leave-to {
    color: red !important;
}

.bounce-enter-active {
    animation: bounce_anim .5s;
}

.bounce-leave-active {
    animation: bounce_anim .5s reverse;
}

@keyframes bounce_anim {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
