var albums = [
  {
    name: "The New Abnormal",
    image: "tna.png",
    spotify: "https://open.spotify.com/album/2xkZV2Hl1Omi8rk2D7t5lN?si=NRadwL4_T8uazn4C2LWJIQ",
    youtube: "https://youtube.com/playlist?list=PLiJs4u3SwK3_1b_te_QOXK4V5saHWK-eZ&si=pZe5p4IMOS4O7vWl"
  },
  {
    name: "Comedown Machine",
    image: "cm.png",
    spotify: "https://open.spotify.com/album/4WnkQO4xD9ljQooB3VIxCV?si=cJQaOATtT8SwdTiL3O2utg",
    youtube: "https://youtube.com/playlist?list=OLAK5uy_mjWdvfzsg7VpVSb33xnv-6wCZFkgA4tI8&si=QKNn-O-WcqNaSO3a"
  },
  {
    name: "Angles",
    image: "angles.png",
    spotify: "https://open.spotify.com/album/6Jx4cGhWHewTcfKDJKguBQ?si=Cq2qE7hQS4OWGcuKEHBhhA",
    youtube: "https://youtube.com/playlist?list=OLAK5uy_nV-SK8S60EH3x1ReOwNOSc0NIabJlc7Pc&si=smtVKRydMdPCQ5wK"
  },
  {
    name: "First Impressions Of Earth",
    image: "fioe.png",
    spotify: "https://open.spotify.com/album/1HQ61my1h3VWp2EBWKlp0n?si=UNLqewDhTGy48XVJ3ArY6Q",
    youtube: "https://youtube.com/playlist?list=OLAK5uy_lyoMzkFYemmA7Mvzu0BI5ZkTCvdhucrqI&si=6rBZA7UNGLoR8lkc"
  },
  {
    name: "Room On Fire",
    image: "rof.png",
    spotify: "https://open.spotify.com/album/3HFbH1loOUbqCyPsLuHLLh?si=twJAYRVHTouNpG_6J2qfxw",
    youtube: "https://youtube.com/playlist?list=OLAK5uy_maPJVRMRXRbnI955d2PdBCIhy7Y-vTQDE&si=RCGf5W43dBnAR-f_"
  },
  {
    name: "Is This It",
    image: "isthisit.png",
    spotify: "https://open.spotify.com/album/2yNaksHgeMQM9Quse463b5?si=pHxABBV3TYudhWrVhKQ-QQ",
    youtube: "https://www.youtube.com/playlist?list=OLAK5uy_l98-V9f_VuC895QYk58lbFlwaE0QyMaro"
  }
]

function createAlbumsContent() {
  for (var i = 0; i < albums.length; i++) {
    var album = albums[i];
    var container = document.getElementById("albumsContainer");

    container.innerHTML += 
    `
      <div class="col-6 col-md-4 text-center p-2 p-sm-3">
        <!-- Image -->
        <div class="img-container">
          <img src="img/albums/` + album.image + `" class="img-fluid" alt="Album cover of` + album.name + `">

          <!-- Image Hover -->
          <span class="img-hover">
            <h4 class="subheading mx-3">` + album.name + `</h4>

            <ul class="d-flex flex-row justify-content-center p-0">
              <li>
                <a href="` + album.spotify + `" class="nav-link social px-2" target="_blank" >
                  <i class="bi bi-spotify"></i>
                </a>
              </li>
              <li>
                <a href="` + album.youtube + `" class="nav-link social px-2" target="_blank">
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </span>
        </div>

        <!-- Image Label -->
        <span class="img-label">
          <h4 class="subheading my-2">` + album.name + `</h4>

          <ul class="d-flex justify-content-center p-0 mb-0">
            <li>
              <a href="` + album.spotify + `" class="nav-link social px-2" target="_blank" >
                <i class="bi bi-spotify"></i>
              </a>
            </li>
            <li>
              <a href="` + album.youtube + `" class="nav-link social px-2" target="_blank">
                <i class="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
        </span>
      </div>
    `
  }
}

createAlbumsContent();