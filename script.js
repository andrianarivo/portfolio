const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/project1_snapshot.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/project2_snapshot.png',
    technologies: ['HTML', 'CSS', 'JS'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/project3_snapshot.png',
    technologies: ['HTML', 'CSS', 'JS'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/project4_snapshot.png',
    technologies: ['HTML', 'CSS', 'JS'],
    linkToLive: '#',
    linkToSource: '#',
  },
];

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

window.addEventListener('resize', hideMenu);

openMenu.addEventListener('click', showMenu);

const closeMenu = document.querySelector('#close-menu');

closeMenu.addEventListener('click', hideMenu);

const menuLinks = document.querySelectorAll('a.menu-link');

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    hideMenu();
  });
}

const closePopupIcon = document.querySelector('#close-popup-icon');

const popupWindow = document.querySelector('#popup-window');

const projectButtons = document.querySelectorAll('.projects .project-item .content .button-outlined');

const openPopupWindow = (projectItem) => {
  const projectName = document.querySelector('#project-name');
  const projectDesc = document.querySelector('#project-description');
  const projectImage = document.querySelector('#project-image');
  const projectTechs = document.querySelectorAll('#project-technologies li');
  const projectLinkToLive = document.querySelector('#link-to-live');
  const projectLinkToSource = document.querySelector('#link-to-source');

  projectName.innerHTML = projectItem.name;
  projectDesc.innerHTML = projectItem.description;
  projectImage.src = projectItem.featuredImage;

  for (let i = 0; i < projectTechs.length; i += 1) {
    projectTechs[i].innerHTML = projectItem.technologies[i];
  }

  projectLinkToLive.href = projectItem.linkToLive;
  projectLinkToSource.href = projectItem.linkToSource;

  popupWindow.style.visibility = 'visible';
};

const closePopupWindow = () => {
  popupWindow.style.visibility = 'hidden';
};

closePopupIcon.addEventListener('click', closePopupWindow);

for (let i = 0; i < projectButtons.length; i += 1) {
  projectButtons[i].addEventListener('click', () => {
    openPopupWindow(projects[i]);
  });
}
