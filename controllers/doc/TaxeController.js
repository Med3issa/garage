const express = require("express");

const Taxe=require("../../models/doc/taxe")
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to taxe Controller" });
});

app.get("/all",(req,res)=>{
    Taxe.find()
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
    let  taxe= new Taxe({
        id_Car: data.id_Car,
        date_pay: data.date_pay,
        date_exp: data.date_exp,
        montant: data.montant,
    });
    
    taxe
     .save()
     .then((doc)=>{
        res.status(200).send({ message: "taxe add seccess"});
     })
        .catch((err)=>{
        res.status(400).send({err});
    });

});



module.exports = app;