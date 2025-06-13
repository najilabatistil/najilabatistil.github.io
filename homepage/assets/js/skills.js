var skills = [
  {
    category: "Languages",
    cards: [
      {
        name: "PHP",
        image: "php.png",
        rating: 3
      },
      {
        name: "SQL",
        image: "sql.png",
        rating: 3
      },
      {
        name: "JavaScript",
        image: "javascript.png",
        rating: 3
      },
      {
        name: "Java",
        image: "java.png",
        rating: 2
      },
      {
        name: "Python",
        image: "python.png",
        rating: 1.5
      }
    ]
  },
  {
    category: "Web Development",
    cards: [
      {
        name: "Bootstrap",
        image: "bootstrap.png",
        rating: 4
      },
      {
        name: "HTML",
        image: "html5.svg",
        rating: 3.5
      },
      {
        name: "CSS",
        image: "css.svg",
        rating: 3.5
      }
    ]
  },
  {
    category: "Tools",
    cards: [
      {
        name: "Git",
        image: "git.png",
        rating: 2.5
      },
      {
        name: "Visual Studio Code",
        image: "vscode.png",
        rating: 2.5
      },
      {
        name: "Eclipse",
        image: "eclipse.svg",
        rating: 2
      }
    ]
  },
  {
    category: "Design",
    cards: [
      {
        name: "Figma",
        image: "figma.png",
        rating: 3
      },
      {
        name: "Photoshop",
        image: "photoshop.png",
        rating: 2
      }
    ]
  }
]

function createSkillsSection() {
  var skillsContainer = document.getElementById("skillsContainer");

  skills.forEach(skill => {
    skillsContainer.innerHTML +=
      `
      <div class="row pb-2">
        <div class="col-12 p-0">
          <h2 class="text-center text-md-start">`+ skill.category + `</h2>
        </div>
        `+ createSkillCards(skill.cards) + `
      </div>
      `;
  });
}

function createStars(rating) {
  var stars = '';

  for (var i = 0; i < 5; i++) {
    if (i < rating && rating != (i + 0.5)) {
        stars += '<i class="bi bi-star-fill"></i>';
    } else if (i < rating && rating == (i + 0.5)) {
        stars += '<i class="bi bi-star-half"></i>';
    } else {
        stars += '<i class="bi bi-star"></i>';
    }
  }

  return stars;
}

function createSkillCards(skillCards) {
  var skillList = '';

  skillCards.forEach(skillCard => {
    skillList +=
    `
    <div class="col-6 col-md-4 col-lg-3 d-flex justify-content-center px-1 px-lg-2 my-3">
        <div class="card p-3 h-100">
          <!-- Image -->
          <div class="skill-img-container d-flex justify-content-center align-items-center p-3">
            <img src="homepage/assets/img/skills/`+ skillCard.image + `" class="skill-img" alt="` + skillCard.name + ` Logo">
          </div>

          <!-- Body -->
          <div class="card-body d-flex flex-column align-items-center text-center pt-2 px-0 pb-0 my-auto">
              <h4 class="card-title">`+ skillCard.name + `</h4>
              <p class="card-text">`+ createStars(skillCard.rating) + `</p>
          </div>
        </div>
      </div>
    `;
  });

  return skillList;
}

createSkillsSection();