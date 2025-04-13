<?php

$page = "home";

if (isset($_GET['page'])) {
  $page = $_GET['page'];

  switch ($page) {
    case "home":
      $page = "home";
      break;
    case "about":
      $page = "about";
      break;
    case "members":
      $page = "members";
      break;
    case "albums":
      $page = "albums";
      break;
    default:
      header("Location: ?page=home");
      break;
  }
} else {
  header("Location: ?page=home");
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Strokes - <?php echo ucfirst($page) ?></title>
  <link rel="icon" href="img/icon.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <!-- Navbar -->
  <?php include("php/navbar.php") ?>

  <!-- Main Content -->
  <div class="container d-flex justify-content-center align-items-center <?php echo ($page == "home") ? "home-container" : ""; ?>">
    <?php include("php/". $page . ".php") ?>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
  <script src="js/members.js"></script>
  <script src="js/albums.js"></script>
</body>

</html>