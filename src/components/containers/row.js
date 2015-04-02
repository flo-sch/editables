var Vue = require('vue');
var Container = Vue.extend(require('./container.js'));

// var Col50 = Container.extend(require('./col-50.js'));

// console.log(Container, new Col50());

// Vue.component('col-50', Col50);

module.exports = {
  template: '<div v-component="col-50"></div><div v-component="col-50"></div>',
  el: function () {
    var el = document.createElement('div');
    el.classList.add('e-element');
    el.classList.add('units-row');
    el.setAttribute('draggable', true);
    el.setAttribute('v-on', 'dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop');

    return el;
  },
  components: {
    'col-50': Container.extend(require('./col-50.js'))
  },
}