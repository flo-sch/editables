module.exports = {
  el: function () {
    var el = document.createElement('div');
    el.classList.add('e-element');
    el.setAttribute('draggable', true);
    el.setAttribute('v-on', 'dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop');

    return el;
  }
}