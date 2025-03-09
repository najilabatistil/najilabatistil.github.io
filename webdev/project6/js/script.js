var gallery = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

function createGallery() {
  for (var i = 0; i < gallery.length; i++) {
    var container = document.getElementById("galleryContainer");

    container.innerHTML += `
      <div class="col-10 col-md-5 col-lg-4 my-3">
          <img src="img/gallery/` + gallery[i] + `" class="img-fluid rounded-3 shadow-sm wow animate__animated animate__fadeInUp" data-wow-delay="0.2s"">
      </div>`
  }
}

createGallery();