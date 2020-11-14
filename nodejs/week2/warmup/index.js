const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
const firstNumber = parseInt(req.query.first);
const secondNumber = parseInt(req.query.second);
const sum = `${firstNumber + secondNumber}`;
res.send(sum)
});
app.get("/numbers/multiply", (req, res) => {
    const number1 = parseInt(req.query.first);
    const number2 = parseInt(req.query.second);
    const multiplication = `${number1  * number2 }`;
    res.send(multiplication)
    });
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
