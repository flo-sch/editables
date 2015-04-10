<template>
  <aside id='editables-sidebar'>
    <header>
      <h2>Editables</h2>
    </header>
    <hr />
    <div id='containers' class='units-row'>
      <model-div></model-div>
      <model-section></model-section>
      <model-row></model-row>
    </div>
    <div id='containers' class='units-row'>
      <model-h1></model-h1>
      <model-p></model-p>
    </div>
  </aside>
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