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
  </div>
</template>

<script>
import BasicInput from './components/BasicInput'
import Customized from './components/Customized'
import ContentEditable from './components/ContentEditable'
import radioAndCheckbox from './components/radioAndCheckbox'


export default {
  name: 'app',
  components: {
    BasicInput,
    Customized,
    ContentEditable,
    radioAndCheckbox,
  },
  data() {
    return {
      name: '',
      customizedInfo: {
        email: '',
        age: ''
      },
      editable: '',
    }
  },
  filters: {
        'clear' (value) {
            return value.trim().replace('Content editable', '')
        }
    }
}
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
