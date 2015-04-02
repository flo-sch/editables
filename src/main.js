/**
 * Bootstrap UI application with Vue
 */

var Vue = require('vue');
var app = new Vue(require('./app.vue'));
app.models.Container = Vue.extend({
  inherit: true,
  el: function () {
    var el = document.createElement('div');
    el.classList.add('e-element');
    el.setAttribute('draggable', true);
    el.setAttribute('v-on', 'dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop');
    return el;
  },
  data: function () {
    return {
      elements: []
    }
  },
  methods: {
    onDragOver: function (event) {
      event.preventDefault();
    },
    onDragEnter: function (event) {
      this.$el.classList.add('droppable');
    },
    onDragLeave: function (event) {
      this.$el.classList.remove('droppable');
    },
    onDrop: function (event) {
      this.$el.classList.remove('droppable');

      console.log('drop', event, this.$data);
      event.stopPropagation();

      // this.elements[].push()
    }
  }
});