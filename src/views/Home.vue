<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FuncComponent @customEvent="showAlert($event)"/>
  </div>
</template>

<script>
import FuncComponent from '@/components/FuncComponent.vue';

export default {
  name: 'home',
  components: {
    FuncComponent,
  },
  methods: {
    showAlert (param) {
      alert(`you clicked me! param: ${param}`);
    }
  }
};
</script>
