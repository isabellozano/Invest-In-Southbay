DROP DATABASE IF EXISTS investInSouthBay_db;
CREATE DATABASE investInSouthBay_db;

USE investInSouthBay_db;

CREATE TABLE contacts 
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	phone_number varchar(50) NOT NULL,
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

INSERT INTO contacts (first_name, last_name, email, phone_number, userId) 
VALUES ('Jill', 'Jones', 'jill.jones@email.com', 5551231212, 98765);

INSERT INTO search_properties (single_family_home, condo, duplex, triplex, fourplex, apartment_building) 
VALUES ('Happy Home', 'Cool Condo', 'Daunty Duplex', 'The Triplex', '4plex Property', 'Apart Building');

INSERT INTO users (username, passwrd, email, search_properties_id) 
VALUES ('someuser789', 'p@33w0rd', 'some.user@email.com', 'propertyID_789');

