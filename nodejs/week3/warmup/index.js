const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/addition", (req, res) => { 
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const addition = `${firstNumber +secondNumber }`
  res.send(addition)
});

app.get("/calculator/subtraction", (req, res) => { 
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const subtraction= `${firstNumber - secondNumber }`
  res.send(subtraction)
});

app.get("/calculator/multiplication", (req, res) => { 
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const multiplication= `${firstNumber * secondNumber }`
  res.send(multiplication)
});

app.get("/calculator/division", (req, res) => { 
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const division= `${firstNumber/secondNumber }`
  res.send(division)
});

app.get("/calculator/add", (req, res) => { 
const firstNumber = parseInt(req.query.first);
let sum=0;
 if(req.query.hasOwnProperty("second")){
     if(Array.isArray(req.query.second)){
        req.query.second.forEach((n) => {
            sum += parseInt(n);
        })
     }
 }
const add = `${firstNumber + sum}`;
res.send(add)
});

app.get("/calculator/multiply", (req, res) => { 
    const firstNumber = parseInt(req.query.first);
    //const secondNumber = parseInt(req.query.second);
     let multiply=1;
     if(req.query.hasOwnProperty("second")){
         if(Array.isArray(req.query.second)){
            req.query.second.forEach((n) => {
                multiply *= parseInt(n);
            })
         }
     }
    const multiplication = `${firstNumber * multiply}`;
    res.send(multiplication)
    });

    app.post("/calculator/multiply", (req, res) => { 
      const firstNumber =(req.body.first);
      const secondNumber =(req.body.second);
      const multiplication = `${firstNumber * secondNumber}`;
      res.json(multiplication)
      });

      app.post("/calculator/division", (req, res) => { 
        const firstNumber =(req.body.first);
        const secondNumber =(req.body.second);
        const division = `${firstNumber/secondNumber}`;
        res.json(division)
        });

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
