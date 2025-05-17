<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include("connect.php");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
  case 'GET':
    handleGet($pdo);
    break;
  case 'POST':
    handlePost($pdo, $input);
    break;
  default:
    echo json_encode(['message' => 'Invalid request method']);
    break;
}

function handleGet($pdo)
{
  $sql = "SELECT * FROM products";
  $stmt = $pdo->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  foreach ($result as &$product) {
    $sizeQuery = "SELECT code, price FROM sizes WHERE productID = :productID";
    $sizeStmt = $pdo->prepare($sizeQuery);
    $sizeStmt->execute(['productID' => $product['productID']]);
    $sizeResult = $sizeStmt->fetchAll(PDO::FETCH_ASSOC);
    $product['sizes'] = $sizeResult;
  }
  
  echo json_encode($result);
}

function handlePost($pdo, $input) {
  $sql = "SELECT * FROM products WHERE categoryID = :categoryID";
  $stmt = $pdo->prepare($sql);
  $stmt->execute(['categoryID' => $input['categoryID']]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  foreach ($result as &$product) {
    $sizeQuery = "SELECT code, price FROM sizes WHERE productID = :productID";
    $sizeStmt = $pdo->prepare($sizeQuery);
    $sizeStmt->execute(['productID' => $product['productID']]);
    $sizeResult = $sizeStmt->fetchAll(PDO::FETCH_ASSOC);
    $product['sizes'] = $sizeResult;
  }

  echo json_encode($result);
}
?>