<template>
  <nav id='editables-nav'>
    <header>
      <h2 id='editables-title'>Editables</h2>
    </header>
    <div id='containers' class='units-row'>
      <div class='unit-20 units-row'>
        <model-div></model-div>
        <model-section></model-section>
        <model-row></model-row>
      </div>
      <div class='unit-20 units-row'>
        <model-aside></model-aside>
        <model-nav></model-nav>
      </div>
    </div>
  </nav>
</template>

<script>
  module.exports = {
    replace: true,
    components: {
      'model-div': require('./models/model-div.vue'),
      'model-section': require('./models/model-section.vue'),
      'model-row': require('./models/model-row.vue'),
      'model-aside': require('./models/model-aside.vue'),
      'model-nav': require('./models/model-nav.vue')
    }
  }
</script>