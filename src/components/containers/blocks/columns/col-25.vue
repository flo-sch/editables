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
  <content-editable class="e-element e-col unit-25">Col</content-editable>
  <content-editable class="e-element e-col unit-25">Col</content-editable>
  <content-editable class="e-element e-col unit-25">Col</content-editable>
  <content-editable class="e-element e-col unit-25">Col</content-editable>
</template>