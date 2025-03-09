var projects = [
  {
    title: "Project 1",
    description: "A simple website showcasing the features of the Samsung Galaxy A53 5G phone.",
    thumbnail: "project1.png",
    link: "project1/"
  },
  {
    title: "Project 2",
    description: "A website showcasing the Municipality of Rosario, utilizing Bootstrap for responsiveness.",
    thumbnail: "project2.png",
    link: "project2/"
  },
  {
    title: "Project 3",
    description: "A website featuring a gallery of Stardew Valley characters using JavaScript loops.",
    thumbnail: "project3.png",
    link: "project3/"
  },
  {
    title: "Project 4",
    description: "A website that fetches data from the Neko Atsume API, allowing searching, viewing, and pagination using URL parameters.",
    thumbnail: "project4.png",
    link: "project4/"
  },
  {
    title: "Project 5",
    description: "A website featuring an embedded video of the Galaxy S24 Series.",
    thumbnail: "project5.png",
    link: "project5/"
  },
  {
    title: "Project 6",
    description: "A website implementing the parallax design.",
    thumbnail: "project6.png",
    link: "project6/"
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
                  <a href="` + project.link + `" target="_blank" class="btn custom-btn mb-2">
                    Visit <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                  <a href="https://github.com/najilabatistil/najilabatistil.github.io/tree/main/webdev/` + project.link + `" target="_blank" class="btn custom-btn">
                    View Code
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