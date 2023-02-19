const Sequelize = require("sequelize");

const sequelize = new Sequelize("expensetrackerfullstack", "root", "Amitbhand68@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
