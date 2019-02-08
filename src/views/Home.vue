<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NewFeatures>

      <template v-slot:[customSlot]>
        <h3>{{ name }}</h3>
      </template>

      <!-- Using the data passed from the child component -->
      <template v-slot:age="{ passion }">
        <h3>{{ age }}</h3>
        <h2>My passions is {{ passion }}</h2>
      </template>

      <template>
        <p>This is just a default slot</p>
      </template>

    </NewFeatures>

    <button @click="customSlot = customSlot === 'name' ? 'testSlot' : 'name'">Change Slot Name!</button>
  </div>
</template>

<script>
import NewFeatures from '../NewFeatures.vue';

export default {
  name: 'home',
  components: {
    NewFeatures,
  },
  data: () => ({
    name: 'Andrei',
    age: 17,
    customSlot: 'name',
  }),
};
</script>
