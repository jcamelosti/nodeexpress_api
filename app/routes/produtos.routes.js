/*module.exports = app => {
  const produto = require("../controllers/produto.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", produto.create);

  // Retrieve all Tutorials
  router.get("/", produto.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", produto.findOne);

  // Update a Tutorial with id
  router.put("/:id", produto.update);

  // Delete a Tutorial with id
  router.delete("/:id", produto.delete);

  // Delete all Tutorials
  router.delete("/", produto.deleteAll);

  //app.use('/api/produtos', router);
};*/

var express = require('express');
var router = express.Router();
const produtos = require("../controllers/produto.controller.js");
 
router.get("/", produtos.findAll);
 
module.exports = router;
