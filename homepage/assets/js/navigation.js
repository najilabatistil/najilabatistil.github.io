function getPageFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('page') || 'about';
}

function loadPage(page = 'about') {
  activateNavbarLink(page);
  setBackgroundandTitle(page);
  loadContent(page);

  const url = new URL(window.location);
  url.searchParams.set('page', page);
  history.replaceState(null, '', url);
}

function activateNavbarLink(page) {
  const navbarLinks = document.getElementsByClassName("navbar-link");
  page = (page === "webdev" || page === "appdev") ? "projects" : page;

  Array.from(navbarLinks).forEach(navbarLink => {
    (navbarLink.classList.contains("btn-" + page)) ? navbarLink.classList.add("active") : navbarLink.classList.remove("active");
  });
}

function setBackgroundandTitle(page) {
  const container = document.getElementById('container');
  const title = document.getElementById('pageTitle');
  const titleContainer = document.getElementById('titleContainer');
  titleContainer.innerHTML = '';

  switch (page) {
    case 'about':
      container.style.setProperty('--theme-color', 'var(--orange)');
      title.textContent = "Najila Joanne | About";
      break;

    case 'skills':
      container.style.setProperty('--theme-color', 'var(--green)');
      title.textContent = "Najila Joanne | Skills";
      break;

    case 'projects':
      container.style.setProperty('--theme-color', 'var(--purple)');
      title.textContent = "Najila Joanne | Projects";
      titleContainer.innerHTML = 'Projects';
      break;

    case 'webdev':
      container.style.setProperty('--theme-color', 'var(--purple)');
      title.textContent = "Najila Joanne | Projects for Web Development";
      titleContainer.innerHTML = 'Web Development';
      break;

    case 'appdev':
      container.style.setProperty('--theme-color', 'var(--purple)');
      title.textContent = "Najila Joanne | Projects for Applications Development";
      titleContainer.innerHTML = 'Applications Development';
      break;

    default:
      break;
  }
}

function loadContent(page) {
  const container = document.getElementById('contentContainer');

  showSkeleton();
  container.innerHTML = '';

  switch (page) {
    case 'about':
      showSkeleton(); 
      fetch(`homepage/pages/${page}.html`)
        .then(res => res.text())
        .then(html => {
          setTimeout(() => {
            container.innerHTML = html;
            hideSkeleton();
          }, 300);
        })
        .catch(error => console.error(error));
      break;

    case 'skills':
      showSkeleton(); 
      setTimeout(() => {
        createSkillsSection(container);
        hideSkeleton();
      }, 300);
      break;

    case 'projects':
      showSkeleton(); 
      setTimeout(() => {
        createProjectCard(container);
        hideSkeleton();
      }, 300);
      break;

    case 'webdev':
      showSkeleton(); 
      setTimeout(() => {
        createWDCard(container);
        hideSkeleton();
      }, 300);
      break;

    case 'appdev':
      showSkeleton(); 
      setTimeout(() => {
        createADETCard(container);
        hideSkeleton();
      }, 300);
      break;
    
    default:
      break;
  }
}

function showSkeleton() {
  document.getElementById('skeleton').style.display = 'flex';
  document.getElementById('contentContainer').style.display = 'none';
}

function hideSkeleton() {
  document.getElementById('skeleton').style.display = 'none';
  document.getElementById('contentContainer').style.display = 'flex';
}