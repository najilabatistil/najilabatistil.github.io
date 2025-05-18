var leftSection = document.getElementById("leftSection");
var rightSection = document.getElementById("rightSection");
var topSection = document.getElementById("topSection");
var productsSection = document.getElementById("productsSection");

function adjustLayout() {
  if (screen.height >= 900) {
    leftSection.className = "col-12";
    rightSection.className = "col-12";
    topSection.className = "col-12";
    productsSection.className = "col-12";
  }
}

adjustLayout();