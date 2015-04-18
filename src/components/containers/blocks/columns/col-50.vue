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