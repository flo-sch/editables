<script>
  module.exports = {
    data: function () {
      return {
        dragOverCount: 0
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
  }
</script>