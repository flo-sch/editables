<template>
  <div class='e-model e-aside unit-33' draggable='true' v-on='dragstart: onDragStart'>Aside</div>
</template>

<script>
  module.exports = {
    replace: true,
    data: function () {
      return {
        model: 'Aside'
      }
    },
    methods: {
      onDragStart: function (event) {
        this.$dispatch('editables:sidebar:drag-item', this.model);
      }
    }
  }
</script>