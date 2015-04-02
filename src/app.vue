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
  var Vue = require('vue');
  var Container = Vue.extend(require('./components/containers/container.js'));

  module.exports = {
    el: '#editables',
    events: {
      'editables:sidebar:drag-item': function (model) {
        this.currentDraggedModel = model;
      }
    },
    data: function () {
      return {
        currentDraggedModel: null,
        models: {
          Div: Container.extend(require('./components/containers/div.js')),
          Section: Container.extend(require('./components/containers/section.js')),
          Row: Container.extend(require('./components/containers/row.js'))
        }
      }
    },
    components: {
      'editables-sidebar': require('./views/sidebar-view.vue'),
      'editables-preview': require('./views/preview-view.vue')
    }
  }
</script>