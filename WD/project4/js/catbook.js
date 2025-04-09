var container = document.getElementById("catContainer");
var loadingBar = document.getElementById("loadingBar");

var page = 1;

const loadCatbook = async () => {
  var pageStart = 1 + ((page - 1) * 6);
  var pageTotal = pageStart + 5;

  loadingBar.style.width = "5%";

  for (var i = pageStart; i <= pageTotal; i++) {
    var response = await fetch('https://api.neko-atsume.emshea.com/cats/' + i);
    var cat = await response.json();

    container.innerHTML += `
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 my-4">
          <a href="view.html?cat=` + cat.CatName + `" style="text-decoration: none">
          <div class="card cat-card text-center">
            <div class="card-header d-flex justify-content-center align-items-center">
              <h1 class="cat-name">` + cat.CatName + `</h1>
            </div>
            <div class="img-container p-5">
              <img src="` + cat.CatImage + `" class="img-fluid" style="height:80px;">
            </div>
          </div>
        </div>`;

    loadingBar.style.width = 5 + (((i - pageStart) + 1)) * (95 / 6) + '%';
  }
}

var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

function checkButtonState() {
  // Check if next page button should be disabled
  if (page >= 11) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  // Check if prev page button should be disabled
  if (page <= 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

var pageNumber = document.getElementById("pageNumber");

function nextPage() {
  container.innerHTML = "";
  loadingBar.style.width = "0%";
  page += 1;
  pageNumber.innerHTML = "Page " + page + "/11";
  loadCatbook();

  checkButtonState();
}

function prevPage() {
  container.innerHTML = "";
  loadingBar.style.width = "0%";
  page -= 1;
  pageNumber.innerHTML = "Page " + page + "/11";
  loadCatbook();

  checkButtonState();
}

checkButtonState();
loadCatbook();