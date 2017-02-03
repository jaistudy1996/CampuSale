-- MySQL dump 10.13  Distrib 5.5.50, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: campuSale
-- ------------------------------------------------------
-- Server version	5.5.50-0+deb7u2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buyer`
--

DROP TABLE IF EXISTS `buyer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `buyer` (
  `buyerID` int(11) NOT NULL,
  PRIMARY KEY (`buyerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyer`
--

LOCK TABLES `buyer` WRITE;
/*!40000 ALTER TABLE `buyer` DISABLE KEYS */;
INSERT INTO `buyer` VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17),(18),(19),(20),(21);
/*!40000 ALTER TABLE `buyer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `cartID` int(11) NOT NULL,
  `total` decimal(6,2) DEFAULT NULL,
  `itemIDs` int(11) DEFAULT NULL,
  PRIMARY KEY (`cartID`),
  KEY `itemIDs` (`itemIDs`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`itemIDs`) REFERENCES `items` (`itemID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,100.20,1),(2,35.44,21),(3,85.00,12),(4,37.00,13),(5,19.00,2),(6,28.50,14),(7,20.50,15),(8,70.80,16),(9,45.50,17),(10,105.00,18),(11,25.00,19),(12,97.44,20),(13,269.00,4),(14,169.10,5),(15,16.90,6),(16,129.50,7),(17,299.00,8),(18,285.00,9),(19,105.00,10),(20,105.00,11),(21,19.00,3);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `categoryID` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` char(20) DEFAULT NULL,
  PRIMARY KEY (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Electronics'),(2,'Clothing'),(3,'Games'),(4,'Books'),(5,'Music'),(6,'Housing'),(7,'Movies'),(8,'Home'),(9,'Beauty'),(10,'Handmade');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `imageID` int(11) NOT NULL,
  `itemID` int(11) DEFAULT NULL,
  `image` binary(1) DEFAULT NULL,
  PRIMARY KEY (`imageID`),
  KEY `itemID` (`itemID`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`itemID`) REFERENCES `items` (`itemID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `itemID` int(11) NOT NULL AUTO_INCREMENT,
  `price` decimal(6,2) DEFAULT NULL,
  `sellerID` int(11) DEFAULT NULL,
  `description` text,
  `status` enum('1','0') DEFAULT NULL,
  `paymentType` int(11) DEFAULT NULL,
  `categoryID` int(11) DEFAULT NULL,
  `title` char(100) NOT NULL,
  `imagePath` char(100) NOT NULL,
  PRIMARY KEY (`itemID`),
  KEY `sellerID` (`sellerID`),
  KEY `paymentType` (`paymentType`),
  KEY `categoryID` (`categoryID`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`sellerID`) REFERENCES `seller` (`sellerID`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`paymentType`) REFERENCES `payment` (`paymentID`),
  CONSTRAINT `items_ibfk_3` FOREIGN KEY (`categoryID`) REFERENCES `category` (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,50.00,2,'A used fridge in perfect condition','1',2,1,'Fridge','itemImages/refrigerator.jpg'),(2,40.33,4,'A shoe rack','0',2,8,'Rack','itemImages/shoerack.jpg'),(3,270.50,21,'Used Play Station 4 with games','1',1,3,'Play Station 4','itemImages/ps4.jpg'),(4,299.00,7,'Play Station 4 with games','1',1,3,'Play Station 3','itemImages/ps3.jpg'),(5,192.30,12,'Sharp 42 inch','',1,1,'TV','itemImages/tv.jpg'),(6,192.30,3,'Introduction to Programming','1',1,4,'CSC221 Textbook','itemImages/csc336.jpg'),(7,15.60,1,'Table reading lamp','1',2,1,'Lamp','itemImages/lamp.jpg'),(8,40.60,1,'Fairly used leather chair','1',2,8,'Chair','itemImages/chair.jpg'),(9,28.60,1,'Electric iron','1',1,1,'Iron','itemImages/iron.jpg'),(10,69.00,6,'American civilazation since 1788','1',1,4,'HIS101 Textbook','itemImages/his.jpg'),(11,40.00,10,'Fifa 2016 and 2k16','',1,3,'Play Station Games','itemImages/games.jpg'),(12,192.30,6,'Insignia 32 inch','',1,1,'TV','itemImages/tv.jpg'),(13,140.00,13,'Refurbished Xbox 360','',1,3,'Xbox 360','itemImages/xbox.jpg'),(14,11.00,5,'A rolling fan','0',1,6,'Fan','itemImages/fan.jpg'),(15,48.00,14,'Calculus 3 textbook','0',2,4,'Calculus Textbook','itemImages/calculus.jpg'),(16,33.60,9,'A glass center table','1',2,8,'Table','itemImages/table.jpg'),(17,98.00,15,'Computer Security textbook','0',2,4,'CSC352 Textbook','itemImages/csc352.jpg'),(18,24.00,14,'A used dressing mirror','0',2,6,'Mirror','itemImages/mirror.jpg'),(19,56.00,8,'Call of duty, Fifa 2016 and 2k16','',1,3,'Xbox Games','itemImages/xboxgames.jpg'),(20,48.00,17,'Software Engineering 1 textbook','0',2,4,'CSC336 Textbook','itemImages/csc336.jpg'),(21,75.00,19,'A bunch of different makeup product','1',2,9,'Makeup Kit','itemImages/makeup.jpg');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `paymentID` int(11) NOT NULL,
  `paymentType` char(10) DEFAULT NULL,
  PRIMARY KEY (`paymentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,'cash'),(2,'paypal'),(3,'card'),(4,'cardinal c');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratings` (
  `buyerId` int(11) NOT NULL,
  `sellerId` int(11) NOT NULL,
  `comment` text,
  `rating` varchar(5) NOT NULL,
  KEY `buyerId` (`buyerId`),
  KEY `sellerId` (`sellerId`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`buyerId`) REFERENCES `studentsOLD` (`id`),
  CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`sellerId`) REFERENCES `studentsOLD` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,22,NULL,'3'),(2,21,NULL,'4'),(3,20,NULL,'2'),(4,19,NULL,'4'),(5,18,NULL,'3'),(22,10,NULL,'5'),(6,11,NULL,'5'),(7,9,NULL,'3'),(9,8,NULL,'3'),(8,12,NULL,'3'),(10,1,NULL,'2'),(13,2,NULL,'3'),(12,3,NULL,'5'),(13,4,NULL,'3'),(18,5,NULL,'3'),(14,7,NULL,'3'),(15,6,NULL,'2'),(16,8,NULL,'2'),(17,9,NULL,'4'),(19,20,NULL,'3');
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seller` (
  `sellerID` int(11) NOT NULL,
  PRIMARY KEY (`sellerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17),(18),(19),(20),(21),(22),(54),(71);
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` char(8) NOT NULL,
  `firstName` char(20) DEFAULT NULL,
  `lastName` char(20) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `zip` char(5) DEFAULT NULL,
  `password` char(100) NOT NULL,
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'tests8','test8','Name8',2147483647,'12908','*F40D7E5342EC4960531243A96CC2E94079BC11B7'),(2,'tests1','test1','name1',9876543210,'12901','*22A99BA288DB55E8E230679259740873101CD636'),(4,'aolas001','amos','olasoji',5185644433,'12901','try'),(5,'jaror001','jayant','arora',9175646723,'34901','test'),(6,'mmahi001','Muhtasim','Mahir',3145646563,'08901','pass'),(10,'tjohn001','Thompson','Johnson',NULL,'08203',''),(11,'tjohn002','Tom','John',NULL,'12203',''),(12,'tallen01','Tim','Allen',NULL,'12134',''),(13,'aallen01','Amanda','Allen',NULL,'24524',''),(14,'mclin012','Matthew','Clinton',NULL,'03454',''),(15,'ptrum032','Peter','Trump',NULL,'12942',''),(16,'ptere001','Patrick','Terell',NULL,'12901',''),(17,'tthom001','Tao','Thomas',NULL,'13141',''),(18,'slee001','Shao','Lee',NULL,'23592',''),(19,'wrice001','Willian','Rice',NULL,'34729',''),(20,'paoki021','Pat','Aoki',NULL,'12922',''),(21,'alege011','Axema','Legend',NULL,'12932',''),(22,'jclin012','Johnson','Clinton',NULL,'12942',''),(23,'jthew475','Jesse','Thew',5185705998,'12587','*B7771697CB4625331737BB598A3A4C7F74B55076'),(27,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(42,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(54,'asing012','Akshay','Singh',11111111,'11111','*92B0981F5576D9E1F04E90D64A3FACCA168E7C3F'),(56,'vgova001','Vasu','Govani',5186455383,'12901','*AE907BDFC1E8D2E63AA8E140D3FCEA0B6845DBA5'),(60,'mhilp001','Marie','Hilpl',5188238585,'12901','*2470C0C06DEE42FD1618BB99005ADCA2EC9D1E19'),(71,'mhoth001','test','one',7185693154,'11238','*2470C0C06DEE42FD1618BB99005ADCA2EC9D1E19'),(75,'tests009','Jayant','Arora',5185364826,'12901','*F40D7E5342EC4960531243A96CC2E94079BC11B7'),(76,'tests005','Jayant','Arora',5185364826,'12901','*F40D7E5342EC4960531243A96CC2E94079BC11B7');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentsOLD`
--

DROP TABLE IF EXISTS `studentsOLD`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `studentsOLD` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` char(8) NOT NULL,
  `firstName` char(20) DEFAULT NULL,
  `lastName` char(20) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `zip` char(5) DEFAULT NULL,
  `password` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentsOLD`
--

LOCK TABLES `studentsOLD` WRITE;
/*!40000 ALTER TABLE `studentsOLD` DISABLE KEYS */;
INSERT INTO `studentsOLD` VALUES (1,'tests8','test8','Name8',2147483647,'12908','*F40D7E5342EC4960531243A96CC2E94079BC11B7'),(2,'tests1','test1','name1',9876543210,'12901','*22A99BA288DB55E8E230679259740873101CD636'),(3,'akshay@p','akshay','akshay',8888888888,'88888','*92B0981F5576D9E1F04E90D64A3FACCA168E7C3F'),(4,'aolas001','amos','olasoji',5185644433,'12901','try'),(5,'jaror001','jayant','arora',9175646723,'34901','test'),(6,'mmahi001','Muhtasim','Mahir',3145646563,'08901','pass'),(7,'mhilp001','Marie','Hilpl',5185616663,'17356','pass01'),(8,'mhilp001','Marie','Hilpl',5185787777,'12918','*2470C0C06DEE42FD1618BB99005ADCA2EC9D1E19'),(9,'tests9','test9','name9',9876543210,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(10,'tjohn001','Thompson','Johnson',NULL,'08203',''),(11,'tjohn002','Tom','John',NULL,'12203',''),(12,'tallen01','Tim','Allen',NULL,'12134',''),(13,'aallen01','Amanda','Allen',NULL,'24524',''),(14,'mclin012','Matthew','Clinton',NULL,'03454',''),(15,'ptrum032','Peter','Trump',NULL,'12942',''),(16,'ptere001','Patrick','Terell',NULL,'12901',''),(17,'tthom001','Tao','Thomas',NULL,'13141',''),(18,'slee001','Shao','Lee',NULL,'23592',''),(19,'wrice001','Willian','Rice',NULL,'34729',''),(20,'paoki021','Pat','Aoki',NULL,'12922',''),(21,'alege011','Axema','Legend',NULL,'12932',''),(22,'jclin012','Johnson','Clinton',NULL,'12942',''),(23,'jthew475','Jesse','Thew',5185705998,'12587','*B7771697CB4625331737BB598A3A4C7F74B55076'),(24,'','','',0,'',''),(25,'','','',0,'',''),(26,'','','',0,'',''),(27,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(28,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(29,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(30,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(31,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(32,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(33,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(34,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(35,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(36,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(37,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(38,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(39,'cfede001','Chris','Federlin',516,'11793','*675BB6D4196C8AD1D4C4B0304BD91061F2DE104C'),(40,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(41,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(42,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(43,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(44,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(45,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(46,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(47,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(48,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(49,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(50,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(51,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(52,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(53,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(54,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(55,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(56,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(57,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE'),(58,'tests9','Test9','Name9',1239876540,'12909','*5B7C79941EC3B3DAE923D4DC2FC1B0DD9A4A89BE');
/*!40000 ALTER TABLE `studentsOLD` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-03 12:52:34
