<template>
  <div class='e-model e-nav unit-33' draggable='true' v-on='dragstart: onDragStart'>Nav</div>
</template>

<script>
  module.exports = {
    replace: true,
    data: function () {
      return {
        model: 'Nav'
      }
    },
    methods: {
      onDragStart: function (event) {
        this.$dispatch('editables:sidebar:drag-item', this.model);
      }
    }
  }
</script>