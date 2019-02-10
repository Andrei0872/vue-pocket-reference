<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
    <br>
    <h3><mark>$listeners</mark> example (check the console)</h3>
    <ListenersExample @focus="showFocus"/>
    <br>
    <h3><mark>inheritAttrs</mark> example</h3>
    <InheritAttrs rows="50" :divStyle="square"/>  
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import ListenersExample from '@/components/ListenersExample';
import InheritAttrs from '@/components/InheritAttrs';

export default {
  name: 'home',
  components: {
    HelloWorld,
    ListenersExample,
    InheritAttrs,
  },
  data: () => ({
    square: {
        border: '1px solid black',
        width: "30px",
        height: "30px",
    }
  }),
  methods: {
    showFocus() {
      console.log('input focused!');
    },
  },
  computed: {
  }
};
</script>
