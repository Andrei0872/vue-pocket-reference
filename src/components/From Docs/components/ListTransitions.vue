<template>
    <div>

        <!-- List Entering/Leaving Transitions -->
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>

        <transition-group name="list" tag="p">
            <span v-for="item in items" :key="item" class="list-item">
                {{ item }}
            </span>
        </transition-group>
        <br><hr><br>

        <!-- List Move Transitions -->
        <!-- transition-group - brings the ``v-move class`` -->
        <!-- which is added when items are changing positions -->
        <button @click="shuffle">Shuffle</button>
        <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" :key="item">
                {{ item }}</li>
        </transition-group>
    </div>
</template>


<script>
import * as _ from 'lodash';

/* 
transitions modes - not available, bcs we're no longer alternating between mutually exclusive elements
*/

export default {
   data() {
        return {
            items: [1,2,3,4,5,6,7,8,9],
            //? nextNum: this.getItemsLen()         
            nextNum: 10
        }
    },
    methods: {
        add() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        },
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        shuffle() {
            this.items = _.shuffle(this.items)
        }
    }
}
</script>

<style scoped>

    ul, li {
        margin: 0;
        padding: 0;
    }

    /* List Entering/Leaving Transitions */
    .list-item {
        display: inline-block;
        margin-right: 10px;
        transition: all 1s;
    }

    /* .list-enter-active, .list-leave-active {
        transition: all 1s;
    } */

    .list-leave-active {
        position: absolute;
        color: red !important;
    }

    /* 
    .list-enter - the below props are set at the first frame, then
                  this class is removed
     */
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    /* ========================================== */

    /* List Move Transitions */

    .flip-list-move {
        transition: transform 1s;
        color: red !important;
    }

</style>
