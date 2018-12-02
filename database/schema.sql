DROP DATABASE IF EXISTS adCraft;

CREATE DATABASE adCraft;

USE adCraft;



DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT ,
  `id_account` INTEGER ,
   PRIMARY KEY (`id`)
);

-- Table 'reports'

DROP TABLE IF EXISTS `reports`;
		
CREATE TABLE `reports` (
  `id` INTEGER  NOT NULL AUTO_INCREMENT ,
  `feedback` MEDIUMTEXT NOT NULL,
  `id_advertiser` INTEGER ,
  `id_users` INTEGER ,
  `createdAt` DATETIME,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'advertiser'

DROP TABLE IF EXISTS `advertiser`;
		
CREATE TABLE `advertiser` (
  `id` INTEGER  NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `imgUrl` VARCHAR(200) NOT NULL,
  `numFeedback` INTEGER  NOT NULL,
  `rateAvg` DOUBLE  NOT NULL,
  `location` VARCHAR(100)  NOT NULL,
  `id_account` INTEGER NOT NULL,
  `id_categories` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'categories'
-- 
-- ---

DROP TABLE IF EXISTS `categories`;
		
CREATE TABLE `categories` (
  `id` INTEGER  NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  `imgUrl` VARCHAR(200) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'items'
-- 
-- ---

DROP TABLE IF EXISTS `items`;
		
CREATE TABLE `items` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  `price` DOUBLE NOT NULL,
  `imgUrl` VARCHAR(200) NOT NULL,
  `desc` MEDIUMTEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'advertiser_Items'
-- 
-- ---

DROP TABLE IF EXISTS `advertiser_Items`;
		
CREATE TABLE `advertiser_Items` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_advertiser` INTEGER NOT NULL,
  `id_items` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'account'
-- 
-- ---

DROP TABLE IF EXISTS `account`;
		
CREATE TABLE `account` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(25) NOT NULL,
  `lastName` MEDIUMTEXT NOT NULL,
  `phoneNumber` VARCHAR(15) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `id_roles` INTEGER NOT NULL,
  `createdAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'roles'
-- 
-- ---

DROP TABLE IF EXISTS `roles`;
		
CREATE TABLE `roles` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(25) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `users` ADD FOREIGN KEY (id_account) REFERENCES `account` (`id`);
ALTER TABLE `reports` ADD FOREIGN KEY (id_advertiser) REFERENCES `advertiser` (`id`);
ALTER TABLE `reports` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `advertiser` ADD FOREIGN KEY (id_account) REFERENCES `account` (`id`);
ALTER TABLE `advertiser` ADD FOREIGN KEY (id_categories) REFERENCES `categories` (`id`);
ALTER TABLE `advertiser_Items` ADD FOREIGN KEY (id_advertiser) REFERENCES `advertiser` (`id`);
ALTER TABLE `advertiser_Items` ADD FOREIGN KEY (id_items) REFERENCES `items` (`id`);
ALTER TABLE `account` ADD FOREIGN KEY (id_roles) REFERENCES `roles` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `reports` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `advertiser` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `categories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `advertiser_Items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `account` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `roles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`id_account`) VALUES
-- ('','');
-- INSERT INTO `reports` (`id`,`feedback`,`id_advertiser`,`id_users`,`createdAt`) VALUES
-- ('','','','','');
-- INSERT INTO `advertiser` (`id`,`email`,`imgUrl`,`numFeedback`,`rateAvg`,`location`,`id_account`,`id_categories`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `categories` (`id`,`name`,`imgUrl`,`createdAt`) VALUES
-- ('','','','');
-- INSERT INTO `items` (`id`,`name`,`price`,`imgUrl`,`desc`,`createdAt`) VALUES
-- ('','','','','','');
-- INSERT INTO `advertiser_Items` (`id`,`id_advertiser`,`id_items`) VALUES
-- ('','','');
-- INSERT INTO `account` (`id`,`firstName`,`lastName`,`phoneNumber`,`password`,`gender`,`id_roles`,`createdAt`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `roles` (`id`,`role`) VALUES
-- ('','');