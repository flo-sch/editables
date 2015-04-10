<script>
  var Vue = require('vue');
  var Container = Vue.extend(require('../container.vue'));

  module.exports = {
    inherit: true,
    replace: true,
    data: function () {
    	return {
    		isDraggable: false
    	}
    },
    components: {
      'content-editable': Container.extend(require('../editable.vue'))
    }
  }
</script>

<template>
  <content-editable class="e-element e-col unit-50" draggable='false'>Col</content-editable>
  <content-editable class="e-element e-col unit-50" draggable='false'>Col</content-editable>
</template>