<template>
  <div class='e-element e-div-editable droppable' contenteditable='false' draggable='{{ isDraggable }}' v-on='click: onClick, dblclick: onDoubleClick, dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop'>Lorem ipsum Sit incididunt quis officia officia consequat et minim enim Excepteur consequat incididunt quis sunt exercitation veniam ad culpa nisi eu enim culpa id adipisicing elit in ut in enim culpa dolor labore sunt dolore.</div>
</template>

<script>
  module.exports = {
    replace: true,
    inherit: true,
    data: function () {
      return {
        isEdited: false
      }
    },
    watch: {
      isEdited: function () {
        if (this.isEdited) {
          this.edit();
        } else {
          this.unedit();
        }
      }
    },
    events: {
      'editables:window:click': function (event) {
        this.isEdited = false;
        this.$dispatch('editables:editable:unedit', this);
      },
      'editables:editable:edit': function (vm) {
        this.isEdited = (vm === this);
      }
    },
    methods: {
      edit: function () {
        this.$el.setAttribute('contenteditable', true);
        this.$el.classList.add('edit');
        this.$el.focus();

        if (this.isDraggable) {
          this.$el.setAttribute('draggable', false);
        }
      },
      unedit: function () {
        this.$el.setAttribute('contenteditable', false);
        this.$el.classList.remove('edit');
        this.$el.blur();

        if (this.isDraggable) {
          console.log('reset draggable', this.$el);
          this.$el.setAttribute('draggable', true);
        }
      },
      onClick: function (event) {
        event.stopPropagation();

        this.$dispatch('editables:editable:edit', this);
        this.isEdited = true;
      },
      onDoubleClick: function (event) {
        event.stopPropagation();
      }
    }
  }
</script>