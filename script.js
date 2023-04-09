let openMenu = document.querySelector('div#open-menu');
let mobileMenu = document.querySelector('div#mobile-menu');

const hideMenu = () => {
  mobileMenu.style.visibility = 'hidden';
};

const showMenu = () => {
  mobileMenu.style.visibility = 'visible';
};

openMenu.addEventListener('click', () => {
  showMenu();
});

let closeMenu = document.querySelector('#close-menu');

closeMenu.addEventListener('click', () => {
  hideMenu();
});

let menuLinks = document.querySelectorAll('a.menu-link');
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', () => {
    hideMenu();
  });
}
