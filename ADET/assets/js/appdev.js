var projects = [
  {
    title: "Activity 1",
    description: "A one-index PHP website utilizing the MVC architecture, using a URL GET variable to switch between contents/pages.",
    thumbnail: "soon.png",
    link: "A02"
  }
]

function createProjectCard() {
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var container = document.getElementById("projectsContainer");

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
                  <a href="https://github.com/najilabatistil/najilabatistil.github.io/tree/main/ADET/` + project.link + `" target="_blank" class="btn custom-btn">
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