var projects = [
  {
    name: "Web Development",
    description: "My projects under the Web Development course during the first semester of my third year in university.",
    image: "webdev.png",
    alt: "Code icon",
    link: "webdev/"
  },
  {
    name: "Applications Development and Emerging Technologies",
    description: "My projects under the Applications Development and Emerging Technologies course during the second semester of my third year in university.",
    image: "appdev.png",
    alt: "Smartphone icon",
    link: "appdev/"
  }
]

function createProjectCard() {
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var projectsContainer = document.getElementById("projectsContainer");

    projectsContainer.innerHTML += 
    `
      <div class="col-12 col-lg-10 d-flex justify-content-center my-3">
        <div class="card p-3">
          <div class="row">
            <!-- Image -->
            <div class="col-12 col-md-6">
              <div class="project-img-container d-flex justify-content-center align-items-center h-100 p-3">
                <img src="assets/img/projects/`+ project.image +`" class="project-img" alt="` + project.alt + `">
              </div>
            </div>

            <!-- Body -->
            <div class="col-12 col-md-6">
              <div class="card-body px-0 my-auto">
                <h4>`+ project.name +`</h2>
                <p>`+ project.description +`</p>
                <a href="`+ project.link +`" target="_blank" class="btn custom-btn w-100 mb-2">
                  View <i class="bi bi-box-arrow-up-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

createProjectCard();