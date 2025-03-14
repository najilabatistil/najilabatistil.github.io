var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

var img = document.getElementById("catImage");
var catName = document.getElementById("catName");
var type = document.getElementById("catType");
var appearance = document.getElementById("catAppearance");
var personality = document.getElementById("catPersonality");
var level = document.getElementById("catLevel");
var memento = document.getElementById("catMemento");

var loadingBar = document.getElementById("loadingBar");

var currentCatId;

function checkButtonState() {
  // Check if prev page button should be disabled
  if (currentCatId == 66) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  // Check if prev page button should be disabled
  if (currentCatId == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

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

  currentCatId = parseInt(cat.CatId);

  history.replaceState(null, null, "?cat=" + cat.CatName);
  checkButtonState();
  loadingBar.style.width = "100%";
}

const nextCat = async () => {
  const nextCatId = currentCatId + 1;
  const response = await fetch('https://api.neko-atsume.emshea.com/cats/' + nextCatId);
  const cat = await response.json();

  checkButtonState();
  loadCat(cat.CatName);
}

const prevCat = async () => {
  const prevCatId = currentCatId - 1;
  const response = await fetch('https://api.neko-atsume.emshea.com/cats/' + prevCatId);
  const cat = await response.json();

  checkButtonState();
  loadCat(cat.CatName);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('cat')) {
  loadCat(urlParams.get('cat'));
} else {
  document.getElementById("catName").innerHTML = "Wrong name.";
}