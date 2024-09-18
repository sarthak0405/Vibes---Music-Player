const controllerss = require("./controller");

const express = require("express");
const route = express.Router();
route.post("/login", controllerss.checkpeople);
// route.post("/login", controllerss.setpeople);
route.post("/register", controllerss.setpeople);
route.post("/addplaylist/:usrnm", controllerss.addplaylist);
route.get("/getplaylist/:usrnm", controllerss.getplaylist);
module.exports = route;
