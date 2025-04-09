// GALLERY LOOP
var villagers = ["Caroline", "Clint", "Demetrius", "Dwarf", "Evelyn", "George", "Gus", "Jas", "Jodi", "Kent", "Krobus", "Leo", "Lewis", "Linus", "Marnie", "Pam", "Pierre", "Robin", "Sandy", "Vincent", "Willy", "Wizard"]
var marriage = ["Abigail", "Alex", "Elliott", "Emily", "Haley", "Harvey", "Leah", "Maru", "Penny", "Sam", "Sebastian", "Shane"]
var others = ["Birdie", "Bouncer", "Fizz", "Gil", "Governor", "Grandpa", "Gunther", "Henchman", "Marlon", "Morris", "Mr. Qi", "Professor Snail"]

function createContent(array, containerName, folder, code) {
  for (var i = 0; i < array.length; i++) {
    var container = document.getElementById(containerName);
    container.innerHTML += `<div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card rounded-3 my-3 p-3 text-center" card-theme="light" id="`+ code + i + `" onmouseenter="addHover('` + code + i + `')" onmouseleave="removeHover('` + code + i + `')">
          <div class="img-container">
            <img src="img/`+ folder + `/` + array[i] + `.png" class="w-75">
          </div>
          <h5 class="name mt-2">`+ array[i] + `</h5>
        </div>
      </div>`;
  }
}

createContent(villagers, "villagerContainer", "villagers", "v");
createContent(marriage, "marriageContainer", "marriage", "m");
createContent(others, "otherContainer", "others", "o");


// MOUSE EVENTS
function addHover(id) {
  document.getElementById(id).setAttribute("card-theme", "light-hover");
}

function removeHover(id) {
  document.getElementById(id).setAttribute("card-theme", "light");
}


// EXPAND/COLLAPSE CONTENTS
function expandContent(containerName, btn) {
  var cardContent = document.getElementById(containerName);
  var btnExpand = document.getElementById(btn);

  if (cardContent.style.display == "none") {
    cardContent.style.display = "block";
    btnExpand.innerHTML = "Collapse";
  } else {
    cardContent.style.display = "none";
    btnExpand.innerHTML = "Expand";
  }
}


// CHANGE LIGHT MODES
var colorMode = "light";

function changeMode() {
  var body = document.getElementById("body");
  var btnMode = document.getElementById("btnMode");

  colorMode = colorMode == "dark" ? "light" : "dark";
  body.setAttribute("bd-theme", colorMode);

  btnMode.innerHTML = colorMode == "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
}