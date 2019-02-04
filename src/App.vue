<template>
  <div id="app">
    <Mouse :renderFn="__render" />
  </div>
</template>

<script>
import Mouse from './Mouse';

export default {
  components: { Mouse },
  methods: {
    __render ({ x, y, name }) {
      return (
        <div>
          <h1>
            Current Coords: ({ x }, { y })
          </h1>
          <h3>{ name }</h3>
        </div>
      )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
