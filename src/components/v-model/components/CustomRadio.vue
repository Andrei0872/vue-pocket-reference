<template>
    <div>
        <input type="radio" :checked="shouldBeChecked" :value="value" @change="updateInput">
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    props: ['modelValue', 'value'],
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    computed: {
        shouldBeChecked () {
            return this.modelValue === this.value
        }
    },
    methods: {
        updateInput () {
            this.$emit('change', this.value)
        }
    },
}
</script>
