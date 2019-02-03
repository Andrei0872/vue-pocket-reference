<template>
    <div>
        <input type="checkbox" :value="value" :checked="shoudBeChecked" @change="updateCheckbox">
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
// By default: `value` and `change`
export default {
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        modelValue: {
            default: false
        },
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        },
        value: [String]
    },
    methods: {
        updateCheckbox (ev) {
            const isChecked = ev.target.checked;

            if (this.modelValue instanceof Array) {
                const copyArr = [... this.modelValue]

                if(isChecked) {
                    copyArr.push(this.value)
                } else {
                    const removedIndex = copyArr.indexOf(this.value)
                    copyArr.splice(removedIndex, 1)
                }
                
                this.$emit('change', copyArr)
            } else {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue)
            }

        }   
    },
    computed: {
        shoudBeChecked () {
            if(this.modelValue instanceof Array) {
                return this.modelValue.includes(this.value)
            }

            // The value of the single checkbox is converted to boolean
            return this.modelValue === this.trueValue   
        }
    },    
}
</script>
