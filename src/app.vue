<template>
  <editables-sidebar></editables-sidebar>
  <section id='editables-preview-container'>
    <header id='editables-preview-header'>
      <h2>Content</h2>
    </header>
    <editables-preview v-ref='Preview'></editables-preview>
  </section>
</template>

<script>
  var Vue = require('vue');
  var Container = Vue.extend(require('./components/containers/container.vue'));
  var Editable = Container.extend(require('./components/containers/editable.vue'));

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
          Div: Editable.extend(require('./components/containers/blocks/div.vue')),
          Section: Container.extend(require('./components/containers/blocks/section.vue')),
          Row: Container.extend(require('./components/containers/row.vue')),
          P: Editable.extend(require('./components/containers/blocks/p.vue')),
          H1: Editable.extend(require('./components/containers/blocks/h1.vue'))
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
    },
    methods: {
      getContent: function () {
        return this.$.Preview.$el.innerHTML;
      }
    }
  }
</script>