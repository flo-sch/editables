<template>
  <div class='e-model e-row unit-33' draggable='true' v-on='dragstart: onDragStart'>Row</div>
</template>

<script>
  module.exports = {
    replace: true,
    data: function () {
      return {
        isModel: true,
        model: 'Row'
      }
    },
    methods: {
      onDragStart: function (event) {
        this.$dispatch('editables:sidebar:drag-item', this.model);
      }
    }
  }
</script>