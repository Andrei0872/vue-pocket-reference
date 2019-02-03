<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <ScopedSlots /> -->
    <VModel />
  </div>
</template>

<script>
import ScopedSlots from '@/components/Scoped Slots/Main';
import VModel from '@/components/v-model/Main';

export default {
  name: 'home',
  components: {
    ScopedSlots,
    VModel,
  },
};
</script>
