<template>
  <editables-models></editables-models>
  <section id='editables-preview-container'>
    <editables-preview v-ref='Preview'></editables-preview>
  </section>
</template>

<script>
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
          Div: require('./components/containers/blocks/div.vue'),
          Section: require('./components/containers/blocks/section.vue'),
          Row: require('./components/containers/blocks/row.vue'),
          Aside: require('./components/containers/blocks/aside.vue'),
          Nav: require('./components/containers/blocks/nav.vue')
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
      'editables-models': require('./views/models-view.vue'),
      'editables-preview': require('./views/preview-view.vue')
    },
    methods: {
      getContent: function () {
        return this.$.Preview.$el.innerHTML;
      }
    }
  }
</script>