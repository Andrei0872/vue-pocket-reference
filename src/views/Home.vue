<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="margin: 100vh auto; border: 1px solid green;">
      <AbstractComp @intersect-enter="handleEnter" @intersect-leave="handleLeave">
      <h3>My parent comp is an abstract component!!!</h3>
    </AbstractComp>
    </div>
  </div>
</template>

<script>
import AbstractComp from '@/components/AbstractComp.vue';

export default {
  name: 'home',
  components: {
    AbstractComp,
  },
  methods: {
    handleEnter () {
      console.log('entering...')
    },
    handleLeave () {
      console.log('leaving...')
    }
  },
};
</script>
