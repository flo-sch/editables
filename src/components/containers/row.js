module.exports = {
	template: '<div class="col unit-50">1</div><div class="col unit-50">2</div>',
  el: function () {
    var el = document.createElement('div');
    el.classList.add('e-element');
    el.classList.add('units-row');
    el.setAttribute('draggable', true);
    el.setAttribute('v-on', 'dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop');

    return el;
  }
}