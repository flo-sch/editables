<template>
  <div class='e-model e-p unit-33' draggable='true' v-on='dragstart: onDragStart'>P</div>
</template>

<script>
  module.exports = {
    replace: true,
    data: function () {
      return {
        model: 'P'
      }
    },
    methods: {
      onDragStart: function (event) {
        this.$dispatch('editables:sidebar:drag-item', this.model);
      }
    }
  }
</script>