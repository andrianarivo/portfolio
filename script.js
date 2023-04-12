const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/project1_snapshot.png',
    captions: ['CANOPY', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/project2_snapshot.png',
    captions: ['CANOPY', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JS'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/project3_snapshot.png',
    captions: ['CANOPY', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JS'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/project4_snapshot.png',
    captions: ['CANOPY', 'Back End Dev', '2015'],
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

const loadProject = (projectItem) => {
  const parent = document.createElement('div');
  parent.className = 'project-item';

  const img = document.createElement('img');
  img.src = projectItem.featuredImage;
  img.width = '295';
  img.height = '220';
  img.alt = `project ${projectItem.name}`;
  parent.appendChild(img);

  const content = document.createElement('div');
  content.className = 'content';

  const h3 = document.createElement('h3');
  h3.innerHTML = projectItem.name;
  h3.className = 'h1 text-bold';
  content.appendChild(h3);

  const captions = document.createElement('ul');
  captions.className = 'captions';
  for (let i = 0; i < projectItem.captions.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = projectItem.captions[i];
    if (i === 0) {
      li.className = 'text-bold';
    } else {
      li.className = 'text-medium text-light-grey';
    }
    captions.appendChild(li);
    if (i !== projectItem.captions.length - 1) {
      const counter = document.createElement('li');
      const span = document.createElement('span');
      span.className = 'counter';
      counter.appendChild(span);
      captions.appendChild(counter);
    }
  }
  content.appendChild(captions);

  const desc = document.createElement('p');
  desc.innerHTML = projectItem.description;
  content.appendChild(desc);

  const projLang = document.createElement('ul');
  projLang.className = 'project-language';
  for (let i = 0; i < projectItem.technologies.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'text-medium text-dark-purple';
    li.innerHTML = projectItem.technologies[i];
    projLang.appendChild(li);
  }
  content.appendChild(projLang);

  const button = document.createElement('button');
  button.innerHTML = 'See project';
  button.className = 'button-outlined text-medium';
  button.onclick = () => {
    openPopupWindow(projectItem);
  };
  content.appendChild(button);

  parent.appendChild(content);

  return parent;
};

const loadProjects = () => {
  const projectsElement = document.querySelector('.projects');
  for (let i = 0; i < projects.length; i += 1) {
    const projectItemElement = loadProject(projects[i]);
    projectsElement.appendChild(projectItemElement);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
});
