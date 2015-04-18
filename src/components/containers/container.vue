<script>
  var Vue = require('vue');

  module.exports = Vue.extend({
    inherit: true,
    methods: {
      onDragStart: function (event) {
        if (this.isDraggable) {
          this.currentDraggedElement = this;
        }

        event.stopPropagation();
      },
      onDragOver: function (event) {
        event.preventDefault();
      },
      onDragEnter: function (event) {
        this.$el.classList.add('droppable');

        event.stopPropagation();
      },
      onDragLeave: function (event) {
        this.$el.classList.remove('droppable');

        event.stopPropagation();
      },
      onDrop: function (event) {
        this.$el.classList.remove('droppable');

        if (this.currentDraggedModel !== null) {
          if (this.currentDraggedModel in this.models) {
            var element = this.$addChild({}, this.models[this.currentDraggedModel]);
            element.$appendTo(this.$el);

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

        event.stopPropagation();
      }
    }
  });
</script>