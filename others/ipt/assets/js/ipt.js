var projects = [
  {
    title: "Project 1",
    description: "A simple, 'useless' Java application created as a learning activity. The application allows users to resize/crop and move an image using buttons.",
    images: ["project1a.png", "project1b.png", "project1c.png"],
    link: "UselessApp"
  },
  {
    title: "Project 2",
    description: "A Java application featuring resusable custom components by using classes and objects and creating multiple instances of it using a loop. The application displays game cards, allowing users to click on a card to view its details, with pagination implemented for easy navigation.",
    images: ["project2a.png", "project2b.png"],
    link: "CustomComponent"
  },
  {
    title: "Project 3",
    description: "A Java application that features a low-poly art using the Java Graphics class.",
    images: ["project3.png"],
    link: "LowPoly"
  },
  {
    title: "Project 4",
    description: "A Java application that utilizes the Timer class to create a simple animation.",
    images: ["project4.png", "project4.gif"],
    link: "Animation"
  },
  {
    title: "Project 5",
    description: "Another Java application that utilizes the Timer class to create an animation.",
    images: ["project5.png", "project5.gif"],
    link: "TimerAnimation2"
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
          colSize = "col-sm-4";
          break;
        case 2:
          colSize = "col-sm-6"
          break;
        default:
          colSize = "col-12";
      }

      images +=
      `
      <div class="`+ colSize +` d-flex justify-content-center mb-3">
        <img src="assets/img/`+ project.images[j] +`" class="img-fluid projectpg-img">
      </div>
      `
    }

    container.innerHTML += 
    `
      <div class="col-12 col-md-11 col-lg-9 d-flex justify-content-center my-3">
        <div class="card w-100 p-3">
          <div class="row d-flex justify-content-center h-100">
            <div class="col-12 col-lg-11 p-0">
              <div class="card-body d-flex flex-column align-items-center px-3 h-100">
                <!-- Text -->
                <div class="row w-100">
                  <h4>`+ project.title +`</h4>
                  <p>`+ project.description +`</p>
                </div>

                <!-- Images -->
                <div class="row d-flex justify-content-center align-items-center">
                `+ images +`
                </div>

                <!-- Button -->
                <div class="row mt-auto">
                  <a href="https://github.com/najilabatistil/IPT/tree/main/` + project.link + `/src" target="_blank" class="btn custom-btn">
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