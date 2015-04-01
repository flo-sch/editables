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
  @import url("http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,300italic,400italic|Delius+Swash+Caps");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    body {
      height: 100%;
      h1,
      h2,
      h3 {
        font-family: "Delius Swash Caps", cursive;
      }
      h4,
      h5,
      h6,
      p {
        font-family: "Source Sans Pro", Arial, sans-serif;
      }
      #editables {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>