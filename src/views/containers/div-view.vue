<template>
  <div class='e-model e-div unit-33' draggable='true' v-on='dragstart: onDragStart'></div>
</template>

<script>
  module.exports = {
    replace: true,
    data: function () {
      return {
        isModel: true
      }
    },
    methods: {
      onDragStart: function (event) {
        this.$dispatch('editables:sidebar:drag-item', this);
      }
    }
  }
</script>