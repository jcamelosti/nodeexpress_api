const restaurantesModel = require("./restaurantes.model");

module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("produtos", {
    restaurante_id: {
      type: Sequelize.INTEGER
    },
    nome: {
      type: Sequelize.STRING
    },
    descricao: {
      type: Sequelize.STRING
    },
    preco: {
      type: Sequelize.DECIMAL(10,2),
    }
  });

  return Produto;
};
