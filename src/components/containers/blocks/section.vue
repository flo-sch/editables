<script>
  var Container = require('../container.vue');

  module.exports = Container.extend({
    data: function () {
      return {
        isDraggable: true
      }
    },
    el: function () {
      var el = document.createElement('section');
      el.classList.add('e-element');
      el.classList.add('e-section');
      el.setAttribute('draggable', true);
      el.setAttribute('v-on', 'dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop');

      return el;
    }
  });
</script>