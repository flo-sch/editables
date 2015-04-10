<template>
  <h1 class='e-element e-h1 droppable' contenteditable='false' draggable='{{ isDraggable }}' v-on='click: onClick, dblclick: onDoubleClick, dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop, contextmenu: lock'>TITLE</h1>
</template>


<script>
  module.exports = {
    data: function () {
      return {
        isDraggable: true
      }
    },
    el: function () {
      var el = document.createElement('h1');
      el.classList.add('e-element');
      el.classList.add('e-h1');
      el.setAttribute('draggable', true);
      el.setAttribute('v-on', 'dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop, click: onClick');

      return el;
    }
  }
</script>