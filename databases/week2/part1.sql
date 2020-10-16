DROP DATABASE IF EXISTS homework;
CREATE DATABASE homework;
USE homework;
DROP TABLE IF EXISTS task;
CREATE TABLE `task` (
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `status_id` int(10) unsigned NOT NULL,
  `user_id`int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY
  );
insert into task (title, description, created, updated, due_date, status_id,user_id) values ( 'Wash clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2,1);
insert into task (title, description, created, updated, due_date, status_id,user_id) values ( 'Become a billionaire', 'This should not take long, just invent a time machine, travel back to 2010 and buy bitcoin', '2017-09-26 03:06:46', '2017-10-08 06:14:31', '2017-12-22 20:58:03', 3,2);
insert into task (title, description, created, updated, due_date, status_id,user_id) values ('Plan meeting with London office', 'We will probably use skype', '2017-10-04 18:07:37', '2017-10-14 16:01:31', '2017-12-05 19:42:15', 2,3);
insert into task (title, description, created, updated, due_date, status_id,user_id) values ( 'Order groceries online', 'The fridge is almost empty, we need eggs and milk', '2017-09-20 19:34:43', '2017-10-15 23:35:45', '2017-12-24 16:00:46', 1,4);
insert into task (title, description, created, updated, due_date, status_id,user_id) values ( 'Empty the mailbox', NULL, '2017-09-27 15:17:08', '2017-10-08 17:31:16', null, 2,5);
SELECT * FROM task;

-- Change the title of a task
UPDATE task
SET title='Clean dishes'
WHERE user_id=1;
SELECT * FROM task;

-- Change a task due date
UPDATE task
SET due_date='2019-12-15 20:10:15'
WHERE user_id=1;
SELECT * FROM task;

-- Delete a task
DELETE FROM task 
WHERE user_id=5;
SELECT * FROM task;

-- Change a task status
UPDATE task
SET status_id=1
WHERE user_id=1;
SELECT * FROM task;

-- Mark a task as complete
UPDATE task
SET status_id=3
WHERE user_id=1;
SELECT * FROM task;