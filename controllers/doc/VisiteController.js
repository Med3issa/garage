const express = require("express");


const Visite = require("../../models/doc/visite");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to visite Controller" });
});

app.get("/all",(req,res)=>{
    Taxe.find()
    .then((Visites)=>{
        res.send(Visites);
    })
    .catch((err)=>{
        res.send({message:"Error"});
    });
});
 
app.get("/one/:idVisite", (req,res)=>{
    let id = req.params.idVisite;

    Visites.findOne({_id : id})
    .then((doc)=>{
        res.status(200).send(doc);
    })
    .catch(()=>{
        res.status(400).send({ message : "Error Find !"})
    })
});
      

app.delete('delete/:idVisite',(req,res)=>{
    let id = req.params.idVisite;

    Visite.findByIdAndDelete({_id: id})
    .then((doc)=>{
        res.status(200).send({message: "Visite Deleted ! "});
    })
    .catch(()=>{
        res.status(400).send({message : "Error Find! "});
    })
});


app.post("/add",(req,res)=>{
    let data = req.body;
    let  taxe= new Visite({
        id_car: data.id_car,
        date_pay: data.date_pay,
        date_exp: data.date_exp,
        montant: data.montant,
    });
    
    visite
     .save()
     .then((doc)=>{
        res.status(200).send({ message: "Visite add seccess"});
     })
        .catch((err)=>{
        res.status(400).send({message: "error "});
    });

});



module.exports = app;