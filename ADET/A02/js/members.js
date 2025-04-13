var members = [
  {
    name: "Julian Casablancas",
    position: "Lead Singer / Songwriter",
    image: "julian.png"
  },
  {
    name: "Nick Valensi",
    position: "Guitarist",
    image: "nick.png"
  },
  {
    name: "Albert Hammond Jr.",
    position: "Guitarist",
    image: "albert.png"
  },
  {
    name: "Nikolai Fraiture",
    position: "Bassist",
    image: "nikolai.png"
  },
  {
    name: "Fabrizio Moretti",
    position: "Drummer",
    image: "fab.png"
  }
]

function createMembersContent() {
  for (var i = 0; i < members.length; i++) {
    var member = members[i];
    var container = document.getElementById("membersContainer");

    container.innerHTML += 
    `
      <div class="col-6 col-md-4 text-center p-2 p-sm-3">
        <div class="img-container">
          <!-- Image -->
          <img src="img/members/` + member.image + `" class="img-fluid" alt="Image of ` + member.name + `">

          <!-- Text Hover -->
          <span class="img-hover">
            <h4 class="subheading mx-3 mb-0">
              ` + member.name + `
            </h4>
            <p class="m-0">
              ` + member.position + `
            </p>
          </span>
        </div>

        <!-- Image Label -->
        <span class="img-label">
          <h4 class="subheading mt-2 mb-0">
            ` + member.name + `
          </h4>
          <p class="m-0">
            ` + member.position + `
          </p>
        </span>
      </div>
    `
  }
}

createMembersContent();