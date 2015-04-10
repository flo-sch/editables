<template>
  <div v-component="{{ columns }}"></div>
  <div class='e-contextual' v-if='onContext' v-on='contextmenu: lock'>
    <h5 class='e-contextual-title'>MENU</h5>
    <hr class='e-contextual-divider' />
    <div class='e-contextual-links'>
      <a href='#' data-component='col-50' v-on='click: onTemplateSelected' class='e-contextual-link' v-class='active: columns == "col-50"'>2 Cols</a>
      <a href='#' data-component='col-33' v-on='click: onTemplateSelected' class='e-contextual-link' v-class='active: columns == "col-33"'>3 Cols</a>
      <a href='#' data-component='col-25' v-on='click: onTemplateSelected' class='e-contextual-link' v-class='active: columns == "col-25"'>4 Cols</a>
    </div>
  </div>
</template>

<script>
  var Vue = require('vue');
  var Container = Vue.extend(require('./container.vue'));

  module.exports = {
    data: function () {
      return {
        onContext: false,
        columns: 'col-50',
        content: []
      }
    },
    events: {
      'editables:window:click': function (event) {
        this.onContext = false;
      },
      'editables:editable:edit': function (vm) {
        this.stick();
        this.$broadcast('editables:editable:edit', vm);
      },
      'editables:editable:unedit': function (vm) {
        this.unstick();
        this.$broadcast('editables:editable:unedit', vm);
      }
    },
    el: function () {
      var el = document.createElement('div');
      el.classList.add('e-element');
      el.classList.add('units-row');
      el.setAttribute('draggable', true);
      el.setAttribute('v-on', 'dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, contextmenu: onContextualMenu');

      return el;
    },
    components: {
      'col-50': Container.extend(require('./columns/col-50.vue')),
      'col-33': Container.extend(require('./columns/col-33.vue')),
      'col-25': Container.extend(require('./columns/col-25.vue'))
    },
    methods: {
      stick: function () {
        this.$el.setAttribute('draggable', false);
        this.$el.classList.add('sticky');
      },
      unstick: function () {
        this.$el.setAttribute('draggable', true);
        this.$el.classList.remove('sticky');
      },
      onDragEnter: function (event) {
        this.$el.classList.add('undroppable');
      },
      onDragLeave: function (event) {
        this.$el.classList.remove('undroppable');
      },
      onContextualMenu: function (event) {
        event.preventDefault();

        this.onContext = true;

        var contextualMenu = this.$el.querySelector('.e-contextual');

        if (contextualMenu) {
          contextualMenu.style.top = event.clientY + 'px';
          contextualMenu.style.left = event.clientX + 'px';
        }
      },
      onTemplateSelected: function (event) {
        event.stopPropagation();

        this.storeContent();

        if (event.target.dataset.component in this.$options.components) {
          this.columns = event.target.dataset.component;
          this.refreshContent();
        }
      },
      storeContent: function () {
        var columns = this.$el.querySelectorAll('.e-col'),
            columnsNumber = columns.length;

        while (columnsNumber--) {
          var index = columns.length - 1 - columnsNumber;

          if (index < this.content.length) {
            this.content[index] = columns[index].innerHTML;
          } else {
            this.content.push(columns[index].innerHTML);
          }
        }
      },
      refreshContent: function () {
        var columns = this.$el.querySelectorAll('.e-col'),
            columnsNumber = Math.min(columns.length, this.content.length),
            index = 0;

        while (index < columnsNumber) {
          columns[index].innerHTML = this.content[index];
          index++;
        }
      },
      lock: function (event) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
      }
    }
  }
</script>