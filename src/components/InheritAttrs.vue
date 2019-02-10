<template>
    <div>
        <div :style="divStyle"></div>
        <!-- Apply the attributes directly using the computed values from $attrs -->
        <textarea v-bind="textareaAttrs"></textarea>
    </div>
</template>

<script>
export default {
    // Do not apply the attributes by default
    inheritAttrs: false,
    computed: {
        divStyle () {
            return this.$attrs.divStyle 
        },
        textareaAttrs () {
            return { rows: this.$attrs.rows }
        }
    },
    created () {
        console.log(this.$attrs)
    }
}
</script>