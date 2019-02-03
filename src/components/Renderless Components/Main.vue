<template>
  <div id="app">
    <h3>Renderless Components</h3>
    <br>
    <toggle>
      <div slot-scope="{ on, setOn, setOff }" class="container">
        <button @click="click(setOn)" >Blue</button>
        <button @click="click(setOff)" >Red</button>
        <div v-if="buttonPressed" class="message">
            <span v-if="on">Blue btn</span>
            <span v-else>Red btn</span>
        </div>
      </div>
    </toggle>
    <br>
    <hr>
    <br>
    <!-- Passing inf to the parent using scoped slots -->
    <app-list>
        <div slot="link" slot-scope="{ link, bookmark, removeBookmark, bookmarkAttrs, bookmarkEvents }" >
          <a href="link.href">
            {{ link.name }}
          </a>
          <!-- Instead of making the consumer handle v-show and @click -->
          <!-- <button v-if="!link.bookmarked" @click="bookmark(link)">Bookmark</button>
          <button v-else @click="removeBookmark(link)">Remove Bookmark</button> -->

          <!-- Handle this moves inside the component itself -->
          <button
            v-bind="bookmarkAttrs"
            v-on="bookmarkEvents"
          >
            {{ link.bookmarked ? 'Remove' : 'Bookmark' }}
          </button>
        </div>
    </app-list>
  </div>
</template>

<script>
import Toggle from './Toggle'
import List from './List'

export default {
  name: 'app',
  components: {
    Toggle,
    'app-list': List
  },
  data () {
    return {
      buttonPressed: false,
    }
  },
  methods: {
    click (fn) {
      this.buttonPressed = true
      fn()
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>