-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2025 at 03:13 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(3) NOT NULL,
  `name` varchar(20) NOT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`, `image`) VALUES
(1, 'Coffee', 'coffee.png'),
(2, 'Non-Coffee', 'drink.png'),
(3, 'Sandwich', 'sandwich.png'),
(4, 'Pasta', 'pasta.png'),
(5, 'Pastry', 'dessert.png');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(3) NOT NULL,
  `categoryID` int(3) NOT NULL,
  `name` varchar(30) NOT NULL,
  `code` varchar(10) NOT NULL,
  `image` varchar(50) NOT NULL,
  `price` int(3) DEFAULT NULL,
  `isAvailable` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `code`, `image`, `price`, `isAvailable`) VALUES
(1, 1, 'Americano', 'HC-AMR', 'coffee/HC-AMR.jpg', 100, 'true'),
(2, 1, 'Cafe Latte', 'HC-LAT', 'coffee/HC-LAT.jpg', 120, 'true'),
(3, 1, 'Cappuccino', 'HC-CAP', 'coffee/HC-CAP.jpg', 115, 'true'),
(4, 1, 'Mocha', 'HC-MOC', 'coffee/HC-MOC.jpg', 130, 'true'),
(5, 1, 'Caramel Macchiato', 'HC-CAM', 'coffee/HC-CAM.jpg', 130, 'false'),
(6, 1, 'Espresso', 'HC-ESP', 'coffee/HC-ESP.jpg', 90, 'true'),
(7, 1, 'Iced Americano', 'CC-AMR', 'coffee/CC-AMR.jpg', NULL, 'true'),
(8, 1, 'Iced Latte', 'CC-LAT', 'coffee/CC-LAT.jpg', NULL, 'true'),
(9, 1, 'Iced Mocha', 'CC-MOC', 'coffee/CC-MOC.jpg', NULL, 'true'),
(10, 1, 'Iced Caramel Macchiato', 'CC-CAM', 'coffee/CC-CAM.jpg', NULL, 'false'),
(11, 1, 'Cold Brew', 'CC-BRW', 'coffee/CC-BRW.jpg', NULL, 'true'),
(12, 1, 'Coffee Frappe', 'CC-FRP', 'coffee/CC-FRP.jpg', NULL, 'false'),
(13, 2, 'Matcha Latte', 'HDK-MAT', 'non-coffee/HDK-MAT.jpg', 100, 'true'),
(14, 2, 'Chai Tea Latte', 'HDK-CHL', 'non-coffee/HDK-CHL.jpg', 125, 'false'),
(15, 2, 'Hot Chocolate', 'HDK-CHO', 'non-coffee/HDK-CHO.jpg', 100, 'true'),
(16, 2, 'Ginger Tea', 'HDK-GNR', 'non-coffee/HDK-GNR.jpg', 85, 'true'),
(17, 2, 'Iced Matcha Latte', 'CDK-MAT', 'non-coffee/CDK-MAT.jpg', NULL, 'true'),
(18, 2, 'Iced Chai Latte', 'CDK-CHL', 'non-coffee/CDK-CHL.jpg', NULL, 'false'),
(19, 2, 'Lemon Iced Tea', 'CDK-LMN', 'non-coffee/CDK-LMN.jpg', NULL, 'true'),
(20, 2, 'Classic Milk Tea', 'CDK-MLK', 'non-coffee/CDK-MLK.jpg', NULL, 'true'),
(21, 2, 'Iced Chocolate', 'CDK-CHO', 'non-coffee/CDK-CHO.jpg', NULL, 'true'),
(22, 2, 'Mango Fruit Tea', 'CDK-MNG', 'non-coffee/CDK-MNG.jpg', NULL, 'true'),
(23, 2, 'Chocolate Frappe', 'CDK-FRP', 'non-coffee/CDK-FRP.jpg', NULL, 'false'),
(24, 3, 'Ham & Cheese', 'SND-HAM', 'sandwich/SND-HAM.jpg', 130, 'true'),
(25, 3, 'Chicken Pesto Panini', 'SND-CKN', 'sandwich/SND-CKN.jpg', 150, 'false'),
(26, 3, 'Tuna Melt', 'SND-TNA', 'sandwich/SND-TNA.jpg', 140, 'true'),
(27, 3, 'BLT', 'SND-BLT', 'sandwich/SND-BLT.jpg', 130, 'true'),
(28, 3, 'Grilled Cheese', 'SND-GRD', 'sandwich/SND-GRD.jpg', 120, 'true'),
(29, 4, 'Spaghetti', 'PTA-SPG', 'pasta/PTA-SPG.jpg', 180, 'true'),
(30, 4, 'Carbonara', 'PTA-CRB', 'pasta/PTA-CRB.jpg', 185, 'true'),
(31, 4, 'Aglio e Olio', 'PTA-AGL', 'pasta/PTA-AGL.jpg', 150, 'true'),
(32, 4, 'Penne alla Vodka', 'PTA-PEN', 'pasta/PTA-PEN.jpg', 190, 'true'),
(33, 4, 'Lasagna', 'PTA-LSG', 'pasta/PTA-LSG.jpg', 200, 'false'),
(34, 4, 'Tuna Pesto', 'PTA-TUN', 'pasta/PTA-TUN.jpg', 185, 'true'),
(35, 5, 'Choco Chip Cookie', 'PTR-CCC', 'pastry/PTR-CCC.jpg', 55, 'true'),
(36, 5, 'Blueberry Muffin', 'PTR-BLU', 'pastry/PTR-BLU.jpg', 65, 'true'),
(37, 5, 'Croissant', 'PTR-CST', 'pastry/PTR-CST.jpg', 70, 'true'),
(38, 5, 'Cheesecake', 'PTR-CSK', 'pastry/PTR-CSK.jpg', 65, 'true'),
(39, 5, 'Brownies', 'PTR-BWN', 'pastry/PTR-BWN.jpg', 55, 'true'),
(40, 5, 'Cinammon Roll', 'PTR-CNM', 'pastry/PTR-CNM.jpg', 70, 'true'),
(41, 5, 'Banana Bread', 'PTR-BNN', 'pastry/PTR-BNN.jpg', 65, 'true');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `sizeID` int(3) NOT NULL,
  `productID` int(3) NOT NULL,
  `code` varchar(2) NOT NULL,
  `price` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`sizeID`, `productID`, `code`, `price`) VALUES
(1, 7, 'SM', 105),
(2, 7, 'MD', 110),
(3, 7, 'LG', 120),
(4, 8, 'SM', 125),
(5, 8, 'MD', 135),
(6, 8, 'LG', 150),
(7, 9, 'SM', 135),
(8, 9, 'MD', 145),
(9, 9, 'LG', 160),
(10, 10, 'SM', 135),
(11, 10, 'MD', 145),
(12, 10, 'LG', 160),
(13, 11, 'SM', 110),
(14, 11, 'MD', 130),
(15, 11, 'LG', 145),
(16, 12, 'SM', 125),
(17, 12, 'MD', 145),
(18, 12, 'LG', 165),
(19, 17, 'SM', 110),
(20, 17, 'MD', 120),
(21, 17, 'LG', 130),
(22, 18, 'SM', 130),
(23, 18, 'MD', 140),
(24, 18, 'LG', 150),
(25, 19, 'SM', 110),
(26, 19, 'MD', 115),
(27, 19, 'LG', 130),
(28, 20, 'SM', 110),
(29, 20, 'MD', 115),
(30, 20, 'LG', 125),
(31, 21, 'SM', 105),
(32, 21, 'MD', 115),
(33, 21, 'LG', 125),
(34, 22, 'SM', 110),
(35, 22, 'MD', 115),
(36, 22, 'LG', 130),
(37, 23, 'SM', 125),
(38, 23, 'MD', 145),
(39, 23, 'LG', 165);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `categoryID` (`categoryID`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`sizeID`),
  ADD KEY `productID` (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `sizeID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`categoryID`);

--
-- Constraints for table `sizes`
--
ALTER TABLE `sizes`
  ADD CONSTRAINT `sizes_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
