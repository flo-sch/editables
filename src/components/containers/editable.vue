<template>
  <div class='e-element e-div-editable droppable' contenteditable='false' draggable='{{ isDraggable }}' v-on='click: onClick, dblclick: onDoubleClick, dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop, contextmenu: lock'>Lorem ipsum Consectetur non qui nulla officia.</div>
</template>

<script>
  var Container = require('./container.vue');

  module.exports = Container.extend({
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
    ready: function () {
      $(this.$el).editable();
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
      },
      lock: function (event) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
      }
    }
  });
</script>