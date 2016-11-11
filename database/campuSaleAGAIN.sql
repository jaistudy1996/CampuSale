USE campuSale;

DROP TABLE IF EXISTS items;
CREATE TABLE items (
  itemID int(11) NOT NULL AUTO_INCREMENT,
  price decimal(6,2) DEFAULT NULL,
  sellerID int(11) DEFAULT NULL,
  description text,
  status enum('1','0') DEFAULT NULL,
  paymentType int(11) DEFAULT NULL,
  categoryID int(11) DEFAULT NULL,
  PRIMARY KEY (itemID),
  FOREIGN KEY(sellerID) REFERENCES seller(sellerID),
  FOREIGN KEY(paymentType) REFERENCES payment(paymentID),
  FORRIGN KEY(categoryID) REFERENCES category(categoryID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
  cartID int(11) NOT NULL,
  total decimal(6,2) DEFAULT NULL,
  itemIDs int(11) DEFAULT NULL,
  PRIMARY KEY (cartID)
  FOREIGN KEY(itemIDs) REFERENCES items(itemID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS images;
CREATE TABLE images (
  imageID int(11) NOT NULL,
  itemID int(11) DEFAULT NULL,
  image binary(1) DEFAULT NULL,
  PRIMARY KEY (imageID)
  FOREIGN KEY(itemID) REFERENCES items(itemID)
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
  FOREIGN KEY(buyerID) REFERENCES students(id),
  FOREIGN KEY(sellerID) REFERENCES students(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS students;
CREATE TABLE students (
  id int(11) NOT NULL,
  email char(8) DEFAULT NULL,
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


DROP TABLE IF EXISTS category;
CREATE TABLE category (
  categoryID int(11) NOT NULL AUTO_INCREMENT,
  categoryName char(20) DEFAULT NULL,
  PRIMARY KEY (tagID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
