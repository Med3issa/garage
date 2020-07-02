const express = require("express");

const Assurance=require("../../models/doc/assurance");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to assurence Controller" });
});

app.get("/all",(req,res)=>{
    Assurance.find()
    .then((Taxes)=>{
        res.send(Taxes);
    })
    .catch((err)=>{
        res.send({message:"Error"});
    });
});
 
app.get("/one/:idTaxe", (req,res)=>{
    let id = req.params.idTaxe;

    Taxe.findOne({_id : id})
    .then((doc)=>{
        res.status(200).send(doc);
    })
    .catch(()=>{
        res.status(400).send({ message : "Error Find !"})
    })
});
      

app.delete('delete/:idTaxe',(req,res)=>{
    let id = req.params.idTaxe;

    Taxe.findByIdAndDelete({_id: id})
    .then((doc)=>{
        res.status(200).send({message: "Taxe Deleted ! "});
    })
    .catch(()=>{
        res.status(400).send({message : "Error Find! "});
    })
});


app.post("/add",(req,res)=>{
    let data = req.body;
    let  as= new Assurance({
        id_car: data.id_car,
       // date_pay: data.date_pay,
       //date_exp: data.date_exp,
        montant: data.montant,
    });
    
    as
     .save()
     .then((doc)=>{
        res.status(200).send({ message: "assuranse add seccess"});
     })
        .catch((err)=>{
        res.status(400).send({message: "error assssssss"});
    });

});



module.exports = app;