<template>
	<content-editable class="e-element unit-33">Col</content-editable>
	<content-editable class="e-element unit-33">Col</content-editable>
	<content-editable class="e-element unit-33">Col</content-editable>
</template>

<script>
  module.exports = {
    inherit: true,
    replace: true,
    data: function () {
      return {
        isDraggable: false
      }
    },
    components: {
    	'content-editable': require('../editable.vue')
    }
  }
</script>