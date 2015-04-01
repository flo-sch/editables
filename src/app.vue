<template>
  <editables-sidebar></editables-sidebar>
  <editables-preview></editables-preview>
</template>

<script>
  module.exports = {
    el: '#editables',
    data: {},
    components: {
      'editables-sidebar': require('./views/sidebar-view.vue'),
      'editables-preview': require('./views/preview-view.vue'),
    }
  }
</script>

<style lang="scss">
  @import "src/ui.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    body {
      height: 100%;
      #editables {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>