// active link
const form = document.getElementById('nav__list');
let btns = form.getElementsByClassName('nav__link');

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('nav__link--active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace(
        ' nav__link--active',
        '',
      );
    }

    this.className += ' nav__link--active';
  });
}

// responsive menu

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav__list');

function toggleNav() {
  burger.classList.toggle('fa-bars');
  burger.classList.toggle('fa-times');
  nav.classList.toggle('nav__list--active');
}

burger.addEventListener('click', function() {
  toggleNav();
});

//Drag & Drop List Items
let dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
  this.style.opacity = '1';
  [].forEach.call(cols, function(col) {
    col.classList.remove('over');
  });
}

let cols = document.querySelectorAll('#service__list .service__list--item');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});
