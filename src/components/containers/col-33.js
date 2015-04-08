var Vue = require('vue');
var Container = Vue.extend(require('./container.js'));

module.exports = {
  inherit: true,
  replace: true,
  template: '<div class="e-element unit-33" draggable="true" v-on="dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop">Col</div><div class="e-element unit-33" draggable="true" v-on="dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop">Col</div><div class="e-element unit-33" draggable="true" v-on="dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop">Col</div>',
}