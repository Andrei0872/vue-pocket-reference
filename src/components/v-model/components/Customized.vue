<template>
    <div>
        <h3>Customized v-model</h3>
        <input type="email" @blur="handleBlur($event)">
        <br>
        <!-- <input type="text" @focus="handleFocus($event.target.value)"> -->
    </div>
</template>

<script>
export default {
    props: {
        'hidden': [Object]
    },
    // Modifying the default behaviour
    model: {
        prop: 'hidden',
        event: 'blur',
    },
    methods: {
        handleBlur (e) {
            this.$emit('blur', { email: e.target.value, age: '321' })
        },
        // handleFocus (value) {
        //     console.log('value', value)
        //     this.$emit('focus', { age: value, email: '' })
        // }
    }
}
</script>
