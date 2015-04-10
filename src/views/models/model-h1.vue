<template>
  <div class='e-model e-h1 unit-33' draggable='true' v-on='dragstart: onDragStart'>H1</div>
</template>

<script>
  module.exports = {
    replace: true,
    data: function () {
      return {
        model: 'H1'
      }
    },
    methods: {
      onDragStart: function (event) {
        this.$dispatch('editables:sidebar:drag-item', this.model);
      }
    }
  }
</script>