const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("./configdb/db");

const carController = require("./controllers/CarController");
const userController = require("./controllers/UserController");
const taxeController = require("./controllers/doc/TaxeController");
const assuranceController = require("./controllers/doc/AssuranceController");
const visiteController = require("./controllers/doc/VisiteController");
const leasingController = require("./controllers/doc/leasingController");
const vidangeController = require("./controllers/preventif/VidangeController");
const filtreController = require("./controllers/preventif/FiltreController");
const boujieController = require("./controllers/preventif/boujieController");
const chaineController = require("./controllers/preventif/chaineController");
const PneuController = require("./controllers/preventif/pneuController");
const entretienController = require("./controllers/curatif/entretienController");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/car", carController);
app.use("/user", userController);
app.use("/ass", assuranceController);
app.use("/taxe", taxeController);
app.use("/visite", visiteController);
app.use("/leasing", leasingController);
app.use("/vid", vidangeController);
app.use("/filtre", filtreController);
app.use("/boujie", boujieController);
app.use("/chaine", chaineController);
app.use("/pneu", PneuController);
app.use("/entretien", entretienController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the server !");
});

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log("server started !");
});
