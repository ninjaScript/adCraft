DROP DATABASE IF EXISTS adCraft;

CREATE DATABASE adCraft;

USE adCraft;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `phoneNumber` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rating'
-- 
-- ---

DROP TABLE IF EXISTS `rating`;
		
CREATE TABLE `rating` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `feeback` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `id_users` INTEGER NOT NULL,
  `id_advertiser` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'advertiser'
-- 
-- ---

DROP TABLE IF EXISTS `advertiser`;
		
CREATE TABLE `advertiser` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `phoneNumber` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `imageUrl` VARCHAR(63535) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `numFeedBack` INTEGER NOT NULL,
  `rate` INTEGER NOT NULL,
  `id_categories` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'categories'
-- 
-- ---

DROP TABLE IF EXISTS `categories`;
		
CREATE TABLE `categories` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `imageUrl` VARCHAR(64535) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'advertiser_items'
-- 
-- ---

DROP TABLE IF EXISTS `advertiser_items`;
		
CREATE TABLE `advertiser_items` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_advertiser` INTEGER NOT NULL,
  `id_items` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'items'
-- 
-- ---

DROP TABLE IF EXISTS `items`;
		
CREATE TABLE `items` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` INTEGER NOT NULL,
  `imageUrl` VARCHAR(64535) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `rating` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `rating` ADD FOREIGN KEY (id_advertiser) REFERENCES `advertiser` (`id`);
ALTER TABLE `advertiser` ADD FOREIGN KEY (id_categories) REFERENCES `categories` (`id`);
ALTER TABLE `advertiser_items` ADD FOREIGN KEY (id_advertiser) REFERENCES `advertiser` (`id`);
ALTER TABLE `advertiser_items` ADD FOREIGN KEY (id_items) REFERENCES `items` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rating` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `advertiser` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `categories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `advertiser_items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`firstName`,`lastName`,`phoneNumber`,`password`,`createdAt`,`desc`) VALUES
-- ('','','','','','','');
-- INSERT INTO `rating` (`id`,`feeback`,`createdAt`,`id_users`,`id_advertiser`) VALUES
-- ('','','','','');
-- INSERT INTO `advertiser` (`id`,`firstName`,`lastName`,`phoneNumber`,`email`,`password`,`imageUrl`,`city`,`numFeedBack`,`rate`,`id_categories`) VALUES
-- ('','','','','','','','','','','');
-- INSERT INTO `categories` (`id`,`name`,`imageUrl`,`createdAt`) VALUES
-- ('','','','');
-- INSERT INTO `advertiser_items` (`id`,`id_advertiser`,`id_items`) VALUES
-- ('','','');
-- INSERT INTO `items` (`id`,`name`,`price`,`imageUrl`,`desc`,`createdAt`) VALUES
-- ('','','','','','');
