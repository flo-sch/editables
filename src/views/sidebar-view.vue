<template>
  <aside id='editables-sidebar'>
    <header>
      <h2>Editables</h2>
    </header>
  </aside>
</template>

<script>
  module.exports = {
    replace: true,
    compiled: function () {
        console.log('Sidebar is compiled');
    },
    components: {}
  }
</script>

<style lang="scss">
  @import "src/ui.scss";

  #editables-sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    padding: 15px 10px;
    box-sizing: border-box;
    background: $theme-dark;
    color: $theme-light;
  }
</style>