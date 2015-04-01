<template>
  <section id='editables-preview' v-on='drop: onDrop, dragenter: onDragEnter, dragover: onDragOver, dragleave: onDragLeave'></section>
</template>

<script>
  module.exports = {
    replace: true,
    inherit: true,
    data: function () {
      return {
        elements: []
      }
    },
    methods: {
      onDrop: function (event) {
        this.$el.classList.remove('droppable');

        if (this.currentDraggedItem) {
          var clone = this.currentDraggedItem.$el.cloneNode(true);
          clone.classList.remove('e-model')
          clone.classList.add('e-element');
          this.$el.appendChild(clone);
          this.currentDraggedItem = null;
        }
      },
      onDragOver: function (event) {
        event.preventDefault();
      },
      onDragEnter: function (event) {
        this.$el.classList.add('droppable');
      },
      onDragLeave: function (event) {
        this.$el.classList.remove('droppable');
      }
    },
    components: {}
  }
</script>