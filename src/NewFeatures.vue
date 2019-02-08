<template>
    <div>
        <slot name="name"></slot>
        <!-- Passing data to the parent component -->
        <slot name="age" :passion="passion"></slot>
        <slot></slot>
        <slot name="testSlot"></slot>
    </div>
</template>

<script>
export default {
  data: () => ({
    passion: 'programming',
  }),
};
</script>
