<template>
  <editables-sidebar></editables-sidebar>
  <editables-preview></editables-preview>
</template>

<script>
  module.exports = {
    el: '#editables',
    events: {
      'editables:sidebar:drag-item': function (item) {
        this.currentDraggedItem = item;
      }
    },
    data: function () {
      return {
        currentDraggedItem: null
      }
    },
    components: {
      'editables-sidebar': require('./views/sidebar-view.vue'),
      'editables-preview': require('./views/preview-view.vue'),
    }
  }
</script>