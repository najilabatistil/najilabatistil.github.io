var projects = [
  {
    name: "Applications Development and Emerging Technologies",
    languages: "HTML, CSS, JavaScript, PHP",
    image: "appdev.png",
    alt: "Icon of a smartphone",
    link: "ADET/"
  },
  {
    name: "Web Development",
    languages: "HTML, CSS, JavaScript, PHP, SQL",
    image: "webdev.png",
    alt: "Icon of brackets",
    link: "WD/"
  }
]

function createProjectCard() {
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var projectsContainer = document.getElementById("projectsContainer");

    projectsContainer.innerHTML += 
    `
      <div class="col-12 col-lg-10 d-flex justify-content-center my-3">
        <div class="card w-100 p-3">
          <div class="row">
            <!-- Image -->
            <div class="col-12 col-md-6">
              <div class="project-img-container d-flex justify-content-center align-items-center h-100 p-3">
                <img src="homepage/assets/img/projects/`+ project.image +`" class="project-img" alt="` + project.alt + `">
              </div>
            </div>

            <!-- Body -->
            <div class="col-12 col-md-6">
              <div class="card-body px-0 my-auto">
                <h4>`+ project.name +`</h2>
                <p>My projects under the `+ project.name +` course.</p>
                <p><u>Language/s used</u>: <br>`+ project.languages +`</p>
                <a href="`+ project.link +`" class="btn custom-btn w-100 mb-2">
                  View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

createProjectCard();