<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- Modify the value of `newFeatures` in order to visualize this example -->
    <NewFeatures v-if="newFeatures">

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

    <button v-if="newFeatures" @click="customSlot = customSlot === 'name' ? 'testSlot' : 'name'">Change Slot Name!</button>

    <!-- Modify the value of `tabList` in order to visualize this example -->
    <!-- The content should remain in the template -->
    <!-- The script should contain the logic -->
    <TabList v-if="tabList" :currentTab="selectedTab">

      <template v-slot:home="{ tabUpper }">
        <h3>Home</h3>
        <h3>{{ tabUpper }}</h3>
        <p>Home content</p>
      </template>

      <template v-slot:about="{ tabUpper }">
        <h3>About</h3>
        <h3>{{ tabUpper }}</h3>
        <p>About content</p>
      </template>

      <template v-slot:contact="{ tabUpper }">
        <h3>contact</h3>
        <h3>{{ tabUpper }}</h3>
        <p>contact content</p>
      </template>

    </TabList>
  </div>
</template>

<script>
import NewFeatures from '../NewFeatures.vue';
import TabList from '../TabList.vue';

export default {
  name: 'home',
  components: {
    NewFeatures,
    TabList,
  },
  data: () => ({
    name: 'Andrei',
    age: 17,
    customSlot: 'name',
    newFeatures: false,
    tabList: true,
    selectedTab: 'home',
  }),
};
</script>
