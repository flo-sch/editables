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
        <model-h1></model-h1>
        <model-p></model-p>
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
      'model-h1': require('./models/model-h1.vue'),
      'model-p': require('./models/model-p.vue')
    }
  }
</script>