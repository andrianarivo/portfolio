let openMenu = document.querySelector('div#open-menu');
let mobileMenu = document.querySelector('div#mobile-menu');

const isOnMobile = () => {
  return screen.width < 768;
};

window.addEventListener('resize', () => {
  hideMenu();
});

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
