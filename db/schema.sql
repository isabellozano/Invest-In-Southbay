DROP DATABASE IF EXISTS investInSouthBay_db;
CREATE database investInSouthBay_db;

USE investInSouthBay_db;

CREATE TABLE `contact` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(50) NOT NULL,
	`last_name` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`phone_number` INT(50) NOT NULL,
	`user_id` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `search_properties` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`single_family_home` varchar(255) NOT NULL,
	`condo` varchar(255) NOT NULL,
	`duplex` varchar(255) NOT NULL,
	`triplex` varchar(255) NOT NULL,
	`fourplex` varchar(255) NOT NULL,
	`apartment_building` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` varchar(50) NOT NULL,
	`password` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`search_properties_id` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `contact` ADD CONSTRAINT `contact_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `user` ADD CONSTRAINT `user_fk0` FOREIGN KEY (`search_properties_id`) REFERENCES `search_properties`(`id`);

