const express = require("express");

const Leasing=require("../../models/doc/leasing");
const app= express();

app.get("/",(req,res)=>{
    res.status(200).send({message :"welcome to leasing controller"});
});

app.get("/all",(req,res)=>{
    Leasing.find()
    .then((Leasings)=>{
        res.send(Leasings);
    })
    .catch((err)=>{
        res.send({message:"Error"});
    });
});

app.get("/one/:idLeasing", (req,res)=>{
    let id = req.params.idLeasing;

    Leasing.findOne({_id : id})
    .then((doc)=>{
        res.status(200).send(doc);
    })
    .catch(()=>{
        res.status(400).send({ message : "Error Find !"})
    })
});

app.delete('delete/:idLeasing',(req,res)=>{
    let id = req.params.idLeasing;

    Leasing.findByIdAndDelete({_id: id})
    .then((doc)=>{
        res.status(200).send({message: "Leasing Deleted ! "});
    })
    .catch(()=>{
        res.status(400).send({message : "Error Find! "});
    })
});



app.post("/add",(req,res)=>{
    let data = req.body;
    let  leasing= new Leasing({
        id_car: data.id_car,
        tranche: data.tranche,
        etat: data.etat,
        montant: data.montant,
    });
    
    taxe
     .save()
     .then((doc)=>{
        res.status(200).send({ message: "taxe add seccess"});
     })
        .catch((err)=>{
        res.status(400).send({message: "error "});
    });

});



module.exports = app;