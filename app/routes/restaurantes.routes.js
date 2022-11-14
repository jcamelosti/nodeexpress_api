/*module.exports = app => {
  const restaurantes = require("../controllers/restaurante.controller.js");

  var router2 = require("express").Router();

  // Create a new Restaurante
  router.post("/", restaurantes.create);

  // Retrieve all Restaurantes
  router.get("/", restaurantes.findAll);

  // Retrieve a single Restaurante with id
  router.get("/:id", restaurantes.findOne);

  // Update a Restaurante with id
  router.put("/:id", restaurantes.update);

  // Delete a Restaurante with id
  router.delete("/:id", restaurantes.delete);

  // Delete all Restaurante
  router.delete("/", restaurantes.deleteAll);

  app.use('/api/restaurantes', router2);
};*/

var express = require('express');
var router = express.Router();

const restaurantes = require("../controllers/restaurante.controller.js");
 
// Retrieve all Restaurantes
router.get("/", restaurantes.findAll);

module.exports = router;