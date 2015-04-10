<template>
  <p class='e-element e-p droppable' contenteditable='false' draggable='{{ isDraggable }}' v-on='click: onClick, dblclick: onDoubleClick, dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop, contextmenu: lock'>Lorem ipsum Dolor non nisi eiusmod nostrud culpa esse est irure ex magna occaecat non qui veniam ut nulla amet eiusmod qui non in dolore amet dolor Excepteur deserunt voluptate non officia occaecat esse in nulla ullamco voluptate laboris id officia commodo commodo ex aliquip Duis in consectetur fugiat dolor commodo sed dolore laborum in Duis sit pariatur aliqua est fugiat do est commodo Duis ut dolore incididunt aliquip ex ex anim enim est id est pariatur cupidatat pariatur consectetur reprehenderit dolor sit irure Excepteur ullamco reprehenderit sunt enim cupidatat nulla aute non eu enim anim consequat ea reprehenderit dolore ex eu eiusmod officia ea amet do incididunt sed pariatur in magna cupidatat tempor ea eu et cillum sed eu consequat quis proident esse magna ut quis deserunt id magna elit Ut sunt consequat irure in consectetur irure nostrud irure culpa et occaecat consequat commodo aliquip deserunt aute in ut cillum labore magna est cillum aliquip ad laborum qui minim mollit fugiat est anim enim esse cupidatat ut irure dolor nulla qui exercitation id incididunt amet non voluptate veniam aliquip dolore nisi irure do irure sint consectetur ullamco voluptate eiusmod consectetur occaecat qui minim nostrud velit ut veniam ex do tempor sunt enim qui ut laboris incididunt non nulla quis sint eu in quis adipisicing sint quis consequat aliqua officia amet.</p>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        isDraggable: true
      }
    },
    el: function () {
      var el = document.createElement('p');
      el.classList.add('e-element');
      el.classList.add('e-p');
      el.setAttribute('draggable', true);
      el.setAttribute('v-on', 'dragstart: onDragStart, dragenter: onDragEnter, dragleave: onDragLeave, drop: onDrop, click: onClick');

      return el;
    }
  }
</script>