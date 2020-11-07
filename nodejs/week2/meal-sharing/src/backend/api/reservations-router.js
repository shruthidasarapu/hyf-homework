const express = require("express");
const router = express.Router();


const reservations = require("./../data/reservations.json");


router.get("/", async (request, response) => {
    response.send(reservations);
    
  });
  router.get("/:id", async (request, response) => {
    const randomReservationId = parseInt(request.params.id);
    if(!isNaN(randomReservationId)){ 
    const reservationWithId = reservations.filter((reservation) =>  reservation.id === (randomReservationId));
     
     response.send(reservationWithId[0]);
    }else {
       return response
       .status(400)
       .send(`there is no reservation with this id ${request.params.id}`)
    }

});
module.exports = router;