const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");



router.get("/", async (request, response) => {
    response.send(reviews);
});
router.get("/:id", async (request, response) => {
         
    const randomReviewId = parseInt(request.params.id); 
    if(!isNaN(randomReviewId)){
        
        const reviewWithId = reviews.filter((review) =>  review.id === randomReviewId);
          
        response.send(reviewWithId[0]);  
         
    } else  { 
        
          response.status(400)
          response.send(`there is no review with this id `);
    }


});

module.exports = router;
