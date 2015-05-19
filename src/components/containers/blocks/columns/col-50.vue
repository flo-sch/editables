<template>
  <div class='e-element e-div-editable droppable' contenteditable='false' draggable='{{ isDraggable }}' v-on='click: onClick, dblclick: onDoubleClick, dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop, contextmenu: lock'>Lorem ipsum Consectetur non qui nulla officia.</div>
</template>

<script>
  var Container = require('../../container.vue');

  module.exports = Container.extend({
    inherit: true,
    replace: true,
    data: function () {
      return {
        isDraggable: false
      }
    },
    components: {
      'content-editable': require('../../editable.vue')
    }
  });
</script>

<template>
  <content-editable class="e-element e-col unit-50" draggable='false'>Col</content-editable>
  <content-editable class="e-element e-col unit-50" draggable='false'>Col</content-editable>
</template>