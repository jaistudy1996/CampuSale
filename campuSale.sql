use campuSale;


drop table if exists items;

create table items(
	id int primary key auto_increment not null, 
	price numeric(6,2), 
	sellerID int
	references seller(sellerID)
	on update CASCADE 
	on delete CASCADE, 
	description text, 
	status enum("1","0"), 
	paymentType int, 
	tagID int
	references tags(tagID)
	on update CASCADE
	on delete RESTRICT
)ENGINE=INNODB;

drop table if exists images;

create table images(
	imageID int primary key not null, 
	itemID int
	references items(id)
	on update CASCADE
	on delete RESTRICT, 
	image binary
)ENGINE=INNODB;

drop table if exists cart;

create table cart(
	cartID int primary key not null, 
	total numeric(6,2), 
	itemIDs int
);

drop table if exists tags;

create table tags(
	tagID int primary key auto_increment not null,
	tagName char(20)
);

drop table if exists ratings;

create table ratings(
	buyerId int not null
	references buyer(buyerID)
	on update CASCADE
	on delete RESTRICT, 
	sellerId int not null
	references seller(sellerID), 
	comment text, 
	rating varchar(5) not null
)ENGINE=INNODB;

drop table if exists students;

create table students(
	id int primary key not null, 
	email char(24), 
	firstName char(20), 
	lastName char(20), 
	phone int(10), 
	zip char(5)
);

drop table if exists payment;

create table payment(
	paymentID int primary key not null,
	paymentType char(10)
);

drop table if exists seller;

create table seller(
	sellerID int primary key not null 
	references students(id)
	on update CASCADE
	on delete RESTRICT
)ENGINE=INNODB;

drop table if exists buyer;

create table buyer(
	buyerID int primary key not null 
	references students(id)
	on update CASCADE
	on delete RESTRICT
)ENGINE=INNODB;
