module.exports = {
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

      console.log('drop', event, this, this.currentDraggedModel);

      if (this.currentDraggedModel !== null) {
        if (this.currentDraggedModel in this.models) {
          var element = this.$addChild({}, this.models[this.currentDraggedModel]);
          element.$appendTo(this.$el);
          this.elements.push(element);

          this.currentDraggedModel = null;
        } else {
          console.warn('Unregistred or unsupported model', this.currentDraggedModel);
        }
      }

      event.stopPropagation();
    }
  }
}