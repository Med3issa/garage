const mongoose = require("mongoose");

const leasingSchema=new mongoose.Schema({

id_Car:{
    type:String,
    required:true,
},
tranche:{
    type:Number,
    required:true,
},
etat:{
    type:String,
    required:true,
},
montant: {
    type: Number,
    required: true,
  },

});

const Leasing=mongoose.model("leasing",leasingSchema); 
module.exports=Leasing;