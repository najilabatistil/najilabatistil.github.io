var projects = [
  {
    title: "Activity 5",
    description: "A simple social media website that pulls data from a database and displaying it using the SELECT statement.",
    images: ["a05i.png"],
    link: "A05/"
  },
  {
    title: "Midterm Output",
    description: "A continuation of Activity 5, adding the ability to create new posts using the INSERT statement.",
    images: ["m01i.png", "m01ii.png"],
    link: "M01/"
  },
  {
    title: "Activity 6",
    description: "A continuation of the Midterm Output, adding login functionality, a settings page, and the ability to delete posts and user account using the UPDATE and DELETE statements respectively.",
    images: ["a06i.png", "a06ii.png", "a06iii.png"],
    link: "A06/"
  },
  {
    title: "Activity 7",
    description: "A continuation of Activity 6, adding the ability to edit posts and user information using the UPDATE statement.",
    images: ["a07i.png", "a07ii.png"],
    link: "A07/"
  },
  {
    title: "Activity 8",
    description: "A website that displays flight logs with filtering, sorting, and search functionality. ",
    images: ["a08i.png", "a08ii.png"],
    link: "A08/"
  },
  
]

function createProjectCard() {
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var container = document.getElementById("projectsContainer");

    var images = "";

    for (var j = 0; j < project.images.length; j++) {
      var colSize = "";

      switch(project.images.length) {
        case 3:
          colSize = "col-lg-4";
          break;
        case 2:
          colSize = "col-lg-6"
          break;
        default:
          colSize = "col-12";
      }

      images +=
      `
      <div class="`+ colSize +` d-flex justify-content-center mb-3 h-lg-100">
        <img src="assets/img/`+ project.images[j] +`" class="img-fluid projectpg-img">
      </div>
      `
    }

    container.innerHTML += 
    `
      <div class="col-12 col-md-11 col-lg-10 d-flex justify-content-center my-3">
        <div class="card w-100 p-3">
          <div class="row d-flex justify-content-center h-100">
            <div class="col-12 col-lg-11 p-0">
              <div class="card-body d-flex flex-column align-items-center px-3 w-100  h-100">
                <!-- Text -->
                <div class="row w-100">
                  <h4 class="px-0">`+ project.title +`</h4>
                  <p class="px-0">`+ project.description +`</p>
                </div>

                <!-- Images -->
                <div class="row d-flex justify-content-center align-items-center h-100">
                `+ images +`
                </div>

                <!-- Button -->
                <div class="row mt-auto">
                  <a href="https://github.com/najilabatistil/database-administration/tree/main/` + project.link + `" target="_blank" class="btn custom-btn">
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