const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
    response.send(reviews);
    
  });

  router.get("/:id", async (request, response) => {
    const randomReviewId = parseInt(request.params.id);
    if(!isNaN(randomReviewId)){ 
    const reviewWithId = reviews.filter((review) =>  review.id === (randomReviewId));
     
     response.send(reviewWithId[0]);
    }else {
       return response
       .status(400)
       .send(`there is no review with this id ${request.params.id}`)
    }

});
module.exports = router;
