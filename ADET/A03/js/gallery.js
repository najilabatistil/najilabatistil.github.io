var images = [
  {
    name: "01",
    colSize: "col-lg-auto"
  },
  {
    name: "06",
    colSize: "col-lg-auto"
  },
  {
    name: "02",
    colSize: "col-xl-auto"
  },
  {
    name: "03",
    colSize: "col-xl-4"
  },
  {
    name: "04",
    colSize: "col-xl-4"
  },
  {
    name: "05",
    colSize: "col-xl-4"
  }
]

function createImages() {
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var container = document.getElementById("imageContainer");

    container.innerHTML += 
    `
      <div class="col-6 col-sm-6 ` + image.colSize + ` my-2">
        <div class="card clickable">
          <img src="img/gallery/` + image.name + `.png" class="img-fluid my-auto" data-bs-toggle="modal" data-bs-target="#imageModal" onclick="openModal('img/gallery/` + image.name + `.png')">
        </div>
      </div>
    `
  }
}

function openModal(imagePath) {
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imagePath;
}

createImages();