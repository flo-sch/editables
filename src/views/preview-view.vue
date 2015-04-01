<template>
  <section id='editables-preview' v-on='drop: onDrop, dragover: onDragOver'>
    <header>
      <h2>Content</h2>
    </header>
  </section>
</template>

<script>
  module.exports = {
    replace: true,
    inherit: true,
    methods: {
      onDrop: function (event) {
        this.$el.appendChild(this.currentDraggedItem.$el);
      },
      onDragOver: function (event) {
        event.preventDefault();
      }
    },
    components: {}
  }
</script>