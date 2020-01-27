DROP DATABASE IF EXISTS investInSouthBay_db;
CREATE DATABASE investInSouthBay_db;

USE investInSouthBay_db;

CREATE TABLE contacts 
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	phone_number INT(50) NOT NULL,
	userId varchar(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE search_properties 
(
	id INT NOT NULL AUTO_INCREMENT,
	single_family_home varchar(255) NOT NULL,
	condo varchar(255) NOT NULL,
	duplex varchar(255) NOT NULL,
	triplex varchar(255) NOT NULL,
	fourplex varchar(255) NOT NULL,
	apartment_building varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users 
(
	id INT NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	passwrd varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	search_properties_id varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO contacts (first_name, last_name, email, phone_number, userId) VALUES ('Jill', 'Jones', 'jill.jones@email.com', (555) 123-1212, 098765);
