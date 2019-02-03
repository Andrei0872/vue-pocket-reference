<template>
    <div>
        <h3>Content editable</h3>
        <div class="editor" contenteditable="contenteditable" @input="handleInput"></div>
    </div>
</template>

<script>
export default {
    methods: {
        handleInput () {
            console.dir(this.$el.innerText)
            this.$emit('input', this.$el.innerText)
        }
    },
    model: {
        prop: 'myProp',
        event: 'input'
    }
}
</script>

<style scoped>
    
    .editor {
        width: 300px;
        height: 300px;
        border: 1px solid black;
        display: block;
        margin: 0 auto;
    }
</style>

