<template>
  <div class="hello">
    <h1>Time to build awesome things!</h1>
    <!-- This requires emitting an event from the child component -->
    <!-- <ClickNativeExample @click="clickFn" /> -->

    <!-- This would simply work as the event is attached to the root component -->
    <ClickNativeExample @click.native="clickFn" />
  </div>
</template>

<script>
import ClickNativeExample from './ClickNativeExample';

export default {
  name: 'HelloWorld',
  components: {
    ClickNativeExample
  },
  props: {
    msg: String,
  },
  mounted () {
    // The root DOM elem that the vue instance is managing
    console.log(this.$el); // <div class="hello"></div>
    // The root vue instance of the current component tree
    console.log(this.$root); // <div id="app"></div>
  },
  methods: {
    clickFn () {
      alert('clicked!');
    }
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
