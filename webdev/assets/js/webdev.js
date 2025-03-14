var projects = [
  {
    title: "Project 1",
    description: "A simple website showcasing the features of the Samsung Galaxy A53 5G phone.",
    thumbnail: "project1.png",
    link: "project1/",
    github: "https://github.com/najilabatistil/najilabatistil.github.io/tree/main/webdev/project1/"
  },
  {
    title: "Project 2",
    description: "A website showcasing the Municipality of Rosario, utilizing Bootstrap for responsiveness.",
    thumbnail: "project2.png",
    link: "project2/",
    github: "https://github.com/najilabatistil/najilabatistil.github.io/tree/main/webdev/project2/"
  },
  {
    title: "Project 3",
    description: "A website featuring a gallery of Stardew Valley characters using JavaScript loops.",
    thumbnail: "project3.png",
    link: "project3/",
    github: "https://github.com/najilabatistil/najilabatistil.github.io/tree/main/webdev/project3/"
  },
  {
    title: "Project 4",
    description: "A website that fetches data from the Neko Atsume API, allowing searching, viewing, and pagination using URL parameters.",
    thumbnail: "project4.png",
    link: "project4/",
    github: "https://github.com/najilabatistil/najilabatistil.github.io/tree/main/webdev/project4/"
  },
  {
    title: "Project 5",
    description: "A website featuring an embedded video of the Galaxy S24 Series.",
    thumbnail: "project5.png",
    link: "project5/",
    github: "https://github.com/najilabatistil/najilabatistil.github.io/tree/main/webdev/project5/"
  },
  {
    title: "Project 6",
    description: "A website implementing the parallax design.",
    thumbnail: "project6.png",
    link: "project6/",
    github: "https://github.com/najilabatistil/najilabatistil.github.io/tree/main/webdev/project6/"
  },
  {
    title: "Project 7 - Backend",
    description: "A website showcasing my 'Islands of Personality,' with all content retrieved and displayed from a database.",
    thumbnail: "project7.png",
    link: "n/a",
    github: "https://github.com/najilabatistil/WD-BE/tree/main/A08"
  },
  {
    title: "Final Project - PesoBuddy",
    description: "A website developed as a final group project for the Web Development and Database Administration courses. PesoBuddy is a personal finance management website through which users can monitor income and categorize and track their savings. <br><br> I served as a full stack developer, responsible for both frontend and backend development.",
    thumbnail: "finalproj.png",
    link: "n/a",
    github: "https://github.com/FINTALIX/PesoBuddy.com"
  }
]

function createProjectCard() {
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var container = document.getElementById("projectsContainer");

    var btnVisibility = (project.link == "n/a") ? "d-none" : "";

    container.innerHTML += 
    `
      <div class="col-12 col-md-11 col-lg-10 d-flex justify-content-center my-3">
        <div class="card w-100 p-3">
          <div class="row h-100">
            <!-- Image -->
            <div class="col-12 col-md-6">
              <div class="projectpg-img-container d-flex justify-content-center align-items-center h-100">
                <img src="assets/img/`+ project.thumbnail +`" class="projectpg-img">
              </div>
            </div>

            <!-- Body -->
            <div class="col-12 col-md-6 p-0">
              <div class="card-body d-flex flex-column align-items-center px-3 my-auto h-100">
                <div class="row mb-3">
                  <h4>`+ project.title +`</h4>
                  <p>`+ project.description +`</p>
                </div>
                
                <div class="row mt-auto w-100">
                  <a href="` + project.link + `" target="_blank" class="btn custom-btn mb-2 `+ btnVisibility +`">
                    Visit <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                  <a href="` + project.github + `" target="_blank" class="btn custom-btn">
                    View Code on Github <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

createProjectCard();