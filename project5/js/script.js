var devices = [
  {
    name: "Galaxy S24 Ultra",
    description: "Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 6.8\" flat display. It's an absolute marvel of design.",
    carouselId: "carouselS24Ultra",
    folder: "ultra",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    link: "https://www.samsung.com/ph/smartphones/galaxy-s24-ultra/"
  },
  {
    name: "Galaxy S24+ | S24",
    description: "Welcome to the era of mobile AI. With Galaxy S24 | S24+ in your hands, you can unleash whole new levels of creativity, productivity and possibility — starting with the most important device in your life. Your smartphone.",
    carouselId: "carouselS24Plus",
    folder: "plus",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    link: "https://www.samsung.com/ph/smartphones/galaxy-s24/"
  },
  {
    name: "Galaxy S24 FE",
    description: "Meet the Galaxy S24 FE with Galaxy AI, where every photo sparks endless creativity. Immerse yourself in the full Galaxy AI experience and unlock countless ways to explore your imagination. Snap it, circle it, tap it – discover why it's totally worth it.",
    carouselId: "carouselS24FE",
    folder: "fe",
    images: ["1.jpg", "2.jpg", "3.png"],
    link: "https://www.samsung.com/ph/smartphones/galaxy-s/galaxy-s24-fe-blue-256gb-sm-s721blbcphl/"
  }
];

function createContent() {
  for (var i = 0; i < devices.length; i++) {
    var device = devices[i];
    var order1 = (device.name == "Galaxy S24+ | S24") ? " order-1 order-lg-2" : " ";
    var order2 = (device.name == "Galaxy S24+ | S24") ? " order-2 order-lg-1" : " ";

    var container = document.getElementById("contentContainer");

    var carouselItems = '';

    for (var j = 0; j < device.images.length; j++) {
      var active = (j == 0) ? " active" : " ";

      carouselItems += `
        <div class="carousel-item` + active  + `">
          <img src="img/` + device.folder + `/` + device.images[j] + `" class="d-block w-100" alt="...">
        </div>`;
    }

    container.innerHTML += `
      <div class="row justify-content-center align-items-center py-5">
        <div class="col-10 col-lg-4 py-3` + order1 + `">
          <h1>` + device.name + `</h1>
          <p>` + device.description + `</p>
          <a href="` + device.link + `" target="_blank" class="btn more-btn rounded-5">Learn More</a>
        </div>
        <div class="col-10 col-md-4 py-3`+ order2 +`">
          <div id="` + device.carouselId + `" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner rounded-4 shadow-sm">` +
              carouselItems
            + `</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#` + device.carouselId + `" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#` + device.carouselId + `" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>`;
  }
}

createContent();