<template>
  <div class='e-model e-div unit-33' draggable='true' v-on='dragstart: onDragStart'>Div</div>
</template>

<script>
  module.exports = {
    replace: true,
    data: function () {
      return {
        model: 'Div'
      }
    },
    methods: {
      onDragStart: function (event) {
        this.$dispatch('editables:sidebar:drag-item', this.model);
      }
    }
  }
</script>