const form = document.getElementById('nav__list');
let btns = form.getElementsByClassName('nav__link');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('nav__link--active');
    current[0].className = current[0].className.replace(
      ' nav__link--active',
      '',
    );
    this.className += ' nav__link--active';
  });
}
