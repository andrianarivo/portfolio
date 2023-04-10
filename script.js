const openMenu = document.querySelector('div#open-menu');
const mobileMenu = document.querySelector('div#mobile-menu');

const isOnMobile = () => window.screen.width < 768;

const hideMenu = () => {
  if (isOnMobile()) {
    mobileMenu.style.visibility = 'hidden';
  } else {
    mobileMenu.style.visibility = 'visible';
  }
};

const showMenu = () => {
  if (isOnMobile()) {
    mobileMenu.style.visibility = 'visible';
  }
};

window.addEventListener('resize', () => hideMenu());

openMenu.addEventListener('click', () => showMenu());

const closeMenu = document.querySelector('#close-menu');

closeMenu.addEventListener('click', () => hideMenu());

const menuLinks = document.querySelectorAll('a.menu-link');
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    hideMenu();
  });
}
