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
      container.style.setProperty('--theme-color', 'var(--yellow)');
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
  container.innerHTML = '';

  switch (page) {
    case 'about':
      fetch(`homepage/pages/${page}.html`)
        .then(res => res.text())
        .then(html => {
          container.innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));
      break;

    case 'skills':
      createSkillsSection(container);
      break;

    case 'projects':
      createProjectCard(container);
      break;

    case 'webdev':
      createWDCard(container);
      break;

    case 'appdev':
      createADETCard(container);

    default:
      break;
  }
}