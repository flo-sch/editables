<template>
  <content-editable class="e-element unit-50">Col</content-editable>
  <content-editable class="e-element unit-50">Col</content-editable>
</template>

<script>
  var Vue = require('vue');
  var Container = Vue.extend(require('../container.vue'));

  module.exports = {
    inherit: true,
    replace: true,
    components: {
      'content-editable': Container.extend(require('../editable.vue'))
    }
  }
</script>