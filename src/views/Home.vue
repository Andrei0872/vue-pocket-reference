<template>
  <div>
    <br>
    <button @click="visible = true; showContainer = true">Show modal</button>
    <br>
    <Modal v-if="visible" :showContainer="showContainer">
      <template v-slot:header>
        <h3>Custom header</h3>
      </template>

      <template v-slot:content>
        <h3>Custom Content</h3>
      </template>

      <template v-slot:footer>
        <h3>Custom footer</h3>
      </template>
    </Modal>
  </div>  
</template>

<script>
import Modal from './Modal';

export default {
  name: 'home',
  
  components: {
    Modal,
  },

  data: () => ({
    visible: false,
    showContainer: true
  }),

  methods: {
    checkClickedOutside (ev) {
      if (ev.target !== ev.currentTarget)
        return;

      this.closeModal();
    },
    closeModal () {
      setTimeout(() => {
          this.visible = false
        }, 500);

      this.showContainer = false
    }
  }
};
</script>
