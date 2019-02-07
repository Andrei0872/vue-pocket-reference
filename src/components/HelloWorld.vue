<template>
  <div class="hello">
    <h1>Time to build awesome things!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted () {
    // The root DOM elem that the vue instance is managing
    console.log(this.$el); // <div class="hello"></div>
    // The root vue instance of the current component tree
    console.log(this.$root); // <div id="app"></div>
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
