<template>
  <section id='editables-preview' v-on='drop: onDrop, dragenter: onDragEnter, dragover: onDragOver, dragleave: onDragLeave'></section>
</template>

<script>
  module.exports = {
    replace: true,
    inherit: true,
    data: function () {
      return {
        elements: [],
        foo: 'bar'
      }
    },
    methods: {
      onDrop: function (event) {
        this.$el.classList.remove('droppable');

        var container = new this.$root.models.Container();
        container.$appendTo(this.$el);
        this.elements.push(container);
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