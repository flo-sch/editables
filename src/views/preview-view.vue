<template>
  <section id='editables-preview'>
    <header>
      <h2>Content</h2>
    </header>
  </section>
</template>

<script>
  module.exports = {
    replace: true,
    compiled: function () {
        console.log('Preview area is compiled');
    },
    components: {}
  }
</script>

<style lang="scss">
  @import "src/ui.scss";

  #editables-preview {
    margin-left: 250px;
    padding: 15px 10px;
  }
</style>