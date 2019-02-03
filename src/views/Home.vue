<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <!-- <BasicTransitions msg="Welcome to Your Vue.js App"/> -->
      <!-- <FromDocs /> -->
      <TransitionFunctionalComp style="background: #ccc; margin: 0 auto;"/>
  </div>
</template>

<script>
import BasicTransitions from '../components/Basic Tranisitons/Main';
import FromDocs from '../components/From Docs/Main';
import TransitionFunctionalComp from '../components/Functional Components/Main';

export default {
  name: 'home',
  components: {
    BasicTransitions,
    FromDocs,
    TransitionFunctionalComp,
  },
};
</script>
