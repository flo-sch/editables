<template>
  <div class='e-element e-div-editable droppable' contenteditable='false' v-on='click: onClick, dblclick: onDoubleClick'>
    <p>Lorem ipsum Sit incididunt quis officia officia consequat et minim enim Excepteur consequat incididunt quis sunt exercitation veniam ad culpa nisi eu enim culpa id adipisicing elit in ut in enim culpa dolor labore sunt dolore.</p>
  </div>
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
      }
    },
    methods: {
      edit: function () {
        this.$el.setAttribute('contenteditable', true);
        this.$el.classList.add('edit');
        this.$el.focus();
      },
      unedit: function () {
        this.$el.setAttribute('contenteditable', false);
        this.$el.classList.remove('edit');
        this.$el.blur();
      },
      onClick: function (event) {
        this.isEdited = true;

        event.stopPropagation();
      },
      onDoubleClick: function (event) {
        event.stopPropagation();
      }
    }
  }
</script>