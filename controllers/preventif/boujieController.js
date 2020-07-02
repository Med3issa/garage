const express = require("express");

const Boujie = require("./../../models/preventif/boujie");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to boujie Controller" });
});

app.post("/add", (req, res) => {
  let data = req.body;
  let boujie = new Boujie({
    id_Car: data.id_Car,
    kminit: data.kminit,
    kmproch: data.kmproch,
    monton: data.monton,
    
  });

  boujie
    .save()
    .then((doc) => {
      res.status(200).send({ message: "boujie add seccsess * " });
    })
    .catch((err) => {
      res.status(400).send({ message: "error - " });
    });
});

app.get("/all", (req, res) => {
  Boujie.find()
    .then((Boujies) => {
      res.send(Boujies);
    })
    .catch((err) => {
      res.send({ message: "Error" });
    });
});

app.get("/one/:idboujie", (req, res) => {
  let id = req.params.idboujie;

  Filtre.findOne({ _id: id })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(400).send({ message: "Error Find boujie !" });
    });
});

app.delete("/delete/:idboujie", (req, res) => {
    let id = req.params.idboujie;
  
    Boujie.findOneAndDelete({ _id: id })
      .then((doc) => {
        res.status(200).send({ message: "boujie Deleted !" });
      })
      .catch(() => {
        res.status(400).send({ message: "Error Find !" });
      });
  });




module.exports = app;
