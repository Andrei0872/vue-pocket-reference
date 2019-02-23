<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <ScopedSlots /> -->
    <VModel />
    <!-- <RenderlessComponents /> -->
    <!-- <ComponentRegistration /> -->
  </div>
</template>

<script>
import ScopedSlots from '@/components/Scoped Slots/Main';
import VModel from '@/components/v-model/Main';
import RenderlessComponents from '@/components/Renderless Components/Main';
import ComponentRegistration from '../components/Performat Component Registration/AppMain';

export default {
  name: 'home',
  components: {
    ScopedSlots,
    VModel,
    RenderlessComponents,
    ComponentRegistration,
  },
};
</script>
