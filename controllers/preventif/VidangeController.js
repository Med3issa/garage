const express = require("express");

const Vidange = require("./../../models/preventif/vidange");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "ahla b ndhafa " });
});

app.post("/add", (req, res) => {
  let data = req.body;
  let vidange = new Vidange({
    id_Car: data.id_Car,
    kminit: data.kminit,
    kmproch: data.kmproch,
    monton: data.monton,
  });

  vidange
    .save()
    .then((doc) => {
      res.status(200).send({ message: "vidange add seccsess * " });
    })
    .catch((err) => {
      res.status(400).send({ message: "error - " });
    });
});

app.get("/all", (req, res) => {
  Vidange.find()
    .then((Vidanges) => {
      res.send(Vidanges);
    })
    .catch((err) => {
      res.send({ message: "Error" });
    });
});

app.get("/one/:idvidange", (req, res) => {
  let id = req.params.idvidange;

  Vidange.findOne({ _id: id })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(400).send({ message: "Error Find vid !" });
    });
});

app.delete("/delete/:idvid", (req, res) => {
  let id = req.params.idvid;

  Vidange.findOneAndDelete({ _id: id })
    .then((doc) => {
      res.status(200).send({ message: "Vid Deleted !" });
    })
    .catch(() => {
      res.status(400).send({ message: "Error Find !" });
    });
});

/* app.patch("/setkm/:idvid/:kmm",(req,res)=>{
      let id = req.params.idvid;
      let km = req.params.kmm;
      Vidange.findOne({_id = id})
        .then((doc) => {
          doc.kminit=km;
          doc.save();
          doc.status(200).send({message:"updated ... "});
         })
         .catch(() => {
          res.status(400).send({message:"error find !"});
      })
  
  });*/

module.exports = app;
