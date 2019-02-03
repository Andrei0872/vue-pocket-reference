<template>
    <div>
        <button @click="shuffle">Shuffle</button>
        <br>
        <transition-group
            name="shuffle"
            class="container"
            tag="div"
        >
            <div
                v-for="card in cards"
                :key="card.id"
                class="cell"
            >
                {{ card.number }}
            </div>
        </transition-group>
    </div>
</template>

<script>
import * as _ from 'lodash'

export default {
    data() {
        return {
            cards: Array.apply(null, { length: 81 })
                        .map((_, index) => ({
                            id: index,
                            number: index % 9 + 1
                        }))
        }
    },
    methods: {
        shuffle() {
            this.cards = _.shuffle(this.cards)
        }
    }
}
</script>

<style scoped>

    .container {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        margin: 20px auto;
    }

    .cell {
        width: 30px;
        height: 30px;
        border: 1px solid #aaa;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: -1px;
    }

    .cell:nth-child(3n) {
        margin-right: 0;
    }

    .shuffle-move {
        transition: all 1s;
    }
</style>
