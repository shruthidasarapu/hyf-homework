DROP DATABASE IF EXISTS school;
CREATE DATABASE school;
USE school;
--Create a new database Class: with the columns: id, name, begins (date), ends (date)

DROP TABLE IF EXISTS class;
CREATE TABLE `class`(
 `id`int PRIMARY KEY NOT NULL, 
 `name`varchar(255) NOT NULL, 
 `begins_date` DATETIME NOT NULL,
 `ends_date` DATETIME NOT NULL
 );
 -- Create a new database Student: with the columns: id, name, email, phone, class_id (foreign key)
 DROP TABLE IF EXISTS student;
CREATE TABLE `student`(
 `id`int(10)  NOT NULL , 
 `name`varchar(255) NOT NULL, 
 `email` char(255) NOT NULL,
 `phone` int(10) NOT NULL,
 `class_id`int NOT NULL,
 PRIMARY KEY(`id`),
 FOREIGN KEY student(`class_id`) REFERENCES class(`id`)
 );

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
 ALTER TABLE class
 ADD status enum('not-started', 'ongoing', 'finished');

-- Create an index on the name column of the student table.
 CREATE INDEX student_name ON student (name);