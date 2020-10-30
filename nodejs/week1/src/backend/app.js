const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

const mealswithReviews = meals.map((meal) => {
meal.reviews = reviews.filter((review) => review.mealId === meal.id)
return meal
});

app.get("/", async (request, response) => {
    response.send("Meal Sharing Web App");
});
app.get("/meals", async (request, response) => {
    response.send(mealswithReviews);
});
app.get("/cheap-meals", async (request, response) => {
    response.send(mealswithReviews.filter((meal) => meal.price <=100));
});
app.get("/large-meals", async (request, response) => {
    response.send(mealswithReviews.filter((meal) => meal.maxNumberOfGuests > 3));
});
app.get("/meal", async (request, response) => {
    response.send(mealswithReviews[Math.floor(Math.random() * mealswithReviews.length)]);
});
app.get("/reservations", async (request, response) => {
    response.send(reservations);
});
app.get("/reservation**", async (request, response) => {
    response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});
module.exports = app;
