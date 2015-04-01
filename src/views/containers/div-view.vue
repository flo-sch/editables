<template>
  <div class='e-model e-div unit-33' draggable='true' v-on='dragstart: onDragStart'></div>
</template>

<script>
  module.exports = {
  	replace: true,
    methods: {
    	onDragStart: function (event) {
    		this.$dispatch('editables:sidebar:drag-item', this);
    	}
    }
  }
</script>