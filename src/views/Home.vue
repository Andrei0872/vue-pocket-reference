<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
    <br>
    <ListenersExample @focus="showFocus"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import ListenersExample from '@/components/ListenersExample';

export default {
  name: 'home',
  components: {
    HelloWorld,
    ListenersExample,
  },
  methods: {
    showFocus() {
      console.log('input focused!');
    },
  },
};
</script>
