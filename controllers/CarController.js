const express = require("express");

const Car = require("./../models/car");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to car Controller" });
});

 
      



app.get("/all", (req, res) => {
  Car.find()
    .then((Cars) => {
      res.send(Cars);
    })
    .catch((err) => {
      res.send({ message: "Error" });
    });
});

app.get('/one/:idCar', (req, res) => {

  let id = req.params.idCar;

  Car.findOne({ _id: id })
      .then((doc) => {
          res.status(200).send(doc);
      })
      .catch(() => {
          res.status(400).send({ message: "Error Find !" })
      })

});


/*
app.patch('/update/:idCar', (req, res) => {
  let id = req.params.idCar;
  let kilometrage=body.kilometrage;

  Car.findOne({ _id: id })
  .then((doc) => {
      
  Car.findOneAndUpdate({ _id: id }, doc)
  .then(() => {
      res.status(200).send({ message: "car's Info Updated !" });
  })
  .catch(() => {
      res.status(400).send({ message: "Error Find !" });
  })

  })
  .catch(() => {
      res.status(400).send({ message: "Error Find !" })
  })

});
*/

app.delete('/delete/:idCar', (req, res) => {

  let id = req.params.idCar;

  Car.findOneAndDelete({ _id: id })
      .then((doc) => {
          res.status(200).send({ message: "Car Deleted !" });
      })
      .catch(() => {
          res.status(400).send({ message: "Error Find !" });
      })

});

app.post("/add", (req, res) => {
 

  let car = new Car({
    name: data.name,
    mat: data.mat,
    kilometrage: data.kilometrage,
  });

  car
    .save()
    .then((doc) => {
      res.status(200).send({ message: "car add seccsess * " });
    })
    .catch((err) => {
      res.status(400).send({ message: "error - " });
    });
});

module.exports = app;