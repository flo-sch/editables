var Vue = require('vue');
var Container = Vue.extend(require('./container.js'));

module.exports = {
  template: '<div v-component="{{ columns }}"></div>',
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
    el.setAttribute('v-on', 'dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop, click: onClick');

    return el;
  },
  components: {
    'col-50': Container.extend(require('./col-50.js')),
    'col-33': Container.extend(require('./col-33.js')),
  },
  methods: {
    onClick: function (event) {
      this.columns = (this.columns == 'col-50' ? 'col-33' : 'col-50');
    }
  }
}