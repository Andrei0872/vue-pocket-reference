<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Value is: {{ value }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types.js';

    export default {
        computed: {
            ...mapGetters('counter', {
                counter: 'doubleCounter',
                value: 'currentValue'
        })
        }
    }
</script>