<template>
  <div class="container">
    <br>
      <AppList></AppList>
  </div>
</template>

<script>
import AppList from './AppList.vue';

export default {
  components: {
    AppList
  }
}
</script>

<style>
.container {
    height: 400px; 
    width: 700px; 
    color: #fff;
    position: relative;
    text-shadow: 0 0 6px #000;
}
</style>
