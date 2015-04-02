<template>
  <div class='e-model e-section unit-33' draggable='true' v-on='dragstart: onDragStart'>Section</div>
</template>

<script>
  module.exports = {
    replace: true,
    data: function () {
      return {
        model: 'Section'
      }
    },
    methods: {
      onDragStart: function (event) {
        this.$dispatch('editables:sidebar:drag-item', this.model);
      }
    }
  }
</script>