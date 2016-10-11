USE campuSale;

DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id int(11) NOT NULL AUTO_INCREMENT,
  price decimal(6,2) DEFAULT NULL,
  sellerID int(11) DEFAULT NULL,
  description text,
  status enum('1','0') DEFAULT NULL,
  paymentType int(11) DEFAULT NULL,
  tagID int(11) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
  cartID int(11) NOT NULL,
  total decimal(6,2) DEFAULT NULL,
  itemIDs int(11) DEFAULT NULL,
  PRIMARY KEY (cartID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS images;
CREATE TABLE images (
  imageID int(11) NOT NULL,
  itemID int(11) DEFAULT NULL,
  image binary(1) DEFAULT NULL,
  PRIMARY KEY (imageID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS payment;
CREATE TABLE payment (
  paymentID int(11) NOT NULL,
  paymentType char(10) DEFAULT NULL,
  PRIMARY KEY (paymentID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS ratings;
CREATE TABLE ratings (
  buyerId int(11) NOT NULL,
  sellerId int(11) NOT NULL,
  comment text,
  rating varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS students;
CREATE TABLE students (
  id int(11) NOT NULL,
  email char(24) DEFAULT NULL,
  firstName char(20) DEFAULT NULL,
  lastName char(20) DEFAULT NULL,
  phone int(10) DEFAULT NULL,
  zip char(5) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS seller;
CREATE TABLE seller (
  sellerID int(11) NOT NULL,
  PRIMARY KEY (sellerID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS buyer;
CREATE TABLE buyer (
  buyerID int(11) NOT NULL,
  PRIMARY KEY (buyerID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS tags;
CREATE TABLE tags (
  tagID int(11) NOT NULL AUTO_INCREMENT,
  tagName char(20) DEFAULT NULL,
  PRIMARY KEY (tagID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


