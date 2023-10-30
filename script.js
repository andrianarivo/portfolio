const projects = [
  {
    name: 'Genshin Summit',
    description:
      'A Creative Common website that features Genshin impact summit where users can look at the program, the featured speakers and past summits.',
    featuredImage: 'images/cc_genshin.png',
    captions: ['Website', 'Front-End', '2023'],
    technologies: ['HTML', 'SASS', 'Javascript'],
    linkToLive: 'https://andrianarivo.github.io/capstone-1/index.html',
    linkToSource: 'https://github.com/andrianarivo/capstone-1',
  },
  {
    name: 'Space Travelers\' Hub',
    description: 'Space-Travelers-Hub is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    featuredImage: 'images/space_travelers.png',
    captions: ['WebApp', 'Front-end', '2023'],
    technologies: ['React', 'Redux', 'Rest API', 'Styled Components'],
    linkToLive: 'https://space-traverlers-static.onrender.com',
    linkToSource: 'https://github.com/Salimer/Space-Travelers-Hub',
  },
  {
    name: 'Covid-19 Metrics',
    description: 'The "Covid-19 Metrics" is a React-based web application that provides real-time information about the number of active COVID-19 cases on each continent and allows users to explore further by displaying the active cases for each country within a selected continent.',
    featuredImage: 'images/covid19_metrics.png',
    captions: ['WebApp', 'Front-end', '2023'],
    technologies: ['React', 'Redux', 'Rest API', 'CSS'],
    linkToLive: 'https://extraordinary-kitten-6a3f95.netlify.app/',
    linkToSource: 'https://github.com/andrianarivo/covid-19-metrics',
  },
  {
    name: 'Restaurant Budgeter',
    description: 'Restaurant Budget is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    featuredImage: 'images/restaurant_budgeter.png',
    captions: ['WebApp', 'Full-stack', '2023'],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Google Cloud Storage'],
    linkToLive: 'https://restaurant-budget-testing.onrender.com/',
    linkToSource: 'https://github.com/andrianarivo/restaurant-budget',
  },
  {
    name: 'DocConnect',
    description: 'DocConnect is a Ruby on Rails web application with PostgreSQL as database. It allows to manage your budget by creating categories of expenses, and transactions for each category.',
    featuredImage: 'images/docconnect.png',
    captions: ['WebApp', 'Full-stack', '2023'],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Google Cloud Storage'],
    linkToLive: 'https://dev--jovial-longma-dea964.netlify.app/',
    linkToSource: 'https://github.com/Atril33/DocConnect-Backend',
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
  const projectTechContainer = document.querySelector('#project-technologies');
  const projectHeaders = document.querySelectorAll('ul.captions li');
  const projectLinkToLive = document.querySelector('#link-to-live');
  const projectLinkToSource = document.querySelector('#link-to-source');

  projectName.innerHTML = projectItem.name;
  projectDesc.innerHTML = projectItem.description;
  projectImage.src = projectItem.featuredImage;

  let i = 0;
  projectItem.captions.forEach((caption) => {
    projectHeaders[i].innerHTML = caption;
    i += 2;
  });

  projectTechContainer.innerHTML = '';
  projectItem.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.className = 'text-medium text-dark-purple';
    li.innerText = technology;
    projectTechContainer.appendChild(li);
  });

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

const contactForm = document.forms['contact-form'];

const validateContactForm = () => {
  const contactEmail = contactForm.email.value;
  const formIsValid = contactEmail.toLowerCase() === contactEmail;
  const formValidationText = document.querySelector('.form-validation-text');
  if (formIsValid) {
    formValidationText.style.display = 'none';
  } else {
    formValidationText.style.display = 'block';
  }
  return formIsValid;
};

contactForm.onsubmit = () => validateContactForm();

const toolsHeaders = document.querySelectorAll('.tools-header');

toolsHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    closeToolsHeaders();
    const isOpen = header.querySelector('i').className === 'fa-sharp fa-solid fa-chevron-down'
    if(isOpen) {
      header.nextElementSibling.style.display = 'none';
      header.querySelector('i').className = 'fa-sharp fa-solid fa-chevron-right';
    } else {
      openToolsHeader(header)
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  closeToolsHeaders();
  openToolsHeader(toolsHeaders[0]);
});

const openToolsHeader = (element) => {
  element.nextElementSibling.style.display = 'flex';
  element.querySelector('i').className = 'fa-sharp fa-solid fa-chevron-down';
}

const closeToolsHeaders = () => {
  toolsHeaders.forEach((header, index) => {
    header.nextElementSibling.style.display = 'none';
    header.querySelector('i').className = 'fa-sharp fa-solid fa-chevron-right';
  });
}