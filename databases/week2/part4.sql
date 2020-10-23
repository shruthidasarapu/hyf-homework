-- Creating a database
DROP DATABASE IF EXISTS bank;
CREATE DATABASE bank;
USE bank;

CREATE TABLE `branch`(
`branch_id`int NOT NULL PRIMARY KEY,
`name` varchar(255) NOT NULL,
`city` varchar(255) NOT NULL
);

CREATE TABLE `customer`(
`customer_id`int NOT NULL  ,
`name` varchar(255) NOT NULL,
`account_number` int NOT NULL PRIMARY KEY,
CONSTRAINT FK_customer_id 
 FOREIGN KEY `customer`(`customer_id`) REFERENCES `branch`(`branch_id`)
);

CREATE TABLE `account`(
`account_id`int NOT NULL  ,
`number` int NOT NULL  ,
`status` varchar(255),
PRIMARY KEY(account_id),
CONSTRAINT FK_customer_account_number 
 FOREIGN KEY `account`(`number`) REFERENCES `customer`(`account_number`)
);

insert into branch(branch_id, name, city) values(1, 'Danske bank','Copenhagen');
insert into customer(customer_id, name, account_number) values(1, 'Rasmus','1234567845');
insert into account(account_id, number, status) values(1, '1234567845','not active');
 