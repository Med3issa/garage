const express = require("express");

const Chaine = require("./../../models/preventif/chaine");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to chaine Controller" });
});

app.post("/add", (req, res) => {
  let data = req.body;
  let chaine = new Chaine({
    id_Car: data.id_Car,
    kminit: data.kminit,
    kmproch: data.kmproch,
    monton: data.monton,
    
  });

  chaine
    .save()
    .then((doc) => {
      res.status(200).send({ message: "chaine add seccsess * " });
    })
    .catch((err) => {
      res.status(400).send({ message: "error - " });
    });
});

app.get("/all", (req, res) => {
  Chaine.find()
    .then((Chaines) => {
      res.send(Chaines);
    })
    .catch((err) => {
      res.send({ message: "Error" });
    });
});

app.get("/one/:idchaine", (req, res) => {
  let id = req.params.idchaine;

  Chaine.findOne({ _id: id })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(400).send({ message: "Error Find chaine !" });
    });
});

app.delete("/delete/:idchaine", (req, res) => {
    let id = req.params.idchaine;
  
    Chaine.findOneAndDelete({ _id: id })
      .then((doc) => {
        res.status(200).send({ message: "chiane Deleted !" });
      })
      .catch(() => {
        res.status(400).send({ message: "Error Find !" });
      });
  });




module.exports = app;
