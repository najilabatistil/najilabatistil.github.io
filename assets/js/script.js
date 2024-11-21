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
  }
]

function createProjectCard() {
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var container = document.getElementById("projectContainer");

    container.innerHTML += `
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 my-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s"> 
        <div class="card h-100">
          <img src="assets/img/thumbnails/` + project.thumbnail + `" class="card-img-top" style="border-bottom: 2px solid black">
          <div class="card-body d-flex flex-column">
            <h2>` + project.title + `</h2>
            <p class="card-text">` + project.description + `</p>
            <a href="` + project.link + `" target="_blank" class="mt-auto btn page-btn">Visit <i class="bi bi-box-arrow-up-right"></i></a>
          </div>
        </div>
      </div>`
  }
}

createProjectCard();