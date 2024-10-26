var img = document.getElementById("catImage");
var catName = document.getElementById("catName");
var type = document.getElementById("catType");
var appearance = document.getElementById("catAppearance");
var personality = document.getElementById("catPersonality");
var level = document.getElementById("catLevel");
var memento = document.getElementById("catMemento");

var loadingBar = document.getElementById("loadingBar");

const loadCat = async (searchTerm) => {
  loadingBar.style.width = "25%";

  const response = await fetch('https://api.neko-atsume.emshea.com/cats/' + searchTerm);
  const cat = await response.json();

  img.src = cat.CatImage;
  catName.innerHTML = cat.CatName;
  type.innerHTML = cat.CatType + ' Cat';
  appearance.innerHTML = cat.CatDescription;
  personality.innerHTML = cat.CatPersonality;
  level.innerHTML = cat.CatPowerLevel;
  memento.innerHTML = cat.Memento;

  loadingBar.style.width = "100%";
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('cat')) {
  loadCat(urlParams.get('cat'));
} else {
  document.getElementById("catName").innerHTML = "Wrong name.";
}