<template>
    <div>
        <input type="text" v-model="query" placeholder="Search Names">
        <transition-group 
            name="search" 
            tag="ul"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
        >
            <li 
                v-for="(name, index) in fileterdList" 
                :key="name"
                :data-index="index"
            >
                {{ name }}
            </li>
        </transition-group>
    </div>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
    data() {
        return {
            query: '',
            names: [
                'Gatej Andrei',
                'John Doe',
                'Jane Doe',
                'Ill Bill',
                'Eminem'
            ]
        }
    },
    computed: {
        fileterdList() {
            return this.names.filter(name => name.toLowerCase().includes(this.query.toLowerCase()))
        }
    },
    methods: {
        beforeEnter(elem) {
            elem.style.opacity = 0;
            elem.style.height = 0;
        },
        enter(elem, done) {
            const delay = elem.getAttribute("data-index")
            setTimeout(() => {
                Velocity(elem, {
                    opacity: 1,
                    height: '1.6rem'
                }, {
                    complete: done
                });
            }, delay);
        },
        leave(elem, done) {
            const delay = elem.getAttribute("data-index")
            setTimeout(() => {
                Velocity(elem, {
                    opacity: 0,
                    height: 0
                }, {
                    complete: done
                });
            }, delay);
        }
    }
}
</script>


<style scoped>
</style>
