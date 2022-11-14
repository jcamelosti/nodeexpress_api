const db = require("../models");
const Restaurante = db.restaurantes;
const Op = db.Sequelize.Op;

// Create and Save a new Restaurante
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Restaurante
  const rec = {
    nome: req.body.nome,
    endereco: req.body.endereco,
    horario_funcionamento: req.body.horario_funcionamento ? req.body.horario_funcionamento : '08:00 as 18:00'
  };

  // Save Restaurante in the database
  Restaurante.create(rec)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Restaurante."
      });
    });
};

// Retrieve all Restaurantes from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Restaurante.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Restaurantes."
      });
    });
};

// Find a single Restaurante with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Restaurante.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Restaurante with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Restaurante with id=" + id
      });
    });
};

// Update a Restaurante by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Restaurante.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Restaurante was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Restaurante with id=${id}. Maybe Restaurante was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Restaurante with id=" + id
      });
    });
};

// Delete a Restaurante with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Restaurante.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Restaurante was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Restaurante with id=${id}. Maybe Restaurante was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Restaurante with id=" + id
      });
    });
};

// Delete all Restaurantes from the database.
exports.deleteAll = (req, res) => {
  Restaurante.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Restaurantes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Restaurantes."
      });
    });
};

// find all published Restaurante
exports.findAllPublished = (req, res) => {
  Restaurante.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Restaurantes."
      });
    });
};