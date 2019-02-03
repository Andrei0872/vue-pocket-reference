<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ScopedSlots />
  </div>
</template>

<script>
import ScopedSlots from '@/components/Scoped Slots/Main';

export default {
  name: 'home',
  components: {
    ScopedSlots,
  },
};
</script>
