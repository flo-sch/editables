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
      onDragOver: function (event) {
        event.preventDefault();
      },
      onDragEnter: function (event) {
        this.$el.classList.add('droppable');
      },
      onDragLeave: function (event) {
        this.$el.classList.remove('droppable');
      },
      onDrop: function (event) {
        this.$el.classList.remove('droppable');

        if (this.currentDraggedModel !== null) {
          if (this.currentDraggedModel in this.models) {
            var element = this.$addChild({}, this.models[this.currentDraggedModel]);
            element.$appendTo(this.$el);
            this.elements.push(element);

            this.currentDraggedModel = null;
          } else {
            console.warn('Unregistred or unsupported model', this.currentDraggedModel);
          }
        } else if (this.currentDraggedElement !== null) {
          try {
            this.currentDraggedElement.$appendTo(this.$el);
          }
          catch (DOMexception) {
            console.warn('It is impossible to move a container inside its own content.');
            // TODO
            // Display visual feedback about this problem
          }

          this.currentDraggedElement = null;
        }
      }
    }
  }
</script>