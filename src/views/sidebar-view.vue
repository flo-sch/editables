<template>
  <aside id='editables-sidebar'>
    <header>
      <h2>Editables</h2>
    </header>
    <hr />
    <div id='containers' class='units-row'>
      <div-view></div-view>
    </div>
  </aside>
</template>

<script>
  module.exports = {
    replace: true,
    components: {
      'div-view': require('./containers/div-view.vue')
    }
  }
</script>