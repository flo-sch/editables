module.exports = {
  data: function () {
    return {
      isEdited: false
    }
  },
  el: function () {
    var el = document.createElement('div');
    el.classList.add('e-element');
    el.setAttribute('draggable', true);
    el.setAttribute('v-on', 'click: onClick');

    return el;
  },
  methods: {
    onClick: function (event) {
      this.isEdited = !this.isEdited;
      this.$el.setAttribute('contenteditable', this.isEdited);
      this.$el.classList.toggle('edit');
    }
  }
}