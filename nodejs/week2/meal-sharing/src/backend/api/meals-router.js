const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");


router.get("/", async (request, response) => {

  if(request.query.title){
      const title = meals.filter((meal) =>
      meal.title.toLowerCase().includes(request.query.title.toLowerCase()));
      response.send(title);
  }
  else if(request.query.maxPrice){
      
    if(!parseInt(request.query.maxPrice)){
         response.status(400)
         response.send(`There is no meal with ${request.query.maxPrice} `);
    }else { 
      const maxPrice = meals.filter((meal) => 
      meal.price < parseInt(request.query.maxPrice));
      response.send(maxPrice);
    }
  }
   else if(request.query.createdAfter){
    if(!parseInt(request.query.createdAfter)){
     response.status(400)
     response.send(`There is no meal with ${request.query.createdAfter} `);
    }else {  
      const created= new Date(request.query.createdAfter);
      const createdAfter = meals.filter((meal)=> 
      new Date(meal.createdAt) >created );
      response.send(createdAfter);
    }
  }
   else if(request.query.limit){
    if(!parseInt(request.query.limit)){
         response.status(400);
         response.send(`There is no meal with ${request.query.limit} `);
    }else {  
      const limit = meals.filter((meal) => 
      meals.indexOf(meal) < parseInt(request.query.limit));
      response.send(limit);
    }
    }
    else { 
    response.send(meals);
  }
});
router.get("/:id", async (request, response) => {
         
        const randomMealId = parseInt(request.params.id); 
        if(!isNaN(randomMealId)){
            
            const mealWithId = meals.filter((meal) =>  meal.id === randomMealId);
              
            response.send(mealWithId[0]);  
             
        } else  { 
            
              response.status(400)
              response.send(`there is no meal with this id `);
        }
   
    
});

module.exports = router;
