var container = document.getElementById("catContainer");
var loadingBar = document.getElementById("loadingBar");

const loadCat = async (searchTerm) => {
  container.innerHTML = "";
  loadingBar.style.width = "25%";

  const response = await fetch('https://api.neko-atsume.emshea.com/cats/' + searchTerm);
  const cat = await response.json();

  if (cat.CatName == undefined) {
    container.innerHTML = `<h3 class="d-flex justify-content-center p-4">No cat found.</h3>`;
  } else {
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
  }

  loadingBar.style.width = '100%';
}

function searchCat() {
  var searchTerm = document.getElementById("searchField").value;
  loadCat(searchTerm);
}

// Search cat using enter key instead of button
document.getElementById("searchField").addEventListener("keypress", event => {
  if (event.key === "Enter") searchCat();
});

// Clear search bar on refresh
window.onload = function() {
  document.getElementById('searchField').value = '';
}