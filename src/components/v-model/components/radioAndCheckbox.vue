<template>
    <div>
        <input type="radio" value="radio1" v-model="radio">
        <input type="radio" value="radio2" v-model="radio">
        <input type="radio" value="radio3" :checked="radio === 'radio3'" @change="e => radio = e.target.value">
        <br>
        <!-- Use an array in order to get multiple values -->
        <input type="checkbox" value="check1" v-model="checkbox">
        <input type="checkbox" value="check3" v-model="checkbox">
        <input type="checkbox" value="check2" v-model="checkbox">

        <p>{{ checkbox }}</p>
        <p>{{ radio }}</p>

        <br>
        <h3>Custom radio and checkbox</h3>

        <custom-checkbox v-model="customCheckbox" value="value1">Value1</custom-checkbox> 
        <custom-checkbox v-model="customCheckbox" value="value2">Value2</custom-checkbox> 
        <custom-checkbox v-model="customCheckbox" value="value3">Value3</custom-checkbox> 
        <p>Custom checkbox: {{ customCheckbox || 'checkbox not selected' }}</p>
        <br>

        <custom-radio v-model="customRadio" value="ok">OK</custom-radio>
        <custom-radio v-model="customRadio" value="not_ok">NOT OK!</custom-radio>
        <p>Custom radio: {{ customRadio || 'radio not selected' }}</p>

    </div>    
</template>

<script>
import CustomRadio from './CustomRadio';
import CustomCheckbox from './CustomCheckbox';

export default {
    components: {
        CustomRadio,
        CustomCheckbox
    },
    data () {
        return {
            checkbox: [],
            radio: '',
            customCheckbox: [],
            customRadio: '',
        }
    },
}
</script>
