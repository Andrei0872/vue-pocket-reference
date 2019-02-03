<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BasicTransitions msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import BasicTransitions from '../components/Basic Tranisitons/Main';

export default {
  name: 'home',
  components: {
    BasicTransitions,
  },
};
</script>
