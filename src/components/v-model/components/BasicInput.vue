<template>
    <div>
        <input type="text" v-model="content" @input="handleInput" placeholder="type smth..">
    </div>
</template>

<script>
export default {
    // By default, the propert assign is `value` and the event is `input`
    props: ['value'],
    data() {
        return {
            content: ''
        }
    },
    methods: {
        handleInput () {
            this.$emit('input', this.content)
        },
    }
}
</script>
