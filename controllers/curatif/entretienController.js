const express = require("express");

const Entretien = require("./../../models/curatif/entretien");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to entretien Controller" });
});

app.post("/add", (req, res) => {
  let data = req.body;
  let entretien = new Entretien({
    id_Car: data.id_Car,
    label: data.label,
    monton: data.monton,
    
  });

  entretien
    .save()
    .then((doc) => {
      res.status(200).send({ message: "entretien add seccsess * " });
    })
    .catch((err) => {
      res.status(400).send({ message: "error - " });
    });
});

app.get("/all", (req, res) => {
  Entretien.find()
    .then((Entretiens) => {
      res.send(Entretiens);
    })
    .catch((err) => {
      res.send({ message: "Error" });
    });
});

app.get("/one/:ident", (req, res) => {
  let id = req.params.ident;

  Entretien.findOne({ _id: id })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(400).send({ message: "Error Find Entretien !" });
    });
});

app.delete("/delete/:ident", (req, res) => {
    let id = req.params.ident;
  
    Entretien.findOneAndDelete({ _id: id })
      .then((doc) => {
        res.status(200).send({ message: "Entretien Deleted !" });
      })
      .catch(() => {
        res.status(400).send({ message: "Error Find !" });
      });
  });




module.exports = app;
