module.exports = {
  inherit: true,
  data: function () {
    return {
      dragOverCount: 0,
      elements: []
    }
  },
  methods: {
    onDragOver: function (event) {
      event.preventDefault();
    },
    onDragEnter: function (event) {
      console.log('enter', this.dragOverCount, this.$el);
      this.dragOverCount++;
      this.$el.classList.add('droppable');
    },
    onDragLeave: function (event) {
      console.log('leave', this.dragOverCount, this.$el);
      this.dragOverCount--;
      // if (this.dragOverCount === 0) {
        this.$el.classList.remove('droppable');
      // }
    },
    onDrop: function (event) {
      this.dragOverCount = 0;
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
      }

      event.stopPropagation();
    }
  }
}