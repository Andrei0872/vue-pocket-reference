<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <button @click="test(19)">Assign value 19</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            // This works as well
            // ...mapActions('counter',{
            //     increment: 'increment',
            //     decrement: 'decrement'
            // })
            ...mapActions('counter', ['increment', 'decrement', 'test'])
        }
    }
</script>