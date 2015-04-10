<template>
  <div v-component="{{ columns }}"></div>
</template>

<script>
  var Vue = require('vue');
  var Container = Vue.extend(require('./container.vue'));

  module.exports = {
    data: function () {
      return {
        columns: 'col-50'
      }
    },
    events: {
      'editables:editable:edit': function (vm) {
        this.stick();
        this.$broadcast('editables:editable:edit', vm);
      },
      'editables:editable:unedit': function (vm) {
        this.unstick();
        this.$broadcast('editables:editable:unedit', vm);
      }
    },
    el: function () {
      var el = document.createElement('div');
      el.classList.add('e-element');
      el.classList.add('units-row');
      el.setAttribute('draggable', true);
      el.setAttribute('v-on', 'dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, dblclick: onDoubleClick');

      return el;
    },
    components: {
      'col-50': Container.extend(require('./columns/col-50.vue')),
      'col-33': Container.extend(require('./columns/col-33.vue')),
    },
    methods: {
      stick: function () {
        this.$el.setAttribute('draggable', false);
        this.$el.classList.add('sticky');
      },
      unstick: function () {
        this.$el.setAttribute('draggable', true);
        this.$el.classList.remove('sticky');
      },
      onDoubleClick: function (event) {
        this.columns = (this.columns == 'col-50' ? 'col-33' : 'col-50');
      },
      onDragEnter: function (event) {
        this.$el.classList.add('undroppable');
      },
      onDragLeave: function (event) {
        this.$el.classList.remove('undroppable');
      }
    }
  }
</script>