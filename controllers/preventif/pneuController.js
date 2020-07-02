const express = require("express");

const Pneu =require("./../../models/preventif/pneu");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to pneu Controller" });
});

app.post("/add", (req, res) => {
  let data = req.body;
  let pneu = new Pneu({
    id_Car: data.id_Car,
    kminit: data.kminit,
    kmproch: data.kmproch,
    monton: data.monton,
    
  });

  pneu
    .save()
    .then((doc) => {
      res.status(200).send({ message: "pneu add seccsess * " });
    })
    .catch((err) => {
      res.status(400).send({ message: "error - " });
    });
});

app.get("/all", (req, res) => {
  Pneu.find()
    .then((Pneus) => {
      res.send(Pneus);
    })
    .catch((err) => {
      res.send({ message: "Error" });
    });
});

app.get("/one/:idpneu", (req, res) => {
  let id = req.params.idpneu;

  Pneu.findOne({ _id: id })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(400).send({ message: "Error Find pneu !" });
    });
});

app.delete("/delete/:idpneu", (req, res) => {
    let id = req.params.idpneu;
  
    Pneu.findOneAndDelete({ _id: id })
      .then((doc) => {
        res.status(200).send({ message: "pneu Deleted !" });
      })
      .catch(() => {
        res.status(400).send({ message: "Error Find !" });
      });
  });




module.exports = app;
