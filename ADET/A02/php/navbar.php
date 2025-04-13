<nav class="container-fluid main-nav sticky-top">
  <div class="row d-flex flex-row justify-content-center align-items-center px-sm-3 pt-3 pb-2">
    <!-- Logo -->
    <div class="col-12 col-lg-auto order-1 d-flex justify-content-center justify-content-lg-start">
      <a class="navbar-brand" href="./">the strokes</a>
    </div>

    <!-- Nav Buttons -->
    <div class="col order-3 order-lg-2 mt-2 mt-lg-0 px-0 px-sm-1">
      <ul class="navbar-nav navbar-items d-flex flex-row flex-wrap justify-content-center align-items-center">
        <li class="nav-item px-1 px-sm-3">
          <a class="nav-link <?php echo ($page == "home") ? "outlined" : ""; ?>" href="./">home</a>
        </li>
        <li class="nav-item px-1 px-sm-3">
          <a class="nav-link <?php echo ($page == "about") ? "outlined" : ""; ?>" href="?page=about">about</a>
        </li>
        <li class="nav-item px-1 px-sm-3">
          <a class="nav-link <?php echo ($page == "members") ? "outlined" : ""; ?>" href="?page=members">members</a>
        </li>
        <li class="nav-item px-1 px-sm-3">
          <a class="nav-link <?php echo ($page == "albums") ? "outlined" : ""; ?>" href="?page=albums">albums</a>
        </li>
      </ul>
    </div>

    <!-- Socials -->
    <div class="col-12 col-lg-auto order-2 order-lg-3">
      <ul class="navbar-nav navbar-items d-flex flex-row flex-wrap justify-content-center">
        <li class="nav-item">
          <a class="nav-link social px-2" href="https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V" target="_blank">
            <i class="bi bi-spotify"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link social px-2" href="https://www.youtube.com/channel/UC28OQSWdiW7jkadedZRRyZA" target="_blank">
            <i class="bi bi-youtube"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link social px-2" href="https://www.instagram.com/thestrokes/" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link social px-2" href="https://x.com/thestrokes" target="_blank">
            <i class="bi bi-twitter-x"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link social px-2" href="https://www.facebook.com/thestrokes" target="_blank">
            <i class="bi bi-facebook"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>