var express = require('express');
var router = express.Router();
const produtos = require("../controllers/produto.controller.js");
 
 // Create a new Produto
 router.post("/", produtos.create);

 // Retrieve all Produtos
 router.get("/", produtos.findAll);

 // Retrieve a single Produto with id
 router.get("/:id", produtos.findOne);

 // Update a Produto with id
 router.put("/:id", produtos.update);

 // Delete a Produto with id
 router.delete("/:id", produtos.delete);

 // Delete all Produtos
 router.delete("/", produtos.deleteAll);
 
module.exports = router;
