DROP DATABASE IF EXISTS mealsharing;
CREATE DATABASE mealsharing;
USE mealsharing;
DROP TABLE IF EXISTS reservation;
CREATE TABLE `reservation` (
  `id` int(10) NOT NULL PRIMARY KEY,
  `number_of_guests` int(10)  NOT NULL,
  `meal_id` int(10)  NOT NULL,
  `created_date` date  NOT NULL,
  `contact_phonenumber` varchar(255)  NOT NULL,
  `contact_name` varchar(255)  NOT NULL,
  `contact_email` varchar(255)  NOT NULL
);
DROP TABLE IF EXISTS meal;

CREATE TABLE `meal` (
  `id` int(10)  NOT NULL PRIMARY KEY,
  `title` varchar(255)  NOT NULL,
  `description` text  NOT NULL,
  `location` varchar(255)  NOT NULL,
  `when` datetime  NOT NULL,
  `max_reservations` int(10)  NOT NULL,
  `price` decimal  NOT NULL,
  `created_date` date  NOT NULL
);
DROP TABLE IF EXISTS review;
CREATE TABLE `review` (
  `id` int(10)  NOT NULL PRIMARY KEY,
  `title` varchar(255)  NOT NULL,
  `description` text  NOT NULL,
  `meal_id` int(10)  NOT NULL,
  `stars` int(10)  NOT NULL,
  `created_date` date NOT NULL
);

 ALTER TABLE `reservation` ADD FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`);

 ALTER TABLE `review` ADD FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`);
 -- meal table
 insert into  meal(id, title, description, location, `when`, max_reservations, price, created_date) values (1, 'chicken pasta','spicy','copenhagen','2020-10-20 12:10:15', '5', '200','2020-10-20');
 insert into  meal(id, title, description, location, `when`, max_reservations, price, created_date) values (2, 'fish nuggets','with ketchup','hellerup','2020-09-20 12:12:12','8','80','2020-09-20');
 insert into  meal(id, title, description, location, `when`, max_reservations, price, created_date) values(3, 'spring rolls','vegetable','ballerup','2020-12-13 14:02:10','6', '50' ,'2020-12-12'); 
 insert into  meal(id, title, description, location, `when`, max_reservations, price, created_date) values(4, 'burger', 'chicken', 'lyngby', '2020-05-06 11:10:12' ,'5','120','2020-05-06');
 insert into  meal(id, title, description, location, `when`, max_reservations, price, created_date) values(5, 'sandwitch', 'chicken', 'bagsværd', '2020-10-05 10:02:15', '3', '80', '2020-10-05'); 
 insert into  meal(id, title, description, location, `when`, max_reservations, price, created_date) values(6, 'rød grød med flød', 'egg', 'buddinge','2020-08-12 12:05:10' , '2' ,'50', '2020-08-12');
 insert into  meal(id, title, description, location, `when`, max_reservations, price, created_date) values(7,'brød rød grød med flød','chicken','søborg','2020-08-10 09:05:10','4','120','2020-08-10');
 insert into  meal(id, title, description, location, `when`, max_reservations, price, created_date) values(8,'pasta','salad','bagsværd','2020-02-12 12:05:10','3','150','2020-02-12');
 SELECT * FROM meal
 WHERE id=1;

 UPDATE meal
 SET title = 'pizza', location='farum'
 WHERE id=1;
 SELECT * FROM meal;

  DELETE FROM meal 
  WHERE id=2;
  SELECT * FROM meal;

 -- reservation table
 insert into  reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values(1, '4','1','2020-10-20', '12345678','alexander','abc@mail.com');
 insert into  reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values(2, '6','1','2020-10-20', '12312345','mikell','xyz@mail.com');
 insert into  reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values(3,'4', '1', '2020-10-21','32456178', 'catherine' ,'svd@mail.com');
 insert into  reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values(4,'3', '1', '2020-10-22','32456179', 'katherine' ,'asvd@mail.com');
 insert into  reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values(5,'2', '1', '2020-10-23','32456177', 'camila' ,'ksvd@mail.com');
   
  SELECT * FROM reservation
  WHERE id=1;

  UPDATE reservation
  SET contact_name= 'john'
  WHERE id=1;

 DELETE FROM reservation
 WHERE id=2;

-- review table
 insert into  review(id, title, description, meal_id,  stars, created_date) values(1,'pizza', 'good', 1, '4', '2020-10-20'); 
 insert into  review(id, title, description, meal_id,  stars, created_date) values(2,'pasta', ' not good', 1, '1', '2020-10-20');
 insert into  review(id, title, description, meal_id,  stars, created_date) values(3,'sandwitch', ' yummy', 1 , '5', '2020-10-21');
 insert into  review(id, title, description, meal_id,  stars, created_date) values(4,'noodles', 'ok', 1 , '3', '2020-10-21');
 insert into  review(id, title, description, meal_id,  stars, created_date) values(5,'pitabrød', 'not bad', 1 , '2', '2020-10-21');
 SELECT * FROM review
 WHERE id =1;

 UPDATE review
 SET description = 'super good'
 WHERE id= 1;

 DELETE FROM review 
 WHERE id=2;

 -- functionality

 -- Get meals that has a price smaller than a specific price fx 90
 SELECT * FROM meal 
 WHERE price < 90;

 -- Get meals that still has available reservations
 SELECT *,  number_of_guests, max_reservations 
  FROM meal
  JOIN reservation ON meal.id = reservation.meal_id
 WHERE max_reservations > number_of_guests;

 -- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
 SELECT * FROM meal
 WHERE title LIKE '%rød grød med%';

--  Get meals that has been created between two dates
SELECT * FROM meal
WHERE created_date BETWEEN '2020-10-01' AND '2020-10-30';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT * 
FROM meal 
JOIN review ON meal.id= review.meal_id
WHERE stars >3; 

-- Get reservations for a specific meal sorted by created_date
SELECT meal.title, reservation.created_date
FROM meal
JOIN reservation ON reservation.meal_id = meal.id
WHERE meal.id=1
ORDER BY reservation.created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT * FROM meal 
JOIN review ON review.meal_id = meal.id
ORDER BY review.stars DESC;