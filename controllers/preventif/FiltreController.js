const express = require("express");

const Filtre = require("./../../models/preventif/filtre");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to filtre Controller" });
});

app.post("/add", (req, res) => {
  let data = req.body;
  let filtre = new Filtre({
    id_Car: data.id_Car,
    kminit: data.kminit,
    kmproch: data.kmproch,
    monton: data.monton,
    type: data.type,
  });

  filtre
    .save()
    .then((doc) => {
      res.status(200).send({ message: "filtre add seccsess * " });
    })
    .catch((err) => {
      res.status(400).send({ message: "error - " });
    });
});

app.get("/all", (req, res) => {
  Filtre.find()
    .then((Filtres) => {
      res.send(Filtres);
    })
    .catch((err) => {
      res.send({ message: "Error" });
    });
});

app.get("/one/:idfiltre", (req, res) => {
  let id = req.params.idfiltre;

  Filtre.findOne({ _id: id })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(400).send({ message: "Error Find filtre !" });
    });
});

app.delete("/delete/:idfiltre", (req, res) => {
    let id = req.params.idfiltre;
  
    Filtre.findOneAndDelete({ _id: id })
      .then((doc) => {
        res.status(200).send({ message: "filtre Deleted !" });
      })
      .catch(() => {
        res.status(400).send({ message: "Error Find !" });
      });
  });




module.exports = app;
