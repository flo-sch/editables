<template>
  <editables-sidebar></editables-sidebar>
  <section id='editables-preview-container'>
    <header id='editables-preview-header'>
      <h2>Content</h2>
    </header>
    <editables-preview></editables-preview>
  </section>
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
      'editables-preview': require('./views/preview-view.vue')
    }
  }
</script>