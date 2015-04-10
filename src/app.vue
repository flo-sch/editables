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
  var Container = Vue.extend(require('./components/containers/container.vue'));

  module.exports = {
    el: '#editables',
    events: {
      'editables:sidebar:drag-item': function (model) {
        this.currentDraggedModel = model;
      },
      'editables:preview:drag-item': function (element) {
        this.currentDraggedElement = element;
      }
    },
    data: function () {
      return {
        currentDraggedModel: null,
        currentDraggedElement: null,
        models: {
          Div: Container.extend(require('./components/containers/blocks/div.vue')),
          Section: Container.extend(require('./components/containers/blocks/section.vue')),
          Row: Container.extend(require('./components/containers/row.vue'))
        }
      }
    },
    ready: function () {
      var App = this;

      window.addEventListener('click', function () {
        App.$broadcast('editables:window:click');
      });
    },
    components: {
      'editables-sidebar': require('./views/sidebar-view.vue'),
      'editables-preview': require('./views/preview-view.vue')
    }
  }
</script>