<template>
  <div v-component="{{ columns }}"></div>
</template>

<script>
  var Vue = require('vue');
  var Container = Vue.extend(require('./container.js'));

  module.exports = {
    data: function () {
      return {
        columns: 'col-50'
      }
    },
    el: function () {
      var el = document.createElement('div');
      el.classList.add('e-element');
      el.classList.add('units-row');
      el.setAttribute('draggable', true);
      el.setAttribute('v-on', 'dragstart: onDragStart, dblclick: onDoubleClick');

      return el;
    },
    components: {
      'col-50': Container.extend(require('./columns/col-50.vue')),
      'col-33': Container.extend(require('./columns/col-33.vue')),
    },
    methods: {
      onDoubleClick: function (event) {
        this.columns = (this.columns == 'col-50' ? 'col-33' : 'col-50');
      }
    }
  }
</script>