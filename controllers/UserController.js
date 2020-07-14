const express = require("express");

const User = require("./../models/user");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to User Controller" });
});

app.get("/all", (req, res) => {
  User.find()
    .then((Users) => {
      res.send(Users);
    })
    .catch((err) => {
      res.send({ message: "Error" });
    });
});

app.post("/add", (req, res) => {
  let data = req.body;

  let user = new User({
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role,
  });

  user
    .save()
    .then((doc) => {
      res.status(200).send({ message: "user add seccsess * " });
    })
    .catch((err) => {
      res.status(400).send({ message: "error - " });
    });
});


app.post("login",(req,res)=>{
  let data = req.body;
  User.findOne({email:data.email})
  .then((doc) => {
    res.status(200).send(doc);
})
.catch(() => {
    res.status(400).send({ message: "Error Find !" })
})
  }
  

})

module.exports = app;