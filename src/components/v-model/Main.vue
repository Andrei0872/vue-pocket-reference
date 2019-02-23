<template>
  <div id="app">
    <!-- Basic example -->
    <basic-input v-model="name"></basic-input>
    <p>Hello {{ name }}</p>
    <br>
    <customized v-model="customizedInfo"></customized>
    {{ customizedInfo }}
    <p>Email {{ customizedInfo.email || 'no email yet' }}</p>
    <p>Age {{ customizedInfo.age || 'no age yet' }}</p>
    <br>
    <content-editable v-model="editable"></content-editable>
    <p>{{ editable || 'empty' | clear }}</p>
    <br>
    <radio-and-checkbox></radio-and-checkbox>
    <br>
    <h3>Select Component</h3>
    <p>Selected Country: {{ selectedCountry }}</p>
    <BaseSelect label="Select Country!" :data="countries" />
  </div>
</template>

<script>
// Check App.vue to select other examples.
import BasicInput from './components/BasicInput';
import Customized from './components/Customized';
import ContentEditable from './components/ContentEditable';
import radioAndCheckbox from './components/radioAndCheckbox';
import BaseSelect from './components/BaseSelect';


export default {
  name: 'app',
  components: {
    BasicInput,
    Customized,
    ContentEditable,
    radioAndCheckbox,
    BaseSelect,
  },
  data() {
    return {
      name: '',
      customizedInfo: {
        email: '',
        age: '',
      },
      editable: '',
      countries: [
        { id: 1, name: 'Romania' },
        { id: 2, name: 'Italy' },
        { id: 3, name: 'France' },
        { id: 4, name: 'Germany' },
      ],
      selectedCountry: '',

    };
  },
  filters: {
    clear(value) {
      return value.trim().replace('Content editable', '');
    },
  },
  methods: {
    changeSelectedCountry(e) {
      this.selectedCountry = e.target.selectedOptions[0].text;
    },
  },
  created() {
    this.selectedCountry = this.countries[0].name;
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
