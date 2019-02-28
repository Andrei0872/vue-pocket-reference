<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h3>Another Abstract component</h3>
    <!-- Hidden -->
    <Permission :permission-type="permissions.dashboard">
      <div>
        <h3>Welcome to your dashboard</h3>
      </div>
    </Permission>
    <!-- Visible -->
    <Permission :permission-type="permissions.posts">
      <div>
        <h3>Posts</h3>
        <BaseButton class="it-depends">Add post</BaseButton>
      </div>
    </Permission>
    <!-- Editable -->
    <Permission :permission-type="permissions.comments">
      <div>
        <h3>Comments</h3>
        <BaseButtonFunctional class="it-depends">Add comment</BaseButtonFunctional>
      </div>
    </Permission>

  </div>
</template>

<script>
import Permission from '@/components/Permission.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseButtonFunctional from '@/components/BaseButtonFunctional.vue';

export default {
  name: 'home',

  components: {
    Permission,
    BaseButton,
    BaseButtonFunctional,
  },

  data: () => ({
    permissions: {
      dashboard: 0, // Hidden
      posts: 1, // Visible
      comments: 2, // Editable
    },
  }),

  methods: {
    handleEnter() {
      console.log('entering...');
    },
    handleLeave() {
      console.log('leaving...');
    },
  },
};
</script>
