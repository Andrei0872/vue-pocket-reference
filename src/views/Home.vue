<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <!-- <BasicTransitions msg="Welcome to Your Vue.js App"/> -->
      <FromDocs />
  </div>
</template>

<script>
import BasicTransitions from '../components/Basic Tranisitons/Main';
import FromDocs from '../components/From Docs/Main';

export default {
  name: 'home',
  components: {
    BasicTransitions,
    FromDocs
  },
};
</script>
