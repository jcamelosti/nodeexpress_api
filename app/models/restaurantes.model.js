module.exports = (sequelize, Sequelize) => {
  const Restaurante = sequelize.define("restaurantes", {
    nome: {
      type: Sequelize.STRING
    },
    endereco: {
      type: Sequelize.STRING
    },
    horario_funcionamento: {
      type: Sequelize.STRING
    },
  });

  return Restaurante;
};
