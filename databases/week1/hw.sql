  SELECT  * FROM test.task
// How many tasks are in the task table
 
    SELECT COUNT(title) FROM test.task;
 
// How many tasks in the task table do not have a valid due date
   SELECT  * FROM test.task
   WHERE due_date is null;
   
// All the tasks that are marked as done
   SELECT  * FROM test.task
   WHERE status_id = 3;
   
// All the tasks that are not marked as done
   SELECT  * FROM test.task
   WHERE status_id != 3;
   
// All the tasks, sorted with the most recently created first
     SELECT  * FROM test.task
     ORDER BY created DESC
     
// The single most recently created task
      SELECT  * FROM test.task
       ORDER BY created DESC
       LIMIT 1 ;
       
//  The title and due date of all tasks where the title or description contains database
      SELECT title, description
       FROM test.task
      Where title LIKE '%database%' 
      OR 
      description LIKE '%database%' 
     
// The title and status (as text) of all tasks
      SELECT  title, name  AS status FROM test.status
      JOIN test.task
      ON test.status.id = test.task.status_id;
  
// Name of each status, along with a count of how many tasks have that status

    SELECT COUNT(test.task.id) AS count, 
         name 
    FROM   test.status 
         JOIN test.task 
           ON test.status.id = test.task.status_id 
    GROUP  BY test.status.name 
  
// The names of all statuses, sorted by the status with most tasks first
  
    ORDER  BY count DESC; 
  