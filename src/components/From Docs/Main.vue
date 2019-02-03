<template>
  <div id="app">
    <!-- <app-test></app-test> -->
    <!-- <app-css-transitions></app-css-transitions> -->
    <!-- <app-css-animations></app-css-animations> -->
    <!-- <app-animations-using-js></app-animations-using-js> -->
    <!-- <app-list-transitions></app-list-transitions> -->
    <!-- <app-search></app-search> -->
    <!-- <app-sudoku-shuffle></app-sudoku-shuffle> -->
    <app-dynamic-transition></app-dynamic-transition>
  </div>
</template>

<script>
import Test from './components/Test'
import CssTransitions from './components/CssTransitions'
import CssAnimations from './components/CssAnimations'
import AnimationsUsingJs from './components/AnimationsUsingJs' 
import ListTransitions from './components/ListTransitions'
import Search from './components/Search'
import SudokuShuffle from './components/SudokuShuffle'
import DynamicTransition from './components/DynamicTransition'


export default {
  name: 'app',
  components: {
    'app-test': Test,
    'app-css-transitions': CssTransitions,
    'app-css-animations': CssAnimations,
    'app-animations-using-js': AnimationsUsingJs,
    'app-list-transitions': ListTransitions,
    'app-search': Search,
    'app-sudoku-shuffle': SudokuShuffle,
    'app-dynamic-transition': DynamicTransition,
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
